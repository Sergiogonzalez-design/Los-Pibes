import type { Metadata } from "next";
import Link from "next/link";
import CompanyLogo from "@/components/CompanyLogo";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";

export const metadata: Metadata = {
  title: "Sergio Gonzalez — Midfielder",
  description:
    "Spanish midfielder from Villanueva del Pardillo. Three seasons at Iona (2022–2024), 2024 MAAC Championship MVP. Graduate student at George Mason.",
};

const GMU_ROSTER = "https://gomason.com/sports/mens-soccer/roster/sergio-gonzalez-fernandez/9251";
const IONA_ROSTER = "https://ionagaels.com/sports/mens-soccer/roster/sergio-gonzalez-fernandez/7622";

const navLinks = [
  { href: "#stats", label: "Stats" },
  { href: "#highlights", label: "Highlights" },
  { href: "#timeline", label: "Career" },
  { href: "#contact", label: "Contact" },
];

const infoItems = [
  { k: "Height", v: "5′9″" },
  { k: "Weight", v: "150 lbs" },
  { k: "Position", v: "Midfielder" },
  { k: "Hometown", v: "Villanueva del Pardillo, Spain" },
  { k: "Strong Foot", v: "Right" },
];

const seasons = [
  {
    year: "2025",
    school: "George Mason",
    schoolUrl: GMU_ROSTER,
    conf: "A-10",
    apps: "13",
    goals: "0",
    ast: "5",
    note: "Graduate student · MSBA (Business Analytics) · 8 starts · 5 pts · per GMU 2025 game-by-game stats",
  },
  {
    year: "2024",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "18",
    goals: "9",
    ast: "3",
    note: "Started all 18 · 21 pts (led team) · MAAC Championship MVP · All-MAAC First Team · All-ECAC First Team",
  },
  {
    year: "2023",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "16",
    goals: "1",
    ast: "0",
    note: "12 starts · All-MAAC Second Team · MAAC All-Academic",
  },
  {
    year: "2022",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "17",
    goals: "2",
    ast: "5",
    note: "Started all 17 · Led team in assists (5) · All-MAAC Second Team",
  },
];

const milestones = [
  {
    year: "2025",
    title: "George Mason — Graduate year",
    body: "MSBA in Business Analytics while competing in the Atlantic 10. 8 starts, 5 assists, including 2 against UVA.",
  },
  {
    year: "2024",
    title: "MAAC Championship MVP — Iona",
    body: "Junior season: 9 goals and 21 points in 18 starts; three assists in the win at Niagara; All-MAAC First Team and All-ECAC First Team.",
  },
  {
    year: "2022–23",
    title: "Iona — All-MAAC honors",
    body: "Sophomore and freshman campaigns with full-time minutes: from first collegiate goal (PK vs LIU) to All-MAAC Second Team selections.",
  },
  {
    year: "2014–2021",
    title: "Getafe CF",
    body: "Seven seasons in Getafe CF's youth academy, growing into a midfielder before making the jump to NCAA Division I.",
  },
  {
    year: "2011–2014",
    title: "Atlético de Madrid",
    body: "Early development years in Atlético de Madrid's youth system.",
  },
];

