import LosPibesNavbarES from "@/components/LosPibesNavbarES";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informe de Rendimiento",
  description: "Informe de rendimiento de Samir Meza.",
};

export default function PerformanceReportPageES() {
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
        <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
          Producto
        </p>
        <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
          Informe de Rendimiento
        </h1>
        <ul className="font-body mt-6 max-w-3xl space-y-3 text-base leading-relaxed text-secondary-foreground sm:text-lg">
          <li>• Una imagen clara del perfil del jugador y su progresión en la carrera.</li>
          <li>• Métricas clave de la temporada organizadas para entrenadores, ojeadores y clubes.</li>
          <li>• Un documento compartible que apoya las conversaciones de reclutamiento.</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/performance-samir-meza.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver Informe de Ejemplo
          </a>
          <a
            href="/performance-samir-meza.pdf"
            download
            className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
          >
            Descargar PDF
          </a>
          <Link
            href="/es/contact"
            className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
          >
            Contacto
          </Link>
        </div>
      </div>
      </section>

      <LosPibesFooterES />
    </div>
  );
}
