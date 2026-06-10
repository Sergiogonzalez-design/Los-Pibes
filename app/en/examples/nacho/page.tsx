import type { Metadata } from "next";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import SiteHeader, { type NavItem } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Nacho Alfaro — Goalkeeper",
  description:
    "Ignacio 'Nacho' Alfaro Monge — goalkeeper from Costa Rica. NCAA Division I at Iona University and Florida Atlantic University.",
};

const IONA_ROSTER = "https://ionagaels.com/sports/mens-soccer/roster/nacho-alfaro-monge/7135";
const FAU_ROSTER = "https://fausports.com/sports/mens-soccer/roster/nacho-alfaro/18064";

const navItems: NavItem[] = [
  { type: "anchor", href: "#stats", label: "Stats" },
  { type: "anchor", href: "#highlights", label: "Highlights" },
  { type: "anchor", href: "#timeline", label: "Career" },
  { type: "anchor", href: "#contact", label: "Contact" },
];

const infoItems = [
  { k: "Position", v: "Goalkeeper" },
  { k: "Hometown", v: "Heredia, Costa Rica" },
  { k: "Height / Weight", v: "6′2″ · 180 lbs" },
  { k: "Leagues", v: "NCAA D-I · MAAC · AAC" },
  { k: "Strong Foot", v: "Left" },
];

const seasons = [
  {
    year: "2024",
    school: "FAU",
    schoolUrl: FAU_ROSTER,
    conf: "AAC",
    gs: "11",
    gaa: "1.28",
    sv: "33",
    so: "3",
    note: "SV% .717 · W4–L4–T3 · 917 min played",
  },
  {
    year: "2023",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    gs: "15",
    gaa: "1.01",
    sv: "46",
    so: "3",
    note: "Golden Glove · All-MAAC First Team · MAAC All-Academic",
  },
  {
    year: "2022",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    gs: "17",
    gaa: "1.12",
    sv: "58",
    so: "7",
    note: "SV% .753 · W7–L5–T5 · 7 SO tied most in MAAC · MAAC All-Academic",
  },
  {
    year: "2021",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    gs: "7",
    gaa: "1.14",
    sv: "19",
    so: "1",
    note: "SV% .704 · W3–L4–T0 · Freshman · MAAC Defensive Player of the Week",
  },
];

const milestones = [
  {
    year: "2024–present",
    title: "FAU Owls — American Athletic Conference",
    body: "Transferred to Florida Atlantic University (AAC). Started all 11 games — 33 saves, 1.28 GAA, .717 SV%, 3 shutouts. Record W4–L4–T3 across 917 minutes.",
  },
  {
    year: "2023",
    title: "Iona — Golden Glove · All-MAAC First Team",
    body: "Junior season: 15 starts, 1.01 GAA, 46 saves, 3 shutouts. Named MAAC Golden Glove winner and All-MAAC First Team goalkeeper. MAAC All-Academic honoree.",
  },
  {
    year: "2022",
    title: "Iona — MAAC leader in shutouts",
    body: "Sophomore season: 17 starts, 1.12 GAA, .753 save percentage, 7 shutouts — tied for most in the MAAC. MAAC All-Academic selection.",
  },
  {
    year: "2021",
    title: "Iona — Freshman debut",
    body: "8 games started in his first collegiate season. Named MAAC Defensive Player of the Week.",
  },
  {
    year: "2018 & before",
    title: "Costa Rica — U15, U17, U20 national teams",
    body: "Represented Costa Rica at youth international level across three age groups. Won the U-17 National Tournament and the International CONCACAF Tournament in 2018.",
  },
];

const highlights = [
  {
    title: "2023 highlights",
    href: "https://www.youtube.com/watch?v=e9lnOoj7bWA",
    desc: "Junior season at Iona — saves, distribution and shot-stopping in the MAAC.",
  },
  {
    title: "Costa Rica",
    href: "https://www.youtube.com/watch?v=2cRTMPZMAkk",
    desc: "International appearances representing Costa Rica — command of the box and reflexes.",
  },
  {
    title: "2022 highlights",
    href: "https://www.youtube.com/watch?v=CKD1y6-P4Q0",
    desc: "Sophomore season at Iona — full year in net for the Gaels.",
  },
];

