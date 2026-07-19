"use client";

import ValueFlipCards from "@/components/ValueFlipCards";
import { useEffect, useId, useState } from "react";

type FaqItem = { title: string; description: string };

type ProductAction = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
  download?: boolean;
  external?: boolean;
};

type ProductService = {
  id: string;
  title: string;
  bullets: string[];
  actions: ProductAction[];
  videoEmbedUrl?: string;
  faqTitle: string;
  faqs: FaqItem[];
};

type Props = {
  locale: "es" | "en";
  eyebrow: string;
  openHint?: string;
  flipHint?: string;
  closeLabel: string;
};

const productsByLocale: Record<"es" | "en", ProductService[]> = {
  es: [
    {
      id: "highlight-video",
      title: "Video de Highlights",
      bullets: [
        "Una biblioteca de videos limpia que muestra los momentos clave por jugador.",
        "Diseñada para que entrenadores y ojeadores puedan revisar clips rápidamente.",
        "Un lugar organizado para todos los videos de highlights del sitio.",
      ],
      actions: [
        {
          href: "/es/products/highlight-video/all",
          label: "Video de Highlights",
          variant: "primary",
        },
        {
          href: "/es#contacto",
          label: "Contacto",
          variant: "secondary",
        },
      ],
      videoEmbedUrl: "https://www.youtube.com/embed/2fs-Gborb0o",
      faqTitle: "Preguntas frecuentes",
      faqs: [
        {
          title: "¿Cuánto tarda?",
          description:
            "Tu video de highlights estará listo en un plazo de 1 semana.",
        },
        {
          title: "¿Qué información puedo incluir?",
          description: "Todos los vídeos que desee.",
        },
        {
          title: "¿Qué ventajas tiene?",
          description:
            "Tendrás un video profesional de highlights donde tus mejores acciones se organizan de forma estratégica para captar la atención de ojeadores y entrenadores.",
        },
      ],
    },
    {
      id: "performance-report",
      title: "Informe de Rendimiento",
      bullets: [
        "Una imagen clara del perfil del jugador y su progresión en la carrera.",
        "Métricas clave de la temporada organizadas para entrenadores, ojeadores y clubes.",
        "Un documento compartible que apoya las conversaciones de reclutamiento.",
      ],
      actions: [
        {
          href: "/performance-samir-meza.pdf",
          label: "Ver Informe de Ejemplo",
          variant: "primary",
          external: true,
        },
        {
          href: "/performance-samir-meza.pdf",
          label: "Descargar PDF",
          variant: "secondary",
          download: true,
        },
        {
          href: "/es#contacto",
          label: "Contacto",
          variant: "secondary",
        },
      ],
      faqTitle: "Preguntas frecuentes",
      faqs: [
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
      ],
    },
    {
      id: "website",
      title: "Sitio Web",
      bullets: [
        "Un sitio web personalizado que presenta tu perfil en un solo lugar.",
        "Incluye estadísticas, videos y tu historia con una estructura limpia.",
        "Diseñado para verse profesional y fácil de compartir con entrenadores.",
      ],
      actions: [
        {
          href: "/es#ejemplos",
          label: "Ver Ejemplos",
          variant: "primary",
        },
        {
          href: "/es#contacto",
          label: "Contacto",
          variant: "secondary",
        },
      ],
      faqTitle: "Preguntas frecuentes",
      faqs: [
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
      ],
    },
  ],
  en: [
    {
      id: "highlight-video",
      title: "Highlight Video",
      bullets: [
        "A clean video library that shows key moments by player.",
        "Built so coaches and scouts can review clips quickly.",
        "One structured place for all highlight videos on the site.",
      ],
      actions: [
        {
          href: "/en/products/highlight-video/all",
          label: "Highlight Video",
          variant: "primary",
        },
        {
          href: "/en#contact",
          label: "Contact",
          variant: "secondary",
        },
      ],
      videoEmbedUrl: "https://www.youtube.com/embed/2fs-Gborb0o",
      faqTitle: "Frequently asked questions",
      faqs: [
        {
          title: "How long does it take?",
          description: "Your highlight video will be ready within 1 week.",
        },
        {
          title: "What information can I include?",
          description: "All the videos you want.",
        },
        {
          title: "What are the advantages?",
          description:
            "You’ll get a professional highlight video where your best actions are strategically organized to catch the attention of scouts and coaches.",
        },
      ],
    },
    {
      id: "performance-report",
      title: "Performance Report",
      bullets: [
        "A clear snapshot of the player profile and career progression.",
        "Key season metrics organized for coaches, scouts, and clubs.",
        "A shareable document that supports recruiting conversations.",
      ],
      actions: [
        {
          href: "/performance-samir-meza.pdf",
          label: "View Sample Report",
          variant: "primary",
          external: true,
        },
        {
          href: "/performance-samir-meza.pdf",
          label: "Download PDF",
          variant: "secondary",
          download: true,
        },
        {
          href: "/en#contact",
          label: "Contact",
          variant: "secondary",
        },
      ],
      faqTitle: "Frequently asked questions",
      faqs: [
        {
          title: "How long does it take?",
          description: "Your performance report will be ready within 1–2 days.",
        },
        {
          title: "What information can I include?",
          description: "Key statistics and a highlight video.",
        },
        {
          title: "What are the advantages?",
          description:
            "It’s where your most important information lives in a professional PDF—so it’s very easy to share with clubs, scouts, and coaches.",
        },
      ],
    },
    {
      id: "website",
      title: "Website",
      bullets: [
        "A custom website that presents your profile in one place.",
        "Includes stats, videos, and your story with a clean structure.",
        "Built to look professional and easy to share with coaches.",
      ],
      actions: [
        {
          href: "/en#examples",
          label: "View Examples",
          variant: "primary",
        },
        {
          href: "/en#contact",
          label: "Contact",
          variant: "secondary",
        },
      ],
      faqTitle: "Frequently asked questions",
      faqs: [
        {
          title: "How long does it take?",
          description:
            "We guarantee your website will be ready within 3–4 days.",
        },
        {
          title: "What information can I include?",
          description:
            "Whatever you want. Send us all the information you have and we’ll organize it the way you like.",
        },
        {
          title: "What are the advantages?",
          description:
            "Your full profile in one easy-to-share link. Looks professional for clubs, agents, and coaches. You can update stats, videos, and your career path whenever you want.",
        },
      ],
    },
  ],
};

