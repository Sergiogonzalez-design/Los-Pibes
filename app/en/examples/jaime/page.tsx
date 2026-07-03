import type { Metadata } from "next";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import SiteHeader, { type NavItem } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Jaime Roman Jr. — Defender",
  description:
    "Jaime Roman Jr. — NCAA Division I defender at Iona University. Captain · All-MAAC Second Team 2025 · 45 career appearances. Stats, timeline, and contact.",
};

const IONA_ROSTER = "https://ionagaels.com/sports/mens-soccer/roster/jaime-roman-jr-/8958";

const navItems: NavItem[] = [
  { type: "anchor", href: "#stats", label: "Stats" },
  { type: "anchor", href: "#seasons", label: "Seasons" },
  { type: "anchor", href: "#timeline", label: "Career" },
  { type: "anchor", href: "#contact", label: "Contact" },
];

const infoItems = [
  { k: "Date of birth", v: "14 Dec 2004" },
  { k: "Height", v: "5′8″" },
  { k: "Weight", v: "155 lbs" },
  { k: "Position", v: "Defender" },
  { k: "Hometown", v: "Norwalk, CT · USA" },
];

const seasons = [
  {
    year: "2025",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    gp: "15",
    gs: "15",
    goals: "0",
    ast: "4",
    pts: "4",
    min: "1,195",
  },
  {
    year: "2024",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    gp: "19",
    gs: "15",
    goals: "0",
    ast: "0",
    pts: "0",
    min: "1,220",
  },
  {
    year: "2023",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    gp: "11",
    gs: "7",
    goals: "0",
    ast: "1",
    pts: "1",
    min: "622",
  },
];

const milestones = [
  {
    year: "2026",
    title: "Iona — Captain · Senior",
    body: "Continues as team captain of the Iona Men's Soccer program.",
  },
  {
    year: "2025",
    title: "All-MAAC Second Team · Captain · Junior",
    body: "Named team captain. All-MAAC Second Team (defense) selection. CSC Academic All-District and MAAC All-Academic Team honoree. Started all 15 games, logged 1,195 minutes, and finished third on the team with 4 assists — including a brace of assists in the win over Saint Peter's (Oct. 1).",
  },
  {
    year: "2024",
    title: "Iona — Sophomore",
    body: "Appeared in 19 matches with 15 starts. Part of seven clean sheets with the Gaels defense. MAAC All-Academic Team honoree.",
  },
  {
    year: "2023",
    title: "Iona — Freshman",
    body: "Appeared in 11 matches with 7 starts. Recorded his first career assist at Manhattan (Nov. 1), setting up the game-winning goal.",
  },
  {
    year: "Background",
    title: "Norwalk, CT · USA",
    body: "Defender from Norwalk, Connecticut. Played high school soccer at Norwalk High School before joining Iona University's Division I program.",
  },
];

export default function JaimeENPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref="/en/examples"
        backAriaLabel="Back to examples"
        menuLabel="Menu"
        badge="JR24"
        logoHref="/en"
        items={navItems}
      />

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-[center_85%]"
          style={{ backgroundImage: "url('/Jaime Rider.jpg')", backgroundColor: "#0c1117" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">
            Defender · Captain · NCAA Division I
          </p>
          <h1 className="font-heading text-4xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Jaime</span>
            <span className="block text-gradient-gold">Roman Jr.</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Jaime Roman Jr. is an American defender from Norwalk, Connecticut.           In three seasons at
            Iona University he has made 45 appearances, earned All-MAAC Second Team honors in 2025,
            and has been team captain since 2025 — all while maintaining a place on the MAAC
            All-Academic Team.
          </p>

          <div className="mt-10 flex flex-nowrap gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>a]:shrink-0">
            <a
              href={IONA_ROSTER}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Iona Roster
            </a>
            <a
              href="#timeline"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Career
            </a>
            <a
              href="https://www.instagram.com/jaimeeromann/"
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
              { v: "45",        l: "Career Apps" },
              { v: "5",         l: "Career Assists" },
              { v: "3,037",     l: "Career Minutes" },
              { v: "All-MAAC",  l: "2025 Honor" },
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
                  <th className="px-4 py-3 text-center font-body font-semibold">MIN</th>
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
                    <td className="px-4 py-3 text-center">{s.min}</td>
                  </tr>
                ))}
                <tr className="border-t border-white/10 bg-white/5 font-semibold">
                  <td className="px-4 py-3 text-foreground">Total</td>
                  <td className="px-4 py-3 text-secondary-foreground">Iona</td>
                  <td className="px-4 py-3 text-secondary-foreground">MAAC</td>
                  <td className="px-4 py-3 text-center text-foreground">45</td>
                  <td className="px-4 py-3 text-center text-foreground">37</td>
                  <td className="px-4 py-3 text-center text-foreground">0</td>
                  <td className="px-4 py-3 text-center text-foreground">5</td>
                  <td className="px-4 py-3 text-center text-foreground">5</td>
                  <td className="px-4 py-3 text-center text-foreground">3,037</td>
                </tr>
              </tbody>
            </table>
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
            <p className="font-heading text-xl font-semibold text-foreground">Jaime Roman Jr.</p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">
              Defender · Captain · Iona University
            </p>
            <a
              href="mailto:jaimeeromann1@gmail.com"
              className="font-body mt-4 block text-primary underline-offset-2 hover:underline"
            >
              jaimeeromann1@gmail.com
            </a>
            <a
              href="https://www.instagram.com/jaimeeromann/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body mt-2 block text-primary underline-offset-2 hover:underline"
            >
              @jaimeeromann
            </a>
          </div>
        </div>
      </section>

      <LosPibesFooterEN />
    </div>
  );
}
