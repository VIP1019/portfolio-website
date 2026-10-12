// Comprehensive RAG Knowledge Base for Prince Jheck's Portfolio Chatbot
const portfolioKnowledge = {
    personal: {
        fullName: "Prince Jheck T. Juan",
        preferredName: "Prince Jheck",
        age: 20,
        nationality: "Filipino",
        location: "Daet, Camarines Norte, Philippines",
        status: "Available for internships, freelance, and software development work",
        role: "Software Developer & IT Student",
        email: "princejheckjuan023@gmail.com",
        github: "https://github.com/VIP1019",
        linkedin: "https://www.linkedin.com/in/princejheck-juan-27145a3a8",
        summary: "Passionate 20-year-old Information Technology student specializing in Software Development at Camarines Norte State College. An active challenger in global and national competitions like the APAC Stellar Hackathon (International Finalist) and the Development Academy of the Philippines NextGenPH (National Finalist). Proven track record in full-stack development, blockchain (Stellar/Soroban), IoT, and community-focused technology solutions."
    },

    education: {
        college: {
            degree: "Bachelor of Science in Information Technology (BSIT)",
            specialization: "Software Development",
            institution: "Camarines Norte State College (CNSC)",
            location: "Daet, Camarines Norte, Philippines",
            period: "2024 - Present",
            status: "Current Student"
        },
        seniorHigh: {
            strand: "Science, Technology, Engineering, and Mathematics (STEM)",
            institution: "Camarines Norte Senior High School",
            location: "Daet, Camarines Norte",
            period: "2022 - 2024",
            honors: "Graduated with High Honors, Best in Research, Best in Innovation"
        },
        juniorHigh: {
            institution: "Camarines Norte National High School",
            location: "Daet, Camarines Norte",
            period: "2018 - 2022",
            honors: "Consistent Honor Student"
        }
    },

    hackathonsAndHonors: [
        {
            title: "International Finalist - APAC Stellar Hackathon Grand Finale 2026",
            role: "Lead Developer & Full-Stack Developer of PUNDAR",
            details: "Qualified as an International Finalist representing the Philippines against top teams from Vietnam and Indonesia for the Grand Finale on July 31, 2026.",
            project: "PUNDAR (Progressive Unified Network for Digital Asset Resilience)",
            tech: "Stellar Blockchain, Soroban Smart Contracts, Kotlin, Full-Stack Web3",
            impact: "Digitizes traditional community savings (paluwagan), group payments, and financial reputation building."
        },
        {
            title: "National Finalist - Development Academy of the Philippines NextGenPH (DAP 2025)",
            role: "Innovator / Developer",
            details: "Recognized as a National Finalist for DementAId at the Development Academy of the Philippines NextGenPH competition.",
            project: "DementAId: An AI-Powered Smart Anklet and Mobile Application",
            tech: "Artificial Intelligence, IoT Anklet Hardware, Mobile Application",
            impact: "Designed to provide safer, smarter, and proactive patient care for individuals suffering from dementia."
        },
        {
            title: "Academic & Leadership Awards",
            details: [
                "Graduated with High Honors (Senior High School STEM)",
                "Best in Research Awardee",
                "Best in Innovation Awardee",
                "Consistent Honor Student throughout Junior High School",
                "College Student Government (SG) Vice President for Planning and Development (CCMS)",
                "Former Vice President of the Mathematics Club",
                "Public Information Officer (PIO) of YES-O",
                "Auditor of the Filipino Club",
                "Former Supreme Student Government (SSG) Representative"
            ]
        }
    ],

    skills: {
        programmingLanguages: ["Java", "Kotlin", "TypeScript", "JavaScript", "Python", "PHP", "C++", "Rust (Soroban)"],
        webAndFrameworks: ["React.js", "Node.js", "Express.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "RESTful APIs"],
        blockchainAndWeb3: ["Stellar Ecosystem", "Soroban Smart Contracts", "FinTech & Digital Paluwagan Integrations"],
        mobileAndIoT: ["Android (Kotlin)", "IoT Hardware Prototyping", "Sensor Integration", "Microcontrollers"],
        databases: ["MySQL", "SQLite", "MongoDB", "Firebase"],
        developerTools: ["Git", "GitHub", "VS Code", "Postman", "Figma", "IntelliJ IDEA", "Eclipse"]
    },

    featuredProjects: [
        {
            name: "PUNDAR (Progressive Unified Network for Digital Asset Resilience)",
            tag: "Web3 / FinTech / Blockchain",
            role: "Lead Developer & Full-Stack Developer",
            description: "A decentralized financial platform built on Stellar and Soroban. It transforms everyday community savings (paluwagan) and group contributions into verifiable digital financial reputations and micro-investment opportunities.",
            technologies: ["Stellar Blockchain", "Soroban Smart Contracts", "Kotlin", "Web3"],
            github: "https://github.com/VIP1019/Pundar-stellar"
        },
        {
            name: "DementAId",
            tag: "AI & Healthcare IoT",
            role: "Lead Developer & System Architect",
            description: "An AI-powered smart anklet hardware and mobile companion application designed for proactive and safer dementia patient monitoring and emergency alerts. Recognized as DAP National Finalist.",
            technologies: ["Artificial Intelligence", "IoT Hardware", "Mobile App", "Sensors"]
        },
        {
            name: "ReliefLink (disaster-relief-link)",
            tag: "Web Development / Public Service",
            role: "Full-Stack Developer",
            description: "Web-based disaster relief management system for municipalities. Allows barangay officials to submit disaster reports while prioritizing affected zones with weather API and instant notifications.",
            technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Weather API", "MySQL"],
            github: "https://github.com/VIP1019/disaster-relief-link"
        },
        {
            name: "Lelis Realty Management System",
            tag: "Enterprise Web App",
            role: "Full-Stack Developer",
            description: "Real Estate Appraisal and Brokerage Management System designed to streamline property listings, appraisal computations, client CRM, and transaction tracking.",
            technologies: ["TypeScript", "React", "Node.js", "Database Management"],
            github: "https://github.com/VIP1019/Lelis-Realty-Real-Estate-Appraisal-Brokerage"
        },
        {
            name: "StaCruz Property Custodian Management System",
            tag: "Government Inventory System",
            role: "Co-Developer (Contributed)",
            description: "Property custodian management platform built for Sta. Cruz, Laguna government offices to streamline equipment accountability, inventory logs, and property audits.",
            technologies: ["PHP", "MySQL", "Inventory Management", "Bootstrap"],
            github: "https://github.com/jailenannm-web/StaCruzPropertyCustodianSystem"
        },
        {
            name: "Digital Queue Management System",
            tag: "Desktop / System Software",
            role: "Software Developer",
            description: "Multithreaded console and desktop application managing concurrent queues for educational assistance payouts using threading and persistent file I/O operations.",
            technologies: ["Java", "Concurrency / Threading", "File I/O", "Data Structures"]
        },
        {
            name: "Library Management System",
            tag: "Desktop Software",
            role: "Software Developer",
            description: "Comprehensive library operations software handling book catalogs, patron memberships, borrow/return transactions, and penalties via a Java Swing graphical interface.",
            technologies: ["Java", "Swing GUI", "OOP", "File I/O"]
        },
        {
            name: "9Tech Mobile Application",
            tag: "Mobile Development",
            role: "Mobile Developer",
            description: "Android application streamlining inventory monitoring, repair logs, and warranty tracking for electronic repair businesses.",
            technologies: ["Android", "Kotlin", "SQLite"]
        },
        {
            name: "LUMINA Mental Wellness App",
            tag: "Mobile AI Application",
            role: "Mobile Developer",
            description: "Student mental well-being companion offering journaling, mood tracking, sentiment analysis, and Filipino cultural proverbs for motivation.",
            technologies: ["Mobile Development", "Sentiment Analysis", "Kotlin"]
        }
    ],

    repositories: [
        { name: "Pundar-stellar", desc: "Decentralized financial platform using Stellar & Soroban for digital paluwagan", lang: "Kotlin / Web3" },
        { name: "portfolio-website", desc: "Interactive developer portfolio with API integrations and AI assistant", lang: "HTML / CSS / JS" },
        { name: "StaCruzPropertyCustodianSystem", desc: "Government property custodian inventory management system", lang: "PHP" },
        { name: "CCMS-GRACE", desc: "College of Computing and Multimedia Studies Academic Portal", lang: "HTML / PHP" },
        { name: "pundar-gcash-landing", desc: "Pundar GCash on-ramp/off-ramp interface and landing page", lang: "TypeScript" },
        { name: "SiteBuilder", desc: "Web-based responsive website layout and builder utility", lang: "JavaScript" },
        { name: "disaster-relief-link", desc: "ReliefLink municipal disaster reporting & relief dispatch system", lang: "HTML / PHP" },
        { name: "glyza", desc: "Custom modern responsive web application", lang: "HTML / CSS" },
        { name: "Lelis-Realty-Real-Estate-Appraisal-Brokerage", desc: "Real estate appraisal and brokerage management portal", lang: "TypeScript" },
        { name: "9tech", desc: "Android tech repair inventory & service tracking system", lang: "Kotlin" },
        { name: "PABFO_MS", desc: "Provincial Agriculture and Biosystems Field Operations System", lang: "PHP" },
        { name: "LUMINA", desc: "Mental wellness app with sentiment analysis & proverbs", lang: "Kotlin" },
        { name: "catherines-diorama-IOT-BASED", desc: "IoT-based automated smart diorama hardware project", lang: "HTML / C++" },
        { name: "IOT-DIORAMA-CATHERINES", desc: "IoT diorama web client control interface", lang: "JavaScript" },
        { name: "career-paths-in-IT", desc: "IT career guidance and roadmap explorer platform", lang: "HTML" },
        { name: "custodian-im", desc: "Property custodian inventory accountability software", lang: "PHP" },
        { name: "MotorPool-System", desc: "University vehicle motorpool reservation & tracking system", lang: "Java" }
    ],

    servicesAndAvailability: [
        "Full-Stack Web Development (Responsive web apps, APIs, modern frontends)",
        "Blockchain & Web3 Prototyping (Stellar ecosystem, Soroban smart contracts, FinTech)",
        "Desktop & System Software (Java multithreading, inventory systems, management portals)",
        "IoT & Hardware Prototyping (Smart sensors, connected devices, automation)",
        "Database Architecture & API Integration (REST APIs, MySQL, PostgreSQL, Firebase)",
        "Available for: Internships, Contract Developer roles, Collaborative Projects, and Freelance"
    ]
};

// Expose globally for both browser and Node environments
if (typeof window !== 'undefined') {
    window.portfolioKnowledge = portfolioKnowledge;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioKnowledge;
}
