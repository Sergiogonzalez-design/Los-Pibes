import type { Metadata } from "next";
import NachoNavbar from "@/components/NachoNavbar";
import NachoPlayerInfoBar from "@/components/NachoPlayerInfoBar";
import NachoSeasonBreakdown from "@/components/NachoSeasonBreakdown";
import NachoHighlights from "@/components/NachoHighlights";
import NachoCareerTimeline from "@/components/NachoCareerTimeline";
import NachoFooter from "@/components/NachoFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nacho Alfaro — Goalkeeper",
  description:
    "Ignacio 'Nacho' Alfaro Monge — goalkeeper from Costa Rica. NCAA Division I at Iona University and Florida Atlantic University.",
};

const stats = [
  { label: "Career Games", value: "50" },
  { label: "Career Saves", value: "156" },
  { label: "Career SV%", value: ".739" },
  { label: "Award", value: "Golden Glove" },
];

export default function NachoPage() {
  return (
    <div className="min-h-screen bg-background">
      <NachoNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Nacho jugando.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">
            Goalkeeper · Costa Rica
          </p>
          <h1 className="font-heading text-5xl font-bold leading-none text-foreground sm:text-7xl md:text-8xl">
            <span className="block">Nacho</span>
            <span className="block text-gradient-gold">Alfaro</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Ignacio &ldquo;Nacho&rdquo; Alfaro Monge is a goalkeeper from
            Heredia, Costa Rica. He competed at Iona University (MAAC) for
            three seasons before transferring to Florida Atlantic University in
            the American Athletic Conference — earning the MAAC Golden Glove
            and All-MAAC First Team honors along the way.
          </p>
          <p className="font-body mt-4 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Before college, Nacho represented Costa Rica at the U-15, U-17,
            and U-20 levels — winning the U-17 National Tournament and the
            International CONCACAF Tournament in 2018.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://fausports.com/sports/mens-soccer/roster/nacho-alfaro/18064"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              FAU Roster
            </a>
            <a
              href="https://ionagaels.com/sports/mens-soccer/roster/nacho-alfaro-monge/7135"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Iona Roster
            </a>
            <a
              href="https://www.instagram.com/nachoo_2908/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Instagram
            </a>
            <Link
              href="/contact"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Contact
            </Link>
          </div>

          {/* Stats cards */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-black/25 p-5"
              >
                <p className="font-body text-xs uppercase tracking-widest text-primary">
                  {s.label}
                </p>
                <p className="mt-2 font-heading text-xl font-bold text-foreground">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NachoPlayerInfoBar />
      <NachoSeasonBreakdown />
      <NachoHighlights />
      <NachoCareerTimeline />

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
              Nacho Alfaro
            </p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">
              Goalkeeper · NCAA Division I · Costa Rica
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

      <NachoFooter />
    </div>
  );
}
