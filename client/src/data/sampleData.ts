import { WeeklyUpdate } from "../types/news";

export const sampleData: WeeklyUpdate = {
  weekEnding: "2026-10-18",
  podcast: {
    id: "ep-036",
    title: "AI News Weekly - October 18, 2026",
    description:
      "This week: the frontier-model race tightens, agentic systems enter factories and labs, and accountability becomes the decisive operating question. Presented by Roger Basler de Roca.",
    audioUrl: "/latest-ai-news/podcast/latest-episode.mp3",
    publishedAt: "2026-10-18",
    duration: "12:18",
  },
  articles: [
    {
      id: "news-replit-openai-default",
      title: "Replit makes OpenAI its default over Anthropic, CEO says",
      summary:
        "Replit CEO Amjad Masad said the coding platform now makes OpenAI its preferred partner for Replit Agent, citing performance, economics, and the partnership. Customers can still choose Anthropic models, and people familiar with the relationship disputed that Replit had ended its Anthropic partnership.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/",
      publishedAt: "2026-10-16",
      category: "AI News of the Week",
    },
    {
      id: "news-openai-eu-agentic-adoption",
      title: "The EU’s next chapter in AI is agentic",
      summary:
        "OpenAI says Codex and ChatGPT Work account for more than half of output tokens among Enterprise and Business customers in its EU sample, while weekly active users at EU small and medium businesses grew more than eightfold since May. The findings draw on OpenAI’s own customer usage data and are not a survey of all European companies.",
      source: "OpenAI Blog",
      url: "https://openai.com/index/the-eus-next-chapter-in-ai-is-agentic/",
      publishedAt: "2026-10-14",
      category: "AI News of the Week",
    },
    {
      id: "news-ai-race-back-on",
      title: "The AI race is back on",
      summary:
        "The Verge reports that Google and Meta have announced new frontier models, Gemini 4 Argon and Muse Wonder Full, challenging the recent dominance of OpenAI and Anthropic. Performance and pricing assertions are largely the companies’ own claims, while their distribution and infrastructure advantages are already tangible.",
      source: "The Verge",
      url: "https://www.theverge.com/ai-artificial-intelligence/1011311/the-ai-race-is-back-on",
      publishedAt: "2026-10-14",
      category: "AI News of the Week",
    },
    {
      id: "tools-industrial-next-robotics",
      title: "Industrial Next wants factory robots to switch tasks in minutes, not weeks",
      summary:
        "Industrial Next says its AI-driven robotic stations use high-fidelity simulation and demonstration to reconfigure production tasks in minutes rather than weeks. The startup announced an evaluation partnership with BMW Group Technology Office, but its speed and performance claims remain company claims rather than independently validated results.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/13/industrial-next-wants-factory-robots-to-switch-tasks-in-minutes-not-weeks/",
      publishedAt: "2026-10-13",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-openai-rosalind-academic-plan",
      title: "Bringing GPT-Rosalind to academic research labs",
      summary:
        "OpenAI introduced the sponsored Rosalind Academic Plan, offering eligible US university labs up to 30 Business Standard seats at no cost for up to 12 months and trusted-access approval for GPT-Rosalind. OpenAI says research data is excluded from model training by default, while API access is not included and access remains subject to approval.",
      source: "OpenAI Blog",
      url: "https://openai.com/index/introducing-the-rosalind-academic-plan/",
      publishedAt: "2026-10-15",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-self-organizing-agent-teams",
      title: "A new framework teaches AI models to audit and repair each other’s reasoning, improving accuracy",
      summary:
        "Researchers at Stanford, Together AI, and Emory developed Self-Organizing Agent Teams, a framework in which fixed model groups learn collaboration and peer-audit strategies. VentureBeat reports benchmark gains on mathematics and physics tasks, while the framework struggled to select reliable answers from plausible errors on softer knowledge and logic tasks.",
      source: "VentureBeat",
      url: "https://venturebeat.com/orchestration/a-new-framework-teaches-ai-models-to-audit-and-repair-each-others-reasoning-improving-accuracy",
      publishedAt: "2026-10-16",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "ethics-international-ai-oversight-body",
      title: "Scientists call for international body to oversee advanced AI",
      summary:
        "Around 400 scientists, including Geoffrey Hinton and Yoshua Bengio, called for an international body to set containment standards and maintain a registry of significant incidents involving cyber-capable AI. The proposal is an open letter rather than enacted policy and argues that voluntary industry commitments are insufficient.",
      source: "Reuters",
      url: "https://www.reuters.com/legal/litigation/scientists-call-international-body-oversee-advanced-ai-2026-10-13/",
      publishedAt: "2026-10-13",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-british-lawmakers-regulate-ai",
      title: "OpenAI and Anthropic Tell British Lawmakers: Regulate Us",
      summary:
        "At a UK parliamentary hearing, OpenAI and Anthropic representatives said some frontier-AI safeguards should be binding, while Google DeepMind and Meta did not support a new statutory framework. Britain’s AI Security Institute can test models only when companies provide access and cannot prevent a model release.",
      source: "WIRED",
      url: "https://www.wired.com/story/openai-and-anthropic-tell-british-lawmakers-regulate-us/",
      publishedAt: "2026-10-13",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-ftc-openai-anthropic-probe",
      title: "FTC probes if OpenAI, Anthropic security incidents harmed Americans, report says",
      summary:
        "Ars Technica reports that the FTC sent civil investigative demands to OpenAI and Anthropic about potential consumer harms connected to recent AI security incidents. The report relies on an Axios source; the FTC did not provide the demands to Ars, and neither company commented to Ars.",
      source: "Ars Technica",
      url: "https://arstechnica.com/tech-policy/2026/10/ftc-probes-if-openai-anthropic-security-incidents-harmed-americans-report-says/",
      publishedAt: "2026-10-15",
      category: "Regulation and Ethics",
    },
    {
      id: "voices-jack-clark-ai-gdp-scenario",
      title: "AI rapidly improving, could vastly boost US GDP, Anthropic's Clark tells policymakers",
      summary:
        "Anthropic co-founder Jack Clark said an internal company model forecasts that AI could lift US economic output by almost 50% by 2030 under certain conditions. He described the outcome as outlandish and warned that rapid progress leaves a shrinking window to establish safeguards.",
      source: "Reuters",
      url: "https://www.reuters.com/world/china/anthropics-clark-says-ais-impact-accelerating-quickly-could-vastly-boost-us-gdp-2026-10-17/",
      publishedAt: "2026-10-17",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-ai-designed-viruses",
      title: "Roundtables: A Conversation With the Creator of AI-Designed Viruses",
      summary:
        "MIT Technology Review hosted a subscriber conversation with Stanford bioengineering PhD candidate Samuel King about using a generative model to propose genetic blueprints for microscopic viruses. The publication stresses that this is not AI-generated life, although it raises questions about how AI may change biological research.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/10/16/1146224/roundtables-a-conversation-with-the-creator-of-ai-designed-viruses/",
      publishedAt: "2026-10-16",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-lawless-agent-governance",
      title: "Your AI agents can execute every tool call correctly and still break every enterprise rule",
      summary:
        "Workday CTO Gabe Monroy argues that agents can execute tools correctly while still violating company rules when their decisions lack live policy, permission, and organisational context. The VentureBeat piece is a guest opinion by a platform executive, so its architectural prescription should be read as a perspective rather than neutral evidence.",
      source: "VentureBeat",
      url: "https://venturebeat.com/orchestration/your-ai-agents-can-execute-every-tool-call-correctly-and-still-break-every-enterprise-rule",
      publishedAt: "2026-10-12",
      category: "Voices and Perspectives",
    },
    {
      id: "business-character-ai-bankruptcy",
      title: "Character.AI files for bankruptcy",
      summary:
        "Character.AI filed for Chapter 11 bankruptcy protection and is selling assets, with Disney serving as lead bidder for a proposed deal that includes $20 million for certain assets. The Verge reports that the company expects to keep operating during the sale process but may wind down the platform if no suitable bid emerges.",
      source: "The Verge",
      url: "https://www.theverge.com/ai-artificial-intelligence/1009802/character-ai-files-for-bankruptcy-disney",
      publishedAt: "2026-10-12",
      category: "Implications for Business & Society",
    },
    {
      id: "business-dead-startup-training-data",
      title: "AI labs are buying data from dead startups to train their models",
      summary:
        "MIT Technology Review reports that AI labs and intermediaries are purchasing code and workplace archives from failed startups, while one broker says it has handled more than 150 such deals. The article notes substantial privacy and ownership questions and says no company has released comparative tests showing that real-world archives outperform alternatives for training.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/10/13/1145755/ai-labs-buying-data-from-dead-startups-to-train-models/",
      publishedAt: "2026-10-13",
      category: "Implications for Business & Society",
    },
    {
      id: "business-ai-hack-clean-up-costs",
      title: "AI Hacks Leave a Mess That AI Companies Aren’t Paying For",
      summary:
        "WIRED reports that AI-agent incidents have disrupted hobbyist forums, government websites, and software tools, leaving targets to absorb server strain and remediation costs. It says only one major known lawsuit seeking to hold model makers liable has been filed and that case came from an advocacy group rather than a direct victim, while investigations are reportedly ongoing.",
      source: "WIRED",
      url: "https://www.wired.com/story/ai-hacks-leave-a-mess-that-ai-companies-arent-cleaning-up/",
      publishedAt: "2026-10-15",
      category: "Implications for Business & Society",
    },
  ],
};
