import { WeeklyUpdate } from "../types/news";

export const sampleData: WeeklyUpdate = {
  weekEnding: "2026-08-16",
  podcast: {
    id: "ep-032",
    title: "AI News Weekly - August 16, 2026",
    description:
      "This week: Meta's local open-weight Muse Glimmer, OpenAI's ultrafast inference preview, Google's rapid Gemini release cycle, the rising governance burden of agents, and why AI strategy is now infrastructure strategy. Presented by Roger Basler de Roca.",
    audioUrl: "/latest-ai-news/podcast/latest-episode.mp3",
    publishedAt: "2026-08-16",
    duration: "13:03",
  },
  articles: [
    {
      id: "news-meta-muse-glimmer",
      title:
        "Meta’s new Glimmer AI model offers a hint at Zuckerberg’s personal intelligence vision",
      summary:
        "Meta released the 30-billion-parameter Muse Glimmer as an Apache 2.0 open-weight model for local agentic tasks on consumer hardware. It can work with text, images, tools and files, while Meta’s more powerful Muse Spark remains closed, drawing a distinction between local ownership and cloud access.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/08/10/metas-new-glimmer-ai-model-offers-a-hint-at-zuckerbergs-personal-intelligence-vision/",
      publishedAt: "2026-08-10",
      category: "AI News of the Week",
    },
    {
      id: "news-openai-ultrafast-gpt-56-sol",
      title: "Previewing Ultrafast mode: GPT‑5.6 Sol at up to 14X the speed",
      summary:
        "OpenAI previewed an API tier for GPT-5.6 Sol that it says can run up to 14 times faster than Standard processing and produce up to 750 output tokens per second with Cerebras infrastructure. The service is limited to selected customers, and its performance and use-case claims come from OpenAI and early users.",
      source: "OpenAI Blog",
      url: "https://openai.com/index/previewing-ultrafast/",
      publishedAt: "2026-08-13",
      category: "AI News of the Week",
    },
    {
      id: "news-google-gemini-37-flash",
      title: "Google announces Gemini 3.7 Flash just three weeks after previous release",
      summary:
        "Google released Gemini 3.7 Flash three weeks after version 3.6, reporting stronger coding, agentic-task and document-processing results alongside lower introductory API pricing. The benchmark gains are Google-reported, while Ars Technica frames the unusually rapid release cadence as a competitive signal as well as a product update.",
      source: "Ars Technica",
      url: "https://arstechnica.com/ai/2026/08/google-announces-gemini-3-7-flash-just-three-weeks-after-previous-release/",
      publishedAt: "2026-08-13",
      category: "AI News of the Week",
    },
    {
      id: "tools-river-ai-funding",
      title: "General Catalyst leads $1.1B round into 2-month-old River AI",
      summary:
        "River AI, founded by xAI co-founder Igor Babuschkin, announced a $1.1 billion seed and Series A round led by General Catalyst and AMP PBC. The company offers reinforcement-learning and LoRA fine-tuning for open models, but its claimed differentiation and cost savings remain to be proven in production.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/08/11/general-catalyst-leads-1-1b-round-into-2-month-old-river-ai/",
      publishedAt: "2026-08-11",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-mistral-european-compute",
      title:
        "Mistral AI wants to build 1 gigawatt of European compute by 2030 — and lock in customers now",
      summary:
        "Mistral announced regional inference endpoints, a Priority Tier and enterprise commitments intended to support 200 megawatts of European infrastructure by 2027 and one gigawatt by 2030. The capacity targets are company plans, and the article notes that external tool calls can still affect a customer’s data-sovereignty posture.",
      source: "VentureBeat",
      url: "https://venturebeat.com/infrastructure/mistral-ai-wants-to-build-1-gigawatt-of-european-compute-by-2030-and-lock-in-customers-now",
      publishedAt: "2026-08-11",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-next-generation-llms",
      title: "These startups are chasing the next big thing in LLMs",
      summary:
        "MIT Technology Review examines startups pursuing sparse attention, retention mechanisms, liquid neural networks, diffusion text generation and state-space approaches to address transformer costs and context limits. Several performance claims originate with the companies and some approaches remain contested, so the article is a technology landscape rather than an independent benchmark.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/08/10/1141511/these-startups-are-chasing-the-next-big-thing-in-llms/",
      publishedAt: "2026-08-10",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "ethics-anthropic-text-watermarks",
      title: "Anthropic says it will watermark text generated by its AI models",
      summary:
        "Anthropic said models released after August 2 will watermark generated text and files, with C2PA used for files, in connection with European transparency obligations. The company had not clarified how much editing would be needed to remove a text watermark, leaving its practical robustness uncertain.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/08/11/anthropic-says-it-will-watermark-text-generated-by-its-ai-models/",
      publishedAt: "2026-08-11",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-twitch-amazon-training-optout",
      title: "Twitch content has trained Amazon AI for years, but users can opt out now",
      summary:
        "Twitch introduced an opt-out for the use of streams, clips, chats and channel content in future Amazon generative-AI training. Ars Technica reports that users are opted in by default and that the historical duration and scope of Amazon’s training use have not been fully clarified.",
      source: "Ars Technica",
      url: "https://arstechnica.com/ai/2026/08/twitch-content-has-trained-amazon-ai-for-years-but-users-can-opt-out-now/",
      publishedAt: "2026-08-12",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-agent-containment-gap",
      title:
        "Four of five enterprises that secured AI agent identities still can't contain one that goes rogue",
      summary:
        "VentureBeat Pulse Research reports that 65% of enterprises enforce agent permissions at runtime, while 18% can isolate a high-risk agent if that enforcement fails. The findings draw on a publisher-run multi-wave survey with different question bases, so cross-period comparisons are directional rather than definitive.",
      source: "VentureBeat",
      url: "https://venturebeat.com/security/four-of-five-enterprises-that-secured-ai-agent-identities-still-cant-contain-one-that-goes-rogue",
      publishedAt: "2026-08-12",
      category: "Regulation and Ethics",
    },
    {
      id: "voices-tim-oreilly-open-stack",
      title: "Tech Visionary Says the Big AI Labs Don’t Get What People Want",
      summary:
        "In a WIRED interview, Tim O’Reilly argues that users need an open AI stack in which models, applications and context can be separated and controlled, not merely open model weights. The piece is a perspective interview, not an independent market study, but it sharpens the question of vendor lock-in.",
      source: "WIRED",
      url: "https://www.wired.com/story/tech-visionary-says-the-big-ai-labs-dont-get-what-people-want/",
      publishedAt: "2026-08-14",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-academic-ai-research",
      title: "AI professors are negotiating the new realities of academic research",
      summary:
        "MIT Technology Review reports that academic AI researchers face GPU costs, limited access to proprietary model internals and growing competition from private frontier labs. The reported analysis includes the author’s disclosure of a 2024 Schmidt Sciences-funded award and should not be read as a representative survey.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/08/10/1141597/ai-professors-are-negotiating-the-new-realities-of-academic-research/",
      publishedAt: "2026-08-10",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-american-open-models",
      title: "American AI model makers smell an opportunity",
      summary:
        "Reuters describes a growing U.S. market opportunity for open-weight models as buyers seek customisable, lower-cost alternatives to leading closed systems and Chinese model providers. The assessment combines executive viewpoints, limited Ramp spending data and reporting, so it does not establish a market forecast.",
      source: "Reuters",
      url: "https://www.reuters.com/technology/artificial-intelligence/american-ai-model-makers-smell-an-opportunity-2026-08-12/",
      publishedAt: "2026-08-12",
      category: "Voices and Perspectives",
    },
    {
      id: "business-enterprise-assistance-execution",
      title: "From assistance to execution: How enterprises put AI to work",
      summary:
        "OpenAI says its top-10% ‘frontier firms’ generate 8.3 times as many output tokens per active user as typical firms, while Codex represented 64% of combined Codex and ChatGPT enterprise output tokens in June. The evidence is substantially based on OpenAI customer data, and tokens are a proxy for usage rather than productivity or business impact.",
      source: "OpenAI Blog",
      url: "https://openai.com/index/how-enterprises-put-ai-to-work/",
      publishedAt: "2026-08-12",
      category: "Implications for Business & Society",
    },
    {
      id: "business-chatgpt-gemini-billion-users",
      title: "ChatGPT and Gemini both just passed 1 billion users",
      summary:
        "Google says Gemini has reached one billion monthly users, while OpenAI says more than one billion people use ChatGPT. The figures are not directly comparable because the companies disclose different metrics and timings, and OpenAI did not state its monthly-user total.",
      source: "The Verge",
      url: "https://www.theverge.com/ai-artificial-intelligence/978113/chatgpt-gemini-1-billion-users",
      publishedAt: "2026-08-11",
      category: "Implications for Business & Society",
    },
    {
      id: "business-us-ai-power-demand",
      title: "US power use to beat record highs in 2026 and 2027 as AI use surges, EIA says",
      summary:
        "The U.S. Energy Information Administration forecasts electricity demand of 4,268 billion kilowatt-hours in 2026 and 4,391 billion in 2027, up from 4,195 billion in 2025, with AI-hungry data centres among the drivers. These are forecasts rather than realised figures, and the EIA does not separately quantify AI’s share of the increase.",
      source: "Reuters",
      url: "https://www.reuters.com/legal/litigation/us-power-use-beat-record-highs-2026-2027-ai-use-surges-eia-says-2026-08-11/",
      publishedAt: "2026-08-11",
      category: "Implications for Business & Society",
    },
  ],
};
