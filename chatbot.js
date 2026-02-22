// AI Chatbot for Prince Jheck's Portfolio
// Knowledge base about Prince Jheck T. Juan

class PortfolioChatbot {
    constructor() {
        this.knowledgeBase = {
            // Personal Information
            personal: {
                name: "Prince Jheck T. Juan",
                age: 20,
                location: "Daet, Camarines Norte, Philippines",
                education: "BS Information Technology (Software Development)",
                university: "Camarines Norte State College",
                status: "Currently studying (2024 - Present)"
            },

            // Skills
            skills: {
                programming: ["Java", "Python", "JavaScript", "C++"],
                web: ["HTML5", "CSS3", "Bootstrap", "React.js", "Node.js", "PHP"],
                database: ["MySQL", "SQLite"],
                tools: ["Git & GitHub", "VS Code", "Postman", "Figma"],
                other: ["API Integration", "File I/O Handling", "Threading", "GUI Design"]
            },

            // Proficiency Levels
            proficiency: {
                "JavaScript": { level: "Expert", percentage: 90 },
                "Java": { level: "Expert", percentage: 85 },
                "HTML/CSS": { level: "Advanced", percentage: 88 },
                "React.js": { level: "Advanced", percentage: 80 },
                "MySQL": { level: "Advanced", percentage: 82 },
                "Node.js": { level: "Intermediate", percentage: 75 }
            },

            // Achievements
            achievements: [
                "Top 5 IT School Programming Contest (2025)",
                "Full-Stack Web Development Certification (2025)",
                "Student Government Development Officer (2025)",
                "Developed Library Management System",
                "Created Digital Queue System for school"
            ],

            // Career Goals
            goals: [
                "Become a Full-Stack Web Developer",
                "Create innovative digital solutions",
                "Explore emerging technologies (IoT, AI, automation)",
                "Lead and mentor others in tech community"
            ],

            // Areas of Interest
            interests: [
                "Web Development (Frontend & Backend)",
                "Database Design and Optimization",
                "System Automation",
                "IoT Projects and Embedded Systems",
                "Game Development",
                "Mobile Development"
            ],

            // Education Background
            education: [
                {
                    level: "College",
                    degree: "BS Information Technology",
                    institution: "Camarines Norte State College",
                    location: "Daet, Camarines Norte",
                    year: "2024 - Present",
                    status: "Current"
                },
                {
                    level: "Senior High School",
                    strand: "Science Technology Engineering Mathematics (STEM)",
                    institution: "Camarines Norte Senior High School",
                    year: "2022 - 2024",
                    status: "Graduate"
                }
            ],

            // Services
            services: [
                "Full-Stack Web Development",
                "Custom Web Applications",
                "Database Design and Implementation",
                "API Development and Integration",
                "System Automation Solutions",
                "UI/UX Design",
                "Technical Consultation"
            ]
        };

        this.responses = {
            greeting: [
                "Hello! 👋 I'm here to help you learn about Prince Jheck and his work. What would you like to know?",
                "Hi there! 😊 Feel free to ask me anything about Prince's skills, projects, or how he can help you!",
                "Welcome! I'm Prince's AI assistant. How can I help you today?"
            ],
            
            farewell: [
                "Thank you for chatting! Feel free to reach out if you have more questions. 👋",
                "It was great talking to you! Don't hesitate to contact Prince if you need his expertise. 😊",
                "Goodbye! Hope I was helpful. You can always come back if you have more questions!"
            ],

            default: [
                "I'm not quite sure about that. Could you try asking about Prince's skills, education, achievements, or how he can help you?",
                "That's an interesting question! I'm best at answering questions about Prince's background, skills, projects, and services. Could you ask something along those lines?",
                "I might not have that specific information. Try asking about his technical skills, educational background, or the services he offers!"
            ]
        };

        this.initializeChatbot();
    }

    initializeChatbot() {
        // Wait for DOM to be fully loaded
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

        if (!this.chatbotToggle) {
            console.error('Chatbot elements not found');
            return;
        }

        this.bindEvents();
    }

    bindEvents() {
        // Toggle chatbot
        this.chatbotToggle.addEventListener('click', () => this.toggleChatbot());
        this.chatbotClose.addEventListener('click', () => this.toggleChatbot());

        // Send message
        this.chatbotSend.addEventListener('click', () => this.sendMessage());
        this.chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Suggestion chips
        const suggestionChips = document.querySelectorAll('.suggestion-chip');
        suggestionChips.forEach(chip => {
            chip.addEventListener('click', () => {
                const question = chip.getAttribute('data-question');
                this.chatbotInput.value = question;
                this.sendMessage();
            });
        });
    }

