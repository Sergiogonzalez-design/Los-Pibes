import Link from "next/link";
import HomeHeroCarousel from "@/components/HomeHeroCarousel";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import LosPibesNavbarES from "@/components/LosPibesNavbarES";

const dashboards = [
  { href: "/es/mission", title: "Misión", description: "Por qué existimos y hacia dónde vamos—con los atletas en el centro." },
  { href: "/es/values", title: "Valores", description: "Cómo trabajamos con jugadores que quieren un hogar digital real." },
  { href: "/es/examples", title: "Ejemplos", description: "Sitios de jugadores que muestran el formato completo en acción." },
];

export default function HomeES() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarES backHref="/" />
      <section className="relative overflow-hidden border-b border-white/10 pt-36 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(224, 198, 149, 0.35), transparent 55%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_480px]">
            <div>
              <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">Onix Media</p>
              <h1 className="font-heading max-w-3xl text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
                Sitios web construidos para <span className="text-gradient-gold">atletas</span>—estadísticas, video e historia en un solo lugar.
              </h1>
              <p className="font-body mt-4 max-w-2xl text-lg font-semibold text-primary md:text-xl">Donde el Talento se Hace Visible.</p>
              <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
                Ayudamos a los jugadores a destacar con sitios personalizados que muestran quiénes son, dónde han jugado y qué pueden hacer—para que entrenadores, scouts y fans tengan la imagen completa.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/es/examples" className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Ejemplos</Link>
                <Link href="/es/products" className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Producto</Link>
                <Link href="/es/contact" className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Contacto</Link>
              </div>
            </div>
            <div className="w-full"><HomeHeroCarousel /></div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">Explora</h2>
        <p className="font-body mt-2 max-w-2xl text-sm text-secondary-foreground">Misión, valores y ejemplos—cada uno en su propia página.</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dashboards.map((d) => (
            <li key={d.href}>
              <Link href={d.href} className="group block h-full rounded-xl border border-white/10 bg-black/25 p-6 transition-colors hover:border-primary/40 hover:bg-black/40">
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">{d.title}</h3>
                <p className="font-body mt-2 text-sm leading-relaxed text-secondary-foreground">{d.description}</p>
                <span className="font-body mt-4 inline-block text-sm font-medium text-primary">Abrir →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <LosPibesFooterES />
    </div>
  );
}
