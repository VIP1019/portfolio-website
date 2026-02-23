// DOM Elements
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('successModal');
const testimonialForm = document.getElementById('testimonialForm');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Clear error messages
function clearErrors() {
    const errorElements = ['nameError', 'emailError', 'subjectError', 'messageError'];
    errorElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = '';
            element.style.display = 'none';
        }
    });
}

// Show error message
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        errorElement.style.color = '#ff4757';
        errorElement.style.fontSize = '0.85rem';
        errorElement.style.marginTop = '0.5rem';
    }
}

// Modal Functions
function showSuccessModal(message) {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.textContent = message;
    }
    if (modal) {
        modal.classList.add('show');
        
        setTimeout(() => {
            modal.classList.remove('show');
        }, 3000);
    }
}

function closeModal() {
    if (modal) {
        modal.classList.remove('show');
    }
}

// Make closeModal globally accessible
window.closeModal = closeModal;

// ====================================
// TESTIMONIAL FORM FUNCTIONALITY
// ====================================

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Testimonial form handling
let selectedRating = 0;

// Rating stars functionality
console.log('Testimonial script loaded!');

document.querySelectorAll('.rating i').forEach(star => {
    star.addEventListener('click', function() {
        selectedRating = parseInt(this.getAttribute('data-value'));
        updateStarRating(selectedRating);
        clearTestimonialError('ratingError');
    });
    
    star.addEventListener('mouseenter', function() {
        const value = parseInt(this.getAttribute('data-value'));
        updateStarRating(value, true);
    });
});

document.querySelector('.rating')?.addEventListener('mouseleave', function() {
    updateStarRating(selectedRating);
});

function updateStarRating(rating, isHover = false) {
    document.querySelectorAll('.rating i').forEach((star, index) => {
        if (index < rating) {
            star.classList.add(isHover ? 'hover' : 'active');
            if (!isHover) star.classList.remove('hover');
        } else {
            star.classList.remove('active', 'hover');
        }
    });
}

// Submit testimonial
if (testimonialForm) {
    testimonialForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        clearAllTestimonialErrors();
        
        const name = document.getElementById('testName').value.trim();
        const email = document.getElementById('testEmail').value.trim();
        const feedback = document.getElementById('testMessage').value.trim();
        
        let isValid = true;
        
        if (!name || name.length < 2) {
            showTestimonialError('testNameError', 'Name must be at least 2 characters');
            isValid = false;
        }
        
        if (!email || !isValidEmail(email)) {
            showTestimonialError('testEmailError', 'Please enter a valid email');
            isValid = false;
        }
        
        if (selectedRating === 0) {
            showTestimonialError('ratingError', 'Please select a rating');
            isValid = false;
        }
        
        if (!feedback || feedback.length < 10) {
            showTestimonialError('testMessageError', 'Feedback must be at least 10 characters');
            isValid = false;
        }
        
        if (!isValid) return;
        
        const submitBtn = testimonialForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Submitting...</span><i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        const testimonialData = {
            name: name,
            email: email,
            rating: selectedRating,
            feedback: feedback
        };
        
        try {
            // Send email via EmailJS first
            const emailParams = {
                from_name: name,
                from_email: email,
                email: email, // Add this for template compatibility
                rating: selectedRating,
                feedback: feedback,
                message: feedback, // Add this for template compatibility
                stars: '⭐'.repeat(selectedRating),
                timestamp: new Date().toLocaleString()
            };
            
            console.log('Sending testimonial email with params:', emailParams);
            
            // Send email using EmailJS
            await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.testimonialTemplateId || 'template_14hkl4h',
                emailParams
            );
            
            // Show success message (Note: On GitHub Pages, testimonials won't be saved to JSON, 
            // but email will be sent via EmailJS)
            showSuccessModal('Thank you for your feedback! Your testimonial has been sent via email.');
            testimonialForm.reset();
            selectedRating = 0;
            updateStarRating(0);
            
            // Try to save to PHP handler if available (will fail silently on GitHub Pages)
            try {
                await fetch('testimonial-handler.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(testimonialData)
                }).catch(() => {});
            } catch (e) {
                // Silently fail on GitHub Pages
            }
        } catch (error) {
            console.error('Error:', error);
            showTestimonialError('testMessageError', 'Network error. Please try again. ' + error.message);
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

function showTestimonialError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearTestimonialError(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

function clearAllTestimonialErrors() {
    ['testNameError', 'testEmailError', 'ratingError', 'testMessageError'].forEach(id => {
        clearTestimonialError(id);
    });
}

// Load testimonials
async function loadTestimonials() {
    const testimonialsList = document.getElementById('testimonialsList');
    if (!testimonialsList) return;
    
    try {
        const response = await fetch('testimonials.json');
        const testimonials = await response.json();
        
        if (testimonials && testimonials.length > 0) {
            testimonialsList.innerHTML = testimonials.map(t => `
                <div class="testimonial-card">
                    <div class="testimonial-header">
                        <i class="fas fa-user-circle"></i>
                        <h4>${t.name}</h4>
                    </div>
                    <div class="testimonial-rating">
                        ${generateStars(t.rating)}
                    </div>
                    <p class="testimonial-text">${t.feedback}</p>
                    <span class="testimonial-date">${formatDate(t.timestamp)}</span>
                </div>
            `).join('');
        } else {
            testimonialsList.innerHTML = '<p class="no-testimonials">No testimonials yet. Be the first to leave feedback!</p>';
        }
    } catch (error) {
        console.error('Error loading testimonials:', error);
        testimonialsList.innerHTML = '<p class="no-testimonials">Unable to load testimonials.</p>';
    }
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += '<i class="fas fa-star' + (i <= rating ? ' active' : '') + '"></i>';
    }
    return stars;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' });
}

// Load testimonials when page loads
if (document.getElementById('testimonialsList')) {
    loadTestimonials();
}

// Also load when DOM is fully ready
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('testimonialsList')) {
        loadTestimonials();
    }
});

