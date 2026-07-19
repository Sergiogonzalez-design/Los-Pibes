import LosPibesNavbarES from "@/components/LosPibesNavbarES";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import ValueFlipCards from "@/components/ValueFlipCards";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informe de Rendimiento",
  description: "Informe de rendimiento de Samir Meza.",
};

const reportFaqES = [
  {
    title: "¿Cuánto tarda?",
    description:
      "Tu informe de rendimiento estará listo en un plazo de 1-2 días.",
  },
  {
    title: "¿Qué información puedo incluir?",
    description: "Estadísticas clave y video de highlights.",
  },
  {
    title: "¿Qué ventajas tiene?",
    description:
      "Es el lugar donde estará tu información más importante, en un PDF profesional y muy fácil de compartir con clubes, ojeadores y entrenadores.",
  },
];

export default function PerformanceReportPageES() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarES backHref="/es/products" />

      <section className="bg-background pt-44 sm:pt-52">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
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

          <div className="mt-14 max-w-3xl sm:mt-16">
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Preguntas frecuentes
            </h2>
            <ValueFlipCards
              values={reportFaqES}
              flipHint="Toca para ver más"
              className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
              cardClassName="h-[200px] sm:h-[220px] md:h-[240px]"
            />
          </div>
        </div>
      </section>

      <LosPibesFooterES />
    </div>
  );
}
