// GitHub Repositories API - Client-side JavaScript version
// Replaces github-repos.php for GitHub Pages compatibility

const GITHUB_USERNAME = 'VIP1019';
const CACHE_KEY = 'github_repos_cache';
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

// Featured/contributed projects to display
const FEATURED_PROJECTS = [
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
];

async function fetchGitHubRepos() {
    // Check cache first
    const cached = getFromCache(CACHE_KEY);
    if (cached) {
        return cached;
    }

    try {
        const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=12&sort=stars&direction=desc`,
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
        const allRepos = [...FEATURED_PROJECTS, ...processedRepos];
        
        // Save to cache
        saveToCache(CACHE_KEY, allRepos);
        
        return allRepos;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        
        // Return cached data if available, otherwise return featured projects
        const cached = getFromCache(CACHE_KEY);
        return cached || FEATURED_PROJECTS;
    }
}

// Cache helper functions
function getFromCache(key) {
    try {
        const cached = localStorage.getItem(key);
        if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            const now = Date.now();
            
            if (now - timestamp < CACHE_DURATION) {
                return data;
            }
        }
    } catch (error) {
        console.error('Cache read error:', error);
    }
    return null;
}

function saveToCache(key, data) {
    try {
        const cacheData = {
            data: data,
            timestamp: Date.now()
        };
        localStorage.setItem(key, JSON.stringify(cacheData));
    } catch (error) {
        console.error('Cache write error:', error);
    }
}
