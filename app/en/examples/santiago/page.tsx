import type { Metadata } from "next";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import SiteHeader, { type NavItem } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Santiago Marín Gutiérrez — Midfielder",
  description:
    "Santiago Marín Gutiérrez — NCAA Division I midfielder at CCSU (transfer from Creighton). Redshirt freshman · NEC Rookie of the Week 2025. Stats, timeline, and contact.",
};

const CCSU_STATS =
  "https://ccsubluedevils.com/sports/msoc/2025-26/bios/marin_gutierrez_santiago_bh0p";
const CREIGHTON_STATS =
  "https://gocreighton.com/sports/mens-soccer/roster/santiago-marn-gutirrez/8137";

const HIGHLIGHTS_URL = "https://www.youtube.com/watch?v=ybDbU45hyfw";
const HIGHLIGHTS_EMBED = "https://www.youtube.com/embed/ybDbU45hyfw";

const navItems: NavItem[] = [
  { type: "anchor", href: "#stats", label: "Stats" },
  { type: "anchor", href: "#seasons", label: "Seasons" },
  { type: "anchor", href: "#highlights", label: "Highlights" },
  { type: "anchor", href: "#timeline", label: "Career" },
  { type: "anchor", href: "#contact", label: "Contact" },
];

const infoItems = [
  { k: "Date of birth", v: "22 Jul 2005" },
  { k: "Height", v: "5′10″" },
  { k: "Weight", v: "170 lbs" },
  { k: "Position", v: "Midfielder" },
  { k: "Hometown", v: "Heredia · Costa Rica" },
];

const seasons = [
  {
    year: "2025-26",
    school: "CCSU",
    schoolUrl: CCSU_STATS,
    conf: "NEC",
    gp: "9",
    gs: "9",
    goals: "2",
    ast: "1",
    pts: "5",
    sh: "36",
  },
  {
    year: "2024",
    school: "Creighton",
    schoolUrl: CREIGHTON_STATS,
    conf: "BIG EAST",
    gp: "—",
    gs: "—",
    goals: "—",
    ast: "—",
    pts: "—",
    sh: "Redshirt",
  },
];

const milestones = [
  {
    year: "2025",
    title: "CCSU — NEC Rookie of the Week",
    body: "Named NEC Rookie of the Week (Sep. 15). Started all nine games and led the Blue Devils with a team-high two goals — a goal and assist against UMass Lowell (Sep. 23) and a goal in the tie against VMI (Sep. 13).",
  },
  {
    year: "2024",
    title: "Creighton University — Redshirt Freshman",
    body: "Joined the Creighton University BIG EAST program as a freshman before transferring to Central Connecticut State University.",
  },
  {
    year: "Before college",
    title: "Lincoln School · Combine Academy",
    body: "Graduate of Lincoln School. Played club soccer for Combine Academy, leading them to the CAA4SC State Championship and setting the team record for goals and assists in a single season.",
  },
  {
    year: "Origin",
    title: "Heredia, Costa Rica",
    body: "Costa Rican midfielder from Heredia.",
  },
];

