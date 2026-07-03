import type { Metadata } from "next";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import SiteHeader, { type NavItem } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Santiago Marín Gutiérrez — Centrocampista",
  description:
    "Santiago Marín Gutiérrez — centrocampista NCAA División I en CCSU (procedente de Creighton). Redshirt freshman · NEC Rookie of the Week 2025. Estadísticas, trayectoria y contacto.",
};

const CCSU_STATS =
  "https://ccsubluedevils.com/sports/msoc/2025-26/bios/marin_gutierrez_santiago_bh0p";
const CREIGHTON_STATS =
  "https://gocreighton.com/sports/mens-soccer/roster/santiago-marn-gutirrez/8137";

const HIGHLIGHTS_URL = "https://www.youtube.com/watch?v=ybDbU45hyfw";
const HIGHLIGHTS_EMBED = "https://www.youtube.com/embed/ybDbU45hyfw";

const navItems: NavItem[] = [
  { type: "anchor", href: "#stats", label: "Stats" },
  { type: "anchor", href: "#seasons", label: "Temporadas" },
  { type: "anchor", href: "#highlights", label: "Highlights" },
  { type: "anchor", href: "#timeline", label: "Carrera" },
  { type: "anchor", href: "#contact", label: "Contacto" },
];

const infoItems = [
  { k: "Fecha de nac.", v: "22 jul 2005" },
  { k: "Altura", v: "178 cm" },
  { k: "Peso", v: "77 kg" },
  { k: "Posición", v: "Centrocampista" },
  { k: "Origen", v: "Heredia · Costa Rica" },
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
    body: "Nombrado NEC Rookie of the Week (15 sep.). Titular en los nueve partidos y máximo goleador de los Blue Devils con dos goles — un gol y una asistencia ante UMass Lowell (23 sep.) y un gol en el empate contra VMI (13 sep.).",
  },
  {
    year: "2024",
    title: "Creighton University — Redshirt Freshman",
    body: "Se incorporó al programa BIG EAST de Creighton University como freshman antes de transferirse a Central Connecticut State University.",
  },
  {
    year: "Antes de la universidad",
    title: "Lincoln School · Combine Academy",
    body: "Graduado del Lincoln School. Jugó fútbol de club en Combine Academy, llevándolos al Campeonato Estatal CAA4SC y estableciendo el récord del equipo de goles y asistencias en una sola temporada.",
  },
  {
    year: "Origen",
    title: "Heredia, Costa Rica",
    body: "Centrocampista costarricense de Heredia.",
  },
];

export default function SantiagoESPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref="/es/examples"
        backAriaLabel="Volver a ejemplos"
        menuLabel="Menú"
        badge="SM10"
        logoHref="/es"
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
            Centrocampista · NCAA División I
          </p>
          <h1 className="font-heading text-4xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Santiago</span>
            <span className="block text-gradient-gold">Marín Gutiérrez</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Santiago Marín Gutiérrez es un centrocampista costarricense de Heredia. Redshirt freshman
            en Central Connecticut State University, fue nombrado NEC Rookie of the Week y máximo
            goleador de los Blue Devils con dos goles en su temporada de debut tras transferirse
            desde Creighton University.
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
              Carrera
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
              Contacto
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: "2",       l: "Goles (2025)" },
              { v: "1",       l: "Asistencia (2025)" },
              { v: "9",       l: "Titularidades (2025)" },
              { v: "NEC ROW", l: "Rookie of the Week" },
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
            Temporadas
          </h2>
          <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 font-body font-semibold text-primary">Temporada</th>
                  <th className="px-4 py-3 font-body font-semibold">Universidad</th>
                  <th className="px-4 py-3 font-body font-semibold">Conf.</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">PJ</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">PT</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">G</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">A</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">Pts</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">Tiros</th>
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
              Ver en YouTube →
            </a>
          </div>
        </div>
      </section>

      <section id="timeline" className="scroll-mt-14 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Trayectoria
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
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Contacto</h2>
          <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 p-8">
            <p className="font-heading text-xl font-semibold text-foreground">
              Santiago Marín Gutiérrez
            </p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">
              Centrocampista · CCSU / Creighton
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

      <LosPibesFooterES />
    </div>
  );
}
