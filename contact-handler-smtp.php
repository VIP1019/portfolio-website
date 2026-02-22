<?php
/**
 * Enhanced Contact Handler with SMTP Support
 * This version uses PHPMailer for reliable email delivery
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once 'smtp-config.php';

$data = json_decode(file_get_contents('php://input'), true);
$response = ['success' => false, 'message' => 'Error processing request'];

// Debug: Log incoming data
file_put_contents('debug.log', date('Y-m-d H:i:s') . " - Received: " . json_encode($data) . "\n", FILE_APPEND);

// Validate required fields
if (!isset($data['name']) || !isset($data['email']) || !isset($data['subject']) || !isset($data['message'])) {
    $response['message'] = 'Missing required fields';
    http_response_code(400);
    echo json_encode($response);
    exit;
}

// Sanitize and validate input
$name = htmlspecialchars(trim($data['name']), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(trim($data['subject']), ENT_QUOTES, 'UTF-8');
$messageContent = htmlspecialchars(trim($data['message']), ENT_QUOTES, 'UTF-8');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = 'Invalid email format';
    echo json_encode($response);
    exit;
}

if (strlen($name) < 2 || strlen($name) > 50) {
    $response['message'] = 'Name must be between 2 and 50 characters';
    echo json_encode($response);
    exit;
}

if (strlen($subject) < 3 || strlen($subject) > 100) {
    $response['message'] = 'Subject must be between 3 and 100 characters';
    echo json_encode($response);
    exit;
}

if (strlen($messageContent) < 10 || strlen($messageContent) > 5000) {
    $response['message'] = 'Message must be between 10 and 5000 characters';
    echo json_encode($response);
    exit;
}

// Save to messages.json file
$messagesFile = 'messages.json';
$messages = [];

if (file_exists($messagesFile)) {
    $messagesContent = file_get_contents($messagesFile);
    $decoded = json_decode($messagesContent, true);
    if (is_array($decoded)) {
        $messages = $decoded;
    }
}

$newMessage = [
    'name' => $name,
    'email' => $email,
    'subject' => $subject,
    'message' => $messageContent,
    'timestamp' => date('Y-m-d H:i:s'),
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
];

array_unshift($messages, $newMessage);

if (count($messages) > 100) {
    array_pop($messages);
}

$jsonContent = json_encode($messages, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
$writeResult = file_put_contents($messagesFile, $jsonContent);

if ($writeResult === false) {
    $response['message'] = 'Failed to save message. Check file permissions.';
    file_put_contents('debug.log', date('Y-m-d H:i:s') . " - ERROR: Failed to write file\n", FILE_APPEND);
    http_response_code(500);
    echo json_encode($response);
    exit;
}

// Try to send email using PHPMailer if available
$emailSent = false;

// Check if PHPMailer is available
if (file_exists('PHPMailer/PHPMailer.php')) {
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    require 'PHPMailer/Exception.php';
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    try {
        $mail = new PHPMailer(true);
        
        // Server settings
        $mail->isSMTP();
        $mail->Host = SMTP_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = SMTP_USERNAME;
        $mail->Password = SMTP_PASSWORD;
        $mail->SMTPSecure = SMTP_SECURE;
        $mail->Port = SMTP_PORT;
        
        // Recipients
        $mail->setFrom(SMTP_USERNAME, 'Portfolio Website');
        $mail->addAddress(RECIPIENT_EMAIL);
        $mail->addReplyTo($email, $name);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = "Portfolio Contact: $subject";
        
        $emailBody = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; }
                .header { background: linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: white; padding: 30px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #7c3aed; }
                .value { margin-top: 5px; padding: 10px; background: #f9f9f9; border-left: 3px solid #7c3aed; }
                .footer { margin-top: 20px; text-align: center; color: #666; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2>📧 New Portfolio Contact Message</h2>
                </div>
                <div class='content'>
                    <div class='field'>
                        <div class='label'>From:</div>
                        <div class='value'>$name</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Email:</div>
                        <div class='value'><a href='mailto:$email'>$email</a></div>
                    </div>
                    <div class='field'>
                        <div class='label'>Subject:</div>
                        <div class='value'>$subject</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Message:</div>
                        <div class='value'>$messageContent</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Received:</div>
                        <div class='value'>" . date('F d, Y \a\t h:i A') . "</div>
                    </div>
                    <div class='footer'>
                        <p>This message was sent from your portfolio website contact form.</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
        ";
        
        $mail->Body = $emailBody;
        $mail->AltBody = "New contact from $name ($email)\n\nSubject: $subject\n\nMessage:\n$messageContent";
        
        $mail->send();
        $emailSent = true;
        file_put_contents('debug.log', date('Y-m-d H:i:s') . " - SUCCESS: Email sent via SMTP to " . RECIPIENT_EMAIL . "\n", FILE_APPEND);
    } catch (Exception $e) {
        file_put_contents('debug.log', date('Y-m-d H:i:s') . " - ERROR: PHPMailer failed - {$mail->ErrorInfo}\n", FILE_APPEND);
    }
} else {
    // Fallback to PHP's mail() function
    $toEmail = 'princejheckjuan023@gmail.com';
    $emailSubject = "Portfolio Contact: $subject";
    
    $emailBody = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; }
            .header { background: linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: white; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #7c3aed; }
            .value { margin-top: 5px; padding: 10px; background: #f9f9f9; border-left: 3px solid #7c3aed; }
            .footer { margin-top: 20px; text-align: center; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>📧 New Portfolio Contact Message</h2>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='label'>From:</div>
                    <div class='value'>$name</div>
                </div>
                <div class='field'>
                    <div class='label'>Email:</div>
                    <div class='value'><a href='mailto:$email'>$email</a></div>
                </div>
                <div class='field'>
                    <div class='label'>Subject:</div>
                    <div class='value'>$subject</div>
                </div>
                <div class='field'>
                    <div class='label'>Message:</div>
                    <div class='value'>$messageContent</div>
                </div>
                <div class='field'>
                    <div class='label'>Received:</div>
                    <div class='value'>" . date('F d, Y \a\t h:i A') . "</div>
                </div>
                <div class='footer'>
                    <p>This message was sent from your portfolio website contact form.</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Portfolio Website <noreply@portfolio.com>\r\n";
    $headers .= "Reply-To: $name <$email>\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    $emailSent = @mail($toEmail, $emailSubject, $emailBody, $headers);
    
    if ($emailSent) {
        file_put_contents('debug.log', date('Y-m-d H:i:s') . " - SUCCESS: Email sent via mail() to $toEmail\n", FILE_APPEND);
    } else {
        file_put_contents('debug.log', date('Y-m-d H:i:s') . " - WARNING: mail() function may have failed\n", FILE_APPEND);
    }
}

// Return success regardless of email status (message is saved)
$response['success'] = true;
$response['message'] = 'Message sent successfully!';
if ($emailSent) {
    $response['email_sent'] = true;
} else {
    $response['email_sent'] = false;
    $response['note'] = 'Message saved but email notification may not have been sent. Please check SMTP configuration.';
}

file_put_contents('debug.log', date('Y-m-d H:i:s') . " - SUCCESS: Message saved\n", FILE_APPEND);

http_response_code(200);
echo json_encode($response);
?>
