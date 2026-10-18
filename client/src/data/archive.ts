import type { ArchivedUpdate } from "../types/news";

// Previous editions, newest first. The weekly run moves the current edition from
// sampleData.ts to the top of this list before writing the new one.
export const archive: ArchivedUpdate[] = [
  {
    weekEnding: "2026-10-11",
    articles: [
      {
        id: "news-gpt-6-intelligent-ui",
        title: "GPT-6 and Intelligent UI for everyone",
        summary:
          "OpenAI began rolling out GPT-6 in ChatGPT on October 7 with Intelligent UI, which can answer with charts, forms and buttons; paid tiers get GPT-6 Sol, while Free and Go users get GPT-6 Luna from the following day. The update covers only the Chat experience, enterprise access depends on admin settings, and OpenAI says the model's design judgment still needs work.",
        source: "OpenAI Blog",
        url: "https://openai.com/index/gpt-6-for-everyone/",
        publishedAt: "2026-10-07",
        category: "AI News of the Week",
      },
      {
        id: "news-openai-revenue-shortfall",
        title: "OpenAI's revenue is reportedly $20 billion less than previously projected",
        summary:
          "Citing the Financial Times, TechCrunch reports that OpenAI told investors its annualized revenue is approaching $50 billion, well below the roughly $70 billion figure that had circulated. Part of the gap is accounting: Anthropic counts sales through cloud partners and OpenAI does not, while OpenAI's IPO has reportedly moved to early 2027.",
        source: "TechCrunch",
        url: "https://techcrunch.com/2026/10/08/openais-revenue-is-reportedly-20-billion-less-than-previously-projected/",
        publishedAt: "2026-10-08",
        category: "AI News of the Week",
      },
      {
        id: "news-google-persistent-gemini-agents",
        title: "Google Cloud unveils persistent Gemini Agents for long-running tasks, and they get their own Gmail, Calendar, and Drive storage",
        summary:
          "Google introduced a Gemini agent for enterprises that keeps memory and business context and can work on tasks for hours or days, either as a personal assistant or as a coworker shared by a team. It is in private preview with no date for wider release, and Google has not yet explained licensing, data flows to third-party models or retention terms.",
        source: "VentureBeat",
        url: "https://venturebeat.com/orchestration/google-cloud-unveils-persistent-gemini-agents-for-long-running-tasks-and-they-get-their-own-gmail-calendar-and-drive-storage",
        publishedAt: "2026-10-08",
        category: "AI News of the Week",
      },
      {
        id: "tools-claude-haiku-5-5",
        title: "Introducing Claude Haiku 5.5",
        summary:
          "Anthropic released Claude Haiku 5.5 for high-volume work such as summarization and classification, priced at $0.10 per million input and $0.50 per million output tokens and available on AWS, Google Cloud and Azure. Anthropic itself recommends its larger models for complex agentic coding, and a new tokenizer means slightly more tokens per task.",
        source: "Anthropic",
        url: "https://www.anthropic.com/claude-haiku-5-5",
        publishedAt: "2026-10-07",
        category: "AI Tools, Startups, and Innovations",
      },
      {
        id: "tools-mistral-large-4",
        title: "European AI flag bearer Mistral's new open weights model is 'Le Chonk'",
        summary:
          "Mistral previewed Large 4, a one-trillion-parameter mixture-of-experts model with about 49 billion active parameters, available through its API with open weights expected within the month. Independent testing by Artificial Analysis places it behind the flagship models of OpenAI and Anthropic, and The Register advises caution with Mistral's own benchmark claims.",
        source: "The Register",
        url: "https://www.theregister.com/ai-and-ml/2026/10/06/european-ai-flag-bearer-mistrals-new-open-weights-model-is-le-chonk/5301443",
        publishedAt: "2026-10-06",
        category: "AI Tools, Startups, and Innovations",
      },
      {
        id: "tools-openai-math-results",
        title: "Sharing AI progress in mathematics",
        summary:
          "OpenAI published a set of mathematical results produced by an unreleased internal model, many with Lean formalizations that let a computer check the proofs. The model is not public, the results did not go through peer review, and OpenAI later committed $5 million to a Simons Foundation initiative to help mathematicians examine AI-produced results.",
        source: "OpenAI Blog",
        url: "https://openai.com/index/sharing-ai-progress-in-mathematics/",
        publishedAt: "2026-10-06",
        category: "AI Tools, Startups, and Innovations",
      },
      {
        id: "ethics-openai-eu-text-provenance",
        title: "Our approach to EU text provenance rules",
        summary:
          "To meet the EU AI Act requirement that generated text be machine-identifiable, OpenAI is adding an invisible statistical watermark to eligible ChatGPT and Codex output in the EU, while API customers can opt in. OpenAI's own test shows the limits: replacing a quarter of the words with synonyms cut detection in 400-token passages from about 92% to 17%, and the detector is open only to approved researchers.",
        source: "OpenAI Blog",
        url: "https://openai.com/index/eu-text-provenance/",
        publishedAt: "2026-10-05",
        category: "Regulation and Ethics",
      },
      {
        id: "ethics-anthropic-usage-policy",
        title: "2026 Usage Policy update",
        summary:
          "Anthropic consolidated its rules against deceptive campaigns and fake accounts, explicitly banned work on weapon components and armed drones, and prohibited using Claude to decide who to investigate, arrest or charge. The election section now targets voter deception rather than all personalized campaign targeting, and the policy takes effect on November 12.",
        source: "Anthropic",
        url: "https://www.anthropic.com/news/2026-usage-policy-update",
        publishedAt: "2026-10-08",
        category: "Regulation and Ethics",
      },
      {
        id: "ethics-singapore-mas-ai-review",
        title: "Singapore's central bank wants all FinTech AI use cases subject to independent review",
        summary:
          "The Monetary Authority of Singapore published guidelines that expect financial institutions to have AI use cases reviewed before deployment by parties not involved in their development, to keep AI inventories and to remain accountable for third-party AI. The rules take effect on 7 October 2027, which gives institutions a year to extend their risk frameworks.",
        source: "The Register",
        url: "https://www.theregister.com/ai-and-ml/2026/10/08/singapores-central-bank-wants-all-fintech-ai-use-cases-subject-to-independent-review/5301798",
        publishedAt: "2026-10-08",
        category: "Regulation and Ethics",
      },
      {
        id: "voices-people-hate-ai",
        title: "People really hate AI, so why can't they get enough?",
        summary:
          "Will Douglas Heaven sets survey data on growing pessimism, including a Gallup poll in which 71% of US adults would oppose a local AI data center, against usage figures such as half of US adults now using a chatbot. His explanation is that the dislike targets the companies pushing the technology rather than the technology itself, a pattern familiar from social media.",
        source: "MIT Technology Review",
        url: "https://www.technologyreview.com/2026/10/05/1145682/people-really-hate-ai-so-why-cant-they-get-enough/",
        publishedAt: "2026-10-05",
        category: "Voices and Perspectives",
      },
      {
        id: "voices-nadella-emergency-brake",
        title: "Microsoft's Satya Nadella says AI models need an 'emergency brake'",
        summary:
          "In a post on X, Microsoft's CEO called for separating models from the software that orchestrates them, logging every meaningful model action as tamper-proof evidence and letting an authorized person pause a model mid-task. He argued that a model should be treated as potentially compromised from the start, after reports of AI companies losing control of their models.",
        source: "TechCrunch",
        url: "https://techcrunch.com/2026/10/10/microsofts-satya-nadella-says-ai-models-need-an-emergency-brake/",
        publishedAt: "2026-10-10",
        category: "Voices and Perspectives",
      },
      {
        id: "voices-math-standards",
        title: "OpenAI's math solutions aren't meeting the field's standards yet",
        summary:
          "Mathematicians, among them Terence Tao, argue that OpenAI's release falls short of the standards set by the advisory group it consulted: only 10 of 719 manuscripts include the model's reasoning and 42% of the proofs are formalized. A team from Cambridge and King's College also found discrepancies between a natural-language proof and its Lean code and concluded that such proofs need regular peer review.",
        source: "TechCrunch",
        url: "https://techcrunch.com/2026/10/08/openais-math-solutions-arent-meeting-the-fields-standards-yet/",
        publishedAt: "2026-10-08",
        category: "Voices and Perspectives",
      },
      {
        id: "business-agent-trust-survey",
        title: "The share of enterprises trusting AI agents to make production changes on their own has fallen from 75% to 56%, VB Intelligence finds",
        summary:
          "In VentureBeat's surveys, the share of agent-deploying organizations willing to let agents change production systems on automated evaluation alone fell from 75% in July to 56% in August, while those planning to keep human review rose from 20% to 42%. 61% of respondents who test before deployment reported an agent that passed internal tests and then failed in front of customers; the samples are small and self-selected.",
        source: "VentureBeat",
        url: "https://venturebeat.com/orchestration/the-share-of-enterprises-trusting-ai-agents-to-make-production-changes-on-their-own-has-fallen-from-75-to-56-vb-intelligence-finds",
        publishedAt: "2026-10-08",
        category: "Implications for Business & Society",
      },
      {
        id: "business-schneider-ptc",
        title: "Schneider Electric drops $22.6B on PTC as datacenter boom rains money on infra companies",
        summary:
          "Schneider Electric agreed to buy US industrial software company PTC for $22.6 billion in cash, its largest deal to date, to add design and lifecycle software to its power and automation business. The company names AI data centers as an early target, but the deal is not expected to close until late 2027 and may face regulatory hurdles.",
        source: "The Register",
        url: "https://www.theregister.com/systems/2026/10/05/schneider-electric-acquires-ptc-for-226-billion/5301254",
        publishedAt: "2026-10-05",
        category: "Implications for Business & Society",
      },
      {
        id: "business-datacenter-ndas",
        title: "Can the AI industry persuade data center opponents by getting rid of NDAs?",
        summary:
          "Following Microsoft, Amazon said it will stop using nondisclosure agreements when negotiating data centers with local governments, as moratoriums spread, including a pause on large projects in New York State. TechCrunch's editors see the move as a first step at most, since secrecy is only one of the reasons communities object.",
        source: "TechCrunch",
        url: "https://techcrunch.com/2026/10/11/can-the-ai-industry-persuade-data-center-opponents-by-getting-rid-of-ndas/",
        publishedAt: "2026-10-11",
        category: "Implications for Business & Society",
      },
    ],
  },
  {
    weekEnding: "2026-10-04",
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
  },
];
