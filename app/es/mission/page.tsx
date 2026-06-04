import LosPibesNavbarES from "@/components/LosPibesNavbarES";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Misión",
  description:
    "Propósito, misión y visión — Onix Media, sitios para atletas en las Américas.",
};

export default function MissionPageES() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarES backHref="/es" />
      <section
        className="relative min-h-screen overflow-hidden pt-36 sm:pt-44"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5,10,20,0.65), rgba(5,10,20,0.82)), url('/Quinnipiac gol celebration.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <h1 className="font-heading pt-8 text-3xl font-bold text-foreground sm:pt-14 sm:text-4xl">
            Propósito, Misión y Visión
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-10 md:min-h-[260px]">
              <h2 className="font-heading text-lg font-semibold text-primary">
                Propósito
              </h2>
              <p className="font-body mt-5 text-base leading-relaxed text-secondary-foreground">
                Empoderar a los futbolistas para que muestren su verdadero
                potencial dentro y fuera del campo, conectándolos con mejores
                oportunidades a través de una presencia profesional y auténtica.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-10 md:min-h-[260px]">
              <h2 className="font-heading text-lg font-semibold text-primary">
                Misión
              </h2>
              <p className="font-body mt-5 text-base leading-relaxed text-secondary-foreground">
                Ayudar a jugadores de fútbol a destacar en un entorno cada vez
                más competitivo mediante soluciones digitales de alta calidad,
                incluyendo páginas web personalizadas, highlight videos y
                performance reports que reflejen su talento, esfuerzo y
                trayectoria.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-10 md:min-h-[260px]">
              <h2 className="font-heading text-lg font-semibold text-primary">
                Visión
              </h2>
              <p className="font-body mt-5 text-base leading-relaxed text-secondary-foreground">
                Construir un futuro donde cada futbolista tenga las herramientas
                necesarias para presentar su historia, demostrar su talento y
                controlar su propia imagen profesional.
              </p>
            </div>
          </div>
        </div>
      </section>
      <LosPibesFooterES />
    </div>
  );
}
