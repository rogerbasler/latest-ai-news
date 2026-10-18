import { WeeklyUpdate } from "../types/news";

export const sampleData: WeeklyUpdate = {
  weekEnding: "2026-10-18",
  podcast: {
    id: "ep-035",
    title: "AI News Weekly - October 18, 2026",
    description: "This week: Meta's double move into frontier and open models, Gemini 4 Argon goes wide, outside evaluators inside an AI lab, and why agents get more expensive as tokens get cheaper. Presented by Roger Basler de Roca.",
    audioUrl: "/latest-ai-news/podcast/latest-episode.mp3",
    publishedAt: "2026-10-18",
    duration: "12:10",
  },
  articles: [
    {
      id: "news-meta-muse-wonder",
      title: "Meta releases its first frontier model, Muse Wonder",
      summary:
        "Meta's Superintelligence Lab released Muse Wonder and Muse Wonder Full, its first frontier models, with an emphasis on an 'active memory' that retains and synthesizes what users provide. Wonder costs $4 per million input and $20 per million output tokens through Meta's API, Wonder Full is limited to Muse Code subscribers, and the benchmark claims come from Meta's own testing.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/12/meta-releases-its-first-frontier-model-muse-wonder/",
      publishedAt: "2026-10-12",
      category: "AI News of the Week",
    },
    {
      id: "news-gemini-4-argon-ga",
      title: "Google makes Gemini 4 Argon broadly available with limited-time low API pricing of $2/$10 per 1M token",
      summary:
        "Google made Gemini 4 Argon broadly available through its API, AI Studio and paid Gemini plans, at an introductory $2 per million input and $10 per million output tokens until November 30, after which prices double. Argon leads some independent rankings such as the Vals Index but trails Claude Opus 5.5 on Artificial Analysis and in Google's own Terminal-Bench comparison.",
      source: "VentureBeat",
      url: "https://venturebeat.com/technology/google-makes-gemini-4-argon-broadly-available-with-limited-time-low-api-pricing-of-2-10-per-1m-token",
      publishedAt: "2026-10-13",
      category: "AI News of the Week",
    },
    {
      id: "news-character-ai-bankruptcy",
      title: "Just 5 years in, interactive chatbot platform Character.AI files for bankruptcy",
      summary:
        "Character.AI, founded in 2021 and once valued as a unicorn, filed for Chapter 11, citing legal, regulatory and operational headwinds after a series of lawsuits over the effects of its chatbots on young users. The service continues during a sale process expected to close by early December, Disney has agreed to buy some assets for $20 million, and without a buyer the platform will be wound down.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/13/just-5-years-in-interactive-chatbot-platform-character-ai-files-for-bankruptcy/",
      publishedAt: "2026-10-13",
      category: "AI News of the Week",
    },
    {
      id: "tools-flux-3-klein",
      title: "Black Forest Labs opens FLUX 3 Image Klein weights, with free commercial use limited to smaller businesses",
      summary:
        "German image specialist Black Forest Labs released the weights of FLUX 3 Image Klein, a 5.6-billion-parameter model with native 4K output that runs on GPUs with as little as 8 GB of video memory. Commercial use is free only for individuals and businesses below $5 million in annual revenue; larger companies need a separate agreement or the paid API.",
      source: "VentureBeat",
      url: "https://venturebeat.com/technology/black-forest-labs-opens-flux-3-image-klein-weights-with-free-commercial-use-limited-to-smaller-businesses",
      publishedAt: "2026-10-15",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-muse-spark-open",
      title: "Meta unveils Muse Spark Open, the new top U.S. open weights model, and it runs on two paired Mac desktops",
      summary:
        "Meta released Muse Spark Open, an 816-billion-parameter mixture-of-experts model with a one-million-token context, under a custom licence that requires attribution and a separate agreement for large model-hosting businesses. Meta's desktop setup needs two top-end Mac Studios, and Meta's own model card scores it below several Chinese open models on the Artificial Analysis index.",
      source: "VentureBeat",
      url: "https://venturebeat.com/technology/meta-unveils-muse-spark-open-the-new-top-u-s-open-weights-model-and-it-runs-on-two-paired-mac-desktops",
      publishedAt: "2026-10-15",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-brave-leo-e2e",
      title: "Want your AI chats to stay private? Brave TEEs up end-to-end encryption",
      summary:
        "Brave connected its Leo assistant to Z.ai's GLM 5.3 Flash model running in a trusted execution environment, so prompts are encrypted on the device, stripped of the user's IP address and decrypted only inside verified hardware. Brave says the work is not finished: verification is to move into the browser, and attestation of the exact model weights is still to come.",
      source: "The Register",
      url: "https://www.theregister.com/ai-and-ml/2026/10/16/want-your-ai-chats-to-stay-private-brave-tees-up-end-to-end-encryption/5303462",
      publishedAt: "2026-10-16",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "ethics-meta-terms-scraping",
      title: "Meta removes language that raised scraping and AI training concerns",
      summary:
        "Meta removed a clause from its updated commercial terms that would have let it use content from business customers' domains and web pages for product development, including AI training, after legal experts quoted by Nieman Lab warned it could enable scraping of publishers' sites. Meta says the terms applied only to its ads and business products and do not change how its web crawlers work.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/17/meta-removes-language-that-raised-scraping-and-ai-training-concerns/",
      publishedAt: "2026-10-17",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-anthropic-independent-evaluators",
      title: "An update on independent evaluators",
      summary:
        "Anthropic gave six METR researchers employee-like access to hardware, internal tools and systems to assess its risk levels and practices, and METR may publish without an Anthropic veto, apart from redactions in predefined categories such as customer data. Anthropic plans three access tiers for external evaluators, with less information and narrower publication rights at the lower levels.",
      source: "Anthropic",
      url: "https://www.anthropic.com/news/an-update-on-independent-evaluators",
      publishedAt: "2026-10-15",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-uk-cyber-bill-ai",
      title: "UK keeps AI safeguards in the maybe pile for Cyber Security Bill",
      summary:
        "Senior UK civil servants told MPs that the government is still considering whether to add AI-specific measures to the Cyber Security and Resilience Bill, despite ministers' promise to legislate where necessary. Committee chair Liam Byrne replied that a bill cannot consider something, it has to legislate for it.",
      source: "The Register",
      url: "https://www.theregister.com/ai-and-ml/2026/10/15/uk-keeps-ai-safeguards-in-the-maybe-pile-for-cyber-security-bill/5303026",
      publishedAt: "2026-10-15",
      category: "Regulation and Ethics",
    },
    {
      id: "voices-open-models-risks",
      title: "Open models have real benefits. Do they outweigh the risks?",
      summary:
        "Grace Huckins weighs the case for open-weight models, from local data protection and lower cost to research access, against risks such as removable safety training and access that cannot be revoked once weights are downloaded. Closed models still hold the top places on the leaderboards, and no current tamper-resistance technique withstands all known attacks.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/10/13/1146366/open-models-have-real-benefits-do-they-outweigh-the-risks/",
      publishedAt: "2026-10-13",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-ai-upgrade-treadmill",
      title: "It won't kill you, or humanity, to get off the AI upgrade treadmill",
      summary:
        "Columnist Mark Pesce argues that frequent model releases bring diminishing returns because organizations cannot absorb the change, leaving engineers with 'toy debt' from tools they never mastered. He suggests choosing a deliberate pause rather than having one forced on the industry by rising control costs and insurance limits.",
      source: "The Register",
      url: "https://www.theregister.com/columnists/2026/10/14/it-wont-kill-you-or-humanity-to-get-off-the-ai-upgrade-treadmill/5301778",
      publishedAt: "2026-10-14",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-cerebras-doomsday",
      title: "Cerebras CEO pushes back on AI doomsday warnings",
      summary:
        "At TechCrunch Disrupt, Cerebras CEO Andrew Feldman said the doom narrative is not helping the industry and that AI leaders should talk as much about benefits as about risks, while supporting reasonable regulation. He also said the data center industry has engaged poorly with local US communities.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/13/cerebras-ceo-pushes-back-on-ai-doomsday-warnings/",
      publishedAt: "2026-10-13",
      category: "Voices and Perspectives",
    },
    {
      id: "business-imf-ai-bubble",
      title: "AI bubble could burst and take global economy with it, IMF warns",
      summary:
        "The IMF's October Global Financial Stability Report warns that markets are increasingly exposed to a correction if returns on AI spending fall short, pointing to circular financing in which AI firms invest in, lend to and buy from each other. The IMF does not forecast a collapse and finds that banks could withstand a severe downturn, but it asks regulators to watch leverage and concentration.",
      source: "The Register",
      url: "https://www.theregister.com/ai-and-ml/2026/10/13/ai-bubble-could-burst-and-take-global-economy-with-it-imf-warns/5302781",
      publishedAt: "2026-10-13",
      category: "Implications for Business & Society",
    },
    {
      id: "business-dead-startup-data",
      title: "AI labs are buying data from dead startups to train their models",
      summary:
        "AI labs and training-data vendors are buying code, emails and chat archives from failed companies to train agents; Google paid $10 million for Spirit Airlines data that included 100 million emails. The proceeds usually go to creditors and investors, employees' personal details are part of the data, and no US federal law prohibits such sales.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/10/13/1145755/ai-labs-buying-data-from-dead-startups-to-train-models/",
      publishedAt: "2026-10-13",
      category: "Implications for Business & Society",
    },
    {
      id: "business-gartner-agent-costs",
      title: "Gartner says agent costs will rise fivefold by 2028 even as tokens get cheaper. Here is how to keep them in check",
      summary:
        "Gartner forecasts that inference costs per agentic workflow will rise more than fivefold through 2028 even as token prices fall, because agents use 5 to 30 times more tokens than chatbots and labs spend efficiency gains on larger models. Its advice includes AI FinOps, routing to cheaper models and tying spend to outcomes; a VentureBeat poll found that 21% of enterprises have no automatic cap on agent token spend.",
      source: "VentureBeat",
      url: "https://venturebeat.com/orchestration/gartner-says-agent-costs-will-rise-fivefold-by-2028-even-as-tokens-get-cheaper-here-is-how-to-keep-them-in-check",
      publishedAt: "2026-10-16",
      category: "Implications for Business & Society",
    },
  ],
};
