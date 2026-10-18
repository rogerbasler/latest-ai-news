# Latest AI News

Weekly AI News Podcast and Website - International English Edition

## About

This project delivers curated AI news and insights from leading international sources every Sunday. Hosted by Roger Basler de Roca, the weekly podcast covers the most important developments in artificial intelligence across five key categories.

## Features

- 📰 **Curated News Articles** - Latest AI news from TechCrunch, OpenAI, Reuters, WIRED, The Verge, MIT Technology Review, and more
- 🎙️ **Weekly Podcast** - 10-15 minute audio digest of top AI stories
- 🗂️ **5 Categories** - Organized coverage of AI News, Tools/Startups, Regulation/Ethics, Perspectives, and Business/Society implications
- 🌐 **International Focus** - English-language content from global sources
- ⚡ **Automated Updates** - New content published every Sunday at 6:00 AM

## Categories

1. **AI News of the Week** - Top headlines and major developments
2. **AI Tools, Startups, and Innovations** - New products, funding, and breakthroughs
3. **Regulation and Ethics** - Policies, ethical discussions, and safety guidelines
4. **Voices and Perspectives** - Opinion pieces and expert interviews
5. **Implications for Business & Society** - Industry impact and societal effects

## Technology Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Hosting**: GitHub Pages
- **Automation**: Claude scheduled task (content) and GitHub Actions with HeyGen (audio)

## Live Website

Visit the live website at: [https://rogerbasler.github.io/latest-ai-news/](https://rogerbasler.github.io/latest-ai-news/)

## Automation

Every Sunday morning a Claude scheduled task researches the past seven days, selects 15 articles (3 per category), writes `client/src/data/sampleData.ts` and the podcast script `podcast/script.txt`, builds the site into `docs/` and pushes to `main`. The push of a new script starts the GitHub Action `Podcast audio`, which creates the MP3 with HeyGen and publishes it. The full procedure is in [CLAUDE.md](CLAUDE.md).

## Host

**Roger Basler de Roca** is a Swiss AI consultant, keynote speaker and author based in Zürich. He works with companies on AI implementation, lectures at several Swiss universities and is a PhD candidate researching cognitive offloading. More at [thinkroger.ai](https://thinkroger.ai).

## License

© 2025–2026 Latest AI News, Roger Basler de Roca. All rights reserved.

## Security

No API keys or credentials belong in this repository. If you find a security issue, please contact mail@rogerbasler.ch instead of opening a public issue.
