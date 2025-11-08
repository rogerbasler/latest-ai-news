# Latest AI News - Complete Setup Guide

## 🎉 What's Been Created

You now have a fully functional AI news website with automated weekly updates:

- **GitHub Repository**: https://github.com/rogerbasler/latest-ai-news
- **Website URL** (after enabling Pages): https://rogerbasler.github.io/latest-ai-news/
- **Scheduled Task**: Every Sunday at 6:00 AM (requires account upgrade to enable)

## 📋 Quick Start Checklist

### Step 1: Enable GitHub Pages (Required)

1. Go to https://github.com/rogerbasler/latest-ai-news/settings/pages
2. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/docs`
3. Click **Save**
4. Wait 2-5 minutes for deployment
5. Visit https://rogerbasler.github.io/latest-ai-news/

### Step 2: Enable Scheduled Task (Optional)

The scheduled task has been created but requires a Manus account upgrade to enable:

- **Task Name**: Weekly AI News Update
- **Schedule**: Every Sunday at 6:00 AM
- **What it does**: Automatically collects news, generates podcast, and updates website

To enable:
1. Upgrade your Manus account (if not already upgraded)
2. The scheduled task will automatically activate
3. You can view/manage it in your Manus dashboard

## 🎨 Website Features

### Design
- **Theme**: Dark mode with blue/cyan accents
- **Typography**: Inter (body) + Space Grotesk (headings)
- **Layout**: Responsive grid with card-based design
- **Components**: News cards, podcast player, category sections

### Content Categories
1. **AI News of the Week** - Major headlines and developments
2. **AI Tools, Startups, and Innovations** - Product launches and funding
3. **Regulation and Ethics** - Policy and safety discussions
4. **Voices and Perspectives** - Expert opinions and interviews
5. **Implications for Business & Society** - Industry impact analysis

### News Sources
- TechCrunch
- OpenAI Blog
- Reuters
- WIRED
- The Verge
- MIT Technology Review
- VentureBeat
- Ars Technica

## 🤖 Automation Workflow

### What Happens Every Sunday at 6 AM

1. **News Collection**
   - Searches 8 major English sources for AI news from past 7 days
   - Filters for significant developments and announcements

2. **Content Processing**
   - Categorizes articles into 5 predefined categories
   - Generates summaries and extracts key information
   - Ensures balanced coverage across categories

3. **Podcast Generation**
   - Creates 10-15 minute script with professional structure
   - Generates audio using AI text-to-speech (male voice)
   - Saves to `/client/public/podcast/latest-episode.mp3`

4. **Website Update**
   - Updates data file with new articles and podcast info
   - Updates date stamp to current week
   - Builds production version

5. **Deployment**
   - Commits changes to GitHub
   - Pushes to repository (triggers GitHub Pages rebuild)
   - Website automatically updates within minutes

## 📁 Project Structure

```
latest-ai-news/
├── client/
│   ├── src/
│   │   ├── components/       # UI components
│   │   │   ├── NewsCard.tsx
│   │   │   └── PodcastPlayer.tsx
│   │   ├── data/
│   │   │   └── sampleData.ts # ← UPDATE THIS for manual changes
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── types/
│   │   │   └── news.ts
│   │   └── index.css         # Theme and styles
│   └── public/
│       └── podcast/          # Podcast audio files
├── docs/                     # Built website (GitHub Pages)
├── automation/
│   └── update-weekly-news.md # Workflow documentation
├── README.md
├── DEPLOYMENT.md            # Deployment instructions
└── SETUP_GUIDE.md          # This file
```

## 🛠️ Manual Updates

### Update News Articles

Edit `/home/ubuntu/latest-ai-news/client/src/data/sampleData.ts`:

```typescript
export const sampleData: WeeklyUpdate = {
  weekEnding: "2025-11-15",  // Update date
  articles: [
    {
      id: "1",
      title: "Your Article Title",
      summary: "Brief summary...",
      source: "Source Name",
      url: "https://...",
      publishedAt: "2025-11-15",
      category: "AI News of the Week"
    },
    // Add more articles...
  ],
  podcast: {
    id: "ep-002",
    title: "AI News Week of November 15, 2025",
    description: "Your description...",
    audioUrl: "/podcast/latest-episode.mp3",
    publishedAt: "2025-11-15",
    duration: "12:34"
  }
};
```

### Build and Deploy

```bash
cd /home/ubuntu/latest-ai-news
pnpm build
cp -r dist/public/* docs/
git add -A
git commit -m "Update: [Your message]"
git push origin main
```

## 🎙️ Podcast Management

### Audio File Location
- Place podcast MP3 files in: `/client/public/podcast/`
- Reference in data file as: `/podcast/filename.mp3`

### Generating New Episodes
The scheduled task automatically generates episodes, or you can:
1. Write a script
2. Use Manus generate tool with male voice
3. Save to the podcast directory
4. Update the data file with episode info

## 🔧 Customization

### Change Colors
Edit `/client/src/index.css` - look for the `.dark` section and modify OKLCH color values.

### Change Fonts
Update the Google Fonts import in `/client/src/index.css` and modify font-family declarations.

### Add New Categories
1. Update `NewsCategory` type in `/client/src/types/news.ts`
2. Update category colors in `NewsCard.tsx`
3. Update categories array in `Home.tsx`

### Modify Layout
Edit `/client/src/pages/Home.tsx` to change page structure and sections.

## 🐛 Troubleshooting

### Website Not Showing
- Verify GitHub Pages is enabled (Settings → Pages)
- Check branch is `main` and folder is `/docs`
- Wait 5 minutes for CDN propagation
- Clear browser cache

### Scheduled Task Not Running
- Verify your Manus account is upgraded
- Check task is enabled in Manus dashboard
- Review task execution logs for errors

### Build Errors
```bash
cd /home/ubuntu/latest-ai-news
pnpm install  # Reinstall dependencies
pnpm build    # Try building again
```

### Git Push Fails
- Ensure GitHub authentication is configured
- Check you have write access to the repository
- Verify remote URL: `git remote -v`

## 📞 Support

- **GitHub Issues**: https://github.com/rogerbasler/latest-ai-news/issues
- **Manus Support**: https://help.manus.im
- **Documentation**: See README.md and DEPLOYMENT.md

## 🚀 Next Steps

1. ✅ Enable GitHub Pages (see Step 1 above)
2. ✅ Verify website is live
3. ✅ Upgrade Manus account to enable scheduled task
4. ✅ Test the first automated update
5. ✅ Customize design and content as needed
6. ✅ Share your website URL!

---

**Created by**: Manus AI  
**Host**: Roger Basler de Roca  
**Repository**: https://github.com/rogerbasler/latest-ai-news
