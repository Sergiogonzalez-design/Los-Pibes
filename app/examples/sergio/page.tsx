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
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: "url('/Sergi jugando.jpeg')",
            backgroundSize: "100% auto",
            backgroundPosition: "top center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />

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
                  Iona Roster
                </a>
                <a
                  href="https://www.instagram.com/sergigonzalez6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
                >
                  Instagram
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
                <StatsCard value="64" label="Career Games" />
                <StatsCard value="12" label="Career Goals" />
                <StatsCard value="13" label="Career Assists" />
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
              Sergio Gonzalez Fernandez
            </p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">
              Midfielder · #6 · NCAA Division I
            </p>
            <a
              href="mailto:sergiogonzalez.usa@icloud.com"
              className="font-body mt-4 block text-primary underline-offset-2 hover:underline"
            >
              sergiogonzalez.usa@icloud.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
