import CompanyLogo from "@/components/CompanyLogo";
import Link from "next/link";

const nav = [
  { href: "/es/mission", label: "Misión" },
  { href: "/es/values", label: "Valores" },
  { href: "/es/products", label: "Producto" },
  { href: "/es/examples", label: "Ejemplos" },
  { href: "/es/contact", label: "Contacto" },
];

const productLinks = [
  { href: "/es/products/highlight-video", label: "Video de Highlights" },
  { href: "/es/products/performance-report", label: "Informe de Rendimiento" },
  { href: "/es/products/website", label: "Sitio Web" },
];

const exampleLinks = [
  { href: "/es/examples#premium", label: "Premium" },
  { href: "/es/examples#basic", label: "Basic" },
];

export default function LosPibesNavbarES({ backHref }: { backHref?: string } = {}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-4">
          {backHref && (
            <Link
              href={backHref}
              className="shrink-0 font-body text-sm text-secondary-foreground transition-colors hover:text-primary"
              aria-label="Volver"
            >
              ←
            </Link>
          )}
          <CompanyLogo priority href="/es" />
        </div>
        <ul className="flex max-w-[min(100%,42rem)] flex-1 flex-wrap items-center justify-end gap-x-3 gap-y-2 text-[11px] font-medium text-secondary-foreground sm:text-xs md:max-w-none md:text-sm">
          {nav.map((item) => {
            if (item.label === "Producto") {
              return (
                <li key={item.href} className="group relative">
                  <a
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                  <ul className="invisible absolute left-1/2 top-full z-20 mt-3 w-56 -translate-x-1/2 rounded-xl border border-white/10 bg-background/95 p-2 opacity-0 shadow-xl backdrop-blur-md transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {productLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="block rounded-lg px-3 py-2 text-left text-xs text-secondary-foreground transition-colors hover:bg-white/5 hover:text-primary md:text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            if (item.label === "Ejemplos") {
              return (
                <li key={item.href} className="group relative">
                  <a
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                  <ul className="invisible absolute left-1/2 top-full z-20 mt-3 w-56 -translate-x-1/2 rounded-xl border border-white/10 bg-background/95 p-2 opacity-0 shadow-xl backdrop-blur-md transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {exampleLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="block rounded-lg px-3 py-2 text-left text-xs text-secondary-foreground transition-colors hover:bg-white/5 hover:text-primary md:text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
