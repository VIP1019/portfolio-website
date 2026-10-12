// GitHub Repositories API - Client-side JavaScript version
// Replaces github-repos.php for GitHub Pages compatibility

const GITHUB_USERNAME = 'VIP1019';
const GITHUB_CACHE_KEY = 'github_repos_cache_v3';
const GITHUB_CACHE_DURATION = 3600000; // 1 hour

// Complete repository list from user's GitHub profile & contributions
const MASTER_REPOSITORIES = [
    {
        name: 'StaCruzPropertyCustodianSystem',
        full_name: 'jailenannm/StaCruzPropertyCustodianSystem',
        description: 'A comprehensive property custodian management system for Sta. Cruz Laguna - Streamlines inventory management, tracking, and reporting for government properties.',
        url: 'https://github.com/jailenannm-web/StaCruzPropertyCustodianSystem',
        stars: 0,
        forks: 0,
        language: 'PHP',
        is_contributed: true
    },
    {
        name: 'Pundar-stellar',
        full_name: 'VIP1019/Pundar-stellar',
        description: 'An all-in-one decentralized financial platform leveraging Stellar and Soroban to transform everyday spending into savings, investments, and a verifiable financial reputation.',
        url: 'https://github.com/VIP1019/Pundar-stellar',
        stars: 1,
        forks: 0,
        language: 'Kotlin'
    },
    {
        name: 'portfolio-website',
        full_name: 'VIP1019/portfolio-website',
        description: 'Personal IT Portfolio Website with API integrations, dynamic project showcases, and transaction features.',
        url: 'https://github.com/VIP1019/portfolio-website',
        stars: 1,
        forks: 0,
        language: 'HTML'
    },
    {
        name: 'CCMS-GRACE',
        full_name: 'VIP1019/CCMS-GRACE',
        description: 'College of Computing and Multimedia Studies Academic and Resource Management Portal.',
        url: 'https://github.com/VIP1019/CCMS-GRACE',
        stars: 0,
        forks: 0,
        language: 'HTML'
    },
    {
        name: 'pundar-gcash-landing',
        full_name: 'VIP1019/pundar-gcash-landing',
        description: 'Pundar GCash Integration & Landing Page - Digital financial services on-ramp and off-ramp interface.',
        url: 'https://github.com/VIP1019/pundar-gcash-landing',
        stars: 0,
        forks: 0,
        language: 'TypeScript'
    },
    {
        name: 'SiteBuilder',
        full_name: 'VIP1019/SiteBuilder',
        description: 'A responsive web-based site builder and digital content layout utility.',
        url: 'https://github.com/VIP1019/SiteBuilder',
        stars: 0,
        forks: 0,
        language: 'JavaScript'
    },
    {
        name: 'disaster-relief-link',
        full_name: 'VIP1019/disaster-relief-link',
        description: 'ReliefLink is a web-based disaster relief management system for municipalities. Features weather API integration and automated emergency notifications.',
        url: 'https://github.com/VIP1019/disaster-relief-link',
        stars: 1,
        forks: 0,
        language: 'HTML'
    },
    {
        name: 'glyza',
        full_name: 'VIP1019/glyza',
        description: 'Custom web application and digital portfolio project with responsive design and modern UI.',
        url: 'https://github.com/VIP1019/glyza',
        stars: 0,
        forks: 0,
        language: 'HTML'
    },
    {
        name: 'Lelis-Realty-Real-Estate-Appraisal-Brokerage',
        full_name: 'VIP1019/Lelis-Realty-Real-Estate-Appraisal-Brokerage',
        description: 'Real Estate Appraisal and Brokerage Management System designed to streamline property listings, client management, property valuation, and transaction tracking.',
        url: 'https://github.com/VIP1019/Lelis-Realty-Real-Estate-Appraisal-Brokerage',
        stars: 1,
        forks: 0,
        language: 'TypeScript'
    },
    {
        name: '9tech',
        full_name: 'VIP1019/9tech',
        description: '9Tech is an Android-based mobile application designed to streamline inventory management and service tracking for small technology repair businesses.',
        url: 'https://github.com/VIP1019/9tech',
        stars: 0,
        forks: 0,
        language: 'Kotlin'
    },
    {
        name: 'PABFO_MS',
        full_name: 'chrls16/PABFO_MS',
        description: 'Provincial Agriculture and Biosystems Field Operations Management System - Collaborative field tracking and reporting.',
        url: 'https://github.com/chrls16/PABFO_MS',
        stars: 0,
        forks: 0,
        language: 'PHP',
        is_contributed: true
    },
    {
        name: 'LUMINA',
        full_name: 'VIP1019/LUMINA',
        description: 'Lumina is a mobile app supporting students’ mental well-being through journaling, mood tracking, sentiment analysis, and cultural Filipino proverbs.',
        url: 'https://github.com/VIP1019/LUMINA',
        stars: 0,
        forks: 0,
        language: 'Kotlin'
    },
    {
        name: 'catherines-diorama-IOT-BASED',
        full_name: 'VIP1019/catherines-diorama-IOT-BASED',
        description: 'IoT-based interactive smart diorama system with sensor integration and microcontroller automation.',
        url: 'https://github.com/VIP1019/catherines-diorama-IOT-BASED',
        stars: 0,
        forks: 0,
        language: 'HTML'
    },
    {
        name: 'IOT-DIORAMA-CATHERINES',
        full_name: 'VIP1019/IOT-DIORAMA-CATHERINES',
        description: 'IoT diorama web client and hardware interface control panel.',
        url: 'https://github.com/VIP1019/IOT-DIORAMA-CATHERINES',
        stars: 0,
        forks: 0,
        language: 'JavaScript'
    },
    {
        name: 'career-paths-in-IT',
        full_name: 'VIP1019/career-paths-in-IT',
        description: 'Interactive IT career guidance platform helping students explore tech specializations, recommended roadmaps, and career trajectories.',
        url: 'https://github.com/VIP1019/career-paths-in-IT',
        stars: 0,
        forks: 0,
        language: 'HTML'
    },
    {
        name: 'custodian-im',
        full_name: 'VIP1019/custodian-im',
        description: 'Property Custodian Inventory Management - Asset tracking, equipment inspection, and accountability logging.',
        url: 'https://github.com/VIP1019/custodian-im',
        stars: 0,
        forks: 0,
        language: 'PHP'
    },
    {
        name: 'MotorPool-System',
        full_name: 'VIP1019/MotorPool-System',
        description: 'Campus Motor Pool Management System designed to streamline vehicle reservations, vehicle tracking, and fleet usage reports.',
        url: 'https://github.com/VIP1019/MotorPool-System',
        stars: 0,
        forks: 0,
        language: 'Java'
    }
];

