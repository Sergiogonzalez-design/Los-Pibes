const clips = [
  {
    title: "2023 highlights",
    href: "https://www.youtube.com/watch?v=e9lnOoj7bWA",
    desc: "Junior season at Iona — saves, distribution and shot-stopping in the MAAC.",
  },
  {
    title: "Costa Rica",
    href: "https://www.youtube.com/watch?v=2cRTMPZMAkk",
    desc: "International appearances representing Costa Rica — command of the box and reflexes.",
  },
  {
    title: "2022 highlights",
    href: "https://www.youtube.com/watch?v=CKD1y6-P4Q0",
    desc: "Sophomore season at Iona — full year in net for the Gaels.",
  },
] as const;

export default function NachoHighlights() {
  return (
    <section id="highlights" className="bg-zinc-900/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Highlights
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clips.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-black/20 p-6 transition-colors hover:border-primary/50 hover:bg-black/40"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                {c.title}
              </h3>
              <span className="mt-4 inline-block font-body text-sm font-medium text-primary">
                Watch on YouTube →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
