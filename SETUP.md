# Portfolio Website Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

## File Structure

```
Portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills section
│   ├── Projects.tsx       # Projects section
│   ├── Contact.tsx        # Contact section
│   ├── Footer.tsx         # Footer
│   └── ScrollToTop.tsx    # Scroll to top button
├── data/                  # Data files
│   ├── personalInfo.ts    # Personal information
│   ├── projects.ts        # Projects data
│   └── skills.ts          # Skills data
├── public/                # Static files
│   ├── portfolio-resources/ # Project images
│   └── CV.txt            # CV file
└── portfolio resources/   # Original project resources
```

## Customization

### Updating Personal Information

Edit `data/personalInfo.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  // ... update other fields
}
```

### Adding/Modifying Projects

Edit `data/projects.ts`:

```typescript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Short description',
  fullDescription: 'Full description',
  technologies: ['Tech1', 'Tech2'],
  images: ['/path/to/image1.png'],
  links: {
    website: 'https://example.com',
    playstore: 'https://play.google.com/...'
  },
  featured: true
}
```

### Updating Skills

Edit `data/skills.ts`:

```typescript
{
  category: 'Category Name',
  skills: ['Skill1', 'Skill2'],
  icon: '🎯'
}
```

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  dark: {
    bg: '#0a0a0a',        // Background color
    surface: '#121212',   // Surface color
    // ... other colors
  },
  accent: {
    primary: '#6366f1',   // Primary accent
    secondary: '#8b5cf6', // Secondary accent
    // ... other accents
  },
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
{
  "scripts": {
    "export": "next export",
    "deploy": "npm run build && npm run export && gh-pages -d out"
  }
}
```
3. Run: `npm run deploy`

## Troubleshooting

### Images not loading

- Ensure images are in the `public/portfolio-resources/` folder
- Check image paths in `data/projects.ts`
- Verify file names match exactly (case-sensitive)

### Build errors

- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

### Styles not applying

- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.ts` for correct content paths
- Verify `postcss.config.js` is present

## Support

For issues or questions, please contact:
- Email: mumar5112003@gmail.com
- LinkedIn: [mumar5112003](https://linkedin.com/in/mumar5112003)
