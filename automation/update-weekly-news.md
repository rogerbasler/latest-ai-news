# Weekly AI News Automation Workflow

This document describes the automated workflow that runs every Sunday at 6:00 AM to collect AI news, generate a podcast, and update the website.

## Workflow Steps

### 1. News Collection (Past 7 Days)
Collect the latest AI news from the following English-language sources:
- **TechCrunch** - AI and technology news
- **OpenAI Blog** - Official OpenAI announcements
- **Reuters** - Business and technology coverage
- **WIRED** - Technology and AI analysis
- **The Verge** - Tech news and reviews
- **MIT Technology Review** - In-depth AI research coverage
- **VentureBeat** - AI business and startup news
- **Ars Technica** - Technical analysis and news

### 2. Content Categorization
Organize collected news into five categories:

1. **AI News of the Week** - Top headlines and major developments
2. **AI Tools, Startups, and Innovations** - New products, funding, breakthroughs
3. **Regulation and Ethics** - Policies, ethical discussions, safety guidelines
4. **Voices and Perspectives** - Opinion pieces, expert interviews, viewpoints
5. **Implications for Business & Society** - Industry impact and societal effects

### 3. Podcast Script Generation
Generate a professional English podcast script (10-15 minutes) with:
- Host introduction: Roger Basler de Roca
- Summary of top stories from each category
- Analysis and insights
- Professional transitions between segments
- Closing remarks and preview of next week

### 4. Audio Generation
- Generate high-quality audio using male voice
- Export as MP3 format
- Save to: `/client/public/podcast/latest-episode.mp3`

### 5. Website Update
Update the following files:
- `/client/src/data/sampleData.ts` - Replace with new articles and podcast info
- Update `weekEnding` date to current date
- Ensure all article URLs and metadata are correct

### 6. GitHub Deployment
- Build the production website
- Commit all changes to the repository
- Push to GitHub (triggers automatic GitHub Pages deployment)
- Commit message format: "Weekly AI News Update - [Date]"

## Execution Command

The scheduled task will execute the following prompt:

```
Collect the latest AI news from the past 7 days from the following English sources: TechCrunch, OpenAI Blog, Reuters, WIRED, The Verge, MIT Technology Review, VentureBeat, and Ars Technica.

Organize the news into 5 categories:
1. AI News of the Week
2. AI Tools, Startups, and Innovations
3. Regulation and Ethics
4. Voices and Perspectives
5. Implications for Business & Society

Create a professional English podcast script (10-15 minutes) with host Roger Basler de Roca covering the top stories. Generate the audio file using male voice and save it to the project.

Update the website data file at /home/ubuntu/latest-ai-news/client/src/data/sampleData.ts with the new articles and podcast information. Update the date stamp to the current date.

Build the website, commit all changes, and push to the GitHub repository rogerbasler/latest-ai-news with the message "Weekly AI News Update - [current date]".
```

## Schedule
- **Frequency**: Every Sunday
- **Time**: 6:00 AM (user's timezone)
- **Automation**: Manus scheduled task with GitHub integration enabled
