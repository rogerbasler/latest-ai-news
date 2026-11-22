import { ArrowLeft, ArrowRight, Moon, Sun } from "lucide-react";
import MoreFromRoger, { HELLO_SUNDAY, SUBSTACK } from "@/components/MoreFromRoger";
import { useTheme } from "@/contexts/ThemeContext";
import Legal from "@/pages/Legal";
import PrivacyNote from "@/components/PrivacyNote";
import NewsCard from "@/components/NewsCard";
import PodcastPlayer from "@/components/PodcastPlayer";
import Emphasis from "@/components/Emphasis";
import { sampleData } from "@/data/sampleData";
import { archive } from "@/data/archive";
import { formatDay } from "@/lib/date";
import type { NewsCategory } from "@/types/news";

const BASE = import.meta.env.BASE_URL;

function requestedPage(): string | null {
  if (typeof window === "undefined") return null;
  return new URLSearchParams(window.location.search).get("page");
}

function requestedWeek(): string | null {
  if (typeof window === "undefined") return null;
  return new URLSearchParams(window.location.search).get("week");
}

const categories: NewsCategory[] = [
  "AI News of the Week",
  "AI Tools, Startups, and Innovations",
  "Regulation and Ethics",
  "Voices and Perspectives",
  "Implications for Business & Society",
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const isLegal = requestedPage() === "legal";
  const week = requestedWeek();
  const archived = archive.find((edition) => edition.weekEnding === week);
  const edition = archived ?? sampleData;
  const otherEditions = [
    ...(archived ? [{ weekEnding: sampleData.weekEnding, articles: sampleData.articles, latest: true }] : []),
    ...archive
      .filter((e) => e.weekEnding !== edition.weekEnding)
      .map((e) => ({ weekEnding: e.weekEnding, articles: e.articles, latest: false })),
  ];
  const headline = edition.headline ?? "The week in AI, [sorted] for decision makers.";

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Masthead */}
      <header className="sticky top-0 z-50 border-b-[3px] border-foreground bg-background/95 backdrop-blur-sm">
        <div className="container flex items-center justify-between gap-4 py-3">
          <a href={BASE} className="flex items-baseline gap-3">
            <span className="font-display whitespace-nowrap text-xl sm:text-3xl">AI News Weekly</span>
            <span className="hidden text-sm font-extrabold sm:inline">#thinkRoger</span>
          </a>
          <nav className="flex items-center gap-4 text-[0.7rem] font-bold uppercase tracking-[0.06em] sm:gap-6 sm:text-xs">
            <a href={SUBSTACK} target="_blank" rel="noopener" className="hidden hover:text-primary sm:inline">
              ThinkRoger
            </a>
            <a href={HELLO_SUNDAY} target="_blank" rel="noopener" className="hidden hover:text-primary sm:inline">
              Hello Sunday
            </a>
            <a href="#more" className="hover:text-primary sm:hidden">
              More
            </a>
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                title={theme === "dark" ? "Light mode" : "Dark mode"}
                className="flex h-9 w-9 items-center justify-center border border-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
          </nav>
        </div>
      </header>

      {isLegal ? (
        <Legal />
      ) : (
        <>
      {/* Hero */}
      <section className="relative">
        <div className="halftone pointer-events-none absolute -right-10 top-6 hidden h-72 w-72 rounded-full opacity-70 md:block" />
        <div className="container relative py-14 sm:py-20">
          <div className="flex flex-wrap items-center gap-3">
            <span className="kicker">{archived ? "Archived edition" : "This week in AI"}</span>
            <span className="text-xs font-bold uppercase tracking-[0.08em]">
              Week ending {formatDay(edition.weekEnding)}
            </span>
          </div>
          <h1 className="font-display mt-6 max-w-5xl text-[2.9rem] sm:text-7xl lg:text-8xl">
            <Emphasis text={headline} />
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-base leading-relaxed sm:text-lg">
              {edition.articles.length} stories from TechCrunch, VentureBeat, The Register, MIT Technology Review and
              the AI labs themselves, selected and put in context for entrepreneurs and decision makers. Every Sunday,
              with a podcast, by Roger Basler de Roca.
            </p>
            <p className="font-marker -rotate-2 text-xl text-accent">
              news first, then judgment
            </p>
          </div>
          {/* Section index */}
          <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-foreground pt-4 text-xs font-bold uppercase tracking-[0.06em]">
            {categories.map((c, i) => (
              <a key={c} href={`#section-${i + 1}`} className="hover:text-primary">
                <span className="text-primary">{String(i + 1).padStart(2, "0")}</span> {c}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Podcast or archive notice */}
      <section className="pb-6">
        <div className="container">
          {archived ? (
            <div className="scrap flex flex-col justify-between gap-3 border border-foreground/80 p-5 text-sm sm:flex-row sm:items-center">
              <span>
                You are reading the edition for the week ending {formatDay(archived.weekEnding)}. The podcast is
                available for the latest edition.
              </span>
              <a href={BASE} className="inline-flex items-center gap-2 font-bold text-primary">
                <ArrowLeft className="h-4 w-4" />
                Latest edition
              </a>
            </div>
          ) : (
            <PodcastPlayer episode={sampleData.podcast} />
          )}
        </div>
      </section>

      {/* Categories */}
      <main className="container space-y-20 py-16">
        {categories.map((category, ci) => {
          const articles = edition.articles.filter((a) => a.category === category);
          if (articles.length === 0) return null;
          return (
            <section key={category} id={`section-${ci + 1}`} className="scroll-mt-24">
              <div className="flex items-end gap-4 border-b-[3px] border-foreground pb-3">
                <span className="font-display text-5xl text-primary sm:text-6xl">
                  {String(ci + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display pb-1 text-2xl sm:text-4xl">{category}</h2>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article, i) => (
                  <NewsCard key={article.id} article={article} index={i} />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <MoreFromRoger />

      {/* Previous editions */}
      {otherEditions.length > 0 && (
        <section className="container py-16">
          <div className="flex items-end justify-between border-b-[3px] border-foreground pb-3">
            <h2 className="font-display text-3xl sm:text-4xl">{archived ? "Other editions" : "Previous editions"}</h2>
          </div>
          <ul className="mt-2 grid gap-x-10 sm:grid-cols-2">
            {otherEditions.map((e) => (
              <li key={e.weekEnding} className="border-b border-foreground/25">
                <a
                  href={e.latest ? BASE : `${BASE}?week=${e.weekEnding}`}
                  className="group flex items-center justify-between gap-4 py-3"
                >
                  <span className="font-bold group-hover:text-primary">
                    Week ending {formatDay(e.weekEnding)}
                    {e.latest ? " (latest)" : ""}
                  </span>
                  <span className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    {e.articles.length} stories
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

        </>
      )}

      {/* About + footer */}
      <footer className="border-t-[3px] border-foreground">
        <div className="container grid gap-8 py-12 text-sm md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="font-display text-2xl">About AI News Weekly</p>
            <p className="mt-3 max-w-xl leading-relaxed text-foreground/80">
              Hosted by Roger Basler de Roca. Every Sunday at 6:00, fifteen stories from TechCrunch, VentureBeat, MIT
              Technology Review, The Register and the AI labs' own announcements, each checked on the original page and
              placed in context. Research is supported by AI; the podcast is read in Roger's cloned voice.
            </p>
          </div>
          <div className="space-y-2 md:text-right">
            <p className="font-extrabold">#thinkRoger</p>
            <p>
              <a href={SUBSTACK} target="_blank" rel="noopener" className="underline decoration-primary underline-offset-4">
                ThinkRoger on Substack
              </a>
            </p>
            <p>
              <a href={HELLO_SUNDAY} target="_blank" rel="noopener" className="underline decoration-primary underline-offset-4">
                Hello Sunday on Spotify
              </a>
            </p>
            <p>
              <a href={`${BASE}?page=legal#imprint`} className="hover:text-primary">Imprint</a>
              {" · "}
              <a href={`${BASE}?page=legal#privacy`} className="hover:text-primary">Privacy</a>
            </p>
            <p className="text-muted-foreground">© {new Date().getFullYear()} Roger Basler de Roca</p>
          </div>
        </div>
      </footer>
      <PrivacyNote />
    </div>
  );
}
