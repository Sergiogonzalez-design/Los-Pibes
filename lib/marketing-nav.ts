import type { NavItem } from "@/components/SiteHeader";

export const enMarketingNavItems: NavItem[] = [
  { type: "link", href: "/en/mission", label: "Mission" },
  { type: "link", href: "/en/values", label: "Values" },
  {
    type: "group",
    label: "Product",
    links: [
      { href: "/en/products", label: "Overview" },
      { href: "/en/products/highlight-video", label: "Highlight Video" },
      { href: "/en/products/performance-report", label: "Performance Report" },
      { href: "/en/products/website", label: "Website" },
    ],
  },
  {
    type: "group",
    label: "Examples",
    links: [
      { href: "/en/examples", label: "All examples" },
      { href: "/en/examples#premium", label: "Premium" },
      { href: "/en/examples#basic", label: "Basic" },
    ],
  },
  { type: "link", href: "/en/contact", label: "Contact" },
];

export const esMarketingNavItems: NavItem[] = [
  { type: "link", href: "/es/mission", label: "Misión" },
  { type: "link", href: "/es/values", label: "Valores" },
  {
    type: "group",
    label: "Producto",
    links: [
      { href: "/es/products", label: "Resumen" },
      { href: "/es/products/highlight-video", label: "Video de Highlights" },
      { href: "/es/products/performance-report", label: "Informe de Rendimiento" },
      { href: "/es/products/website", label: "Sitio Web" },
    ],
  },
  {
    type: "group",
    label: "Ejemplos",
    links: [
      { href: "/es/examples", label: "Todos los ejemplos" },
      { href: "/es/examples#premium", label: "Premium" },
      { href: "/es/examples#basic", label: "Basic" },
    ],
  },
  { type: "link", href: "/es/contact", label: "Contacto" },
];

export const rootMarketingNavItems: NavItem[] = [
  { type: "link", href: "/mission", label: "Mision" },
  { type: "link", href: "/values", label: "Values" },
  {
    type: "group",
    label: "Product",
    links: [
      { href: "/products", label: "Overview" },
      { href: "/products/highlight-video", label: "Highlight Video" },
      { href: "/products/performance-report", label: "Performance Report" },
      { href: "/products/website", label: "Website" },
    ],
  },
  {
    type: "group",
    label: "Examples",
    links: [
      { href: "/examples", label: "All examples" },
      { href: "/examples/sergio", label: "Sergio Gonzalez" },
      { href: "/examples/thiago", label: "Thiago Cagna" },
      { href: "/examples/agostina", label: "Agostina Holzheier" },
      { href: "/examples/nacho", label: "Nacho Alfaro" },
      { href: "/examples/rami", label: "Pablo Ramirez" },
      { href: "/examples/jaco", label: "Jacobo Sanfeliu" },
    ],
  },
  { type: "link", href: "/contact", label: "Contact" },
];
