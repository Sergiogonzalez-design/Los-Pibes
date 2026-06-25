import type { ReactNode } from "react";

const HERO_IMAGE = "/jaco mason.jpeg";

export type HeroStat = { label: string; value: string };

type JacoHeroProps = {
  tagline: string;
  bio: ReactNode;
  stats: HeroStat[];
  cta: {
    gmu: string;
    siue: string;
    instagram: string;
    contact: string;
  };
  gmuRoster: string;
  siueRoster: string;
};

export default function JacoHero({
  tagline,
  bio,
  stats,
  cta,
  gmuRoster,
  siueRoster,
}: JacoHeroProps) {
  return (
    <section className="relative isolate min-h-[min(100svh,900px)] overflow-hidden border-b border-white/10">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[58%_42%] sm:bg-[55%_38%] lg:bg-[52%_36%]"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        role="img"
        aria-label="Jacobo Sanfeliu"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background from-0% via-background/90 via-[32%] to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 max-w-4xl bg-gradient-to-r from-background/95 via-background/70 via-50% to-transparent lg:via-45%"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,900px)] max-w-7xl flex-col justify-end px-4 pb-10 pt-[3.25rem] sm:px-6 sm:pb-12 sm:pt-14 lg:px-8">
        <p className="font-body mb-3 text-[0.65rem] uppercase tracking-[0.28em] text-primary sm:mb-4 sm:text-xs sm:tracking-[0.35em]">
          {tagline}
        </p>
        <h1 className="font-heading text-3xl font-bold leading-none text-foreground sm:text-5xl md:text-6xl">
          <span className="block">Jacobo</span>
          <span className="block text-gradient-gold">Sanfeliu</span>
        </h1>

        <p className="font-body mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground sm:mt-5 sm:text-lg">
          {bio}
        </p>

        <div className="mt-6 flex flex-nowrap gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-8 sm:gap-3 [&::-webkit-scrollbar]:hidden [&>a]:shrink-0">
          <a
            href={gmuRoster}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:px-5 sm:py-2.5"
          >
            {cta.gmu}
          </a>
          <a
            href={siueRoster}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10 sm:px-5 sm:py-2.5"
          >
            {cta.siue}
          </a>
          <a
            href="https://www.instagram.com/jacosanfeliu/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10 sm:px-5 sm:py-2.5"
          >
            {cta.instagram}
          </a>
          <a
            href="#contact"
            className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10 sm:px-5 sm:py-2.5"
          >
            {cta.contact}
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-black/40 p-3 text-center backdrop-blur-sm sm:bg-black/25 sm:p-4 sm:backdrop-blur-none"
            >
              <p className="font-body text-[0.65rem] uppercase tracking-widest text-primary sm:text-xs">
                {s.label}
              </p>
              <p className="mt-1.5 font-heading text-lg font-bold text-foreground sm:mt-2 sm:text-xl">
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
