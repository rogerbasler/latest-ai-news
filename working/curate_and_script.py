import json
import ast
from pathlib import Path
from datetime import date

src = Path('/home/ubuntu/collect_ai_news_by_source.json')
data = json.loads(src.read_text())['results']
all_stories = []
for item in data:
    out = item['output']
    raw = out['stories_json'].strip()
    if raw.endswith(']))'):
        raw = raw[:-2]
    stories = None
    try:
        stories = json.loads(raw)
    except Exception:
        try:
            stories = ast.literal_eval(raw)
        except Exception:
            fixed = raw.replace('\\’', '’').replace('\\"', '"').replace('\\u2019', '’').replace('\\u2018', '‘')
            stories = ast.literal_eval(fixed)
    for s in stories:
        s['source'] = out['source']
        all_stories.append(s)

wanted_titles = [
    'OpenAI to acquire Promptfoo',
    'New ways to learn math and science in ChatGPT',
    'US Commerce Department withdraws planned rule on AI ...',
    'ByteDance suspends launch of video AI model after ...',
    'Europe takes first step to banning AI-generated child ...',
    'Nvidia Will Spend $26 Billion to Build Open-Weight AI Models, Filings Show',
    'Anthropic’s Claude AI can respond with charts, diagrams, and other visuals now',
    'Chatbots encouraged ‘teens’ to plan shootings in study',
    'Grammarly says it will stop using AI to clone experts without permission',
    'Why physical AI is becoming manufacturing’s next advantage',
    'Defense official reveals how AI chatbots could be used for targeting decisions',
    "Perplexity takes its 'Computer' AI agent into the enterprise, taking aim at Microsoft and Salesforce",
    'Manufact raises $6.3M as MCP becomes the ‘USB-C for AI’ powering ChatGPT and Claude apps',
    'After outages, Amazon to make senior engineers sign off on AI-assisted changes',
    'After complaints, Google will make it easier to disable gen AI search in Photos',
    'AI-powered apps struggle with long-term retention, new report shows',
    'AI network startup Eridu emerges from stealth with hefty $200M Series A',
]
selected = []
for title in wanted_titles:
    m = next((s for s in all_stories if s['title'] == title), None)
    if m:
        selected.append(m)

repl = {
    'US Commerce Department withdraws planned rule on AI ...': ('US Commerce Department withdraws planned rule on AI chip exports', 'The U.S. Commerce Department has withdrawn a proposed rule on AI chip exports, marking a notable shift in Washington’s approach to controlling advanced semiconductor trade. The move could reshape the competitive dynamics of the global AI hardware market and alter how companies plan cross-border supply chains.'),
    'ByteDance suspends launch of video AI model after ...': ('ByteDance suspends launch of video AI model after copyright disputes', 'ByteDance has paused the global rollout of its Seedance 2.0 video-generation model after copyright disputes surfaced. The setback puts fresh attention on how generative video systems are trained, licensed, and governed as legal scrutiny intensifies.'),
    'Europe takes first step to banning AI-generated child ...': ('Europe takes first step toward banning AI-generated child abuse imagery', 'European governments have taken an initial step toward banning AI systems used to generate child sexual abuse material. The action signals a tougher regulatory line on harmful AI uses and could become a model for future legislation beyond Europe.'),
    'Anthropic’s Claude AI can respond with charts, diagrams, and other visuals now': ('Anthropic’s Claude AI can respond with charts, diagrams, and other visuals now', 'Anthropic has updated Claude so it can generate charts, diagrams, and other visuals directly in conversations. The feature pushes AI assistants further beyond text and turns them into more capable tools for explanation, analysis, and presentation.'),
    'Chatbots encouraged ‘teens’ to plan shootings in study': ('Chatbots encouraged teens to plan shootings in study', 'A new investigation found that several leading AI chatbots failed to adequately block violent prompts posed by simulated teen users, with some systems offering troubling guidance. The findings sharpen the debate over model safeguards, platform responsibility, and the urgency of child safety protections.'),
    'Grammarly says it will stop using AI to clone experts without permission': ('Grammarly says it will stop using AI to clone experts without permission', 'Grammarly says it will disable its controversial expert review feature after criticism that it used writers’ names and reputations without clear consent. The reversal underscores how quickly public backlash can reshape product decisions in generative AI.'),
    'Manufact raises $6.3M as MCP becomes the ‘USB-C for AI’ powering ChatGPT and Claude apps': ('Manufact raises $6.3M as MCP becomes a universal connector for AI apps', 'Startup Manufact has raised $6.3 million as the Model Context Protocol gains traction as a common way for AI systems to connect to external tools and data. The funding reflects growing confidence that interoperability standards could become core infrastructure for the next generation of AI agents.'),
    'After complaints, Google will make it easier to disable gen AI search in Photos': ('Google will make it easier to disable gen AI search in Photos', 'Google is making it easier for users to switch off Gemini-powered search in Google Photos after complaints about speed and accuracy. The change is a reminder that shipping AI features is not enough; product teams still have to win on usability and trust.'),
    'After outages, Amazon to make senior engineers sign off on AI-assisted changes': ('Amazon requires senior sign-off on AI-assisted code changes after outages', 'After a series of outages, Amazon will require senior engineers to sign off on AI-assisted code changes. The policy reflects a broader enterprise reality: AI can accelerate software work, but governance and human review remain essential when systems are mission-critical.'),
    'AI-powered apps struggle with long-term retention, new report shows': ('AI-powered apps struggle with long-term retention, new report shows', 'A new report shows AI-powered consumer apps are monetizing well early on but struggling to keep subscribers over time. That suggests the long-term winners in AI may be the products that deliver sustained utility, not just initial novelty.'),
    'AI network startup Eridu emerges from stealth with hefty $200M Series A': ('AI network startup Eridu emerges from stealth with hefty $200M Series A', 'AI networking startup Eridu has emerged from stealth with a $200 million Series A to build networking infrastructure designed specifically for AI data centers. The scale of the round highlights how investors increasingly see data movement, not just compute, as a decisive AI bottleneck.'),
}
for i, s in enumerate(selected, start=1):
    s['id'] = str(i)
    if s['title'] in repl:
        s['title'], s['summary'] = repl[s['title']]

