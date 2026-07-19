import LosPibesNavbarES from "@/components/LosPibesNavbarES";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import ValueFlipCards from "@/components/ValueFlipCards";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitio Web",
  description: "Descripción del producto Sitio Web.",
};

const websiteFaqES = [
  {
    title: "¿Cuánto tarda?",
    description:
      "Te garantizamos que tu página web estará lista en un plazo de 3-4 días.",
  },
  {
    title: "¿Qué información puedo incluir?",
    description:
      "Lo que quieras. Nos mandas toda la información que quieras y nosotros la organizamos a tu gusto.",
  },
  {
    title: "¿Qué ventajas tiene?",
    description:
      "Todo tu perfil en un solo enlace fácil de compartir. Se ve profesional ante clubes, agentes y entrenadores. Puedes actualizar estadísticas, videos y trayectoria cuando quieras.",
  },
];

export default function WebsiteProductPageES() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarES backHref="/es/products" />

      <section className="bg-background pt-44 sm:pt-52">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
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

          <div className="mt-14 max-w-3xl sm:mt-16">
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Preguntas frecuentes
            </h2>
            <ValueFlipCards
              values={websiteFaqES}
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
