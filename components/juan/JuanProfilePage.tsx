import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import SiteHeader from "@/components/SiteHeader";
import {
  HIGHLIGHTS_EMBED,
  HIGHLIGHTS_URL,
  TRANSFERMARKT,
  getJuanContent,
  seasons,
} from "@/lib/juan-content";

type Props = {
  locale: "en" | "es";
};

export default function JuanProfilePage({ locale }: Props) {
  const content = getJuanContent(locale);
  const backHref = locale === "en" ? "/en/examples" : "/es/examples";
  const backAria = locale === "en" ? "Back to examples" : "Volver a ejemplos";
  const logoHref = locale === "en" ? "/en" : "/es";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref={backHref}
        backAriaLabel={backAria}
        menuLabel={content.menuLabel}
        badge="JIM1"
        logoHref={logoHref}
        items={content.navItems}
      />

      <section className="relative min-h-screen overflow-hidden bg-black pt-28 pb-20 sm:pt-36 sm:pb-28">
        <img
          src="/Juan mobile.jpeg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-[48%_35%] brightness-110 contrast-105 sm:hidden"
        />
        <img
          src="/Juan accion.jpeg"
          alt=""
          aria-hidden
          className="absolute inset-0 hidden h-full w-full object-cover object-[50%_center] brightness-110 contrast-105 sm:block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/55 to-background/80 sm:bg-gradient-to-r sm:from-background sm:via-background/75 sm:to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary [text-shadow:0_2px_8px_rgba(0,0,0,0.9)]">
            {content.tagline}
          </p>
          <h1 className="font-heading text-4xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl">
            <span className="block [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">Juan Ignacio</span>
            <span className="block text-gradient-gold">Morales</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.95)] md:text-xl">
            {content.bio1}
          </p>
          <p className="font-body mt-4 max-w-2xl text-lg font-medium leading-relaxed text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.95)] md:text-xl">
            {content.bio2}
          </p>
          <div className="mt-10 flex flex-nowrap gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>a]:shrink-0">
            <a
              href={TRANSFERMARKT}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {content.cta.transfermarkt}
            </a>
            <a
              href={HIGHLIGHTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              {content.cta.highlights}
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
          {content.infoItems.map((item) => (
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
            {content.seasonsTitle}
          </h2>
          <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 font-body font-semibold text-primary">
                    {content.tableHeaders.season}
                  </th>
                  <th className="px-4 py-3 font-body font-semibold">{content.tableHeaders.club}</th>
                  <th className="px-4 py-3 font-body font-semibold">
                    {content.tableHeaders.division}
                  </th>
                  <th className="px-4 py-3 font-body font-semibold text-center">
                    {content.tableHeaders.apps}
                  </th>
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
          <p className="mt-4 font-body text-xs text-zinc-500">{content.appsNote}</p>
        </div>
      </section>

      <section id="highlights" className="scroll-mt-14 bg-zinc-900/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {content.highlightsTitle}
          </h2>
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
            {content.watchYoutube}
          </a>
        </div>
      </section>

      <section id="timeline" className="scroll-mt-14 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {content.timelineTitle}
          </h2>
          <ol className="relative mt-12 space-y-8 border-l border-primary/40 pl-8">
            {content.milestones.map((m) => (
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
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {content.contactTitle}
          </h2>
          <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 p-8">
            <p className="font-heading text-xl font-semibold text-foreground">{content.contactName}</p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">{content.contactRole}</p>
            <a
              href={`mailto:${content.contactEmail}`}
              className="font-body mt-4 block text-primary underline-offset-2 hover:underline"
            >
              {content.contactEmail}
            </a>
          </div>
        </div>
      </section>

      {locale === "en" ? <LosPibesFooterEN /> : <LosPibesFooterES />}
    </div>
  );
}
