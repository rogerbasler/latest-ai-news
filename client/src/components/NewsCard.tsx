import { ArrowUpRight } from "lucide-react";
import type { NewsArticle } from "@/types/news";
import { formatDay } from "@/lib/date";

interface NewsCardProps {
  article: NewsArticle;
  index?: number;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <article
      className={`scrap group flex flex-col border border-foreground/80 p-6 transition-transform duration-200 hover:-translate-y-1`}
    >
      <div className="flex items-center justify-between gap-3 text-[0.7rem] font-bold uppercase tracking-[0.08em]">
        <span>{article.source}</span>
        <span className="text-muted-foreground">{formatDay(article.publishedAt, "short")}</span>
      </div>
      <div className="mt-3 h-[3px] w-10 bg-primary" />
      <h4 className="mt-4 text-lg font-extrabold leading-snug">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="decoration-primary decoration-2 underline-offset-4 group-hover:underline"
        >
          {article.title}
        </a>
      </h4>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">{article.summary}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-bold text-primary"
      >
        Read the article
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </article>
  );
}
