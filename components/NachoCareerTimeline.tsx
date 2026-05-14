const milestones = [
  {
    year: "2024–present",
    title: "FAU Owls — American Athletic Conference",
    body: "Transferred to Florida Atlantic University (AAC). Started all 11 games — 33 saves, 1.28 GAA, .717 SV%, 3 shutouts. Record W4–L4–T3 across 917 minutes.",
  },
  {
    year: "2023",
    title: "Iona — Golden Glove · All-MAAC First Team",
    body: "Junior season: 15 starts, 1.01 GAA, 46 saves, 3 shutouts. Named MAAC Golden Glove winner and All-MAAC First Team goalkeeper. MAAC All-Academic honoree.",
  },
  {
    year: "2022",
    title: "Iona — MAAC leader in shutouts",
    body: "Sophomore season: 17 starts, 1.12 GAA, .753 save percentage, 7 shutouts — tied for most in the MAAC. MAAC All-Academic selection.",
  },
  {
    year: "2021",
    title: "Iona — Freshman debut",
    body: "8 games started in his first collegiate season. Named MAAC Defensive Player of the Week.",
  },
  {
    year: "2018 & before",
    title: "Costa Rica — U15, U17, U20 national teams",
    body: "Represented Costa Rica at youth international level across three age groups. Won the U-17 National Tournament and the International CONCACAF Tournament in 2018.",
  },
];

export default function NachoCareerTimeline() {
  return (
    <section id="timeline" className="border-t border-white/10 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Career timeline
        </h2>
        <p className="mt-2 font-body text-secondary-foreground">
          From Costa Rica to NCAA Division I — national titles to Golden Glove.
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
