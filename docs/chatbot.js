/**
 * Intelligent RAG-Powered AI Assistant for Prince Jheck's Portfolio
 * Features:
 * 1. Semantic Knowledge Chunking & Vector Indexing
 * 2. TF-IDF & Keyword Relevance Retrieval (RAG Engine)
 * 3. Context-Augmented Answer Synthesis
 * 4. Ultra-fast local execution with zero PHP / API key dependency
 * 5. Full support for Prince's latest achievements (APAC Stellar Hackathon 2026, PUNDAR, DementAId, 17 Repos)
 */

class PortfolioChatbot {
    constructor() {
        this.conversationHistory = [];
        this.knowledgeBase = this.buildKnowledgeBase();
        this.ragChunks = this.buildRAGIndex();
        this.initializeChatbot();
    }

    buildKnowledgeBase() {
        if (typeof window !== 'undefined' && window.portfolioKnowledge) {
            return window.portfolioKnowledge;
        }
        return {
            personal: {
                fullName: "Prince Jheck T. Juan",
                preferredName: "Prince Jheck",
                age: 20,
                location: "Daet, Camarines Norte, Philippines",
                status: "Available for internships, software development, and freelance",
                role: "Software Developer & IT Student",
                email: "princejheckjuan023@gmail.com",
                github: "https://github.com/VIP1019",
                linkedin: "https://www.linkedin.com/in/princejheck-juan-27145a3a8"
            }
        };
    }

