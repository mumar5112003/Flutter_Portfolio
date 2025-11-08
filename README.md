# Portfolio Website

A modern, responsive, and animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Dark Theme** - Beautiful dark theme with excellent contrast and readability
- ✨ **Smooth Animations** - Powered by Framer Motion for fluid, engaging animations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🚀 **Fast Performance** - Built with Next.js for optimal performance and SEO
- 💼 **Project Showcase** - Interactive project cards with detailed views
- 📧 **Contact Form** - Easy way for potential clients to reach out
- 🎯 **Clean Code** - Well-structured, maintainable TypeScript code

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email Service**: EmailJS (for contact form)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up EmailJS for contact form (optional but recommended):
   - See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed instructions
   - Create a `.env.local` file with your EmailJS credentials
   - The form will work with `mailto:` fallback if EmailJS is not configured

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── data/
│   ├── personalInfo.ts     # Personal information
│   ├── projects.ts         # Projects data
│   └── skills.ts           # Skills data
├── public/
│   └── portfolio-resources/ # Project images
└── CV.txt                  # CV file
```

## Customization

### Update Personal Information

Edit `data/personalInfo.ts` to update your personal details, education, and experience.

### Add/Modify Projects

Edit `data/projects.ts` to add new projects or modify existing ones.

### Update Skills

Edit `data/skills.ts` to update your skills and technologies.

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Set Up Contact Form

The contact form uses EmailJS for direct email sending. See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for setup instructions. If EmailJS is not configured, the form will fall back to opening the user's email client.

## Deployment

This portfolio can be deployed on various platforms:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **GitHub Pages** (with static export)
- **Any hosting provider** that supports Node.js

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables in Vercel settings:
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
4. Vercel will automatically detect Next.js and deploy

## License

This project is open source and available under the MIT License.

## Contact

Muhammad Umar
- Email: mumar5112003@gmail.com
- LinkedIn: [mumar5112003](https://linkedin.com/in/mumar5112003)

---

Built with ❤️ using Next.js and TypeScript
