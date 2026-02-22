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
    
    // Send to FormSubmit.co
    $formsubmitUrl = 'https://formsubmit.co/ajax/princejheckjuan023@gmail.com';
    
    $postData = [
        'name' => $name,
        'email' => $email,
        'subject' => $subject,
        'message' => $message,
        '_template' => 'table',
        '_captcha' => 'false'
    ];
    
    $ch = curl_init($formsubmitUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/x-www-form-urlencoded',
        'Accept: application/json'
    ]);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    
    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);
    
    if ($curlError) {
        error_log(date('Y-m-d H:i:s') . " - CURL Error: " . $curlError);
    }
    
    error_log(date('Y-m-d H:i:s') . " - FormSubmit Response Code: " . $httpCode);
    error_log(date('Y-m-d H:i:s') . " - FormSubmit Response: " . $result);
    
    // Success response
    $response['success'] = true;
    $response['message'] = 'Your message has been sent successfully! We will get back to you soon.';
    
    error_log(date('Y-m-d H:i:s') . " - SUCCESS: Email sent via FormSubmit");
    
} catch (Exception $e) {
    error_log(date('Y-m-d H:i:s') . " - ERROR: " . $e->getMessage());
    $response['message'] = $e->getMessage();
    http_response_code(400);
}

echo json_encode($response);
