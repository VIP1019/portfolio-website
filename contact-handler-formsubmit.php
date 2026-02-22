<?php
/**
 * Contact Handler with FormSubmit.co Integration
 * This uses FormSubmit.co - a free service that sends form submissions to your email
 * No SMTP configuration needed!
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$response = ['success' => false, 'message' => 'Error processing request'];

// Debug log
file_put_contents('debug.log', date('Y-m-d H:i:s') . " - Received: " . json_encode($data) . "\n", FILE_APPEND);

// Validate required fields
if (!isset($data['name']) || !isset($data['email']) || !isset($data['subject']) || !isset($data['message'])) {
    $response['message'] = 'Missing required fields';
    http_response_code(400);
    echo json_encode($response);
    exit;
}

// Sanitize input
$name = htmlspecialchars(trim($data['name']), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(trim($data['subject']), ENT_QUOTES, 'UTF-8');
$messageContent = htmlspecialchars(trim($data['message']), ENT_QUOTES, 'UTF-8');

// Validation
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

if (strlen($messageContent) < 10) {
    $response['message'] = 'Message must be at least 10 characters long';
    http_response_code(400);
    echo json_encode($response);
    exit;
}

// Save to messages.json (backup)
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
file_put_contents($messagesFile, $jsonContent);

// Send email via FormSubmit.co API
$formsubmitUrl = 'https://formsubmit.co/ajax/princejheckjuan023@gmail.com';

$emailData = [
    'name' => $name,
    'email' => $email,
    'subject' => "Portfolio Contact: $subject",
    'message' => $messageContent,
    '_template' => 'box', // Use FormSubmit's styled template
    '_captcha' => 'false' // Disable captcha for API
];

$ch = curl_init($formsubmitUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($emailData));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Accept: application/json'
]);

$formsubmitResponse = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$response['success'] = true;
$response['message'] = 'Message sent successfully!';

if ($httpCode == 200) {
    file_put_contents('debug.log', date('Y-m-d H:i:s') . " - SUCCESS: Email sent via FormSubmit to princejheckjuan023@gmail.com\n", FILE_APPEND);
    $response['email_status'] = 'sent';
} else {
    file_put_contents('debug.log', date('Y-m-d H:i:s') . " - WARNING: FormSubmit returned code $httpCode\n", FILE_APPEND);
    $response['email_status'] = 'saved_only';
    $response['note'] = 'Message saved. Email notification may be delayed.';
}

file_put_contents('debug.log', date('Y-m-d H:i:s') . " - SUCCESS: Message saved to JSON\n", FILE_APPEND);

http_response_code(200);
echo json_encode($response);
?>
