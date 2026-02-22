# Portfolio Website Updates

## Personal Information Added

Your portfolio has been successfully updated with all your personal information:

### Personal Details
- **Name:** Prince Jheck T. Juan
- **Age:** 20 years old
- **Course:** Bachelor of Science in Information Technology - Software Development Track
- **LinkedIn:** www.linkedin.com/in/princejheck-juan-27145a3a8

### Page Structure

The portfolio now includes the following pages:

#### 1. **Home Page (index.php)**
- Hero section with animated tech icons
- About Me section with stats
- Skills overview
- Featured projects
- Contact form
- Testimonials section
- GitHub activity integration

#### 2. **About Me Page (about.php)**
Detailed information about:
- Personal background and motivation
- Career goals and aspirations
- Education details
- Areas of interest in IT
- Achievements and awards:
  - National Finalist - Development Academy of the Philippines (2025)
  - Top 5 in IT School Programming Contest (2025)
  - Full-Stack Web Development Certification (2025)
  - Student Government Development Coordinating Officer
- Why you stand out as a candidate

#### 3. **Skills Page (skills.php)**
Comprehensive skill breakdown organized by categories:
- **Programming Languages:** Java, Python, JavaScript, C++
- **Web Technologies:** HTML5, CSS3, Bootstrap, React.js, Node.js
- **Databases:** MySQL, SQLite
- **Tools & Frameworks:** Git, GitHub, VS Code, Postman, Figma
- **Other Skills:** API Integration, File I/O, Threading, GUI Design
- **Proficiency levels** with animated progress bars

#### 4. **Projects Page (projects.php)**
Three featured projects:
1. **Digital Queue Management System**
   - Technologies: Java, Threading, File I/O
   - Features: Multi-threaded processing, persistent data storage

2. **Library Management System**
   - Technologies: Java, Swing GUI, OOP, File I/O
   - Features: Book catalog, member tracking, transactions

3. **Community Transportation & Ride-Sharing System**
   - Technologies: HTML5, CSS3, JavaScript, MySQL, API Integration
   - Features: Route matching, cost splitting, real-time updates

Also includes:
- Project gallery with visual showcase
- Project inquiry form for potential clients

## Navigation System

The header navigation links connect to separate pages:
- **Home** - Main landing page
- **About me** - Personal background and achievements
- **Skills** - Detailed skill breakdown
- **Projects** - Detailed project showcase
- **Contact** - Contact form on home page

## Transaction Features

### 1. Contact Form (Home Page)
- Collects name, email, subject, and message
- Form validation
- Sends data to backend via PHP
- Success/error feedback

### 2. Testimonial Form (Home Page)
- Collects name, email, rating, and feedback
- 5-star rating system
- Displays submitted testimonials
- Data persists using localStorage

### 3. Project Inquiry Form (Projects Page)
- Collects name, email, project type, description, and budget
- Project type dropdown selection
- Validation and error handling
- Success confirmation modal

## API Integrations

### 1. GitHub API Integration
- Displays real-time GitHub repository data
- Shows star count, forks, and watchers
- Falls back to demo data if API unavailable

### 2. Email Validation
- Real-time email format validation
- Error messages for invalid inputs

## Animations & Effects

The portfolio features many interactive animations:
- **Smooth scrolling** between sections
- **Fade-in animations** for elements
- **Hover effects** on cards and buttons
- **Parallax scrolling** for background effects
- **Progress bar animations** for skills
- **Floating orb** background effect
- **Twinkling stars** in hero sections
- **Icon orbital animation** in hero circle

## Styling & Design

- **Dark futuristic theme** with purple, cyan, and pink accents
- **Fully responsive** design for mobile, tablet, and desktop
- **Smooth transitions** on all interactive elements
- **Professional color scheme** with proper contrast
- **Modern typography** and spacing
- **Gradient backgrounds** and text effects

## File Structure

```
/vercel/share/v0-project/
├── index.php (Home page)
├── about.php (About me page)
├── skills.php (Skills showcase)
├── projects.php (Projects showcase)
├── styles.css (Complete styling with animations)
├── script.js (Interactive functionality)
├── contact-handler.php (Contact form backend)
├── testimonial-handler.php (Testimonial backend)
├── admin-panel.php (View submissions)
└── .htaccess (Server configuration)
```

## How to Customize

### Update Your Information
Edit the relevant pages to change:
- About page: Personal background, career goals
- Skills page: Add/remove skills and proficiencies
- Projects page: Update project descriptions

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #7c3aed; /* Main purple */
    --accent: #06b6d4; /* Cyan accent */
    --secondary: #ec4899; /* Pink */
}
```

### Add Your Social Links
Update the social media URLs in the navigation and footer

### Connect Email
Update the contact forms to integrate with EmailJS or your email service

## Running Locally

```bash
php -S localhost:8000
# Visit http://localhost:8000
```

## Deployment

The portfolio is ready to deploy to any PHP-enabled hosting:
1. Upload all files to your hosting provider
2. Ensure PHP is enabled
3. Update contact form email settings
4. Your portfolio is live!

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (Chromium-based)
- Firefox
- Safari
- Mobile browsers

## Performance

- Optimized animations using CSS transforms
- Lazy loading for images
- Smooth scrolling behavior
- Efficient event listeners
- Minimal dependencies (only Font Awesome icons)

---

**Last Updated:** February 10, 2025
**Version:** 2.0 (Multi-page portfolio)
