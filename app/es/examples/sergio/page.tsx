import type { Metadata } from "next";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import SiteHeader, { type NavItem } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Sergio Gonzalez — Mediocampista",
  description:
    "Mediocampista español de Villanueva del Pardillo. Tres temporadas en Iona (2022–2024), MVP del Campeonato MAAC 2024. Estudiante de posgrado en George Mason.",
};

const GMU_ROSTER = "https://gomason.com/sports/mens-soccer/roster/sergio-gonzalez-fernandez/9251";
const IONA_ROSTER = "https://ionagaels.com/sports/mens-soccer/roster/sergio-gonzalez-fernandez/7622";

const navItems: NavItem[] = [
  { type: "anchor", href: "#stats", label: "Estadísticas" },
  { type: "anchor", href: "#highlights", label: "Highlights" },
  { type: "anchor", href: "#report", label: "Informe" },
  { type: "anchor", href: "#timeline", label: "Trayectoria" },
  { type: "anchor", href: "#contact", label: "Contacto" },
];

const infoItems = [
  { k: "Altura", v: "1,75 m" },
  { k: "Peso", v: "68 kg" },
  { k: "Posición", v: "Mediocampista" },
  { k: "Ciudad natal", v: "Villanueva del Pardillo, España" },
  { k: "Pie dominante", v: "Derecho" },
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
    note: "Estudiante de posgrado · MSBA (Analítica de Negocios) · 8 titularidades · 5 pts",
  },
  {
    year: "2024",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "18",
    goals: "9",
    ast: "3",
    note: "Titular en los 18 · 21 pts (líder del equipo) · MVP Campeonato MAAC · All-MAAC Primer Equipo · All-ECAC Primer Equipo",
  },
  {
    year: "2023",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "16",
    goals: "1",
    ast: "0",
    note: "12 titularidades · All-MAAC Segundo Equipo · MAAC All-Academic",
  },
  {
    year: "2022",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "17",
    goals: "2",
    ast: "5",
    note: "Titular en los 17 · Líder en asistencias (5) · All-MAAC Segundo Equipo",
  },
];

const milestones = [
  {
    year: "2025",
    title: "George Mason — Año de posgrado",
    body: "MSBA en Analítica de Negocios mientras compite en la Atlantic 10. 8 partidos de titular, 5 asistencias, consiguiendo 2 de ellas ante UVA.",
  },
  {
    year: "2024",
    title: "MVP Campeonato MAAC — Iona",
    body: "Temporada junior: 9 goles y 21 puntos en 18 titularidades; tres asistencias en la victoria contra Niagara; All-MAAC Primer Equipo y All-ECAC Primer Equipo.",
  },
  {
    year: "2022–23",
    title: "Iona — Honores All-MAAC",
    body: "Temporadas de primer y segundo año con minutos completos: desde el primer gol universitario (penal vs LIU) hasta las selecciones All-MAAC Segundo Equipo.",
  },
  {
    year: "2014–2021",
    title: "Getafe CF",
    body: "Siete temporadas en la cantera del Getafe CF, consolidándose como mediocampista antes de dar el salto a la NCAA División I.",
  },
  {
    year: "2011–2014",
    title: "Atlético de Madrid",
    body: "Primeros pasos en la cantera del Atlético de Madrid, donde se formó en las categorías inferiores.",
  },
];

export default function SergioESPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref="/es/examples"
        backAriaLabel="Volver a ejemplos"
        menuLabel="Menú"
        badge="SG6"
        logoHref="/es"
        items={navItems}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-[center_25%]"
          style={{ backgroundImage: "url('/Sergi jugando.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <div className="mb-4">
              <span className="font-heading block text-4xl font-bold leading-none text-foreground sm:text-5xl md:text-6xl lg:text-7xl">Sergio</span>
              <span className="font-heading block text-4xl font-bold leading-none text-gradient-gold sm:text-5xl md:text-6xl lg:text-7xl">Gonzalez</span>
            </div>
            <p className="font-body mb-6 text-sm uppercase tracking-[0.3em] text-primary">Mediocampista · #6 · NCAA División I</p>
            <p className="font-body mb-8 max-w-xl text-base leading-relaxed text-secondary-foreground md:text-lg">
              Mediocampista español de Villanueva del Pardillo, España. Tres temporadas en Iona (2022–2024),
              incluyendo el MVP del Campeonato MAAC 2024 y Primer Equipo All-MAAC. Actualmente estudiante de
              posgrado en George Mason, cursando un MSBA en Analítica de Negocios mientras compite en la A-10.
            </p>
            <div className="mb-10 flex flex-nowrap gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>a]:shrink-0">
              <a href={GMU_ROSTER} target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">George Mason (2025)</a>
              <a href={IONA_ROSTER} target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Iona (2022-2024)</a>
              <a href="https://www.instagram.com/sergigonzalez6/" target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Instagram</a>
              <a href="#contact" className="font-body inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Contacto</a>
            </div>
            <div id="hero-stats" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[{ v: "64", l: "Partidos" }, { v: "12", l: "Goles" }, { v: "13", l: "Asistencias" }, { v: "MVP", l: "Campeonato MAAC" }].map((s) => (
                <div key={s.l} className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-black/25 p-5 text-center">
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
            <div key={item.k} className="text-center">
              <p className="font-body text-xs uppercase tracking-widest text-primary">{item.k}</p>
              <p className="mt-1 font-body text-sm font-medium text-foreground">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Season breakdown */}
      <section id="seasons" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Estadísticas por temporada</h2>
          <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 font-body font-semibold text-primary">Temporada</th>
                  <th className="px-4 py-3 font-body font-semibold">Colegio</th>
                  <th className="px-4 py-3 font-body font-semibold">Conf.</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">PJ</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">G</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">A</th>
                  <th className="px-4 py-3 font-body font-semibold">Notas</th>
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
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <a href="https://www.youtube.com/watch?v=MXZNl4Gz4sM" target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-white/10 bg-black/20 p-6 transition-colors hover:border-primary/50 hover:bg-black/40">
              <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">Highlights Iona</h3>
              <span className="mt-4 inline-block font-body text-sm font-medium text-primary">Ver en YouTube →</span>
            </a>
            <a href="https://www.youtube.com/watch?v=wVKjUAZjyZY&t=3880s" target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-white/10 bg-black/20 p-6 transition-colors hover:border-primary/50 hover:bg-black/40">
              <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">Getafe CF vs Real Madrid CF — 2021</h3>
              <span className="mt-4 inline-block font-body text-sm font-medium text-primary">Ver en YouTube →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Performance Report */}
      <section id="report" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Informe de Rendimiento</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/sergio-gonzalez-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver Informe
            </a>
            <a
              href="/sergio-gonzalez-report.pdf"
              download
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Descargar PDF
            </a>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section id="timeline" className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Trayectoria</h2>
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
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Contacto</h2>
          <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 p-8">
            <p className="font-heading text-xl font-semibold text-foreground">Sergio Gonzalez Fernandez</p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">Mediocampista · #6 · NCAA División I</p>
            <a href="mailto:sergiogonzalez.usa@icloud.com" className="font-body mt-4 block text-primary underline-offset-2 hover:underline">sergiogonzalez.usa@icloud.com</a>
          </div>
        </div>
      </section>

      <LosPibesFooterES />
    </div>
  );
}
