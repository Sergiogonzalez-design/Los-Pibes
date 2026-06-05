import LosPibesNavbarEN from "@/components/LosPibesNavbarEN";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Highlight Video",
  description: "Highlight video product overview.",
};

export default function HighlightVideoPageEN() {
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
      </div>
      </section>

      <LosPibesFooterEN />
    </div>
  );
}
