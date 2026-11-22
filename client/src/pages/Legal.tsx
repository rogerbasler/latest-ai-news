import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const EMAIL = "hallo@rogerbasler.ch";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h3 className="text-base font-extrabold">{title}</h3>
      <div className="mt-2 space-y-3 leading-relaxed text-foreground/85">{children}</div>
    </div>
  );
}

// Imprint and privacy notice, reached via ?page=legal (GitHub Pages serves one HTML file).
export default function Legal() {
  useEffect(() => {
    document.title = "Imprint and privacy | AI News Weekly";
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <div className="container max-w-3xl py-14 sm:py-20">
      <a href={BASE} className="inline-flex items-center gap-2 text-sm font-bold text-primary">
        <ArrowLeft className="h-4 w-4" />
        Back to AI News Weekly
      </a>

      <section id="imprint" className="mt-10 scroll-mt-24">
        <span className="kicker">Imprint</span>
        <h1 className="font-display mt-5 text-5xl sm:text-6xl">Imprint</h1>
        <Block title="Responsible for this website">
          <p>
            Roger Basler de Roca
            <br />
            Analytics Agentur
            <br />
            The Circle 6
            <br />
            8058 Zürich, Switzerland
            <br />
            <a href={`mailto:${EMAIL}`} className="underline decoration-primary underline-offset-4">
              {EMAIL}
            </a>
          </p>
        </Block>
        <Block title="Content and external links">
          <p>
            AI News Weekly summarises reports from other publishers and links to the original articles. The linked pages
            are the responsibility of their publishers. Research for this site is supported by AI, every story is checked
            on its original page, and the podcast is read in Roger Basler de Roca's AI-cloned voice.
          </p>
        </Block>
      </section>

      <section id="privacy" className="mt-16 scroll-mt-24">
        <span className="kicker">Privacy</span>
        <h2 className="font-display mt-5 text-5xl sm:text-6xl">Privacy notice</h2>
        <p className="mt-6 leading-relaxed text-foreground/85">
          This notice explains which personal data is processed when you visit this website, in line with the Swiss
          Federal Act on Data Protection (FADP) and, where it applies, the EU General Data Protection Regulation (GDPR).
        </p>

        <Block title="Controller">
          <p>
            Roger Basler de Roca, Analytics Agentur, The Circle 6, 8058 Zürich, Switzerland,{" "}
            <a href={`mailto:${EMAIL}`} className="underline decoration-primary underline-offset-4">
              {EMAIL}
            </a>
            .
          </p>
        </Block>

        <Block title="Hosting and server logs">
          <p>
            The website is hosted on GitHub Pages, a service of GitHub, Inc., USA. When you open a page, GitHub
            processes technical data such as your IP address, the time of the request and your browser type in order to
            deliver the page and keep the service secure. We have no access to these logs. Details are in the GitHub
            Privacy Statement. Data may be processed in the USA.
          </p>
        </Block>

        <Block title="No cookies, no tracking">
          <p>
            This website does not set cookies and uses no analytics, advertising or tracking tools. Fonts are loaded from
            this website itself, not from third-party servers.
          </p>
          <p>
            Two small settings are stored in your browser's local storage on your own device: your choice between
            light and dark mode, and the fact that you have closed the short privacy note. They are not sent to us and
            you can delete them at any time in your browser settings.
          </p>
        </Block>

        <Block title="Spotify and Substack embeds">
          <p>
            The section "More from Roger" can show a Spotify player (Spotify AB, Sweden) and a Substack sign-up form
            (Substack, Inc., USA). They load only after you click the corresponding button. From that moment the
            provider receives data such as your IP address and may set cookies under its own privacy policy. Without a
            click, no data is sent to these providers. If you subscribe on Substack, Substack processes your email
            address.
          </p>
        </Block>

        <Block title="Podcast and links">
          <p>
            The podcast audio is served from this website. Links to news sources, Substack or Spotify open the external
            site, where that provider's privacy policy applies.
          </p>
        </Block>

        <Block title="Your rights">
          <p>
            You can request information about your personal data and ask for it to be corrected or deleted, and you can
            object to its processing. Write to{" "}
            <a href={`mailto:${EMAIL}`} className="underline decoration-primary underline-offset-4">
              {EMAIL}
            </a>
            . You can also contact the Swiss Federal Data Protection and Information Commissioner (FDPIC) or, if you
            live in the EU, the data protection authority in your country.
          </p>
        </Block>

        <p className="mt-10 text-sm text-muted-foreground">Last updated: November 22, 2026</p>
      </section>
    </div>
  );
}
