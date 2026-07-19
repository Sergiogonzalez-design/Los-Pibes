import LosPibesNavbarEN from "@/components/LosPibesNavbarEN";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import ValueFlipCards from "@/components/ValueFlipCards";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website",
  description: "Website product overview.",
};

const websiteFaqEN = [
  {
    title: "How long does it take?",
    description:
      "We guarantee your website will be ready within 3–4 days.",
  },
  {
    title: "What information can I include?",
    description:
      "Whatever you want. Send us all the information you have and we’ll organize it the way you like.",
  },
  {
    title: "What are the advantages?",
    description:
      "Your full profile in one easy-to-share link. Looks professional for clubs, agents, and coaches. You can update stats, videos, and your career path whenever you want.",
  },
];

export default function WebsiteProductPageEN() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarEN backHref="/en/products" />

      <section className="bg-background pt-44 sm:pt-52">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
              Product
            </p>
            <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
              Website
            </h1>
            <ul className="font-body mt-6 space-y-3 text-base leading-relaxed text-secondary-foreground sm:text-lg">
              <li>• A custom website that presents your profile in one place.</li>
              <li>• Includes stats, videos, and your story with a clean structure.</li>
              <li>• Built to look professional and easy to share with coaches.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/en/examples"
                className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                View Examples
              </Link>
              <Link
                href="/en/contact"
                className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-14 max-w-3xl sm:mt-16">
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Frequently asked questions
            </h2>
            <ValueFlipCards
              values={websiteFaqEN}
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