    toggleChatbot() {
        this.chatbotWindow.classList.toggle('active');
        if (this.chatbotWindow.classList.contains('active')) {
            this.chatbotInput.focus();
        }
    }

    sendMessage() {
        const message = this.chatbotInput.value.trim();
        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        this.chatbotInput.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Generate and show bot response
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, 1000 + Math.random() * 1000);
    }

    addMessage(text, sender) {
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
        // Convert markdown-like formatting to HTML
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator-message';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        this.chatbotMessages.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingIndicator = this.chatbotMessages.querySelector('.typing-indicator-message');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    scrollToBottom() {
        this.chatbotMessages.scrollTop = this.chatbotMessages.scrollHeight;
    }

    generateResponse(question) {
        const lowerQuestion = question.toLowerCase();

        // Greeting detection
        if (this.matchesPattern(lowerQuestion, ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon'])) {
            return this.getRandomResponse(this.responses.greeting);
        }

        // Farewell detection
        if (this.matchesPattern(lowerQuestion, ['bye', 'goodbye', 'see you', 'thanks', 'thank you'])) {
            return this.getRandomResponse(this.responses.farewell);
        }

        // Skills questions
        if (this.matchesPattern(lowerQuestion, ['skill', 'technology', 'stack', 'expertise', 'proficient', 'know'])) {
            return this.getSkillsResponse(lowerQuestion);
        }

        // Background/Education questions
        if (this.matchesPattern(lowerQuestion, ['background', 'education', 'study', 'school', 'university', 'college', 'who is', 'who are', 'about'])) {
            return this.getBackgroundResponse();
        }

        // Projects/Achievements questions
        if (this.matchesPattern(lowerQuestion, ['project', 'achievement', 'work', 'built', 'created', 'developed', 'portfolio'])) {
            return this.getProjectsResponse();
        }

        // Help/Services questions
        if (this.matchesPattern(lowerQuestion, ['help', 'service', 'offer', 'do for', 'assist', 'collaborate', 'hire', 'work with'])) {
            return this.getServicesResponse();
        }

        // Contact questions
        if (this.matchesPattern(lowerQuestion, ['contact', 'reach', 'email', 'message', 'connect', 'talk'])) {
            return this.getContactResponse();
        }

        // Goals/Future questions
        if (this.matchesPattern(lowerQuestion, ['goal', 'future', 'plan', 'career', 'aspiration', 'want to'])) {
            return this.getGoalsResponse();
        }

        // Interest questions
        if (this.matchesPattern(lowerQuestion, ['interest', 'passion', 'like', 'enjoy', 'love', 'hobby'])) {
            return this.getInterestsResponse();
        }

        // Specific technology questions
        if (this.matchesPattern(lowerQuestion, ['java', 'javascript', 'python', 'react', 'node', 'database', 'mysql'])) {
            return this.getSpecificTechResponse(lowerQuestion);
        }

        // Default response
        return this.getRandomResponse(this.responses.default);
    }

    matchesPattern(text, keywords) {
        return keywords.some(keyword => text.includes(keyword));
    }

    getRandomResponse(responseArray) {
        return responseArray[Math.floor(Math.random() * responseArray.length)];
    }

    getSkillsResponse(question) {
        const kb = this.knowledgeBase;
        
        return `Prince has a comprehensive skill set across multiple domains:\n\n**Programming Languages:** ${kb.skills.programming.join(', ')}\n\n**Web Technologies:** ${kb.skills.web.join(', ')}\n\n**Database Systems:** ${kb.skills.database.join(', ')}\n\n**Tools & Frameworks:** ${kb.skills.tools.join(', ')}\n\nHe's particularly strong in JavaScript and Java, with expert-level proficiency. Would you like to know more about any specific technology?`;
    }

    getBackgroundResponse() {
        const kb = this.knowledgeBase;
        
        return `**About Prince Jheck T. Juan:**\n\nPrince is a ${kb.personal.age}-year-old Information Technology student from ${kb.personal.location}. He's currently pursuing a Bachelor of Science in IT with specialization in **Software Development** at ${kb.personal.university}.\n\n**Education:**\n• Currently studying BS Information Technology (2024 - Present)\n• Graduated from CNHS with STEM strand (2022-2024)\n• Based in Camarines Norte, Philippines\n\nHe's highly motivated, detail-oriented, and passionate about learning new technologies to solve real-world problems!`;
    }

    getProjectsResponse() {
        const kb = this.knowledgeBase;
        
        return `**Prince's Achievements & Projects:**\n\n${kb.achievements.map(achievement => `✅ ${achievement}`).join('\n')}\n\nHe has hands-on experience building functional systems including:\n• Library Management Systems\n• Digital Queue Systems\n• Web Applications\n• Database-driven solutions\n\nHis work demonstrates strong problem-solving skills and practical application of modern technologies!`;
    }

    getServicesResponse() {
        const kb = this.knowledgeBase;
        
        return `**How Prince Can Help You:**\n\n${kb.services.map(service => `🔹 ${service}`).join('\n')}\n\nWhether you need a complete web application, database solution, or technical consultation, Prince has the skills and dedication to bring your project to life.\n\n**Why work with Prince?**\n• Strong technical foundation across multiple technologies\n• Proven track record with real-world projects\n• Detail-oriented and passionate about quality\n• Continuous learner staying updated with latest trends\n\nReady to collaborate? Check out the contact page to get in touch!`;
    }

    getContactResponse() {
        return `**Get in Touch with Prince:**\n\nYou can reach out through several channels:\n\n📧 **Contact Form:** Visit the contact page on this website\n💼 **LinkedIn:** Connect professionally on LinkedIn\n🐱 **GitHub:** Check out his code repositories\n\nPrince is always open to discussing new projects, collaboration opportunities, or answering technical questions. Don't hesitate to reach out!`;
    }

    getGoalsResponse() {
        const kb = this.knowledgeBase;
        
        return `**Prince's Career Goals:**\n\n${kb.goals.map(goal => `🎯 ${goal}`).join('\n')}\n\nHe's committed to continuous growth and making a positive impact in the tech industry. His journey involves mastering full-stack development while exploring emerging technologies to create innovative solutions that make a difference.`;
    }

    getInterestsResponse() {
        const kb = this.knowledgeBase;
        
        return `**Prince's Areas of Interest:**\n\n${kb.interests.map(interest => `💡 ${interest}`).join('\n')}\n\nHe's particularly passionate about building complete web solutions and exploring how technology can automate and improve everyday processes. Always excited to learn and apply new technologies!`;
    }

    getSpecificTechResponse(question) {
        const kb = this.knowledgeBase;
        
        if (question.includes('java') && !question.includes('javascript')) {
            return `**Java Expertise:**\n\nPrince has **expert-level** proficiency in Java (85%). His Java skills include:\n• Object-oriented programming\n• GUI development with Swing\n• File I/O operations\n• Multi-threading\n• System development\n\nHe's used Java to build various projects including management systems and desktop applications.`;
        }
        
        if (question.includes('javascript')) {
            return `**JavaScript Expertise:**\n\nPrince is an **expert** in JavaScript (90% proficiency). His JavaScript capabilities include:\n• Modern ES6+ features\n• DOM manipulation\n• Async operations and Promises\n• API integration\n• Frontend frameworks (React.js)\n• Backend with Node.js\n\nJavaScript is one of his strongest skills and he uses it extensively in web development projects.`;
        }
        
        if (question.includes('react')) {
            return `**React.js Skills:**\n\nPrince has **advanced** proficiency in React.js (80%). He's skilled in:\n• Component architecture\n• State management\n• React Hooks\n• Modern UI development\n• Building responsive interfaces\n\nHe uses React to create dynamic, user-friendly web applications.`;
        }
        
        if (question.includes('database') || question.includes('mysql')) {
            return `**Database Expertise:**\n\nPrince has **advanced** knowledge of database systems, particularly:\n• **MySQL** (82% proficiency) - Relational database design, query optimization, data normalization\n• **SQLite** - Lightweight databases for embedded systems\n\nHe can design efficient database schemas and optimize queries for performance.`;
        }
        
        return `Prince has experience with that technology! Check out the Skills page for a complete overview of his technical capabilities, or ask me about specific programming languages, frameworks, or tools.`;
    }
}

// Initialize chatbot when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new PortfolioChatbot();
    });
} else {
    new PortfolioChatbot();
}
