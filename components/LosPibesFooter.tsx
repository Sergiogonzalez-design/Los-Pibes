import CompanyLogo from "@/components/CompanyLogo";
import Link from "next/link";

export default function LosPibesFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-black/40 py-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div>
          <CompanyLogo variant="footer" />
          <p className="mt-2 max-w-md font-body text-sm text-secondary-foreground">
            Custom websites for athletes—stats, video, and story in one site.
            We operate in the Americas.
          </p>
        </div>
        <div className="font-body text-sm">
          <p className="font-semibold text-foreground">Explore</p>
          <ul className="mt-2 flex flex-col gap-3 text-secondary-foreground">
            <li>
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>
            </li>
            <li>
              <span className="text-foreground">Onix Media</span>
            </li>
            <li className="max-w-[min(100%,20rem)] break-all">
              <a
                href="mailto:contact@onixmedia.agency"
                className="text-foreground underline decoration-primary/60 underline-offset-2 hover:text-primary"
              >
                contact@onixmedia.agency
              </a>
            </li>
            <li className="mt-2">
              <span className="text-foreground">Matias Morales Albil</span>
            </li>
            <li className="max-w-[min(100%,20rem)] break-all">
              <a
                href="mailto:matiasmorales@onixmedia.agency"
                className="text-foreground underline decoration-primary/60 underline-offset-2 hover:text-primary"
              >
                matiasmorales@onixmedia.agency
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-4 text-center font-body text-xs text-zinc-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Onix Media. All rights reserved.
      </p>
    </footer>
  );
}
