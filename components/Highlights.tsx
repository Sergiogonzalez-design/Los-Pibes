const clips = [
  {
    title: "MAAC tournament — MVP moments",
    href: "https://www.youtube.com/results?search_query=iona+soccer+maac",
    desc: "Replace with your highlight reel or game film.",
  },
  {
    title: "George Mason — Season highlights",
    href: "https://gomason.com/sports/mens-soccer",
    desc: "Link to official page or Hudl when ready.",
  },
];

export default function Highlights() {
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
          Drop in YouTube or Hudl links — these are placeholders you can swap.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
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
                Open link →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