export default function ProductServiceCards({
  locale,
  eyebrow,
  openHint,
  flipHint,
  closeLabel,
}: Props) {
  const products = productsByLocale[locale];
  const [activeId, setActiveId] = useState<string | null>(null);
  const titleId = useId();
  const active = products.find((product) => product.id === activeId) ?? null;

  useEffect(() => {
    if (!activeId) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveId(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeId]);

  return (
    <>
      <ul className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.id} className="min-w-0">
            <button
              type="button"
              onClick={() => setActiveId(product.id)}
              className="flex h-[160px] w-full cursor-pointer flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-4 py-6 text-center transition-colors hover:border-primary/40 sm:h-[220px] sm:px-6 sm:py-8 md:h-[240px]"
            >
              <span className="font-heading text-lg font-semibold leading-snug text-primary sm:text-2xl">
                {product.title}
              </span>
              {openHint ? (
                <span className="font-body mt-2 text-xs text-secondary-foreground/70 sm:mt-3">
                  {openHint}
                </span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          className="fixed inset-0 z-[80] flex items-stretch justify-center bg-black/80 sm:items-center sm:p-4 md:p-6"
          role="presentation"
          onClick={() => setActiveId(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative flex h-[100dvh] w-full max-w-5xl flex-col overflow-hidden bg-background shadow-[0_24px_80px_rgba(0,0,0,0.55)] sm:h-auto sm:max-h-[min(90dvh,880px)] sm:rounded-2xl sm:border sm:border-white/10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex shrink-0 items-center justify-between gap-3 border-b border-white/10 bg-background/95 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur sm:px-6">
              <p className="font-body min-w-0 truncate text-[0.65rem] uppercase tracking-[0.28em] text-primary sm:text-xs sm:tracking-[0.35em]">
                {eyebrow}
              </p>
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="font-body shrink-0 rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {closeLabel}
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-8 lg:px-8">
              {active.videoEmbedUrl ? (
                <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-[1fr_1.1fr]">
                  <div className="min-w-0">
                    <h2
                      id={titleId}
                      className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl"
                    >
                      {active.title}
                    </h2>
                    <ul className="font-body mt-4 space-y-2.5 text-sm leading-relaxed text-secondary-foreground sm:mt-6 sm:space-y-3 sm:text-base md:text-lg">
                      {active.bullets.map((bullet) => (
                        <li key={bullet} className="pl-1">
                          • {bullet}
                        </li>
                      ))}
                    </ul>
                    <ActionButtons
                      actions={active.actions}
                      onNavigate={() => setActiveId(null)}
                    />
                  </div>
                  <div className="min-w-0 overflow-hidden rounded-xl border border-white/10 bg-black/35 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                    <div className="aspect-video w-full">
                      <iframe
                        className="h-full w-full"
                        src={active.videoEmbedUrl}
                        title={active.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="min-w-0 max-w-3xl">
                  <h2
                    id={titleId}
                    className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl"
                  >
                    {active.title}
                  </h2>
                  <ul className="font-body mt-4 space-y-2.5 text-sm leading-relaxed text-secondary-foreground sm:mt-6 sm:space-y-3 sm:text-base md:text-lg">
                    {active.bullets.map((bullet) => (
                      <li key={bullet} className="pl-1">
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                  <ActionButtons
                    actions={active.actions}
                    onNavigate={() => setActiveId(null)}
                  />
                </div>
              )}

              <div className="mt-10 min-w-0 sm:mt-14">
                <h3 className="font-heading text-xl font-bold text-foreground sm:text-3xl">
                  {active.faqTitle}
                </h3>
                <ValueFlipCards
                  values={active.faqs}
                  flipHint={flipHint}
                  className="mt-5 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
                  cardClassName="h-[210px] sm:h-[220px] md:h-[240px]"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function ActionButtons({
  actions,
  onNavigate,
}: {
  actions: ProductAction[];
  onNavigate: () => void;
}) {
  return (
    <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
      {actions.map((action) => {
        const className =
          action.variant === "primary"
            ? "font-body inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto sm:py-2.5"
            : "font-body inline-flex w-full items-center justify-center rounded-lg border border-foreground/20 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10 sm:w-auto sm:py-2.5";

        const isHashLink = action.href.includes("#");

        return (
          <a
            key={`${action.href}-${action.label}`}
            href={action.href}
            className={className}
            {...(action.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            {...(action.download ? { download: true } : {})}
            onClick={() => {
              if (isHashLink) onNavigate();
            }}
          >
            {action.label}
          </a>
        );
      })}
    </div>
  );
}
