const milestones = [
  {
    year: "2025",
    title: "George Mason — Graduate year",
    body: "MBA in Business Analytics while competing in the Atlantic 10. Roster and bio on the official athletics site.",
  },
  {
    year: "2024",
    title: "MAAC Championship MVP — Iona",
    body: "Junior season: 9 goals and 21 points in 18 starts; three assists in the win at Niagara; All-MAAC First Team and All-ECAC First Team.",
  },
  {
    year: "2022–23",
    title: "Iona — All-MAAC honors",
    body: "Sophomore and freshman campaigns with full-time minutes: from first collegiate goal (PK vs LIU) to All-MAAC Second Team selections.",
  },
  {
    year: "Before Iona",
    title: "Spain — SEK El Castillo & Getafe CF",
    body: "Prep at SEK El Castillo (Madrid); club experience with Getafe CF before NCAA Division I.",
  },
];

export default function CareerTimeline() {
  return (
    <section id="timeline" className="border-t border-white/10 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Career timeline
        </h2>
        <p className="mt-2 font-body text-secondary-foreground">
          Key stops aligned with official Iona and George Mason roster bios.
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
