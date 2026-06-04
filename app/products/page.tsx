import CompanyLogo from "@/components/CompanyLogo";
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
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <Link
              href="/"
              className="shrink-0 font-body text-sm text-secondary-foreground transition-colors hover:text-primary"
              aria-label="Back to home"
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
              href="https://www.instagram.com/onixmediafutbol/"
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
