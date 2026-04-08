import CompanyLogo from "@/components/CompanyLogo";

const nav = [
  { href: "/mission", label: "Mission" },
  { href: "/values", label: "Values" },
  { href: "/audience", label: "Audience" },
  { href: "/examples", label: "Examples" },
  { href: "/contact", label: "Contact" },
];

export default function LosPibesNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <CompanyLogo priority />
        <ul className="flex max-w-[min(100%,42rem)] flex-1 flex-wrap items-center justify-end gap-x-3 gap-y-2 text-[11px] font-medium text-secondary-foreground sm:text-xs md:max-w-none md:text-sm">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
