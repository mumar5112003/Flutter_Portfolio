# EmailJS Setup - Your Configuration

## Your EmailJS Credentials

**Service ID:** `service_glrtlm9`

## Still Need:

1. **Public Key** - Get from EmailJS Dashboard > Account > General
2. **Template ID** - Create a template in EmailJS Dashboard > Email Templates

## Quick Setup Steps:

### 1. Get Your Public Key
- Go to [EmailJS Dashboard](https://dashboard.emailjs.com)
- Navigate to **Account** > **General**
- Copy your **Public Key**

### 2. Create Email Template
- Go to **Email Templates** in the dashboard
- Click **Create New Template**
- Use this template:

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

- Save the template and copy the **Template ID** (starts with `template_`)

### 3. Create .env.local File

Create a file named `.env.local` in your project root with:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_glrtlm9
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Replace:
- `your_public_key_here` with your actual Public Key
- `your_template_id_here` with your actual Template ID

### 4. Restart Dev Server

```bash
npm run dev
```

### 5. Test the Form

Fill out the contact form and submit to test if emails are being sent!

## Need Help?

See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed instructions.
