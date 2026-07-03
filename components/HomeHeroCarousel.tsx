"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const slides = [
  { src: "/Sergi jugando.jpeg",    alt: "Sergi",          position: "50% 28%" },
  { src: "/Rami sonriendo.jpeg",   alt: "Rami",           position: "50% 15%" },
  { src: "/Mati Iona.jpg",         alt: "Mati",           position: "50% 18%" },
  { src: "/Nacho jugando.jpeg",    alt: "Nacho",          position: "50% 22%" },
  { src: "/Jaco jugando.jpg",      alt: "Jaco",           position: "12% 20%" },
  { src: "/Igna Atienzar 1.jpg",   alt: "Igna",           position: "40% 30%" },
  { src: "/Juan jugando.jpeg",     alt: "Juan Morales",   position: "45% center" },
  { src: "/Bautista gritando.jpg", alt: "Bauti",          position: "50% 30%" },
  { src: "/Loren debut 2da 3.jpeg", alt: "Loren",         position: "50% 25%" },
] as const;

export default function HomeHeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() =>
    setActive((i) => (i - 1 + slides.length) % slides.length), []);
  const next = useCallback(() =>
    setActive((i) => (i + 1) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30"
      style={{ aspectRatio: "4/5" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Images */}
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 768px) 100vw, 480px"
          style={{ objectPosition: slide.position }}
          className={`object-cover transition-opacity duration-[1200ms] ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Left arrow */}
      <button
        onClick={prev}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2.5 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:border-primary hover:text-primary"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2.5 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:border-primary hover:text-primary"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-primary" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Caption */}
      <p className="absolute bottom-10 left-0 right-0 z-10 text-center font-body text-xs font-medium uppercase tracking-widest text-white/70">
        {slides[active].alt}
      </p>
    </div>
  );
}
