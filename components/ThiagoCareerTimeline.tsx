const milestones = [
  {
    year: "2024",
    title: "Iona — Fifth year",
    body: "All-MAAC First Team (midfield), All-ECAC Second Team, MAAC All-Championship Team, MAAC All-Academic. 19 appearances, 14 points (2G, 10A), third on the team in minutes.",
  },
  {
    year: "2021–23",
    title: "Iona — All-MAAC and clutch moments",
    body: "Senior (2023): five goals including three game-winners; MAAC semifinal and final goals. Earlier seasons: steady midfield minutes and first collegiate goal vs. Quinnipiac (2021).",
  },
  {
    year: "Before Iona",
    title: "Argentina — St. Georges & Estudiantes",
    body: "St. Georges College; youth pathway with Estudiantes de La Plata in Argentina’s Primera División before NCAA Division I.",
  },
];

export default function ThiagoCareerTimeline() {
  return (
    <section id="timeline" className="border-t border-white/10 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Career timeline
        </h2>
        <p className="mt-2 font-body text-secondary-foreground">
          Stops aligned with the official Iona athletics bio.
        </p>
        <ol className="relative mt-12 space-y-8 border-l border-primary/40 pl-8">
          {milestones.map((m) => (
            <li key={m.title} className="relative">
              <span className="absolute -left-[39px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background text-[10px] font-bold text-primary">
                ●
              </span>
              <p className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
                {m.year}
              </p>
              <h3 className="mt-1 font-heading text-xl text-foreground">
                {m.title}
              </h3>
              <p className="mt-2 max-w-2xl font-body text-secondary-foreground">
                {m.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
