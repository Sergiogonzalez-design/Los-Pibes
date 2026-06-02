import LosPibesNavbarEN from "@/components/LosPibesNavbarEN";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Purpose, mission, and vision — Onix Media, athlete-focused sites in the Americas.",
};

export default function MissionPageEN() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarEN backHref="/en" />
      <section
        className="relative min-h-screen overflow-hidden pt-36 sm:pt-40"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5,10,20,0.65), rgba(5,10,20,0.82)), url('/Quinnipiac gol celebration.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <h1 className="font-heading pt-8 text-3xl font-bold text-foreground sm:pt-14 sm:text-4xl">
            Purpose, Mission, and Vision
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-10 md:min-h-[260px]">
              <h2 className="font-heading text-lg font-semibold text-primary">
                Purpose
              </h2>
              <p className="font-body mt-5 text-base leading-relaxed text-secondary-foreground">
                Empower soccer players to show their true potential on and off
                the pitch, connecting them with better opportunities through a
                professional and authentic presence.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-10 md:min-h-[260px]">
              <h2 className="font-heading text-lg font-semibold text-primary">
                Mission
              </h2>
              <p className="font-body mt-5 text-base leading-relaxed text-secondary-foreground">
                Help soccer players stand out in an increasingly competitive
                environment through high-quality digital solutions, including
                custom websites, highlight videos, and performance reports that
                reflect their talent, effort, and journey.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-10 md:min-h-[260px]">
              <h2 className="font-heading text-lg font-semibold text-primary">
                Vision
              </h2>
              <p className="font-body mt-5 text-base leading-relaxed text-secondary-foreground">
                Build a future where every soccer player has the tools they
                need to present their story, prove their talent, and own their
                professional image.
              </p>
            </div>
          </div>
        </div>
      </section>
      <LosPibesFooterEN />
    </div>
  );
}
