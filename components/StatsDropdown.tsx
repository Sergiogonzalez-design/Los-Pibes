"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type StatsDropdownProps = {
  label: string;
  links: { href: string; label: string; active?: boolean }[];
};

export default function StatsDropdown({ label, links }: StatsDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen((value) => (value ? false : value));
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="group relative">
      <button
        type="button"
        className="cursor-pointer select-none transition-colors hover:text-primary"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        {label}
      </button>
      <ul
        className={`absolute left-1/2 top-full z-20 mt-3 w-36 -translate-x-1/2 rounded-xl border border-white/10 bg-background/95 p-2 shadow-xl backdrop-blur-md transition-all duration-150 ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0 lg:group-hover:visible lg:group-hover:opacity-100"
        }`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2 text-xs transition-colors hover:bg-white/5 hover:text-primary ${
                link.active ? "text-primary" : "text-secondary-foreground"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
