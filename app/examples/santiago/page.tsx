import type { Metadata } from "next";
import CompanyLogo from "@/components/CompanyLogo";
import FlagIcon from "@/components/FlagIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Santiago Marín Gutiérrez — Select Language",
  description:
    "Santiago Marín Gutiérrez — Midfielder · NCAA Division I · CCSU / Creighton. Select your language.",
};

export default function SantiagoLanguageSelector() {
  return (
    <div
      className="relative flex min-h-screen flex-col"
      style={{ backgroundColor: "#0c1117" }}
    >
      {/* mobile background */}
      <div
        className="absolute inset-0 bg-cover bg-[center_25%] sm:hidden"
        style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.85) 100%), url('/Santiago marin 3.jpg')" }}
        aria-hidden
      />
      {/* desktop background */}
      <div
        className="absolute inset-0 hidden bg-cover bg-[center_25%] sm:block"
        style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.85) 100%), url('/santiago marin 1.jpg')" }}
        aria-hidden
      />
      <header className="relative z-10 flex items-center gap-4 px-6 py-5 sm:px-10">
        <Link
          href="/examples"
          className="font-body text-sm text-secondary-foreground transition-colors hover:text-primary"
          aria-label="Back to examples"
        >
          ←
        </Link>
        <CompanyLogo priority />
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-16 text-center">
        <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
          Midfielder · NCAA Division I
        </p>
        <h1 className="font-heading mt-4 text-5xl font-bold leading-none text-foreground sm:text-7xl">
          <span className="block">Santiago</span>
          <span className="block text-gradient-gold">Marín Gutiérrez</span>
        </h1>
        <p className="font-body mt-3 text-sm text-secondary-foreground">
          CCSU · Creighton University
        </p>

        <p className="font-body mt-10 text-sm uppercase tracking-widest text-secondary-foreground/60">
          Select language · Elige idioma
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/en/examples/santiago"
            className="group flex min-w-[180px] flex-col items-center gap-2 rounded-2xl border border-white/15 bg-black/30 px-10 py-7 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-black/50"
          >
            <FlagIcon country="us" />
            <span className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
              English
            </span>
          </Link>

          <Link
            href="/es/examples/santiago"
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
