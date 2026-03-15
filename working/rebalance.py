import json, ast
from pathlib import Path
from datetime import date
src = Path('/home/ubuntu/collect_ai_news_by_source.json')
data = json.loads(src.read_text())['results']
all_stories=[]
for item in data:
    out=item['output']
    raw=out['stories_json'].strip()
    if raw.endswith(']))'):
        raw=raw[:-2]
    try:
        stories=json.loads(raw)
    except Exception:
        try:
            stories=ast.literal_eval(raw)
        except Exception:
            stories=ast.literal_eval(raw.replace('\\’','’').replace('\\"','"').replace('\\u2019','’').replace('\\u2018','‘'))
    for s in stories:
        s['source']=out['source']
        all_stories.append(s)

titles=[
'OpenAI to acquire Promptfoo',
'New ways to learn math and science in ChatGPT',
'Nvidia Will Spend $26 Billion to Build Open-Weight AI Models, Filings Show',
'AI network startup Eridu emerges from stealth with hefty $200M Series A',
'Anthropic’s Claude AI can respond with charts, diagrams, and other visuals now',
"Perplexity takes its 'Computer' AI agent into the enterprise, taking aim at Microsoft and Salesforce",
'Manufact raises $6.3M as MCP becomes the ‘USB-C for AI’ powering ChatGPT and Claude apps',
'US Commerce Department withdraws planned rule on AI ...',
'ByteDance suspends launch of video AI model after ...',
'Europe takes first step to banning AI-generated child ...',
'Chatbots encouraged ‘teens’ to plan shootings in study',
'Grammarly says it will stop using AI to clone experts without permission',
'Designing AI agents to resist prompt injection',
'Why physical AI is becoming manufacturing’s next advantage',
'Defense official reveals how AI chatbots could be used for targeting decisions',
'After outages, Amazon to make senior engineers sign off on AI-assisted changes',
'AI-powered apps struggle with long-term retention, new report shows']
selected=[]
for t in titles:
    m=next((s for s in all_stories if s['title']==t),None)
    if m:
        selected.append(m.copy())
repl={
'US Commerce Department withdraws planned rule on AI ...':('US Commerce Department withdraws planned rule on AI chip exports','The U.S. Commerce Department has withdrawn a proposed rule on AI chip exports, marking a notable shift in Washington’s approach to controlling advanced semiconductor trade. The move could reshape the competitive dynamics of the global AI hardware market and alter how companies plan cross-border supply chains.'),
'ByteDance suspends launch of video AI model after ...':('ByteDance suspends launch of video AI model after copyright disputes','ByteDance has paused the global rollout of its Seedance 2.0 video-generation model after copyright disputes surfaced. The setback puts fresh attention on how generative video systems are trained, licensed, and governed as legal scrutiny intensifies.'),
'Europe takes first step to banning AI-generated child ...':('Europe takes first step toward banning AI-generated child abuse imagery','European governments have taken an initial step toward banning AI systems used to generate child sexual abuse material. The action signals a tougher regulatory line on harmful AI uses and could become a model for future legislation beyond Europe.'),
'Anthropic’s Claude AI can respond with charts, diagrams, and other visuals now':('Anthropic’s Claude AI can respond with charts, diagrams, and other visuals now','Anthropic has updated Claude so it can generate charts, diagrams, and other visuals directly in conversations. The feature pushes AI assistants further beyond text and turns them into more capable tools for explanation, analysis, and presentation.'),
'Chatbots encouraged ‘teens’ to plan shootings in study':('Chatbots encouraged teens to plan shootings in study','A new investigation found that several leading AI chatbots failed to adequately block violent prompts posed by simulated teen users, with some systems offering troubling guidance. The findings sharpen the debate over model safeguards, platform responsibility, and the urgency of child safety protections.'),
'Grammarly says it will stop using AI to clone experts without permission':('Grammarly says it will stop using AI to clone experts without permission','Grammarly says it will disable its controversial expert review feature after criticism that it used writers’ names and reputations without clear consent. The reversal underscores how quickly public backlash can reshape product decisions in generative AI.'),
'Manufact raises $6.3M as MCP becomes the ‘USB-C for AI’ powering ChatGPT and Claude apps':('Manufact raises $6.3M as MCP becomes a universal connector for AI apps','Startup Manufact has raised $6.3 million as the Model Context Protocol gains traction as a common way for AI systems to connect to external tools and data. The funding reflects growing confidence that interoperability standards could become core infrastructure for the next generation of AI agents.'),
'After outages, Amazon to make senior engineers sign off on AI-assisted changes':('Amazon requires senior sign-off on AI-assisted code changes after outages','After a series of outages, Amazon will require senior engineers to sign off on AI-assisted code changes. The policy reflects a broader enterprise reality: AI can accelerate software work, but governance and human review remain essential when systems are mission-critical.'),
'AI-powered apps struggle with long-term retention, new report shows':('AI-powered apps struggle with long-term retention, new report shows','A new report shows AI-powered consumer apps are monetizing well early on but struggling to keep subscribers over time. That suggests the long-term winners in AI may be the products that deliver sustained utility, not just initial novelty.'),
'AI network startup Eridu emerges from stealth with hefty $200M Series A':('AI network startup Eridu emerges from stealth with hefty $200M Series A','AI networking startup Eridu has emerged from stealth with a $200 million Series A to build networking infrastructure designed specifically for AI data centers. The scale of the round highlights how investors increasingly see data movement, not just compute, as a decisive AI bottleneck.'),
'Designing AI agents to resist prompt injection':('Designing AI agents to resist prompt injection','OpenAI has outlined how it is redesigning AI agents to better resist prompt injection attacks, treating them as a form of social engineering rather than a simple filtering problem. The article offers a valuable expert perspective on how safety design is evolving as AI agents take on more autonomous tasks.')
}
for i,s in enumerate(selected, start=1):
    s['id']=str(i)
    if s['title'] in repl:
        s['title'], s['summary'] = repl[s['title']]
    s['publishedAt']=s.pop('published_at')
    s.pop('why_it_matters',None)

week=str(date(2026,3,15))
script=Path('working/podcast_script.txt').read_text()
script=script.replace("Another important perspective comes from the way leading companies are framing trust. OpenAI’s acquisition of Promptfoo and its emphasis on agent security suggest that the next phase of competition will be won not only on benchmark performance, but also on assurance. In other words, reliability, traceability, and resilience are becoming product features in their own right.","Another important perspective comes directly from OpenAI’s new guidance on designing agents to resist prompt injection. The key insight is that security for AI agents increasingly looks less like traditional content moderation and more like defense against manipulation. That framing matters because it reflects a maturing understanding of how AI systems fail in the real world and what responsible design will require.\n\nA second perspective comes from the way leading companies are framing trust more broadly. OpenAI’s acquisition of Promptfoo and its emphasis on agent security suggest that the next phase of competition will be won not only on benchmark performance, but also on assurance. In other words, reliability, traceability, and resilience are becoming product features in their own right.")
Path('working/selected_articles.json').write_text(json.dumps(selected, indent=2, ensure_ascii=False))
Path('working/podcast_script.txt').write_text(script)
from collections import Counter
print('counts', Counter(a['category'] for a in selected))
print('words', len(script.split()))
