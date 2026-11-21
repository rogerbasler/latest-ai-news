import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export const SUBSTACK = "https://thinkroger.substack.com";
export const HELLO_SUNDAY = "https://open.spotify.com/show/2qpmGFO3MzBZ7ZTDlgo6Wu";

// Third-party players load only after a click, so no Substack or Spotify request happens on page view.
function ConsentEmbed({ src, title, height, label }: { src: string; title: string; height: number; label: string }) {
  const [on, setOn] = useState(false);
  if (on) {
    return (
      <iframe
        src={src}
        title={title}
        height={height}
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="mt-6 w-full border-0 bg-transparent"
      />
    );
  }
  return (
    <button
      onClick={() => setOn(true)}
      className="mt-6 w-full border border-dashed border-background/40 px-4 py-5 text-left text-xs leading-relaxed text-background/70 transition-colors hover:border-primary hover:text-background"
    >
      <span className="block text-sm font-bold text-background">{label}</span>
      Loads content from a third party and may set cookies there.
    </button>
  );
}

export default function MoreFromRoger() {
  return (
    <section id="more" className="scroll-mt-20 bg-foreground text-background">
      <div className="container py-16">
        <span className="kicker">More from Roger</span>
        <h2 className="font-display mt-5 max-w-4xl text-4xl sm:text-6xl">
          From the news <span className="text-primary">to the decision.</span>
        </h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-10">
          {/* ThinkRoger on Substack */}
          <div className="border-t-[3px] border-background pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-3xl">ThinkRoger</h3>
              <span className="font-marker -rotate-2 text-lg text-accent">every Thursday</span>
            </div>
            <p className="mt-4 leading-relaxed text-background/80">
              One question taken further each week: does AI make a decision better, or only faster? A research-based
              essay on Substack, also read in Roger's own voice.
            </p>
            <a
              href={SUBSTACK}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-extrabold uppercase tracking-[0.06em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Read and subscribe
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <ConsentEmbed
              src={`${SUBSTACK}/embed`}
              title="Subscribe to ThinkRoger"
              height={160}
              label="Show the Substack sign-up form here"
            />
          </div>

          {/* Hello Sunday on Spotify */}
          <div className="border-t-[3px] border-background pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-3xl">Hello Sunday</h3>
              <span className="font-marker -rotate-2 text-lg text-accent">Wed + Sun, 6:00</span>
            </div>
            <p className="mt-4 leading-relaxed text-background/80">
              The debate podcast: Roger and his co-host Sunday take one contested AI story of the week and argue both
              sides, with every fact checked on its sources. New episodes every Wednesday and Sunday.
            </p>
            <a
              href={HELLO_SUNDAY}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-extrabold uppercase tracking-[0.06em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Listen on Spotify
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <ConsentEmbed
              src="https://open.spotify.com/embed/show/2qpmGFO3MzBZ7ZTDlgo6Wu?theme=0"
              title="Hello Sunday on Spotify"
              height={232}
              label="Show the Spotify player here"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
