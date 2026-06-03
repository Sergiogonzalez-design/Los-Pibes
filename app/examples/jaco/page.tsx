import type { Metadata } from "next";
import CompanyLogo from "@/components/CompanyLogo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jacobo Sanfeliu — Select Language",
  description: "Jacobo Sanfeliu — Striker. Select your language.",
};

export default function JacoLanguageSelector() {
  return (
    <div
      className="relative flex min-h-screen flex-col"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.85) 100%), url('/Jaco jugando.jpg')",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
      }}
    >
      <header className="flex items-center gap-4 px-6 py-5 sm:px-10">
        <Link
          href="/examples"
          className="font-body text-sm text-secondary-foreground transition-colors hover:text-primary"
          aria-label="Back to examples"
        >
          ←
        </Link>
        <CompanyLogo priority />
        <span className="font-body text-sm font-semibold text-secondary-foreground">JS7</span>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center px-4 pb-16 text-center">
        <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
          Striker · Delantero
        </p>
        <h1 className="font-heading mt-4 text-5xl font-bold leading-none text-foreground sm:text-7xl">
          <span className="block">Jacobo</span>
          <span className="block text-gradient-gold">Sanfeliu</span>
        </h1>
        <p className="font-body mt-3 text-sm text-secondary-foreground">
          George Mason · SIUE · Barcelona
        </p>

        <p className="font-body mt-10 text-sm uppercase tracking-widest text-secondary-foreground/60">
          Select language · Elige idioma
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/examples/jaco/en"
            className="group flex min-w-[180px] flex-col items-center gap-2 rounded-2xl border border-white/15 bg-black/30 px-10 py-7 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-black/50"
          >
            <span className="text-3xl">🇺🇸</span>
            <span className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
              English
            </span>
          </Link>

          <Link
            href="/examples/jaco/es"
            className="group flex min-w-[180px] flex-col items-center gap-2 rounded-2xl border border-white/15 bg-black/30 px-10 py-7 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-black/50"
          >
            <span className="text-3xl">🇪🇸</span>
            <span className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
              Español
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
