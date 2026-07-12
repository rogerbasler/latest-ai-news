import { WeeklyUpdate } from "../types/news";

export const sampleData: WeeklyUpdate = {
  weekEnding: "2026-07-12",
  podcast: {
    id: "ep-027",
    title: "AI News Weekly - July 12, 2026",
    description:
      "This week: OpenAI releases GPT-5.6, ChatGPT Work, and GPT-Live; Apple sues OpenAI over alleged hardware trade-secret theft; Meta prepares its Iris AI chip; China considers frontier-model access controls; the ITU tackles agent trust; and enterprise data exposes GPU underutilisation and AI-linked restructuring. Presented by Roger Basler de Roca.",
    audioUrl: "/latest-ai-news/podcast/latest-episode.mp3",
    publishedAt: "2026-07-12",
    duration: "10:44",
  },
  articles: [
    {
      id: "1",
      title: "OpenAI Rolls Out GPT-5.6 and ChatGPT Work",
      summary:
        "OpenAI opened GPT-5.6 to the public after a government-reviewed preview and introduced ChatGPT Work, an agent that combines ChatGPT with Codex for documents, spreadsheets, presentations, web apps, and connected workplace tools. The release turns frontier-model competition into a contest over complete work systems rather than isolated chat interfaces.",
      source: "The Verge",
      url: "https://www.theverge.com/ai-artificial-intelligence/963464/openai-gpt-5-6-codex-chatgpt-work",
      publishedAt: "2026-07-09",
      category: "AI News of the Week",
    },
    {
      id: "2",
      title: "Apple Sues OpenAI Over Alleged Hardware Trade-Secret Theft",
      summary:
        "Apple alleges that former employees brought confidential files, prototypes, supplier information, and engineering materials to OpenAI and its hardware unit, IO Products. OpenAI denies any interest in competitors’ trade secrets, but the case shows how the AI talent war is colliding with intellectual-property controls as laboratories move into devices.",
      source: "The Verge",
      url: "https://www.theverge.com/tech/964350/apple-openai-lawsuit-trade-secrets",
      publishedAt: "2026-07-10",
      category: "AI News of the Week",
    },
    {
      id: "3",
      title: "OpenAI’s Head of Safety Departs During Research Reorganisation",
      summary:
        "WIRED reports that safety-systems leader Johannes Heidecke is leaving while OpenAI integrates safety work more tightly with frontier-model research under Mia Glaese. The timing matters because the company is releasing models faster and has acknowledged concerning misaligned behaviour in GPT-5.6 evaluations.",
      source: "WIRED",
      url: "https://www.wired.com/story/openai-head-of-safety-leaving/",
      publishedAt: "2026-07-10",
      category: "AI News of the Week",
    },
    {
      id: "4",
      title: "OpenAI Introduces GPT-Live for Full-Duplex Voice Interaction",
      summary:
        "OpenAI launched GPT-Live-1 and GPT-Live-1 mini, voice models that can listen and speak simultaneously while delegating search or reasoning tasks to a frontier model. The architecture aims to make voice interaction more natural, but also raises the operational importance of real-time safeguards, emotional-reliance monitoring, and transparent human control.",
      source: "OpenAI Blog",
      url: "https://openai.com/index/introducing-gpt-live/",
      publishedAt: "2026-07-08",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "5",
      title: "Prime Intellect Raises $130 Million for Enterprise-Built AI Agents",
      summary:
        "Prime Intellect raised a $130 million Series A to help organisations train and operate their own agentic systems instead of relying solely on frontier laboratories. The funding reflects growing demand for greater control over models, infrastructure, data, and costs as enterprise AI moves from experiments to strategic capability.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/07/08/prime-intellect-raises-130m-series-a-to-help-enterprises-build-their-own-ai-agents/",
      publishedAt: "2026-07-08",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "6",
      title: "Meta Prepares Its Iris AI Chip for September Production",
      summary:
        "Reuters reports that Meta plans to manufacture its in-house Iris accelerator from September as it targets 14 gigawatts of computing capacity next year. The chip, designed with Broadcom and manufactured by TSMC, is intended to lower costs and reduce dependence on Nvidia and AMD while supplementing external GPUs.",
      source: "Reuters",
      url: "https://www.reuters.com/world/asia-pacific/meta-put-ai-chip-into-production-september-it-looks-double-computing-capacity-2026-07-09/",
      publishedAt: "2026-07-09",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "7",
      title: "China Considers Controls on Overseas Access to Frontier Models",
      summary:
        "Chinese authorities have discussed restricting foreign access to advanced domestic AI models, including open-weight systems and unreleased technology, with companies including Alibaba, ByteDance, and Z.ai. The proposal would treat models as strategic national assets and could raise global AI costs by limiting access to capable, lower-priced Chinese alternatives.",
      source: "Reuters",
      url: "https://www.reuters.com/world/beijing-is-looking-curbing-overseas-access-chinas-top-ai-models-sources-say-2026-07-07/",
      publishedAt: "2026-07-07",
      category: "Regulation and Ethics",
    },
    {
      id: "8",
      title: "The ITU Launches a Trust Initiative for AI Agents",
      summary:
        "The UN’s International Telecommunication Union will convene technical, policy, and legal experts to develop common frameworks for identifiable, trustworthy agents subject to meaningful human control. The initiative focuses on high-stakes areas such as payments and critical infrastructure, where an autonomous system’s identity and authority must be explicit.",
      source: "Reuters",
      url: "https://www.reuters.com/legal/litigation/un-digital-tech-agency-launches-initiative-improve-trust-ai-agents-2026-07-09/",
      publishedAt: "2026-07-09",
      category: "Regulation and Ethics",
    },
    {
      id: "9",
      title: "Anthropic Removes a Hidden Claude Code Tracker",
      summary:
        "Anthropic removed code that covertly flagged Claude Code users through timezone, proxy, and possible links to Chinese AI laboratories after a security researcher exposed the mechanism. The company called it an anti-abuse experiment, but the episode illustrates how security measures can undermine trust when telemetry is hidden rather than disclosed and governed.",
      source: "Ars Technica",
      url: "https://arstechnica.com/tech-policy/2026/07/anthropic-outed-for-claude-tracker-that-secretly-monitored-chinese-users/",
      publishedAt: "2026-07-06",
      category: "Regulation and Ethics",
    },
    {
      id: "10",
      title: "Verity Harding Challenges the AI Arms-Race Narrative",
      summary:
        "Former DeepMind policy executive Verity Harding argues that describing AI as an arms race narrows policy choices and rewards centralisation, nationalism, and laboratory power. She proposes stronger cooperation among middle powers so countries can build sovereign capacity without pretending that any nation can own an entirely independent AI stack.",
      source: "WIRED",
      url: "https://www.wired.com/story/verity-harding-ai-arms-race-dangers-anthology/",
      publishedAt: "2026-07-08",
      category: "Voices and Perspectives",
    },
    {
      id: "11",
      title: "Hugging Face’s CEO Says Enterprises Are Moving From Rented AI to Open Models",
      summary:
        "Hugging Face CEO Clem Delangue says many companies begin with frontier APIs but shift toward open models as usage and costs scale, with roughly half of the Fortune 500 now using the platform. His argument reframes open source as an ownership and bargaining-power question, not merely an ideological preference.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/07/10/hugging-faces-ceo-on-why-companies-are-done-renting-their-ai/",
      publishedAt: "2026-07-10",
      category: "Voices and Perspectives",
    },
    {
      id: "12",
      title: "MIT Technology Review Tests the Politics of a Public OpenAI Stake",
      summary:
        "A proposed 5% US government stake in OpenAI would be worth about $42.6 billion at the company’s reported valuation, or roughly $320 per American household if distributed directly. MIT Technology Review concludes that the idea currently functions more as a political narrative about shared AI wealth than as a concrete redistribution mechanism.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/07/06/1140176/your-familys-300-stake-in-openai/",
      publishedAt: "2026-07-06",
      category: "Voices and Perspectives",
    },
    {
      id: "13",
      title: "VentureBeat Finds Widespread Enterprise GPU Underutilisation",
      summary:
        "A VentureBeat Research survey of 573 technical leaders found that 86% of enterprises running their own GPUs report utilisation of 50% or less, while only 44% rigorously track compute cost and return. The finding suggests that the immediate infrastructure problem is not always insufficient hardware, but weak workload design, measurement, and governance.",
      source: "VentureBeat",
      url: "https://venturebeat.com/orchestration/wall-street-is-debating-the-ai-buildout-enterprises-just-answered-86-say-their-gpus-run-at-half-capacity-or-less",
      publishedAt: "2026-07-10",
      category: "Implications for Business & Society",
    },
    {
      id: "14",
      title: "Four Architectural Foundations for Scaling Enterprise AI",
      summary:
        "MIT Technology Review Insights identifies data quality, context engineering, governance and observability, and human expertise as durable foundations for production AI. The article is sponsored content produced with Elastic, so its recommendations are useful as an operating framework but should not be mistaken for independent comparative research.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/07/07/1139413/the-foundational-elements-of-ai-architecture-that-it-leaders-need-to-scale/",
      publishedAt: "2026-07-07",
      category: "Implications for Business & Society",
    },
    {
      id: "15",
      title: "AI Investment Shifts Accompany a Growing List of Job Cuts",
      summary:
        "Reuters updated its tracker after Microsoft announced about 4,800 cuts, documenting AI-linked restructuring across technology, finance, telecoms, and other sectors. The pattern does not prove that AI directly caused every lost role, but it shows how executives increasingly use automation and infrastructure investment to justify resource reallocation.",
      source: "Reuters",
      url: "https://www.reuters.com/business/world-at-work/companies-cutting-jobs-investments-shift-toward-ai-2026-07-06/",
      publishedAt: "2026-07-06",
      category: "Implications for Business & Society",
    },
  ],
};
