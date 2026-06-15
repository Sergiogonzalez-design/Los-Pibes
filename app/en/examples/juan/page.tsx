import type { Metadata } from "next";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import SiteHeader, { type NavItem } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Juan Ignacio Morales — Goalkeeper",
  description:
    "Juan Ignacio Morales — goalkeeper from Mexico City. Liga Premier with Cañoneros FC. Career in Argentina and Mexico.",
};

const TRANSFERMARKT =
  "https://www.transfermarkt.es/juan-ignacio-morales/profil/spieler/1019759";
const HIGHLIGHTS_URL = "https://www.youtube.com/watch?v=Wh45fAmB2bI";
const HIGHLIGHTS_EMBED = "https://www.youtube.com/embed/Wh45fAmB2bI";

const navItems: NavItem[] = [
  { type: "anchor", href: "#stats", label: "Stats" },
  { type: "anchor", href: "#highlights", label: "Highlights" },
  { type: "anchor", href: "#timeline", label: "Career" },
  { type: "anchor", href: "#contact", label: "Contact" },
];

const infoItems = [
  { k: "Full name", v: "Juan Ignacio Morales Albil" },
  { k: "Date of birth", v: "16 April 2001" },
  { k: "Height / Weight", v: "180 cm · 78 kg" },
  { k: "Position", v: "Goalkeeper" },
  { k: "Strong foot", v: "Right" },
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
    year: "2026–present",
    title: "Cañoneros FC — Liga Premier",
    body: "Signed with Cañoneros FC in January 2026. Regular starter in Mexico's Liga Premier with 10 appearances and a 1.00 goals-against average in his first campaign.",
  },
  {
    year: "2024–2026",
    title: "Estudiantes Unidos — Federal B",
    body: "Established himself as a reliable starter in Argentina's fourth tier, logging 18 appearances with a career-best 0.94 goals-against average.",
  },
  {
    year: "2021–2023",
    title: "Argentina — Federal A & Primera Nacional",
    body: "Developed through Argentino de Quilmes (15 apps), Quilmes in Primera Nacional, and Boca Unidos — building experience across multiple tiers of Argentine football.",
  },
  {
    year: "Background",
    title: "Mexico City · Dual nationality",
    body: "Born in Mexico City with Mexican and Argentine nationality. Comes from a football family — son of retired goalkeeper Ángel Morales, nephew of Carlos Morales, and brother of Matías Morales.",
  },
];

export default function JuanENPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref="/en/examples"
        backAriaLabel="Back to examples"
        menuLabel="Menu"
        badge="JIM1"
        logoHref="/en"
        items={navItems}
      />

      <section className="relative min-h-[70vh] overflow-hidden bg-black pt-28 pb-20 sm:min-h-[75vh] sm:pt-36 sm:pb-28">
        <img
          src="/Juan mobile.jpeg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-[35%_35%] brightness-110 contrast-105 sm:hidden"
        />
        <img
          src="/Juan accion.jpeg"
          alt=""
          aria-hidden
          className="absolute inset-0 hidden h-full w-full object-cover object-[38%_center] brightness-110 contrast-105 sm:block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/55 to-background/80 sm:bg-gradient-to-r sm:from-background sm:via-background/75 sm:to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary [text-shadow:0_2px_8px_rgba(0,0,0,0.9)]">
            Goalkeeper · #1 · Liga Premier
          </p>
          <h1 className="font-heading text-4xl font-bold leading-none text-foreground [text-shadow:0_2px_12px_rgba(0,0,0,0.9)] sm:text-6xl md:text-7xl">
            <span className="block">Juan Ignacio</span>
            <span className="block text-gradient-gold">Morales</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.95)] md:text-xl">
            Juan Ignacio Morales is a goalkeeper from Mexico City with Mexican and Argentine nationality.
            After developing in the Argentine pyramid — from Federal B to Primera Nacional — he joined
            Cañoneros FC in Liga Premier, where he wears the #1 shirt as a regular starter.
          </p>
          <p className="font-body mt-4 max-w-2xl text-lg font-medium leading-relaxed text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.95)] md:text-xl">
            A product of a goalkeeper family, Morales has logged 46 senior appearances across Argentina
            and Mexico with a career goals-against average of 1.04.
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
              Contact
            </a>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: "46", l: "Career Apps" },
              { v: "1.04", l: "Career GAA" },
              { v: "0.94", l: "Best GAA" },
              { v: "Cañoneros", l: "Current Club" },
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
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Season breakdown</h2>
          <p className="mt-2 max-w-3xl font-body text-secondary-foreground">
            Senior league statistics across Argentina and Mexico.{" "}
            <a
              href={TRANSFERMARKT}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-2 hover:underline"
            >
              Transfermarkt profile
            </a>
          </p>
          <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 font-body font-semibold text-primary">Season</th>
                  <th className="px-4 py-3 font-body font-semibold">Club</th>
                  <th className="px-4 py-3 font-body font-semibold">Division</th>
                  <th className="px-4 py-3 font-body font-semibold text-center">Apps</th>
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
          <p className="mt-4 font-body text-xs text-zinc-500">Apps = league appearances</p>
        </div>
      </section>

      <section id="highlights" className="scroll-mt-14 bg-zinc-900/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Highlights</h2>
          <p className="mt-2 font-body text-secondary-foreground">
            Match footage — shot-stopping, distribution, and command of the box.
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
            Watch on YouTube →
          </a>
        </div>
      </section>

      <section id="timeline" className="scroll-mt-14 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Career timeline</h2>
          <p className="mt-2 font-body text-secondary-foreground">
            From the Argentine pyramid to Liga Premier in Mexico.
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
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Contact</h2>
          <p className="font-body mt-2 text-secondary-foreground">Recruiting and media inquiries.</p>
          <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 p-8">
            <p className="font-heading text-xl font-semibold text-foreground">Juan Ignacio Morales Albil</p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">
              Goalkeeper · Liga Premier · Mexico & Argentina
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

      <LosPibesFooterEN />
    </div>
  );
}
