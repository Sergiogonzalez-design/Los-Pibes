"use client";

import OnixPageShell from "@/components/OnixPageShell";
import Link from "next/link";
import { useState } from "react";

const premiumExamples = [
  {
    href: "/examples/sergio",
    tag: "NCAA Division I · Spain",
    name: "Sergio Gonzalez",
    desc: "Midfielder · Iona & George Mason · Full profile, stats, and media",
  },
  {
    href: "/examples/nacho",
    tag: "NCAA Division I · Costa Rica",
    name: "Nacho Alfaro",
    desc: "Goalkeeper · Iona & FAU · Costa Rica — stats, timeline, and highlights",
  },
  {
    href: "/examples/rami",
    tag: "Spain · Segunda Federación",
    name: "Pablo Ramirez",
    desc: "Center Back · Fuenlabrada · Getafe academy — stats, timeline, and highlights",
  },
];

const basicExamples = [
  {
    href: "/examples/thiago",
    tag: "NCAA Division I",
    name: "Thiago Cagna",
    desc: "Midfielder · Iona · Buenos Aires — stats, timeline, and highlights",
  },
  {
    href: "/examples/agostina",
    tag: "Argentina · Primera",
    name: "Agostina Holzheier",
    desc: "Forward · Racing Club — club stats, timeline, and links",
  },
];

export default function ExamplesIndexPage() {
  const [active, setActive] = useState<"premium" | "basic">("premium");
  const examples = active === "premium" ? premiumExamples : basicExamples;

  return (
    <OnixPageShell>
      <section
        className="relative min-h-screen overflow-hidden pt-36 sm:pt-40"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5,10,20,0.65), rgba(5,10,20,0.82)), url('/Mati Sergi celebration.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
            Onix Media
          </p>
          <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Examples of our work
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
                    View example →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </OnixPageShell>
  );
}
