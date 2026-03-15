import json
from pathlib import Path
articles = json.loads(Path('working/selected_articles.json').read_text())
duration_seconds = 550.512
mins = int(duration_seconds // 60)
secs = int(round(duration_seconds % 60))
if secs == 60:
    mins += 1
    secs = 0
week = '2026-03-15'
episode_num = '019'
podcast = {
    'id': f'ep-{episode_num}',
    'title': 'AI News Weekly - March 15, 2026',
    'description': "This week: OpenAI acquires Promptfoo, Nvidia plans a massive push into open-weight AI models, Perplexity takes its Computer agent into the enterprise, Europe moves toward banning AI-generated child abuse imagery, and businesses confront the operational realities of AI at scale. Hosted by Roger Basler de Roca.",
    'audioUrl': '/latest-ai-news/podcast/latest-episode.mp3',
    'publishedAt': week,
    'duration': f'{mins}:{secs:02d}',
}
lines = []
lines.append('import { WeeklyUpdate } from "../types/news";')
lines.append('')
lines.append('export const sampleData: WeeklyUpdate = {')
lines.append(f'  weekEnding: "{week}",')
lines.append('  podcast: {')
for key in ['id','title','description','audioUrl','publishedAt','duration']:
    lines.append(f'    {key}: {json.dumps(podcast[key], ensure_ascii=False)},')
lines.append('  },')
lines.append('  articles: [')
for a in articles:
    lines.append('    {')
    for key in ['id','title','summary','source','url','publishedAt','category']:
        lines.append(f'      {key}: {json.dumps(a[key], ensure_ascii=False)},')
    lines.append('    },')
lines.append('  ],')
lines.append('};')
Path('client/src/data/sampleData.ts').write_text('\n'.join(lines) + '\n')
print('wrote client/src/data/sampleData.ts with', len(articles), 'articles and duration', podcast['duration'])
