# Deployment Guide

## Quick Start

This portfolio website is ready to deploy to any web hosting that supports PHP 7.0+.

## Local Development

### Requirements
- PHP 7.0 or higher
- Web server (Apache, Nginx, or use PHP built-in)
- Modern browser (Chrome, Firefox, Safari, Edge)

### Setup

1. **Extract Files**
   ```bash
   # Copy all files to your project directory
   cd portfolio-website
   ```

2. **Start Development Server**
   ```bash
   # Using PHP built-in server
   php -S localhost:8000
   
   # Then open: http://localhost:8000
   ```

3. **Access Admin Panel**
   - Navigate to: `http://localhost:8000/admin-panel.php`
   - View submitted messages and testimonials

## Web Hosting Deployment

### Recommended Hosting Requirements

- **PHP Version:** 7.4 or higher (7.2+ minimum)
- **Server:** Apache with mod_rewrite enabled
- **Disk Space:** 50MB minimum
- **Database:** Not required (uses JSON storage)
- **File Permissions:** Write access to directory

### Step-by-Step Deployment

1. **Upload Files**
   ```bash
   # Using FTP or File Manager
   - Upload all files to public_html or www directory
   - Ensure .htaccess file is uploaded
   - Verify permissions (644 for files, 755 for directories)
   ```

2. **Set File Permissions**
   ```bash
   # Via SSH/Terminal
   chmod 644 *.php *.css *.js *.htaccess *.json
   chmod 755 ./
   ```

3. **Test Installation**
   - Visit: `yoursite.com`
   - Check all sections load
   - Test contact form
   - Test testimonial form
   - Visit admin panel

4. **Configure Email (Optional)**
   - Edit `contact-handler.php`
   - Uncomment mail() function if needed
   - Configure proper email settings

## API Configuration

### GitHub API
- **Status:** No configuration needed
- **Rate Limit:** 60 requests/hour (unauthenticated)
- **Fallback:** Demo data displays if API fails

### Contact Form
- **Storage:** JSON file (messages.json)
- **Email:** Currently simulated (can enable in production)

### Testimonials
- **Storage:** JSON file (testimonials.json)
- **LocalStorage:** Also stores on client-side

## Troubleshooting

### "JSON files not writable"
```bash
# Solution: Set proper permissions
chmod 666 messages.json testimonials.json
```

### "Forms not submitting"
1. Check browser console for errors
2. Verify PHP is enabled
3. Ensure .htaccess is uploaded
4. Check file permissions

### "404 on admin panel"
- Admin panel file: `admin-panel.php`
- URL: `yoursite.com/admin-panel.php`

### "Images not loading"
- Ensure image paths are correct
- Check file permissions on images
- Verify correct directory structure

## Production Considerations

### Security
1. Use HTTPS (SSL/TLS certificate)
2. Keep PHP updated
3. Validate all inputs (already implemented)
4. Use environment variables for sensitive data

### Database (Recommended for Production)
Replace JSON storage with proper database:

```php
// Example MySQL migration
$mysqli = new mysqli("localhost", "user", "password", "portfolio");
$result = $mysqli->query("INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)");
```

### Email Configuration
Enable real email notifications:

```php
// Install PHPMailer
composer require phpmailer/phpmailer

// Use in contact-handler.php
$mail = new PHPMailer(true);
$mail->addAddress($email);
$mail->send();
```

### Caching
- .htaccess already configured for browser caching
- Consider adding server-side caching for APIs

## Hosting Recommendations

### Budget Options
- **Shared Hosting:** $3-10/month (sufficient)
- Providers: Bluehost, SiteGround, GoDaddy
- Note: May have slower API responses

### Performance Options
- **VPS:** $10-30/month (recommended)
- Providers: DigitalOcean, Linode, AWS Lightsail
- Better control and performance

### Premium Options
- **Managed Hosting:** $20+/month
- Auto updates, backups, support
- Providers: WP Engine, Kinsta

## GitHub Deployment

### Deploy to GitHub Pages (Frontend Only)
```bash
# Note: Requires removing PHP backend
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/portfolio.git
git push -u origin main
```

### Deploy to Heroku (With PHP)
```bash
# Requires Procfile and composer.json
git push heroku main
```

### Deploy to Vercel (Frontend Only)
```bash
# Vercel doesn't support PHP, only static files
# Use alternative backend or API
vercel deploy
```

## Continuous Integration/Deployment

### GitHub Actions Example
```yaml
name: Deploy to Server

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Upload files via FTP
        uses: milanm/github-action-ftp-upload-deploy@v1
        with:
          server: ${{ secrets.FTP_HOST }}
          user: ${{ secrets.FTP_USER }}
          password: ${{ secrets.FTP_PASS }}
          local_dir: ./
          remote_dir: public_html/
```

## Monitoring & Maintenance

### Regular Tasks
- Check error logs
- Review submitted messages
- Monitor form submissions
- Update contact information
- Verify GitHub API access

### Logs Location
- Apache: `/var/log/apache2/error.log`
- Nginx: `/var/log/nginx/error.log`
- PHP: Check `error_log` directive in php.ini

## Performance Optimization

### Already Implemented
- Gzip compression (in .htaccess)
- Browser caching (in .htaccess)
- Minified CSS/JS ready
- Lazy loading for sections

### Additional Steps
1. Compress images with tools like TinyPNG
2. Use CDN for static assets
3. Enable server-side caching
4. Consider image optimization

## SSL/HTTPS Setup

### Let's Encrypt (Free)
```bash
# Using Certbot
sudo certbot certonly --webroot -w /var/www/html
```

### Automatic Renewal
```bash
# Add to crontab
0 0 1 * * certbot renew --quiet
```

## Backup Strategy

### Regular Backups
```bash
# Backup website files
tar -czf backup.tar.gz .

# Backup JSON data
cp messages.json backup/
cp testimonials.json backup/
```

### Automated Backup
- Set up hosting's automatic backup feature
- Or use backup plugins/services

## Troubleshooting Checklist

- [ ] PHP version 7.0+
- [ ] Write permissions on directory
- [ ] .htaccess file uploaded
- [ ] All files uploaded correctly
- [ ] HTTPS configured
- [ ] Email notifications tested
- [ ] Admin panel accessible
- [ ] Forms functioning
- [ ] GitHub API responding
- [ ] Messages saving to JSON
- [ ] Testimonials persisting

## Support & Help

### Common Issues

**Q: "500 Internal Server Error"**
- Check PHP error logs
- Verify PHP version
- Check file permissions

**Q: "Contact form not working"**
- Ensure messages.json is writable
- Check browser console
- Verify PHP is enabled

**Q: "Images not displaying"**
- Check image file paths
- Verify image permissions
- Check server file structure

## Next Steps

1. Test all features locally
2. Set up hosting account
3. Upload files via FTP
4. Configure custom domain
5. Set up SSL certificate
6. Test forms and API
7. Monitor for errors
8. Share portfolio!

---

**Version:** 1.0  
**Last Updated:** February 2026  
**Status:** Production Ready
