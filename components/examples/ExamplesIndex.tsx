"use client";

import Image from "next/image";
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
  embedded?: boolean;
  id?: string;
};

export default function ExamplesIndex({
  title,
  viewLabel,
  examples = [],
  countryFilters = DEFAULT_COUNTRY_FILTERS,
  embedded = false,
  id,
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
    if (embedded) return;

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
  }, [validSlugs, defaultSlug, embedded]);

  function selectFilter(slug: string) {
    setActive(slug);
    if (embedded) return;
    const nextHash = slug === defaultSlug ? "" : `#${slug}`;
    window.history.replaceState(null, "", `${window.location.pathname}${nextHash}`);
  }

  return (
    <section
      id={id}
      className={
        embedded
          ? "scroll-mt-24 border-t border-white/10 bg-background py-16 sm:scroll-mt-28 sm:py-24"
          : "relative min-h-screen overflow-hidden bg-background pt-36 sm:pt-44"
      }
    >
      {!embedded ? (
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
      ) : null}
      <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">Onix Media</p>
        {embedded ? (
          <h2 className="font-heading mt-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>
        ) : (
          <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">{title}</h1>
        )}

        <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
          {filters.map((filter) => (
            <button
              key={filter.slug}
              type="button"
              onClick={() => selectFilter(filter.slug)}
              className={`font-body rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors sm:px-5 sm:py-2.5 ${
                active === filter.slug
                  ? "bg-primary text-primary-foreground"
                  : "border border-white/20 text-foreground hover:bg-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <ul className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {visibleExamples.map((example) => (
            <li key={example.href} className="min-w-0">
              <Link
                href={example.href}
                className="group block rounded-xl border border-white/10 bg-black/35 p-5 transition-colors hover:border-primary/40 hover:bg-black/40 sm:p-6"
              >
                <p className="font-body text-xs uppercase tracking-[0.2em] text-primary">
                  {example.tag}
                </p>
                <h2 className="font-heading mt-2 text-xl font-semibold capitalize text-foreground group-hover:text-primary">
                  {example.name}
                </h2>
                <div className="relative mt-4 aspect-[4/5] w-full overflow-hidden rounded-lg border border-white/10">
                  <Image
                    src={example.image}
                    alt={example.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    style={{ objectPosition: example.imagePosition ?? "50% 25%" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
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
