"use client";

import LosPibesNavbarES from "@/components/LosPibesNavbarES";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import Link from "next/link";
import { useEffect, useState } from "react";

const premiumExamples = [
  {
    href: "/examples/sergio",
    tag: "NCAA Division I · España",
    name: "Sergio Gonzalez",
    desc: "Mediocampista · Iona & George Mason · Perfil completo, estadísticas y medios",
  },
  {
    href: "/examples/nacho",
    tag: "NCAA Division I · Costa Rica",
    name: "Nacho Alfaro",
    desc: "Portero · Iona & FAU · Costa Rica — estadísticas, cronología y destacados",
  },
  {
    href: "/examples/rami",
    tag: "Segunda Federación · España",
    name: "Pablo Ramirez",
    desc: "Defensa central · Fuenlabrada · Cantera del Getafe — estadísticas, cronología y destacados",
  },
  {
    href: "/examples/jaco",
    tag: "NCAA Division I · España",
    name: "Jacobo Sanfeliu",
    desc: "Delantero · George Mason & SIUE · Barcelona — estadísticas, trayectoria y highlights",
  },
  {
    href: "/examples/juan",
    tag: "Liga Premier · México · Argentina",
    name: "Juan Ignacio Morales",
    desc: "Portero · Cañoneros FC · Ciudad de México — estadísticas, trayectoria y highlights",
  },
];

const basicExamples = [
  {
    href: "/examples/thiago",
    tag: "NCAA Division I",
    name: "Thiago Cagna",
    desc: "Mediocampista · Iona · Buenos Aires — estadísticas, cronología y destacados",
  },
  {
    href: "/examples/agostina",
    tag: "Argentina · Primera",
    name: "Agostina Holzheier",
    desc: "Delantera · Racing Club — estadísticas de club, cronología y enlaces",
  },
];

export default function ExamplesIndexPageES() {
  const [active, setActive] = useState<"premium" | "basic">("premium");
  const examples = active === "premium" ? premiumExamples : basicExamples;

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "basic" || hash === "premium") setActive(hash);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarES backHref="/es" />

      <section className="relative min-h-screen overflow-hidden bg-background pt-36 sm:pt-44">
        <div
          className="pointer-events-none absolute inset-0 hidden sm:block"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(5,10,20,0.65), rgba(5,10,20,0.82)), url('/Mati Sergi celebration.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
            Onix Media
          </p>
          <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Ejemplos de nuestro trabajo
          </h1>

          <div className="mt-8 flex gap-3">
            <button
              onClick={() => setActive("premium")}
              className={`font-body rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === "premium"
                  ? "bg-primary text-primary-foreground"
                  : "border border-white/20 text-foreground hover:bg-white/10"
              }`}
            >
              Premium
            </button>
            <button
              onClick={() => setActive("basic")}
              className={`font-body rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === "basic"
                  ? "bg-primary text-primary-foreground"
                  : "border border-white/20 text-foreground hover:bg-white/10"
              }`}
            >
              Basic
            </button>
          </div>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((e) => (
              <li key={e.href}>
                <Link
                  href={e.href}
                  className="group block rounded-xl border border-white/10 bg-black/35 p-6 transition-colors hover:border-primary/40 hover:bg-black/40"
                >
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-primary">
                    {e.tag}
                  </p>
                  <h2 className="font-heading mt-2 text-xl font-semibold capitalize text-foreground group-hover:text-primary">
                    {e.name}
                  </h2>
                  <p className="font-body mt-2 text-sm capitalize text-secondary-foreground">
                    {e.desc}
                  </p>
                  <span className="font-body mt-4 inline-block text-sm font-medium capitalize text-primary">
                    Ver ejemplo →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LosPibesFooterES />
    </div>
  );
}
