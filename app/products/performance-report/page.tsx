import CompanyLogo from "@/components/CompanyLogo";
import LosPibesFooter from "@/components/LosPibesFooter";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Report",
  description: "Performance report for Samir Meza.",
};

export default function PerformanceReportPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <Link
              href="/products"
              className="shrink-0 font-body text-sm text-secondary-foreground transition-colors hover:text-primary"
              aria-label="Back to products"
            >
              ←
            </Link>
            <CompanyLogo priority />
          </div>
          <ul className="flex max-w-[min(100%,42rem)] flex-1 flex-wrap items-center justify-end gap-x-3 gap-y-2 text-[11px] font-medium text-secondary-foreground sm:text-xs md:max-w-none md:text-sm">
            <li>
              <Link href="/mission" className="transition-colors hover:text-primary">
                Mission
              </Link>
            </li>
            <li>
              <Link href="/values" className="transition-colors hover:text-primary">
                Values
              </Link>
            </li>
            <li>
              <Link href="/products" className="transition-colors hover:text-primary">
                Product
              </Link>
            </li>
            <li>
              <Link href="/examples" className="transition-colors hover:text-primary">
                Examples
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-4 pt-44 pb-16 sm:px-6 sm:pt-52 lg:px-8">
        <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
          Product
        </p>
        <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
          Performance Report
        </h1>
        <ul className="font-body mt-6 max-w-3xl space-y-3 text-base leading-relaxed text-secondary-foreground sm:text-lg">
          <li>• A clear snapshot of the player profile and career progression.</li>
          <li>• Key season metrics organized for coaches, scouts, and clubs.</li>
          <li>• A shareable document that supports recruiting conversations.</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/products/performance-report/samir-meza"
            className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Sample Report
          </Link>
          <a
            href="/performance-samir-meza.pdf"
            download
            className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
          >
            Download PDF
          </a>
          <Link
            href="/contact"
            className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
          >
            Contact
          </Link>
        </div>
      </section>

      <LosPibesFooter />
    </div>
  );
}
