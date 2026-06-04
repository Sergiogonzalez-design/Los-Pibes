import CompanyLogo from "@/components/CompanyLogo";
import Link from "next/link";

type JacoHeaderProps = {
  backHref?: string;
  backAria: string;
  nav: {
    seasons: string;
    highlights: string;
    career: string;
    contact: string;
  };
};

export default function JacoHeader({
  backHref = "/examples/jaco",
  backAria,
  nav,
}: JacoHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-6 sm:py-2.5 lg:px-8">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Link
            href={backHref}
            className="shrink-0 font-body text-xs text-secondary-foreground transition-colors hover:text-primary sm:text-sm"
            aria-label={backAria}
          >
            ←
          </Link>
          <CompanyLogo priority href="/" />
          <span className="font-body text-xs font-semibold text-secondary-foreground sm:text-sm">JS7</span>
        </div>
        <ul className="flex flex-wrap items-center justify-end gap-x-2.5 gap-y-1 font-body text-[0.7rem] font-medium text-secondary-foreground sm:gap-x-4 sm:text-sm">
          <li>
            <a href="#seasons" className="transition-colors hover:text-primary">
              {nav.seasons}
            </a>
          </li>
          <li>
            <a href="#highlights" className="transition-colors hover:text-primary">
              {nav.highlights}
            </a>
          </li>
          <li>
            <a href="#career" className="transition-colors hover:text-primary">
              {nav.career}
            </a>
          </li>
          <li>
            <a href="#contact" className="transition-colors hover:text-primary">
              {nav.contact}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
