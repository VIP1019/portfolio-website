# EmailJS Template Configuration Fix

## Problem:
HTTP 412 Error - Template variable mismatch

## Solution:

### Go to EmailJS Dashboard:
1. Visit: https://dashboard.emailjs.com/admin/templates
2. Click on your template: `template_2fwdxx9`
3. Click "Edit"

### Update Template Content:

**Subject:**
```
New Message from {{from_name}} - {{subject}}
```

**Body:**
```
Hello,

You have received a new contact form submission:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

### Template Variables (MUST BE EXACTLY):
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`

### Important Settings:
- **To Email:** princejheckjuan023@gmail.com
- **From Name:** {{from_name}}
- **Reply To:** {{from_email}}

Click **Save** after making changes!

## Alternative: Use Default Template

If the template is too complex, you can use a simpler approach - I'll update the code to work with EmailJS's default template structure.
