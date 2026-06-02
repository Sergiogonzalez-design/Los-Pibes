import LosPibesNavbarEN from "@/components/LosPibesNavbarEN";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Report",
  description: "Performance report for Samir Meza.",
};

export default function PerformanceReportPageEN() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarEN backHref="/en/products" />

      <section
        className="relative min-h-screen overflow-hidden pt-52 sm:pt-60"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5,10,20,0.72), rgba(5,10,20,0.88)), url('/Nacho jugando.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
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
          <a
            href="/performance-samir-meza.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Sample Report
          </a>
          <a
            href="/performance-samir-meza.pdf"
            download
            className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
          >
            Download PDF
          </a>
          <Link
            href="/en/contact"
            className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
          >
            Contact
          </Link>
        </div>
      </div>
      </section>

      <LosPibesFooterEN />
    </div>
  );
}
