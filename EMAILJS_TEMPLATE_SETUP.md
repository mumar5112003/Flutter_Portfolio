# EmailJS Template Setup Guide

## Current Issue
Emails are being sent but only the message is showing. The sender name and email are missing.

## Solution: Update Your EmailJS Template

### Step 1: Go to EmailJS Dashboard
1. Visit [https://dashboard.emailjs.com](https://dashboard.emailjs.com)
2. Go to **Email Templates**
3. Click on your template: `template_ktceam6`

### Step 2: Update Template Variables

Make sure your template includes ALL these variables:

#### Template Subject:
```
Portfolio Contact: {{from_name}}
```

#### Template Content:
```
You have a new message from your portfolio contact form:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sender Name: {{from_name}}
Sender Email: {{from_email}}
Reply-To: {{reply_to}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To reply to this message, simply reply to this email.
The sender's email address is: {{from_email}}

---
This email was sent from your portfolio contact form.
```

### Step 3: Variable Names MUST Match

The variables sent from the form are:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_email}}` - Your email (recipient)
- `{{reply_to}}` - Reply-to email (same as sender's email)

**Important:** Variable names are case-sensitive and must match exactly!

### Step 4: Save and Test

1. Click **Save** in the EmailJS template editor
2. Test the contact form again
3. You should now receive emails with name, email, and message

## Alternative: Check Template Settings

If the template looks correct but still not working:

1. **Check Template Variables Section**
   - In the EmailJS template editor, look for a "Variables" or "Template Variables" section
   - Make sure all variables are listed there

2. **Check Service Settings**
   - Go to **Email Services**
   - Click on your service: `service_6fat0qv`
   - Make sure it's active and connected properly

3. **Test with EmailJS Test Feature**
   - In the template editor, use the "Test" button
   - Fill in test values and send a test email
   - This will help verify the template is working

## Quick Template Copy-Paste

Here's a ready-to-use template you can copy:

**Subject:**
```
Portfolio Contact: {{from_name}}
```

**Body:**
```
You have a new message from your portfolio contact form:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}
Reply-To: {{reply_to}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To reply, simply reply to this email.

---
Sent from portfolio contact form.
```

Copy this exactly into your EmailJS template and save!
