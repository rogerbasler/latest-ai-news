import { Sparkles, Newspaper, Calendar, Archive, ArrowLeft } from "lucide-react";
import { APP_TITLE } from "@/const";
import NewsCard from "@/components/NewsCard";
import PodcastPlayer from "@/components/PodcastPlayer";
import { sampleData } from "@/data/sampleData";
import { archive } from "@/data/archive";
import { formatDay } from "@/lib/date";
import type { NewsCategory } from "@/types/news";

const BASE = import.meta.env.BASE_URL;

function requestedWeek(): string | null {
  if (typeof window === "undefined") return null;
  return new URLSearchParams(window.location.search).get("week");
}

export default function Home() {
  const categories: NewsCategory[] = [
    "AI News of the Week",
    "AI Tools, Startups, and Innovations",
    "Regulation and Ethics",
    "Voices and Perspectives",
    "Implications for Business & Society",
  ];

  const week = requestedWeek();
  const archived = archive.find((edition) => edition.weekEnding === week);
  const edition = archived ?? sampleData;
  const otherEditions = [
    ...(archived ? [{ weekEnding: sampleData.weekEnding, articles: sampleData.articles, latest: true }] : []),
    ...archive
      .filter((e) => e.weekEnding !== edition.weekEnding)
      .map((e) => ({ weekEnding: e.weekEnding, articles: e.articles, latest: false })),
  ];

  const getArticlesByCategory = (category: NewsCategory) => {
    return edition.articles.filter((article) => article.category === category);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">{APP_TITLE}</h1>
                <p className="text-xs text-muted-foreground">Weekly AI News & Insights</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Week ending {formatDay(edition.weekEnding)}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Your Weekly AI News Digest
            </h2>
            <p className="text-lg text-muted-foreground">
              Curated insights from leading international sources, delivered every Sunday by Roger Basler de Roca
            </p>
            <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-primary" />
                <span>{edition.articles.length} Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>5 Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {archived ? (
        <section className="py-8 bg-card/20">
          <div className="container">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-lg border border-border/50 bg-card/50 p-4 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Archive className="w-4 h-4 text-primary" />
                Archived edition, week ending {formatDay(archived.weekEnding)}. The podcast is available for the latest edition.
              </span>
              <a href={BASE} className="inline-flex items-center gap-2 text-primary hover:underline">
                <ArrowLeft className="w-4 h-4" />
                Latest edition
              </a>
            </div>
          </div>
        </section>
      ) : (
        // Podcast Section
        <section className="py-12 bg-card/20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <PodcastPlayer episode={sampleData.podcast} />
            </div>
          </div>
        </section>
      )}

      {/* News Categories */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-16">
            {categories.map((category) => {
              const articles = getArticlesByCategory(category);
              if (articles.length === 0) return null;

              return (
                <div key={category} className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-4">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                      <NewsCard key={article.id} article={article} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Previous Editions */}
      {otherEditions.length > 0 && (
        <section className="py-12 border-t border-border/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Archive className="w-6 h-6 text-primary" />
                {archived ? "Other editions" : "Previous editions"}
              </h3>
              <ul className="divide-y divide-border/50 rounded-lg border border-border/50 bg-card/30">
                {otherEditions.map((e) => (
                  <li key={e.weekEnding}>
                    <a
                      href={e.latest ? BASE : `${BASE}?week=${e.weekEnding}`}
                      className="flex items-center justify-between gap-4 px-4 py-3 hover:bg-card/60 transition-colors"
                    >
                      <span className="font-medium">
                        Week ending {formatDay(e.weekEnding)}
                        {e.latest ? " (latest)" : ""}
                      </span>
                      <span className="text-sm text-muted-foreground">{e.articles.length} articles</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="py-16 bg-gradient-to-t from-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">About This Podcast</h3>
            <p className="text-muted-foreground">
              Hosted by <span className="text-foreground font-semibold">Roger Basler de Roca</span>, 
              this weekly podcast brings you the most important AI developments from around the world. 
              We analyze news from leading sources including TechCrunch, VentureBeat, MIT Technology Review, 
              The Register and the AI labs' own announcements to keep you informed about the rapidly evolving AI landscape.
            </p>
            <p className="text-sm text-muted-foreground">
              New episodes published every Sunday at 6:00 AM
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-card/30">
        <div className="container">
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} {APP_TITLE}. All rights reserved.</p>
            <p className="mt-2">
              Curated with care by Roger Basler de Roca
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
