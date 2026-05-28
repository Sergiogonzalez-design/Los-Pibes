import Link from "next/link";
import HomeHeroCarousel from "@/components/HomeHeroCarousel";
import LosPibesFooter from "@/components/LosPibesFooter";
import LosPibesNavbar from "@/components/LosPibesNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Onix Media",
  },
  description:
    "Custom websites for athletes in the Americas—stats, highlights, and your story in one site.",
};

const dashboards = [
  {
    href: "/mission",
    title: "Mission",
    description: "Why we exist and where we’re headed—with athletes at the center.",
  },
  {
    href: "/values",
    title: "Values",
    description: "How we work with players who want a real online home.",
  },
  {
    href: "/examples",
    title: "Examples",
    description: "Player sites that show the full format in action.",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbar />

      <section className="relative overflow-hidden border-b border-white/10 pt-36 pb-16 sm:pt-40 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212, 175, 55, 0.35), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px]">
            <div>
              <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">
                Onix Media
              </p>
              <h1 className="font-heading max-w-3xl text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
                Websites built for{" "}
                <span className="text-gradient-gold">athletes</span>—stats,
                video, and story in one place.
              </h1>
              <p className="font-body mt-4 max-w-2xl text-lg font-medium text-foreground md:text-xl">
                Your game. Your numbers. Your highlights.
              </p>
              <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
                We help players stand out with custom sites that show who you
                are, where you’ve played, and what you can do—so coaches,
                scouts, and fans get the full picture.{" "}
                <span className="text-foreground">
                  We operate in the Americas
                </span>{" "}
                and work with athletes ready to own their presence online.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/examples"
                  className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Examples
                </Link>
                <Link
                  href="/products"
                  className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
                >
                  Product
                </Link>
                <Link
                  href="/contact"
                  className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-full">
              <HomeHeroCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
          Explore
        </h2>
        <p className="font-body mt-2 max-w-2xl text-sm text-secondary-foreground">
          Mission, values, and examples—each on its own page.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dashboards.map((d) => (
            <li key={d.href}>
              <Link
                href={d.href}
                className="group block h-full rounded-xl border border-white/10 bg-black/25 p-6 transition-colors hover:border-primary/40 hover:bg-black/40"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                  {d.title}
                </h3>
                <p className="font-body mt-2 text-sm leading-relaxed text-secondary-foreground">
                  {d.description}
                </p>
                <span className="font-body mt-4 inline-block text-sm font-medium text-primary">
                  Open →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <LosPibesFooter />
    </div>
  );
}
