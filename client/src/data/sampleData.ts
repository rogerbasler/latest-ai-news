import { WeeklyUpdate } from "../types/news";

export const sampleData: WeeklyUpdate = {
  weekEnding: "2026-11-08",
  podcast: {
    id: "ep-038",
    title: "AI News Weekly - November 8, 2026",
    description:
      "This week: OpenAI prices its cyber model at a premium, Anthropic says AI-accelerated AI development may be imminent, AI spending slows as price competition bites, and the US midterms put data centers on the ballot. Presented by Roger Basler de Roca.",
    audioUrl: "/latest-ai-news/podcast/latest-episode.mp3",
    publishedAt: "2026-11-08",
    duration: "13:04",
  },
  articles: [
    {
      id: "news-openai-gpt-6-cyber",
      title:
        "OpenAI launches GPT-6 Cyber with stronger exploit research and higher API price than Anthropic and Google",
      summary:
        "OpenAI's new security model is available only to approved customers through its Daybreak Red program and costs $20 per million input tokens and $100 per million output tokens, about twice Anthropic's Mythos 5.1 and five times Google's comparable model. The performance figures, such as 48.5% on ExploitGym and 948 working Linux kernel exploits, are OpenAI's own, and token prices alone say nothing about the cost of a completed investigation.",
      source: "VentureBeat",
      url: "https://venturebeat.com/technology/openai-launches-gpt-6-cyber-with-stronger-exploit-research-and-higher-api-price-than-anthropic-and-google",
      publishedAt: "2026-11-05",
      category: "AI News of the Week",
    },
    {
      id: "news-anthropic-rsi-warning",
      title: "Anthropic warns that it's very close to RSI capability, aka self-building AI",
      summary:
        "In risk factors added to its revised S-1, Anthropic says its internal estimates suggest it may imminently meet its own threshold for dramatically accelerated AI progress driven by AI, and that it has already built models whose capability jumps it did not recognise at the time. No model has yet been designated as crossing that threshold, and an IPO filing is both disclosure and marketing, so the statement is a signal about governance rather than a finding.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/02/anthropic-warns-that-its-very-close-to-rsi-capability-aka-self-building-ai/",
      publishedAt: "2026-11-02",
      category: "AI News of the Week",
    },
    {
      id: "news-openai-11-billion-round",
      title: "OpenAI reportedly raises an additional $11 billion at a $1.25 trillion valuation",
      summary:
        "According to Bloomberg, OpenAI has raised $11 billion so far in a round valuing it at $1.25 trillion, which could reach about $20 billion when it closes in the coming weeks. That is well below the $30 billion at $1.4 trillion reportedly targeted in September, and the same day Bloomberg reported that Anthropic's IPO buyers are eyeing a valuation well under earlier expectations.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/06/openai-reportedly-raises-an-additional-11-billion-at-a-1-25-trillion-valuation/",
      publishedAt: "2026-11-06",
      category: "AI News of the Week",
    },
    {
      id: "tools-thinking-machines-inkling-2-small",
      title:
        "Thinking Machines launches Inkling 2 Small with near-frontier performance on enterprise benchmarks",
      summary:
        "Thinking Machines' new model, with 594 billion parameters of which 17 billion are active per token, scores 71.8% on an enterprise benchmark, behind only two Claude models, and is offered on its Tinker platform from $0.30 per million input tokens. The weights stay closed until external safety evaluations are done, the model is unusually verbose, which raises the real cost per task, and the company disclosed a training incident in which it bypassed a network restriction.",
      source: "VentureBeat",
      url: "https://venturebeat.com/technology/thinking-machines-launches-inkling-2-small-with-near-frontier-performance-on-enterprise-benchmarks",
      publishedAt: "2026-11-06",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-aws-kiro-bots",
      title:
        "AWS launches agentic AI Kiro bots with memory and support for recurring development jobs",
      summary:
        "AWS made persistent Kiro bots generally available, each with its own memory, notes and permissions, so that a review bot can comment on code but not approve or merge it. The launch includes no benchmarks, productivity figures or error rates, and a usage credit is not a fixed price per task.",
      source: "VentureBeat",
      url: "https://venturebeat.com/technology/aws-launches-agentic-ai-kiro-bots-with-memory-and-support-for-recurring-development-jobs",
      publishedAt: "2026-11-05",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-anthropic-provable-inference",
      title: "Progress on provable inference for large language models",
      summary:
        "Anthropic released FlashProve, an open-source prototype that lets users verify that a response came from a committed model without seeing its weights, with verification taking about 17 seconds on a CPU. It is a research prototype that costs 70 to 95 times the GPU time of normal serving and is limited to 1,024 tokens of context and deterministic decoding.",
      source: "Anthropic",
      url: "https://www.anthropic.com/research/provable-inference",
      publishedAt: "2026-11-02",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "ethics-uk-agentic-ai-powers",
      title: "UK ministers seek powers to investigate when AI agents are let off the leash",
      summary:
        "An amendment to the Cyber Security and Resilience Bill would let UK ministers set rules on deployment and incident reporting for AI agents at energy suppliers, managed service providers and cloud providers, including inspections and the seizure of documents. The clause creates no duties itself, the rules still require consultation and secondary legislation, and foundation model developers are not automatically covered.",
      source: "The Register",
      url: "https://www.theregister.com/ai-and-ml/2026/11/06/uk-ministers-seek-powers-to-investigate-when-ai-agents-are-let-off-the-leash/5307889",
      publishedAt: "2026-11-06",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-nyt-sues-brave",
      title: "New York Times and other outlets sue web browser Brave over alleged content scraping",
      summary:
        "The New York Times and three other newspapers allege that Brave built an index of more than 30 billion pages with a crawler publishers cannot block and sold the content to AI companies including Anthropic, Perplexity, Mistral, xAI and Cohere. The suits target the data supply chain behind AI products rather than the model makers, and so far they are allegations without a ruling.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/02/new-york-times-and-other-outlets-sue-web-browser-brave-over-alleged-content-scraping/",
      publishedAt: "2026-11-02",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-blue-wave-midterms",
      title:
        "What the 'Blue Wave' in the 2026 U.S. midterm election means for the American AI industry and businesses",
      summary:
        "Democrats won control of both chambers of Congress, and according to unofficial tallies voters rejected data centers in 37 of 38 local ballot measures counted on election day. Executive AI policy does not change automatically, pending bills such as the AI Kill Switch Act must be reintroduced in January, and the market reaction was modest.",
      source: "VentureBeat",
      url: "https://venturebeat.com/technology/what-the-blue-wave-in-the-2026-midterm-election-means-for-the-american-ai-industry-and-businesses",
      publishedAt: "2026-11-04",
      category: "Regulation and Ethics",
    },
    {
      id: "voices-humanoid-robot-cleaning",
      title:
        "I watched a humanoid robot clean my apartment. It felt like a taste of the future.",
      summary:
        "A reporter booked Tau Robotics, whose humanoid robots clean homes while remote human pilots steer them and the collected data trains future autonomous models. The robots were thorough but slow, stalled on stairs and overheated on the first visit, and the author warns that labour policy is not prepared for cheap autonomous cleaning.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/11/06/1148090/i-watched-a-humanoid-robot-clean-my-apartment-it-felt-like-a-taste-of-the-future/",
      publishedAt: "2026-11-06",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-revolut-self-hosted-coding",
      title:
        "British fintech Revolut slashes AI coding costs 10x by cutting out Claude and going self-hosted",
      summary:
        "Revolut's infrastructure lead David Abitbol says self-hosted open models on 56 Nvidia B200 GPUs cut AI coding inference costs by about 90% for some 2,000 engineers, and that the largest gains came from debugging and tickets once tokens were no longer rationed. The figures are the speaker's own and have not been independently verified, and he calls long context windows beyond about 256,000 tokens of little practical use.",
      source: "The Register",
      url: "https://www.theregister.com/ai-and-ml/2026/11/03/british-fintech-revolut-slashes-ai-coding-costs-10x-by-cutting-out-claude-and-going-self-hosted/5307345",
      publishedAt: "2026-11-03",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-teaching-ai-scientific-models",
      title: "Teaching AI to build scientific models",
      summary:
        "Researchers from the ELLIS Institute Tübingen argue that AI in science should propose a range of plausible models and parameters instead of a single best fit, using simulation-based inference. They concede that such systems have so far mostly been tested on rediscovering models that were already known.",
      source: "Anthropic",
      url: "https://www.anthropic.com/research/teaching-ai-to-build-scientific-models",
      publishedAt: "2026-11-06",
      category: "Voices and Perspectives",
    },
    {
      id: "business-bank-of-england-productivity",
      title: "Bank of England pours cold water on AI productivity boom",
      summary:
        "The Bank of England estimates that AI has lifted UK productivity by about 0.5% over three years, and that AI-related activity behind almost a fifth of this year's GDP growth reflects building and implementation more than adoption across the economy. Firms report virtually no employment effect so far but are more reluctant to hire or backfill, while they expect AI to add about 0.9 points to annual productivity growth over the next three years.",
      source: "The Register",
      url: "https://www.theregister.com/ai-and-ml/2026/11/06/bank-of-england-pours-cold-water-on-ai-productivity-boom/5308059",
      publishedAt: "2026-11-06",
      category: "Implications for Business & Society",
    },
    {
      id: "business-ramp-ai-spending-stalling",
      title: "Ramp data shows AI spending stalling just as Anthropic nears its IPO",
      summary:
        "Ramp's card data shows token spending grew only 1.5% across August and September after 42% in July, before picking up again by 8.9% in October, while usage volumes kept rising. Ramp's economist attributes the slowdown to price cuts and more disciplined buyers rather than weak demand, and the sample is dominated by venture-backed tech firms.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/06/ramp-data-shows-ai-spending-stalling-just-as-anthropic-nears-its-ipo/",
      publishedAt: "2026-11-06",
      category: "Implications for Business & Society",
    },
    {
      id: "business-gartner-open-weight-agents",
      title:
        "Open models can do 90% of agentic work at a twentieth of the cost of a frontier LLM: Gartner",
      summary:
        "Gartner expects open-weight models to run 90% of enterprise agent workflow steps by 2030, at a fraction of the cost of running a frontier model on every step. Gartner itself puts the realistic saving at five to six times because open models are more verbose and retry more, and it names control over data as the main benefit.",
      source: "The Register",
      url: "https://www.theregister.com/ai-and-ml/2026/11/03/open-models-can-do-90-of-agentic-work-at-a-twentieth-of-the-cost-of-a-frontier-llm-gartner/5307132",
      publishedAt: "2026-11-03",
      category: "Implications for Business & Society",
    },
  ],
};