    // Build Semantic Knowledge Chunks for Retrieval-Augmented Generation (RAG)
    buildRAGIndex() {
        return [
            {
                id: 'stellar_hackathon',
                category: 'achievements',
                title: 'APAC Stellar Hackathon Grand Finale 2026 (PUNDAR)',
                keywords: ['stellar', 'hackathon', 'apac', 'pundar', 'soroban', 'blockchain', 'international', 'finalist', 'vietnam', 'indonesia', 'paluwagan', 'demo day', 'contest', 'award', 'competition', 'win', 'crypto', 'web3'],
                summary: "International Finalist at the APAC Stellar Hackathon Grand Finale 2026",
                content: `🌟 **International Finalist | APAC Stellar Hackathon Grand Finale 2026** 🇵🇭\n\nPrince Jheck is the **Lead Developer & Full-Stack Developer** of **PUNDAR** (Progressive Unified Network for Digital Asset Resilience).\n\n• **National Selection:** Selected as one of the Top Finalists out of **122 participating teams** across the Philippines during the *Build on Stellar Philippines Demo Day*.\n• **International Stage:** On **July 31, 2026**, Prince and Team PUNDAR represent the Philippines against the best finalist teams from **Vietnam** and **Indonesia**! 🇵🇭🇻🇳🇮🇩\n• **Core Technology:** Built on the **Stellar blockchain** and **Soroban smart contracts** to digitize community savings (*paluwagan*), simplify group payments, and establish verifiable digital financial reputations.`
            },
            {
                id: 'pundar_project',
                category: 'projects',
                title: 'PUNDAR - Decentralized Financial Platform',
                keywords: ['pundar', 'stellar', 'soroban', 'paluwagan', 'defi', 'fintech', 'smart contract', 'blockchain', 'savings', 'decentralized', 'digital asset resilience'],
                summary: "PUNDAR: Stellar & Soroban-powered digital paluwagan platform",
                content: `🚀 **Project: PUNDAR (Progressive Unified Network for Digital Asset Resilience)**\n\n• **Role:** Lead Developer & Full-Stack Developer\n• **What it does:** Digitizes the traditional Filipino community savings system (*paluwagan*), automating contributions, payouts, and verifiable financial reputation through decentralized smart contracts.\n• **Tech Stack:** Stellar Blockchain, Soroban Smart Contracts, Kotlin, Full-Stack Web3, REST APIs.\n• **GitHub Repository:** [VIP1019/Pundar-stellar](https://github.com/VIP1019/Pundar-stellar)`
            },
            {
                id: 'dementaid_award',
                category: 'achievements',
                title: 'National Finalist - Development Academy of the Philippines (DAP 2025)',
                keywords: ['dementaid', 'dementia', 'dap', 'development academy', 'philippines', 'anklet', 'healthcare', 'iot', 'medical', 'smart anklet', 'ai', 'artificial intelligence', 'finalist'],
                summary: "National Finalist at DAP 2025 for DementAId smart healthcare system",
                content: `🏆 **National Finalist | Development Academy of the Philippines (DAP 2025)**\n\nPrince was recognized as a National Finalist for **DementAId**: *An AI-Powered Smart Anklet and Mobile Application for Safer and Smarter Dementia Care*.\n\n• **Impact:** Designed for healthcare and elderly protection, combining wearable IoT sensor anklets with an AI mobile companion to track safety and send emergency alerts.\n• **Tech Stack:** Artificial Intelligence, IoT Microcontroller hardware, Mobile application.`
            },
            {
                id: 'academic_honors',
                category: 'education',
                title: 'Academic Honors & Leadership Awards',
                keywords: ['honors', 'award', 'awards', 'achievement', 'achievements', 'best in research', 'best in innovation', 'high honors', 'leader', 'leadership', 'vice president', 'student council', 'sg', 'math club', 'yes-o', 'filipino club'],
                summary: "High Honors, Best in Research & Innovation, and Student Government Leadership",
                content: `🎖️ **Academic Honors & Leadership Highlights:**\n\n• 🎓 **Graduated with High Honors** (Senior High School STEM)\n• 🔬 **Best in Research Awardee**\n• 💡 **Best in Innovation Awardee**\n• 📚 **Consistent Honor Student** throughout Junior High School\n• 🏛️ **College SG Vice President** for Planning and Development (CCMS)\n• 📐 **Former Vice President** of the Mathematics Club\n• 🌿 **Public Information Officer (PIO)** of YES-O\n• 🇵🇭 **Auditor** of the Filipino Club\n• 🤝 **Former SSG Representative**`
            },
            {
                id: 'education_college',
                category: 'education',
                title: 'College Education - Camarines Norte State College',
                keywords: ['college', 'university', 'school', 'study', 'education', 'degree', 'course', 'cnsc', 'camarines norte state college', 'daet', 'bsit', 'bs it', 'information technology', 'software development', 'student'],
                summary: "BS Information Technology (Software Development) at CNSC (2024 - Present)",
                content: `🎓 **Higher Education:**\n\n• **Degree:** Bachelor of Science in Information Technology (BSIT)\n• **Specialization:** Software Development\n• **Institution:** Camarines Norte State College (CNSC), Daet, Camarines Norte\n• **Timeline:** 2024 - Present (Current Student)\n• **Status:** Actively building real-world software, leading tech initiatives, and competing in international hackathons.`
            },
            {
                id: 'education_highschool',
                category: 'education',
                title: 'Senior High School Background',
                keywords: ['senior high', 'high school', 'stem', 'camarines norte senior high', 'cnshs', 'junior high'],
                summary: "STEM Graduate with High Honors from Camarines Norte Senior High School",
                content: `🏫 **Secondary Education:**\n\n• **Senior High School:** Camarines Norte Senior High School (2022 - 2024)\n  - **Strand:** STEM (Science, Technology, Engineering, and Mathematics)\n  - **Honors:** Graduated with High Honors, Best in Research & Best in Innovation\n• **Junior High School:** Camarines Norte National High School (2018 - 2022)\n  - **Honors:** Consistent Honor Student`
            },
            {
                id: 'programming_skills',
                category: 'skills',
                title: 'Programming Languages & Tech Stack',
                keywords: ['skills', 'skill', 'language', 'languages', 'programming', 'code', 'coding', 'java', 'kotlin', 'python', 'javascript', 'typescript', 'php', 'c++', 'rust', 'soroban', 'tech stack'],
                summary: "Java, Kotlin, TypeScript, JavaScript, Python, PHP, C++, and Rust",
                content: `💻 **Programming Languages & Proficiencies:**\n\n• **Core Languages:** Java, Kotlin, TypeScript, JavaScript, Python, PHP, C++\n• **Blockchain & Smart Contracts:** Rust (Soroban SDK), Stellar Blockchain\n• **Web Frontend:** HTML5, CSS3, React.js, Tailwind CSS, Bootstrap\n• **Backend & APIs:** Node.js, Express.js, PHP, RESTful APIs, WebSockets\n• **Databases:** MySQL, SQLite, MongoDB, Firebase\n• **Developer Tools:** Git, GitHub, VS Code, Postman, Figma, IntelliJ IDEA`
            },
            {
                id: 'web_frameworks_skills',
                category: 'skills',
                title: 'Web Development & Frameworks',
                keywords: ['web', 'frontend', 'backend', 'framework', 'frameworks', 'react', 'node', 'express', 'html', 'css', 'tailwind', 'bootstrap', 'full stack', 'fullstack'],
                summary: "Full-Stack Web Development with React, Node.js, Express, and REST APIs",
                content: `🌐 **Web Development & Frameworks:**\n\nPrince is an accomplished Full-Stack Web Developer experienced in:\n• Modern Frontend: React.js, Vanilla HTML5/CSS3, responsive UI/UX, glassmorphism\n• Backend & Server: Node.js, Express, PHP, RESTful APIs\n• Database Architecture: Relational schemas (MySQL) and NoSQL (MongoDB, Firebase)\n• Performance & Integration: Third-party APIs (GitHub API, EmailJS, Stellar SDK)`
            },
            {
                id: 'featured_projects_all',
                category: 'projects',
                title: 'Featured Software Projects',
                keywords: ['project', 'projects', 'portfolio', 'built', 'created', 'developed', 'software', 'systems', 'apps', 'work'],
                summary: "PUNDAR, DementAId, ReliefLink, Lelis Realty, StaCruz Custodian, and Queue Systems",
                content: `🚀 **Featured Projects Overview:**\n\n1. **PUNDAR** (Stellar/Soroban): Decentralized digital paluwagan & community savings platform. *(APAC Stellar Hackathon 2026 International Finalist)*\n2. **DementAId**: AI-powered smart anklet and mobile companion for dementia care. *(DAP 2025 National Finalist)*\n3. **ReliefLink (disaster-relief-link)**: Municipal disaster reporting with weather API and automated alert dispatches.\n4. **Lelis Realty**: Real estate appraisal, property listings, and brokerage management system in TypeScript.\n5. **StaCruz Property Custodian**: Comprehensive government asset and property inventory system in PHP.\n6. **Digital Queue Management System**: Multithreaded educational assistance payout queue software in Java.\n7. **Library Management System**: Java Swing GUI desktop application with persistent file I/O.\n8. **9Tech**: Android inventory & service tracking app in Kotlin.\n9. **LUMINA**: Student mental well-being app with sentiment analysis and Filipino proverbs.`
            },
            {
                id: 'github_all_repos',
                category: 'github',
                title: 'GitHub Repositories (All 17)',
                keywords: ['github', 'repo', 'repos', 'repositories', 'git', 'vip1019', 'open source', 'source code'],
                summary: "17 repositories across Web3, Full-Stack, IoT, and Mobile Development",
                content: `🐙 **Prince's GitHub Repositories ([github.com/VIP1019](https://github.com/VIP1019)):**\n\nPrince maintains **17 active repositories**, including:\n• **Pundar-stellar** - Decentralized financial paluwagan on Stellar/Soroban\n• **portfolio-website** - Personal IT portfolio with live API integrations\n• **StaCruzPropertyCustodianSystem** - Government property inventory management\n• **disaster-relief-link** - Municipal emergency relief management system\n• **Lelis-Realty-Real-Estate-Appraisal-Brokerage** - Real estate valuation platform\n• **CCMS-GRACE** - College academic resource portal\n• **pundar-gcash-landing** - Digital wallet on-ramp UI\n• **9tech** & **LUMINA** - Android & mental health mobile apps\n• **catherines-diorama-IOT-BASED** - IoT hardware control diorama\n• **MotorPool-System** - University vehicle reservation software`
            },
            {
                id: 'java_desktop_projects',
                category: 'projects',
                title: 'Java & Desktop Software Projects',
                keywords: ['java', 'swing', 'queue', 'library', 'desktop', 'threading', 'file io', 'concurrency', 'oop', 'motorpool'],
                summary: "Multithreaded Queue Management System and Swing Library Management",
                content: `☕ **Java & Desktop Development:**\n\n• **Digital Queue Management System:** Console/desktop system for educational financial assistance payouts. Utilizes advanced Java threading, mutex synchronization, and file I/O to handle heavy concurrent request traffic.\n• **Library Management System:** Full OOP desktop software with Swing GUI managing book catalogs, borrowings, returns, and patron records.\n• **MotorPool-System:** Campus vehicle management and reservation logging in Java.`
            },
            {
                id: 'mobile_iot_projects',
                category: 'projects',
                title: 'Mobile & IoT Projects',
                keywords: ['mobile', 'android', 'kotlin', 'iot', 'hardware', 'sensor', 'diorama', 'lumina', '9tech'],
                summary: "Android apps in Kotlin (9Tech, Lumina) and IoT smart dioramas",
                content: `📱 **Mobile & IoT Solutions:**\n\n• **9Tech (Kotlin):** Android application for small electronics repair shops, tracking inventory stocks, sales logs, and warranty records.\n• **LUMINA (Kotlin):** Mental health companion application with emotion sentiment analysis and inspirational Filipino proverbs.\n• **IoT Smart Diorama:** Connected hardware projects with sensor integration, microcontroller programming, and web client controllers.`
            },
            {
                id: 'contact_hire_services',
                category: 'contact',
                title: 'Contact Information & Hiring',
                keywords: ['contact', 'email', 'hire', 'collaborate', 'internship', 'freelance', 'work with', 'reach', 'message', 'available', 'social', 'linkedin', 'github', 'instagram', 'facebook'],
                summary: "Email: princejheckjuan023@gmail.com | Available for internships and projects",
                content: `📬 **Get in Touch with Prince Jheck:**\n\n• **Status:** Available for internships, contract software development, and collaborations!\n• **Email:** [princejheckjuan023@gmail.com](mailto:princejheckjuan023@gmail.com)\n• **LinkedIn:** [linkedin.com/in/princejheck-juan-27145a3a8](https://www.linkedin.com/in/princejheck-juan-27145a3a8)\n• **GitHub:** [github.com/VIP1019](https://github.com/VIP1019)\n• **Instagram:** [@prnc_j1](https://www.instagram.com/prnc_j1)\n• **Location:** Daet, Camarines Norte, Philippines 🇵🇭\n\nYou can also use the **Contact Form** on the [Contact page](contact.html) to send him an instant message!`
            },
            {
                id: 'services_offerings',
                category: 'services',
                title: 'Services & What Prince Can Build',
                keywords: ['service', 'services', 'offer', 'build', 'help', 'can he do', 'skills offer', 'consult', 'create'],
                summary: "Full-Stack Web Apps, Web3/Stellar Smart Contracts, Management Systems, and IoT",
                content: `🛠️ **Services Prince Offers:**\n\n1. **Full-Stack Web Development:** Custom responsive websites, web applications, dynamic dashboards, and REST API backends.\n2. **Web3 & Blockchain Development:** Prototyping on the Stellar network, Soroban smart contracts, and decentralized financial integrations.\n3. **Custom Management Systems:** Inventory systems, booking portals, school systems, and business utilities.\n4. **API Integration & Automation:** Connecting external payment gateways, weather APIs, email services (EmailJS), and GitHub APIs.\n5. **Mobile & IoT Prototyping:** Android apps in Kotlin and sensor-driven hardware solutions.`
            },
            {
                id: 'bio_about',
                category: 'bio',
                title: 'About Prince Jheck T. Juan',
                keywords: ['who is', 'about', 'bio', 'who are you', 'tell me about', 'background', 'profile', 'prince', 'juan'],
                summary: "20-year-old IT Student, Software Developer, and International Hackathon Finalist",
                content: `👨‍💻 **About Prince Jheck T. Juan:**\n\nPrince Jheck is a **20-year-old Filipino software developer** and Information Technology student at **Camarines Norte State College**.\n\nHe is an **International Finalist** at the **APAC Stellar Hackathon 2026** with PUNDAR and a **National Finalist** at the Development Academy of the Philippines (DAP 2025) with DementAId.\n\nPassionate about using modern technology to solve real community problems, he specializes in **Full-Stack Web Development**, **Blockchain (Stellar/Soroban)**, and **Software Architecture**.`
            }
        ];
    }

