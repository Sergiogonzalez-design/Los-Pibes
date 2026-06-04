import Link from "next/link";
import HomeHeroCarousel from "@/components/HomeHeroCarousel";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import LosPibesNavbarEN from "@/components/LosPibesNavbarEN";

const dashboards = [
  { href: "/en/mission", title: "Mission", description: "Why we exist and where we're headed—with athletes at the center." },
  { href: "/en/values", title: "Values", description: "How we work with players who want a real online home." },
  { href: "/en/examples", title: "Examples", description: "Player sites that show the full format in action." },
];

export default function HomeEN() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarEN backHref="/" />
      <section className="relative overflow-hidden border-b border-white/10 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(224, 198, 149, 0.35), transparent 55%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_480px]">
            <div>
              <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">Onix Media</p>
              <h1 className="font-heading max-w-3xl text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
                Websites built for <span className="text-gradient-gold">athletes</span>—stats, video, and story in one place.
              </h1>
              <p className="font-body mt-4 max-w-2xl text-lg font-semibold text-primary md:text-xl">Where Talent Meets Visibility.</p>
              <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
                We help players stand out with custom sites that show who you are, where you've played, and what you can do—so coaches, scouts, and fans get the full picture.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/en/examples" className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Examples</Link>
                <Link href="/en/products" className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Product</Link>
                <Link href="/en/contact" className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Contact</Link>
              </div>
            </div>
            <div className="w-full"><HomeHeroCarousel /></div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">Explore</h2>
        <p className="font-body mt-2 max-w-2xl text-sm text-secondary-foreground">Mission, values, and examples—each on its own page.</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dashboards.map((d) => (
            <li key={d.href}>
              <Link href={d.href} className="group block h-full rounded-xl border border-white/10 bg-black/25 p-6 transition-colors hover:border-primary/40 hover:bg-black/40">
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">{d.title}</h3>
                <p className="font-body mt-2 text-sm leading-relaxed text-secondary-foreground">{d.description}</p>
                <span className="font-body mt-4 inline-block text-sm font-medium text-primary">Open →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <LosPibesFooterEN />
    </div>
  );
}
