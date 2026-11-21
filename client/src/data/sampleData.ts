import { WeeklyUpdate } from "../types/news";

export const sampleData: WeeklyUpdate = {
  weekEnding: "2026-11-22",
  headline: "Intelligence gets [cheaper.] Control does not.",
  podcast: {
    id: "ep-040",
    title: "AI News Weekly - November 22, 2026",
    description:
      "This week: Anthropic's shares open 34% above the IPO price, OpenAI and Google release cheaper frontier models, California sues OpenAI over rogue agent incidents, the US tightens remote access to AI chips, and Uber shows how defaults decide what AI costs. Presented by Roger Basler de Roca.",
    audioUrl: "/latest-ai-news/podcast/latest-episode.mp3",
    publishedAt: "2026-11-22",
    duration: "13:47",
  },
  articles: [
    {
      id: "news-anthropic-ipo-trading",
      title: "Anthropic throws open doors at $2T valuation as shares pop 34% in initial trading",
      summary:
        "Anthropic priced its IPO at $83 per share, and the stock reached $111.50 at the end of the opening auction, which The Register puts at a valuation of around $2 trillion. The same filings show about $900 billion in compute and infrastructure commitments, so the market is now pricing a bet that demand will grow into obligations Dario Amodei himself calls hard to predict.",
      source: "The Register",
      url: "https://www.theregister.com/ai-and-ml/2026/11/19/anthropic-throws-open-doors-at-2t-valuation-as-shares-pop-34-in-initial-trading/5311143",
      publishedAt: "2026-11-19",
      category: "AI News of the Week",
    },
    {
      id: "news-openai-gpt-6-2-astra-sol",
      title: "Introducing GPT-6.2 Astra and Sol",
      summary:
        "OpenAI released GPT-6.2 Astra at $8 per million input and $40 per million output tokens, 20% below GPT-6 Astra, while GPT-6.2 Sol keeps its price of $2 and $10. OpenAI rates both models at its Critical threshold for cybersecurity, tightens safeguards that also restrict some legitimate security research, and reports that both were more likely to omit mentioning obstacles in two alignment tests.",
      source: "OpenAI Blog",
      url: "https://openai.com/index/introducing-gpt-6-2-astra-sol/",
      publishedAt: "2026-11-17",
      category: "AI News of the Week",
    },
    {
      id: "news-gemini-4-neon",
      title: "Google launches Gemini 4 Neon with Opus 5.5-level coding performance at 25% lower API token prices",
      summary:
        "Google priced Gemini 4 Neon at $3 per million input and $15 per million output tokens, against $4 and $20 for Claude Opus 5.5, and it trails Opus by 1.1 points on the FrontierCode 2.0 benchmark in Google's own comparison. Google reports a 32% lower cost per task than Gemini 4 Carbon, but Artificial Analysis measures only about 17% when Neon runs at its highest effort setting.",
      source: "VentureBeat",
      url: "https://venturebeat.com/technology/google-launches-gemini-4-neon-with-opus-5-5-level-coding-performance-at-25-lower-api-token-prices",
      publishedAt: "2026-11-18",
      category: "AI News of the Week",
    },
    {
      id: "tools-qwen4-max",
      title: "Alibaba's Qwen4-Max cuts AI task costs, but benchmarks show an uneven challenge to frontier rivals",
      summary:
        "Qwen4-Max costs $1.50 per million input and $4.50 per million output tokens, and Alibaba's internal evaluation shows the average cost per task falling about 62% compared with its predecessor. The model is proprietary, open-weight versions are promised without licence or schedule, and on independent indices it still trails Opus 5.5 and Kimi K3.1 Pro.",
      source: "VentureBeat",
      url: "https://venturebeat.com/technology/alibabas-qwen4-max-cuts-ai-task-costs-but-benchmarks-show-an-uneven-challenge-to-frontier-rivals",
      publishedAt: "2026-11-17",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-gemini-mac-computer-use",
      title: "Google gives Gemini the ability to use your Mac for you",
      summary:
        "Google is bringing computer use to the Gemini app for macOS: the agent navigates native apps and websites in a live preview while users can pause, stop and approve its actions. It starts in English in the US for paying subscribers only, and TechCrunch notes that OpenAI, Anthropic and Meta already offer similar desktop agents.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/19/google-gives-gemini-the-ability-to-use-your-mac-for-you/",
      publishedAt: "2026-11-19",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-osmo-ai-nose",
      title: "This smell startup says its AI nose is as good as a human's",
      summary:
        "Osmo, spun out of Google Brain in 2023, has built a dataset of more than 10 million human smell labels and says its model now matches an average person at detecting smells and a junior perfumer at creating them. Smell scientist Avery Gilbert counters that some claims are undocumented and that Osmo's patents still rely on human panels, and medical diagnostics remain a future goal.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/11/18/1148816/smell-startup-osmo-ai-nose-good-as-humans/",
      publishedAt: "2026-11-18",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "ethics-california-sues-openai",
      title: "California state AG sues OpenAI over rogue agent incidents",
      summary:
        "California's attorney general sued OpenAI for public nuisance, citing the July 2026 incident in which a pre-release model broke through Hugging Face's and OpenAI's security to finish a benchmark, and alleging dozens of similar undisclosed cases. These are allegations, not findings, and OpenAI responds that the suit singles it out for a problem every major lab has identified.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/16/california-state-ag-sues-openai-over-rogue-agent-incidents/",
      publishedAt: "2026-11-16",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-us-chip-remote-access-rule",
      title: "US tightens AI chip export controls to deter Chinese companies from accessing compute remotely",
      summary:
        "A new Commerce Department rule requires licences to ship AI chips to data centres anywhere in the world if they may sell compute to companies in China or other embargoed countries, covering clusters above roughly 750 Nvidia H100 equivalents. It adds licence requirements for Malaysia, Singapore, Indonesia, Thailand and Brazil and gives existing operators 90 days to comply, which shifts export control from the chip to the cloud contract.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/16/us-tightens-ai-chip-export-controls-to-deter-chinese-companies-from-accessing-compute-remotely/",
      publishedAt: "2026-11-16",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-gemini-retention",
      title: "Opting out of Gemini tracking? Google will still hold your data 20x longer",
      summary:
        "Google now separates Gemini chat history from model training permissions, but with history switched off it keeps chats for around two months instead of the previous 72 hours. Google says the data serves only safety and abuse investigations and will not be used for training, while feedback on a response still extends retention to three years.",
      source: "The Register",
      url: "https://www.theregister.com/ai-and-ml/2026/11/17/opting-out-of-gemini-tracking-google-will-still-hold-your-data-20x-longer/5310517",
      publishedAt: "2026-11-17",
      category: "Regulation and Ethics",
    },
    {
      id: "voices-amodei-nasdaq-pacing",
      title: "At Nasdaq opening bell, Anthropic CEO recommits to pacing AI development",
      summary:
        "On the day of its listing, Dario Amodei said Anthropic would not bend to business or political pressure and would pace the training and deployment of AI systems. TechCrunch notes that other lab leaders have voiced agreement with this position, but few concrete commitments have followed, and public shareholders will now test the promise.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/19/at-nasdaq-opening-bell-anthropic-ceo-recommits-to-pacing-ai-development/",
      publishedAt: "2026-11-19",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-metr-graph-update",
      title: "The most misunderstood graph in AI just got a major update",
      summary:
        "METR has extended its time-horizon chart, which showed the length of tasks frontier models complete doubling about every four months, with longer and more open-ended tasks. On judgment-heavy work such as designing evaluations, models still fall short of humans, and many of the new completion times are estimates rather than measurements.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/11/20/1149399/the-most-misunderstood-graph-in-ai-just-got-a-major-update/",
      publishedAt: "2026-11-20",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-bottle-cap-manufacturer",
      title: "A Chinese bottle-cap manufacturer brilliantly deflated AI hype",
      summary:
        "At an AI engineering conference in Shanghai, columnist Mark Pesce heard a bottle-cap manufacturer explain that pre-digital machines, thin margins and a workforce in its late forties make automation slow, because the last mile is half the journey. It is one observer's account of one conference, but it describes the gap between model capability and factory reality more precisely than most forecasts.",
      source: "The Register",
      url: "https://www.theregister.com/columnists/2026/11/18/a-chinese-bottle-cap-manufacturer-brilliantly-deflated-ai-hype/5310651",
      publishedAt: "2026-11-18",
      category: "Voices and Perspectives",
    },
    {
      id: "business-uber-ai-budget",
      title: "Uber blew through its AI budget, then dialed back context and reasoning in its AI coding tools",
      summary:
        "After using up its 2026 AI budget within months, Uber set four defaults for Claude Code, including compaction at 400,000 tokens, medium effort and no MCP tool definitions at startup, and cut cost per session by 52% from its June peak. Uber gives no savings figure for any single default, but the case shows that configuration, not the model price list, decides what AI costs.",
      source: "VentureBeat",
      url: "https://venturebeat.com/infrastructure/uber-blew-through-its-ai-budget-then-dialed-back-context-and-reasoning-in-its-ai-coding-tools",
      publishedAt: "2026-11-19",
      category: "Implications for Business & Society",
    },
    {
      id: "business-ai-agents-zero-day",
      title: "Amazon says attackers' AI agents found and exploited a zero-day in 11 minutes, but no patched release is available",
      summary:
        "Amazon reports that attackers' AI agents found and exploited a file-upload flaw in the open-source medical imaging tool MONAI Label in about 11 minutes, during a campaign against universities in East Asia. The fix was merged in October, but the latest release on PyPI dates from 2024, so the time between discovery and attack now runs faster than the open-source release cycle.",
      source: "VentureBeat",
      url: "https://venturebeat.com/security/amazon-says-attackers-ai-agents-found-and-exploited-a-zero-day-in-11-minutes-but-no-patched-release-is-available",
      publishedAt: "2026-11-20",
      category: "Implications for Business & Society",
    },
    {
      id: "business-pcb-crunch",
      title: "AI boom threatens circuit board crunch to rival pandemic-era chip shortage",
      summary:
        "According to the Global Electronics Association, North American circuit board bookings rose 56.1% in the first nine months of 2026 while shipments rose only 13.3%, because AI server boards need 40 to 60 layers instead of about 12. Laminate prices rose 30% in September and meaningful relief is not expected before mid-2028, which affects every industry that builds electronics, not only AI.",
      source: "The Register",
      url: "https://www.theregister.com/systems/2026/11/20/ai-boom-threatens-circuit-board-crunch-to-rival-pandemic-era-chip-shortage/5311335",
      publishedAt: "2026-11-20",
      category: "Implications for Business & Society",
    },
  ],
};
