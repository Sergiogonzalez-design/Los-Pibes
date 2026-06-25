import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import SiteHeader from "@/components/SiteHeader";
import StatsCard from "@/components/StatsCard";
import {
  CONTACT_EMAIL,
  IONA_ROSTER,
  INSTAGRAM_URL,
  getThiagoContent,
} from "@/lib/thiago-content";

type Props = {
  locale: "en" | "es";
};

export default function ThiagoProfilePage({ locale }: Props) {
  const content = getThiagoContent(locale);
  const backHref = locale === "en" ? "/en/examples" : "/es/examples";
  const backAria = locale === "en" ? "Back to examples" : "Volver a ejemplos";
  const logoHref = locale === "en" ? "/en" : "/es";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref={backHref}
        backAriaLabel={backAria}
        menuLabel={content.menuLabel}
        badge="TC25"
        logoHref={logoHref}
        items={content.navItems}
      />

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(224,198,149,0.12), transparent 55%), radial-gradient(ellipse 60% 50% at 80% 10%, rgba(224,198,149,0.08), transparent 50%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <div className="mb-4">
              <span className="font-heading block text-4xl font-bold leading-none text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Thiago
              </span>
              <span className="font-heading block text-4xl font-bold leading-none text-gradient-gold sm:text-5xl md:text-6xl lg:text-7xl">
                Cagna
              </span>
            </div>

            <p className="font-body mb-6 text-sm uppercase tracking-[0.3em] text-primary">
              {content.tagline}
            </p>

            <p className="font-body mb-8 max-w-xl text-base leading-relaxed text-secondary-foreground md:text-lg">
              {content.bio}
            </p>

            <div className="mb-10 flex flex-nowrap gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>a]:shrink-0">
              <a
                href={IONA_ROSTER}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {content.cta.iona}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
              >
                {content.cta.instagram}
              </a>
              <a
                href="#contact"
                className="font-body inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
              >
                {content.cta.contact}
              </a>
            </div>

            <div id="hero-stats" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {content.heroStats.map((stat) => (
                <StatsCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="stats"
        className="scroll-mt-14 border-y border-white/10 bg-zinc-900/50 py-8"
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
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 font-body font-semibold text-primary">
                    {content.tableHeaders.season}
                  </th>
                  <th className="px-4 py-3 font-body font-semibold">
                    {content.tableHeaders.school}
                  </th>
                  <th className="px-4 py-3 font-body font-semibold">
                    {content.tableHeaders.conf}
                  </th>
                  <th className="px-4 py-3 text-center font-body font-semibold">
                    {content.tableHeaders.apps}
                  </th>
                  <th className="px-4 py-3 text-center font-body font-semibold">
                    {content.tableHeaders.goals}
                  </th>
                  <th className="px-4 py-3 text-center font-body font-semibold">
                    {content.tableHeaders.ast}
                  </th>
                  <th className="px-4 py-3 font-body font-semibold">
                    {content.tableHeaders.notes}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.seasons.map((s) => (
                  <tr
                    key={`${s.year}-${s.school}`}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                  >
                    <td className="px-4 py-3 font-medium text-foreground">{s.year}</td>
                    <td className="px-4 py-3 text-secondary-foreground">
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

      <section id="highlights" className="scroll-mt-14 bg-zinc-900/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {content.highlightsTitle}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.highlights.map((clip) => (
              <a
                key={clip.href}
                href={clip.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/10 bg-black/20 p-6 transition-colors hover:border-primary/50 hover:bg-black/40"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                  {clip.title}
                </h3>
                <p className="mt-2 font-body text-sm text-secondary-foreground">{clip.desc}</p>
                <span className="mt-4 inline-block font-body text-sm font-medium text-primary">
                  {content.watchYoutube}
                </span>
              </a>
            ))}
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
