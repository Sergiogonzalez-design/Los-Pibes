import type { Metadata } from "next";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import SiteHeader, { type NavItem } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Jaime Roman Jr. — Defensa",
  description:
    "Jaime Roman Jr. — defensa NCAA División I en Iona University. Capitán · All-MAAC Segundo Equipo 2025 · 45 partidos en carrera. Estadísticas, trayectoria y contacto.",
};

const IONA_ROSTER = "https://ionagaels.com/sports/mens-soccer/roster/jaime-roman-jr-/8958";

const navItems: NavItem[] = [
  { type: "anchor", href: "#stats", label: "Estadísticas" },
  { type: "anchor", href: "#seasons", label: "Temporadas" },
  { type: "anchor", href: "#timeline", label: "Carrera" },
  { type: "anchor", href: "#contact", label: "Contacto" },
];

const infoItems = [
  { k: "Fecha de nac.", v: "14 dic 2004" },
  { k: "Altura", v: "173 cm" },
  { k: "Peso", v: "70 kg" },
  { k: "Posición", v: "Defensa" },
  { k: "Origen", v: "Norwalk, CT · USA" },
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
    min: "1.195",
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
    min: "1.220",
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
    title: "Iona — Capitán · Sénior",
    body: "Continúa como capitán del equipo de fútbol masculino de Iona.",
  },
  {
    year: "2025",
    title: "All-MAAC Segundo Equipo · Capitán · Junior",
    body: "Nombrado capitán del equipo. Seleccionado en el All-MAAC Segundo Equipo (defensa). CSC Academic All-District y MAAC All-Academic Team. Titular en los 15 partidos, 1.195 minutos y tercer asistidor del equipo con 4 asistencias — incluyendo dos en la victoria ante Saint Peter's (1 oct.).",
  },
  {
    year: "2024",
    title: "Iona — Segundo año",
    body: "19 partidos con 15 titularidades. Parte de siete porterías a cero del equipo. MAAC All-Academic Team.",
  },
  {
    year: "2023",
    title: "Iona — Primer año",
    body: "11 partidos con 7 titularidades. Primera asistencia en carrera ante Manhattan (1 nov.), habilitando el gol de la victoria.",
  },
  {
    year: "Origen",
    title: "Norwalk, CT · EE.UU.",
    body: "Defensa de Norwalk, Connecticut. Jugó en el Norwalk High School antes de incorporarse al programa de División I de Iona University.",
  },
];

export default function JaimeESPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref="/es/examples"
        backAriaLabel="Volver a ejemplos"
        menuLabel="Menú"
        badge="JR24"
        logoHref="/es"
        items={navItems}
      />

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-[center_70%] sm:hidden"
          style={{ backgroundImage: "url('/Jaime roman 4.jpg')", backgroundColor: "#0c1117" }}
        />
        <div
          className="absolute inset-0 hidden bg-cover bg-[center_35%] sm:block"
          style={{ backgroundImage: "url('/Jaime Rider.jpg')", backgroundColor: "#0c1117" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">
            Defensa · Capitán · NCAA División I
          </p>
          <h1 className="font-heading text-4xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Jaime</span>
            <span className="block text-gradient-gold">Roman Jr.</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Jaime Roman Jr. es un defensa estadounidense de Norwalk, Connecticut.           En tres temporadas
            en Iona University ha acumulado 45 partidos, recibió el reconocimiento All-MAAC Segundo
            Equipo en 2025 y es capitán del equipo desde 2025, todo ello manteniendo su
            presencia en el MAAC All-Academic Team.
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
              Carrera
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
              Contacto
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: "45",       l: "Partidos" },
              { v: "5",        l: "Asistencias" },
              { v: "3.037",    l: "Minutos" },
              { v: "All-MAAC", l: "Honor 2025" },
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
                  <td className="px-4 py-3 text-center text-foreground">3.037</td>
                </tr>
              </tbody>
            </table>
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
            <p className="font-heading text-xl font-semibold text-foreground">Jaime Roman Jr.</p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">
              Defensa · Capitán · Iona University
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

      <LosPibesFooterES />
    </div>
  );
}
