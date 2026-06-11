import type { Metadata } from "next";
import LosPibesFooter from "@/components/LosPibesFooter";
import JacoHeader from "@/components/jaco/JacoHeader";
import JacoHero from "@/components/jaco/JacoHero";

export const metadata: Metadata = {
  title: "Jacobo Sanfeliu — Delantero",
  description:
    "Jacobo Sanfeliu — Delantero español de Barcelona. George Mason · SIUE. Estadísticas, trayectoria y highlights.",
};

const GMU_ROSTER = "https://gomason.com/sports/mens-soccer/roster/jacobo-sanfeliu/9417";
const SIUE_ROSTER = "https://siuecougars.com/sports/mens-soccer/roster/jacobo-sanfeliu/12041";
const STERLING_ROSTER = "https://www.scwarriors.com/sports/msoc/2022-23/bios/Jacobo_Sanfeliu";

const heroStats = [
  { label: "Partidos", value: "100" },
  { label: "Goles", value: "68" },
  { label: "All-A-10 1er Equipo", value: "2025" },
  { label: "Posición", value: "Delantero" },
];

const infoItems = [
  { k: "Altura", v: "185 cm" },
  { k: "Peso", v: "86 kg" },
  { k: "Posición", v: "Delantero" },
  { k: "Pie dominante", v: "Derecho" },
  { k: "Ciudad natal", v: "Barcelona, España" },
];

const seasons = [
  { club: "George Mason", league: "A-10", season: "2025", gp: 16, gs: 12, goals: 7, assists: 2, minutes: 720 },
  { club: "SIUE", league: "OVC", season: "2024", gp: 20, gs: 14, goals: 6, assists: 0, minutes: 1011 },
  { club: "SIUE", league: "OVC", season: "2023", gp: 5, gs: 0, goals: 1, assists: 0, minutes: 98 },
  { club: "Sterling College", league: "NAIA", season: "2022", gp: 19, gs: 19, goals: 18, assists: 4, minutes: 1710 },
  { club: "Sterling College", league: "NAIA", season: "2021", gp: 21, gs: 19, goals: 17, assists: 0, minutes: "—" },
];

const summerSeasons = [
  { club: "Corpus Christi FC", league: "USL2", season: "2024 · Verano", gp: 11, goals: 14 },
  { club: "Toledo Villa FC", league: "USL2", season: "2023 · Verano", gp: 8, goals: 5 },
];

const timeline = [
  {
    year: "2025–Presente",
    club: "George Mason",
    detail:
      "Estudiante de posgrado en George Mason, compitiendo en la Atlantic 10. Seleccionado al Primer Equipo All-A-10 en 2025 tras llegar desde SIUE.",
  },
  {
    year: "Verano 2024",
    club: "Corpus Christi FC — USL2",
    detail:
      "Liga de verano USL League Two — 14 goles en 11 partidos.",
  },
  {
    year: "2024",
    club: "SIUE — Senior",
    detail:
      "Segundo Equipo All-OVC. Máximo goleador del equipo con 6 goles en 20 partidos (14 titularidades). Lideró a los Cougars y la OVC en tiros totales (46).",
  },
  {
    year: "Verano 2023",
    club: "Toledo Villa FC — USL2",
    detail:
      "Liga de verano USL League Two — 5 goles en 8 partidos.",
  },
  {
    year: "2023",
    club: "SIUE — Junior",
    detail:
      "Primera temporada con los Cougars — 5 apariciones desde el banquillo, incluyendo su primer gol universitario ante Southern Indiana (22/10).",
  },
  {
    year: "2022",
    club: "Sterling College",
    detail:
      "NAIA — Jugador del Año de la Región Central. Máximo goleador del equipo con 18 goles y 4 asistencias (40 puntos) en 19 partidos.",
  },
  {
    year: "2021",
    club: "Sterling College",
    detail:
      "NAIA — 17 goles en 21 partidos (19 titularidades), con 5 goles de la victoria.",
  },
  {
    year: "Juvenil",
    club: "FC Martinec · Barcelona",
    detail: "Formación en fútbol base en Barcelona antes de trasladarse a Estados Unidos.",
  },
];

