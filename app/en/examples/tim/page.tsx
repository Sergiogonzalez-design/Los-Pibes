import type { Metadata } from "next";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import SiteHeader, { type NavItem } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Tim Timchenko — Defender",
  description:
    "Tim Timchenko — 2x MAAC Defensive Player of the Year · All-MAAC First Team · MAAC Champion 2025 · USL League One with Westchester SC. Stats, timeline, and contact.",
};

const IONA_ROSTER = "https://ionagaels.com/sports/mens-soccer/roster/tim-timchenko/7630";
const WESTCHESTER_ROSTER = "https://www.westchestersc.com/roster/tim-timchenko/";

const HIGHLIGHTS = [
  {
    url: "https://www.youtube.com/watch?v=mCK1k_8Vifg",
    embed: "https://www.youtube.com/embed/mCK1k_8Vifg",
  },
  {
    url: "https://www.youtube.com/watch?v=xpKzolosTaM",
    embed: "https://www.youtube.com/embed/xpKzolosTaM",
  },
  {
    url: "https://www.youtube.com/watch?v=L2aicfvXWS4",
    embed: "https://www.youtube.com/embed/L2aicfvXWS4",
  },
];

const navItems: NavItem[] = [
  { type: "anchor", href: "#info", label: "Info" },
  { type: "anchor", href: "#seasons", label: "Seasons" },
  { type: "anchor", href: "#highlights", label: "Highlights" },
  { type: "anchor", href: "#timeline", label: "Career" },
  { type: "anchor", href: "#contact", label: "Contact" },
];

const infoItems = [
  { k: "Date of birth", v: "28 Aug 2002" },
  { k: "Height", v: "6′2″" },
  { k: "Weight", v: "170 lbs" },
  { k: "Position", v: "Defender" },
  { k: "Hometown", v: "Kyiv · Ukraine" },
];

const seasons = [
  {
    year: "2026",
    school: "Westchester SC",
    schoolUrl: WESTCHESTER_ROSTER,
    conf: "USL League One",
    gp: "11",
    gs: "11",
    goals: "0",
    ast: "2",
    pts: "2",
    min: "703",
  },
  {
    year: "2024",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    gp: "19",
    gs: "19",
    goals: "1",
    ast: "2",
    pts: "4",
    min: "1,700",
  },
  {
    year: "2023",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    gp: "16",
    gs: "15",
    goals: "0",
    ast: "1",
    pts: "1",
    min: "1,343",
  },
  {
    year: "2022",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    gp: "16",
    gs: "16",
    goals: "1",
    ast: "1",
    pts: "3",
    min: "1,440",
  },
  {
    year: "2021",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    gp: "14",
    gs: "13",
    goals: "0",
    ast: "2",
    pts: "2",
    min: "1,155",
  },
];

const milestones = [
  {
    year: "2026",
    title: "Westchester SC — USL League One",
    body: "Professional rookie season with Westchester SC: 11 appearances, 11 starts, 2 assists and 703 minutes in USL League One through early July 2026.",
  },
  {
    year: "2025",
    title: "MAAC Champion · Pro signing",
    body: "Helped Iona University win the MAAC Championship. Signed with Westchester SC in January 2026 for his professional debut in USL League One.",
  },
  {
    year: "2024",
    title: "Iona — Senior · 2x MAAC Defensive Player of the Year",
    body: "Second MAAC Defensive Player of the Year honor. All-MAAC First Team and All-ECAC First Team. MAAC All-Championship Team. Started all 19 matches, led the team with 1,700 minutes, and helped the Gaels defense to seven shutouts. Assist in the 3-1 MAAC Quarterfinal win over Marist (Nov. 14).",
  },
  {
    year: "2023",
    title: "Iona — Junior · MAAC Defensive Player of the Year",
    body: "First MAAC Defensive Player of the Year honor. All-MAAC First Team, ECAC Second Team, and MAAC All-Championship Team. 16 appearances with 15 starts; second on the team in minutes (1,343). Helped Iona post a league-best .94 opponent goals-against average. Game-winning assist in the MAAC semifinal against Manhattan (Nov. 9).",
  },
  {
    year: "2022",
    title: "Iona — Sophomore · All-MAAC Second Team",
    body: "All-MAAC Second Team (back) and MAAC All-Academic Team. Started all 16 matches with career-best three points (one goal, one assist). First collegiate goal at Mount St. Mary's (Oct. 29).",
  },
  {
    year: "2021",
    title: "Iona — Freshman",
    body: "14 appearances with 13 starts. Assists in back-to-back games at Columbia and at Manhattan. Logged at least 90 minutes in 10 matches.",
  },
  {
    year: "Background",
    title: "Kyiv · Dynamo Moscow · NY Red Bulls",
    body: "Defender from Kyiv, Ukraine. Product of Dynamo Moscow Academy and the New York Red Bulls Academy (featured on NY Red Bulls II roster). Played scholastically at High Mowing School and Pioneer Academy (NJ) before Iona.",
  },
];

