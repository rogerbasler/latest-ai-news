import { WeeklyUpdate } from "../types/news";

export const sampleData: WeeklyUpdate = {
  weekEnding: "2026-10-04",
  podcast: {
    id: "ep-034",
    title: "AI News Weekly - October 4, 2026",
    description:
      "This week: always-on agents, selective evaluation, scientific claims, guardrails, and the infrastructure bill behind AI. Presented by Roger Basler de Roca.",
    audioUrl: "/latest-ai-news/podcast/latest-episode.mp3",
    publishedAt: "2026-10-04",
    duration: "12:31",
  },
  articles: [
    {
      id: "news-openai-devday-2026",
      title: "DevDay 2026 Recap",
      summary:
        "OpenAI announced more than 20 updates across ChatGPT, Codex, its models, and developer tooling, including always-on agents called Dots and shared workspaces for people and AI. OpenAI says Dots are available to Pro and Business Premium users in eligible markets, with some enterprise access controlled by administrators and still in beta.",
      source: "OpenAI Blog",
      url: "https://openai.com/index/devday-2026-recap/",
      publishedAt: "2026-09-29",
      category: "AI News of the Week",
    },
    {
      id: "news-sift-coding-agents",
      title: "New MIT and Sakana AI framework uses an LLM judge to cut evaluation costs for self-improving coding agents",
      summary:
        "VentureBeat reports that the SIFT research framework uses an LLM judge to rank candidate coding agents before committing to costlier benchmark evaluations, while running search stages asynchronously. In reported tests on coding benchmarks, the approach improved some results with less compute, but the experiments were limited to coding agents and still required downstream benchmarking.",
      source: "VentureBeat",
      url: "https://venturebeat.com/orchestration/new-mit-and-sakana-ai-framework-uses-an-llm-judge-to-cut-evaluation-costs-for-self-improving-coding-agents",
      publishedAt: "2026-10-02",
      category: "AI News of the Week",
    },
    {
      id: "news-ai-scientific-discovery",
      title: "When can we say AI made a scientific discovery?",
      summary:
        "MIT Technology Review examines claims that AI systems have made scientific discoveries, arguing that finding promising patterns is not the same as establishing a new biological mechanism. The article notes that laboratory validation and human scientific judgment remain essential, and that overstated claims can undermine confidence in genuine progress.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/09/28/1145230/when-can-we-say-ai-made-a-scientific-discovery/",
      publishedAt: "2026-09-28",
      category: "AI News of the Week",
    },
    {
      id: "tools-doordash-text-order-agent",
      title: "DoorDash launches an AI agent you can text to order food",
      summary:
        "DoorDash introduced a text-to-order AI agent in Apple Messages that can interpret requests, suggest local food options, and manage group orders with differing dietary preferences. The service is opening through a US waitlist, so its reliability and availability at scale are not yet established.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/09/30/doordash-launches-an-ai-agent-you-can-text-to-order-food/",
      publishedAt: "2026-09-30",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-gemini-4-argon",
      title: "Google announces Gemini 4 Argon AI model, but you can't use it yet",
      summary:
        "Ars Technica reports that Google unveiled Gemini 4 Argon for coding, knowledge work, and cybersecurity tasks, with a one-million-token output limit. Google says it is being used internally and by select testers, while general availability has not been announced.",
      source: "Ars Technica",
      url: "https://arstechnica.com/google/2026/09/google-announces-gemini-4-argon-ai-model-but-you-cant-use-it-yet/",
      publishedAt: "2026-09-30",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-openai-dots",
      title: "OpenAI’s Dots Are Always-On AI Agents—and Its Answer to Meta",
      summary:
        "WIRED reports that OpenAI launched Dots, agents designed to carry out multi-step work across applications and to adapt to user preferences over time. Initial access is limited to paid subscribers, while the security and governance implications of persistent, cross-app agents remain unresolved.",
      source: "WIRED",
      url: "https://www.wired.com/story/openai-dots-always-on-ai-agents-that-proactively-help/",
      publishedAt: "2026-09-29",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "ethics-un-developing-nations-ai",
      title: "At UN, developing nations call for bigger say in shaping AI future",
      summary:
        "Reuters reports that leaders from developing countries called at the United Nations for greater influence over global AI rules, warning that exclusion could deepen economic inequality. The discussion reflects diplomatic positions and has not yet produced a binding international agreement.",
      source: "Reuters",
      url: "https://www.reuters.com/sustainability/cop/un-developing-nations-call-bigger-say-shaping-ai-future-2026-09-29/",
      publishedAt: "2026-09-29",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-google-publisher-ai-search-pilot",
      title: "Google reportedly tests paying publishers for AI search results",
      summary:
        "The Verge reports that Google is testing a programme with about 100 publishers to compensate them for content used in AI search features such as AI Overviews and Gemini. The reported scheme is a limited pilot and should not be read as a settled commercial or regulatory model for the wider web.",
      source: "The Verge",
      url: "https://www.theverge.com/tech/1002665/google-paying-publishers-ai-search-features",
      publishedAt: "2026-09-30",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-nvidia-openshell",
      title: "Nvidia's OpenShell controls what AI agents can access, even when they ignore instructions",
      summary:
        "VentureBeat reports that Nvidia introduced OpenShell and Sentry as controls intended to enforce an AI agent's access boundaries through isolation and monitoring outside the agent's own instructions. The hardware-based Sentry component requires Nvidia BlueField-4 DPUs, which limits the proposed architecture's immediate portability.",
      source: "VentureBeat",
      url: "https://venturebeat.com/infrastructure/nvidias-openshell-controls-what-ai-agents-can-access-even-when-they-ignore-instructions",
      publishedAt: "2026-09-28",
      category: "Regulation and Ethics",
    },
    {
      id: "voices-thore-graepel-llm-reasoning",
      title: "Don’t be fooled—LLMs don’t reason",
      summary:
        "Former AlphaGo researcher Thore Graepel argues in MIT Technology Review that current large language models do not possess the deliberative machinery required for robust reasoning. It is an expert viewpoint, and he proposes systems with explicit epistemic state for higher-stakes use rather than presenting a settled consensus.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/10/02/1145639/dont-be-fooled-llms-dont-reason/",
      publishedAt: "2026-10-02",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-openai-safety-resignation",
      title: "OpenAI safety employee resigns, claiming the company's 'culture is broken'",
      summary:
        "TechCrunch reports that long-time OpenAI employee David Robinson resigned and criticised the company's safety culture, urging frontier AI firms to adopt safeguards comparable to those used around nuclear technology. Robinson said he had hired a public-relations firm for the resignation announcement while maintaining that his decision to speak out was independent.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/03/openai-safety-employee-resigns-claiming-the-companys-culture-is-broken/",
      publishedAt: "2026-10-03",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-trillium-open-research",
      title: "These AI Experts Want to Do High-Stakes Research Out in the Open",
      summary:
        "WIRED reports that former industry scientists launched the nonprofit Trillium Labs to conduct high-risk AI research more openly than leading private frontier labs. Its ability to compete will depend on access to substantial funding and compute, so the initiative is a proposal for an alternative research model rather than proof that it can yet deliver one.",
      source: "WIRED",
      url: "https://www.wired.com/story/trillium-labs-wants-to-do-high-risk-ai-research-in-the-open/",
      publishedAt: "2026-10-02",
      category: "Voices and Perspectives",
    },
    {
      id: "business-ai-infrastructure-return",
      title: "The world is spending trillions of dollars on AI. Will it pay off?",
      summary:
        "Reuters reports that investment projections for AI infrastructure and data centres are reaching trillions of dollars, while economists question whether broad productivity gains have yet matched the scale of capital being committed. The long-range forecasts depend on uncertain assumptions about future demand, adoption, and returns.",
      source: "Reuters",
      url: "https://www.reuters.com/business/retail-consumer/ais-race-transform-world-before-money-runs-out-2026-10-03/",
      publishedAt: "2026-10-03",
      category: "Implications for Business & Society",
    },
    {
      id: "business-ai-agent-workforce",
      title: "AI Agents Are About to Flood the Workforce. No One's Ready for It.",
      summary:
        "WIRED examines how AI agents may enter organisations as digital coworkers in functions such as marketing and engineering, promising persistent capacity but altering management and accountability. The article cites concerns that people may scrutinise agent-produced work less carefully, making workflow design and human review central operational issues.",
      source: "WIRED",
      url: "https://www.wired.com/story/ai-agents-are-about-to-flood-the-workforce-no-ones-ready-for-it/",
      publishedAt: "2026-09-28",
      category: "Implications for Business & Society",
    },
    {
      id: "business-amazon-data-centre-moratoria",
      title: "Amazon writes scary blog warning communities not to block data centers",
      summary:
        "The Verge reports that AWS chief executive Matt Garman warned that data-centre moratoria could harm US economic competitiveness and national security, while Amazon pledged one billion dollars for host communities. The statement is part of Amazon's response to local scrutiny over energy, environmental, and community impacts, not an independent assessment of those trade-offs.",
      source: "The Verge",
      url: "https://www.theverge.com/tech/1003929/amazon-ai-data-center-blog-warning",
      publishedAt: "2026-10-02",
      category: "Implications for Business & Society",
    },
  ],
};
