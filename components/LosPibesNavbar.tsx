"use client";

import SiteHeader from "@/components/SiteHeader";
import { rootMarketingNavItems } from "@/lib/marketing-nav";

export default function LosPibesNavbar({ backHref }: { backHref?: string } = {}) {
  return (
    <SiteHeader
      backHref={backHref}
      backAriaLabel="Back"
      menuLabel="Menu"
      logoHref="/"
      items={rootMarketingNavItems}
    />
  );
}
