import type { Metadata } from "next";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import SiteHeader, { type NavItem } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Lorenzo Sánchez — Delantero",
  description:
    "Lorenzo 'Loren' Sánchez — delantero español de Madrid. CD Tenerife B · UD Almería · Real Madrid Sub 19. Estadísticas, trayectoria y enlaces.",
};

const TRANSFERMARKT = "https://www.transfermarkt.es/loren-sanchez/profil/spieler/834767";
const BESOCCER = "https://es.besoccer.com/jugador/partidos/lorenzo-sanchez-1006181";
const INSTAGRAM = "https://www.instagram.com/9lorenzosanchez/";

const navItems: NavItem[] = [
  { type: "anchor", href: "#stats", label: "Stats" },
  { type: "anchor", href: "#seasons", label: "Temporadas" },
  { type: "anchor", href: "#timeline", label: "Carrera" },
  { type: "anchor", href: "#contact", label: "Contacto" },
];

const infoItems = [
  { k: "Fecha de nac.", v: "14 feb 2003" },
  { k: "Altura", v: "187 cm" },
  { k: "Peso", v: "78 kg" },
  { k: "Pie hábil", v: "Derecho" },
  { k: "Origen", v: "Madrid, España" },
];

const seasons = [
  {
    year: "2025/26",
    club: "CD Tenerife B",
    clubUrl: BESOCCER,
    league: "2ª Federación",
    gp: "15",
    gs: "6",
    goals: "3",
    min: "603",
  },
  {
    year: "2024/25",
    club: "UD Almería",
    clubUrl: TRANSFERMARKT,
    league: "Segunda División",
    gp: "2",
    gs: "0",
    goals: "0",
    min: "16",
  },
  {
    year: "2024/25",
    club: "UD Almería B",
    clubUrl: BESOCCER,
    league: "3ª RFEF",
    gp: "29",
    gs: "28",
    goals: "9",
    min: "2.237",
  },
  {
    year: "2023/24",
    club: "UD Almería B",
    clubUrl: BESOCCER,
    league: "3ª RFEF",
    gp: "33",
    gs: "13",
    goals: "12",
    min: "1.480",
  },
  {
    year: "2022/23",
    club: "Penya Deportiva",
    clubUrl: BESOCCER,
    league: "3ª RFEF",
    gp: "31",
    gs: "10",
    goals: "2",
    min: "1.065",
  },
  {
    year: "2021/22",
    club: "Real Madrid Sub 19",
    clubUrl: BESOCCER,
    league: "División de Honor Juvenil",
    gp: "24",
    gs: "17",
    goals: "13",
    min: "1.423",
  },
];

const milestones = [
  {
    year: "2025/26",
    title: "CD Tenerife B — 2ª Federación",
    body: "Fichado por el CD Tenerife B el 13 de agosto de 2025. 15 partidos, 6 titularidades, 3 goles y 603 minutos en el Grupo 4 de la 2ª Federación.",
  },
  {
    year: "2024/25",
    title: "UD Almería — Segunda División y filial",
    body: "2 apariciones con el primer equipo del Almería (1 LaLiga2 + 1 Copa del Rey, 16 minutos). También jugó en el Almería B en 3ª RFEF: 29 partidos y 9 goles.",
  },
  {
    year: "2023/24",
    title: "UD Almería B — 3ª RFEF",
    body: "Temporada destacada en el Almería B: 33 partidos y 12 goles en 3ª RFEF — la campaña más goleadora de su carrera hasta la fecha.",
  },
  {
    year: "2022/23",
    title: "Penya Deportiva",
    body: "31 partidos (10 de titular), 2 goles y 1.065 minutos.",
  },
  {
    year: "2021/22",
    title: "Real Madrid Sub 19 — División de Honor Juvenil",
    body: "24 partidos, 17 titularidades, 13 goles y 1.423 minutos en el Sub 19 del Real Madrid.",
  },
  {
    year: "2020/21",
    title: "Valencia CF Sub 19",
    body: "12 partidos, 3 titularidades y 344 minutos en el Sub 19 del Valencia.",
  },
  {
    year: "Trayectoria",
    title: "Madrid — Delantero Centro",
    body: "Delantero centro de Madrid. Formado en las canteras del Valencia CF y del Real Madrid antes de dar el salto profesional. 146 partidos, 39 goles y 7.168 minutos en su carrera.",
  },
];

