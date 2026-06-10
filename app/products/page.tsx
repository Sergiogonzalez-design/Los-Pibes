import LosPibesNavbar from "@/components/LosPibesNavbar";
import LosPibesFooter from "@/components/LosPibesFooter";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description: "Explore Onix Media products for athletes.",
};

const products = [
  { href: "/products/highlight-video", label: "Highlight Video" },
  { href: "/products/performance-report", label: "Performance Report" },
  { href: "/products/website", label: "Website" },
] as const;

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbar backHref="/" />

      <section
        className="relative min-h-screen overflow-hidden pt-36 sm:pt-44"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5,10,20,0.65), rgba(5,10,20,0.82)), url('/Mati Sergi celebration.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col px-4 pb-16 sm:px-6 lg:px-8">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
            Onix Media
          </p>
          <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Product
          </h1>
          <ul className="mt-10 grid flex-1 auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <li key={product.href}>
                <a
                  href={product.href}
                  className="font-body flex h-full items-center rounded-xl border border-white/10 bg-black/35 px-6 py-6 text-base font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {product.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contact
            </Link>
            <a
              href="https://www.instagram.com/onixmedia.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <LosPibesFooter />
    </div>
  );
}
