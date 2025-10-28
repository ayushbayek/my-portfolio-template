# GitHub Pages Deployment Guide

Your React portfolio is now ready to be deployed for free on GitHub Pages!

## Prerequisites

- GitHub account (username: ayushbayek)
- Git installed on your computer
- Your portfolio code is ready

## Step-by-Step Deployment Instructions

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

### 2. Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `my-portfolio-template`
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (since you already have one)
6. Click "Create repository"

### 3. Connect Local Repository to GitHub

```bash
git remote add origin https://github.com/ayushbayek/my-portfolio-template.git
git branch -M main
git push -u origin main
```

### 4. Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:

- Build your React app
- Create a `gh-pages` branch
- Deploy the built files to GitHub Pages

### 5. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/ayushbayek/my-portfolio-template`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under "Source", select **GitHub Actions**
5. Your site will be available at: `https://ayushbayek.github.io/my-portfolio-template`

## Your Portfolio URL

Your portfolio will be live at:
**https://ayushbayek.github.io/my-portfolio-template**

## Important Notes

### Chat Feature

- The chat functionality is connected to your deployed FastAPI backend at `https://virtu-you.onrender.com`
- Make sure your backend is running for the chat to work

### Future Updates

To update your deployed portfolio after making changes:

```bash
git add .
git commit -m "Your update message"
git push origin main
npm run deploy
```

### Custom Domain (Optional)

If you want to use a custom domain instead of the GitHub Pages URL:

1. Buy a domain from a provider like Namecheap, GoDaddy, etc.
2. In your repository Settings → Pages → Custom domain, add your domain
3. Configure DNS records as per GitHub's documentation

## Troubleshooting

### If deployment fails:

- Make sure you're logged into GitHub
- Check that the repository name matches exactly
- Verify your GitHub username in package.json homepage URL

### If chat doesn't work:

- Ensure your FastAPI backend is deployed and running
- Check browser console for any CORS errors

## File Structure for Deployment

- **Source code**: `main` branch
- **Deployed files**: `gh-pages` branch (automatically created)
- **Build output**: `build/` folder

Your portfolio is now ready for the world to see! 🚀
