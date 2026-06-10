import LosPibesNavbar from "@/components/LosPibesNavbar";
import LosPibesFooter from "@/components/LosPibesFooter";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Highlight Videos",
  description: "All highlight videos currently used in the website.",
};

const highlightGroups = [
  {
    player: "Sergio Gonzalez",
    videos: [
      { title: "Iona Highlights", embed: "https://www.youtube.com/embed/MXZNl4Gz4sM" },
    ],
  },
  {
    player: "Thiago Cagna",
    videos: [
      { title: "2024 Highlights", embed: "https://www.youtube.com/embed/ClsDgUXCDLk" },
      { title: "2022 Highlights", embed: "https://www.youtube.com/embed/fCta2N4h9JI?start=12" },
      { title: "2021 Highlights", embed: "https://www.youtube.com/embed/1oWI82Ox5t0" },
    ],
  },
  {
    player: "Nacho Alfaro",
    videos: [
      { title: "2023 Highlights", embed: "https://www.youtube.com/embed/e9lnOoj7bWA" },
      { title: "Costa Rica Highlights", embed: "https://www.youtube.com/embed/2cRTMPZMAkk" },
      { title: "2022 Highlights", embed: "https://www.youtube.com/embed/CKD1y6-P4Q0" },
    ],
  },
  {
    player: "Agostina Holzheier",
    videos: [
      { title: "Highlight Video", embed: "https://www.youtube.com/embed/3HVWgpGZZOU" },
    ],
  },
] as const;

export default function AllHighlightVideosPage() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbar backHref="/products/highlight-video" />

      <section className="mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8">
        <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
          Product
        </p>
        <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
          All Highlight Videos
        </h1>
        <div className="mt-6">
          <Link
            href="/contact"
            className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact
          </Link>
        </div>

        <div className="mt-10 space-y-10">
          {highlightGroups.map((group) => (
            <section key={group.player}>
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                {group.player}
              </h2>
              <div className="mt-5 grid gap-6 md:grid-cols-2">
                {group.videos.map((video) => (
                  <article
                    key={`${group.player}-${video.title}`}
                    className="rounded-2xl border border-white/10 bg-black/25 p-4"
                  >
                    <p className="font-body mb-3 text-sm font-medium text-secondary-foreground">
                      {video.title}
                    </p>
                    <div className="overflow-hidden rounded-xl border border-white/10">
                      <iframe
                        src={video.embed}
                        title={`${group.player} - ${video.title}`}
                        className="aspect-video w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <LosPibesFooter />
    </div>
  );
}
