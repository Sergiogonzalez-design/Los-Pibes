import LosPibesFooter from "@/components/LosPibesFooter";
import LosPibesNavbar from "@/components/LosPibesNavbar";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Onix Media—company inbox and Matias Morales Albil.",
};

const COMPANY_EMAIL = "Onixfutbolmedia@gmail.com";
const MATIAS_EMAIL = "matumorales17@gmail.com";
const companyMailto = `mailto:${COMPANY_EMAIL.toLowerCase()}`;

const ONIX_INSTAGRAM = "https://www.instagram.com/onixmediafutbol/";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbar />

      <section className="mx-auto max-w-7xl border-b border-white/10 px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8">
        <h1 className="sr-only">Contact</h1>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Team
            </h2>
            <div className="mt-8">
              <article className="rounded-2xl border border-white/10 bg-black/25 p-6 sm:p-8">
                <div className="flex flex-col gap-5">
                  <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border border-primary/30">
                    <Image
                      src="/matias-morales.png"
                      alt="Matias Morales Albil in Iona University kit, celebrating on the pitch"
                      width={160}
                      height={160}
                      className="h-full w-full object-cover object-[78%_34%]"
                      priority
                      sizes="160px"
                    />
                  </div>
                  <div className="min-w-0 w-full">
                    <h3 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                      Matias Morales Albil
                    </h3>
                    <p className="font-body mt-2 text-xs font-medium uppercase tracking-wider text-primary">
                      Onix Media
                    </p>
                    <p className="font-body mt-4 text-base leading-relaxed text-secondary-foreground">
                      Former Racing Club (Argentina) player; three years as a
                      starter at Iona University with deep experience in the
                      college game. Onix Media operates in the Americas, helping
                      athletes put their stats and story on a site that matches
                      how they play.
                    </p>
                    <p className="font-body mt-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Company email
                    </p>
                    <a
                      href={companyMailto}
                      className="font-body mt-2 block max-w-full break-all text-lg font-medium text-primary underline-offset-2 hover:underline"
                    >
                      {COMPANY_EMAIL}
                    </a>
                    <a
                      href={companyMailto}
                      className="font-body mt-4 inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Open mail app
                    </a>
                    <p className="font-body mt-8 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Direct (Matias Morales Albil)
                    </p>
                    <a
                      href={`mailto:${MATIAS_EMAIL}`}
                      className="font-body mt-2 block max-w-full break-all text-base font-medium text-primary/90 underline-offset-2 hover:underline"
                    >
                      {MATIAS_EMAIL}
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Explore
            </h2>
            <div className="mt-8 flex flex-col gap-6">
              <div className="rounded-2xl border border-white/10 bg-background/60 p-8">
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Contact
                </p>
                <p className="font-body mt-2 font-medium text-foreground">
                  Matias Morales Albil
                </p>
                <p className="font-body mt-1 text-xs text-secondary-foreground">
                  Onix Media
                </p>
                <p className="font-body mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Company
                </p>
                <a
                  href={companyMailto}
                  className="font-body mt-2 block max-w-full break-all text-base font-medium text-primary underline-offset-2 hover:underline"
                >
                  {COMPANY_EMAIL}
                </a>
                <p className="font-body mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Direct
                </p>
                <a
                  href={`mailto:${MATIAS_EMAIL}`}
                  className="font-body mt-2 block max-w-full break-all text-base font-medium text-primary/90 underline-offset-2 hover:underline"
                >
                  {MATIAS_EMAIL}
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-background/60 p-8">
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Social
                </p>
                <p className="font-body mt-2 font-medium text-foreground">
                  Onix Media
                </p>
                <a
                  href={ONIX_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body mt-3 inline-flex font-medium text-primary underline-offset-2 hover:underline"
                >
                  @onixmediafutbol on Instagram →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <LosPibesFooter />
    </div>
  );
}
