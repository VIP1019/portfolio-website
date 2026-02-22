# Email Setup Guide for Portfolio Contact Form

## Current Status
Your contact form is **working** and saving messages to `messages.json`, but email delivery depends on your server's mail configuration.

## Option 1: Use PHP's Built-in Mail Function (Current Setup)
The contact form currently uses PHP's `mail()` function which requires:
- A properly configured mail server on your hosting
- May not work on localhost/development environments
- Messages are ALWAYS saved to `messages.json` file

**Email recipient:** princejheckjuan023@gmail.com

## Option 2: Use SMTP for Reliable Email Delivery (Recommended)

### Setup Instructions:

1. **Enable 2-Step Verification on Gmail**
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: Mail
   - Select device: Other (Custom name) - enter "Portfolio Website"
   - Click Generate
   - Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

3. **Download PHPMailer**
   - Download from: https://github.com/PHPMailer/PHPMailer/releases
   - Extract the files to a `PHPMailer` folder in your portfolio directory
   - Or use Composer: `composer require phpmailer/phpmailer`

4. **Configure SMTP Settings**
   - Open `smtp-config.php`
   - Replace `'your_app_password_here'` with your Gmail App Password
   - Save the file

5. **Update Contact Form to Use SMTP**
   - Rename current `contact-handler.php` to `contact-handler-backup.php`
   - Rename `contact-handler-smtp.php` to `contact-handler.php`

### PHPMailer Directory Structure:
```
portfolio-website-design/
├── contact-handler.php
├── smtp-config.php
└── PHPMailer/
    ├── PHPMailer.php
    ├── SMTP.php
    └── Exception.php
```

## Option 3: View Messages Directly

All contact form submissions are saved to `messages.json` in your portfolio directory. You can:
1. Open `messages.json` to view all messages
2. Set up the admin panel to view messages in a nice interface

## Testing

After setup, test the contact form:
1. Fill out the form on your website
2. Submit the message
3. Check your Gmail inbox for the notification
4. Check `messages.json` to confirm the message was saved
5. Check `debug.log` for troubleshooting information

## Troubleshooting

**If emails are not being received:**
1. Check `debug.log` for error messages
2. Verify your Gmail App Password is correct
3. Ensure PHPMailer files are in the correct location
4. Check your hosting provider's email/SMTP settings
5. Try testing with a different email service

**Common Issues:**
- Gmail blocking: Use App Password, not regular password
- Hosting restrictions: Some hosts block SMTP on certain ports
- Firewall/antivirus: May block outgoing SMTP connections

## Security Notes

- Never commit `smtp-config.php` with real passwords to public repositories
- Use environment variables for production
- Keep PHPMailer updated for security patches
- Validate and sanitize all user inputs (already implemented)

## Current Email Template

Your emails include:
- Sender name and email
- Subject line
- Full message content
- Timestamp
- Sender IP address
- Professional HTML formatting with gradient header
- Reply-to header set to sender's email

You're all set! The form saves messages regardless of email configuration.
