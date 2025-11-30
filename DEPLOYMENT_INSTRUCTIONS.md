# Deployment Instructions - English AI News Website

## ⚠️ CRITICAL: This is the ENGLISH website

**Repository:** latest-ai-news  
**Live URL:** https://rogerbasler.github.io/latest-ai-news/  
**Language:** English  
**Branch:** main  

## DO NOT confuse with German website
The German website is at: https://rogerbasler.github.io/aktuelle-ki-news/ (different repository!)

---

## Technology Stack
- React 19 with TypeScript
- Vite build tool
- Wouter router
- Tailwind CSS
- Deploys from `docs/` folder

## Base Path Configuration
- **Vite config:** `/latest-ai-news/`
- **Router base:** `/latest-ai-news`

## Weekly Update Process

### 1. Collect News (English sources only)
- TechCrunch
- OpenAI Blog
- Reuters
- WIRED
- The Verge
- MIT Technology Review
- VentureBeat
- Ars Technica

### 2. Update Data File
Edit: `client/src/data/sampleData.ts`
- Add new articles (35+ articles)
- Organize into 5 categories
- Update weekEnding date

### 3. Generate Podcast
- Create English podcast script
- Generate audio with professional English voice
- Save as: `client/public/podcast/latest-episode.mp3`

### 4. Build & Deploy
```bash
cd /home/ubuntu/latest-ai-news
pnpm install  # if needed
pnpm build
cp -r dist/public/* docs/
git add -A
git commit -m "Weekly AI News Update - English Edition - $(date +%Y-%m-%d)"
git push origin main
```

### 5. Verify
Wait 1-2 minutes, then check: https://rogerbasler.github.io/latest-ai-news/

---

## Troubleshooting

### 404 Error
- Check base path in `vite.config.ts` is `/latest-ai-news/`
- Check router base in `client/src/App.tsx` is `/latest-ai-news`
- Ensure `.nojekyll` exists in docs folder
- Verify GitHub Pages is set to deploy from `docs/` folder on `main` branch

### Build Fails
```bash
rm -rf node_modules
pnpm install
pnpm build
```

---

**Last Updated:** November 30, 2025
