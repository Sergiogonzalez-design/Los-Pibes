import CompanyLogo from "@/components/CompanyLogo";
import Link from "next/link";

const links = [
  { href: "#stats", label: "Stats" },
  { href: "#seasons", label: "Seasons" },
  { href: "#highlights", label: "Highlights" },
  { href: "#timeline", label: "Career" },
  { href: "#contact", label: "Contact" },
];

export default function NachoNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <Link
            href="/examples"
            className="shrink-0 font-body text-sm text-secondary-foreground transition-colors hover:text-primary"
            aria-label="Back to examples"
          >
            ←
          </Link>
          <CompanyLogo priority />
          <Link
            href="/examples/nacho"
            className="shrink-0 font-body text-xs font-medium text-secondary-foreground transition-colors hover:text-primary"
          >
            NA<span className="text-primary">13</span>
          </Link>
        </div>
        <ul className="flex max-w-[70vw] flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-2 text-xs font-medium text-secondary-foreground sm:text-sm md:max-w-none">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