export default function LorenESPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref="/es/examples"
        backAriaLabel="Volver a ejemplos"
        menuLabel="Menú"
        badge="LS18"
        logoHref="/es"
        items={navItems}
      />

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-[50%_20%] sm:hidden"
          style={{ backgroundImage: "url('/Debut 2da rfef loren 2.jpg')", backgroundColor: "#0c1117" }}
        />
        <div
          className="absolute inset-0 hidden bg-cover bg-[40%_20%] sm:block"
          style={{ backgroundImage: "url('/loren 2.jpg')", backgroundColor: "#0c1117" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">
            Delantero · #18 · 2ª Federación
          </p>
          <h1 className="font-heading text-4xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Lorenzo</span>
            <span className="block text-gradient-gold">Sánchez</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Lorenzo &ldquo;Loren&rdquo; Sánchez es un delantero español de Madrid. Se formó en las canteras
            del Valencia CF y del Real Madrid Sub 19 antes de
            fichar profesionalmente por la UD Almería,             donde pasó dos temporadas en el filial y debutó en La Liga Hypermotion y Copa del Rey.
          </p>
          <p className="font-body mt-4 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Actualmente juega en el CD Tenerife B en la 2ª Federación (2025/26).
          </p>

          <div className="mt-10 flex flex-nowrap gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>a]:shrink-0">
            <a
              href={TRANSFERMARKT}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Transfermarkt
            </a>
            <a
              href={BESOCCER}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              BeSoccer
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Instagram
            </a>
            <a
              href="#contact"
              className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Contacto
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: "146", l: "Partidos" },
              { v: "39",  l: "Goles" },
              { v: "Delantero", l: "Posición" },
              { v: "2ª Fed.", l: "Liga actual" },
            ].map((s) => (
              <div
                key={s.l}
                className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-black/25 p-5 text-center"
              >
                <p className="font-body text-xs uppercase tracking-widest text-primary">{s.l}</p>
                <p className="mt-2 font-heading text-xl font-bold text-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="scroll-mt-14 border-y border-white/10 bg-zinc-900/50 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-5 sm:px-6 lg:px-8">
          {infoItems.map((item) => (
            <div key={item.k} className="text-center">
              <p className="font-body text-xs uppercase tracking-widest text-primary">{item.k}</p>
              <p className="mt-1 font-body text-sm font-medium text-foreground">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="seasons" className="scroll-mt-14 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Temporadas
          </h2>
          <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 font-body font-semibold text-primary">Temporada</th>
                  <th className="px-4 py-3 font-body font-semibold">Club</th>
                  <th className="px-4 py-3 font-body font-semibold">Liga</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">PJ</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">PT</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">G</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">MIN</th>
                </tr>
              </thead>
              <tbody>
                {seasons.map((s) => (
                  <tr
                    key={`${s.year}-${s.club}`}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                  >
                    <td className="px-4 py-3 font-medium text-foreground">{s.year}</td>
                    <td className="px-4 py-3">
                      <a
                        href={s.clubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary underline-offset-2 hover:underline"
                      >
                        {s.club}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-secondary-foreground">{s.league}</td>
                    <td className="px-4 py-3 text-center">{s.gp}</td>
                    <td className="px-4 py-3 text-center">{s.gs}</td>
                    <td className="px-4 py-3 text-center">{s.goals}</td>
                    <td className="px-4 py-3 text-center">{s.min}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <h3 className="font-heading text-xl font-bold text-foreground">
              Debut en La Liga Hypermotion
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 max-w-2xl">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src="/Debut 2da rfef loren.jpg"
                  alt="Lorenzo Sánchez debut La Liga Hypermotion"
                  className="h-80 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src="/Debut 2da rfef loren 2.jpg"
                  alt="Lorenzo Sánchez debut La Liga Hypermotion"
                  className="h-80 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="scroll-mt-14 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Trayectoria
          </h2>
          <ol className="relative mt-12 space-y-8 border-l border-primary/40 pl-8">
            {milestones.map((m) => (
              <li key={m.title} className="relative">
                <span className="absolute -left-[39px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background text-[10px] font-bold text-primary">
                  ●
                </span>
                <p className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
                  {m.year}
                </p>
                <h3 className="mt-1 font-heading text-xl text-foreground">{m.title}</h3>
                <p className="mt-2 max-w-2xl font-body text-secondary-foreground">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="scroll-mt-14 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Contacto</h2>
          <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 p-8">
            <p className="font-heading text-xl font-semibold text-foreground">
              Lorenzo Sánchez Martínez
            </p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">
              Delantero · #18 · CD Tenerife B
            </p>
            <a
              href="mailto:Lorenzosanchez2003@gmail.com"
              className="font-body mt-4 block text-primary underline-offset-2 hover:underline"
            >
              Lorenzosanchez2003@gmail.com
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body mt-2 block text-primary underline-offset-2 hover:underline"
            >
              @9lorenzosanchez
            </a>
          </div>
        </div>
      </section>

      <LosPibesFooterES />
    </div>
  );
}
