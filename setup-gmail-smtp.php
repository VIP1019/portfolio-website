<?php
/**
 * Gmail SMTP Setup Script
 * This script helps you configure Gmail SMTP for reliable email delivery
 */

// Check if PHPMailer is available
$phpmailerPath = __DIR__ . '/PHPMailer';

echo "<!DOCTYPE html>
<html>
<head>
    <title>Gmail SMTP Setup</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #7c3aed;
            border-bottom: 3px solid #7c3aed;
            padding-bottom: 10px;
        }
        h2 {
            color: #06b6d4;
            margin-top: 30px;
        }
        .step {
            background: #f9f9f9;
            padding: 15px;
            margin: 10px 0;
            border-left: 4px solid #7c3aed;
        }
        .success {
            background: #d1fae5;
            color: #065f46;
            padding: 15px;
            border-radius: 4px;
            border-left: 4px solid #10b981;
        }
        .warning {
            background: #fef3c7;
            color: #92400e;
            padding: 15px;
            border-radius: 4px;
            border-left: 4px solid #f59e0b;
        }
        .error {
            background: #fee2e2;
            color: #991b1b;
            padding: 15px;
            border-radius: 4px;
            border-left: 4px solid #ef4444;
        }
        code {
            background: #1f2937;
            color: #10b981;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
        }
        .code-block {
            background: #1f2937;
            color: #e5e7eb;
            padding: 15px;
            border-radius: 4px;
            overflow-x: auto;
            margin: 10px 0;
        }
        a {
            color: #7c3aed;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .button {
            display: inline-block;
            background: #7c3aed;
            color: white;
            padding: 10px 20px;
            border-radius: 4px;
            text-decoration: none;
            margin: 10px 5px;
        }
        .button:hover {
            background: #6d28d9;
        }
    </style>
</head>
<body>
    <div class='container'>
        <h1>📧 Gmail SMTP Setup for Contact Form</h1>
        
        <div class='warning'>
            <strong>⚠️ Current Status:</strong> Your contact form is saving messages to <code>messages.json</code> but emails are NOT being delivered because PHP's <code>mail()</code> function requires server configuration.
        </div>
";

// Check PHP version
$phpVersion = phpversion();
echo "<h2>1️⃣ System Check</h2>";
echo "<div class='step'>";
echo "<strong>PHP Version:</strong> $phpVersion ";
if (version_compare($phpVersion, '7.0.0', '>=')) {
    echo "✅ Compatible<br>";
} else {
    echo "❌ PHP 7.0+ required<br>";
}

// Check if mail() function exists
echo "<strong>mail() function:</strong> ";
if (function_exists('mail')) {
    echo "✅ Available (but not configured for Gmail)<br>";
} else {
    echo "❌ Not available<br>";
}

// Check if PHPMailer exists
echo "<strong>PHPMailer:</strong> ";
if (file_exists($phpmailerPath)) {
    echo "✅ Found<br>";
} else {
    echo "❌ Not installed<br>";
}
echo "</div>";

echo "<h2>2️⃣ Why Emails Aren't Being Delivered</h2>";
echo "<div class='step'>";
echo "<p>PHP's built-in <code>mail()</code> function requires:</p>";
echo "<ul>";
echo "<li>A configured mail server (SMTP server)</li>";
echo "<li>Proper DNS records</li>";
echo "<li>May not work on localhost/XAMPP/WAMP</li>";
echo "<li>Gmail blocks emails from unknown servers</li>";
echo "</ul>";
echo "</div>";

echo "<h2>3️⃣ Solution: Use Gmail SMTP with PHPMailer</h2>";
echo "<div class='step'>";
echo "<p>PHPMailer allows you to send emails directly through Gmail's SMTP server.</p>";
echo "</div>";

