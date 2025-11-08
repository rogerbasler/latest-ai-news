import { Sparkles, Newspaper, Calendar } from "lucide-react";
import { APP_TITLE } from "@/const";
import NewsCard from "@/components/NewsCard";
import PodcastPlayer from "@/components/PodcastPlayer";
import { sampleData } from "@/data/sampleData";
import type { NewsCategory } from "@/types/news";

export default function Home() {
  const categories: NewsCategory[] = [
    "AI News of the Week",
    "AI Tools, Startups, and Innovations",
    "Regulation and Ethics",
    "Voices and Perspectives",
    "Implications for Business & Society",
  ];

  const getArticlesByCategory = (category: NewsCategory) => {
    return sampleData.articles.filter((article) => article.category === category);
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
              <span>Week ending {new Date(sampleData.weekEnding).toLocaleDateString("en-US", { 
                month: "long", 
                day: "numeric", 
                year: "numeric" 
              })}</span>
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
                <span>{sampleData.articles.length} Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>5 Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-12 bg-card/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <PodcastPlayer episode={sampleData.podcast} />
          </div>
        </div>
      </section>

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

      {/* About Section */}
      <section className="py-16 bg-gradient-to-t from-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">About This Podcast</h3>
            <p className="text-muted-foreground">
              Hosted by <span className="text-foreground font-semibold">Roger Basler de Roca</span>, 
              this weekly podcast brings you the most important AI developments from around the world. 
              We analyze news from leading sources including TechCrunch, OpenAI, Reuters, WIRED, The Verge, 
              and MIT Technology Review to keep you informed about the rapidly evolving AI landscape.
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
