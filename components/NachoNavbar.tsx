"use client";

import SiteHeader, { type NavItem } from "@/components/SiteHeader";

const links: NavItem[] = [
  { type: "anchor", href: "#stats", label: "Stats" },
  { type: "anchor", href: "#seasons", label: "Seasons" },
  { type: "anchor", href: "#highlights", label: "Highlights" },
  { type: "anchor", href: "#timeline", label: "Career" },
  { type: "anchor", href: "#contact", label: "Contact" },
];

export default function NachoNavbar() {
  return (
    <SiteHeader
      backHref="/examples"
      backAriaLabel="Back to examples"
      menuLabel="Menu"
      badge="NA13"
      logoHref="/"
      items={links}
    />
  );
}
