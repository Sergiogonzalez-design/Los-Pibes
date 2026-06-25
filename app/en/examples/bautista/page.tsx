import type { Metadata } from "next";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import SiteHeader, { type NavItem } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Bautista Rossi Molinas — Forward",
  description:
    "Bautista Rossi Molinas — Argentine forward from Buenos Aires. NCAA Division I at Iona (2024 MAAC champion) and Creighton (Big East).",
};

const IONA_ROSTER =
  "https://ionagaels.com/sports/mens-soccer/roster/bautista-rossi/8035";
const CREIGHTON_ROSTER =
  "https://gocreighton.com/sports/mens-soccer/roster/bautista-rossi/9026";

const HIGHLIGHTS_2024_URL = "https://www.youtube.com/watch?v=e8qecJ52d2w";
const HIGHLIGHTS_2024_EMBED = "https://www.youtube.com/embed/e8qecJ52d2w";
const HIGHLIGHTS_2025_URL = "https://www.youtube.com/watch?v=lS_OECSZAH8";
const HIGHLIGHTS_2025_EMBED = "https://www.youtube.com/embed/lS_OECSZAH8";

const navItems: NavItem[] = [
  { type: "anchor", href: "#stats", label: "Stats" },
  { type: "anchor", href: "#highlights", label: "Highlights" },
  { type: "anchor", href: "#timeline", label: "Career" },
  { type: "anchor", href: "#contact", label: "Contact" },
];

const infoItems = [
  { k: "Date of birth", v: "3 July 2005" },
  { k: "Height", v: "5′11″" },
  { k: "Weight", v: "178 lbs" },
  { k: "Position", v: "Forward" },
  { k: "Hometown", v: "Buenos Aires, Argentina" },
  { k: "Youth Club", v: "Unión de Santa Fe" },
];

const seasons = [
  {
    year: "2025",
    school: "Creighton",
    schoolUrl: CREIGHTON_ROSTER,
    conf: "Big East",
    gp: "15",
    gs: "7",
    goals: "3",
    ast: "2",
    pts: "8",
  },
  {
    year: "2024",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    gp: "16",
    gs: "13",
    goals: "8",
    ast: "2",
    pts: "18",
  },
];

const milestones = [
  {
    year: "2025",
    title: "Creighton — Big East",
    body: "Sophomore season with the Bluejays: 15 appearances, 7 starts, 3 goals and 2 assists (8 points) in Big East play. Game-winning goal vs Omaha; assist vs Missouri State.",
  },
  {
    year: "2024",
    title: "Iona — MAAC champion · All-MAAC Third Team",
    body: "Freshman breakout: 8 goals and 18 points in 16 matches (13 starts). Scored in five straight postseason games and registered the game-winning goal in the MAAC Championship final against Rider (Nov. 17). All-MAAC Third Team and MAAC All-Championship Team.",
  },
  {
    year: "2024",
    title: "MAAC Rookie of the Week",
    body: "Earned MAAC Rookie of the Week honors during his debut collegiate campaign at Iona.",
  },
  {
    year: "Background",
    title: "Buenos Aires · Unión de Santa Fe",
    body: "Argentine forward from Buenos Aires who developed at Unión de Santa Fe before joining NCAA Division I.",
  },
];

export default function BautistaENPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref="/en/examples"
        backAriaLabel="Back to examples"
        menuLabel="Menu"
        badge="BR7"
        logoHref="/en"
        items={navItems}
      />

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-[center_30%]"
          style={{ backgroundImage: "url('/Bautista gritando.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">
            Forward · #7 · NCAA Division I
          </p>
          <h1 className="font-heading text-4xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Bautista</span>
            <span className="block text-gradient-gold">Rossi Molinas</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Bautista Rossi Molinas is an Argentine forward from Buenos Aires. In his freshman season at
            Iona he scored 8 goals, earned All-MAAC Third Team honors, and netted the game-winning goal
            in the MAAC Championship final. He now competes in the Big East at Creighton University.
          </p>
          <p className="font-body mt-4 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            A prolific finisher in the postseason, Rossi scored in five straight games during Iona&apos;s
            MAAC title run — including a brace against Manhattan — before delivering the winner against
            Rider in the conference final.
          </p>
          <div className="mt-10 flex flex-nowrap gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>a]:shrink-0">
            <a
              href={CREIGHTON_ROSTER}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Creighton Roster
            </a>
            <a
              href={IONA_ROSTER}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Iona Roster
            </a>
            <a
              href="#highlights"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Highlights
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
              { v: "31", l: "Career Games" },
              { v: "11", l: "Career Goals" },
              { v: "4", l: "Career Assists" },
              { v: "MAAC", l: "Champion 2024" },
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
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-3 lg:grid-cols-6 sm:px-6 lg:px-8">
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
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 font-body font-semibold text-primary">Season</th>
                  <th className="px-4 py-3 font-body font-semibold">School</th>
                  <th className="px-4 py-3 font-body font-semibold">Conf.</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">GP</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">GS</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">G</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">A</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">Pts</th>
                </tr>
              </thead>
              <tbody>
                {seasons.map((s) => (
                  <tr
                    key={`${s.year}-${s.school}`}
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
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">2024 — Iona</h3>
              <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/25 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={HIGHLIGHTS_2024_EMBED}
                    title="Bautista Rossi — 2024 Highlights"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
              <a
                href={HIGHLIGHTS_2024_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body mt-4 inline-block text-sm font-medium text-primary underline-offset-2 hover:underline"
              >
                Watch on YouTube →
              </a>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                2025 — Creighton
              </h3>
              <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/25 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={HIGHLIGHTS_2025_EMBED}
                    title="Bautista Rossi — 2025 Creighton Highlights"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
              <a
                href={HIGHLIGHTS_2025_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body mt-4 inline-block text-sm font-medium text-primary underline-offset-2 hover:underline"
              >
                Watch on YouTube →
              </a>
            </div>
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
              Bautista Rossi Molinas
            </p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">
              Forward · #7 · NCAA Division I
            </p>
            <a
              href="mailto:Bautistarossi12@gmail.com"
              className="font-body mt-4 block text-primary underline-offset-2 hover:underline"
            >
              Bautistarossi12@gmail.com
            </a>
          </div>
        </div>
      </section>

      <LosPibesFooterEN />
    </div>
  );
}
