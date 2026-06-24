"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ExampleCard } from "@/lib/examples-index";

export type { ExampleCard } from "@/lib/examples-index";

export type CountryFilter = {
  slug: string;
  label: string;
};

const LEGACY_HASHES: Record<string, string> = {
  premium: "all",
  basic: "all",
};

const DEFAULT_COUNTRY_FILTERS: CountryFilter[] = [
  { slug: "all", label: "All" },
  { slug: "spain", label: "Spain" },
  { slug: "costa-rica", label: "Costa Rica" },
  { slug: "mexico", label: "Mexico" },
  { slug: "argentina", label: "Argentina" },
];

type ExamplesIndexProps = {
  title: string;
  viewLabel: string;
  examples?: ExampleCard[];
  countryFilters?: CountryFilter[];
};

export default function ExamplesIndex({
  title,
  viewLabel,
  examples = [],
  countryFilters = DEFAULT_COUNTRY_FILTERS,
}: ExamplesIndexProps) {
  const filters = countryFilters.length > 0 ? countryFilters : DEFAULT_COUNTRY_FILTERS;

  const validSlugs = useMemo(
    () => new Set(filters.map((filter) => filter.slug)),
    [filters]
  );
  const defaultSlug = filters[0]?.slug ?? "all";

  const [active, setActive] = useState(defaultSlug);

  const visibleExamples = useMemo(() => {
    if (active === "all") return examples;
    return examples.filter((example) => example.countries.includes(active));
  }, [active, examples]);

  useEffect(() => {
    const syncFromHash = () => {
      const raw = window.location.hash.replace("#", "");
      const hash = LEGACY_HASHES[raw] ?? raw;
      if (hash && validSlugs.has(hash)) {
        setActive(hash);
      } else if (!raw || raw === "premium" || raw === "basic") {
        setActive(defaultSlug);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [validSlugs, defaultSlug]);

  function selectFilter(slug: string) {
    setActive(slug);
    const nextHash = slug === defaultSlug ? "" : `#${slug}`;
    window.history.replaceState(null, "", `${window.location.pathname}${nextHash}`);
  }

  return (
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
        <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">Onix Media</p>
        <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">{title}</h1>

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.slug}
              type="button"
              onClick={() => selectFilter(filter.slug)}
              className={`font-body rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === filter.slug
                  ? "bg-primary text-primary-foreground"
                  : "border border-white/20 text-foreground hover:bg-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleExamples.map((example) => (
            <li key={example.href}>
              <Link
                href={example.href}
                className="group block rounded-xl border border-white/10 bg-black/35 p-6 transition-colors hover:border-primary/40 hover:bg-black/40"
              >
                <p className="font-body text-xs uppercase tracking-[0.2em] text-primary">{example.tag}</p>
                <h2 className="font-heading mt-2 text-xl font-semibold capitalize text-foreground group-hover:text-primary">
                  {example.name}
                </h2>
                <span className="font-body mt-4 inline-block text-sm font-medium capitalize text-primary">
                  {viewLabel}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