export default function NachoENPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref="/en/examples"
        backAriaLabel="Back to examples"
        menuLabel="Menu"
        badge="NA13"
        logoHref="/en"
        items={navItems}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Nacho jugando.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">Goalkeeper · Costa Rica</p>
          <h1 className="font-heading text-4xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Nacho</span>
            <span className="block text-gradient-gold">Alfaro</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Ignacio &ldquo;Nacho&rdquo; Alfaro Monge is a goalkeeper from Heredia, Costa Rica. He competed at Iona University (MAAC) for
            three seasons before transferring to Florida Atlantic University in the American Athletic Conference — earning the
            MAAC Golden Glove and All-MAAC First Team honors along the way.
          </p>
          <p className="font-body mt-4 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Before college, Nacho represented Costa Rica at the U-15, U-17, and U-20 levels — winning the U-17 National
            Tournament and the International CONCACAF Tournament in 2018.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={FAU_ROSTER} target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">FAU Roster</a>
            <a href={IONA_ROSTER} target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Iona Roster</a>
            <a href="https://www.instagram.com/nachoo_2908/" target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Instagram</a>
            <a href="#contact" className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Contact</a>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[{ v: "50", l: "Career Games" }, { v: "156", l: "Career Saves" }, { v: ".739", l: "Career SV%" }, { v: "Golden Glove", l: "Award" }].map((s) => (
              <div key={s.l} className="rounded-xl border border-white/10 bg-black/25 p-5">
                <p className="font-body text-xs uppercase tracking-widest text-primary">{s.l}</p>
                <p className="mt-2 font-heading text-xl font-bold text-foreground">{s.v}</p>
              </div>
            ))}
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
            Official profiles:{" "}
            <a href={IONA_ROSTER} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-2 hover:underline">Iona Gaels</a>
            {" · "}
            <a href={FAU_ROSTER} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-2 hover:underline">FAU Owls</a>
          </p>
          <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[540px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 font-body font-semibold text-primary">Season</th>
                  <th className="px-4 py-3 font-body font-semibold">School</th>
                  <th className="px-4 py-3 font-body font-semibold">Conf.</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">GS</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">GAA</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">SV</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">SO</th>
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
                    <td className="px-4 py-3 text-center">{s.gs}</td>
                    <td className="px-4 py-3 text-center">{s.gaa}</td>
                    <td className="px-4 py-3 text-center">{s.sv}</td>
                    <td className="px-4 py-3 text-center">{s.so}</td>
                    <td className="px-4 py-3 text-secondary-foreground">{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-body text-xs text-zinc-500">GS = games started · GAA = goals against average · SV = saves · SO = shutouts</p>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="bg-zinc-900/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Highlights</h2>
          <p className="mt-2 font-body text-secondary-foreground">YouTube reels by season — Iona Gaels and Costa Rica.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((c) => (
              <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-white/10 bg-black/20 p-6 transition-colors hover:border-primary/50 hover:bg-black/40">
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">{c.title}</h3>
                <p className="mt-2 font-body text-sm text-secondary-foreground">{c.desc}</p>
                <span className="mt-4 inline-block font-body text-sm font-medium text-primary">Watch on YouTube →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section id="timeline" className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Career timeline</h2>
          <p className="mt-2 font-body text-secondary-foreground">From Costa Rica to NCAA Division I — national titles to Golden Glove.</p>
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
            <p className="font-heading text-xl font-semibold text-foreground">Nacho Alfaro</p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">Goalkeeper · NCAA Division I · Costa Rica</p>
            <a href="mailto:contact@onixmedia.agency" className="font-body mt-4 block text-primary underline-offset-2 hover:underline">contact@onixmedia.agency</a>
          </div>
        </div>
      </section>

      <LosPibesFooterEN />
    </div>
  );
}
