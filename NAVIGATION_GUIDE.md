# Navigation Guide - Prince Jheck's Portfolio

## How Navigation Works

Your portfolio now has a multi-page structure with smooth navigation between pages. Here's how it all works:

## Page Structure

### Header Navigation Bar (Fixed at Top)
The navigation bar appears on every page and allows you to navigate between sections:

```
[Logo] Prince Jheck    Home | About me | Skills | Projects | Contact | [Social Icons]
```

### Navigation Links

1. **Home** 
   - Link: `index.php`
   - Content: Hero section, about preview, skills overview, projects preview, contact form
   - Action: Clicking "Home" takes you to the main landing page

2. **About me**
   - Link: `about.php`
   - Content: Detailed personal background, career goals, achievements, why you stand out
   - Action: Clicking "About me" navigates to the full About page

3. **Skills**
   - Link: `skills.php`
   - Content: Detailed skill breakdown by category with proficiency levels
   - Action: Clicking "Skills" shows your complete tech stack

4. **Projects**
   - Link: `projects.php`
   - Content: Three featured projects with details, gallery, and inquiry form
   - Action: Clicking "Projects" displays all your projects

5. **Contact**
   - Link: `index.php#contact` (Anchor link)
   - Content: Contact form on the home page
   - Action: Clicking "Contact" scrolls to contact section on home page

6. **Social Media**
   - Instagram: https://www.instagram.com
   - Facebook: https://www.facebook.com
   - Twitter: https://www.twitter.com
   - Action: Opens in new tab

## Navigation Implementation

### HTML Structure
```html
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
            <li><a href="index.php#contact">Contact</a></li>
        </ul>
        <div class="nav-social">
            <!-- Social icons -->
        </div>
    </div>
</nav>
```

## Navigation Features

### 1. Fixed Positioning
- Navigation bar stays at the top while scrolling
- Always accessible from any page
- z-index: 1000 (highest priority)

### 2. Smooth Scrolling
- When clicking anchor links (like Contact), the page smoothly scrolls
- Scroll offset accounts for fixed navbar height (80px)

### 3. Responsive Design
- On desktop: Full horizontal menu
- On mobile: Menu remains visible (can be enhanced with hamburger menu)

### 4. Active States
- Links have hover effects with gradient underline animation
- Smooth transitions on all interactions

## How to Add More Pages

If you want to add additional pages:

1. Create a new file: `new-page.php`
2. Copy the navigation structure from `about.php`
3. Add the link to the navigation menu:
```html
<li><a href="new-page.php">Page Name</a></li>
```

## Navigation Data Flow

```
User clicks link
    ↓
Browser navigates to new page (PHP file)
    ↓
Page loads with same navigation bar
    ↓
Content area changes based on page
    ↓
User can navigate to another page
```

## Current Page Flow

### User Journey Example 1: Explore Portfolio
```
1. Land on index.php (Home)
2. Click "About me" → about.php
3. Click "Skills" → skills.php
4. Click "Projects" → projects.php
5. Click "Contact" → index.php#contact (home page, scrolled to contact)
```

### User Journey Example 2: Direct Access
```
1. Type in address bar: yoursite.com/projects.php
2. Projects page loads with navigation
3. Can navigate to other pages from there
```

## Customizing Navigation

### Change Logo
Edit `index.php` (and all other pages):
```html
<div class="nav-logo">
    <i class="fas fa-code"></i>
    <span>Your Name</span>
</div>
```

### Change Link Text
Edit the `<a>` tag text in nav-menu

### Add New Link
Add a new `<li>` to the `<ul class="nav-menu">`:
```html
<li><a href="blog.php">Blog</a></li>
```

### Change Link Colors
Edit CSS in `styles.css`:
```css
.nav-menu a {
    color: var(--text-light);
}

.nav-menu a:hover {
    color: var(--primary);
}
```

## Mobile Navigation Enhancement (Optional)

To add a hamburger menu for mobile, you would:

1. Add hamburger button HTML
2. Add CSS for mobile menu state
3. Add JavaScript to toggle menu visibility

Current implementation is already responsive but could be enhanced further.

## Anchor Links Within Pages

The Contact link uses an anchor (#contact) to scroll to a section:
- `index.php#contact` → Scrolls to contact section on home page
- This is implemented using smooth scrolling in `script.js`

## Navigation States

### Hover State
```css
.nav-menu a::after {
    width: 0;
    height: 2px;
    background: gradient (purple to cyan)
    transition: width 0.3s ease;
}

.nav-menu a:hover::after {
    width: 100%;  /* Underline appears on hover */
}
```

### Active State
When you're on a page, the corresponding link could be highlighted (optional enhancement):
```javascript
// Add this to highlight current page
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-menu a').forEach(link => {
    if (link.href.includes(currentPage)) {
        link.classList.add('active');
    }
});
```

## Accessibility Features

- Semantic HTML structure (`<nav>`, `<a>` tags)
- Clear link text (not "Click here")
- Proper contrast ratios
- Keyboard navigation support (Tab key)
- Links have visible focus states

## Performance Considerations

- Navigation bar is lightweight
- CSS animations use GPU acceleration
- No heavy JavaScript dependencies
- Quick page transitions
- Font Awesome icons are cached

## Troubleshooting Navigation

### Links not working?
- Ensure files exist: `about.php`, `skills.php`, `projects.php`
- Check file paths are correct
- Files should be in same directory as `index.php`

### Styling inconsistent across pages?
- All pages link to `styles.css`
- Ensure `styles.css` is in the same directory
- Clear browser cache if needed

### Scroll position resets?
- This is normal behavior when navigating between pages
- Pages are separate HTML documents

---

## Quick Links for Users

| Page | Link | Purpose |
|------|------|---------|
| Home | index.php | Main portfolio landing |
| About | about.php | Personal background |
| Skills | skills.php | Technical expertise |
| Projects | projects.php | Portfolio projects |
| Contact | index.php#contact | Send message |

---

**Last Updated:** February 10, 2025
