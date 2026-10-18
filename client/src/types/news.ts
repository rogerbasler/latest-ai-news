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
  // true until the GitHub Action has produced the MP3 for this episode
  audioPending?: boolean;
}

export interface WeeklyUpdate {
  weekEnding: string;
  articles: NewsArticle[];
  podcast: PodcastEpisode;
}

// Past editions keep their articles; the podcast audio is only kept for the latest edition.
export type ArchivedUpdate = Omit<WeeklyUpdate, "podcast">;
