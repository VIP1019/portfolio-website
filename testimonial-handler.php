<?php
header('Content-Type: application/json');

// Get incoming data
$data = json_decode(file_get_contents('php://input'), true);

// Initialize response
$response = [
    'success' => false,
    'message' => 'Error processing request'
];

// Validate required fields
if (!isset($data['name']) || !isset($data['email']) || !isset($data['rating']) || !isset($data['feedback'])) {
    http_response_code(400);
    echo json_encode($response);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars(trim($data['name']), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$rating = intval($data['rating']);
$feedback = htmlspecialchars(trim($data['feedback']), ENT_QUOTES, 'UTF-8');

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = 'Invalid email format';
    echo json_encode($response);
    exit;
}

// Validate rating
if ($rating < 1 || $rating > 5) {
    $response['message'] = 'Rating must be between 1 and 5';
    echo json_encode($response);
    exit;
}

// Validate input lengths
if (strlen($name) < 2 || strlen($name) > 50) {
    $response['message'] = 'Name must be between 2 and 50 characters';
    echo json_encode($response);
    exit;
}

if (strlen($feedback) < 10 || strlen($feedback) > 1000) {
    $response['message'] = 'Feedback must be between 10 and 1000 characters';
    echo json_encode($response);
    exit;
}

try {
    // Create a JSON file to store testimonials (alternative to database)
    $testimonialsFile = 'testimonials.json';
    $testimonials = [];
    
    if (file_exists($testimonialsFile)) {
        $testimonialsContent = file_get_contents($testimonialsFile);
        $testimonials = json_decode($testimonialsContent, true) ?? [];
    }
    
    // Add new testimonial
    $newTestimonial = [
        'name' => $name,
        'email' => $email,
        'rating' => $rating,
        'feedback' => $feedback,
        'timestamp' => date('Y-m-d H:i:s'),
        'ip' => $_SERVER['REMOTE_ADDR'],
        'approved' => true // Auto-approved for immediate display
    ];
    
    array_unshift($testimonials, $newTestimonial);
    
    // Keep only last 100 testimonials
    if (count($testimonials) > 100) {
        array_pop($testimonials);
    }
    
    // Save testimonials
    if (file_put_contents($testimonialsFile, json_encode($testimonials, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES))) {
        $response['success'] = true;
        $response['message'] = 'Testimonial submitted successfully!';
        
        // Log the testimonial submission
        $logMessage = "[" . date('Y-m-d H:i:s') . "] New testimonial from $name ($email) - Rating: $rating/5\n";
        file_put_contents('testimonial-log.txt', $logMessage, FILE_APPEND);
    } else {
        $response['message'] = 'Failed to save testimonial';
    }
} catch (Exception $e) {
    $response['message'] = 'Error: ' . $e->getMessage();
}

http_response_code($response['success'] ? 200 : 500);
echo json_encode($response);
?>
