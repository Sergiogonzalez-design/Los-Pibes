"use client";

import SiteHeader, { type NavItem } from "@/components/SiteHeader";

type JacoHeaderProps = {
  backHref?: string;
  backAria: string;
  menuLabel: string;
  nav: {
    seasons: string;
    awards: string;
    highlights: string;
    career: string;
    contact: string;
  };
};

export default function JacoHeader({
  backHref = "/examples/jaco",
  backAria,
  menuLabel,
  nav,
}: JacoHeaderProps) {
  const items: NavItem[] = [
    { type: "anchor", href: "#seasons", label: nav.seasons },
    { type: "anchor", href: "#awards", label: nav.awards },
    { type: "anchor", href: "#highlights", label: nav.highlights },
    { type: "anchor", href: "#career", label: nav.career },
    { type: "anchor", href: "#contact", label: nav.contact },
  ];

  return (
    <SiteHeader
      backHref={backHref}
      backAriaLabel={backAria}
      menuLabel={menuLabel}
      badge="JS7"
      logoHref="/"
      items={items}
    />
  );
}
