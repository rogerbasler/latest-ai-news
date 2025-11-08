# Deployment Instructions

## Enable GitHub Pages

To deploy the website to GitHub Pages, follow these steps:

1. **Navigate to Repository Settings**
   - Go to https://github.com/rogerbasler/latest-ai-news
   - Click on the **Settings** tab (top right)

2. **Configure GitHub Pages**
   - In the left sidebar, click on **Pages**
   - Under "Build and deployment":
     - **Source**: Select "Deploy from a branch"
     - **Branch**: Select `main`
     - **Folder**: Select `/docs`
   - Click **Save**

3. **Wait for Deployment**
   - GitHub will build and deploy your site (usually takes 1-5 minutes)
   - Once complete, you'll see: "Your site is live at https://rogerbasler.github.io/latest-ai-news/"

4. **Verify the Website**
   - Visit https://rogerbasler.github.io/latest-ai-news/
   - The website should display with all the AI news content

## Automated Updates

The scheduled task will automatically:
- Collect news every Sunday at 6:00 AM
- Generate podcast episodes
- Update the website content
- Build and push changes to GitHub
- GitHub Pages will automatically redeploy

## Manual Updates

To manually trigger an update:
1. Run the scheduled task prompt manually in Manus
2. Or edit `/client/src/data/sampleData.ts` directly
3. Build: `pnpm build`
4. Copy to docs: `cp -r dist/public/* docs/`
5. Commit and push changes

## Troubleshooting

**If the site doesn't appear:**
- Check that GitHub Pages is enabled in Settings → Pages
- Verify the branch is set to `main` and folder to `/docs`
- Check the Actions tab for any deployment errors
- Wait a few minutes for GitHub's CDN to update

**If content doesn't update:**
- Verify the build completed successfully
- Check that files were copied to the `/docs` directory
- Ensure changes were committed and pushed to GitHub
- Clear your browser cache

## Repository Structure

```
latest-ai-news/
├── client/              # React source code
│   ├── src/
│   │   ├── data/       # News data (update here)
│   │   ├── components/ # UI components
│   │   └── pages/      # Page components
│   └── public/         # Static assets
├── docs/               # Built website (GitHub Pages serves from here)
├── automation/         # Automation workflow documentation
└── README.md          # Project documentation
```
