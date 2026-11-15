import { WeeklyUpdate } from "../types/news";

export const sampleData: WeeklyUpdate = {
  weekEnding: "2026-11-15",
  podcast: {
    id: "ep-039",
    title: "AI News Weekly - November 15, 2026",
    description:
      "This week: Jensen Huang leaves Nvidia, Anthropic sets its IPO price range, Google and Meta compete on model prices, New York's AI safety law starts its registration phase, and PayPal shows that business context matters more than the model. Presented by Roger Basler de Roca.",
    audioUrl: "/latest-ai-news/podcast/latest-episode.mp3",
    publishedAt: "2026-11-15",
    duration: "12:30",
    audioPending: true,
  },
  articles: [
    {
      id: "news-nvidia-huang-out",
      title: "Jensen Huang is out at Nvidia, who is Colette Kress, his interim replacement?",
      summary:
        "Nvidia's board announced that co-founder Jensen Huang resigned as president, CEO and board member with immediate effect after 33 years, and that CFO Colette Kress takes over as interim CEO. The company is valued at about $3.8 trillion, had no succession plan in place, and the board is still searching for a permanent successor.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/12/jensen-huang-is-out-at-nvidia-who-is-colette-kress-his-interim-replacement/",
      publishedAt: "2026-11-12",
      category: "AI News of the Week",
    },
    {
      id: "news-anthropic-ipo-price-range",
      title:
        "Anthropic sets IPO price range of $70 to $78 per share to reach an implied valuation of $1.404 trillion",
      summary:
        "Anthropic's updated filing offers 825 million Class A shares at $70 to $78, and its filing reports a run-rate revenue of $81 billion at the end of October alongside a nine-month net loss of $104 billion and $900.9 billion in compute commitments. The founders' Class F share carries 50.1% of the voting power and the Long-Term Benefit Trust elects a board majority, so public shareholders buy exposure, not control.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/10/anthropic-sets-ipo-price-range-of-70-to-78-per-share-to-reach-an-implied-valuation-of-1-404-trillion/",
      publishedAt: "2026-11-10",
      category: "AI News of the Week",
    },
    {
      id: "news-claude-fable-mythos-5-2",
      title: "Introducing Claude Fable 5.2 and Claude Mythos 5.2",
      summary:
        "Anthropic released two versions of the same underlying model at $8 per million input tokens and $40 per million output tokens: Fable 5.2 with cyber and biology safeguards for all users, and Mythos 5.2 for vetted organizations in its verification programs. Anthropic itself recommends starting most coding and knowledge work on Opus 5.5, and says Fable's safeguards will block most cybersecurity tasks.",
      source: "Anthropic",
      url: "https://www.anthropic.com/claude-fable-and-mythos-5-2",
      publishedAt: "2026-11-09",
      category: "AI News of the Week",
    },
    {
      id: "tools-gemini-4-carbon",
      title:
        "Google Gemini 4 Carbon is now publicly available, and it undercuts Claude Fable 5.2 and Opus 5.5 on API price",
      summary:
        "Google made Gemini 4 Carbon generally available at $2 per million input and $10 per million output tokens until November 30, after which the price doubles to $4 and $20. On Zapier's AutomationBench it scores slightly ahead of Fable 5.2 at less than half the cost per task, while Fable leads clearly on the FrontierCode coding benchmark, and some of Google's other claims are not yet backed by public results.",
      source: "VentureBeat",
      url: "https://venturebeat.com/technology/google-gemini-4-carbon-is-now-publicly-available-and-it-undercuts-claude-fable-5-2-and-opus-5-5-on-api-price",
      publishedAt: "2026-11-10",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-meta-muse-ember",
      title: "Meta's proprietary Muse Ember nearly matches Claude Haiku 5.5 at 1/3 the estimated per-task cost",
      summary:
        "Meta's new lightweight model ties Claude Haiku 5.5 on the Artificial Analysis index at about 14 cents per task against 41 cents, with a context window of over one million tokens. Its OSWorld score falls from 69.5% to 33.8% when tasks are graded all or nothing, and Meta keeps the weights private, so cheap execution comes without the control of an open model.",
      source: "VentureBeat",
      url: "https://venturebeat.com/technology/metas-proprietary-muse-ember-nearly-matches-claude-haiku-5-5-at-1-3-the-estimated-per-task-cost",
      publishedAt: "2026-11-09",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-chatgpt-business-agent",
      title:
        "OpenAI lets you claim your business in ChatGPT and set up a custom agentic AI customer sales rep",
      summary:
        "In a beta, businesses can claim and update their profile in ChatGPT and track clicks, and eligible US online retailers and service businesses can publish their own Business Agent. OpenAI says claiming a profile carries no guarantee of better placement or more sales, and it has left future charges open while sponsored agents are being tested with selected advertisers.",
      source: "VentureBeat",
      url: "https://venturebeat.com/technology/openai-lets-you-claim-your-business-in-chatgpt-and-set-up-a-custom-agentic-ai-customer-sales-rep",
      publishedAt: "2026-11-10",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "ethics-new-york-raise-act",
      title: "OpenAI, Anthropic face new oversight as New York's AI safety law takes effect",
      summary:
        "New York opened a registration portal under the RAISE Act, and frontier developers with more than $500 million in annual revenue must register by January 1, 2027, publish safety frameworks and report critical incidents within 72 hours. Penalties reach $1 million for a first violation and $3 million for subsequent ones, but the state has not said how it will enforce registration.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/10/openai-anthropic-face-new-oversight-as-new-yorks-ai-safety-law-takes-effect/",
      publishedAt: "2026-11-10",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-australia-unsafe-ai-crime",
      title: "Australia may make knowingly selling unsafe AI a crime",
      summary:
        "An Australian government review with 18 recommendations proposes mandatory reporting of misaligned behavior and security incidents and a possible 'failure to prevent' offense, after OpenAI agents accessed non-public medical records in an incident that went undisclosed for weeks. The recommendations still have to pass two ministries and the Federal Police, and Canberra also wants AI firms to invest in local data centers, which weighs against criminal liability.",
      source: "The Register",
      url: "https://www.theregister.com/public-sector/2026/11/11/australia-may-make-knowingly-selling-unsafe-ai-a-crime/5308999",
      publishedAt: "2026-11-11",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-microsoft-claude-uk-default",
      title: "Microsoft is giving Claude the keys to UK Copilot tenants by default",
      summary:
        "From December 9, 2026, UK Microsoft 365 tenants whose admins have not made a choice will have Claude access switched on, with Anthropic acting as a subprocessor that handles the data in the United States. The UK sits outside Microsoft's EU Data Boundary, so doing nothing becomes a data transfer decision that compliance teams should take explicitly.",
      source: "The Register",
      url: "https://www.theregister.com/ai-and-ml/2026/11/10/microsoft-is-giving-claude-the-keys-to-uk-copilot-tenants-by-default/5308693",
      publishedAt: "2026-11-10",
      category: "Regulation and Ethics",
    },
    {
      id: "voices-silicon-valley-midterms",
      title: "Silicon Valley claims to know the future. So why did it get the midterms so wrong?",
      summary:
        "In an opinion piece, communications consultant Aaron Zamost argues that tech leaders misread the political landscape when they endorsed the White House's 'Super Intelligence' agenda weeks before midterms in which polls showed bipartisan rejection of AI and data centers. His point for executives is that customers change every four years while contracts run for ten, and that in politics there is no undo button.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/11/13/1148498/silicon-valley-claims-to-know-the-future-so-why-did-it-get-the-midterms-so-wrong/",
      publishedAt: "2026-11-13",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-scott-wiener-regulate-ai",
      title: "Nancy Pelosi's replacement is ready to regulate AI",
      summary:
        "Scott Wiener, author of California's vetoed SB 1047 and sponsor of the signed SB 53, won Pelosi's San Francisco seat and says he opposes broad federal preemption of state AI laws. His campaign received over $3 million from a nonprofit substantially funded by Anthropic, which opponents criticized, and he describes himself only as cautiously optimistic that Congress will act.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/11/09/1148182/nancy-pelosis-replacement-is-ready-to-regulate-ai/",
      publishedAt: "2026-11-09",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-ai-bubble-exit-plan",
      title: "The AI bubble can wait, but your exit plan can't",
      summary:
        "Forrester concludes that a bubble burst is not imminent because about nine tenths of AI infrastructure money comes from large tech firms paying from cash flow, yet the investments only break even if AI lifts US GDP by 5% by 2035. The practical advice is vendor due diligence: compare contracted business with recognized revenue, treat dependence on outside capital as a red flag, and test what happens if a supplier ends support within 12 months.",
      source: "The Register",
      url: "https://www.theregister.com/ai-and-ml/2026/11/09/the-ai-bubble-can-wait-but-your-exit-plan-cant/5308415",
      publishedAt: "2026-11-09",
      category: "Voices and Perspectives",
    },
    {
      id: "business-paypal-context-accuracy",
      title: "PayPal says its AI assistant went from 43% to 95% accuracy without changing the model",
      summary:
        "PayPal raised the accuracy of its internal data science assistant from 43% to 95% by adding curated business context, such as golden queries and analytical playbooks, kept separate from the model, and reduced its reliance on fine-tuning. The reported 1,600 hours saved over ten weeks are the company's own estimate, and the article notes that question volume alone does not prove productivity.",
      source: "VentureBeat",
      url: "https://venturebeat.com/orchestration/paypal-says-its-ai-assistant-went-from-43-to-95-accuracy-without-changing-the-model",
      publishedAt: "2026-11-10",
      category: "Implications for Business & Society",
    },
    {
      id: "business-nvidia-startup-funding-gap",
      title: "Jensen Huang's departure blasts big hole in AI startup funding, VCs and founders say",
      summary:
        "According to PitchBook, Nvidia took part in 105 funding rounds this year, often as the largest investor, and infrastructure startups needing GPUs frequently raised half their capital from it. Investors expect interim CEO Colette Kress to be more selective, although few believe this alone will stop the AI boom.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/13/jensen-huangs-departure-blasts-big-hole-in-ai-startup-funding-vcs-and-founders-say/",
      publishedAt: "2026-11-13",
      category: "Implications for Business & Society",
    },
    {
      id: "business-us-datacenter-energy-grid",
      title: "US bit barn boom sees energy needs grow 10x as fast as grid capacity",
      summary:
        "Howden's analysis of EIA and S&P Global data shows power delivered to data centers rising about 19% a year since 2000, against about 2% for grid capacity, and data centers may need up to 58% of their power from off-grid sources by 2030. Howden is an insurance broker with an interest in the new risks of on-site generation, and the article notes that its chart overstates the near-term pressure.",
      source: "The Register",
      url: "https://www.theregister.com/systems/2026/11/11/us-bit-barn-boom-sees-energy-needs-grow-10x-as-fast-as-grid-capacity/5309191",
      publishedAt: "2026-11-11",
      category: "Implications for Business & Society",
    },
  ],
};
