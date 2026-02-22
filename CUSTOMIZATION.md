# Customization Guide

## 🎨 How to Make It Your Own

### 1. Personal Information

#### Update Your Name
**File**: `index.php`

Find (Line ~17):
```html
<span>John Doe</span>
```

Replace with:
```html
<span>Your Name Here</span>
```

#### Update Hero Title
**File**: `index.php`

Find (Line ~66):
```html
<h1>Providing <span class="gradient-text">the best</span> project experience.</h1>
```

Replace with:
```html
<h1>Your Title <span class="gradient-text">here</span> with style.</h1>
```

#### Update Bio
**File**: `index.php`

Find (Line ~68):
```html
<p>I'm a Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills.</p>
```

Replace with your bio.

---

### 2. About Section

#### About Text
**File**: `index.php`

Find (Line ~163):
```html
<p>Hello! I'm a passionate Full Stack Developer...</p>
```

Replace with your about text. You can add multiple paragraphs:
```html
<p>First paragraph about yourself...</p>
<p>Second paragraph with career goals...</p>
```

#### Statistics
**File**: `index.php`

Find (Line ~179):
```html
<div class="stat-card">
    <div class="stat-number">50+</div>
    <div class="stat-label">Projects Completed</div>
</div>
```

Update the numbers and labels:
```html
<div class="stat-card">
    <div class="stat-number">YOUR NUMBER</div>
    <div class="stat-label">Your Label</div>
</div>
```

#### LinkedIn Link
**File**: `index.php`

Find (Line ~172):
```html
<a href="https://linkedin.com" target="_blank" class="social-btn">
```

Replace `https://linkedin.com` with your LinkedIn profile URL.

---

### 3. Skills Section

#### Add New Skill Category
**File**: `index.php`

Find the Skills section (Line ~208) and add:
```html
<div class="skill-category">
    <h3>Your Category</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
        <span class="skill-tag">Skill 3</span>
    </div>
</div>
```

#### Modify Existing Skills
Find the existing skills and replace:
```html
<span class="skill-tag">HTML5</span>
```

With your skills.

---

### 4. Projects Section

#### Edit Existing Project
**File**: `index.php`

Find the project card (Line ~240):
```html
<div class="project-card">
    <div class="project-image">
        <div class="placeholder-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"></div>
    </div>
    <div class="project-content">
        <h3>E-Commerce Platform</h3>
        <p>A full-stack e-commerce platform...</p>
        <div class="project-tech">
            <span>React</span>
            <span>Node.js</span>
        </div>
        <a href="#" class="project-link">View Project →</a>
    </div>
</div>
```

Update:
- `<h3>` - Project title
- `<p>` - Project description
- `<span>` - Technologies used
- `href="#"` - Link to project

#### Add New Project
Copy a project card and paste it again, then customize.

#### Change Project Colors
Modify the gradient:
```html
style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
```

Popular gradients:
- Purple: `135deg, #7c3aed 0%, #a855f7 100%`
- Pink: `135deg, #ec4899 0%, #f43f5e 100%`
- Blue: `135deg, #3b82f6 0%, #06b6d4 100%`
- Green: `135deg, #10b981 0%, #14b8a6 100%`

---

### 5. Contact Information

#### Update Email
**File**: `index.php`

Find (Line ~337):
```html
<p><i class="fas fa-envelope"></i> john@example.com</p>
```

Replace with your email:
```html
<p><i class="fas fa-envelope"></i> your@email.com</p>
```

#### Update Phone
**File**: `index.php`

Find:
```html
<p><i class="fas fa-phone"></i> +1 (555) 123-4567</p>
```

Replace with your phone:
```html
<p><i class="fas fa-phone"></i> +1 (XXX) XXX-XXXX</p>
```

#### Update Location
**File**: `index.php`

Find:
```html
<p><i class="fas fa-map-marker-alt"></i> New York, USA</p>
```

Replace with your location:
```html
<p><i class="fas fa-map-marker-alt"></i> Your City, Country</p>
```

---

### 6. Social Media Links

**File**: `index.php`

Update all social links. Find navigation section:
```html
<a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
<a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
<a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
```

Replace with your profiles:
```html
<a href="https://instagram.com/yourprofile" target="_blank"><i class="fab fa-instagram"></i></a>
<a href="https://facebook.com/yourprofile" target="_blank"><i class="fab fa-facebook"></i></a>
<a href="https://twitter.com/yourprofile" target="_blank"><i class="fab fa-twitter"></i></a>
```

Add more social links:
```html
<a href="https://github.com/yourprofile" target="_blank"><i class="fab fa-github"></i></a>
<a href="https://linkedin.com/in/yourprofile" target="_blank"><i class="fab fa-linkedin"></i></a>
```

---

### 7. GitHub Username

**File**: `script.js`

Find (Line ~132):
```javascript
const username = 'torvalds'; // Default GitHub user
```

Replace with your GitHub username:
```javascript
const username = 'yourusername'; // Default GitHub user
```

---

### 8. Design Customization

### Change Color Scheme
**File**: `styles.css`

Find (Line ~9):
```css
:root {
    --primary: #7c3aed;
    --secondary: #ec4899;
    --accent: #06b6d4;
}
```

