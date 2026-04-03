import Image from "next/image";

const photos = [
  { src: "/sergio-action.jpg", alt: "Action on the pitch" },
  { src: "/sergio-action.jpg", alt: "Training" },
  { src: "/sergio-action.jpg", alt: "Match day" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Gallery
        </h2>
        <p className="mt-2 font-body text-secondary-foreground">
          Add more images to <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">public/</code>{" "}
          and list them here.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {photos.map((p, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
