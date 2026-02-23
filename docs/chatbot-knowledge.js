// Comprehensive Knowledge Base for Prince Jheck's Portfolio Chatbot
const portfolioKnowledge = {
    // Personal Information
    personal: {
        fullName: "Prince Jheck T. Juan",
        nickname: "Prince Jheck",
        age: 20,
        nationality: "Filipino",
        location: "Daet, Camarines Norte, Philippines",
        status: "Available for work",
        email: "princejheckjuan023@gmail.com"
    },

    // Education
    education: {
        current: {
            level: "College",
            degree: "Bachelor of Science in Information Technology",
            specialization: "Software Development",
            school: "Camarines Norte State College",
            location: "Daet, Camarines Norte",
            year: "2024 - Present",
            status: "In Progress"
        },
        seniorHigh: {
            level: "Senior High School",
            strand: "Science Technology Engineering Mathematics (STEM)",
            school: "Camarines Norte Senior High School",
            location: "Daet, Camarines Norte",
            year: "2022 - 2024",
            status: "Graduated with High Honors"
        },
        juniorHigh: {
            level: "Junior High School",
            school: "Camarines Norte National High School",
            location: "Daet, Camarines Norte",
            year: "2018 - 2022",
            status: "Consistent Honor Student"
        },
        elementary: {
            level: "Elementary",
            school: "Daet Elementary School",
            location: "Daet, Camarines Norte",
            year: "2017",
            status: "Graduate"
        }
    },

    // Achievements & Awards
    achievements: [
        "Graduated with High Honors in Senior High School",
        "Consistent Honor Student in Junior High School",
        "Best in Research Awardee",
        "Best in Innovation Awardee",
        "National Finalist - Development Academy of the Philippines (DAP)",
        "Student Government (SG) Vice President for Planning and Development",
        "Former Vice President of the Math Club",
        "Public Information Officer (PIO) of YES-O",
        "Auditor of the Filipino Club",
        "Former SSG Representative",
        "DSTF Participant (2018)",
        "DOST I Make, We Make Participant",
        "Attended CCS Seminar on Technology and Student Development"
    ],

    // Skills
    skills: {
        programmingLanguages: ["Java", "Python", "JavaScript", "PHP", "C++"],
        webTechnologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Bootstrap", "Tailwind CSS"],
        databases: ["MySQL", "MongoDB", "Firebase"],
        tools: ["Git", "GitHub", "VS Code", "Eclipse", "IntelliJ IDEA", "Postman"],
        frameworks: ["React", "Express.js", "Laravel"],
        other: ["API Integration", "IoT Development", "Responsive Design", "RESTful APIs"]
    },

    // Projects
    projects: [
        {
            name: "Digital Queue Management System",
            description: "A console-based system that manages queues for educational assistance payout using threading and file I/O operations. Handles concurrent requests efficiently.",
            technologies: ["Java", "Threading", "File I/O"],
            category: "System Development"
        },
        {
            name: "Library Management System",
            description: "A complete system to organize and manage library records including book listings, borrowing, and returns. Features a user-friendly Swing GUI interface.",
            technologies: ["Java", "Swing GUI", "OOP", "File I/O"],
            category: "Desktop Application"
        },
        {
            name: "Community Transportation & Ride-Sharing System",
            description: "A web-based application connecting community members for ridesharing and transport planning. Features real-time updates and location tracking.",
            technologies: ["HTML5", "CSS3", "JavaScript", "MySQL", "API Integration"],
            category: "Web Application"
        },
        {
            name: "Personal Portfolio Website",
            description: "A professional portfolio website showcasing skills, projects, and achievements with API integrations (GitHub, EmailJS, Contact Form) and transaction features.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "EmailJS", "GitHub API"],
            category: "Web Development"
        }
    ],

    // Career Goals
    careerGoals: [
        "Become a Full-Stack Web Developer mastering both frontend and backend technologies",
        "Create innovative digital solutions that improve efficiency and accessibility",
        "Explore emerging technologies like IoT, AI, and system automation",
        "Lead and mentor others in the tech industry and contribute to open-source projects"
    ],

    // Interests
    interests: [
        "Web Development",
        "Software Development",
        "API Integration",
        "IoT Projects",
        "Mobile Development",
        "System Design",
        "Open Source Contribution",
        "Technology Innovation"
    ],

    // Social Links
    socialMedia: {
        instagram: "https://www.instagram.com/prnc_j1",
        facebook: "https://www.facebook.com/ecel.tugade",
        github: "https://github.com/VIP1019",
        linkedin: "https://www.linkedin.com/in/princejheck-juan-27145a3a8"
    },

    // Contact Information
    contact: {
        email: "princejheckjuan023@gmail.com",
        portfolio: "http://localhost:3000",
        github: "https://github.com/VIP1019",
        linkedin: "https://www.linkedin.com/in/princejheck-juan-27145a3a8"
    }
};

// Export for use in chatbot
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioKnowledge;
}
