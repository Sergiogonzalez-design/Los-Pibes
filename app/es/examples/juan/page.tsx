import type { Metadata } from "next";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import SiteHeader, { type NavItem } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Juan Ignacio Morales — Portero",
  description:
    "Juan Ignacio Morales — portero de Ciudad de México. Liga Premier con Cañoneros FC. Trayectoria en Argentina y México.",
};

const TRANSFERMARKT =
  "https://www.transfermarkt.es/juan-ignacio-morales/profil/spieler/1019759";
const HIGHLIGHTS_URL = "https://www.youtube.com/watch?v=Wh45fAmB2bI";
const HIGHLIGHTS_EMBED = "https://www.youtube.com/embed/Wh45fAmB2bI";

const navItems: NavItem[] = [
  { type: "anchor", href: "#stats", label: "Estadísticas" },
  { type: "anchor", href: "#highlights", label: "Highlights" },
  { type: "anchor", href: "#timeline", label: "Trayectoria" },
  { type: "anchor", href: "#contact", label: "Contacto" },
];

const infoItems = [
  { k: "Nombre completo", v: "Juan Ignacio Morales Albil" },
  { k: "Fecha de nacimiento", v: "16/04/2001" },
  { k: "Altura / Peso", v: "180 cm · 78 kg" },
  { k: "Posición", v: "Portero" },
  { k: "Pie hábil", v: "Derecho" },
];

const seasons = [
  {
    year: "2025–26",
    club: "Cañoneros FC",
    division: "Liga Premier (MEX)",
    apps: "10",
  },
  {
    year: "2024–26",
    club: "Estudiantes Unidos",
    division: "Federal B (ARG)",
    apps: "18",
  },
  {
    year: "2023",
    club: "Boca Unidos",
    division: "Federal A (ARG)",
    apps: "2",
  },
  {
    year: "2022",
    club: "Quilmes",
    division: "Primera Nacional (ARG)",
    apps: "1",
  },
  {
    year: "2021",
    club: "Argentino de Quilmes",
    division: "Federal A (ARG)",
    apps: "15",
  },
];

const milestones = [
  {
    year: "2026–presente",
    title: "Cañoneros FC — Liga Premier",
    body: "Fichado por Cañoneros FC en enero de 2026. Titular habitual en la Liga Premier de México con 10 partidos y una media de 1.00 goles en contra en su primera campaña.",
  },
  {
    year: "2024–2026",
    title: "Estudiantes Unidos — Federal B",
    body: "Se consolidó como titular en la cuarta categoría argentina, con 18 partidos y su mejor media goleadora: 0.94 goles en contra por partido.",
  },
  {
    year: "2021–2023",
    title: "Argentina — Federal A y Primera Nacional",
    body: "Formación en Argentino de Quilmes (15 partidos), Quilmes en Primera Nacional y Boca Unidos — experiencia en varios niveles del fútbol argentino.",
  },
  {
    year: "Origen",
    title: "Ciudad de México · Doble nacionalidad",
    body: "Nacido en Ciudad de México con nacionalidad mexicana y argentina. Proviene de una familia de porteros — hijo del retirado Ángel Morales, sobrino de Carlos Morales y hermano de Matías Morales.",
  },
];

export default function JuanESPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref="/es/examples"
        backAriaLabel="Volver a ejemplos"
        menuLabel="Menú"
        badge="JIM1"
        logoHref="/es"
        items={navItems}
      />

      <section className="relative min-h-[70vh] overflow-hidden bg-black pt-28 pb-20 sm:min-h-[75vh] sm:pt-36 sm:pb-28">
        <img
          src="/Juan accion.jpeg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-[50%_42%] brightness-110 contrast-105 sm:object-[55%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/20 to-background/50 sm:bg-gradient-to-r sm:from-background/75 sm:via-background/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">
            Portero · #1 · Liga Premier
          </p>
          <h1 className="font-heading text-4xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Juan Ignacio</span>
            <span className="block text-gradient-gold">Morales</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Juan Ignacio Morales es un portero de Ciudad de México con nacionalidad mexicana y argentina.
            Tras formarse en la pirámide del fútbol argentino — desde Federal B hasta Primera Nacional —
            fichó por Cañoneros FC en la Liga Premier, donde viste el dorsal 1 como titular habitual.
          </p>
          <p className="font-body mt-4 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Proveniente de una familia de porteros, Morales acumula 46 partidos oficiales entre Argentina
            y México con una media goleadora de 1.04.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={TRANSFERMARKT}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Transfermarkt
            </a>
            <a
              href={HIGHLIGHTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Highlights
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
              { v: "46", l: "Partidos" },
              { v: "1.04", l: "Media GC" },
              { v: "0.94", l: "Mejor media" },
              { v: "Cañoneros", l: "Club actual" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-white/10 bg-black/25 p-5">
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
            <div key={item.k} className="text-center sm:text-left">
              <p className="font-body text-xs uppercase tracking-widest text-primary">{item.k}</p>
              <p className="mt-1 font-body text-sm font-medium text-foreground">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="seasons" className="scroll-mt-14 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Estadísticas por temporada
          </h2>
          <p className="mt-2 max-w-3xl font-body text-secondary-foreground">
            Estadísticas oficiales en ligas de Argentina y México.{" "}
            <a
              href={TRANSFERMARKT}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-2 hover:underline"
            >
              Perfil en Transfermarkt
            </a>
          </p>
          <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 font-body font-semibold text-primary">Temporada</th>
                  <th className="px-4 py-3 font-body font-semibold">Club</th>
                  <th className="px-4 py-3 font-body font-semibold">División</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">PJ</th>
                </tr>
              </thead>
              <tbody>
                {seasons.map((s) => (
                  <tr
                    key={`${s.year}-${s.club}`}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                  >
                    <td className="px-4 py-3 font-medium text-foreground">{s.year}</td>
                    <td className="px-4 py-3 font-medium text-foreground">{s.club}</td>
                    <td className="px-4 py-3 text-secondary-foreground">{s.division}</td>
                    <td className="px-4 py-3 text-center">{s.apps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-body text-xs text-zinc-500">PJ = partidos jugados</p>
        </div>
      </section>

      <section id="highlights" className="scroll-mt-14 bg-zinc-900/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Highlights</h2>
          <p className="mt-2 font-body text-secondary-foreground">
            Imágenes de partido — paradas, distribución y dominio del área.
          </p>
          <div className="mt-10">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/25 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={HIGHLIGHTS_EMBED}
                  title="Juan Ignacio Morales — Highlights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <a
            href={HIGHLIGHTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body mt-6 inline-block text-sm font-medium text-primary underline-offset-2 hover:underline"
          >
            Ver en YouTube →
          </a>
        </div>
      </section>

      <section id="timeline" className="scroll-mt-14 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Trayectoria</h2>
          <p className="mt-2 font-body text-secondary-foreground">
            De la pirámide argentina a la Liga Premier en México.
          </p>
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
          <p className="font-body mt-2 text-secondary-foreground">Reclutamiento y consultas de medios.</p>
          <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 p-8">
            <p className="font-heading text-xl font-semibold text-foreground">Juan Ignacio Morales Albil</p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">
              Portero · Liga Premier · México y Argentina
            </p>
            <a
              href="mailto:contact@onixmedia.agency"
              className="font-body mt-4 block text-primary underline-offset-2 hover:underline"
            >
              contact@onixmedia.agency
            </a>
          </div>
        </div>
      </section>

      <LosPibesFooterES />
    </div>
  );
}