Choose new colors:

**Option 1: Cool Blue**
```css
--primary: #3b82f6;      /* Blue */
--secondary: #0ea5e9;    /* Sky Blue */
--accent: #06b6d4;       /* Cyan */
```

**Option 2: Warm Orange**
```css
--primary: #f97316;      /* Orange */
--secondary: #ea580c;    /* Orange-Red */
--accent: #dc2626;       /* Red */
```

**Option 3: Green Nature**
```css
--primary: #10b981;      /* Emerald */
--secondary: #14b8a6;    /* Teal */
--accent: #06b6d4;       /* Cyan */
```

**Option 4: Pink Vibrant**
```css
--primary: #ec4899;      /* Pink */
--secondary: #f43f5e;    /* Rose */
--accent: #06b6d4;       /* Cyan */
```

### Change Fonts
**File**: `styles.css`

Find (Line ~23):
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

Replace with:
```css
body {
    font-family: 'Arial', sans-serif;  /* Clean Arial */
    /* OR */
    font-family: 'Georgia', serif;     /* Elegant serif */
    /* OR */
    font-family: 'Courier New', monospace;  /* Code-like */
}
```

---

### 9. Animation Customization

#### Slow Down Animations
**File**: `styles.css`

Find animations like:
```css
animation: fadeInDown 0.6s ease-out;
```

Change duration (0.6s):
```css
animation: fadeInDown 1.2s ease-out;  /* Slower */
```

#### Disable Animations
Find and change:
```css
animation: fadeInDown 0.6s ease-out;
```

To:
```css
animation: none;
```

#### Speed Up Animations
Change duration to smaller value:
```css
animation: fadeInDown 0.3s ease-out;  /* Faster */
```

---

### 10. Footer Customization

**File**: `index.php`

Find (Line ~349):
```html
<p>&copy; 2026 John Doe. All rights reserved.</p>
```

Replace with:
```html
<p>&copy; 2026 Your Name. All rights reserved.</p>
```

Or add more content:
```html
<p>&copy; 2026 Your Company. | All rights reserved.</p>
```

---

### 11. Navigation Menu

**File**: `index.php`

Update menu items (Line ~30):
```html
<li><a href="#home">Home</a></li>
<li><a href="#about">About me</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#contact">Contact</a></li>
```

Add or modify sections.

---

### 12. Form Customization

#### Contact Form Fields
**File**: `index.php`

To add a field, add to form (Line ~298):
```html
<div class="form-group">
    <input type="text" placeholder="Company" id="company" required>
    <span class="error-message" id="companyError"></span>
</div>
```

Then update validation in `script.js`.

#### Required Asterisk
Add to any field:
```html
<input type="text" placeholder="Your Name *" id="name" required>
```

---

## 🎨 Common Customization Scenarios

### Scenario 1: Change to Blue Theme
1. Update colors in `styles.css` `:root`
2. Change `--primary` to blue
3. Update project gradients
4. Update accent colors

### Scenario 2: Add More Projects
1. Copy project card HTML
2. Update title, description, tech
3. Update gradient color
4. Update project link

### Scenario 3: Change Animations Speed
1. Open `styles.css`
2. Find animation durations (0.6s, 0.8s)
3. Change globally with Find & Replace
4. Test in browser

### Scenario 4: Add New Section
1. Add HTML section to `index.php`
2. Add CSS styling to `styles.css`
3. Add navigation link
4. Add JavaScript if needed

---

## 🔧 Before and After Examples

### Example 1: Change Name
**Before:**
```html
<span>John Doe</span>
```

**After:**
```html
<span>Sarah Johnson</span>
```

### Example 2: Update About
**Before:**
```html
<p>I'm a Full Stack Software Engineer with experience in Website, Mobile, and Software development.</p>
```

**After:**
```html
<p>I'm a passionate UX Designer specializing in mobile applications and user-centered design.</p>
```

### Example 3: Change Theme Color
**Before:**
```css
--primary: #7c3aed;  /* Purple */
```

**After:**
```css
--primary: #3b82f6;  /* Blue */
```

---

## 📝 Customization Checklist

- [ ] Update name/title
- [ ] Update about section
- [ ] Change skills list
- [ ] Add your projects
- [ ] Update contact info
- [ ] Add social links
- [ ] Update GitHub username
- [ ] Change color scheme
- [ ] Update footer
- [ ] Update LinkedIn URL
- [ ] Test all changes
- [ ] Check on mobile
- [ ] Verify all links

---

## 🚀 After Customization

1. **Test Everything**
   - All sections load
   - All links work
   - Forms function
   - Responsive on mobile

2. **Deploy**
   - Upload files
   - Test live version
   - Share with employers

3. **Maintain**
   - Update projects regularly
   - Keep skills current
   - Monitor messages
   - Update testimonials

---

## 💡 Pro Tips

- Keep original as backup
- Test changes locally first
- Use browser dev tools (F12)
- Check mobile view always
- Keep animations smooth
- Maintain consistent branding
- Update regularly
- Backup important changes

---

**Happy customizing! 🎨**

*Reference the README.md for more technical details.*
