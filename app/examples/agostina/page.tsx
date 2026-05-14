import AgostinaCareerTimeline from "@/components/AgostinaCareerTimeline";
import AgostinaFooter from "@/components/AgostinaFooter";
import AgostinaHighlights from "@/components/AgostinaHighlights";
import AgostinaNavbar from "@/components/AgostinaNavbar";
import AgostinaPlayerInfoBar from "@/components/AgostinaPlayerInfoBar";
import AgostinaSeasonBreakdown from "@/components/AgostinaSeasonBreakdown";
import StatsCard from "@/components/StatsCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agostina Holzheier",
  description:
    "Argentine forward — Racing Club. Club stats, career path, and links.",
};

export default function AgostinaExamplePage() {
  return (
    <div className="min-h-screen bg-background">
      <AgostinaNavbar />

      <section className="relative flex min-h-screen items-end overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#1a1520] via-[#0c1117] to-[#0c1824]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 85% 55% at 65% 15%, rgba(212, 175, 55, 0.22), transparent 55%), radial-gradient(ellipse 50% 45% at 15% 75%, rgba(56, 189, 248, 0.12), transparent 50%)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0c1117]/[0.97] via-[#0c1117]/50 to-[#0c1117]/20"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <div className="flex items-end">
            <div className="max-w-xl">
              <div className="mb-4">
                <span className="font-heading block text-5xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                  Agostina
                </span>
                <span className="font-heading block text-5xl font-bold leading-none text-gradient-gold sm:text-6xl md:text-7xl lg:text-8xl">
                  Holzheier
                </span>
              </div>

              <p className="font-body mb-6 text-sm uppercase tracking-[0.3em] text-primary">
                Forward · left foot · Racing Club
              </p>

              <p className="font-body mb-8 max-w-xl text-base leading-relaxed text-secondary-foreground md:text-lg">
                22-year-old striker from Crespo, Entre Ríos (born 30 September
                2003). Former River Plate and Grêmio; at Racing Club since
                August 2023 — Copa Federal winner with River in 2022. Left-footed
                forward and left winger; senior and youth experience with
                Argentina, including SheBelieves Cup and U20.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                <a
                  href="https://www.racingclub.com.ar/futbol/plantel-femenino/jugador/1570_holzheier/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Racing Club
                </a>
                <a
                  href="https://www.instagram.com/agosholzheier/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
                >
                  Instagram
                </a>
                <a
                  href="https://es.besoccer.com/jugador/partidos/a-holzheier-3265969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
                >
                  BeSoccer
                </a>
                <a
                  href="#contact"
                  className="font-body inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
                >
                  Contact
                </a>
              </div>

              <div
                id="hero-stats"
                className="grid grid-cols-2 gap-3 sm:grid-cols-4"
              >
                <StatsCard value="66" label="Racing apps" />
                <StatsCard value="20" label="Racing goals" />
                <StatsCard value="25" label="Argentina (PJ)" />
                <StatsCard value="3" label="Argentina goals" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AgostinaPlayerInfoBar />
      <AgostinaSeasonBreakdown />
      <AgostinaHighlights />
      <AgostinaCareerTimeline />

      <section id="contact" className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Contact
          </h2>
          <p className="font-body mt-2 text-secondary-foreground">
            Recruiting and media inquiries.
          </p>
          <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 p-8">
            <p className="font-heading text-xl font-semibold text-foreground">
              Agostina Holzheier
            </p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">
              Forward · Racing Club · Argentina
            </p>
            <a
              href="mailto:contact@onixmedia.agency"
              className="font-body mt-4 block text-primary underline-offset-2 hover:underline"
            >
              contact@onixmedia.agency
            </a>
          </div>
        </div>
      </section>

      <AgostinaFooter />
    </div>
  );
}
