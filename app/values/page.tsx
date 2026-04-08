import OnixPageShell from "@/components/OnixPageShell";
import { brandValues } from "@/lib/onix-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Values",
  description: "How Onix Media works with athletes building their online home.",
};

export default function ValuesPage() {
  return (
    <OnixPageShell>
      <header className="border-b border-white/10 pt-28 pb-12 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
            Onix Media
          </p>
          <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Our values
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg text-secondary-foreground">
            Principles we bring to every athlete project—on the field and on
            the web.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brandValues.map((v) => (
            <li
              key={v.title}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/25 px-5 py-4"
            >
              <span className="text-xl" aria-hidden>
                {v.icon}
              </span>
              <span className="font-body font-medium text-foreground">
                {v.title}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </OnixPageShell>
  );
}
