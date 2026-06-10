"use client";

import SiteHeader from "@/components/SiteHeader";
import { esMarketingNavItems } from "@/lib/marketing-nav";

export default function LosPibesNavbarES({ backHref }: { backHref?: string } = {}) {
  return (
    <SiteHeader
      backHref={backHref}
      backAriaLabel="Volver"
      menuLabel="Menú"
      logoHref="/es"
      items={esMarketingNavItems}
    />
  );
}
