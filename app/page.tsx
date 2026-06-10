import Link from "next/link";
import CompanyLogo from "@/components/CompanyLogo";
import FlagIcon from "@/components/FlagIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Onix Media",
  },
  description:
    "Where Talent Meets Visibility. Custom websites for athletes in the Americas—stats, highlights, and your story in one site.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <CompanyLogo imageClassName="h-28 w-auto sm:h-36 md:h-44" />
        <p className="font-body text-lg font-semibold text-primary">Where Talent Meets Visibility.</p>
        <p className="font-body text-sm text-secondary-foreground">Select your language / Selecciona tu idioma</p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/en"
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-black/25 px-8 py-5 transition-colors hover:border-primary/40 hover:bg-black/40"
          >
            <FlagIcon country="us" />
            <div className="text-left">
              <p className="font-heading text-base font-semibold text-foreground group-hover:text-primary">English</p>
              <p className="font-body text-xs text-secondary-foreground">Continue in English</p>
            </div>
          </Link>
          <Link
            href="/es"
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-black/25 px-8 py-5 transition-colors hover:border-primary/40 hover:bg-black/40"
          >
            <FlagIcon country="es" />
            <div className="text-left">
              <p className="font-heading text-base font-semibold text-foreground group-hover:text-primary">Español</p>
              <p className="font-body text-xs text-secondary-foreground">Continuar en español</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
