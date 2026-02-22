@echo off
echo.
echo ===============================================
echo   SWITCHING TO FORMSUBMIT EMAIL SERVICE
echo ===============================================
echo.
cd /d "%~dp0"

echo Backing up current contact-handler.php...
copy contact-handler.php contact-handler-backup.php >nul 2>&1

echo Creating new FormSubmit handler...
(
echo ^<?php
echo header('Content-Type: application/json'^);
echo.
echo // Get form data
echo $name = isset($_POST['name']^) ? trim($_POST['name']^) : '';
echo $email = isset($_POST['email']^) ? trim($_POST['email']^) : '';
echo $subject = isset($_POST['subject']^) ? trim($_POST['subject']^) : '';
echo $message = isset($_POST['message']^) ? trim($_POST['message']^) : '';
echo.
echo // Forward to FormSubmit.co
echo $formsubmitUrl = 'https://formsubmit.co/princejheckjuan023@gmail.com';
echo.
echo $data = [
echo     '_subject' =^> 'New Contact Form Message: ' . $subject,
echo     'name' =^> $name,
echo     'email' =^> $email,
echo     'subject' =^> $subject,
echo     'message' =^> $message,
echo     '_captcha' =^> 'false',
echo     '_template' =^> 'table'
echo ];
echo.
echo // Send using cURL
echo $ch = curl_init($formsubmitUrl^);
echo curl_setopt($ch, CURLOPT_POST, true^);
echo curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data^)^);
echo curl_setopt($ch, CURLOPT_RETURNTRANSFER, true^);
echo curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true^);
echo.
echo $response = curl_exec($ch^);
echo $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE^);
echo curl_close($ch^);
echo.
echo // Also save locally
echo $messageData = [
echo     'name' =^> $name,
echo     'email' =^> $email,
echo     'subject' =^> $subject,
echo     'message' =^> $message,
echo     'timestamp' =^> date('Y-m-d H:i:s'^),
echo     'ip' =^> $_SERVER['REMOTE_ADDR']
echo ];
echo.
echo $messages = [];
echo if (file_exists('messages.json'^)^) {
echo     $messages = json_decode(file_get_contents('messages.json'^), true^) ?: [];
echo }
echo array_unshift($messages, $messageData^);
echo file_put_contents('messages.json', json_encode($messages, JSON_PRETTY_PRINT^)^);
echo.
echo echo json_encode([
echo     'success' =^> ($httpCode ^>= 200 ^&^& $httpCode ^< 300^),
echo     'message' =^> 'Message sent successfully!'
echo ]^);
echo ?^>
) > contact-handler.php

echo.
echo ===============================================
echo   SUCCESS! FormSubmit is now active!
echo ===============================================
echo.
echo Your contact form will now send emails to:
echo   princejheckjuan023@gmail.com
echo.
echo Test it by submitting a message on your contact page!
echo.
pause
