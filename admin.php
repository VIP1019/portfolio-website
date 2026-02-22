<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Admin Panel</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #020617 0%, #0f172a 100%);
            color: #e2e8f0;
            padding: 2rem;
            min-height: 100vh;
        }

        .admin-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .admin-header {
            text-align: center;
            margin-bottom: 2rem;
            animation: slideDown 0.6s ease-out;
        }

        .admin-header h1 {
            font-size: 2.5rem;
            color: #7c3aed;
            margin-bottom: 0.5rem;
        }

        .admin-header p {
            color: #94a3b8;
        }

        .tabs {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            border-bottom: 1px solid #334155;
            animation: slideUp 0.6s ease-out;
        }

        .tab-btn {
            padding: 1rem 1.5rem;
            background: transparent;
            border: none;
            color: #94a3b8;
            cursor: pointer;
            font-size: 1rem;
            border-bottom: 3px solid transparent;
            transition: all 0.3s ease;
            position: relative;
        }

        .tab-btn:hover {
            color: #e2e8f0;
        }

        .tab-btn.active {
            color: #7c3aed;
            border-bottom-color: #7c3aed;
        }

        .tab-content {
            display: none;
            animation: fadeIn 0.3s ease-out;
        }

        .tab-content.active {
            display: block;
        }

        .messages-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            gap: 1.5rem;
        }

        .message-card {
            background: rgba(124, 58, 237, 0.1);
            border: 1px solid #334155;
            border-radius: 8px;
            padding: 1.5rem;
            transition: all 0.3s ease;
        }

        .message-card:hover {
            background: rgba(124, 58, 237, 0.2);
            border-color: #7c3aed;
            transform: translateY(-5px);
        }

        .message-header {
            display: flex;
            justify-content: space-between;
            align-items: start;
            margin-bottom: 1rem;
        }

        .message-name {
            font-weight: 600;
            color: #06b6d4;
            font-size: 1.1rem;
        }

        .message-time {
            font-size: 0.85rem;
            color: #94a3b8;
        }

        .message-email {
            color: #7c3aed;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }

        .message-subject {
            font-weight: 600;
            color: #e2e8f0;
            margin-bottom: 0.5rem;
        }

        .message-text {
            color: #cbd5e1;
            line-height: 1.6;
            margin-bottom: 1rem;
            max-height: 150px;
            overflow-y: auto;
        }

        .testimonial-card {
            background: rgba(124, 58, 237, 0.1);
            border: 1px solid #334155;
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 1rem;
            transition: all 0.3s ease;
        }

        .testimonial-card:hover {
            background: rgba(124, 58, 237, 0.2);
            border-color: #7c3aed;
        }

        .rating {
            color: #fbbf24;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
        }

        .testimonial-text {
            color: #cbd5e1;
            line-height: 1.6;
            margin: 1rem 0;
            font-style: italic;
        }

        .testimonial-author {
            color: #06b6d4;
            font-weight: 600;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .stat-card {
            background: rgba(124, 58, 237, 0.1);
            border: 1px solid #334155;
            padding: 1.5rem;
            border-radius: 8px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .stat-card:hover {
            background: rgba(124, 58, 237, 0.2);
            transform: translateY(-5px);
        }

        .stat-number {
            font-size: 2.5rem;
            color: #06b6d4;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        .stat-label {
            color: #94a3b8;
            font-size: 0.95rem;
        }

        .delete-btn {
            background: #ef4444;
            color: white;
            border: none;
            padding: 0.4rem 0.8rem;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: all 0.3s ease;
        }

        .delete-btn:hover {
            background: #dc2626;
            transform: scale(1.05);
        }

        .empty-state {
            text-align: center;
            padding: 3rem;
            color: #94a3b8;
        }

        .empty-state i {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: #7c3aed;
        }

        .back-link {
            display: inline-block;
            margin-bottom: 2rem;
            color: #7c3aed;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .back-link:hover {
            transform: translateX(-5px);
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    </style>
</head>
<body>
    <div class="admin-container">
        <a href="index.php" class="back-link"><i class="fas fa-arrow-left"></i> Back to Portfolio</a>

        <div class="admin-header">
            <h1><i class="fas fa-tachometer-alt"></i> Admin Panel</h1>
            <p>Manage portfolio submissions and feedback</p>
        </div>

        <div class="tabs">
            <button class="tab-btn active" onclick="switchTab('messages')">
                <i class="fas fa-envelope"></i> Messages
            </button>
            <button class="tab-btn" onclick="switchTab('testimonials')">
                <i class="fas fa-star"></i> Testimonials
            </button>
            <button class="tab-btn" onclick="switchTab('statistics')">
                <i class="fas fa-chart-bar"></i> Statistics
            </button>
        </div>

        <!-- Messages Tab -->
        <div id="messages" class="tab-content active">
            <div id="messagesContent" class="messages-grid"></div>
        </div>

        <!-- Testimonials Tab -->
        <div id="testimonials" class="tab-content">
            <div id="testimonialsContent"></div>
        </div>

        <!-- Statistics Tab -->
        <div id="statistics" class="tab-content">
            <div class="stats">
                <div class="stat-card">
                    <div class="stat-number" id="totalMessages">0</div>
                    <div class="stat-label">Total Messages</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" id="totalTestimonials">0</div>
                    <div class="stat-label">Total Testimonials</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" id="avgRating">0</div>
                    <div class="stat-label">Average Rating</div>
                </div>
            </div>
            <div id="statisticsContent"></div>
        </div>
    </div>

    <script>
        // Load data on page load
        document.addEventListener('DOMContentLoaded', function() {
            loadMessages();
            loadTestimonials();
            loadStatistics();
        });

        function switchTab(tabName) {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Show selected tab
            document.getElementById(tabName).classList.add('active');
            event.target.closest('.tab-btn').classList.add('active');
        }

        function loadMessages() {
            const messagesData = [
                {
                    name: "Sample Message",
                    email: "example@email.com",
                    subject: "Portfolio Inquiry",
                    message: "This is a demo message. When you submit the contact form, real messages will appear here.",
                    timestamp: new Date().toLocaleDateString()
                }
            ];

            // Try to load from JSON file (in production)
            fetch('messages.json')
                .then(response => response.json())
                .then(data => {
                    displayMessages(data);
                })
                .catch(() => {
                    displayMessages(messagesData);
                });
        }

        function displayMessages(messages) {
            const content = document.getElementById('messagesContent');

            if (!messages || messages.length === 0) {
                content.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><h3>No messages yet</h3></div>';
                document.getElementById('totalMessages').textContent = '0';
                return;
            }

            document.getElementById('totalMessages').textContent = messages.length;

            content.innerHTML = messages.map((msg, index) => `
                <div class="message-card">
                    <div class="message-header">
                        <div>
                            <div class="message-name">${escapeHtml(msg.name)}</div>
                            <div class="message-time">${msg.timestamp}</div>
                        </div>
                        <button class="delete-btn" onclick="deleteMessage(${index})">Delete</button>
                    </div>
                    <div class="message-email">${escapeHtml(msg.email)}</div>
                    <div class="message-subject"><strong>Subject:</strong> ${escapeHtml(msg.subject)}</div>
                    <div class="message-text">${escapeHtml(msg.message)}</div>
                </div>
            `).join('');
        }

        function loadTestimonials() {
            const testimonialsData = [
                {
                    name: "Sample User",
                    rating: 5,
                    feedback: "This is a demo testimonial. When you submit the testimonial form, real feedback will appear here.",
                    timestamp: new Date().toLocaleDateString()
                }
            ];

            // Try to load from JSON file (in production)
            fetch('testimonials.json')
                .then(response => response.json())
                .then(data => {
                    displayTestimonials(data);
                })
                .catch(() => {
                    displayTestimonials(testimonialsData);
                });
        }

        function displayTestimonials(testimonials) {
            const content = document.getElementById('testimonialsContent');

            if (!testimonials || testimonials.length === 0) {
                content.innerHTML = '<div class="empty-state"><i class="fas fa-comments"></i><h3>No testimonials yet</h3></div>';
                document.getElementById('totalTestimonials').textContent = '0';
                return;
            }

            document.getElementById('totalTestimonials').textContent = testimonials.length;

            const validTestimonials = testimonials.filter(t => t.rating >= 1 && t.rating <= 5);
            const avgRating = validTestimonials.length > 0
                ? (validTestimonials.reduce((sum, t) => sum + t.rating, 0) / validTestimonials.length).toFixed(1)
                : 0;
            document.getElementById('avgRating').textContent = avgRating;

            content.innerHTML = testimonials.map((test, index) => `
                <div class="testimonial-card">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div>
                            <div class="testimonial-author">${escapeHtml(test.name)}</div>
                            <div class="rating">${'★'.repeat(test.rating)}${'☆'.repeat(5 - test.rating)}</div>
                        </div>
                        <button class="delete-btn" onclick="deleteTestimonial(${index})">Delete</button>
                    </div>
                    <div class="testimonial-text">"${escapeHtml(test.feedback)}"</div>
                    <div style="font-size: 0.85rem; color: #94a3b8;">${test.timestamp}</div>
                </div>
            `).join('');
        }

        function loadStatistics() {
            // Statistics are loaded with messages and testimonials
        }

        function deleteMessage(index) {
            if (confirm('Are you sure you want to delete this message?')) {
                alert('Delete functionality requires server-side implementation. This is a demo panel.');
            }
        }

        function deleteTestimonial(index) {
            if (confirm('Are you sure you want to delete this testimonial?')) {
                alert('Delete functionality requires server-side implementation. This is a demo panel.');
            }
        }

        function escapeHtml(text) {
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text.replace(/[&<>"']/g, m => map[m]);
        }
    </script>
</body>
</html>
