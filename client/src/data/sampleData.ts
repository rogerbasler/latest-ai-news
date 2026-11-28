import { WeeklyUpdate } from "../types/news";

export const sampleData: WeeklyUpdate = {
  weekEnding: "2026-11-29",
  headline: "AI reviews the work. Who reviews [the AI?]",
  podcast: {
    id: "ep-041",
    title: "AI News Weekly - November 29, 2026",
    description:
      "This week: Nvidia reinstates Jensen Huang, Anthropic's shares slip below the IPO price, Anthropic lets agents approve code changes, 42 state attorneys general fight the sale of Character.AI chats, and a survey shows AI agents reviewing their own code. Presented by Roger Basler de Roca.",
    audioUrl: "/latest-ai-news/podcast/latest-episode.mp3",
    publishedAt: "2026-11-29",
    duration: "14:07",
  },
  articles: [
    {
      id: "news-nvidia-huang-return",
      title: "NVIDIA brings back Jensen Huang as CEO just six days after ruling out his return",
      summary:
        "Nvidia's board unanimously reinstated Jensen Huang as CEO 11 days after announcing his resignation and six days after publicly ruling out his return, citing input from senior US government officials that he poses no national security risk. The independent investigation opened on November 8 is still running, and the announcement says nothing about his compensation or the financing exposures that remain open.",
      source: "VentureBeat",
      url: "https://venturebeat.com/technology/nvidia-brings-back-jensen-huang-as-ceo-just-six-days-after-ruling-out-his-return",
      publishedAt: "2026-11-23",
      category: "AI News of the Week",
    },
    {
      id: "news-anthropic-below-ipo",
      title: "Anthropic shares fall below IPO price, a worrying sign for AI startups",
      summary:
        "Less than a week after opening at $111.50, Anthropic's stock traded as low as $76 on Tuesday, below its $83 IPO price and nearly 12% under Monday's close. Observers read the stock as a barometer for how public investors value AI, and TechCrunch notes that continued weak trading could put pressure on private startup valuations.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/24/anthropic-shares-fall-below-ipo-price-a-worrying-sign-for-ai-startups/",
      publishedAt: "2026-11-24",
      category: "AI News of the Week",
    },
    {
      id: "news-amazon-decart",
      title: "Amazon snaps up Decart's AI optimization tech for $7.5B as it prepares to sell Trainium chips",
      summary:
        "According to Bloomberg, Amazon is paying $7.5 billion for the technology behind Decart's Optimization Stack, software that runs AI models efficiently on Nvidia, Amazon and Google hardware, plus its founding team and researchers. The deal is reported rather than confirmed, and it signals that Amazon wants to compete with Nvidia through software as it prepares to sell Trainium chips to outside customers.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/23/amazon-snaps-up-decarts-ai-optimization-tech-for-7-5b-as-it-prepares-to-sell-trainium-chips/",
      publishedAt: "2026-11-23",
      category: "AI News of the Week",
    },
    {
      id: "tools-claude-ship",
      title: "Anthropic launches Claude Ship, letting AI agents review, fix, and approve code changes",
      summary:
        "Claude Ship bundles Code Review, now generally available, with PR Steward and Claude Approvals in beta, where teams write their approval policy in natural language as a file in the repository. It is available on Team and Enterprise plans for GitHub, and Anthropic itself recommends running approvals in observe-only mode first and setting monthly spending limits.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/",
      publishedAt: "2026-11-23",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-skills-over-mcp",
      title: "MCP servers can now deliver AI agent skills, changing what companies approve when they connect one",
      summary:
        "Skills over MCP is in public beta in Claude and Claude Code, so a connected server can now supply agent skills as well as tools, which the specification itself names as a prompt-injection risk. Each skill needs explicit user approval before it can run code locally and must be approved again when its files change, but the specification is still beta and client support is still being built.",
      source: "VentureBeat",
      url: "https://venturebeat.com/technology/mcp-servers-can-now-deliver-ai-agent-skills-changing-what-companies-approve-when-they-connect-one",
      publishedAt: "2026-11-25",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "tools-openai-cisco-shirudo",
      title: "OpenAI and Cisco introduce Shirudo",
      summary:
        "Shirudo is an open-source Linux runtime that uses eBPF to apply signed, temporary protections to running systems, and in a controlled test a Codex-generated shield blocked an exploit against a running Elasticsearch service without a restart. A Trusted Platform Module keeps a verifiable record of which protections were loaded or removed, but so far the evidence is one controlled test, with a technical deep dive announced for December 15.",
      source: "OpenAI Blog",
      url: "https://openai.com/index/introducing-shirudo/",
      publishedAt: "2026-11-23",
      category: "AI Tools, Startups, and Innovations",
    },
    {
      id: "ethics-character-ai-chats-auction",
      title: "Character.AI's plan to auction off users' private chats challenged by state AGs",
      summary:
        "A coalition of 42 state attorneys general is intervening in Character.AI's Chapter 11 case, saying the dataset up for auction on December 1 holds chat histories from more than 21 million US accounts, over 2.1 million of them minors. The only disclosed bidder is a Delaware company set up on November 13, its plans for the chats are unclear, and Character.AI says the data would remain covered by its privacy policy.",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/25/state-ags-fight-character-ais-plan-to-auction-off-users-private-chats/",
      publishedAt: "2026-11-25",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-trump-datacenters-abroad",
      title: "Trump says he won't allow US companies to build datacenters abroad",
      summary:
        "After the APEC summit, President Trump said US companies would not be allowed to build datacenters outside the country and threatened a \"tremendous tax\" on overseas builds, adding that he had not yet told his own staff. It is a statement, not a rule: Congress is seen as unlikely to allow it, and Omdia notes that a datacenter is built from components sourced worldwide.",
      source: "The Register",
      url: "https://www.theregister.com/off-prem/2026/11/23/trump-says-he-wont-allow-us-companies-to-build-datacenters-abroad/5311640",
      publishedAt: "2026-11-23",
      category: "Regulation and Ethics",
    },
    {
      id: "ethics-india-ai-oversight",
      title: "India's government ponders cradle to grave AI oversight",
      summary:
        "Prime Minister Modi described an AI app that would collect data on children from age three to steer them toward study or careers, and Uttar Pradesh, with more than 240 million residents, has tendered an AI Stack linked to its Family ID that includes social media monitoring. These are proposals, and the Internet Freedom Foundation points out that no legislation explicitly authorises the systems and that the tender omits key oversight measures.",
      source: "The Register",
      url: "https://www.theregister.com/public-sector/2026/11/26/indias-government-ponders-cradle-to-grave-ai-oversight/5312275",
      publishedAt: "2026-11-26",
      category: "Regulation and Ethics",
    },
    {
      id: "voices-openai-perplexity-limits",
      title: "Perplexity and Intelligence",
      summary:
        "OpenAI's chief scientist Jakub Pachocki proposes perplexity, the pretraining loss, as a shared yardstick between labs, publishes OpenAI's internal measurements and suggests common limits that developers would commit not to cross. The post itself concedes that perplexity misses gains from chain-of-thought reasoning and is hard to compare across labs, so it is a proposal for a standard, not yet one.",
      source: "OpenAI Blog",
      url: "https://openai.com/index/perplexity-and-intelligence/",
      publishedAt: "2026-11-22",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-lecun-amodei",
      title: "AI godfather Yann LeCun torches Anthropic CEO over AI gatekeeping",
      summary:
        "Yann LeCun accused Dario Amodei of hyping AI dangers so that open models would be outlawed, while Amodei writes that Anthropic has never advocated a ban but considers open-weights models potentially riskier than closed ones. The Register adds that Revolut cut its vibe coding costs tenfold by moving about 2,000 employees from Claude to Z.AI's GLM 5.1 running on 56 Nvidia B200 GPUs, which shows the debate is also about price.",
      source: "The Register",
      url: "https://www.theregister.com/ai-and-ml/2026/11/24/ai-godfather-yann-lecun-torches-anthropic-ceo-over-ai-gatekeeping/5311986",
      publishedAt: "2026-11-24",
      category: "Voices and Perspectives",
    },
    {
      id: "voices-nagel-consciousness",
      title: "A legendary philosopher isn't buying Anthropic's consciousness argument",
      summary:
        "Anthropic listed the possibility of AI consciousness as a risk factor for investors, and philosopher Thomas Nagel calls the idea ridiculous because reproducing what a brain does is not reproducing what it experiences. A poll cited in the piece finds 33% of Americans expect AI to become conscious, and MIT Technology Review concludes that the question remains philosophical for now.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/11/23/1149569/a-legendary-philosopher-isnt-buying-anthropics-consciousness-argument/",
      publishedAt: "2026-11-23",
      category: "Voices and Perspectives",
    },
    {
      id: "business-ai-reviews-own-code",
      title: "Nearly half of surveyed engineers and leaders say the AI agents that write their code also review it",
      summary:
        "In the LeadDev survey, 47% say their organisations let AI coding agents review the code those agents wrote, only 26% are very confident they understand AI changes as well as human ones, and just 14% have consistent review standards for AI code. The report covers 377 respondents in the US and Europe and was sponsored by CodeRabbit, a vendor of AI code review.",
      source: "VentureBeat",
      url: "https://venturebeat.com/technology/nearly-half-of-surveyed-engineers-and-leaders-say-the-ai-agents-that-write-their-code-also-review-it",
      publishedAt: "2026-11-24",
      category: "Implications for Business & Society",
    },
    {
      id: "business-fable-opus-cost-test",
      title: "Claude Fable 5.2 cost three times as much as Opus 5.5 for nearly the same results in a VentureBeat bug-fixing test",
      summary:
        "On a real 8,400-line codebase, Fable 5.2 passed 10 of 15 bug-fix attempts for about $89, while Opus 5.5 passed 9 of 15 for about $29, which puts the cost per success at $8.90 against $3.22. VentureBeat stresses that a one-pass gap is too small to call and that the results describe this codebase, not coding ability in general.",
      source: "VentureBeat",
      url: "https://venturebeat.com/orchestration/claude-fable-5-2-cost-three-times-as-much-as-opus-5-5-for-nearly-the-same-results-in-a-venturebeat-bug-fixing-test",
      publishedAt: "2026-11-23",
      category: "Implications for Business & Society",
    },
    {
      id: "business-datacenter-gas-plants",
      title: "Data centers are getting their own natural gas power plants",
      summary:
        "By October 2026, developers had announced more than 100 behind-the-meter gas plants for US data centers with over 115 GW of planned capacity, of which only 4.9 GW are operating, according to Cleanview. BloombergNEF estimates they could emit 152 million tonnes of CO2e a year more by 2035 than drawing from the grid, although not all of them may be built.",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/11/24/1149622/data-centers-natural-gas/",
      publishedAt: "2026-11-24",
      category: "Implications for Business & Society",
    },
  ],
};
