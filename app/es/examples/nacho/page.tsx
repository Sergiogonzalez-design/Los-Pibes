import type { Metadata } from "next";
import Link from "next/link";
import CompanyLogo from "@/components/CompanyLogo";
import LosPibesFooterES from "@/components/LosPibesFooterES";

export const metadata: Metadata = {
  title: "Nacho Alfaro — Portero",
  description:
    "Ignacio 'Nacho' Alfaro Monge — portero de Costa Rica. NCAA División I en Iona University y Florida Atlantic University.",
};

const IONA_ROSTER = "https://ionagaels.com/sports/mens-soccer/roster/nacho-alfaro-monge/7135";
const FAU_ROSTER = "https://fausports.com/sports/mens-soccer/roster/nacho-alfaro/18064";

const navLinks = [
  { href: "#stats", label: "Estadísticas" },
  { href: "#highlights", label: "Highlights" },
  { href: "#timeline", label: "Trayectoria" },
  { href: "#contact", label: "Contacto" },
];

const infoItems = [
  { k: "Posición", v: "Portero" },
  { k: "Ciudad natal", v: "Heredia, Costa Rica" },
  { k: "Altura / Peso", v: "1,88 m · 82 kg" },
  { k: "Ligas", v: "NCAA D-I · MAAC · AAC" },
  { k: "Pie dominante", v: "Izquierdo" },
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
    note: "% Paradas .717 · W4–L4–T3 · 917 min jugados",
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
    note: "Guante de Oro · All-MAAC Primer Equipo · MAAC All-Academic",
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
    note: "% Paradas .753 · W7–L5–T5 · 7 porterías a cero (récord MAAC) · MAAC All-Academic",
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
    note: "% Paradas .704 · W3–L4–T0 · Rookie · MAAC Defensive Player of the Week",
  },
];

const milestones = [
  {
    year: "2024–presente",
    title: "FAU Owls — American Athletic Conference",
    body: "Transferido a Florida Atlantic University (AAC). Titular en los 11 partidos — 33 paradas, 1.28 GAA, .717 % de paradas, 3 porterías a cero. Récord W4–L4–T3 en 917 minutos.",
  },
  {
    year: "2023",
    title: "Iona — Guante de Oro · All-MAAC Primer Equipo",
    body: "Temporada junior: 15 titularidades, 1.01 GAA, 46 paradas, 3 porterías a cero. Ganador del Guante de Oro MAAC y portero del Primer Equipo All-MAAC. Reconocimiento MAAC All-Academic.",
  },
  {
    year: "2022",
    title: "Iona — Líder en porterías a cero en la MAAC",
    body: "Temporada de segundo año: 17 titularidades, 1.12 GAA, .753 % de paradas, 7 porterías a cero — empatado como el máximo de la MAAC. Selección MAAC All-Academic.",
  },
  {
    year: "2021",
    title: "Iona — Debut universitario",
    body: "8 partidos de titular en su primera temporada universitaria. Nombrado MAAC Defensive Player of the Week.",
  },
  {
    year: "2018 y antes",
    title: "Costa Rica — Selecciones U15, U17 y U20",
    body: "Representó a Costa Rica a nivel internacional juvenil en tres categorías de edad. Ganó el Torneo Nacional U-17 y el Torneo Internacional CONCACAF en 2018.",
  },
];

const highlights = [
  {
    title: "Highlights 2023",
    href: "https://www.youtube.com/watch?v=e9lnOoj7bWA",
    desc: "Temporada junior en Iona — paradas, distribución y reflejos en la MAAC.",
  },
  {
    title: "Costa Rica",
    href: "https://www.youtube.com/watch?v=2cRTMPZMAkk",
    desc: "Apariciones internacionales representando a Costa Rica — dominio del área y reflejos.",
  },
  {
    title: "Highlights 2022",
    href: "https://www.youtube.com/watch?v=CKD1y6-P4Q0",
    desc: "Temporada de segundo año en Iona — un año completo bajo los tres palos.",
  },
];

