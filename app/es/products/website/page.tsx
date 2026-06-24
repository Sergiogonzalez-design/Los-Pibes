import LosPibesNavbarES from "@/components/LosPibesNavbarES";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitio Web",
  description: "Descripción del producto Sitio Web.",
};

export default function WebsiteProductPageES() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarES backHref="/es/products" />

      <section
        className="relative min-h-screen overflow-hidden pt-44 sm:pt-52"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5,10,20,0.72), rgba(5,10,20,0.88)), url('/Nacho jugando.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
            Producto
          </p>
          <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Sitio Web
          </h1>
          <ul className="font-body mt-6 space-y-3 text-base leading-relaxed text-secondary-foreground sm:text-lg">
            <li>• Un sitio web personalizado que presenta tu perfil en un solo lugar.</li>
            <li>• Incluye estadísticas, videos y tu historia con una estructura limpia.</li>
            <li>• Diseñado para verse profesional y fácil de compartir con entrenadores.</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/es/examples"
              className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver Ejemplos
            </Link>
            <Link
              href="/es/contact"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
      </section>

      <LosPibesFooterES />
    </div>
  );
}
