<?php
/**
 * LinkedIn Embedded Posts Handler
 * Uses LinkedIn's official embed feature to display real posts
 */

header('Content-Type: application/json');

/**
 * Get LinkedIn Embedded Posts
 * Each post uses LinkedIn's embed iframe
 */
function getLinkedInEmbeddedPosts() {
    // Your real LinkedIn embedded posts
    // Generated on 2/22/2026 at 9:05:32 PM
    return [
        [
            'id' => 'embed1',
            'title' => 'National Finalist - Development Academy of the Philippines (2025)',
            'embedCode' => '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7426281432005627905" height="627" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
            'type' => 'UI/UX Design',
            'hasEmbed' => true
        ],
        [
            'id' => 'embed2',
            'title' => 'Credentials from the past year',
            'embedCode' => '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7426285238349205504" height="585" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
            'type' => 'AI/ML',
            'hasEmbed' => true
        ],
        [
            'id' => 'embed3',
            'title' => 'DementAId - AI-Powered Smart Anklet and Mobile Application',
            'embedCode' => '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7426287303142088704" height="921" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
            'type' => 'Web Development',
            'hasEmbed' => true
        ],
        [
            'id' => 'embed4',
            'title' => 'Mono - Terminal-Based Card Pairing Game (Java Project)',
            'embedCode' => '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7431314070546468864" height="1433" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
            'type' => 'Software Development',
            'hasEmbed' => true
        ],
        [
            'id' => 'embed5',
            'title' => 'First-Year Project: CNSC Motorpool Management & Reservation System (CMRS)',
            'embedCode' => '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7431326520792559616" height="1076" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
            'type' => 'Mobile App',
            'hasEmbed' => true
        ]
    ];
}

// Main execution
try {
    $posts = getLinkedInEmbeddedPosts();
    echo json_encode([
        'success' => true,
        'posts' => $posts,
        'count' => count($posts),
        'type' => 'embedded'
    ]);
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage(),
        'posts' => []
    ]);
}
?>