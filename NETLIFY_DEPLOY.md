# Netlify Deployment Guide

Your portfolio is now built and ready for Netlify deployment!

## Build Output

The static files are in the `out` folder, which is ready to be deployed to Netlify.

## Deployment Options

### Option 1: Drag and Drop (Easiest)

1. **Go to Netlify**
   - Visit [https://app.netlify.com](https://app.netlify.com)
   - Sign in or create an account

2. **Deploy**
   - Drag and drop the `out` folder onto the Netlify dashboard
   - Netlify will automatically deploy your site
   - Your site will be live in seconds!

3. **Add Environment Variables** (Important for EmailJS)
   - Go to **Site settings** > **Environment variables**
   - Add these variables:
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = `AWre0hSG_fZJ9Q3K3`
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = `service_6fat0qv`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = `template_ktceam6`
   - Click **Save**
   - Go to **Deploys** tab and click **Trigger deploy** > **Clear cache and deploy site**

### Option 2: Git Integration (Recommended for Updates)

1. **Push to GitHub**
   - Create a GitHub repository
   - Push your code to GitHub

2. **Connect to Netlify**
   - Go to Netlify dashboard
   - Click **Add new site** > **Import an existing project**
   - Connect your GitHub repository
   - Netlify will auto-detect Next.js settings

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Add environment variables (same as Option 1)

4. **Deploy**
   - Netlify will automatically build and deploy
   - Future pushes to GitHub will trigger automatic deployments

## Important Notes

### Environment Variables
- **Must be added in Netlify** for EmailJS to work
- Go to Site settings > Environment variables
- Add all three EmailJS variables
- Redeploy after adding variables

### Custom Domain
- After deployment, you can add a custom domain
- Go to **Domain settings** > **Add custom domain**
- Follow Netlify's instructions for DNS configuration

### Build Settings
- Build command: `npm run build`
- Publish directory: `out`
- Node version: 18.x or higher (set in Netlify settings if needed)

## Troubleshooting

### Contact Form Not Working?
1. Check environment variables are set in Netlify
2. Verify EmailJS template uses correct variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_email}}`
   - `{{reply_to}}`
3. Check browser console for errors
4. Verify EmailJS service is active in EmailJS dashboard

### Images Not Loading?
- Make sure all images are in the `public` folder
- Check image paths are correct
- Verify images were copied during build

### Build Errors?
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run lint`
- Verify Node.js version is 18+

## Post-Deployment Checklist

- [ ] Site is live and accessible
- [ ] Environment variables are set in Netlify
- [ ] Contact form is working (test it!)
- [ ] All images are loading correctly
- [ ] Links are working
- [ ] Mobile responsiveness is good
- [ ] Custom domain is configured (if needed)
- [ ] Analytics is set up (optional)

## Need Help?

- Netlify Docs: [https://docs.netlify.com](https://docs.netlify.com)
- Netlify Support: [https://www.netlify.com/support](https://www.netlify.com/support)
- EmailJS Setup: See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

---

Your portfolio is ready to go live! 🚀