if (!file_exists($phpmailerPath)) {
    echo "<div class='error'>";
    echo "<h3>PHPMailer Not Found</h3>";
    echo "<p>Download PHPMailer to enable Gmail SMTP:</p>";
    echo "<ol>";
    echo "<li>Go to: <a href='https://github.com/PHPMailer/PHPMailer/releases' target='_blank'>https://github.com/PHPMailer/PHPMailer/releases</a></li>";
    echo "<li>Download the latest version (ZIP file)</li>";
    echo "<li>Extract and create a folder: <code>PHPMailer</code> in your portfolio directory</li>";
    echo "<li>Copy these files into the PHPMailer folder:";
    echo "<ul>";
    echo "<li>PHPMailer.php</li>";
    echo "<li>SMTP.php</li>";
    echo "<li>Exception.php</li>";
    echo "</ul>";
    echo "</li>";
    echo "</ol>";
    echo "<p><strong>Or use Composer:</strong></p>";
    echo "<div class='code-block'>composer require phpmailer/phpmailer</div>";
    echo "</div>";
} else {
    echo "<div class='success'>";
    echo "✅ PHPMailer is installed!";
    echo "</div>";
}

echo "<h2>4️⃣ Gmail App Password Setup</h2>";
echo "<div class='step'>";
echo "<p><strong>Your Gmail:</strong> <code>princejheckjuan023@gmail.com</code></p>";
echo "<ol>";
echo "<li>Enable 2-Step Verification:";
echo "<ul><li><a href='https://myaccount.google.com/security' target='_blank'>https://myaccount.google.com/security</a></li></ul>";
echo "</li>";
echo "<li>Generate App Password:";
echo "<ul><li><a href='https://myaccount.google.com/apppasswords' target='_blank'>https://myaccount.google.com/apppasswords</a></li>";
echo "<li>Select app: <strong>Mail</strong></li>";
echo "<li>Select device: <strong>Other</strong> (type 'Portfolio Website')</li>";
echo "<li>Click <strong>Generate</strong></li>";
echo "<li>Copy the 16-character password (e.g., <code>abcd efgh ijkl mnop</code>)</li>";
echo "</ul>";
echo "</li>";
echo "</ol>";
echo "</div>";

echo "<h2>5️⃣ Configuration File</h2>";
echo "<div class='step'>";
echo "<p>Create or update <code>smtp-config.php</code> with your App Password:</p>";
echo "<div class='code-block'>";
echo htmlspecialchars("<?php
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_SECURE', 'tls');
define('SMTP_USERNAME', 'princejheckjuan023@gmail.com');
define('SMTP_PASSWORD', 'YOUR_16_CHAR_APP_PASSWORD_HERE'); // Replace with your App Password
define('RECIPIENT_EMAIL', 'princejheckjuan023@gmail.com');
?>");
echo "</div>";
echo "</div>";

echo "<h2>6️⃣ Next Steps</h2>";
echo "<div class='step'>";
echo "<ol>";
echo "<li>Download and install PHPMailer (if not already done)</li>";
echo "<li>Get your Gmail App Password</li>";
echo "<li>Update <code>smtp-config.php</code> with your App Password</li>";
echo "<li>Use the improved contact handler</li>";
echo "</ol>";
echo "</div>";

echo "<h2>7️⃣ Quick Actions</h2>";
echo "<a href='https://github.com/PHPMailer/PHPMailer/releases' target='_blank' class='button'>Download PHPMailer</a>";
echo "<a href='https://myaccount.google.com/apppasswords' target='_blank' class='button'>Get App Password</a>";
echo "<a href='test-contact-form.html' class='button'>Test Contact Form</a>";

echo "<h2>8️⃣ Alternative: Simple Email Notification</h2>";
echo "<div class='step'>";
echo "<p>If SMTP setup is too complex, I can create a simple solution that:</p>";
echo "<ul>";
echo "<li>✅ Saves all messages to <code>messages.json</code> (already working)</li>";
echo "<li>✅ Shows you new messages in an admin panel</li>";
echo "<li>✅ Sends notifications via a third-party service (like Formspree)</li>";
echo "</ul>";
echo "</div>";

echo "</div>";
echo "</body>
</html>";
?>
