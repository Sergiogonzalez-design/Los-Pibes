import OnixPageShell from "@/components/OnixPageShell";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "Example athlete sites by Onix Media—stats, story, and media in one place.",
};

export default function ExamplesIndexPage() {
  return (
    <OnixPageShell>
      <header className="border-b border-white/10 pt-36 pb-12 sm:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
            Onix Media
          </p>
          <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Examples of our work
          </h1>
          <p className="font-body mt-4 max-w-2xl text-lg text-secondary-foreground">
            Live player sites that show how we structure story, stats, seasons,
            highlights, and career arc for athletes—in one place. We operate in
            the Americas and add more examples as we go.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <Link
              href="/examples/sergio"
              className="group block rounded-xl border border-white/10 bg-black/25 p-6 transition-colors hover:border-primary/40 hover:bg-black/40"
            >
              <p className="font-body text-xs uppercase tracking-[0.2em] text-primary">
                NCAA Division I
              </p>
              <h2 className="font-heading mt-2 text-xl font-semibold capitalize text-foreground group-hover:text-primary">
                Sergio Gonzalez
              </h2>
              <p className="font-body mt-2 text-sm capitalize text-secondary-foreground">
                Midfielder · Iona & George Mason · Full profile, stats, and
                media
              </p>
              <span className="font-body mt-4 inline-block text-sm font-medium capitalize text-primary">
                View example →
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/examples/thiago"
              className="group block rounded-xl border border-white/10 bg-black/25 p-6 transition-colors hover:border-primary/40 hover:bg-black/40"
            >
              <p className="font-body text-xs uppercase tracking-[0.2em] text-primary">
                NCAA Division I
              </p>
              <h2 className="font-heading mt-2 text-xl font-semibold capitalize text-foreground group-hover:text-primary">
                Thiago Cagna
              </h2>
              <p className="font-body mt-2 text-sm capitalize text-secondary-foreground">
                Midfielder · Iona · Buenos Aires — stats, timeline, and
                highlights
              </p>
              <span className="font-body mt-4 inline-block text-sm font-medium capitalize text-primary">
                View example →
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/examples/agostina"
              className="group block rounded-xl border border-white/10 bg-black/25 p-6 transition-colors hover:border-primary/40 hover:bg-black/40"
            >
              <p className="font-body text-xs uppercase tracking-[0.2em] text-primary">
                Argentina · Primera
              </p>
              <h2 className="font-heading mt-2 text-xl font-semibold capitalize text-foreground group-hover:text-primary">
                Agostina Holzheier
              </h2>
              <p className="font-body mt-2 text-sm capitalize text-secondary-foreground">
                Forward · Racing Club — club stats, timeline, and links
              </p>
              <span className="font-body mt-4 inline-block text-sm font-medium capitalize text-primary">
                View example →
              </span>
            </Link>
          </li>
        </ul>
      </section>
    </OnixPageShell>
  );
}
