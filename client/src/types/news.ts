export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  publishedAt: string;
  category: NewsCategory;
}

export type NewsCategory =
  | "AI News of the Week"
  | "AI Tools, Startups, and Innovations"
  | "Regulation and Ethics"
  | "Voices and Perspectives"
  | "Implications for Business & Society";

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  publishedAt: string;
  duration: string;
}

export interface WeeklyUpdate {
  weekEnding: string;
  articles: NewsArticle[];
  podcast: PodcastEpisode;
}
