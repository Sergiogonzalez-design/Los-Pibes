const milestones = [
  {
    year: "2023–present",
    title: "Racing Club",
    body: "Striker in the first women’s team since August 2023 — 66 games and 20 goals in Racing colours (per club/aggregated data).",
  },
  {
    year: "2021–23",
    title: "River Plate, Grêmio, and pathway",
    body: "River Plate (2021/22), including the 2022 Copa Federal; time at Grêmio (Brazil) in 2023 before the move to Racing.",
  },
  {
    year: "International",
    title: "Argentina",
    body: "Senior and youth call-ups: Argentina U20, SheBelieves Cup, and senior national team — 25 apps (PJ) and 3 goals.",
  },
];

export default function AgostinaCareerTimeline() {
  return (
    <section id="timeline" className="border-t border-white/10 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Career timeline
        </h2>
        <p className="mt-2 font-body text-secondary-foreground">
          Trajectory: Crespo → River → Brazil → Racing — left-footed forward and wide attacker.
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
