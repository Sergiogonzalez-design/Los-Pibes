import Image from "next/image";
import CareerTimeline from "@/components/CareerTimeline";
import Footer from "@/components/Footer";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import PlayerInfoBar from "@/components/PlayerInfoBar";
import SeasonBreakdown from "@/components/SeasonBreakdown";
import StatsCard from "@/components/StatsCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sergio Gonzalez",
  description:
    "Spanish midfielder — Iona & George Mason. Career stats, highlights, and bio.",
};

export default function SergioExamplePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/sergio-hero.png"
            alt="Sergio Gonzalez dribbling in a night match, George Mason green kit"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-[52%_32%] sm:object-[50%_28%] lg:object-[48%_26%]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0c1117]/[0.96] via-[#0c1117]/40 to-transparent"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <div className="flex items-end">
            <div className="max-w-xl">
              <div className="mb-4">
                <span className="font-heading block text-5xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                  Sergio
                </span>
                <span className="font-heading block text-5xl font-bold leading-none text-gradient-gold sm:text-6xl md:text-7xl lg:text-8xl">
                  Gonzalez
                </span>
              </div>

              <p className="font-body mb-6 text-sm uppercase tracking-[0.3em] text-primary">
                Midfielder · #6 · NCAA Division I
              </p>

              <p className="font-body mb-8 max-w-xl text-base leading-relaxed text-secondary-foreground md:text-lg">
                Spanish midfielder from Villanueva del Pardillo, Spain. Three
                seasons at Iona (2022–2024), including 2024 MAAC Championship MVP
                and All-MAAC First Team. Now a graduate student at George Mason,
                pursuing an MBA in Business Analytics while competing in the
                A-10.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                <a
                  href="https://gomason.com/sports/mens-soccer/roster/sergio-gonzalez-fernandez/9251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  George Mason (2025)
                </a>
                <a
                  href="https://ionagaels.com/sports/mens-soccer/roster/sergio-gonzalez-fernandez/7622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
                >
                  Iona (2022–2024)
                </a>
                <a
                  href="https://www.transfermarkt.es/sergio/profil/spieler/956804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
                >
                  Transfermarkt
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
                <StatsCard value="64" label="Career games" />
                <StatsCard value="12" label="Career goals" />
                <StatsCard value="13" label="Career assists" />
                <StatsCard value="MVP" label="MAAC Championship" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PlayerInfoBar />
      <SeasonBreakdown />
      <Highlights />
      <CareerTimeline />
      <Footer />
    </div>
  );
}
