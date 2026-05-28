import OnixPageShell from "@/components/OnixPageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audience",
  description:
    "Athletes in the Americas—custom sites for stats, video, and story.",
};

const pillars = [
  {
    title: "Stats that tell the story",
    body: "Career numbers, seasons, and milestones—organized so coaches, scouts, and fans see your trajectory at a glance.",
  },
  {
    title: "Video & highlights",
    body: "Show goals, saves, and key moments in one home—not lost across feeds or random links.",
  },
  {
    title: "A site that’s yours",
    body: "A unique website with your name and your brand—not a generic template—built to feel like you.",
  },
] as const;

export default function AudiencePage() {
  return (
    <OnixPageShell>
      <header className="border-b border-white/10 pt-36 pb-12 sm:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
            Onix Media
          </p>
          <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Who we serve
          </h1>
          <ul className="font-body mt-6 max-w-3xl space-y-3 text-base leading-relaxed text-secondary-foreground md:text-lg">
            <li>• Athletes in the Americas: college, club, and pro.</li>
            <li>• One professional site for your stats, video, and story.</li>
            <li>• Built to replace scattered social links with one clear home.</li>
          </ul>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-white/10 bg-black/25 p-6 sm:p-8"
            >
              <h2 className="font-heading text-lg font-semibold text-primary">
                {item.title}
              </h2>
              <p className="font-body mt-4 text-sm leading-relaxed text-secondary-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </OnixPageShell>
  );
}
