import type { Metadata } from "next";
import LosPibesFooter from "@/components/LosPibesFooter";
import JacoHeader from "@/components/jaco/JacoHeader";
import JacoHero from "@/components/jaco/JacoHero";

export const metadata: Metadata = {
  title: "Jacobo Sanfeliu — Striker",
  description:
    "Jacobo Sanfeliu — Spanish striker from Barcelona. George Mason · SIUE. Career stats, timeline, and highlights.",
};

const GMU_ROSTER = "https://gomason.com/sports/mens-soccer/roster/jacobo-sanfeliu/9417";
const SIUE_ROSTER = "https://siuecougars.com/sports/mens-soccer/roster/jacobo-sanfeliu/12041";
const STERLING_ROSTER = "https://www.scwarriors.com/sports/msoc/2022-23/bios/Jacobo_Sanfeliu";

const heroStats = [
  { label: "Career Games", value: "100" },
  { label: "Career Goals", value: "68" },
  { label: "A-10 First Team", value: "2025" },
  { label: "Position", value: "Striker" },
];

const infoItems = [
  { k: "Height", v: "185 cm" },
  { k: "Weight", v: "86 kg" },
  { k: "Position", v: "Striker" },
  { k: "Strong Foot", v: "Right" },
  { k: "Hometown", v: "Barcelona, Spain" },
];

const seasons = [
  { club: "George Mason", league: "A-10", season: "2025", gp: 16, gs: 12, goals: 7, assists: 2, minutes: 720 },
  { club: "SIUE", league: "OVC", season: "2024", gp: 20, gs: 14, goals: 6, assists: 0, minutes: 1011 },
  { club: "SIUE", league: "OVC", season: "2023", gp: 5, gs: 0, goals: 1, assists: 0, minutes: 98 },
  { club: "Sterling College", league: "NAIA", season: "2022", gp: 19, gs: 19, goals: 18, assists: 4, minutes: 1710 },
  { club: "Sterling College", league: "NAIA", season: "2021", gp: 21, gs: 19, goals: 17, assists: 0, minutes: "—" },
];

const summerSeasons = [
  { club: "Corpus Christi FC", league: "USL2", season: "2024 · Summer", gp: 11, goals: 14 },
  { club: "Toledo Villa FC", league: "USL2", season: "2023 · Summer", gp: 8, goals: 5 },
];

const timeline = [
  {
    year: "2025–Present",
    club: "George Mason",
    detail:
      "Graduate student at George Mason, competing in the Atlantic 10. 2025 All-A-10 First Team selection after transferring from SIUE.",
  },
  {
    year: "Summer 2024",
    club: "Corpus Christi FC — USL2",
    detail:
      "USL League Two summer league — 14 goals in 11 appearances.",
  },
  {
    year: "2024",
    club: "SIUE — Senior",
    detail:
      "All-OVC Second Team. Team-leading scorer with 6 goals in 20 appearances (14 starts). Led the Cougars and the OVC in total shots (46).",
  },
  {
    year: "Summer 2023",
    club: "Toledo Villa FC — USL2",
    detail:
      "USL League Two summer league — 5 goals in 8 appearances.",
  },
  {
    year: "2023",
    club: "SIUE — Junior",
    detail:
      "First season with the Cougars — 5 appearances off the bench, including his first collegiate goal at Southern Indiana (10/22).",
  },
  {
    year: "2022",
    club: "Sterling College",
    detail:
      "NAIA — Central Region Player of the Year. Team-high 18 goals and 4 assists (40 points) in 19 appearances.",
  },
  {
    year: "2021",
    club: "Sterling College",
    detail:
      "NAIA — 17 goals in 21 appearances (19 starts), including 5 game-winners.",
  },
  {
    year: "Youth",
    club: "FC Martinec · Barcelona",
    detail: "Developed in club soccer in Barcelona before moving to the United States.",
  },
];

const awards = [
  { year: "2025", title: "A-10 First Team", org: "George Mason" },
  { year: "2024", title: "OVC Second Team", org: "SIUE" },
  { year: "2022", title: "Region Player of the Year", org: "Sterling College" },
  { year: "2022", title: "NCCAA First Team All-American", org: "Sterling College" },
  { year: "2022", title: "KCAC Second Team", org: "Sterling College" },
  { year: "2021", title: "KCAC Honorable Mention", org: "Sterling College" },
];

const highlights = [
  {
    title: "2025 Highlights",
    embed: "https://www.youtube.com/embed/WtXHz-jaJM4",
    desc: "George Mason — Atlantic 10 season film.",
  },
  {
    title: "2024 Highlights",
    embed: "https://www.youtube.com/embed/5RaVKlK-7zM",
    desc: "SIUE — Ohio Valley Conference season film.",
  },
];

