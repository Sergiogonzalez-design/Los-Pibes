import LosPibesNavbarEN from "@/components/LosPibesNavbarEN";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import ValueFlipCards from "@/components/ValueFlipCards";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Highlight Video",
  description: "Highlight video product overview.",
};

const highlightFaqEN = [
  {
    title: "How long does it take?",
    description: "Your highlight video will be ready within 1 week.",
  },
  {
    title: "What information can I include?",
    description: "All the videos you want.",
  },
  {
    title: "What are the advantages?",
    description:
      "You’ll get a professional highlight video where your best actions are strategically organized to catch the attention of scouts and coaches.",
  },
];

export default function HighlightVideoPageEN() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarEN backHref="/en/products" />

      <section className="bg-background pt-44 sm:pt-52">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
                Product
              </p>
              <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
                Highlight Video
              </h1>
              <ul className="font-body mt-6 max-w-3xl space-y-3 text-base leading-relaxed text-secondary-foreground sm:text-lg">
                <li>• A clean video library that shows key moments by player.</li>
                <li>• Built so coaches and scouts can review clips quickly.</li>
                <li>• One structured place for all highlight videos on the site.</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/en/products/highlight-video/all"
                  className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Highlight Video
                </Link>
                <Link
                  href="/en/contact"
                  className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/35 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/2fs-Gborb0o"
                  title="Highlight Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="mt-14 max-w-3xl sm:mt-16">
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Frequently asked questions
            </h2>
            <ValueFlipCards
              values={highlightFaqEN}
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
