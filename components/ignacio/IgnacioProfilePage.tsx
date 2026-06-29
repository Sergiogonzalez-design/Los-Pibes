import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import SiteHeader from "@/components/SiteHeader";
import {
  BESOCCER_PROFILE,
  CONTACT_EMAIL,
  EL_BALON_PROFILE,
  GPS_REPORT_PDF,
  HERO_IMAGE,
  INSTAGRAM_URL,
  getIgnacioContent,
} from "@/lib/ignacio-content";

type Props = {
  locale: "en" | "es";
};

export default function IgnacioProfilePage({ locale }: Props) {
  const content = getIgnacioContent(locale);
  const backHref = locale === "en" ? "/en/examples" : "/es/examples";
  const backAria = locale === "en" ? "Back to examples" : "Volver a ejemplos";
  const logoHref = locale === "en" ? "/en" : "/es";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref={backHref}
        backAriaLabel={backAria}
        menuLabel={content.menuLabel}
        badge="IA17"
        logoHref={logoHref}
        items={content.navItems}
      />

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-[center_30%]"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          role="img"
          aria-label="Ignacio Atienzar"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">
            {content.tagline}
          </p>
          <h1 className="font-heading text-4xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Ignacio</span>
            <span className="block text-gradient-gold">Atienzar</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            {content.bio}
          </p>

          <div className="mt-10 flex flex-nowrap gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>a]:shrink-0">
            <a
              href={EL_BALON_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {content.cta.elBalon}
            </a>
            <a
              href={BESOCCER_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              {content.cta.besoccer}
            </a>
            <a
              href={INSTAGRAM_URL}
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

          <div id="hero-stats" className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {content.heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-black/25 p-5 text-center"
              >
                <p className="font-body text-xs uppercase tracking-widest text-primary">
                  {stat.label}
                </p>
                <p className="mt-2 font-heading text-xl font-bold text-foreground">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stats"
        className="scroll-mt-24 border-y border-white/10 bg-zinc-900/50 py-8"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-5 sm:px-6 lg:px-8">
          {content.infoItems.map((item) => (
            <div key={item.k} className="text-center">
              <p className="font-body text-xs uppercase tracking-widest text-primary">
                {item.k}
              </p>
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
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 font-body font-semibold text-primary">
                    {content.tableHeaders.season}
                  </th>
                  <th className="px-4 py-3 font-body font-semibold">
                    {content.tableHeaders.club}
                  </th>
                  <th className="px-4 py-3 text-center font-body font-semibold">
                    {content.tableHeaders.apps}
                  </th>
                  <th className="px-4 py-3 text-center font-body font-semibold">
                    {content.tableHeaders.starts}
                  </th>
                  <th className="px-4 py-3 text-center font-body font-semibold">
                    {content.tableHeaders.minutes}
                  </th>
                  <th className="px-4 py-3 text-center font-body font-semibold">
                    {content.tableHeaders.goals}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.seasons.map((s) => (
                  <tr
                    key={`${s.year}-${s.club}`}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                  >
                    <td className="px-4 py-3 font-medium text-foreground">{s.year}</td>
                    <td className="px-4 py-3 text-secondary-foreground">
                      <a
                        href={s.clubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary underline-offset-2 hover:underline"
                      >
                        {s.club}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-center">{s.apps}</td>
                    <td className="px-4 py-3 text-center">{s.starts}</td>
                    <td className="px-4 py-3 text-center">{s.minutes}</td>
                    <td className="px-4 py-3 text-center">{s.goals}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="games" className="scroll-mt-14 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {content.gamesTitle}
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {content.highlightVideo.sectionTitle}
              </h3>
              <p className="font-body mt-1 text-sm text-secondary-foreground">
                {content.highlightVideo.label}
              </p>
              <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/25 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${content.highlightVideo.youtubeId}`}
                    title={content.highlightVideo.label}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
              <a
                href={content.highlightVideo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body mt-4 inline-block text-sm font-medium text-primary underline-offset-2 hover:underline"
              >
                {content.watchOnYoutube}
              </a>
            </div>

            {content.matchVideos.map((match) => (
              <div key={match.youtubeId}>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {match.sectionTitle}
                </h3>
                <p className="font-body mt-1 text-sm text-secondary-foreground">{match.label}</p>
                <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/25 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${match.youtubeId}`}
                      title={match.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
                <a
                  href={match.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body mt-4 inline-block text-sm font-medium text-primary underline-offset-2 hover:underline"
                >
                  {content.watchOnYoutube}
                </a>
              </div>
            ))}
          </div>

          <div id="gps-report" className="mt-10 scroll-mt-24">
            <h3 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              {content.gpsReportTitle}
            </h3>
            <div className="mt-4 flex flex-nowrap gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>a]:shrink-0">
              <a
                href={GPS_REPORT_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {content.viewPdf}
              </a>
              <a
                href={GPS_REPORT_PDF}
                download="Ignacio Atienzar GPS Report.pdf"
                className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
              >
                {content.downloadPdf}
              </a>
            </div>
          </div>
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
            <p className="font-heading text-xl font-semibold text-foreground">
              {content.contactName}
            </p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">
              {content.contactRole}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-body mt-4 block text-primary underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      {locale === "en" ? <LosPibesFooterEN /> : <LosPibesFooterES />}
    </div>
  );
}