export default function NachoESPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Custom player navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <Link
              href="/es/examples"
              className="shrink-0 font-body text-sm text-secondary-foreground transition-colors hover:text-primary"
              aria-label="Volver a ejemplos"
            >
              ←
            </Link>
            <CompanyLogo priority href="/es" />
            <Link
              href="/examples/nacho"
              className="shrink-0 font-body text-xs font-medium text-secondary-foreground transition-colors hover:text-primary"
            >
              NA<span className="text-primary">13</span>
            </Link>
          </div>
          <ul className="flex max-w-[70vw] flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-2 text-xs font-medium text-secondary-foreground sm:text-sm md:max-w-none">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-primary">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Nacho jugando.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">Portero · Costa Rica</p>
          <h1 className="font-heading text-5xl font-bold leading-none text-foreground sm:text-7xl md:text-8xl">
            <span className="block">Nacho</span>
            <span className="block text-gradient-gold">Alfaro</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Ignacio &ldquo;Nacho&rdquo; Alfaro Monge es un portero de Heredia, Costa Rica. Compitió en Iona University (MAAC) durante
            tres temporadas antes de transferirse a Florida Atlantic University en la American Athletic Conference —
            ganando el Guante de Oro MAAC y honores del Primer Equipo All-MAAC en el camino.
          </p>
          <p className="font-body mt-4 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Antes de la universidad, Nacho representó a Costa Rica en los niveles U-15, U-17 y U-20 — ganando
            el Torneo Nacional U-17 y el Torneo Internacional CONCACAF en 2018.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={FAU_ROSTER} target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Perfil FAU</a>
            <a href={IONA_ROSTER} target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Perfil Iona</a>
            <a href="https://www.instagram.com/nachoo_2908/" target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Instagram</a>
            <a href="#contact" className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Contacto</a>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[{ v: "50", l: "Partidos" }, { v: "156", l: "Paradas" }, { v: ".739", l: "% Paradas" }, { v: "Guante de Oro", l: "Premio" }].map((s) => (
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
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Estadísticas por temporada</h2>
          <p className="mt-2 max-w-3xl font-body text-secondary-foreground">
            Perfiles oficiales:{" "}
            <a href={IONA_ROSTER} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-2 hover:underline">Iona Gaels</a>
            {" · "}
            <a href={FAU_ROSTER} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-2 hover:underline">FAU Owls</a>
          </p>
          <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[540px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 font-body font-semibold text-primary">Temporada</th>
                  <th className="px-4 py-3 font-body font-semibold">Colegio</th>
                  <th className="px-4 py-3 font-body font-semibold">Conf.</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">PT</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">GPC</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">PAR</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">PC0</th>
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
          <p className="mt-4 font-body text-xs text-zinc-500">PT = partidos titularizado · GPC = goles en contra por partido · PAR = paradas · PC0 = porterías a cero</p>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="bg-zinc-900/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Highlights</h2>
          <p className="mt-2 font-body text-secondary-foreground">Reels de YouTube por temporada — Iona Gaels y Costa Rica.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((c) => (
              <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-white/10 bg-black/20 p-6 transition-colors hover:border-primary/50 hover:bg-black/40">
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">{c.title}</h3>
                <p className="mt-2 font-body text-sm text-secondary-foreground">{c.desc}</p>
                <span className="mt-4 inline-block font-body text-sm font-medium text-primary">Ver en YouTube →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section id="timeline" className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Trayectoria</h2>
          <p className="mt-2 font-body text-secondary-foreground">De Costa Rica a la NCAA División I — títulos nacionales al Guante de Oro.</p>
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
          <p className="font-body mt-2 text-secondary-foreground">Reclutamiento y consultas de medios.</p>
          <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 p-8">
            <p className="font-heading text-xl font-semibold text-foreground">Nacho Alfaro</p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">Portero · NCAA División I · Costa Rica</p>
            <a href="mailto:contact@onixmedia.agency" className="font-body mt-4 block text-primary underline-offset-2 hover:underline">contact@onixmedia.agency</a>
          </div>
        </div>
      </section>

      <LosPibesFooterES />
    </div>
  );
}
