<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects - Prince Jheck T. Juan</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* LinkedIn Projects Section Styles */
        .linkedin-projects-section {
            padding: 80px 5%;
            background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
            position: relative;
            overflow: hidden;
        }

        .linkedin-projects-section::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(88, 101, 242, 0.1) 0%, transparent 70%);
            animation: rotate-gradient 20s linear infinite;
        }

        @keyframes rotate-gradient {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .linkedin-header {
            text-align: center;
            margin-bottom: 60px;
            position: relative;
            z-index: 2;
        }

        .linkedin-header h2 {
            font-size: 3rem;
            background: linear-gradient(135deg, #5865f2 0%, #7289da 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 15px;
            animation: fade-in-down 0.8s ease-out;
        }

        .linkedin-header .subtitle {
            font-size: 1.2rem;
            color: #b9bbbe;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            animation: fade-in-up 0.8s ease-out 0.2s both;
        }

        .linkedin-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #0077b5 0%, #0a66c2 100%);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            color: white;
            animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 10px rgba(0, 119, 181, 0.5); }
            50% { box-shadow: 0 0 20px rgba(0, 119, 181, 0.8); }
        }

        .linkedin-filter {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 50px;
            flex-wrap: wrap;
            position: relative;
            z-index: 2;
        }

        .filter-btn {
            padding: 10px 25px;
            background: rgba(88, 101, 242, 0.1);
            border: 2px solid rgba(88, 101, 242, 0.3);
            color: #5865f2;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.95rem;
            font-weight: 500;
        }

        .filter-btn:hover {
            background: rgba(88, 101, 242, 0.2);
            border-color: #5865f2;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(88, 101, 242, 0.3);
        }

        .filter-btn.active {
            background: linear-gradient(135deg, #5865f2 0%, #7289da 100%);
            color: white;
            border-color: transparent;
        }

        .linkedin-projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
            position: relative;
            z-index: 2;
        }

        .linkedin-project-card {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            animation: fade-in-up 0.6s ease-out backwards;
            position: relative;
        }

        .linkedin-project-card:nth-child(1) { animation-delay: 0.1s; }
        .linkedin-project-card:nth-child(2) { animation-delay: 0.2s; }
        .linkedin-project-card:nth-child(3) { animation-delay: 0.3s; }
        .linkedin-project-card:nth-child(4) { animation-delay: 0.4s; }
        .linkedin-project-card:nth-child(5) { animation-delay: 0.5s; }
        .linkedin-project-card:nth-child(6) { animation-delay: 0.6s; }

        @keyframes fade-in-up {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fade-in-down {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .linkedin-project-card:hover {
            transform: translateY(-10px);
            border-color: rgba(88, 101, 242, 0.5);
            box-shadow: 0 20px 40px rgba(88, 101, 242, 0.2);
        }

        .linkedin-project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #5865f2, #7289da, #5865f2);
            background-size: 200% 100%;
            animation: gradient-shift 3s ease infinite;
        }

        @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .project-image-container {
            width: 100%;
            height: 220px;
            background: linear-gradient(135deg, #2c2f48 0%, #1a1d2e 100%);
            position: relative;
            overflow: hidden;
        }

        .project-image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .linkedin-project-card:hover .project-image-container img {
            transform: scale(1.1);
        }

        /* Embedded LinkedIn Post Styles */
        .project-header {
            padding: 20px 20px 15px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
        }

        .project-header .project-title {
            font-size: 1.1rem;
            color: white;
            margin: 0;
            font-weight: 600;
            flex: 1;
            line-height: 1.4;
        }

        .linkedin-embed-container {
            padding: 0;
            margin: 0;
            background: white;
            border-radius: 0 0 20px 20px;
            overflow: hidden;
            position: relative;
            max-height: 400px;
            transition: max-height 0.5s ease;
        }

        .linkedin-embed-container.expanded {
            max-height: none;
        }

        .linkedin-embed-container iframe {
            width: 100% !important;
            border: none;
            display: block;
            margin: 0;
            padding: 0;
        }

        .see-full-post-btn {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 50%, transparent 100%);
            padding: 40px 20px 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 10;
        }

        .see-full-post-btn button {
            background: linear-gradient(135deg, #0077b5, #005885);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 30px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 15px rgba(0, 119, 181, 0.3);
            transition: all 0.3s ease;
        }

        .see-full-post-btn button:hover {
            background: linear-gradient(135deg, #005885, #004166);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 119, 181, 0.4);
        }

        .see-full-post-btn button i {
            font-size: 1rem;
        }

        .linkedin-embed-container.expanded .see-full-post-btn {
            display: none;
        }

        /* Responsive iframe sizing */
        @media (max-width: 768px) {
            .linkedin-embed-container {
                max-height: 80vh;
                overflow-y: auto;
            }
        }

        .project-type-badge {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(10px);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.8rem;
            color: white;
            font-weight: 500;
            z-index: 1;
        }

        .project-content {
            padding: 25px;
        }

        .project-title {
            font-size: 1.4rem;
            color: white;
            margin-bottom: 12px;
            font-weight: 600;
            line-height: 1.3;
        }

        .project-description {
            color: #b9bbbe;
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 20px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .project-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            margin-bottom: 15px;
        }

        .project-date {
            color: #8e9297;
            font-size: 0.85rem;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .project-engagement {
            display: flex;
            gap: 15px;
        }

        .engagement-item {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #8e9297;
            font-size: 0.85rem;
        }

        .engagement-item i {
            color: #5865f2;
            font-size: 1rem;
        }

        .project-actions {
            display: flex;
            gap: 10px;
        }

        .action-btn {
            flex: 1;
            padding: 10px;
            border: 2px solid rgba(88, 101, 242, 0.5);
            background: rgba(88, 101, 242, 0.1);
            color: #5865f2;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            text-decoration: none;
        }

        .action-btn:hover {
            background: linear-gradient(135deg, #5865f2 0%, #7289da 100%);
            color: white;
            border-color: transparent;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(88, 101, 242, 0.3);
        }

        .action-btn.primary {
            background: linear-gradient(135deg, #5865f2 0%, #7289da 100%);
            color: white;
            border-color: transparent;
        }

        .action-btn.primary:hover {
            box-shadow: 0 5px 20px rgba(88, 101, 242, 0.5);
        }

        .loading-spinner {
            text-align: center;
            padding: 60px 20px;
            color: #b9bbbe;
        }

        .spinner {
            border: 4px solid rgba(88, 101, 242, 0.1);
            border-top: 4px solid #5865f2;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .no-posts-message {
            text-align: center;
            padding: 80px 20px;
            color: #b9bbbe;
        }

        .no-posts-message i {
            font-size: 4rem;
            color: rgba(88, 101, 242, 0.3);
            margin-bottom: 20px;
        }

        .no-posts-message h3 {
            font-size: 1.5rem;
            color: white;
            margin-bottom: 10px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .linkedin-projects-grid {
                grid-template-columns: 1fr;
            }

            .linkedin-header h2 {
                font-size: 2rem;
            }

            .linkedin-filter {
                gap: 10px;
            }

            .filter-btn {
                padding: 8px 16px;
                font-size: 0.85rem;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <i class="fas fa-code"></i>
                <span>Prince Jheck</span>
            </div>
            <ul class="nav-menu">
                <li><a href="index.php">Home</a></li>
                <li><a href="about.php">About me</a></li>
                <li><a href="skills.php">Skills</a></li>
                <li><a href="projects.php">Projects</a></li>
                <li><a href="contact.php">Contact</a></li>
            </ul>
            <div class="nav-social">
                <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="page-content">
        <!-- Projects Hero -->
        <section class="projects-hero">
            <div class="section-container">
                <div class="projects-hero-content">
                    <h1>My Projects</h1>
                    <p class="subtitle">Real-world solutions showcasing my technical expertise</p>
                </div>
            </div>
        </section>

        <!-- LinkedIn Projects Section (Featured) -->
        <section class="linkedin-projects-section">
            <div class="linkedin-header">
                <h2>Featured Projects from LinkedIn</h2>
                <div class="subtitle">
                    <span>Live from my professional network</span>
                    <span class="linkedin-badge">
                        <i class="fab fa-linkedin"></i>
                        Connected to LinkedIn
                    </span>
                </div>
            </div>

            <!-- Filter Buttons -->
            <div class="linkedin-filter">
                <button class="filter-btn active" data-filter="all">All Projects</button>
                <button class="filter-btn" data-filter="Web Development">Web Development</button>
                <button class="filter-btn" data-filter="Software Development">Software</button>
                <button class="filter-btn" data-filter="Software Project">Solutions</button>
            </div>

            <!-- Loading State -->
            <div class="loading-spinner" id="linkedinLoader">
                <div class="spinner"></div>
                <p>Loading your LinkedIn projects...</p>
            </div>

            <!-- Projects Grid -->
            <div class="linkedin-projects-grid" id="linkedinProjectsGrid" style="display: none;">
                <!-- Projects will be dynamically loaded here -->
            </div>

            <!-- No Posts Message -->
            <div class="no-posts-message" id="noPostsMessage" style="display: none;">
                <i class="fab fa-linkedin"></i>
                <h3>No Projects Found</h3>
                <p>Your LinkedIn projects will appear here</p>
            </div>
        </section>

        <!-- Old Featured Projects (Hidden/Removed) -->
        <section class="featured-projects" style="display: none;">
            <div class="section-container">
                <h2 class="section-title">Featured Projects</h2>
                <div class="projects-grid-detailed">
                    <!-- Project 1 -->
                    <div class="project-card-detail">
                        <div class="project-visual">
                            <div class="project-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"></div>
                        </div>
                        <div class="project-info">
                            <h3>Digital Queue Management System</h3>
                            <p class="project-description">A console-based system designed to manage queues for educational assistance payout. The system utilizes advanced threading techniques and file I/O operations to handle concurrent requests efficiently, ensuring fair queue management and timely processing.</p>
                            <div class="project-details">
                                <div class="detail-item">
                                    <strong>Technologies Used:</strong>
                                    <div class="tech-tags">
                                        <span>Java</span>
                                        <span>Threading</span>
                                        <span>File I/O</span>
                                        <span>Concurrency</span>
                                    </div>
                                </div>
                                <div class="detail-item">
                                    <strong>Key Features:</strong>
                                    <ul class="features-list">
                                        <li>Multi-threaded queue processing</li>
                                        <li>Persistent data storage with file I/O</li>
                                        <li>Concurrent request handling</li>
                                        <li>Educational payout distribution</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Project 2 -->
                    <div class="project-card-detail">
                        <div class="project-visual">
                            <div class="project-image" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"></div>
                        </div>
                        <div class="project-info">
                            <h3>Library Management System</h3>
                            <p class="project-description">A comprehensive system designed to organize and manage library records including book listings, member profiles, borrowing transactions, and return management. Features a user-friendly Swing GUI interface for easy navigation and operation.</p>
                            <div class="project-details">
                                <div class="detail-item">
                                    <strong>Technologies Used:</strong>
                                    <div class="tech-tags">
                                        <span>Java</span>
                                        <span>Swing GUI</span>
                                        <span>OOP</span>
                                        <span>File I/O</span>
                                    </div>
                                </div>
                                <div class="detail-item">
                                    <strong>Key Features:</strong>
                                    <ul class="features-list">
                                        <li>Book catalog management</li>
                                        <li>Member registration and tracking</li>
                                        <li>Borrowing and return transactions</li>
                                        <li>User-friendly GUI interface</li>
                                        <li>Persistent data storage</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Project 3 -->
                    <div class="project-card-detail">
                        <div class="project-visual">
                            <div class="project-image" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"></div>
                        </div>
                        <div class="project-info">
                            <h3>Community Transportation & Ride-Sharing System</h3>
                            <p class="project-description">A web-based application that connects community members for ridesharing and transport planning. The platform enables efficient route sharing, cost splitting, and real-time updates to optimize transportation within the community.</p>
                            <div class="project-details">
                                <div class="detail-item">
                                    <strong>Technologies Used:</strong>
                                    <div class="tech-tags">
                                        <span>HTML5</span>
                                        <span>CSS3</span>
                                        <span>JavaScript</span>
                                        <span>MySQL</span>
                                        <span>API Integration</span>
                                    </div>
                                </div>
                                <div class="detail-item">
                                    <strong>Key Features:</strong>
                                    <ul class="features-list">
                                        <li>User registration and profiles</li>
                                        <li>Route matching algorithm</li>
                                        <li>Real-time ride updates</li>
                                        <li>Cost calculation and splitting</li>
                                        <li>API integration for location services</li>
                                        <li>Community-focused platform</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section">
            <div class="section-container">
                <h3>Have Questions About These Projects?</h3>
                <p>Contact me directly and let's discuss your needs</p>
                <div class="cta-buttons">
                    <a href="contact.php" class="btn btn-primary">Send Message</a>
                    <a href="skills.php" class="btn btn-secondary">View Skills</a>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2026 Prince Jheck T. Juan. All rights reserved.</p>
            <div class="footer-social">
                <a href="https://github.com" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/princejheck-juan-27145a3a8" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </footer>

    <!-- Success Modal -->
    <div id="successModal" class="modal">
        <div class="modal-content">
            <i class="fas fa-check-circle"></i>
            <h2>Success!</h2>
            <p id="successMessage">Your project inquiry has been received. We'll get back to you soon!</p>
            <button onclick="closeModal()" class="btn btn-primary">Close</button>
        </div>
    </div>

    <!-- AI Chatbot -->
    <div id="chatbot-container" class="chatbot-container">
        <div id="chatbot-toggle" class="chatbot-toggle">
            <i class="fas fa-comments"></i>
            <span class="chatbot-badge">Ask me anything!</span>
        </div>
        
        <div id="chatbot-window" class="chatbot-window">
            <div class="chatbot-header">
                <div class="chatbot-header-info">
                    <div class="chatbot-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="chatbot-title">
                        <h4>Prince's AI Assistant</h4>
                        <span class="chatbot-status">
                            <span class="status-dot"></span>
                            Online
                        </span>
                    </div>
                </div>
                <button id="chatbot-close" class="chatbot-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div id="chatbot-messages" class="chatbot-messages">
                <div class="message bot-message">
                    <div class="message-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-content">
                        <p>Hi! 👋 I'm Prince's AI assistant. I can help you learn about:</p>
                        <ul>
                            <li>His skills and expertise</li>
                            <li>Educational background</li>
                            <li>Projects and achievements</li>
                            <li>How he can help you</li>
                            <li>Ways to collaborate</li>
                        </ul>
                        <p>Feel free to ask me anything!</p>
                    </div>
                </div>
            </div>
            
            <div class="chatbot-suggestions" id="chatbot-suggestions">
                <button class="suggestion-chip" data-question="What are Prince's main skills?">
                    💻 Main Skills
                </button>
                <button class="suggestion-chip" data-question="What can Prince help me with?">
                    🤝 How can he help?
                </button>
                <button class="suggestion-chip" data-question="Tell me about Prince's background">
                    👨‍🎓 Background
                </button>
                <button class="suggestion-chip" data-question="What projects has Prince worked on?">
                    🚀 Projects
                </button>
            </div>
            
            <div class="chatbot-input-area">
                <input 
                    type="text" 
                    id="chatbot-input" 
                    class="chatbot-input" 
                    placeholder="Type your question here..."
                    autocomplete="off"
                >
                <button id="chatbot-send" class="chatbot-send">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
    <script src="chatbot.js"></script>
    <script>
        // LinkedIn Projects Integration
        document.addEventListener('DOMContentLoaded', function() {
            loadLinkedInProjects();
            setupFilters();
        });

        let allProjects = [];
        let currentFilter = 'all';

        // Expand LinkedIn Post
        function expandPost(postId) {
            const container = document.getElementById(`linkedin-container-${postId}`);
            if (container) {
                container.classList.add('expanded');
            }
        }

        // Load LinkedIn Projects
        async function loadLinkedInProjects() {
            const loader = document.getElementById('linkedinLoader');
            const grid = document.getElementById('linkedinProjectsGrid');
            const noPostsMsg = document.getElementById('noPostsMessage');

            try {
                const response = await fetch('linkedin-embed-posts.php');
                const data = await response.json();

                if (data.success && data.posts && data.posts.length > 0) {
                    allProjects = data.posts;
                    displayProjects(allProjects);
                    loader.style.display = 'none';
                    grid.style.display = 'grid';
                } else {
                    loader.style.display = 'none';
                    noPostsMsg.style.display = 'block';
                }
            } catch (error) {
                console.error('Error loading LinkedIn posts:', error);
                loader.style.display = 'none';
                noPostsMsg.style.display = 'block';
            }
        }

        // Display Projects
        function displayProjects(projects) {
            const grid = document.getElementById('linkedinProjectsGrid');
            grid.innerHTML = '';

            projects.forEach((post, index) => {
                const card = createProjectCard(post, index);
                grid.appendChild(card);
            });
        }

        // Create Project Card
        function createProjectCard(post, index) {
            const card = document.createElement('div');
            card.className = 'linkedin-project-card';
            card.setAttribute('data-type', post.type || 'Software Project');
            
            const animationDelay = (index % 6) + 1;
            card.style.animationDelay = `${animationDelay * 0.1}s`;

            // If post has embed code, display the LinkedIn embed
            if (post.hasEmbed && post.embedCode) {
                card.innerHTML = `
                    <div class="project-header">
                        <h3 class="project-title">${post.title}</h3>
                        <span class="project-type-badge">${post.type || 'Project'}</span>
                    </div>
                    <div class="linkedin-embed-container" id="linkedin-container-${post.id}">
                        ${post.embedCode}
                        <div class="see-full-post-btn" onclick="expandPost('${post.id}')">
                            <button>
                                <i class="fab fa-linkedin"></i>
                                See Full Post
                                <i class="fas fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>
                `;
            } else {
                // Fallback to regular card display
                const postDate = new Date(post.date);
                const formattedDate = postDate.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                });

                const maxLength = 150;
                let description = post.description || '';
                if (description.length > maxLength) {
                    description = description.substring(0, maxLength) + '...';
                }

                card.innerHTML = `
                    <div class="project-image-container">
                        ${post.image ? 
                            `<img src="${post.image}" alt="${post.title}">` : 
                            `<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 4rem; color: rgba(255,255,255,0.2);">
                                <i class="fas fa-project-diagram"></i>
                            </div>`
                        }
                        <span class="project-type-badge">${post.type || 'Project'}</span>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${post.title}</h3>
                        <p class="project-description">${description}</p>
                        
                        <div class="project-meta">
                            <span class="project-date">
                                <i class="fas fa-calendar"></i>
                                ${formattedDate}
                            </span>
                            <div class="project-engagement">
                                ${post.likes > 0 ? `
                                    <span class="engagement-item">
                                        <i class="fas fa-thumbs-up"></i>
                                        ${post.likes}
                                    </span>
                                ` : ''}
                                ${post.comments > 0 ? `
                                    <span class="engagement-item">
                                        <i class="fas fa-comment"></i>
                                        ${post.comments}
                                    </span>
                                ` : ''}
                                ${post.shares > 0 ? `
                                    <span class="engagement-item">
                                        <i class="fas fa-share"></i>
                                        ${post.shares}
                                    </span>
                                ` : ''}
                            </div>
                        </div>
                        
                        <div class="project-actions">
                            <a href="${post.url}" target="_blank" class="action-btn primary">
                                <i class="fab fa-linkedin"></i>
                                View on LinkedIn
                            </a>
                        </div>
                    </div>
                `;
            }

            return card;
        }

        // Setup Filter Buttons
        function setupFilters() {
            const filterBtns = document.querySelectorAll('.filter-btn');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterBtns.forEach(b => b.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Get filter value
                    const filter = this.getAttribute('data-filter');
                    currentFilter = filter;
                    
                    // Filter projects
                    filterProjects(filter);
                });
            });
        }

        // Filter Projects
        function filterProjects(filter) {
            const cards = document.querySelectorAll('.linkedin-project-card');
            
            cards.forEach((card, index) => {
                const cardType = card.getAttribute('data-type');
                
                if (filter === 'all' || cardType === filter) {
                    card.style.display = 'block';
                    // Re-apply animation
                    card.style.animation = 'none';
                    setTimeout(() => {
                        card.style.animation = '';
                    }, 10);
                } else {
                    card.style.display = 'none';
                }
            });
        }
    </script>
</body>
</html>