export default function JacoEnPage() {
  return (
    <div className="min-h-screen bg-background">
      <JacoHeader
        backAria="Back to language selector"
        menuLabel="Menu"
        nav={{
          seasons: "Seasons",
          awards: "Awards",
          highlights: "Highlights",
          career: "Career",
          contact: "Contact",
        }}
      />

      <JacoHero
        tagline="Striker · #7 · NCAA Division I"
        bio={
          <>
            Jacobo Sanfeliu is a Spanish striker from Barcelona. After two seasons at
            SIUE — including a team-leading 6-goal senior year and All-OVC Second Team
            honors — he earned <span className="font-semibold text-primary">All-A-10 First Team</span> in
            2025 as a graduate student at George Mason.
          </>
        }
        stats={heroStats}
        cta={{
          gmu: "George Mason Roster",
          siue: "SIUE Roster",
          instagram: "Instagram",
          contact: "Contact",
        }}
        gmuRoster={GMU_ROSTER}
        siueRoster={SIUE_ROSTER}
      />

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
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Seasons</h2>
          <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full font-body text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-black/30">
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">Season</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">School</th>
                  <th className="hidden px-4 py-3 text-left text-xs uppercase tracking-widest text-primary sm:table-cell">Conf.</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">GP</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">GS</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">G</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">A</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">Min</th>
                </tr>
              </thead>
              <tbody>
                {seasons.map((s) => (
                  <tr key={`${s.season}-${s.club}`} className="border-b border-white/5 bg-black/10 transition-colors hover:bg-black/25">
                    <td className="px-4 py-3 text-secondary-foreground">{s.season}</td>
                    <td className="px-4 py-3 font-medium text-foreground">{s.club}</td>
                    <td className="hidden px-4 py-3 text-secondary-foreground sm:table-cell">{s.league}</td>
                    <td className="px-4 py-3 text-center text-foreground">{s.gp}</td>
                    <td className="px-4 py-3 text-center text-foreground">{s.gs}</td>
                    <td className="px-4 py-3 text-center font-semibold text-primary">{s.goals}</td>
                    <td className="px-4 py-3 text-center text-foreground">{s.assists}</td>
                    <td className="px-4 py-3 text-center text-foreground">{s.minutes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-heading mt-12 text-xl font-semibold text-foreground sm:text-2xl">
            Summer leagues
          </h3>
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full font-body text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-black/30">
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">Season</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">Club</th>
                  <th className="hidden px-4 py-3 text-left text-xs uppercase tracking-widest text-primary sm:table-cell">League</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">GP</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">G</th>
                </tr>
              </thead>
              <tbody>
                {summerSeasons.map((s) => (
                  <tr key={`${s.season}-${s.club}`} className="border-b border-white/5 bg-black/10 transition-colors hover:bg-black/25">
                    <td className="px-4 py-3 text-secondary-foreground">{s.season}</td>
                    <td className="px-4 py-3 font-medium text-foreground">{s.club}</td>
                    <td className="hidden px-4 py-3 text-secondary-foreground sm:table-cell">{s.league}</td>
                    <td className="px-4 py-3 text-center text-foreground">{s.gp}</td>
                    <td className="px-4 py-3 text-center font-semibold text-primary">{s.goals}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="awards" className="scroll-mt-14 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Awards & Honors</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((a) => (
              <div
                key={`${a.year}-${a.title}`}
                className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-black/25 p-5 text-center transition-colors hover:bg-black/40"
              >
                <p className="font-body text-xs uppercase tracking-widest text-primary">{a.year}</p>
                <p className="font-heading mt-1.5 text-lg font-semibold text-foreground">{a.title}</p>
                <p className="font-body mt-1 text-sm text-secondary-foreground">{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="highlights" className="scroll-mt-14 bg-zinc-900/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Highlights</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {highlights.map((h) => (
              <div key={h.title}>
                <h3 className="font-heading text-lg font-semibold text-foreground">{h.title}</h3>
                <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/25 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={h.embed}
                      title={`Jacobo Sanfeliu — ${h.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="career" className="scroll-mt-14 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Career Timeline</h2>
          <ol className="mt-10 space-y-6">
            {timeline.map((t, i) => (
              <li key={t.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                  {i < timeline.length - 1 && <div className="mt-1 w-px flex-1 bg-white/10" />}
                </div>
                <div className="pb-6">
                  <p className="font-body text-xs uppercase tracking-widest text-primary">{t.year}</p>
                  <p className="font-heading mt-1 text-lg font-semibold text-foreground">{t.club}</p>
                  <p className="font-body mt-1 text-sm leading-relaxed text-secondary-foreground">{t.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="scroll-mt-14 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Contact</h2>
          <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 p-8">
            <p className="font-heading text-xl font-semibold text-foreground">Jacobo Sanfeliu</p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">Striker · #7 · George Mason</p>
            <a
              href="mailto:jacobosanfeliu03@gmail.com"
              className="font-body mt-4 block text-primary underline-offset-2 hover:underline"
            >
              jacobosanfeliu03@gmail.com
            </a>
          </div>
        </div>
      </section>

      <LosPibesFooter />
    </div>
  );
}

