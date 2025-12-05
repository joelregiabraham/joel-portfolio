# Joel's Portfolio

A modern, responsive React portfolio with dark/light mode toggle.

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" → Import your repo
4. Vercel auto-detects Vite, just click "Deploy"

**That's it!** Your site will be live in ~1 minute.

## Deploy to GitHub Pages

1. Update `vite.config.js`:
   ```js
   base: '/your-repo-name/'
   ```

2. Build and deploy:
   ```bash
   npm run build
   # The 'dist' folder contains your static site
   ```

3. In your repo settings → Pages → Set source to GitHub Actions or upload the `dist` folder.

## Customization

Edit `Portfolio.jsx` to update:
- Your personal information
- Projects
- Experience
- Skills
- Contact details
- Colors (in the `theme` object)

## Features

- ✅ Dark/Light mode toggle
- ✅ Smooth scroll navigation
- ✅ Responsive design
- ✅ Animated sections
- ✅ Modern typography (Playfair Display + DM Sans)
- ✅ Gradient accents