    // RAG Semantic & Keyword Retrieval Engine
    retrieveContext(query) {
        const cleanQuery = query.toLowerCase().trim();
        const tokens = cleanQuery
            .replace(/[^\w\s]/gi, ' ')
            .split(/\s+/)
            .filter(t => t.length > 1 && !['what', 'when', 'where', 'who', 'why', 'how', 'is', 'are', 'was', 'were', 'the', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'of', 'and', 'or', 'can', 'you', 'he', 'his', 'him', 'tell', 'me', 'about', 'show', 'give'].includes(t));

        const scoredChunks = this.ragChunks.map(chunk => {
            let score = 0;
            const titleLower = chunk.title.toLowerCase();
            const contentLower = chunk.content.toLowerCase();

            // 1. Exact phrase match in content or title
            if (contentLower.includes(cleanQuery)) score += 30;
            if (titleLower.includes(cleanQuery)) score += 40;

            // 2. Keyword exact matches
            chunk.keywords.forEach(kw => {
                if (cleanQuery.includes(kw)) {
                    score += 25;
                }
                tokens.forEach(token => {
                    if (kw === token) {
                        score += 20;
                    } else if (kw.includes(token) || token.includes(kw)) {
                        score += 10;
                    }
                });
            });

            // 3. Token match in title and content
            tokens.forEach(token => {
                if (titleLower.includes(token)) score += 15;
                if (contentLower.includes(token)) score += 4;
            });

            return { chunk, score };
        });

        // Sort descending by relevance score
        scoredChunks.sort((a, b) => b.score - a.score);
        return scoredChunks.filter(item => item.score > 0);
    }

