"use client";

import type { BrandValue } from "@/lib/onix-content";
import { useState } from "react";

type Props = {
  values: BrandValue[];
  flipHint?: string;
  className?: string;
  cardClassName?: string;
};

export default function ValueFlipCards({
  values,
  flipHint,
  className = "mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6",
  cardClassName = "h-[200px] sm:h-[220px] md:h-[240px]",
}: Props) {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  function toggle(title: string) {
    setFlipped((prev) => ({ ...prev, [title]: !prev[title] }));
  }

  return (
    <ul className={className}>
      {values.map((value) => {
        const isFlipped = Boolean(flipped[value.title]);

        return (
          <li key={value.title} className="[perspective:1000px]">
            <button
              type="button"
              onClick={() => toggle(value.title)}
              aria-pressed={isFlipped}
              aria-label={flipHint ? `${value.title}. ${flipHint}` : value.title}
              className={`group relative w-full cursor-pointer text-left ${cardClassName}`}
            >
              <span
                className="relative block h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
                style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
              >
                <span className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-4 py-6 text-center [backface-visibility:hidden] sm:px-6 sm:py-8">
                  <span className="font-heading px-1 text-lg font-semibold leading-snug text-primary sm:text-2xl">
                    {value.title}
                  </span>
                  {flipHint ? (
                    <span className="font-body mt-2 text-xs text-secondary-foreground/70 sm:mt-3">
                      {flipHint}
                    </span>
                  ) : null}
                </span>
                <span className="absolute inset-0 flex flex-col justify-center overflow-y-auto rounded-2xl border border-primary/30 bg-black/50 px-4 py-4 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:px-6 sm:py-6">
                  <span className="font-heading text-sm font-semibold leading-snug text-primary sm:text-lg">
                    {value.title}
                  </span>
                  <span className="font-body mt-2 text-xs leading-relaxed text-secondary-foreground sm:mt-3 sm:text-sm md:text-base">
                    {value.description}
                  </span>
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
