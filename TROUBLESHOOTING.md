# EmailJS Troubleshooting

## Issue: Only Message Showing, Name and Email Missing

### Problem
Emails are being sent but only the message content is visible. The sender's name and email are not appearing.

### Solution

#### Step 1: Check EmailJS Template Variables

Your EmailJS template MUST include these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email  
- `{{message}}` - Message content
- `{{reply_to}}` - Reply-to email (optional but recommended)

#### Step 2: Update Your Template

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com)
2. Navigate to **Email Templates**
3. Click on template ID: `template_ktceam6`
4. Update the template body to include:

```
Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}
```

#### Step 3: Verify Variable Names

The code sends these exact variable names:
- `from_name` (not `fromName`, `name`, or `sender_name`)
- `from_email` (not `fromEmail`, `email`, or `sender_email`)
- `message` (not `msg`, `content`, or `body`)

Make sure your template uses the EXACT same names with double curly braces: `{{from_name}}`

#### Step 4: Test Template in EmailJS

1. In the template editor, use the "Test" feature
2. Fill in test values for the variables
3. Send a test email to yourself
4. Verify all fields appear correctly

### Common Issues

1. **Variable names don't match**
   - Template uses `{{name}}` but code sends `{{from_name}}`
   - Solution: Use exact variable names from the code

2. **Variables not in template**
   - Template only has `{{message}}`
   - Solution: Add `{{from_name}}` and `{{from_email}}` to template

3. **Template not saved**
   - Changes made but not saved
   - Solution: Click "Save" button in EmailJS dashboard

### Current Template Parameters Being Sent

The contact form sends these parameters:
```javascript
{
  from_name: "User's Name",
  from_email: "user@example.com",
  message: "User's message",
  to_email: "mumar5112003@gmail.com",
  reply_to: "user@example.com"
}
```

Your template must use:
- `{{from_name}}` to display the name
- `{{from_email}}` to display the email
- `{{message}}` to display the message

### Still Not Working?

1. Check browser console for any errors
2. Verify template ID is correct: `template_ktceam6`
3. Check EmailJS service is active: `service_6fat0qv`
4. Try the "Test" feature in EmailJS dashboard
5. Check EmailJS dashboard for any error messages