    // RAG Generation & Response Synthesis Engine
    generateResponse(query) {
        const cleanQuery = query.toLowerCase().trim();

        // 1. Conversational Greetings
        if (/^(hi|hello|hey|sup|yo|greetings|good morning|good afternoon|good evening|kamusta|musta)\b/i.test(cleanQuery)) {
            return `Hi there! 👋 I'm **Prince's AI Assistant**, powered by his portfolio knowledge base.\n\nI can answer anything about his:\n• 🌟 **APAC Stellar Hackathon 2026** & PUNDAR Web3 project\n• 🏆 **DAP 2025 National Finalist** & DementAId\n• 💻 **Programming Skills** (Java, Kotlin, React, Python, Stellar)\n• 🐙 **17 GitHub Repositories**\n• 🎓 **Education & Honors** at CNSC\n• 📬 **Contact Details & Services**\n\nWhat would you like to know?`;
        }

        // 2. Farewell & Gratitude
        if (/^(bye|goodbye|see you|thanks|thank you|salamat|cya|take care)\b/i.test(cleanQuery)) {
            return `You're very welcome! 😊 Feel free to reach out to Prince directly at [princejheckjuan023@gmail.com](mailto:princejheckjuan023@gmail.com) or connect on [LinkedIn](https://www.linkedin.com/in/princejheck-juan-27145a3a8). Have a great day! 🚀`;
        }

        // 3. Who are you / Bot Identity
        if (cleanQuery.includes('who are you') || cleanQuery.includes('what are you') || cleanQuery.includes('your name')) {
            return `I'm **Prince Jheck's Portfolio AI Assistant**! 🤖\n\nI use a localized Retrieval-Augmented Generation (RAG) engine to instantly find and present accurate information about Prince's projects, technical skills, hackathon achievements, and background. Ask me anything!`;
        }

        // 4. Time / Date Utility
        if (cleanQuery.includes('what time') || cleanQuery.includes('current time')) {
            return `The current time is **${new Date().toLocaleTimeString()}**.`;
        }
        if (cleanQuery.includes('what date') || cleanQuery.includes('today')) {
            return `Today is **${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}**.`;
        }

        // 5. Run RAG Retrieval
        const rankedResults = this.retrieveContext(cleanQuery);

        if (rankedResults.length > 0 && rankedResults[0].score >= 12) {
            const topResult = rankedResults[0].chunk;
            let response = topResult.content;

            // If there's a strong secondary chunk with high score, synthesize a multi-point answer
            if (rankedResults.length > 1 && rankedResults[1].score >= 25 && rankedResults[1].chunk.id !== topResult.id) {
                const second = rankedResults[1].chunk;
                response += `\n\n---\n📌 **Related - ${second.title}:**\n${second.summary}`;
            }

            return response;
        }

        // 6. Intelligent Fallback with Helpful Directions
        return `I couldn't find a direct match for that question in Prince's portfolio records, but here is what I can help you with:\n\n• 🚀 **Ask about PUNDAR** (his APAC Stellar Hackathon 2026 project)\n• 🏆 **Ask about his awards** (High Honors, DAP Finalist, Best in Research)\n• 💻 **Ask about his skills** (Java, Kotlin, React, Python, Blockchain)\n• 🐙 **Ask about his GitHub repositories**\n• 📬 **Ask how to hire or contact him**\n\nTry asking: *"Tell me about the Stellar Hackathon"* or *"What are Prince's main skills?"*`;
    }

