import OnixPageShell from "@/components/OnixPageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mision",
  description:
    "Purpose, mission, and vision — Onix Media, athlete-focused sites in the Americas.",
};

export default function MissionPage() {
  return (
    <OnixPageShell>
      <section
        className="relative min-h-screen overflow-hidden pt-36 sm:pt-44"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5,10,20,0.65), rgba(5,10,20,0.82)), url('/Quinnipiac gol celebration.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <h1 className="font-heading pt-8 text-3xl font-bold text-foreground sm:pt-14 sm:text-4xl">
            Purpose, Mision, and Vision
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-10 md:min-h-[260px]">
            <h2 className="font-heading text-lg font-semibold text-primary">
              Purpose
            </h2>
            <p className="font-body mt-5 text-base leading-relaxed text-secondary-foreground">
              Give every athlete a clear, credible place to show their story,
              stats, and film—so the right people see you on your terms.
            </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-10 md:min-h-[260px]">
            <h2 className="font-heading text-lg font-semibold text-primary">
              Mision
            </h2>
            <p className="font-body mt-5 text-base leading-relaxed text-secondary-foreground">
              Design and ship custom athlete sites that put performance, journey,
              and highlights front and center—fast to load, easy to share, built
              for recruiting and fans alike.
            </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-10 md:min-h-[260px]">
            <h2 className="font-heading text-lg font-semibold text-primary">
              Vision
            </h2>
            <p className="font-body mt-5 text-base leading-relaxed text-secondary-foreground">
              To be the go-to partner for players across the Americas who want a
              standout web presence—one site that grows with your career.
            </p>
            </div>
          </div>
        </div>
      </section>
    </OnixPageShell>
  );
}
