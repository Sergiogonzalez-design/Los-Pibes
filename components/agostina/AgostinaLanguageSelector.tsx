import CompanyLogo from "@/components/CompanyLogo";
import FlagIcon from "@/components/FlagIcon";
import { getAgostinaContent } from "@/lib/agostina-content";
import Link from "next/link";

export default function AgostinaLanguageSelector() {
  const content = getAgostinaContent("en");

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1520] via-[#0c1117] to-[#0c1824]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 85% 55% at 65% 15%, rgba(224, 198, 149, 0.22), transparent 55%), radial-gradient(ellipse 50% 45% at 15% 75%, rgba(56, 189, 248, 0.12), transparent 50%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      <header className="relative z-10 flex items-center gap-4 px-6 py-5 sm:px-10">
        <Link
          href="/examples"
          className="font-body text-sm text-secondary-foreground transition-colors hover:text-primary"
          aria-label={content.selectorBackAria}
        >
          ←
        </Link>
        <CompanyLogo priority />
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-16 text-center">
        <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
          {content.selectorTagline}
        </p>
        <h1 className="font-heading mt-4 text-5xl font-bold leading-none text-foreground sm:text-7xl">
          <span className="block">Agostina</span>
          <span className="block text-gradient-gold">Holzheier</span>
        </h1>
        <p className="font-body mt-3 text-sm text-secondary-foreground">
          {content.selectorSubtitle}
        </p>

        <p className="font-body mt-10 text-sm uppercase tracking-widest text-secondary-foreground/60">
          {content.selectorPrompt}
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/en/examples/agostina"
            className="group flex min-w-[180px] flex-col items-center gap-2 rounded-2xl border border-white/15 bg-black/30 px-10 py-7 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-black/50"
          >
            <FlagIcon country="us" />
            <span className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
              English
            </span>
          </Link>

          <Link
            href="/es/examples/agostina"
            className="group flex min-w-[180px] flex-col items-center gap-2 rounded-2xl border border-white/15 bg-black/30 px-10 py-7 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-black/50"
          >
            <FlagIcon country="es" />
            <span className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
              Español
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
