import CompanyLogo from "@/components/CompanyLogo";
import LosPibesFooter from "@/components/LosPibesFooter";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samir Meza Performance Report",
  description: "Performance report PDF for Samir Meza.",
};

export default function SamirMezaPerformanceReportPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <Link
              href="/products/performance-report"
              className="shrink-0 font-body text-sm text-secondary-foreground transition-colors hover:text-primary"
              aria-label="Back to performance report"
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

      <section className="mx-auto max-w-7xl px-4 pt-28 pb-12 sm:px-6 sm:pt-32 lg:px-8">
        <iframe
          src="/performance-samir-meza.pdf"
          title="Performance Samir Meza PDF"
          className="h-[82vh] w-full rounded-xl border border-white/10"
        />
        <div className="mt-4">
          <Link
            href="/contact"
            className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact
          </Link>
        </div>
      </section>

      <LosPibesFooter />
    </div>
  );
}