// Contact Form Handler with EmailJS
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        clearErrors();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        if (!name) {
            showError('nameError', 'Please enter your name');
            isValid = false;
        }
        
        if (!email) {
            showError('emailError', 'Please enter your email');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }
        
        if (!subject) {
            showError('subjectError', 'Please enter a subject');
            isValid = false;
        }
        
        if (!message) {
            showError('messageError', 'Please enter a message');
            isValid = false;
        } else if (message.length < 10) {
            showError('messageError', 'Message must be at least 10 characters long');
            isValid = false;
        }
        
        if (!isValid) return;
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
        
        try {
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS not loaded');
            }
            
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            };
            
            const response = await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                templateParams
            );
            
            if (response.status === 200) {
                await fetch('contact-handler.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        subject: subject,
                        message: message
                    })
                }).catch(err => console.log('Backup save failed:', err));
                
                showSuccessModal('Your message has been sent successfully! We will get back to you soon.');
                contactForm.reset();
                clearErrors();
            } else {
                throw new Error('Email sending failed');
            }
        } catch (error) {
            console.error('Error:', error);
            showError('messageError', 'Failed to send message. Please try again or contact directly via email.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
}

// Load Testimonials
async function loadTestimonials() {
    const testimonialsList = document.getElementById('testimonialsList');
    if (!testimonialsList) return;
    
    try {
        const response = await fetch('testimonials.json');
        const allTestimonials = await response.json();
        
        const testimonials = allTestimonials.filter(t => t.approved === true);
        
        if (testimonials.length === 0) {
            testimonialsList.innerHTML = '<p style="text-align: center; color: rgba(255,255,255,0.5);">No testimonials yet. Be the first to share your feedback!</p>';
            return;
        }
        
        testimonialsList.innerHTML = testimonials.map(t => `
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <div class="testimonial-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="testimonial-info">
                        <h4>${escapeHtml(t.name)}</h4>
                        <div class="testimonial-rating">
                            ${'<i class="fas fa-star"></i>'.repeat(t.rating)}
                        </div>
                    </div>
                </div>
                <p class="testimonial-message">${escapeHtml(t.feedback || t.message)}</p>
                <span class="testimonial-date">${new Date(t.timestamp).toLocaleDateString()}</span>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}

// GitHub Activity (API Integration) - Shows recent activity like GitHub
async function loadGitHubStats() {
    const githubStats = document.getElementById('githubStats');
    if (!githubStats) return;
    
    // Show loading state
    githubStats.innerHTML = '<div class="github-loading"><div class="spinner"></div></div>';
    
    try {
        // Use client-side GitHub API instead of PHP
        const repos = await fetchGitHubRepos();
        
        if (!repos || repos.length === 0) {
            githubStats.innerHTML = '<p style="text-align: center; color: rgba(255,255,255,0.5); padding: 20px;">No repositories found</p>';
            return;
        }
        
        // Function to get language color class
        function getLanguageClass(lang) {
            if (!lang) return 'language-default';
            const langMap = {
                'JavaScript': 'language-javascript',
                'Python': 'language-python',
                'TypeScript': 'language-typescript',
                'HTML': 'language-html',
                'CSS': 'language-css',
                'PHP': 'language-php',
                'Java': 'language-java',
                'C#': 'language-csharp',
                'C++': 'language-cpp',
                'C': 'language-c',
                'Ruby': 'language-ruby',
                'Go': 'language-go',
                'Rust': 'language-rust',
                'Swift': 'language-swift',
                'Kotlin': 'language-kotlin'
            };
            return langMap[lang] || 'language-default';
        }
        
        githubStats.innerHTML = repos.slice(0, 6).map((repo, index) => `
            <a href="${repo.url}" target="_blank" class="github-repo-card" style="animation-delay: ${index * 0.1}s">
                <div class="repo-header">
                    <i class="fas fa-folder"></i>
                    <h4>${escapeHtml(repo.name)}</h4>
                    ${repo.is_contributed ? '<span class="contributed-badge"><i class="fas fa-hands-helping"></i> Contributed</span>' : ''}
                </div>
                <p class="repo-description">${escapeHtml(repo.description || 'No description')}</p>
                <div class="repo-stats">
                    <span><i class="fas fa-star"></i> ${repo.stars}</span>
                    <span><i class="fas fa-code-branch"></i> ${repo.forks}</span>
                    ${repo.language && !repo.is_contributed ? `<span class="repo-language ${getLanguageClass(repo.language)}"><i class="fas fa-code"></i> ${repo.language}</span>` : ''}
                    ${repo.is_contributed ? `<span class="repo-language language-php"><i class="fas fa-code"></i> PHP</span>` : ''}
                </div>
            </a>
        `).join('');
        
    } catch (error) {
        console.error('Error loading GitHub repositories:', error);
        githubStats.innerHTML = '<p style="text-align: center; color: rgba(255,255,255,0.5); padding: 20px;">Unable to load GitHub repositories</p>';
    }
}

function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return Math.floor(seconds / 60) + 'm ago';
    if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ago';
    if (seconds < 604800) return Math.floor(seconds / 86400) + 'd ago';
    return date.toLocaleDateString();
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadTestimonials();
    loadGitHubStats();
    
    if (typeof emailjs !== 'undefined') {
        console.log('EmailJS loaded successfully');
    } else {
        console.warn('EmailJS not loaded');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Profile Photo Upload Functionality
document.addEventListener('DOMContentLoaded', function() {
    const profilePhoto = document.querySelector('.profile-photo');
    const profileImage = document.getElementById('profileImage');
    
    if (profilePhoto && profileImage) {
        // Create hidden file input
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.style.display = 'none';
        document.body.appendChild(fileInput);
        
        // Click handler for profile photo
        profilePhoto.addEventListener('click', function() {
            fileInput.click();
        });
        
        // Handle file selection
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    profileImage.src = e.target.result;
                    // Save to localStorage
                    localStorage.setItem('profilePhoto', e.target.result);
                    
                    // Add success animation
                    profilePhoto.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        profilePhoto.style.transform = '';
                    }, 300);
                };
                
                reader.readAsDataURL(file);
            }
        });
        
        // Load saved photo from localStorage
        const savedPhoto = localStorage.getItem('profilePhoto');
        if (savedPhoto) {
            profileImage.src = savedPhoto;
        }
    }
});
