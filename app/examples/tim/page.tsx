import type { Metadata } from "next";
import CompanyLogo from "@/components/CompanyLogo";
import FlagIcon from "@/components/FlagIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tim Timchenko — Select Language",
  description:
    "Tim Timchenko — Defender · USL League One. Select your language.",
};

export default function TimLanguageSelector() {
  return (
    <div
      className="relative flex min-h-screen flex-col"
      style={{ backgroundColor: "#0c1117" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-[left_25%] sm:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.55) 100%), url('/Tim Timchenko vertical 2.png')",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-[center_20%] sm:block"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.85) 100%), url('/Tim Timchenko horizontal 1.png')",
        }}
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

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="px-4 pt-2 text-center sm:flex sm:flex-1 sm:flex-col sm:items-center sm:justify-center sm:pt-0">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
            Defender · USL League One
          </p>
          <h1 className="font-heading mt-4 text-5xl font-bold leading-none text-foreground sm:text-7xl">
            <span className="block">Tim</span>
            <span className="block text-gradient-gold">Timchenko</span>
          </h1>
          <p className="font-body mt-3 text-sm text-secondary-foreground">
            Westchester SC · Iona University
          </p>
        </div>

        <div className="mt-auto px-4 pb-6 pt-10 sm:pb-10">
          <p className="font-body text-center text-sm uppercase tracking-widest text-secondary-foreground/60">
            Select language · Elige idioma
          </p>
          <div className="mx-auto mt-3 flex max-w-md overflow-hidden rounded-xl border border-white/15 bg-black/40 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <Link
              href="/en/examples/tim"
              className="group flex flex-1 flex-col items-center justify-center gap-2 border-r border-white/15 px-6 py-5 transition-colors hover:bg-black/30"
            >
              <FlagIcon country="us" />
              <span className="font-heading text-lg font-bold text-foreground transition-colors group-hover:text-primary sm:text-xl">
                English
              </span>
            </Link>
            <Link
              href="/es/examples/tim"
              className="group flex flex-1 flex-col items-center justify-center gap-2 px-6 py-5 transition-colors hover:bg-black/30"
            >
              <FlagIcon country="es" />
              <span className="font-heading text-lg font-bold text-foreground transition-colors group-hover:text-primary sm:text-xl">
                Español
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
