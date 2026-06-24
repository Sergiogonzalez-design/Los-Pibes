import LosPibesNavbarEN from "@/components/LosPibesNavbarEN";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website",
  description: "Website product overview.",
};

export default function WebsiteProductPageEN() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarEN backHref="/en/products" />

      <section
        className="relative min-h-screen overflow-hidden pt-44 sm:pt-52"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5,10,20,0.72), rgba(5,10,20,0.88)), url('/Nacho jugando.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
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
      </div>
      </section>

      <LosPibesFooterEN />
    </div>
  );
}
