import OnixPageShell from "@/components/OnixPageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Purpose, mission, and vision — Onix Media, athlete-focused sites in the Americas.",
};

export default function MissionPage() {
  return (
    <OnixPageShell>
      <header className="border-b border-white/10 pt-36 pb-12 sm:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
            Onix Media
          </p>
          <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Purpose, mission &amp; vision
          </h1>
          <p className="font-body mt-6 max-w-3xl text-lg text-secondary-foreground">
            Everything we do is for athletes who want a serious, beautiful home
            for their career online. We operate in the Americas and build with
            the realities of college, club, and pro paths in mind.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/25 p-8">
            <h2 className="font-heading text-lg font-semibold text-primary">
              Purpose
            </h2>
            <p className="font-body mt-4 text-sm leading-relaxed text-secondary-foreground">
              Give every athlete a clear, credible place to show their story,
              stats, and film—so the right people see you on your terms.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-8">
            <h2 className="font-heading text-lg font-semibold text-primary">
              Mission
            </h2>
            <p className="font-body mt-4 text-sm leading-relaxed text-secondary-foreground">
              Design and ship custom athlete sites that put performance, journey,
              and highlights front and center—fast to load, easy to share, built
              for recruiting and fans alike.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-8">
            <h2 className="font-heading text-lg font-semibold text-primary">
              Vision
            </h2>
            <p className="font-body mt-4 text-sm leading-relaxed text-secondary-foreground">
              To be the go-to partner for players across the Americas who want a
              standout web presence—one site that grows with your career.
            </p>
          </div>
        </div>
      </section>
    </OnixPageShell>
  );
}