export default function TimENPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref="/en/examples"
        backAriaLabel="Back to examples"
        menuLabel="Menu"
        badge="TT5"
        logoHref="/en"
        items={navItems}
      />

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-[center_30%] sm:hidden"
          style={{ backgroundImage: "url('/Tim Timchenko vertical 1.png')", backgroundColor: "#0c1117" }}
          role="img"
          aria-label="Tim Timchenko"
        />
        <div
          className="absolute inset-0 hidden bg-cover bg-[center_20%] sm:block"
          style={{ backgroundImage: "url('/Tim Timchenko horizontal 1.png')", backgroundColor: "#0c1117" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">
            Defender · USL League One · NCAA Division I
          </p>
          <h1 className="font-heading text-4xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Tim</span>
            <span className="block text-gradient-gold">Timchenko</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Tim Timchenko is a defender from Kyiv. A four-year starter at Iona University,
            he was twice named MAAC Defensive Player of the Year, earned All-MAAC First Team honors in
            2023 and 2024, helped Iona win the MAAC Championship in 2025, and made his professional
            debut with Westchester SC in USL League One.
          </p>

          <div className="mt-10 flex flex-nowrap gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>a]:shrink-0">
            <a
              href={WESTCHESTER_ROSTER}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Westchester SC
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
              href="#timeline"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Career
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
              { v: "76", l: "Career Apps" },
              { v: "2x", l: "MAAC DPOY" },
              { v: "2x", l: "All-MAAC 1st Team" },
              { v: "2025", l: "MAAC Champion" },
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

      <section id="info" className="scroll-mt-14 border-y border-white/10 bg-zinc-900/50 py-8">
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
                  <th className="px-4 py-3 font-body font-semibold">School / Team</th>
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
                  <td className="px-4 py-3 text-secondary-foreground">Career</td>
                  <td className="px-4 py-3 text-secondary-foreground">—</td>
                  <td className="px-4 py-3 text-center text-foreground">76</td>
                  <td className="px-4 py-3 text-center text-foreground">74</td>
                  <td className="px-4 py-3 text-center text-foreground">2</td>
                  <td className="px-4 py-3 text-center text-foreground">8</td>
                  <td className="px-4 py-3 text-center text-foreground">12</td>
                  <td className="px-4 py-3 text-center text-foreground">6,341</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="highlights" className="scroll-mt-14 bg-zinc-900/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Highlights</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {HIGHLIGHTS.map((v) => (
              <div key={v.embed} className="overflow-hidden rounded-xl border border-white/10 bg-black/25">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={v.embed}
                    title="Tim Timchenko — Highlights"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body block px-4 py-3 text-sm font-medium text-primary underline-offset-2 hover:underline"
                >
                  Watch on YouTube →
                </a>
              </div>
            ))}
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
            <p className="font-heading text-xl font-semibold text-foreground">Tim Timchenko</p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">
              Defender · Westchester SC · USL League One
            </p>
          </div>
        </div>
      </section>

      <LosPibesFooterEN />
    </div>
  );
}
