<?php
// Simple Admin Panel to view submissions
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Admin</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #020617 0%, #0f172a 100%);
            color: #e2e8f0;
            padding: 2rem;
            min-height: 100vh;
        }
        .admin-container { max-width: 1200px; margin: 0 auto; }
        .admin-header { text-align: center; margin-bottom: 2rem; }
        .admin-header h1 { font-size: 2.5rem; color: #7c3aed; margin-bottom: 0.5rem; }
        .back-link { display: inline-block; margin-bottom: 2rem; color: #7c3aed; text-decoration: none; }
        .tabs { display: flex; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid #334155; }
        .tab-btn {
            padding: 1rem 1.5rem;
            background: transparent;
            border: none;
            color: #94a3b8;
            cursor: pointer;
            font-size: 1rem;
            border-bottom: 3px solid transparent;
            transition: all 0.3s ease;
        }
        .tab-btn.active { color: #7c3aed; border-bottom-color: #7c3aed; }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
        .messages-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 1.5rem; }
        .message-card {
            background: rgba(124, 58, 237, 0.1);
            border: 1px solid #334155;
            border-radius: 8px;
            padding: 1.5rem;
        }
        .message-name { font-weight: 600; color: #06b6d4; }
        .message-email { color: #7c3aed; font-size: 0.9rem; margin-bottom: 0.5rem; }
        .message-subject { font-weight: 600; color: #e2e8f0; margin-bottom: 0.5rem; }
        .message-text { color: #cbd5e1; line-height: 1.6; }
        .stat-card {
            background: rgba(124, 58, 237, 0.1);
            border: 1px solid #334155;
            padding: 1.5rem;
            border-radius: 8px;
            text-align: center;
            margin-bottom: 1rem;
        }
        .stat-number { font-size: 2.5rem; color: #06b6d4; font-weight: bold; }
        .stat-label { color: #94a3b8; }
        .empty-state { text-align: center; padding: 3rem; color: #94a3b8; }
        .testimonial-card {
            background: rgba(124, 58, 237, 0.1);
            border: 1px solid #334155;
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 1rem;
        }
        .rating { color: #fbbf24; margin-bottom: 0.5rem; }
    </style>
</head>
<body>
    <div class="admin-container">
        <a href="index.php" class="back-link"><i class="fas fa-arrow-left"></i> Back to Portfolio</a>
        <div class="admin-header">
            <h1><i class="fas fa-tachometer-alt"></i> Admin Panel</h1>
            <p>Manage portfolio submissions</p>
        </div>

        <div class="tabs">
            <button class="tab-btn active" onclick="switchTab('messages')">
                <i class="fas fa-envelope"></i> Messages
            </button>
            <button class="tab-btn" onclick="switchTab('testimonials')">
                <i class="fas fa-star"></i> Testimonials
            </button>
        </div>

        <div id="messages" class="tab-content active">
            <div id="messagesContent"></div>
        </div>

        <div id="testimonials" class="tab-content">
            <div id="testimonialsContent"></div>
        </div>
    </div>

    <script>
        function switchTab(tabName) {
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById(tabName).classList.add('active');
            event.target.closest('.tab-btn').classList.add('active');
        }

        function loadMessages() {
            fetch('messages.json')
                .then(r => r.json())
                .then(data => {
                    const content = document.getElementById('messagesContent');
                    if (!data || data.length === 0) {
                        content.innerHTML = '<div class="empty-state">No messages yet</div>';
                        return;
                    }
                    content.innerHTML = data.map(m => `
                        <div class="message-card">
                            <div class="message-name">${m.name}</div>
                            <div class="message-email">${m.email}</div>
                            <div class="message-subject"><strong>Subject:</strong> ${m.subject}</div>
                            <div class="message-text">${m.message}</div>
                            <div style="font-size: 0.85rem; color: #94a3b8; margin-top: 1rem;">${m.timestamp}</div>
                        </div>
                    `).join('');
                })
                .catch(() => {
                    document.getElementById('messagesContent').innerHTML = '<div class="empty-state">No messages yet</div>';
                });
        }

        function loadTestimonials() {
            fetch('testimonials.json')
                .then(r => r.json())
                .then(data => {
                    const content = document.getElementById('testimonialsContent');
                    if (!data || data.length === 0) {
                        content.innerHTML = '<div class="empty-state">No testimonials yet</div>';
                        return;
                    }
                    content.innerHTML = data.map(t => `
                        <div class="testimonial-card">
                            <div style="font-weight: 600; color: #06b6d4;">${t.name}</div>
                            <div class="rating">${'★'.repeat(t.rating)}${'☆'.repeat(5-t.rating)}</div>
                            <div style="color: #cbd5e1; margin: 1rem 0;">"${t.feedback}"</div>
                            <div style="font-size: 0.85rem; color: #94a3b8;">${t.timestamp}</div>
                        </div>
                    `).join('');
                })
                .catch(() => {
                    document.getElementById('testimonialsContent').innerHTML = '<div class="empty-state">No testimonials yet</div>';
                });
        }

        document.addEventListener('DOMContentLoaded', () => {
            loadMessages();
            loadTestimonials();
        });
    </script>
</body>
</html>
