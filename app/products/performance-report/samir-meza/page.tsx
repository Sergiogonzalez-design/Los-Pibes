import LosPibesNavbar from "@/components/LosPibesNavbar";
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
      <LosPibesNavbar backHref="/products/performance-report" />

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
