"use client";

import CompanyLogo from "@/components/CompanyLogo";
import StatsDropdown from "@/components/StatsDropdown";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type NavItem =
  | {
      type: "group";
      label: string;
      links: { href: string; label: string; active?: boolean }[];
    }
  | { type: "anchor"; href: string; label: string }
  | { type: "link"; href: string; label: string; active?: boolean };

type SiteHeaderProps = {
  backHref: string;
  backAriaLabel: string;
  menuLabel: string;
  items: NavItem[];
  badge?: string;
  logoHref?: string;
};

function linkClassName(active?: boolean) {
  return `transition-colors hover:text-primary ${active ? "text-primary" : ""}`;
}

export default function SiteHeader({
  backHref,
  backAriaLabel,
  menuLabel,
  items,
  badge,
  logoHref = "/",
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";

    function handleClick(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClick);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Link
            href={backHref}
            className="shrink-0 font-body text-sm text-secondary-foreground transition-colors hover:text-primary"
            aria-label={backAriaLabel}
          >
            ←
          </Link>
          <CompanyLogo priority href={logoHref} />
          {badge ? (
            <span className="font-body text-sm font-semibold text-secondary-foreground">{badge}</span>
          ) : null}
        </div>

        <div className="flex items-center">
          <ul className="hidden items-center gap-x-4 font-body text-sm font-medium text-secondary-foreground lg:flex">
            {items.map((item) => {
              if (item.type === "group") {
                return (
                  <li key={item.label}>
                    <StatsDropdown label={item.label} links={item.links} />
                  </li>
                );
              }

              if (item.type === "anchor") {
                return (
                  <li key={item.href}>
                    <a href={item.href} className={linkClassName()}>
                      {item.label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link href={item.href} className={linkClassName(item.active)}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="ml-2 inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary lg:hidden"
            aria-label={menuLabel}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-background/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6 lg:px-8">
            {items.map((item) => {
              if (item.type === "group") {
                return (
                  <div key={item.label} className="py-2">
                    <p className="font-body text-xs uppercase tracking-widest text-primary">{item.label}</p>
                    <div className="mt-2 flex flex-col gap-1 pl-3">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeMenu}
                          className={`rounded-lg px-3 py-2 font-body text-sm ${linkClassName(link.active)}`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (item.type === "anchor") {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`rounded-lg px-3 py-2 font-body text-sm ${linkClassName()}`}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-lg px-3 py-2 font-body text-sm ${linkClassName(item.active)}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
