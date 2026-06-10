"use client";

import SiteHeader, { type NavItem } from "@/components/SiteHeader";

const links: NavItem[] = [
  { type: "anchor", href: "#stats", label: "Stats" },
  { type: "anchor", href: "#seasons", label: "Club" },
  { type: "anchor", href: "#performance-report", label: "Report" },
  { type: "anchor", href: "#timeline", label: "Career" },
  { type: "anchor", href: "#contact", label: "Contact" },
];

export default function AgostinaNavbar() {
  return (
    <SiteHeader
      backHref="/examples"
      backAriaLabel="Back to examples"
      menuLabel="Menu"
      badge="Agostina"
      logoHref="/"
      items={links}
    />
  );
}
