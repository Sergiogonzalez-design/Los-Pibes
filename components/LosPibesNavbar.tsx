import CompanyLogo from "@/components/CompanyLogo";
import { siteHeaderClass, siteNavClass } from "@/lib/site-nav";

const nav = [
  { href: "/mission", label: "Mision" },
  { href: "/values", label: "Values" },
  { href: "/products", label: "Product" },
  { href: "/examples", label: "Examples" },
  { href: "/contact", label: "Contact" },
];

const productLinks = [
  { href: "/products/highlight-video", label: "Highlight Video" },
  { href: "/products/performance-report", label: "Performance Report" },
  { href: "/products/website", label: "Website" },
];

const exampleLinks = [
  { href: "/examples/sergio", label: "Sergio Gonzalez" },
  { href: "/examples/thiago", label: "Thiago Cagna" },
  { href: "/examples/agostina", label: "Agostina Holzheier" },
  { href: "/examples/nacho", label: "Nacho Alfaro" },
  { href: "/examples/rami", label: "Pablo Ramirez" },
  { href: "/examples/jaco", label: "Jacobo Sanfeliu" },
];

export default function LosPibesNavbar() {
  return (
    <header className={siteHeaderClass}>
      <nav className={siteNavClass}>
        <CompanyLogo priority />
        <ul className="flex max-w-[min(100%,42rem)] flex-1 flex-wrap items-center justify-end gap-x-3 gap-y-2 text-[11px] font-medium text-secondary-foreground sm:text-xs md:max-w-none md:text-sm">
          {nav.map((item) => {
            if (item.label === "Product") {
              return (
                <li key={item.href} className="group relative">
                  <a
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                  <ul className="invisible absolute left-1/2 top-full z-20 mt-3 w-52 -translate-x-1/2 rounded-xl border border-white/10 bg-background/95 p-2 opacity-0 shadow-xl backdrop-blur-md transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
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

            if (item.label === "Examples") {
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
