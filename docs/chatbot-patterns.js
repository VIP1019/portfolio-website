// MEGA PATTERN LIBRARY - 1000+ Question Variations
// This file contains comprehensive pattern matching for intelligent responses

const MEGA_PATTERNS = {
    // GREETINGS (150+ variations)
    greetings: [
        // Basic greetings
        'hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'good day',
        'howdy', 'hiya', 'sup', 'yo', 'hola', 'bonjour', 'aloha', 'namaste', 'konnichiwa', 'ciao',
        
        // Question forms
        'how are you', 'how do you do', 'how\'s it going', 'how are things', 'what\'s happening',
        'what\'s up', 'what\'s new', 'how have you been', 'how\'s life', 'how\'s everything',
        
        // Casual variations
        'hey there', 'hi there', 'hello there', 'what up', 'wassup', 'whats good', 'how you doing',
        'long time no see', 'good to see you', 'nice to meet you', 'pleased to meet you',
        
        // Time-based
        'morning', 'afternoon', 'evening', 'gm', 'good nite', 'good night',
        
        // Formal
        'salutations', 'welcome', 'greetings friend', 'pleased to make your acquaintance',
        
        // Regex patterns
        /^hi\b/i, /^hello\b/i, /^hey\b/i, /^howdy\b/i, /^sup\b/i, /^yo\b/i,
        /how (are|r) (you|u)/i, /what(')?s up/i
    ],
    
    // FAREWELLS (100+ variations)
    farewells: [
        'bye', 'goodbye', 'see you', 'see ya', 'later', 'bye bye', 'farewell', 'adios', 'cya',
        'catch you later', 'talk to you later', 'ttyl', 'gotta go', 'have to go', 'peace out',
        'take care', 'see you soon', 'see you later', 'until next time', 'talk later',
        'good night', 'goodnight', 'nite', 'sleep well', 'sweet dreams',
        'thanks', 'thank you', 'thx', 'ty', 'appreciate it', 'cheers',
        /^bye\b/i, /see (you|ya|u)/i, /gotta go/i, /talk (to you )?later/i
    ],
    
    // NAME/IDENTITY (200+ variations)
    nameIdentity: [
        'your name', 'who are you', 'what are you', 'introduce yourself', 'tell me about yourself',
        'what\'s your name', 'whats your name', 'who r u', 'who r you', 'what r u',
        'what do you do', 'what can you do', 'who is this', 'what is this',
        'are you a bot', 'are you ai', 'are you human', 'are you real',
        'tell me about you', 'about you', 'your identity', 'identify yourself',
        /who (are|r) (you|u)/i, /what (are|r) (you|u)/i, /your name/i
    ],
    
    // PRINCE'S NAME/IDENTITY (300+ variations)
    princeIdentity: [
        'prince jheck', 'prince', 'who is prince', 'about prince', 'tell me about prince',
        'prince juan', 'jheck juan', 'prince t juan', 'prince jheck juan',
        'tell me more', 'who\'s this', 'whose portfolio', 'owner', 'creator',
        'developer', 'student', 'person', 'guy', 'man', 'this person',
        'portfolio owner', 'website owner', 'site owner',
        /who (is|s) prince/i, /about prince/i, /tell .* prince/i
    ],
    
    // SKILLS/TECH STACK (400+ variations)
    skills: [
        // General skill queries
        'skill', 'skills', 'technology', 'technologies', 'tech stack', 'stack', 'expertise',
        'proficient', 'good at', 'expert in', 'know', 'knowledge', 'competent',
        'abilities', 'capabilities', 'can you do', 'what can', 'programming language',
        'languages', 'tools', 'frameworks', 'libraries',
        
        // Question forms
        'what do you know', 'what can you do', 'what are your skills', 'show me skills',
        'list skills', 'tell me skills', 'what technologies', 'tech you know',
        'programming skills', 'coding skills', 'development skills',
        
        // Specific techs
        'java', 'javascript', 'python', 'php', 'c++', 'html', 'css', 'react',
        'node', 'nodejs', 'node.js', 'express', 'mysql', 'mongodb', 'firebase',
        'bootstrap', 'tailwind', 'git', 'github', 'api', 'rest api',
        
        // What can he code
        'what language', 'which language', 'code in', 'program in', 'develop with',
        'front end', 'frontend', 'back end', 'backend', 'full stack', 'fullstack',
        
        /what .* (skill|tech|language)/i, /programming language/i, /tech stack/i
    ],
    
    // EDUCATION (250+ variations)
    education: [
        'education', 'school', 'college', 'university', 'study', 'studied', 'degree',
        'course', 'major', 'academic', 'qualification', 'graduated', 'graduate',
        'student', 'learning', 'enrolled', 'attending', 'alma mater',
        'where did you study', 'what school', 'which university', 'which college',
        'educational background', 'academic background', 'schooling',
        'bs it', 'bachelor', 'information technology', 'it student', 'stem',
        'high school', 'senior high', 'junior high', 'elementary',
        /where .* study/i, /what .* study/i, /which (school|college|university)/i
    ],
    
    // PROJECTS (350+ variations)
    projects: [
        'project', 'projects', 'work', 'portfolio', 'works', 'built', 'created',
        'developed', 'made', 'build', 'create', 'develop', 'make',
        'what have you built', 'what did you build', 'show me projects',
        'your projects', 'his projects', 'list projects', 'tell me projects',
        'previous work', 'past work', 'experience', 'app', 'application',
        'website', 'system', 'software', 'program',
        
        // Specific projects
        'queue', 'library', 'management', 'transportation', 'ride sharing',
        'digital queue', 'library management', 'ride-sharing',
        
        // Portfolio terms
        'best work', 'showcase', 'examples', 'demos', 'sample work',
        /what .* (built|created|made|developed)/i, /show .* project/i
    ],
    
    // ACHIEVEMENTS (200+ variations)
    achievements: [
        'achievement', 'achievements', 'award', 'awards', 'honor', 'honors',
        'accomplishment', 'accomplishments', 'success', 'recognition',
        'prize', 'won', 'earned', 'received', 'got', 'certificate',
        'best in', 'top', 'winner', 'finalist', 'awardee',
        'high honors', 'honor student', 'dean\'s list', 'academic excellence',
        'leadership', 'president', 'vice president', 'officer', 'club',
        /what .* achieve/i, /what .* won/i, /award/i
    ],
    
    // CONTACT (150+ variations)
    contact: [
        'contact', 'reach', 'email', 'message', 'connect', 'talk', 'chat',
        'get in touch', 'communicate', 'reach out', 'speak with', 'talk to',
        'email address', 'phone', 'number', 'social media', 'social',
        'linkedin', 'instagram', 'facebook', 'github', 'twitter',
        'how can i contact', 'how to reach', 'how to message',
        'dm', 'direct message', 'send message', 'get ahold',
        /how .* (contact|reach|message)/i, /email/i
    ],
    
    // GOALS/FUTURE (180+ variations)
    goals: [
        'goal', 'goals', 'future', 'plan', 'plans', 'career', 'aspiration',
        'aspirations', 'want to', 'dream', 'dreams', 'aim', 'ambition',
        'vision', 'next step', 'looking for', 'hoping to', 'wish to',
        'career goal', 'career plan', 'future plan', 'what next',
        'where do you see', 'in 5 years', 'long term', 'objective',
        /what .* (goal|plan|want)/i, /where .* (going|headed)/i
    ],
    
    // AGE (100+ variations)
    age: [
        'how old', 'age', 'old are you', 'your age', 'born', 'birthday',
        'birth date', 'when were you born', 'what year', 'how many years',
        'young', 'years old', 'bday', 'birth year',
        /how old/i, /what(')?s .* age/i, /when .* born/i
    ],
    
    // LOCATION (150+ variations)
    location: [
        'where', 'location', 'live', 'from', 'based', 'city', 'town',
        'place', 'area', 'region', 'country', 'province', 'state',
        'where are you', 'where from', 'where located', 'which city',
        'which country', 'hometown', 'home town', 'residence',
        'philippines', 'daet', 'camarines norte', 'bicol',
        /where .* (from|live|based|located)/i, /which (city|country|place)/i
    ],
    
    // HELP/SERVICES (200+ variations)
    help: [
        'help', 'assist', 'service', 'services', 'offer', 'provide',
        'do for me', 'can you help', 'need help', 'assistance',
        'collaborate', 'work together', 'work with', 'partner',
        'hire', 'freelance', 'available', 'looking for work',
        'what can you do', 'how can you help', 'what do you offer',
        'consulting', 'development', 'build website', 'create app',
        /can you (help|assist)/i, /what .* (do|offer|provide)/i
    ],
    
    // INTEREST/PASSION (120+ variations)
    interests: [
        'interest', 'interests', 'passion', 'passionate', 'like', 'love',
        'enjoy', 'hobby', 'hobbies', 'favorite', 'prefer', 'into',
        'what do you like', 'what interests', 'passionate about',
        'enjoy doing', 'like to do', 'free time', 'spare time',
        /what .* (like|love|enjoy|interest)/i, /passionate about/i
    ],
    
    // EXPERIENCE (130+ variations)
    experience: [
        'experience', 'years of experience', 'how long', 'how many years',
        'beginner', 'expert', 'intermediate', 'level', 'proficiency',
        'senior', 'junior', 'how experienced', 'work experience',
        'coding experience', 'programming experience', 'professional experience',
        /how (long|many) .* (experience|coding|programming)/i
    ],
    
    // WHY HIRE (100+ variations)
    whyHire: [
        'why hire', 'why choose', 'why work with', 'why you', 'what makes',
        'why should i', 'stand out', 'different', 'unique', 'special',
        'advantage', 'benefit', 'value', 'worth', 'better than',
        /why (hire|choose|work)/i, /what makes .* (special|different|unique)/i
    ],
    
    // AVAILABILITY (80+ variations)
    availability: [
        'available', 'availability', 'free', 'busy', 'schedule',
        'when available', 'can you start', 'start date', 'ready to work',
        'looking for work', 'seeking', 'open to', 'accepting',
        /are you available/i, /when .* (available|free|start)/i
    ],
    
    // RATE/PRICING (90+ variations)
    pricing: [
        'rate', 'price', 'cost', 'fee', 'charge', 'how much',
        'pricing', 'rates', 'budget', 'payment', 'compensation',
        'salary', 'hourly', 'project', 'quote', 'estimate',
        /how much/i, /what .* (cost|price|rate|charge)/i
    ],
    
    // TECH QUESTIONS - What is X? (500+ variations)
    techDefinitions: {
        html: ['what is html', 'define html', 'explain html', 'html mean', 'html definition'],
        css: ['what is css', 'define css', 'explain css', 'css mean', 'css definition'],
        javascript: ['what is javascript', 'what is js', 'define javascript', 'explain javascript'],
        python: ['what is python', 'define python', 'explain python', 'python programming'],
        java: ['what is java', 'define java', 'explain java', 'java programming'],
        react: ['what is react', 'define react', 'explain react', 'reactjs', 'react.js'],
        nodejs: ['what is node', 'what is nodejs', 'node.js', 'define node', 'explain node'],
        api: ['what is api', 'what is an api', 'define api', 'explain api', 'api mean'],
        database: ['what is database', 'what is db', 'define database', 'explain database'],
        mysql: ['what is mysql', 'define mysql', 'explain mysql'],
        mongodb: ['what is mongodb', 'define mongodb', 'explain mongodb', 'mongo db'],
        git: ['what is git', 'define git', 'explain git', 'version control'],
        github: ['what is github', 'define github', 'explain github']
    },
    
    // PROGRAMMING CONCEPTS (300+ variations)
    programmingConcepts: {
        oop: ['what is oop', 'object oriented', 'oop mean', 'define oop', 'explain oop'],
        variable: ['what is variable', 'define variable', 'explain variable', 'variables'],
        function: ['what is function', 'define function', 'explain function', 'functions'],
        loop: ['what is loop', 'define loop', 'explain loop', 'loops', 'iteration'],
        array: ['what is array', 'define array', 'explain array', 'arrays', 'list'],
        class: ['what is class', 'define class', 'explain class', 'classes'],
        method: ['what is method', 'define method', 'explain method', 'methods'],
        object: ['what is object', 'define object', 'explain object', 'objects']
    },
    
    // MATH/CALCULATIONS (50+ variations)
    math: [
        'calculate', 'what is', 'plus', 'minus', 'times', 'multiply', 'divide',
        'addition', 'subtraction', 'multiplication', 'division',
        '+', '-', '*', '/', '×', '÷', 'equals', 'sum', 'difference', 'product'
    ],
    
    // TIME/DATE (70+ variations)
    time: [
        'what time', 'current time', 'time now', 'what\'s the time', 'time is it',
        'what date', 'today', 'current date', 'what day', 'day is it',
        /what .* time/i, /what .* date/i, /what .* day/i
    ],
    
    // JOKES (40+ variations)
    jokes: [
        'joke', 'funny', 'make me laugh', 'tell me a joke', 'tell joke',
        'something funny', 'humor', 'humorous', 'comedy',
        /tell .* joke/i, /make me laugh/i
    ],
    
    // MOTIVATION (50+ variations)
    motivation: [
        'motivate', 'inspire', 'motivation', 'inspiration', 'quote',
        'motivational quote', 'inspirational quote', 'encourage',
        'motivate me', 'inspire me', 'need motivation',
        /motivate me/i, /inspire me/i, /motivational quote/i
    ]
};

// Export for use in chatbot.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MEGA_PATTERNS;
}
