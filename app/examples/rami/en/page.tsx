import type { Metadata } from "next";
import LosPibesFooter from "@/components/LosPibesFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  RAMI_CONTACT_EMAIL,
  RAMI_FULL_GAME_URL,
  RAMI_HIGHLIGHTS_URL,
  RAMI_PHOTO_URL,
  RAMI_REPORT_PDF,
  getRamiPageContent,
} from "@/lib/onix-player/rami-content";

export const metadata: Metadata = {
  title: "Pablo Ramirez Moreno — Center Back",
  description:
    "Pablo 'Rami' Ramirez Moreno — Spanish center back. Fuenlabrada · Leganés B · Getafe CF. Career stats, timeline, and highlights.",
};

export default function RamiEnPage() {
  const content = getRamiPageContent("en");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref="/examples/rami"
        backAriaLabel="Back to language selector"
        menuLabel="Menu"
        badge="PR15"
        items={[
          {
            type: "group",
            label: "Stats",
            links: [
              { href: "/examples/rami/en/stats/2025-26", label: "2025/26" },
              { href: "/examples/rami/en/stats/2024-25", label: "2024/25" },
            ],
          },
          { type: "anchor", href: "#seasons", label: "Seasons" },
          { type: "anchor", href: "#highlights", label: "Highlights" },
          { type: "anchor", href: "#full-game", label: "Full Game" },
          { type: "anchor", href: "#report", label: "Report" },
          { type: "anchor", href: "#career", label: "Career" },
          { type: "anchor", href: "#contact", label: "Contact" },
        ]}
      />

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url('${RAMI_PHOTO_URL}')`, backgroundPosition: "center 20%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">{content.tagline}</p>
          <h1 className="font-heading text-4xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Pablo</span>
            <span className="block text-gradient-gold">Ramirez</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            {content.bio}
          </p>

          <div className="mt-10 flex flex-nowrap gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>a]:shrink-0">
            <a
              href="https://es.besoccer.com/jugador/p-ramirez-1005319"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {content.cta.besoccer}
            </a>
            <a
              href="https://www.transfermarkt.es/pablo-ramirez/profil/spieler/979355"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              {content.cta.transfermarkt}
            </a>
            <a
              href="https://www.instagram.com/ramijr5/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              {content.cta.instagram}
            </a>
            <a
              href="#contact"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              {content.cta.contact}
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {content.heroStats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-black/25 p-5 text-center"
              >
                <p className="font-body text-xs uppercase tracking-widest text-primary">{s.label}</p>
                <p className="mt-2 font-heading text-xl font-bold text-foreground">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="scroll-mt-24 border-y border-white/10 bg-zinc-900/50 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-5 sm:px-6 lg:px-8">
          {content.infoItems.map((item) => (
            <div key={item.k} className="text-center">
              <p className="font-body text-xs uppercase tracking-widest text-primary">{item.k}</p>
              <p className="mt-1 font-body text-sm font-medium text-foreground">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="seasons" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">{content.seasonsTitle}</h2>
          <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full font-body text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-black/30">
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">
                    {content.tableHeaders.season}
                  </th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">
                    {content.tableHeaders.club}
                  </th>
                  <th className="hidden px-4 py-3 text-left text-xs uppercase tracking-widest text-primary sm:table-cell">
                    {content.tableHeaders.league}
                  </th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">
                    {content.tableHeaders.gp}
                  </th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">
                    {content.tableHeaders.gs}
                  </th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">
                    {content.tableHeaders.goals}
                  </th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">
                    {content.tableHeaders.minutes}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.seasons.map((s, i) => (
                  <tr key={i} className="border-b border-white/5 bg-black/10 transition-colors hover:bg-black/25">
                    <td className="px-4 py-3 text-secondary-foreground">{s.season}</td>
                    <td className="px-4 py-3 font-medium text-foreground">{s.club}</td>
                    <td className="hidden px-4 py-3 text-secondary-foreground sm:table-cell">{s.league}</td>
                    <td className="px-4 py-3 text-center text-foreground">{s.gp}</td>
                    <td className="px-4 py-3 text-center text-foreground">{s.gs}</td>
                    <td className="px-4 py-3 text-center font-semibold text-primary">{s.goals}</td>
                    <td className="px-4 py-3 text-center text-foreground">{s.minutes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="highlights" className="scroll-mt-24 bg-zinc-900/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">{content.highlightsTitle}</h2>
          <div className="mt-10">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/25 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={RAMI_HIGHLIGHTS_URL.replace("watch?v=", "embed/")}
                  title="Pablo Ramirez Moreno — Highlights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="full-game" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">{content.fullGameTitle}</h2>
          <div className="mt-10">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/25 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={RAMI_FULL_GAME_URL.replace("watch?v=", "embed/")}
                  title="Pablo Ramirez Moreno — Full game vs Coria (Matchday 19, 2ª RFEF)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="report" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">{content.reportTitle}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RAMI_REPORT_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {content.reportView}
            </a>
            <a
              href={RAMI_REPORT_PDF}
              download
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              {content.reportDownload}
            </a>
          </div>
        </div>
      </section>

      <section id="career" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">{content.careerTitle}</h2>
          <ol className="mt-10 space-y-6">
            {content.timeline.map((t, i) => (
              <li key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                  {i < content.timeline.length - 1 && <div className="mt-1 w-px flex-1 bg-white/10" />}
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

      <section id="contact" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">{content.contactTitle}</h2>
          <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 p-8">
            <p className="font-heading text-xl font-semibold text-foreground">Pablo Ramirez Moreno</p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">{content.contactRole}</p>
            <a
              href={`mailto:${RAMI_CONTACT_EMAIL}`}
              className="font-body mt-4 block text-primary underline-offset-2 hover:underline"
            >
              {RAMI_CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <LosPibesFooter />
    </div>
  );
}
