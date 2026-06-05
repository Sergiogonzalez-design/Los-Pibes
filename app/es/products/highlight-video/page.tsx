import LosPibesNavbarES from "@/components/LosPibesNavbarES";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video de Highlights",
  description: "Descripción del producto Video de Highlights.",
};

export default function HighlightVideoPageES() {
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
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
              Producto
            </p>
            <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
              Video de Highlights
            </h1>
            <ul className="font-body mt-6 max-w-3xl space-y-3 text-base leading-relaxed text-secondary-foreground sm:text-lg">
              <li>• Una biblioteca de videos limpia que muestra los momentos clave por jugador.</li>
              <li>• Diseñada para que entrenadores y ojeadores puedan revisar clips rápidamente.</li>
              <li>• Un lugar organizado para todos los videos de highlights del sitio.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/es/products/highlight-video/all"
                className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Video de Highlights
              </Link>
              <Link
                href="/es/contact"
                className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
              >
                Contacto
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/35 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/2fs-Gborb0o"
                title="Highlight Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
      </section>

      <LosPibesFooterES />
    </div>
  );
}
