const IONA_ROSTER =
  "https://ionagaels.com/sports/mens-soccer/roster/nacho-alfaro-monge/7135";
const FAU_ROSTER =
  "https://fausports.com/sports/mens-soccer/roster/nacho-alfaro/18064";
const TRANSFERMARKT =
  "https://www.transfermarkt.es/ignacio-alfaro/profil/spieler/551978";

export default function NachoFooter() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/40 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-heading text-xl font-semibold text-foreground">
            Nacho Alfaro
          </p>
          <p className="mt-2 font-body text-sm text-secondary-foreground">
            Goalkeeper · NCAA Division I · Costa Rica
          </p>
        </div>
        <div className="font-body text-sm text-secondary-foreground">
          <p className="font-semibold text-foreground">Contact</p>
          <p className="mt-2">
            Recruiting and media inquiries through FAU Men&apos;s Soccer.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 font-body text-sm">
          <a
            href={FAU_ROSTER}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-primary"
          >
            FAU roster
          </a>
          <a
            href={IONA_ROSTER}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-primary"
          >
            Iona roster
          </a>
          <a
            href={TRANSFERMARKT}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-primary"
          >
            Transfermarkt
          </a>
          <a
            href="https://www.instagram.com/nachoo_2908/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-primary"
          >
            Instagram
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-4 text-center font-body text-xs text-zinc-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Nacho Alfaro. All rights reserved.
      </p>
    </footer>
  );
}