    initializeChatbot() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupChatbot());
        } else {
            this.setupChatbot();
        }
    }

    setupChatbot() {
        this.chatbotToggle = document.getElementById('chatbot-toggle');
        this.chatbotWindow = document.getElementById('chatbot-window');
        this.chatbotClose = document.getElementById('chatbot-close');
        this.chatbotMessages = document.getElementById('chatbot-messages');
        this.chatbotInput = document.getElementById('chatbot-input');
        this.chatbotSend = document.getElementById('chatbot-send');
        this.chatbotSuggestions = document.getElementById('chatbot-suggestions');

        if (!this.chatbotToggle || !this.chatbotWindow) {
            return;
        }

        this.bindEvents();
    }

    bindEvents() {
        this.chatbotToggle.addEventListener('click', () => this.toggleChatbot());
        this.chatbotClose.addEventListener('click', () => this.toggleChatbot());

        this.chatbotSend.addEventListener('click', () => this.sendMessage());
        this.chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.sendMessage();
            }
        });

        const suggestionChips = document.querySelectorAll('.suggestion-chip');
        suggestionChips.forEach(chip => {
            chip.addEventListener('click', () => {
                const question = chip.getAttribute('data-question');
                if (question) {
                    this.chatbotInput.value = question;
                    this.sendMessage();
                }
            });
        });
    }

    toggleChatbot() {
        this.chatbotWindow.classList.toggle('active');
        if (this.chatbotWindow.classList.contains('active')) {
            this.chatbotInput.focus();
        }
    }

    async sendMessage() {
        const message = this.chatbotInput.value.trim();
        if (!message) return;

        // Display user message
        this.addMessage(message, 'user');
        this.chatbotInput.value = '';
        this.conversationHistory.push({ role: 'user', content: message });

        // Show typing indicator
        this.showTypingIndicator();

        // RAG processing with responsive natural delay (~350ms)
        setTimeout(() => {
            this.hideTypingIndicator();
            const botResponse = this.generateResponse(message);
            this.addMessage(botResponse, 'bot');
            this.conversationHistory.push({ role: 'assistant', content: botResponse });
        }, 300 + Math.random() * 150);
    }

    addMessage(text, sender) {
        if (!this.chatbotMessages) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;

        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';
        avatarDiv.innerHTML = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = this.formatMessage(text);

        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);

        this.chatbotMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    formatMessage(text) {
        if (!text) return '';

        // Safe HTML conversion with Markdown support
        let formatted = text
            // Links [text](url)
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" style="color: #a78bfa; text-decoration: underline;">$1</a>')
            // Bold **text**
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            // Italic *text*
            .replace(/\*([^*]+)\*/g, '<em>$1</em>')
            // Horizontal rule
            .replace(/---/g, '<hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 8px 0;">')
            // Newlines
            .replace(/\n/g, '<br>');

        return formatted;
    }

    showTypingIndicator() {
        this.hideTypingIndicator(); // Ensure no duplicates
        const typingDiv = document.createElement('div');
        typingDiv.id = 'chatbot-typing-indicator';
        typingDiv.className = 'message bot-message typing-indicator-message';
        typingDiv.innerHTML = `
            <div class="message-avatar"><i class="fas fa-robot"></i></div>
            <div class="message-content">
                <div class="typing-indicator">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `;
        this.chatbotMessages.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const indicator = document.getElementById('chatbot-typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    scrollToBottom() {
        if (this.chatbotMessages) {
            this.chatbotMessages.scrollTop = this.chatbotMessages.scrollHeight;
        }
    }
}

// Instantiate the chatbot
if (typeof window !== 'undefined') {
    window.portfolioChatbotInstance = new PortfolioChatbot();
}
