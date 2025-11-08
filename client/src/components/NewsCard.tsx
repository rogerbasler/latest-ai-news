import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar } from "lucide-react";
import type { NewsArticle } from "@/types/news";

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  const categoryColors: Record<string, string> = {
    "AI News of the Week": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "AI Tools, Startups, and Innovations": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    "Regulation and Ethics": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "Voices and Perspectives": "bg-green-500/10 text-green-400 border-green-500/20",
    "Implications for Business & Society": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  };

  return (
    <Card className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="outline" className={categoryColors[article.category]}>
            {article.category}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {new Date(article.publishedAt).toLocaleDateString()}
          </div>
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {article.title}
        </CardTitle>
        <CardDescription className="text-sm">{article.source}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{article.summary}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          Read full article
          <ExternalLink className="w-4 h-4" />
        </a>
      </CardContent>
    </Card>
  );
}