const awards = [
  { year: "2025", title: "Primer Equipo All-A-10", org: "George Mason" },
  { year: "2024", title: "Segundo Equipo All-OVC", org: "SIUE" },
  { year: "2022", title: "Jugador del Año de la Región", org: "Sterling College" },
  { year: "2022", title: "Primer Equipo All-American NCCAA", org: "Sterling College" },
  { year: "2022", title: "Segundo Equipo All-KCAC", org: "Sterling College" },
  { year: "2021", title: "Mención de Honor KCAC", org: "Sterling College" },
];

const highlights = [
  {
    title: "Highlights 2025",
    embed: "https://www.youtube.com/embed/WtXHz-jaJM4",
    desc: "George Mason — Film de la temporada en la Atlantic 10.",
  },
  {
    title: "Highlights 2024",
    embed: "https://www.youtube.com/embed/5RaVKlK-7zM",
    desc: "SIUE — Film de la temporada en la Ohio Valley Conference.",
  },
];

export default function JacoEsPage() {
  return (
    <div className="min-h-screen bg-background">
      <JacoHeader
        backAria="Volver al selector de idioma"
        menuLabel="Menú"
        nav={{
          seasons: "Temporadas",
          awards: "Premios",
          highlights: "Highlights",
          career: "Trayectoria",
          contact: "Contacto",
        }}
      />

      <JacoHero
        tagline="Delantero · #7 · NCAA División I"
        bio={
          <>
            Jacobo Sanfeliu es un delantero español de Barcelona. Tras dos temporadas en
            SIUE — incluyendo un curso senior con 6 goles y el Segundo Equipo All-OVC —
            fue seleccionado al <span className="font-semibold text-primary">Primer Equipo All-A-10</span> en
            2025 como estudiante de posgrado en George Mason.
          </>
        }
        stats={heroStats}
        cta={{
          gmu: "Roster George Mason",
          siue: "Roster SIUE",
          instagram: "Instagram",
          contact: "Contactar",
        }}
        gmuRoster={GMU_ROSTER}
        siueRoster={SIUE_ROSTER}
      />

      <section id="stats" className="scroll-mt-14 border-y border-white/10 bg-zinc-900/50 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-5 sm:px-6 lg:px-8">
          {infoItems.map((item) => (
            <div key={item.k} className="text-center sm:text-left">
              <p className="font-body text-xs uppercase tracking-widest text-primary">{item.k}</p>
              <p className="mt-1 font-body text-sm font-medium text-foreground">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="seasons" className="scroll-mt-14 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Temporadas</h2>
          <p className="font-body mt-2 text-secondary-foreground">
            Rendimiento año a año en George Mason, SIUE y Sterling College. Enlaces a roster:{" "}
            <a href={GMU_ROSTER} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-2 hover:underline">
              George Mason
            </a>
            {" · "}
            <a href={SIUE_ROSTER} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-2 hover:underline">
              SIUE
            </a>
            {" · "}
            <a href={STERLING_ROSTER} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-2 hover:underline">
              Sterling College
            </a>
            .
          </p>
          <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full font-body text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-black/30">
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">Temporada</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">Universidad</th>
                  <th className="hidden px-4 py-3 text-left text-xs uppercase tracking-widest text-primary sm:table-cell">Conf.</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">PJ</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">Tit.</th>
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
            Ligas de verano
          </h3>
          <p className="font-body mt-2 text-secondary-foreground">USL League Two.</p>
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full font-body text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-black/30">
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">Temporada</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">Club</th>
                  <th className="hidden px-4 py-3 text-left text-xs uppercase tracking-widest text-primary sm:table-cell">Liga</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">PJ</th>
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
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Premios y Distinciones</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((a) => (
              <div
                key={`${a.year}-${a.title}`}
                className="rounded-xl border border-white/10 bg-black/25 p-5 transition-colors hover:bg-black/40"
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
                <p className="font-body mt-1 text-sm text-secondary-foreground">{h.desc}</p>
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
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Trayectoria</h2>
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
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Contacto</h2>
          <p className="font-body mt-2 text-secondary-foreground">Consultas de reclutamiento y medios.</p>
          <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 p-8">
            <p className="font-heading text-xl font-semibold text-foreground">Jacobo Sanfeliu</p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">Delantero · #7 · George Mason</p>
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

