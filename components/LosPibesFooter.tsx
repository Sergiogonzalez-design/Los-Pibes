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
          <p className="mt-2 font-body text-sm font-semibold text-primary">
            Where Talent Meets Visibility.
          </p>
          <p className="mt-1 max-w-md font-body text-sm text-secondary-foreground">
            Custom websites for athletes—stats, video, and story in one site.
          </p>
        </div>
        <div className="font-body text-sm">
          <p className="font-semibold text-foreground">Explore</p>
          <ul className="mt-2 flex flex-col gap-3 text-secondary-foreground">
            <li>
              <Link
                href="/contact#request-information"
                className="text-primary hover:underline"
              >
                Contact us
              </Link>
            </li>
            <li>
              <span className="text-foreground">Onix Media</span>
            </li>
            <li className="max-w-[min(100%,20rem)] break-all">
              <a
                href="mailto:contact@onixmedia.agency"
                className="text-primary hover:underline"
              >
                contact@onixmedia.agency
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/onixmediafutbol/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-foreground hover:text-primary">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-body text-xs text-zinc-500">
          © {new Date().getFullYear()} Onix Media. All rights reserved.
        </p>
        <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-body text-xs text-secondary-foreground">
          <li>
            <Link
              href="/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/accessibility" className="hover:text-primary">
              Accessibility
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
