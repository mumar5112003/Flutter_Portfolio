# EmailJS Setup Guide

This guide will help you set up EmailJS to enable direct email sending from your contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (Recommended - easiest setup)
   - **Outlook**
   - **Yahoo**
   - Or any other SMTP service
4. Follow the setup instructions for your provider
5. **Note down your Service ID** (e.g., `service_xxxxxxx`)

### For Gmail:
- Click "Connect Account"
- Sign in with your Gmail account
- Grant permissions
- Service will be created automatically

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Choose a template or start from scratch
4. Configure the template:

### Template Variables:
Use these variables in your template (they will be replaced with form data):

```
{{from_name}}    - Sender's name
{{from_email}}   - Sender's email
{{message}}      - Message content
{{to_email}}     - Your email (recipient)
{{reply_to}}     - Reply-to email (sender's email)
```

### Example Template:

**Subject:**
```
Portfolio Contact: {{from_name}}
```

**Content:**
```
You have a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Reply-To: {{reply_to}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

5. **Note down your Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)
3. Copy it

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following variables:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

3. Replace the placeholder values with your actual keys from EmailJS

### Example:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123xyz789
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_gmail123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_portfolio456
```

## Step 6: Restart Development Server

1. Stop your development server (Ctrl+C)
2. Start it again:
   ```bash
   npm run dev
   ```

## Step 7: Test the Form

1. Go to your contact form on the website
2. Fill in the form and submit
3. Check your email inbox - you should receive the message!

## Troubleshooting

### Form not sending emails?

1. **Check environment variables:**
   - Make sure `.env.local` exists in the project root
   - Verify all three variables are set correctly
   - Restart the dev server after changing `.env.local`

2. **Check EmailJS Dashboard:**
   - Verify your service is connected and active
   - Check that your template uses the correct variable names
   - Look for any error messages in the EmailJS dashboard

3. **Check Browser Console:**
   - Open browser DevTools (F12)
   - Check the Console tab for any error messages
   - Look for EmailJS-related errors

4. **Verify Template Variables:**
   - Make sure your template uses: `{{from_name}}`, `{{from_email}}`, `{{message}}`, etc.
   - Variable names are case-sensitive

### Still not working?

- The form will fall back to using `mailto:` links if EmailJS is not configured
- You can test the fallback by temporarily removing the environment variables
- Check EmailJS documentation: [https://www.emailjs.com/docs](https://www.emailjs.com/docs)

## Free Tier Limits

EmailJS free tier includes:
- **200 emails per month**
- Basic email templates
- Gmail, Outlook, and other email services

For production use with high traffic, consider upgrading to a paid plan.

## Security Notes

- Never commit `.env.local` to git (it's already in `.gitignore`)
- Your Public Key is safe to expose (it's meant to be public)
- Service ID and Template ID are also safe (they're used client-side)
- EmailJS handles email sending securely on their servers

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs](https://www.emailjs.com/docs)
- EmailJS Support: [https://www.emailjs.com/support](https://www.emailjs.com/support)
