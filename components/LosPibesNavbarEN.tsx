"use client";

import SiteHeader from "@/components/SiteHeader";
import { enMarketingNavItems } from "@/lib/marketing-nav";

export default function LosPibesNavbarEN({ backHref }: { backHref?: string } = {}) {
  return (
    <SiteHeader
      backHref={backHref}
      backAriaLabel="Back"
      menuLabel="Menu"
      logoHref="/en"
      items={enMarketingNavItems}
    />
  );
}
