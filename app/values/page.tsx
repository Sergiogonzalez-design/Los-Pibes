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
      <section className="relative min-h-screen overflow-hidden bg-background pt-36 sm:pt-44">
        <div
          className="pointer-events-none absolute inset-0 hidden sm:block"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(5,10,20,0.65), rgba(5,10,20,0.82)), url('/Quinnipiac gol celebration.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col px-4 pb-16 sm:px-6 lg:px-8">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
            Onix Media
          </p>
          <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Values
          </h1>

          <ul className="mt-12 grid flex-1 auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brandValues.map((v) => (
              <li
                key={v.title}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/35 px-6 py-6"
              >
                <span className="text-xl" aria-hidden>
                  {v.icon}
                </span>
                <span className="font-body text-base font-medium text-foreground">
                  {v.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </OnixPageShell>
  );
}
