// LinkedIn Posts - Static data version for GitHub Pages
// Your actual LinkedIn projects from profile: princejheck-juan-27145a3a8

function getLinkedInPosts() {
    const posts = [
        {
            id: 'post1',
            title: 'Digital Queue Management System',
            description: 'Developed a sophisticated console-based queue management system for educational assistance payout. Implemented advanced multi-threading techniques and efficient file I/O operations to handle concurrent student requests. Features include real-time queue processing, fair scheduling algorithms, and persistent data storage ensuring no data loss during system operations.',
            image: null,
            date: '2024-12-15',
            likes: 24,
            comments: 8,
            shares: 5,
            url: 'https://www.linkedin.com/in/princejheck-juan-27145a3a8',
            type: 'Software Development'
        },
        {
            id: 'post2',
            title: 'Portfolio Website with Modern Design',
            description: 'Created a fully responsive portfolio website showcasing my projects and skills. Built with PHP, JavaScript, and modern CSS featuring smooth animations, interactive components, and professional UI/UX design. Integrated with GitHub API to display live repository data and implemented contact form with email notifications.',
            image: null,
            date: '2024-11-20',
            likes: 42,
            comments: 12,
            shares: 8,
            url: 'https://www.linkedin.com/in/princejheck-juan-27145a3a8',
            type: 'Web Development'
        },
        {
            id: 'post3',
            title: 'GitHub Activity Tracker Integration',
            description: 'Implemented a dynamic GitHub activity tracker that fetches and displays real-time repository statistics, commits, and contributions. Features include caching mechanism for optimal performance, beautiful card-based UI, and automatic updates. Built using GitHub REST API with error handling and fallback mechanisms.',
            image: null,
            date: '2024-10-08',
            likes: 31,
            comments: 6,
            shares: 4,
            url: 'https://www.linkedin.com/in/princejheck-juan-27145a3a8',
            type: 'Web Development'
        },
        {
            id: 'post4',
            title: 'Interactive Skills Visualization Dashboard',
            description: 'Designed and developed an interactive skills dashboard with animated progress bars, proficiency indicators, and category filtering. Features smooth scroll animations, responsive grid layout, and dynamic data loading. Technologies include JavaScript, CSS3 animations, and modern frontend frameworks.',
            image: null,
            date: '2024-09-15',
            likes: 28,
            comments: 5,
            shares: 3,
            url: 'https://www.linkedin.com/in/princejheck-juan-27145a3a8',
            type: 'Web Development'
        },
        {
            id: 'post5',
            title: 'Educational Technology Solutions',
            description: 'Working on innovative solutions for educational technology at Camarines Norte State College. Focusing on developing systems that improve student services, streamline administrative processes, and enhance learning experiences through technology integration.',
            image: null,
            date: '2024-08-22',
            likes: 19,
            comments: 4,
            shares: 2,
            url: 'https://www.linkedin.com/in/princejheck-juan-27145a3a8',
            type: 'Software Project'
        },
        {
            id: 'post6',
            title: 'Data Structures & Algorithms Practice',
            description: 'Consistently practicing and implementing various data structures and algorithms. Focus areas include sorting algorithms, tree traversals, dynamic programming, and optimization techniques. Sharing knowledge and solutions with the developer community to help others learn.',
            image: null,
            date: '2024-07-10',
            likes: 15,
            comments: 3,
            shares: 1,
            url: 'https://www.linkedin.com/in/princejheck-juan-27145a3a8',
            type: 'Software Development'
        }
    ];

    return {
        success: true,
        posts: posts,
        count: posts.length
    };
}

// For backward compatibility with fetch-style calls
async function fetchLinkedInPosts() {
    return getLinkedInPosts();
}