async function fetchGitHubRepos() {
    const cached = getCachedData(GITHUB_CACHE_KEY);
    if (cached) return cached;

    try {
        const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&direction=desc`,
            {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'User-Agent': 'Portfolio-Website'
                }
            }
        );

        let liveReposMap = new Map();
        if (response.ok) {
            const apiRepos = await response.json();
            apiRepos.forEach(repo => {
                liveReposMap.set(repo.name.toLowerCase(), repo);
            });
        }

        // Merge master list with live API updates
        const mergedRepos = MASTER_REPOSITORIES.map(repo => {
            const live = liveReposMap.get(repo.name.toLowerCase());
            if (live) {
                return {
                    ...repo,
                    description: live.description || repo.description,
                    stars: live.stargazers_count !== undefined ? live.stargazers_count : repo.stars,
                    forks: live.forks_count !== undefined ? live.forks_count : repo.forks,
                    language: live.language || repo.language,
                    url: live.html_url || repo.url,
                    updated_at: live.updated_at
                };
            }
            return repo;
        });

        setCachedData(GITHUB_CACHE_KEY, mergedRepos);
        return mergedRepos;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return MASTER_REPOSITORIES;
    }
}

function getCachedData(key) {
    try {
        const cached = localStorage.getItem(key);
        if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            if (Date.now() - timestamp < GITHUB_CACHE_DURATION) {
                return data;
            }
        }
    } catch (error) {
        console.error('Cache read error:', error);
    }
    return null;
}

function setCachedData(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify({
            data: data,
            timestamp: Date.now()
        }));
    } catch (error) {
        console.error('Cache write error:', error);
    }
}