export default function SergioENPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Custom player navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <Link
              href="/en/examples"
              className="shrink-0 font-body text-sm text-secondary-foreground transition-colors hover:text-primary"
              aria-label="Back to examples"
            >
              ←
            </Link>
            <CompanyLogo priority href="/en" />
            <Link
              href="/examples/sergio"
              className="shrink-0 font-body text-xs font-medium text-secondary-foreground transition-colors hover:text-primary"
            >
              SG<span className="text-primary">6</span>
            </Link>
          </div>
          <ul className="flex max-w-[70vw] flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-2 text-xs font-medium text-secondary-foreground sm:text-sm md:max-w-none">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero */}
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
          <div className="max-w-xl">
            <div className="mb-4">
              <span className="font-heading block text-5xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl lg:text-8xl">Sergio</span>
              <span className="font-heading block text-5xl font-bold leading-none text-gradient-gold sm:text-6xl md:text-7xl lg:text-8xl">Gonzalez</span>
            </div>
            <p className="font-body mb-6 text-sm uppercase tracking-[0.3em] text-primary">Midfielder · #6 · NCAA Division I</p>
            <p className="font-body mb-8 max-w-xl text-base leading-relaxed text-secondary-foreground md:text-lg">
              Spanish midfielder from Villanueva del Pardillo, Spain. Three seasons at Iona (2022–2024),
              including 2024 MAAC Championship MVP and All-MAAC First Team. Now a graduate student at George
              Mason, pursuing an MSBA in Business Analytics while competing in the A-10.
            </p>
            <div className="mb-10 flex flex-wrap gap-3">
              <a href={GMU_ROSTER} target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">George Mason (2025)</a>
              <a href={IONA_ROSTER} target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Iona Roster</a>
              <a href="https://www.instagram.com/sergigonzalez6/" target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Instagram</a>
              <a href="#contact" className="font-body inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Contact</a>
            </div>
            <div id="hero-stats" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[{ v: "64", l: "Career Games" }, { v: "12", l: "Career Goals" }, { v: "13", l: "Career Assists" }, { v: "MVP", l: "MAAC Championship" }].map((s) => (
                <div key={s.l} className="rounded-xl border border-white/10 bg-black/25 p-5">
                  <p className="font-body text-xs uppercase tracking-widest text-primary">{s.l}</p>
                  <p className="mt-2 font-heading text-xl font-bold text-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Player info bar */}
      <section id="stats" className="border-y border-white/10 bg-zinc-900/50 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-5 sm:px-6 lg:px-8">
          {infoItems.map((item) => (
            <div key={item.k} className="text-center sm:text-left">
              <p className="font-body text-xs uppercase tracking-widest text-primary">{item.k}</p>
              <p className="mt-1 font-body text-sm font-medium text-foreground">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Season breakdown */}
      <section id="seasons" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Season breakdown</h2>
          <p className="mt-2 max-w-3xl font-body text-secondary-foreground">
            Numbers from official Iona seasons (2022–2024) and George Mason 2025 game-by-game totals. Click a school name for the live roster page:{" "}
            <a href={GMU_ROSTER} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-2 hover:underline">George Mason</a>
            {" · "}
            <a href={IONA_ROSTER} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-2 hover:underline">Iona</a>.
          </p>
          <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 font-body font-semibold text-primary">Season</th>
                  <th className="px-4 py-3 font-body font-semibold">School</th>
                  <th className="px-4 py-3 font-body font-semibold">Conf.</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">GP</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">G</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">A</th>
                  <th className="px-4 py-3 font-body font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {seasons.map((s) => (
                  <tr key={`${s.year}-${s.school}`} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                    <td className="px-4 py-3 font-medium text-foreground">{s.year}</td>
                    <td className="px-4 py-3">
                      <a href={s.schoolUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline-offset-2 hover:underline">{s.school}</a>
                    </td>
                    <td className="px-4 py-3 text-secondary-foreground">{s.conf}</td>
                    <td className="px-4 py-3 text-center">{s.apps}</td>
                    <td className="px-4 py-3 text-center">{s.goals}</td>
                    <td className="px-4 py-3 text-center">{s.ast}</td>
                    <td className="px-4 py-3 text-secondary-foreground">{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="bg-zinc-900/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Highlights</h2>
          <p className="mt-2 font-body text-secondary-foreground">Official YouTube reels — Iona.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <a href="https://www.youtube.com/watch?v=MXZNl4Gz4sM" target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-white/10 bg-black/20 p-6 transition-colors hover:border-primary/50 hover:bg-black/40">
              <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">Iona highlights</h3>
              <p className="mt-2 font-body text-sm text-secondary-foreground">College film from Iona — NCAA Division I MAAC.</p>
              <span className="mt-4 inline-block font-body text-sm font-medium text-primary">Watch on YouTube →</span>
            </a>
            <a href="https://www.youtube.com/watch?v=wVKjUAZjyZY&t=3880s" target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-white/10 bg-black/20 p-6 transition-colors hover:border-primary/50 hover:bg-black/40">
              <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">Getafe CF vs Real Madrid CF — 2021</h3>
              <p className="mt-2 font-body text-sm text-secondary-foreground">Full game with Getafe CF facing Real Madrid CF (2021).</p>
              <span className="mt-4 inline-block font-body text-sm font-medium text-primary">Watch on YouTube →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section id="timeline" className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Career timeline</h2>
          <p className="mt-2 font-body text-secondary-foreground">Key stops aligned with official Iona and George Mason roster bios.</p>
          <ol className="relative mt-12 space-y-8 border-l border-primary/40 pl-8">
            {milestones.map((m) => (
              <li key={m.title} className="relative">
                <span className="absolute -left-[39px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background text-[10px] font-bold text-primary">●</span>
                <p className="font-body text-sm font-semibold uppercase tracking-widest text-primary">{m.year}</p>
                <h3 className="mt-1 font-heading text-xl text-foreground">{m.title}</h3>
                <p className="mt-2 max-w-2xl font-body text-secondary-foreground">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Contact</h2>
          <p className="font-body mt-2 text-secondary-foreground">Recruiting and media inquiries.</p>
          <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 p-8">
            <p className="font-heading text-xl font-semibold text-foreground">Sergio Gonzalez Fernandez</p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">Midfielder · #6 · NCAA Division I</p>
            <a href="mailto:sergiogonzalez.usa@icloud.com" className="font-body mt-4 block text-primary underline-offset-2 hover:underline">sergiogonzalez.usa@icloud.com</a>
          </div>
        </div>
      </section>

      <LosPibesFooterEN />
    </div>
  );
}
