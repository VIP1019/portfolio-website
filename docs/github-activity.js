// GitHub Activity API - Client-side JavaScript version
// Replaces github-activity.php for GitHub Pages compatibility

const ACTIVITY_CACHE_KEY = 'github_activity_cache';
const ACTIVITY_CACHE_DURATION = 3600000; // 1 hour

async function fetchGitHubActivity() {
    // Check cache first
    const cached = getFromCache(ACTIVITY_CACHE_KEY);
    if (cached) {
        return cached;
    }

    try {
        const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=20`,
            {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'User-Agent': 'Portfolio-Website'
                }
            }
        );

        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}`);
        }

        const events = await response.json();
        
        // Process events
        const processedEvents = events.map(event => {
            const baseEvent = {
                id: event.id,
                type: event.type,
                repo: event.repo.name,
                repo_url: `https://github.com/${event.repo.name}`,
                created_at: event.created_at,
                url: '',
                message: '',
                icon: 'fa-github',
                description: ''
            };

            switch (event.type) {
                case 'PushEvent':
                    baseEvent.icon = 'fa-code-branch';
                    if (event.payload.commits && event.payload.commits.length > 0) {
                        baseEvent.message = event.payload.commits[0].message;
                        baseEvent.description = `${event.payload.commits.length} commit(s)`;
                    } else {
                        baseEvent.message = `Pushed to ${event.repo.name}`;
                    }
                    break;
                    
                case 'PullRequestEvent':
                    baseEvent.icon = 'fa-code-pull-request';
                    if (event.payload.pull_request) {
                        baseEvent.description = event.payload.pull_request.title || 'Pull Request';
                        baseEvent.url = event.payload.pull_request.html_url || '';
                    }
                    baseEvent.message = `Pull request on ${event.repo.name}`;
                    break;
                    
                case 'IssuesEvent':
                    baseEvent.icon = 'fa-circle-exclamation';
                    if (event.payload.issue) {
                        baseEvent.description = event.payload.issue.title || 'Issue';
                        baseEvent.url = event.payload.issue.html_url || '';
                    }
                    baseEvent.message = `Issue on ${event.repo.name}`;
                    break;
                    
                case 'IssueCommentEvent':
                    baseEvent.icon = 'fa-comment';
                    if (event.payload.comment) {
                        baseEvent.description = (event.payload.comment.body || '').substring(0, 100);
                        baseEvent.url = event.payload.comment.html_url || '';
                    }
                    baseEvent.message = `Commented on issue in ${event.repo.name}`;
                    break;
                    
                case 'WatchEvent':
                    baseEvent.icon = 'fa-star';
                    baseEvent.message = `Starred ${event.repo.name}`;
                    baseEvent.description = 'Added to favorites';
                    break;
                    
                case 'ForkEvent':
                    baseEvent.icon = 'fa-code-branch';
                    if (event.payload.forkee) {
                        baseEvent.url = event.payload.forkee.html_url || '';
                    }
                    baseEvent.message = `Forked ${event.repo.name}`;
                    baseEvent.description = 'Forked repository';
                    break;
                    
                case 'CreateEvent':
                    baseEvent.icon = 'fa-plus';
                    baseEvent.message = `Created in ${event.repo.name}`;
                    baseEvent.description = `${(event.payload.ref_type || 'resource').charAt(0).toUpperCase() + (event.payload.ref_type || 'resource').slice(1)} created`;
                    break;
                    
                case 'ReleaseEvent':
                    baseEvent.icon = 'fa-tag';
                    if (event.payload.release) {
                        baseEvent.description = event.payload.release.tag_name || 'Release';
                        baseEvent.url = event.payload.release.html_url || '';
                    }
                    baseEvent.message = `Released in ${event.repo.name}`;
                    break;
                    
                default:
                    baseEvent.message = `${event.type} on ${event.repo.name}`;
                    baseEvent.description = 'Activity';
            }

            if (!baseEvent.url) {
                baseEvent.url = baseEvent.repo_url;
            }

            return baseEvent;
        });

        // Save to cache
        saveToCache(ACTIVITY_CACHE_KEY, processedEvents);
        
        return processedEvents;
    } catch (error) {
        console.error('Error fetching GitHub activity:', error);
        
        // Return cached data if available
        const cached = getFromCache(ACTIVITY_CACHE_KEY);
        return cached || [];
    }
}
