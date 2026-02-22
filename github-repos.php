<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

$username = 'VIP1019';
$cache_file = 'github_repos_cache.json';
$cache_duration = 3600;

// Featured projects (contributed projects to display at top)
$featured_projects = [
    [
        'id' => 0,
        'name' => 'StaCruzPropertyCustodianSystem',
        'full_name' => 'jailenannm-web/StaCruzPropertyCustodianSystem',
        'description' => 'A comprehensive property custodian management system for Sta. Cruz Laguna - Streamlines inventory management, tracking, and reporting for government properties.',
        'url' => 'https://github.com/jailenannm-web/StaCruzPropertyCustodianSystem',
        'stars' => 0,
        'forks' => 0,
        'watchers' => 0,
        'language' => 'PHP',
        'topics' => ['property-management', 'inventory-system', 'government', 'php'],
        'created_at' => '2024-01-01T00:00:00Z',
        'updated_at' => '2024-01-01T00:00:00Z',
        'is_contributed' => true
    ]
];

if (file_exists($cache_file) && (time() - filemtime($cache_file)) < $cache_duration) {
    $cached_data = json_decode(file_get_contents($cache_file), true);
    if ($cached_data) {
        // Add featured projects at the beginning
        $cached_data = array_merge($featured_projects, $cached_data);
        echo json_encode($cached_data);
        exit;
    }
}

$url = "https://api.github.com/users/$username/repos?per_page=12&sort=stars&direction=desc";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'Portfolio-Website');
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code === 200) {
    $repos = json_decode($response, true);
    $processed_repos = [];
    
    foreach ($repos as $repo) {
        $processed_repo = [
            'id' => $repo['id'],
            'name' => $repo['name'],
            'full_name' => $repo['full_name'],
            'description' => $repo['description'],
            'url' => $repo['html_url'],
            'stars' => $repo['stargazers_count'],
            'forks' => $repo['forks_count'],
            'watchers' => $repo['watchers_count'],
            'language' => $repo['language'],
            'topics' => $repo['topics'] ?? [],
            'created_at' => $repo['created_at'],
            'updated_at' => $repo['updated_at']
        ];
        
        $processed_repos[] = $processed_repo;
    }
    
    // Add featured projects at the beginning
    $processed_repos = array_merge($featured_projects, $processed_repos);
    
    file_put_contents($cache_file, json_encode($processed_repos));
    echo json_encode($processed_repos);
} else {
    // Even on error, show featured projects
    if (file_exists($cache_file)) {
        $cached_data = json_decode(file_get_contents($cache_file), true);
        $cached_data = array_merge($featured_projects, $cached_data);
        echo json_encode($cached_data);
    } else {
        echo json_encode($featured_projects);
    }
}
?>
