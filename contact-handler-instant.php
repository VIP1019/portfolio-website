<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Error logging
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/debug.log');

// Log received data
$rawData = file_get_contents('php://input');
error_log(date('Y-m-d H:i:s') . " - Received: " . $rawData);

$response = ['success' => false, 'message' => ''];

try {
    // Get JSON data
    $data = json_decode($rawData, true);
    
    if (!$data) {
        throw new Exception('Invalid JSON data received');
    }
    
    // Validate required fields
    $name = trim($data['name'] ?? '');
    $email = trim($data['email'] ?? '');
    $subject = trim($data['subject'] ?? '');
    $message = trim($data['message'] ?? '');
    
    // Validation
    if (empty($name)) {
        throw new Exception('Name is required');
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Valid email is required');
    }
    
    if (empty($subject)) {
        throw new Exception('Subject is required');
    }
    
    if (empty($message)) {
        throw new Exception('Message is required');
    }
    
    if (strlen($message) < 10) {
        throw new Exception('Message must be at least 10 characters long');
    }
    
    // Save to messages.json
    $messageData = [
        'name' => $name,
        'email' => $email,
        'subject' => $subject,
        'message' => $message,
        'timestamp' => date('Y-m-d H:i:s'),
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
    ];
    
    $messagesFile = __DIR__ . '/messages.json';
    $messages = [];
    
    if (file_exists($messagesFile)) {
        $content = file_get_contents($messagesFile);
        $messages = json_decode($content, true) ?? [];
    }
    
    array_unshift($messages, $messageData);
    file_put_contents($messagesFile, json_encode($messages, JSON_PRETTY_PRINT));
    
    error_log(date('Y-m-d H:i:s') . " - Message saved to messages.json");
    
    // Create professional HTML email
    $to = 'princejheckjuan023@gmail.com';
    $emailSubject = "New Contact Form Message: " . $subject;
    
    $htmlMessage = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .field-label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
        .field-value { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; }
        .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 New Contact Message</h1>
            <p>You have received a new message from your portfolio website</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="field-label">👤 From:</div>
                <div class="field-value">' . htmlspecialchars($name) . '</div>
            </div>
            <div class="field">
                <div class="field-label">📧 Email:</div>
                <div class="field-value">' . htmlspecialchars($email) . '</div>
            </div>
            <div class="field">
                <div class="field-label">📝 Subject:</div>
                <div class="field-value">' . htmlspecialchars($subject) . '</div>
            </div>
            <div class="field">
                <div class="field-label">💬 Message:</div>
                <div class="field-value">' . nl2br(htmlspecialchars($message)) . '</div>
            </div>
            <div class="field">
                <div class="field-label">🕐 Received:</div>
                <div class="field-value">' . date('F j, Y \a\t g:i A') . '</div>
            </div>
            <div class="field">
                <div class="field-label">🌐 IP Address:</div>
                <div class="field-value">' . htmlspecialchars($_SERVER['REMOTE_ADDR'] ?? 'unknown') . '</div>
            </div>
        </div>
        <div class="footer">
            <p>This email was sent from your portfolio contact form</p>
            <p>princejheck.juan@email.com</p>
        </div>
    </div>
</body>
</html>';
    
    // Email headers
    $headers = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=UTF-8';
    $headers[] = 'From: Portfolio Contact Form <noreply@localhost>';
    $headers[] = 'Reply-To: ' . $email;
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    
    // Try to send email using mail() function
    $mailSent = @mail($to, $emailSubject, $htmlMessage, implode("\r\n", $headers));
    
    if ($mailSent) {
        error_log(date('Y-m-d H:i:s') . " - Email sent successfully via mail()");
    } else {
        error_log(date('Y-m-d H:i:s') . " - WARNING: mail() returned false");
    }
    
    // ALWAYS return success since message is saved
    // Email delivery is secondary
    $response['success'] = true;
    $response['message'] = 'Your message has been sent successfully! We will get back to you soon.';
    
    if (!$mailSent) {
        error_log(date('Y-m-d H:i:s') . " - Note: Email notification may require SMTP configuration");
        error_log(date('Y-m-d H:i:s') . " - Message is saved in messages.json and can be viewed in admin panel");
    }
    
} catch (Exception $e) {
    error_log(date('Y-m-d H:i:s') . " - ERROR: " . $e->getMessage());
    $response['message'] = $e->getMessage();
    http_response_code(400);
}

echo json_encode($response);
