@echo off
echo.
echo ========================================
echo   ACTIVATING EmailJS Integration
echo ========================================
echo.
echo This will update your contact form to use EmailJS
echo Make sure you have your EmailJS keys ready!
echo.
pause

cd /d "%~dp0"

echo.
echo [1/3] Backing up current files...
copy contact.php contact.php.backup >nul 2>&1
copy script.js script.js.backup >nul 2>&1
echo ✓ Backup created

echo.
echo [2/3] Activating EmailJS...
copy /Y contact-with-emailjs.php contact.php >nul 2>&1
copy /Y script-with-emailjs.js script.js >nul 2>&1
echo ✓ Files updated

echo.
echo [3/3] Final step...
echo.
echo IMPORTANT: Edit emailjs-config.js with your keys:
echo   - PUBLIC_KEY
echo   - SERVICE_ID
echo   - TEMPLATE_ID
echo.
echo Opening emailjs-config.js for you...
timeout /t 2 >nul
notepad emailjs-config.js

echo.
echo ========================================
echo   EmailJS Activated!
echo ========================================
echo.
echo Next: Fill in your keys in emailjs-config.js
echo Then test at: http://localhost:3000/contact.php
echo.
pause
