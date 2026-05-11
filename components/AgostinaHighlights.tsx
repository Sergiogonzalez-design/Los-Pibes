const PDF_PATH = "/agostina-holzheier-performance-report.pdf";
const HIGHLIGHTS_YOUTUBE = "https://www.youtube.com/watch?v=3HVWgpGZZOU";

const items = [
  {
    href: PDF_PATH,
    title: "Performance Report",
    desc: "Full PDF — profile, career, and performance detail.",
    cta: "Open report →",
  },
  {
    href: HIGHLIGHTS_YOUTUBE,
    title: "Highlight Video",
    desc: "Match and training highlights on YouTube.",
    cta: "Watch on YouTube →",
  },
] as const;

export default function AgostinaHighlights() {
  return (
    <section
      id="performance-report"
      className="bg-zinc-900/40 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold capitalize text-foreground sm:text-4xl">
          Performance & highlights
        </h2>
        <p className="mt-2 font-body text-sm text-secondary-foreground">
          Choose a box below — each link opens in a new tab.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[140px] flex-col justify-between rounded-xl border border-white/10 bg-black/20 p-6 transition-colors hover:border-primary/50 hover:bg-black/40"
            >
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm text-secondary-foreground">
                  {item.desc}
                </p>
              </div>
              <span className="mt-4 font-body text-sm font-medium text-primary">
                {item.cta}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