export default function SantiagoENPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref="/en/examples"
        backAriaLabel="Back to examples"
        menuLabel="Menu"
        badge="SM10"
        logoHref="/en"
        items={navItems}
      />

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-[20%_25%]"
          style={{ backgroundImage: "url('/santiago marin 2.jpg')", backgroundColor: "#0c1117" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">
            Midfielder · NCAA Division I
          </p>
          <h1 className="font-heading text-4xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Santiago</span>
            <span className="block text-gradient-gold">Marín Gutiérrez</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Santiago Marín Gutiérrez is a Costa Rican midfielder from Heredia. A redshirt freshman
            at Central Connecticut State University, he was named NEC Rookie of the Week and led the
            Blue Devils with two goals in his debut season after transferring from Creighton
            University.
          </p>

          <div className="mt-10 flex flex-nowrap gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>a]:shrink-0">
            <a
              href={CCSU_STATS}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              CCSU Stats
            </a>
            <a
              href="#timeline"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Career
            </a>
            <a
              href="#highlights"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Highlights
            </a>
            <a
              href="https://www.instagram.com/santimaring/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Instagram
            </a>
            <a
              href="#contact"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Contact
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: "2",        l: "Goals (2025)" },
              { v: "1",        l: "Assist (2025)" },
              { v: "9",        l: "Starts (2025)" },
              { v: "NEC ROW",  l: "Rookie of the Week" },
            ].map((s) => (
              <div
                key={s.l}
                className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-black/25 p-5 text-center"
              >
                <p className="font-body text-xs uppercase tracking-widest text-primary">{s.l}</p>
                <p className="mt-2 font-heading text-xl font-bold text-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="scroll-mt-14 border-y border-white/10 bg-zinc-900/50 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-5 sm:px-6 lg:px-8">
          {infoItems.map((item) => (
            <div key={item.k} className="text-center">
              <p className="font-body text-xs uppercase tracking-widest text-primary">{item.k}</p>
              <p className="mt-1 font-body text-sm font-medium text-foreground">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="seasons" className="scroll-mt-14 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Season breakdown
          </h2>
          <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 font-body font-semibold text-primary">Season</th>
                  <th className="px-4 py-3 font-body font-semibold">School</th>
                  <th className="px-4 py-3 font-body font-semibold">Conf.</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">GP</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">GS</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">G</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">A</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">Pts</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">SH</th>
                </tr>
              </thead>
              <tbody>
                {seasons.map((s) => (
                  <tr
                    key={s.year}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                  >
                    <td className="px-4 py-3 font-medium text-foreground">{s.year}</td>
                    <td className="px-4 py-3">
                      <a
                        href={s.schoolUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary underline-offset-2 hover:underline"
                      >
                        {s.school}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-secondary-foreground">{s.conf}</td>
                    <td className="px-4 py-3 text-center">{s.gp}</td>
                    <td className="px-4 py-3 text-center">{s.gs}</td>
                    <td className="px-4 py-3 text-center">{s.goals}</td>
                    <td className="px-4 py-3 text-center">{s.ast}</td>
                    <td className="px-4 py-3 text-center">{s.pts}</td>
                    <td className="px-4 py-3 text-center">{s.sh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="highlights" className="scroll-mt-14 bg-zinc-900/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Highlights</h2>
          <div className="mt-10 max-w-3xl">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/25 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={HIGHLIGHTS_EMBED}
                  title="Santiago Marín Gutiérrez — Highlights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
            <a
              href={HIGHLIGHTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body mt-4 inline-block text-sm font-medium text-primary underline-offset-2 hover:underline"
            >
              Watch on YouTube →
            </a>
          </div>
        </div>
      </section>

      <section id="timeline" className="scroll-mt-14 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Career timeline
          </h2>
          <ol className="relative mt-12 space-y-8 border-l border-primary/40 pl-8">
            {milestones.map((m) => (
              <li key={m.title} className="relative">
                <span className="absolute -left-[39px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background text-[10px] font-bold text-primary">
                  ●
                </span>
                <p className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
                  {m.year}
                </p>
                <h3 className="mt-1 font-heading text-xl text-foreground">{m.title}</h3>
                <p className="mt-2 max-w-2xl font-body text-secondary-foreground">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="scroll-mt-14 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Contact</h2>
          <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 p-8">
            <p className="font-heading text-xl font-semibold text-foreground">
              Santiago Marín Gutiérrez
            </p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">
              Midfielder · CCSU / Creighton
            </p>
            <a
              href="mailto:santimaringut@gmail.com"
              className="font-body mt-4 block text-primary underline-offset-2 hover:underline"
            >
              santimaringut@gmail.com
            </a>
            <a
              href="https://www.instagram.com/santimaring/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body mt-2 block text-primary underline-offset-2 hover:underline"
            >
              @santimaring
            </a>
          </div>
        </div>
      </section>

      <LosPibesFooterEN />
    </div>
  );
}
