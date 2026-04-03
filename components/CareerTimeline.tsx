const milestones = [
  {
    year: "2024",
    title: "George Mason — Graduate year",
    body: "MBA coursework while competing in the A-10.",
  },
  {
    year: "2023",
    title: "MAAC Championship MVP",
    body: "Key performances in the conference tournament run.",
  },
  {
    year: "2021–23",
    title: "Iona — Three-year starter",
    body: "Consistent minutes in midfield with goals and assists in MAAC play.",
  },
  {
    year: "Earlier",
    title: "Spain → US college path",
    body: "Development in Madrid area before NCAA Division I.",
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
          Highlights along the journey — edit dates and copy to match your story.
        </p>
        <ol className="relative mt-12 space-y-8 border-l border-primary/40 pl-8">
          {milestones.map((m) => (
            <li key={m.year} className="relative">
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
