const RACING_PROFILE =
  "https://www.racingclub.com.ar/futbol/plantel-femenino/jugador/1570_holzheier/";

export default function AgostinaFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-black/40 py-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-heading text-xl font-semibold text-foreground">
            Agostina Holzheier
          </p>
          <p className="mt-2 font-body text-sm text-secondary-foreground">
            Forward · left foot · Racing Club · Argentina
          </p>
        </div>
        <div className="font-body text-sm text-secondary-foreground">
          <p className="font-semibold text-foreground">Contact</p>
          <p className="mt-2">
            Club and media inquiries through Racing Club (women&apos;s
            football).
          </p>
        </div>
        <div className="flex flex-wrap gap-4 font-body text-sm">
          <a
            href={RACING_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-primary"
          >
            Racing profile
          </a>
          <a
            href="https://www.instagram.com/agosholzheier/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-primary"
          >
            Instagram
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-4 text-center font-body text-xs text-zinc-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Agostina Holzheier. All rights reserved.
      </p>
    </footer>
  );
}
