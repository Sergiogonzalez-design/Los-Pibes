import LosPibesNavbarEN from "@/components/LosPibesNavbarEN";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import ValueFlipCards from "@/components/ValueFlipCards";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Report",
  description: "Performance report for Samir Meza.",
};

const reportFaqEN = [
  {
    title: "How long does it take?",
    description: "Your performance report will be ready within 1–2 days.",
  },
  {
    title: "What information can I include?",
    description: "Key statistics and a highlight video.",
  },
  {
    title: "What are the advantages?",
    description:
      "It’s where your most important information lives in a professional PDF—so it’s very easy to share with clubs, scouts, and coaches.",
  },
];

export default function PerformanceReportPageEN() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarEN backHref="/en/products" />

      <section className="bg-background pt-44 sm:pt-52">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
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

          <div className="mt-14 max-w-3xl sm:mt-16">
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Frequently asked questions
            </h2>
            <ValueFlipCards
              values={reportFaqEN}
              flipHint="Tap to flip"
              className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
              cardClassName="h-[200px] sm:h-[220px] md:h-[240px]"
            />
          </div>
        </div>
      </section>

      <LosPibesFooterEN />
    </div>
  );
}
