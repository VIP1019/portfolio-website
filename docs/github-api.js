// GitHub API Handler - Client-side JavaScript version
// Fetches repositories directly from GitHub API

const GITHUB_CONFIG = {
    username: 'VIP1019',
    cacheKey: 'github_repos_cache',
    cacheDuration: 3600000, // 1 hour in milliseconds
    featuredProjects: [
        {
            id: 0,
            name: 'StaCruzPropertyCustodianSystem',
            full_name: 'jailenannm-web/StaCruzPropertyCustodianSystem',
            description: 'A comprehensive property custodian management system for Sta. Cruz Laguna - Streamlines inventory management, tracking, and reporting for government properties.',
            url: 'https://github.com/jailenannm-web/StaCruzPropertyCustodianSystem',
            stars: 0,
            forks: 0,
            watchers: 0,
            language: 'PHP',
            topics: ['property-management', 'inventory-system', 'government', 'php'],
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-01T00:00:00Z',
            is_contributed: true
        }
    ]
};

async function fetchGitHubRepos() {
    // Check cache first
    const cached = getCache(GITHUB_CONFIG.cacheKey);
    if (cached) {
        return cached;
    }

    try {
        const response = await fetch(
            `https://api.github.com/users/${GITHUB_CONFIG.username}/repos?per_page=12&sort=updated&direction=desc`,
            {
                headers: {
                    'Accept': 'application/vnd.github.v3+json'
                }
            }
        );

        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}`);
        }

        const repos = await response.json();
        
        // Process repositories
        const processedRepos = repos.map(repo => ({
            id: repo.id,
            name: repo.name,
            full_name: repo.full_name,
            description: repo.description,
            url: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            watchers: repo.watchers_count,
            language: repo.language,
            topics: repo.topics || [],
            created_at: repo.created_at,
            updated_at: repo.updated_at
        }));

        // Combine featured projects with user repos
        const allRepos = [...GITHUB_CONFIG.featuredProjects, ...processedRepos];
        
        // Cache the results
        setCache(GITHUB_CONFIG.cacheKey, allRepos);
        
        return allRepos;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        
        // Return cached data if available, otherwise return featured projects only
        const cached = getCache(GITHUB_CONFIG.cacheKey);
        return cached || GITHUB_CONFIG.featuredProjects;
    }
}

async function fetchGitHubActivity() {
    const cacheKey = 'github_activity_cache';
    
    // Check cache first
    const cached = getCache(cacheKey);
    if (cached) {
        return cached;
    }

    try {
        const response = await fetch(
            `https://api.github.com/users/${GITHUB_CONFIG.username}/events?per_page=20`,
            {
                headers: {
                    'Accept': 'application/vnd.github.v3+json'
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
                    
                case 'CreateEvent':
                    baseEvent.icon = 'fa-plus';
                    baseEvent.message = `Created in ${event.repo.name}`;
                    baseEvent.description = `${event.payload.ref_type || 'resource'} created`;
                    break;
                    
                case 'WatchEvent':
                    baseEvent.icon = 'fa-star';
                    baseEvent.message = `Starred ${event.repo.name}`;
                    baseEvent.description = 'Added to favorites';
                    break;
                    
                case 'ForkEvent':
                    baseEvent.icon = 'fa-code-branch';
                    baseEvent.message = `Forked ${event.repo.name}`;
                    baseEvent.description = 'Forked repository';
                    if (event.payload.forkee) {
                        baseEvent.url = event.payload.forkee.html_url;
                    }
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

        // Cache the results
        setCache(cacheKey, processedEvents);
        
        return processedEvents;
    } catch (error) {
        console.error('Error fetching GitHub activity:', error);
        
        // Return cached data if available
        const cached = getCache(cacheKey);
        return cached || [];
    }
}

// Cache helper functions
function getCache(key) {
    try {
        const cached = localStorage.getItem(key);
        if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            const now = new Date().getTime();
            
            // Check if cache is still valid
            if (now - timestamp < GITHUB_CONFIG.cacheDuration) {
                return data;
            }
        }
    } catch (error) {
        console.error('Error reading cache:', error);
    }
    return null;
}

function setCache(key, data) {
    try {
        const cacheData = {
            data: data,
            timestamp: new Date().getTime()
        };
        localStorage.setItem(key, JSON.stringify(cacheData));
    } catch (error) {
        console.error('Error writing cache:', error);
    }
}
