<?php
/**
 * OpenAI Chatbot Backend
 * Handles secure API calls to OpenAI GPT
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'openai-config.php';

// Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get the user's message
$input = json_decode(file_get_contents('php://input'), true);
$userMessage = isset($input['message']) ? trim($input['message']) : '';

if (empty($userMessage)) {
    http_response_code(400);
    echo json_encode(['error' => 'Message is required']);
    exit;
}

// Check if API key is configured
if (OPENAI_API_KEY === 'your-api-key-here') {
    // Fallback response when API key is not configured
    echo json_encode([
        'success' => false,
        'message' => 'OpenAI API is not configured yet. Please add your API key to openai-config.php',
        'fallback' => true
    ]);
    exit;
}

// Prepare the API request
$data = [
    'model' => OPENAI_MODEL,
    'messages' => [
        [
            'role' => 'system',
            'content' => getPortfolioContext()
        ],
        [
            'role' => 'user',
            'content' => $userMessage
        ]
    ],
    'max_tokens' => OPENAI_MAX_TOKENS,
    'temperature' => OPENAI_TEMPERATURE
];

// Initialize cURL
$ch = curl_init('https://api.openai.com/v1/chat/completions');

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($data),
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . OPENAI_API_KEY
    ],
    CURLOPT_TIMEOUT => 30
]);

// Execute the request
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

// Handle errors
if ($error) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Connection error: ' . $error,
        'fallback' => true
    ]);
    exit;
}

if ($httpCode !== 200) {
    http_response_code($httpCode);
    echo json_encode([
        'success' => false,
        'error' => 'OpenAI API error',
        'response' => json_decode($response),
        'fallback' => true
    ]);
    exit;
}

// Parse and return the response
$responseData = json_decode($response, true);

if (isset($responseData['choices'][0]['message']['content'])) {
    echo json_encode([
        'success' => true,
        'message' => $responseData['choices'][0]['message']['content'],
        'fallback' => false
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Invalid response from OpenAI',
        'fallback' => true
    ]);
}
?>
