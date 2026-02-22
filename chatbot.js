// Enhanced Intelligent AI Chatbot for Prince Jheck's Portfolio
// This chatbot can answer questions about the portfolio AND general knowledge questions
// Knowledge base about Prince Jheck T. Juan

class PortfolioChatbot {
    constructor() {
        // Comprehensive Knowledge Base
        this.knowledgeBase = {
            // Personal Information
            name: "Prince Jheck T. Juan",
            age: 20,
            location: "Daet, Camarines Norte, Philippines",
            email: "princejheckjuan023@gmail.com",
            status: "Available for work",
            currentEducation: "BS Information Technology - Software Development at Camarines Norte State College (2024-Present)",
            
            // Complete Education History
            education: {
                college: "BS Information Technology at Camarines Norte State College (2024-Present)",
                seniorHigh: "STEM at Camarines Norte Senior High School (2022-2024) - Graduated with High Honors",
                juniorHigh: "Camarines Norte National High School (2018-2022) - Consistent Honor Student",
                elementary: "Daet Elementary School (2017)"
            },
            
            // All Achievements
            achievements: [
                "Graduated with High Honors in Senior High School",
                "Consistent Honor Student in Junior High School",
                "Best in Research Awardee",
                "Best in Innovation Awardee",
                "National Finalist - Development Academy of the Philippines",
                "SG Vice President for Planning and Development",
                "Former Vice President of the Math Club",
                "Public Information Officer of YES-O",
                "Auditor of the Filipino Club",
                "Former SSG Representative",
                "DSTF Participant (2018)",
                "DOST I Make, We Make Participant",
                "Attended CCS Seminar on Technology and Student Development"
            ],
            
            // Complete Skills List
            skills: {
                programming: ["Java", "Python", "JavaScript", "PHP", "C++"],
                web: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Bootstrap", "Tailwind CSS"],
                databases: ["MySQL", "MongoDB", "Firebase"],
                tools: ["Git", "GitHub", "VS Code", "Eclipse", "IntelliJ IDEA", "Postman"],
                frameworks: ["React", "Express.js", "Laravel"],
                other: ["API Integration", "IoT Development", "Responsive Design", "RESTful APIs"]
            },
            
            // All Projects
            projects: [
                {
                    name: "Digital Queue Management System",
                    description: "Console-based system managing queues for educational assistance payout using threading and file I/O",
                    tech: ["Java", "Threading", "File I/O"]
                },
                {
                    name: "Library Management System",
                    description: "Complete system for library records with book listings, borrowing, and returns using Swing GUI",
                    tech: ["Java", "Swing GUI", "OOP", "File I/O"]
                },
                {
                    name: "Community Transportation & Ride-Sharing System",
                    description: "Web-based application for community ridesharing with real-time updates and location tracking",
                    tech: ["HTML5", "CSS3", "JavaScript", "MySQL", "API Integration"]
                },
                {
                    name: "Personal Portfolio Website",
                    description: "Professional portfolio with GitHub API, EmailJS, contact forms, and testimonial features",
                    tech: ["HTML", "CSS", "JavaScript", "PHP", "APIs"]
                }
            ],
            
            // Career Goals
            goals: [
                "Full-Stack Web Developer",
                "Digital Solution Creator",
                "Tech Innovator in IoT and AI",
                "Tech Community Leader"
            ],
            
            // Social Links
            social: {
                instagram: "https://www.instagram.com/prnc_j1",
                facebook: "https://www.facebook.com/ecel.tugade",
                github: "https://github.com/VIP1019",
                linkedin: "https://www.linkedin.com/in/princejheck-juan-27145a3a8"
            }
        };
        
        // Original knowledge base for compatibility
        this.oldKnowledgeBase = {
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

        // General knowledge questions - Make the bot intelligent for ANY question
        const generalResponse = this.handleGeneralQuestion(lowerQuestion, question);
        if (generalResponse) {
            return generalResponse;
        }

        // Default response
        return this.getRandomResponse(this.responses.default);
    }

    // NEW: Intelligent General Question Handler
    handleGeneralQuestion(lowerQuestion, originalQuestion) {
        // Time-related questions
        if (this.matchesPattern(lowerQuestion, ['what time', 'current time', 'time now'])) {
            const now = new Date();
            return `The current time is **${now.toLocaleTimeString()}** on ${now.toLocaleDateString()}.`;
        }

        // Date-related questions
        if (this.matchesPattern(lowerQuestion, ['what date', 'today', 'what day'])) {
            const now = new Date();
            const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return `Today is **${dayNames[now.getDay()]}, ${now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}**.`;
        }

        // Math calculations
        if (this.matchesPattern(lowerQuestion, ['calculate', 'what is', 'plus', 'minus', 'times', 'divided'])) {
            const mathResult = this.handleMathQuestion(originalQuestion);
            if (mathResult) return mathResult;
        }

        // Technology definitions
        if (this.matchesPattern(lowerQuestion, ['what is html', 'what is css', 'what is javascript', 'what is python', 
                                                  'what is java', 'what is react', 'what is node', 'what is api'])) {
            return this.getTechDefinition(lowerQuestion);
        }

        // Programming concepts
        if (this.matchesPattern(lowerQuestion, ['what is oop', 'object oriented', 'what is a variable', 'what is a function',
                                                  'what is a loop', 'what is an array', 'what is database'])) {
            return this.getProgrammingConcept(lowerQuestion);
        }

        // General greetings/small talk
        if (this.matchesPattern(lowerQuestion, ['how are you', 'how do you do', 'whats up', 'what up'])) {
            return "I'm doing great! I'm here to help you learn about Prince Jheck's portfolio or answer any tech-related questions you might have. What would you like to know?";
        }

        // Weather (acknowledge but can't provide)
        if (this.matchesPattern(lowerQuestion, ['weather', 'temperature', 'forecast'])) {
            return "I don't have access to live weather data, but I can tell you that Prince is located in **Daet, Camarines Norte, Philippines** 🇵🇭. You can check the local weather there online!";
        }

        // Jokes
        if (this.matchesPattern(lowerQuestion, ['tell me a joke', 'joke', 'funny'])) {
            return this.getTechJoke();
        }

        // Motivational/inspiration
        if (this.matchesPattern(lowerQuestion, ['motivate me', 'inspire', 'motivation', 'quote'])) {
            return this.getMotivationalQuote();
        }

        // Simple yes/no questions about capabilities
        if (this.matchesPattern(lowerQuestion, ['can you', 'are you able'])) {
            return "I can help you with:\n• Information about Prince Jheck's portfolio\n• Tech definitions and programming concepts\n• Basic calculations\n• General technology questions\n\nWhat would you like to know?";
        }

        return null; // No match, will use default response
    }

    // Math calculator
    handleMathQuestion(question) {
        try {
            // Extract numbers and operators
            const match = question.match(/(\d+\.?\d*)\s*([\+\-\*\/×÷])\s*(\d+\.?\d*)/);
            if (match) {
                const num1 = parseFloat(match[1]);
                const operator = match[2];
                const num2 = parseFloat(match[3]);
                let result;

                switch(operator) {
                    case '+': result = num1 + num2; break;
                    case '-': result = num1 - num2; break;
                    case '*':
                    case '×': result = num1 * num2; break;
                    case '/':
                    case '÷': result = num1 / num2; break;
                    default: return null;
                }

                return `**${num1} ${operator} ${num2} = ${result}**\n\nNeed any other calculations?`;
            }
        } catch (e) {
            return null;
        }
        return null;
    }

    // Technology definitions
    getTechDefinition(question) {
        const definitions = {
            'html': "**HTML (HyperText Markup Language)** is the standard markup language for creating web pages. It structures content on the web using elements like headings, paragraphs, links, and more. Prince uses HTML5 in his web projects!",
            'css': "**CSS (Cascading Style Sheets)** is used to style and layout web pages. It controls colors, fonts, spacing, and responsive design. Prince is proficient in CSS3 and frameworks like Bootstrap and Tailwind CSS!",
            'javascript': "**JavaScript** is a programming language that makes websites interactive. It runs in the browser and powers dynamic features. Prince uses JavaScript extensively, including frameworks like React and Node.js!",
            'python': "**Python** is a versatile, beginner-friendly programming language used for web development, data analysis, AI, and automation. Prince has Python in his skill set!",
            'java': "**Java** is a powerful, object-oriented programming language used for building enterprise applications, Android apps, and systems. Prince has built several projects with Java, including his Queue Management and Library Systems!",
            'react': "**React** is a JavaScript library for building user interfaces, especially single-page applications. It uses components and makes interactive UIs easier to create. Prince is skilled in React!",
            'node': "**Node.js** is a JavaScript runtime that lets you run JavaScript on servers (backend). It's fast, scalable, and perfect for building APIs. Prince uses Node.js in his full-stack projects!",
            'api': "**API (Application Programming Interface)** is a set of rules that allows different software to communicate. Think of it as a messenger between applications. Prince has integrated several APIs in his portfolio!"
        };

        for (let [key, value] of Object.entries(definitions)) {
            if (question.includes(key)) {
                return value;
            }
        }
        return null;
    }

    // Programming concepts
    getProgrammingConcept(question) {
        if (question.includes('oop') || question.includes('object oriented')) {
            return "**OOP (Object-Oriented Programming)** is a programming paradigm based on 'objects' containing data and methods. Key concepts include:\n• **Encapsulation** - Bundling data and methods\n• **Inheritance** - Creating new classes from existing ones\n• **Polymorphism** - Objects taking multiple forms\n• **Abstraction** - Hiding complex details\n\nPrince uses OOP principles in his Java projects!";
        }
        if (question.includes('variable')) {
            return "A **variable** is a container that stores data values. Think of it as a labeled box where you can put information. For example: `let name = \"Prince\";` creates a variable called 'name' storing the text 'Prince'.";
        }
        if (question.includes('function')) {
            return "A **function** is a reusable block of code that performs a specific task. It's like a mini-program within your program. Functions help organize code and avoid repetition. Example: `function greet() { return \"Hello!\"; }`";
        }
        if (question.includes('loop')) {
            return "A **loop** repeats a block of code multiple times. Common types:\n• **for loop** - Repeats a specific number of times\n• **while loop** - Repeats while a condition is true\n• **forEach** - Iterates over array elements\n\nLoops save time and make code efficient!";
        }
        if (question.includes('array')) {
            return "An **array** is a data structure that stores multiple values in a single variable. Think of it as a list. Example: `let skills = ['Java', 'Python', 'JavaScript'];` - Prince's skills can be stored in an array!";
        }
        if (question.includes('database')) {
            return "A **database** is an organized collection of data stored electronically. It allows you to store, retrieve, and manage information efficiently. Prince works with databases like MySQL, MongoDB, and Firebase!";
        }
        return null;
    }

    // Tech jokes
    getTechJoke() {
        const jokes = [
            "Why do programmers prefer dark mode? 🌙\nBecause light attracts bugs! 🐛",
            "How many programmers does it take to change a light bulb? 💡\nNone. It's a hardware problem! 🔧",
            "Why do Java developers wear glasses? 👓\nBecause they don't C#! 😄",
            "What's a programmer's favorite hangout spot? 🎯\nThe Foo Bar! 🍺",
            "Why did the developer go broke? 💸\nBecause he used up all his cache! 💰"
        ];
        return this.getRandomResponse(jokes);
    }

    // Motivational quotes
    getMotivationalQuote() {
        const quotes = [
            "💡 *'The only way to do great work is to love what you do.'* - Steve Jobs\n\nKeep pushing forward, just like Prince with his projects!",
            "🚀 *'Code is like humor. When you have to explain it, it's bad.'* - Cory House\n\nWrite clean, self-explanatory code!",
            "⭐ *'First, solve the problem. Then, write the code.'* - John Johnson\n\nThink before you code!",
            "🌟 *'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'* - Martin Fowler",
            "🎯 *'The best error message is the one that never shows up.'* - Thomas Fuchs\n\nWrite robust code!"
        ];
        return this.getRandomResponse(quotes);
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
