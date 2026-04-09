const clips = [
  {
    title: "2024 highlights",
    href: "https://www.youtube.com/watch?v=ClsDgUXCDLk",
    desc: "Fifth year at Iona — MAAC honors and championship run.",
  },
  {
    title: "2022 highlights",
    href: "https://www.youtube.com/watch?v=fCta2N4h9JI&t=12s",
    desc: "Junior season — full year in the MAAC.",
  },
  {
    title: "2021 highlights",
    href: "https://www.youtube.com/watch?v=1oWI82Ox5t0",
    desc: "Sophomore year — first collegiate goal and early impact.",
  },
] as const;

export default function ThiagoHighlights() {
  return (
    <section
      id="highlights"
      className="bg-zinc-900/40 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Highlights
        </h2>
        <p className="mt-2 font-body text-secondary-foreground">
          YouTube reels by season — Iona Gaels, NCAA Division I.
        </p>
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
              <p className="mt-2 font-body text-sm text-secondary-foreground">
                {c.desc}
              </p>
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