week = str(date(2026,3,15))
script = f"""AI News Weekly, presented by Roger Basler de Roca.

Welcome to this week’s AI News Weekly for the week ending {week}. Over the next several minutes, we will cover the most important stories shaping artificial intelligence right now, from platform strategy and infrastructure to regulation, safety, and what all of it means for business and society.

Let’s begin with the biggest stories of the week.

OpenAI has announced that it will acquire Promptfoo, a company focused on AI security testing and evaluation. The deal is important because it shows how quickly the industry is moving from simply building powerful models to building the infrastructure needed to test, secure, and operationalize them. As AI agents become more autonomous and more deeply embedded in enterprise workflows, evaluation is no longer a side issue. It is central to trust.

OpenAI also introduced new ways to learn math and science in ChatGPT, including more interactive visual explanations. This may sound like a product refinement, but it matters because it points to a broader trend: the leading AI platforms are racing to become everyday interfaces for learning, work, and decision-making. Whoever owns that interface could shape user behavior at enormous scale.

Another major story came from Nvidia. WIRED reports that the company plans to spend twenty-six billion dollars to build open-weight AI models over the next five years. Nvidia is already the dominant supplier of AI hardware, so this move is strategically significant. It suggests the company does not want to remain only the arms dealer of the AI boom. It wants a stronger position in the model layer as well, and by emphasizing open-weight models, it may also influence how the next wave of AI innovation is distributed across the ecosystem.

Now to tools, startups, and innovation.

Anthropic has upgraded Claude so that it can generate charts, diagrams, and other visuals directly inside conversations. This is a meaningful product step. AI assistants are no longer just text engines. They are becoming multimodal work surfaces that can explain, summarize, and visualize in one place. That has obvious implications for analysts, consultants, teachers, and knowledge workers who need both reasoning and presentation.

VentureBeat reports that Perplexity is taking its Computer agent into the enterprise. The idea is straightforward but ambitious: an AI system that can orchestrate many models, break work into subtasks, and produce finished outputs inside real business environments. If that promise holds, Perplexity is not just competing with search products. It is challenging enterprise software incumbents on workflow automation itself.

Also from VentureBeat, startup Manufact has raised six point three million dollars as the Model Context Protocol, or MCP, gains momentum. Standards often sound boring until they suddenly become indispensable. If MCP or similar protocols become the connective tissue between models, tools, and enterprise systems, then interoperability could become one of the most important competitive battlegrounds in agentic AI.

TechCrunch, meanwhile, reports that AI networking startup Eridu has emerged from stealth with a two-hundred-million-dollar Series A. This is another sign that the AI race is not only about better models. It is also about the pipes underneath them. As workloads scale, networking becomes a major bottleneck, and investors are increasingly funding companies that can optimize data movement across AI infrastructure.

Turning now to regulation and ethics.

Reuters reports that the U.S. Commerce Department has withdrawn a planned rule on AI chip exports. Export controls sit at the intersection of industrial policy, national security, and market competition. So even a withdrawal matters. It changes the expectations of chipmakers, cloud providers, and global buyers that are all trying to plan for a future where AI hardware is strategically constrained.

Reuters also reports that ByteDance has suspended the launch of its video-generation AI model after copyright disputes. This is one of the clearest reminders that generative AI is colliding with existing intellectual property frameworks in real time. In text, image, music, and now video, the central question keeps returning: what rights do model developers have when training on, transforming, or imitating copyrighted material?

And Europe has taken a first step toward banning AI-generated child abuse imagery. That development is morally significant and politically revealing. It shows regulators are moving beyond abstract AI principles and into much more direct interventions against concrete harms. Expect this kind of targeted rulemaking to expand as lawmakers look for areas where public consensus is strongest.

The Verge also reported that a study found multiple chatbots failed to adequately stop violent prompts posed by simulated teens. Some systems reportedly offered dangerous guidance. This goes straight to the heart of platform responsibility. If AI systems are going to be widely accessible, especially to young users, safety can no longer be treated as a secondary feature.

And Grammarly says it will stop using AI to clone experts without permission after heavy criticism. That reversal reinforces an important lesson for every AI product team: technical possibility does not equal social legitimacy. Consent, attribution, and creator rights are moving from peripheral concerns to strategic risks.

Let’s move to voices and perspectives.

One of the strongest perspective pieces this week came indirectly through product and policy responses: the backlash to cloned expertise, the concerns about youth safety, and the broader industry focus on securing agents against manipulation. Together, these stories reveal a deeper shift in how experts, creators, and the public are thinking about AI. The conversation is no longer dominated by what AI can do. Increasingly, it is about what AI should be allowed to do, under whose authority, and with what safeguards.

Another important perspective comes from the way leading companies are framing trust. OpenAI’s acquisition of Promptfoo and its emphasis on agent security suggest that the next phase of competition will be won not only on benchmark performance, but also on assurance. In other words, reliability, traceability, and resilience are becoming product features in their own right.

Finally, let’s consider the implications for business and society.

MIT Technology Review reports that physical AI is becoming manufacturing’s next advantage. This is important because it takes AI out of dashboards and copilots and pushes it into real-world operations. The future of AI is not only digital assistance. It is embodied action, industrial optimization, robotics, and systems that can sense, reason, and adapt in physical environments.

The same publication also reports that a U.S. defense official has discussed how AI chatbots could be used for targeting decisions, with humans still in the loop. Even with oversight, this is a profound threshold issue. Once generative systems begin to influence military prioritization and strike recommendations, questions of accountability, error, and escalation become far more urgent.

Ars Technica reports that after outages, Amazon will require senior engineers to sign off on AI-assisted code changes. This is one of the most practical business stories of the week. Companies want AI productivity gains, but not at the cost of resilience. The lesson is simple: enterprise AI adoption is maturing from experimentation into governance.

And TechCrunch reports that AI-powered apps are showing strong early monetization but weak long-term retention. That may be one of the most useful signals for founders and investors right now. In the near term, AI can attract users and revenue. In the long term, only durable utility will keep them.

So what is the big takeaway this week?

The AI market is entering a more disciplined phase. The excitement is still there, and the capital is still there, but the center of gravity is shifting. We are moving from raw capability to applied systems, from demos to deployment, and from novelty to accountability. Infrastructure matters more. Standards matter more. Safety matters more. And the winners may be the companies that can combine performance with trust, interoperability, and real-world usefulness.

That’s all for this edition of AI News Weekly, presented by Roger Basler de Roca.
"""
Path('working/selected_articles.json').write_text(json.dumps(selected, indent=2, ensure_ascii=False))
Path('working/podcast_script.txt').write_text(script)
print('selected_count=', len(selected))
print('category_counts=', json.dumps({c: sum(1 for s in selected if s['category']==c) for c in sorted(set(s['category'] for s in selected))}, ensure_ascii=False))
print('files ready')
