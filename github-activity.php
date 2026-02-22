<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

$username = 'VIP1019';
$cache_file = 'github_activity_cache.json';
$cache_duration = 3600;

if (file_exists($cache_file) && (time() - filemtime($cache_file)) < $cache_duration) {
    $cached_data = json_decode(file_get_contents($cache_file), true);
    if ($cached_data) {
        echo json_encode($cached_data);
        exit;
    }
}

$url = "https://api.github.com/users/$username/events?per_page=20";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'Portfolio-Website');
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code === 200) {
    $events = json_decode($response, true);
    $processed_events = [];
    
    foreach ($events as $event) {
        $processed_event = [
            'id' => $event['id'],
            'type' => $event['type'],
            'repo' => $event['repo']['name'],
            'repo_url' => 'https://github.com/' . $event['repo']['name'],
            'created_at' => $event['created_at'],
            'url' => '',
            'message' => '',
            'icon' => 'fa-github',
            'description' => ''
        ];
        
        switch ($event['type']) {
            case 'PushEvent':
                $processed_event['icon'] = 'fa-code-branch';
                if (isset($event['payload']['commits']) && count($event['payload']['commits']) > 0) {
                    $processed_event['message'] = $event['payload']['commits'][0]['message'];
                    $processed_event['description'] = count($event['payload']['commits']) . ' commit(s)';
                } else {
                    $processed_event['message'] = 'Pushed to ' . $event['repo']['name'];
                }
                break;
            case 'PullRequestEvent':
                $processed_event['icon'] = 'fa-code-pull-request';
                if (isset($event['payload']['pull_request'])) {
                    $pr = $event['payload']['pull_request'];
                    $processed_event['description'] = $pr['title'] ?? 'Pull Request';
                    $processed_event['url'] = $pr['html_url'] ?? '';
                }
                $processed_event['message'] = 'Pull request on ' . $event['repo']['name'];
                break;
            case 'IssuesEvent':
                $processed_event['icon'] = 'fa-circle-exclamation';
                if (isset($event['payload']['issue'])) {
                    $issue = $event['payload']['issue'];
                    $processed_event['description'] = $issue['title'] ?? 'Issue';
                    $processed_event['url'] = $issue['html_url'] ?? '';
                }
                $processed_event['message'] = 'Issue on ' . $event['repo']['name'];
                break;
            case 'IssueCommentEvent':
                $processed_event['icon'] = 'fa-comment';
                if (isset($event['payload']['comment'])) {
                    $comment = $event['payload']['comment'];
                    $processed_event['description'] = substr($comment['body'] ?? '', 0, 100);
                    $processed_event['url'] = $comment['html_url'] ?? '';
                }
                $processed_event['message'] = 'Commented on issue in ' . $event['repo']['name'];
                break;
            case 'WatchEvent':
                $processed_event['icon'] = 'fa-star';
                $processed_event['message'] = 'Starred ' . $event['repo']['name'];
                $processed_event['description'] = 'Added to favorites';
                break;
            case 'ForkEvent':
                $processed_event['icon'] = 'fa-code-branch';
                if (isset($event['payload']['forkee'])) {
                    $fork = $event['payload']['forkee'];
                    $processed_event['url'] = $fork['html_url'] ?? '';
                }
                $processed_event['message'] = 'Forked ' . $event['repo']['name'];
                $processed_event['description'] = 'Forked repository';
                break;
            case 'CreateEvent':
                $processed_event['icon'] = 'fa-plus';
                $processed_event['message'] = 'Created in ' . $event['repo']['name'];
                $processed_event['description'] = ucfirst($event['payload']['ref_type'] ?? 'resource') . ' created';
                break;
            case 'ReleaseEvent':
                $processed_event['icon'] = 'fa-tag';
                if (isset($event['payload']['release'])) {
                    $release = $event['payload']['release'];
                    $processed_event['description'] = $release['tag_name'] ?? 'Release';
                    $processed_event['url'] = $release['html_url'] ?? '';
                }
                $processed_event['message'] = 'Released in ' . $event['repo']['name'];
                break;
            default:
                $processed_event['message'] = $event['type'] . ' on ' . $event['repo']['name'];
                $processed_event['description'] = 'Activity';
        }
        
        if (empty($processed_event['url'])) {
            $processed_event['url'] = $processed_event['repo_url'];
        }
        
        $processed_events[] = $processed_event;
    }
    
    file_put_contents($cache_file, json_encode($processed_events));
    echo json_encode($processed_events);
} else {
    if (file_exists($cache_file)) {
        echo file_get_contents($cache_file);
    } else {
        echo json_encode(['error' => 'Failed to fetch GitHub activity', 'code' => $http_code]);
    }
}
?>
