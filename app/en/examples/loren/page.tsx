import type { Metadata } from "next";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import SiteHeader, { type NavItem } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Lorenzo Sánchez — Striker",
  description:
    "Lorenzo 'Loren' Sánchez — Spanish striker from Madrid. CD Tenerife B · UD Almería · Real Madrid Sub 19. Career stats, timeline, and links.",
};

const TRANSFERMARKT = "https://www.transfermarkt.es/loren-sanchez/profil/spieler/834767";
const BESOCCER = "https://es.besoccer.com/jugador/partidos/lorenzo-sanchez-1006181";
const INSTAGRAM = "https://www.instagram.com/9lorenzosanchez/";

const navItems: NavItem[] = [
  { type: "anchor", href: "#stats", label: "Stats" },
  { type: "anchor", href: "#seasons", label: "Seasons" },
  { type: "anchor", href: "#timeline", label: "Career" },
  { type: "anchor", href: "#contact", label: "Contact" },
];

const infoItems = [
  { k: "Birth date", v: "14 Feb 2003" },
  { k: "Height", v: "187 cm" },
  { k: "Weight", v: "78 kg" },
  { k: "Strong foot", v: "Right" },
  { k: "Hometown", v: "Madrid, Spain" },
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
    min: "2,237",
  },
  {
    year: "2023/24",
    club: "UD Almería B",
    clubUrl: BESOCCER,
    league: "3ª RFEF",
    gp: "33",
    gs: "13",
    goals: "12",
    min: "1,480",
  },
  {
    year: "2022/23",
    club: "Penya Deportiva",
    clubUrl: BESOCCER,
    league: "3ª RFEF",
    gp: "31",
    gs: "10",
    goals: "2",
    min: "1,065",
  },
  {
    year: "2021/22",
    club: "Real Madrid Sub 19",
    clubUrl: BESOCCER,
    league: "División de Honor Juvenil",
    gp: "24",
    gs: "17",
    goals: "13",
    min: "1,423",
  },
];

const milestones = [
  {
    year: "2025/26",
    title: "CD Tenerife B — 2ª Federación",
    body: "Signed with CD Tenerife B on 13 August 2025. 15 appearances, 6 starts, 3 goals and 603 minutes in the 2ª Federación Group 4.",
  },
  {
    year: "2024/25",
    title: "UD Almería — Segunda División & B team",
    body: "Made 2 appearances for the Almería first team (1 LaLiga2 + 1 Copa del Rey, 16 minutes). Also featured for Almería B in 1ª RFEF: 29 games and 9 goals.",
  },
  {
    year: "2023/24",
    title: "UD Almería B — 1ª RFEF",
    body: "Standout season for Almería B: 33 appearances and 12 goals in 1ª RFEF — the most prolific campaign of his career so far.",
  },
  {
    year: "2022/23",
    title: "Penya Deportiva",
    body: "31 appearances (10 starts), 2 goals and 1,065 minutes. First senior experience outside the academy circuit.",
  },
  {
    year: "2021/22",
    title: "Real Madrid Sub 19 — División de Honor Juvenil",
    body: "24 appearances, 17 starts, 13 goals and 1,423 minutes at Real Madrid's Sub 19 side — top scorer and standout performer.",
  },
  {
    year: "2020/21",
    title: "Valencia CF U19",
    body: "12 appearances, 3 starts and 344 minutes for Valencia's U19 team — early development at a top academy.",
  },
  {
    year: "Background",
    title: "Madrid — striker",
    body: "Right-footed centre forward from Madrid, Spain. Developed through the academies of Valencia CF and Real Madrid before making his senior debut. 146 career appearances, 39 goals and 7,168 minutes across club football.",
  },
];

export default function LorenENPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        backHref="/en/examples"
        backAriaLabel="Back to examples"
        menuLabel="Menu"
        badge="LS18"
        logoHref="/en"
        items={navItems}
      />

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-[center_30%]"
          style={{ backgroundImage: "url('/loren 2.jpg')", backgroundPosition: "40% 20%", backgroundColor: "#0c1117" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">
            Striker · #18 · 2ª Federación
          </p>
          <h1 className="font-heading text-4xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Lorenzo</span>
            <span className="block text-gradient-gold">Sánchez</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Lorenzo &ldquo;Loren&rdquo; Sánchez is a Spanish striker from Madrid. He developed through
            the academies of Valencia CF and Real Madrid Sub 19 — where he scored 13 goals in a single season —
            before signing professionally with UD Almería, where he spent two seasons with the B team
            and earned two senior call-ups to the Segunda División squad.
          </p>
          <p className="font-body mt-4 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            He currently plays for CD Tenerife B in the 2ª Federación (2025/26), with 146 career appearances and 39 goals.
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
              Contact
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: "146", l: "Career Apps" },
              { v: "39",  l: "Career Goals" },
              { v: "Striker", l: "Position" },
              { v: "2ª Fed.", l: "Current League" },
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
            Season breakdown
          </h2>
          <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 font-body font-semibold text-primary">Season</th>
                  <th className="px-4 py-3 font-body font-semibold">Club</th>
                  <th className="px-4 py-3 font-body font-semibold">League</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">GP</th>
                  <th className="px-4 py-3 text-center font-body font-semibold">GS</th>
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
              La Liga Hypermotion debut
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src="/Debut 2da rfef loren.jpg"
                  alt="Lorenzo Sánchez La Liga Hypermotion debut"
                  className="h-80 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src="/Debut 2da rfef loren 2.jpg"
                  alt="Lorenzo Sánchez La Liga Hypermotion debut"
                  className="h-80 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src="/Debut 2da rfef loren 3.jpg"
                  alt="Lorenzo Sánchez La Liga Hypermotion debut"
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
            Career timeline
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
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Contact</h2>
          <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 p-8">
            <p className="font-heading text-xl font-semibold text-foreground">
              Lorenzo Sánchez Martínez
            </p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">
              Striker · #18 · CD Tenerife B
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

      <LosPibesFooterEN />
    </div>
  );
}
