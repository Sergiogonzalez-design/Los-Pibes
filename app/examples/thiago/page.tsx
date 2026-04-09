import ThiagoCareerTimeline from "@/components/ThiagoCareerTimeline";
import ThiagoFooter from "@/components/ThiagoFooter";
import ThiagoHighlights from "@/components/ThiagoHighlights";
import ThiagoNavbar from "@/components/ThiagoNavbar";
import ThiagoPlayerInfoBar from "@/components/ThiagoPlayerInfoBar";
import ThiagoSeasonBreakdown from "@/components/ThiagoSeasonBreakdown";
import StatsCard from "@/components/StatsCard";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Thiago Cagna",
  description:
    "Argentine midfielder — Iona University. Career stats, highlights, and bio.",
};

export default function ThiagoExamplePage() {
  return (
    <div className="min-h-screen bg-background">
      <ThiagoNavbar />

      <section className="relative flex min-h-screen items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/thiago-cagna-hero.png"
            alt="Thiago Cagna in Iona Gaels kit striking the ball on the pitch"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-[50%_20%] sm:object-[50%_17%] lg:object-[50%_14%]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0c1117]/[0.96] via-[#0c1117]/45 to-[#0c1117]/25"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <div className="flex items-end">
            <div className="max-w-xl">
              <div className="mb-4">
                <span className="font-heading block text-5xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                  Thiago
                </span>
                <span className="font-heading block text-5xl font-bold leading-none text-gradient-gold sm:text-6xl md:text-7xl lg:text-8xl">
                  Cagna
                </span>
              </div>

              <p className="font-body mb-6 text-sm uppercase tracking-[0.3em] text-primary">
                Midfielder · #25 · NCAA Division I
              </p>

              <p className="font-body mb-8 max-w-xl text-base leading-relaxed text-secondary-foreground md:text-lg">
                Midfielder from Buenos Aires, Argentina. Five seasons at Iona
                (2020–2024): MAAC All-Academic honoree, All-MAAC First Team, and
                MAAC All-Championship Team recognition — with youth experience
                at Estudiantes de La Plata before college.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                <a
                  href="https://ionagaels.com/sports/mens-soccer/roster/thiago-cagna/7618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Iona roster
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
                <StatsCard value="67" label="Career games" />
                <StatsCard value="8" label="Career goals" />
                <StatsCard value="16" label="Career assists" />
                <StatsCard value="MAAC" label="All-Conference" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ThiagoPlayerInfoBar />
      <ThiagoSeasonBreakdown />
      <ThiagoHighlights />
      <ThiagoCareerTimeline />
      <ThiagoFooter />
    </div>
  );
}
