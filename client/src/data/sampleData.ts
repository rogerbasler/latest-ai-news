import { WeeklyUpdate } from "../types/news";

export const sampleData: WeeklyUpdate = {
  weekEnding: "2026-07-19",
  podcast: {
    id: "ep-028",
    title: "AI News Weekly - July 19, 2026",
    description:
      "This week: Moonshot AI's open-source Kimi K3 performs at frontier level; OpenAI introduces GPT-Red to combat prompt injections; the EU mandates Google to open Android AI features; Hugging Face CEO Clem Delangue argues open models are taking over production; and AI-driven memory demand jolts India's smartphone market. Presented by Roger Basler de Roca.",
    audioUrl: "/latest-ai-news/podcast/latest-episode.mp3",
    publishedAt: "2026-07-19",
    duration: "10:14",
  },
  articles: [
    {
      id: "news-kimi-k3",
      title: "Moonshot AI Releases Kimi K3 Open-Source Model",
      summary:
        "Moonshot AI released Kimi K3, an open-source model that the company says is still behind the strongest proprietary models but performed at frontier level in its own evaluation suite. TechCrunch reports that independent analyses also suggested the model is competitive with leading systems, sparking a debate about Chinese open-weight models.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/07/18/kimi-threat-or-menace/",
      publishedAt: "2026-07-18",
      category: "AI News of the Week",
    },
    {
      id: "news-apple-china",
      title: "Apple Intelligence Registered for Use in China",
      summary:
        "China's cyberspace regulator registered Apple Intelligence for use on iPhones in China, clearing a regulatory prerequisite for its rollout. Reuters reports that the service will incorporate Baidu and Alibaba capabilities, while the regulator gave no launch date.",
      source: "Reuters",
      url: "https://www.reuters.com/technology/apple-intelligence-ai-service-registered-with-chinas-cyberspace-regulator-2026-07-15/",
      publishedAt: "2026-07-15",
      category: "AI News of the Week",
    },
    {
      id: "news-new-york-rules",
      title: "New York Uses AI to Audit Outdated State Regulations",
      summary:
        "New York Governor Kathy Hochul said her team used AI to examine the state's rules, regulations, and policies for outdated laws. The Verge reported that the governor described a process that would have taken five years manually as completed in months, with the use case aimed at identifying rules for potential elimination.",
      source: "The Verge",
      url: "https://www.theverge.com/ai-artificial-intelligence/966647/new-york-governor-kathy-hochul-ai-policies",
      publishedAt: "2026-07-16",
      category: "AI News of the Week",
    },
    {
      id: "tools-databricks-valuation",
      title: "Databricks Valued at $188 Billion in New Funding Round",
      summary:
        "Databricks announced a funding round led by Coatue that values the company at $188 billion. The company did not disclose the amount raised and said the round had not yet closed; TechCrunch describes its AI-product expansion and use of open-weight coding models as part of the valuation narrative.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/07/17/databricks-hits-188b-valuation-extending-its-run-as-ais-favorite-second-act/",
      publishedAt: "2026-07-17",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-gpt-red",
      title: "OpenAI Unveils GPT-Red for Automated Red-Teaming",
      summary:
        "OpenAI introduced GPT-Red, an internal automated red-teaming model trained through self-play to find prompt-injection failures. OpenAI says it used the system to adversarially train GPT-5.6 Sol and measured six times fewer failures on its hardest direct prompt-injection benchmark than its best production model four months earlier.",
      source: "OpenAI Blog",
      url: "https://openai.com/index/unlocking-self-improvement-gpt-red/",
      publishedAt: "2026-07-15",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-context-bombing",
      title: "Defenders Use 'Context Bombing' Against AI Attacks",
      summary:
        "Tracebit researchers described “context bombing,” which plants refusal-triggering prompt injections next to decoy secrets so an attacking AI agent stops before completing harmful actions. Ars Technica reports that, in 152 simulated AWS attack runs across five models, full-admin compromise fell from 57% to 5% when a context bomb was planted.",
      source: "Ars Technica",
      url: "https://arstechnica.com/security/2026/07/now-defenders-are-embracing-the-prompt-injection-too/",
      publishedAt: "2026-07-13",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "ethics-google-dma",
      title: "EU Orders Google to Open Android AI Features to Rivals",
      summary:
        "The European Commission set requirements for Google to open 11 Android features to qualified AI rivals, including access enabling alternative assistants to use functions similar to “hey Google.” Reuters reports that the Android changes are expected from July 2027, while certain search-data sharing is subject to anonymisation and security checks.",
      source: "Reuters",
      url: "https://www.reuters.com/world/google-required-open-up-ai-search-engine-rivals-under-eu-mandated-changes-2026-07-16/",
      publishedAt: "2026-07-16",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-anthropic-states",
      title: "Anthropic Backs Tougher US State AI Regulations",
      summary:
        "Anthropic backed tougher US state measures for frontier AI, including third-party safety evaluation and mechanisms to block unsafe deployments. WIRED reports that critics frame this agenda as regulatory capture, while Anthropic says its supported laws apply to large developers rather than typical startups.",
      source: "WIRED",
      url: "https://www.wired.com/story/why-anthropic-is-pushing-states-to-regulate-ai-faster/",
      publishedAt: "2026-07-16",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-google-apple",
      title: "EU AI Mandates Highlight Diverging Big Tech Approaches",
      summary:
        "The Verge reported that the EU instructed Google to give AI rivals equivalent Android system and data access to that used by Gemini, with implementation expected by July 2027. The article contrasts this with Apple’s reported delay of Siri AI in Europe and its position that required interoperability creates security risks.",
      source: "The Verge",
      url: "https://www.theverge.com/policy/966588/eu-dma-ai-android-siri-ai",
      publishedAt: "2026-07-16",
      category: "Regulation and Ethics",
    },
    {
      id: "voices-open-models",
      title: "Hugging Face CEO Highlights Shift to Open Models",
      summary:
        "TechCrunch reports that Chinese open-weight models represented 41% of Hugging Face downloads in spring and that open models handled nearly a third of AI requests on Vercel in June. Hugging Face CEO Clem Delangue argues that enterprise control, cost, and transparency could make open models the main production layer while frontier systems serve specialised work.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/07/14/the-real-ai-race-may-no-longer-be-at-the-frontier-open-models-hugging-face/",
      publishedAt: "2026-07-14",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-anthropic-j-space",
      title: "Anthropic Discovers 'J-Space' in Language Models",
      summary:
        "MIT Technology Review examined Anthropic's claim that it found a “J-space” of internal model representations that influence answers without appearing in output. The article stresses that this may be a useful interpretability step, but cautions against treating language models as brain-like or assuming the technique is already a practical safety solution.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/07/13/1140343/what-anthropics-latest-ai-discovery-does-and-doesnt-show/",
      publishedAt: "2026-07-13",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-linus-linux",
      title: "Linus Torvalds Defends AI Coding Tools in Linux",
      summary:
        "Linus Torvalds said the Linux project is not anti-AI and that he will support contributors using AI tools on technical-merit grounds. Ars Technica notes the debate arose around an agentic code-review system whose maintainers estimate false-positive bug reports in the roughly 20% range.",
      source: "Ars Technica",
      url: "https://arstechnica.com/ai/2026/07/linus-torvalds-to-critics-of-ai-coding-in-linux-fork-it-or-just-walk-away/",
      publishedAt: "2026-07-16",
      category: "Voices and Perspectives",
    },
    {
      id: "impact-memory-india",
      title: "AI Memory Demand Drives Up Indian Smartphone Prices",
      summary:
        "TechCrunch reports that AI-data-centre demand is shifting memory-chip capacity toward high-bandwidth products, contributing to cost pressure for consumer devices. Counterpoint Research said India’s smartphone shipments fell 10% year on year in the April–June quarter as higher memory costs raised handset prices.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/07/17/ai-driven-memory-crunch-jolts-indias-smartphone-market/",
      publishedAt: "2026-07-17",
      category: "Implications for Business & Society",
    },
    {
      id: "impact-compute-gap",
      title: "Survey Reveals Enterprise AI Compute Gap",
      summary:
        "In a VentureBeat Pulse Research survey of 107 organisations with more than 100 employees, 83% reported GPU utilisation of 50% or less and 44% said they rigorously track AI-compute costs. The report found 64% planned to switch or add infrastructure providers within 12 months, with integration and total cost of ownership more important than token price.",
      source: "VentureBeat",
      url: "https://venturebeat.com/ai/the-ai-compute-gap-enterprises-are-buying-infrastructure-faster-than-they-can-measure-what-it-costs",
      publishedAt: "2026-07-16",
      category: "Implications for Business & Society",
    },
    {
      id: "impact-netflix",
      title: "Netflix Reveals Generative AI Use in 300 Titles",
      summary:
        "Netflix said roughly 300 titles on its platform used generative AI, mostly in post-production, according to its second-quarter earnings report. The company said 17 minutes of AI-enhanced footage in “The American Experiment” were produced twice as fast and at half the previous cost.",
      source: "The Verge",
      url: "https://www.theverge.com/streaming/966633/netflix-ai-titles-q2-2026-earnings",
      publishedAt: "2026-07-16",
      category: "Implications for Business & Society",
    },
  ],
};
