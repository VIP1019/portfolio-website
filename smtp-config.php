<?php
// SMTP Configuration for Gmail
// This file provides an alternative email sending method using PHPMailer or similar SMTP library

// Gmail SMTP settings
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587); // or 465 for SSL
define('SMTP_SECURE', 'tls'); // or 'ssl'
define('SMTP_USERNAME', 'princejheckjuan023@gmail.com');
define('SMTP_PASSWORD', 'your_app_password_here'); // Use App Password, not regular password

// Recipient email
define('RECIPIENT_EMAIL', 'princejheckjuan023@gmail.com');

/*
SETUP INSTRUCTIONS:
1. Enable 2-Step Verification on your Gmail account
2. Generate an App Password:
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: Mail
   - Select device: Other (Custom name) - enter "Portfolio Website"
   - Click Generate
   - Copy the 16-character password
   - Replace 'your_app_password_here' above with that password

3. Install PHPMailer (recommended):
   - Download from: https://github.com/PHPMailer/PHPMailer
   - Or use composer: composer require phpmailer/phpmailer
   
4. Uncomment the PHPMailer implementation in contact-handler-smtp.php
*/
?>
