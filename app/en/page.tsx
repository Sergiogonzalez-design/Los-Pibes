import HomeHeroCarousel from "@/components/HomeHeroCarousel";
import ExamplesIndex from "@/components/examples/ExamplesIndex";
import InquiryForm from "@/components/InquiryForm";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import LosPibesNavbarEN from "@/components/LosPibesNavbarEN";
import ProductServiceCards from "@/components/ProductServiceCards";
import ValueFlipCards from "@/components/ValueFlipCards";
import {
  getCountryFiltersForLocale,
  getExamplesForLocale,
} from "@/lib/examples-index";
import { brandValues } from "@/lib/onix-content";
import Image from "next/image";

const PACKS_PDF = "/onix-media-packs.pdf";

const productPacksEN = [
  {
    title: "Elite Digital Profile",
    description:
      "Includes Highlight Video, Performance Report, and Professional Website — the complete pack to present your talent with maximum visibility.",
  },
  {
    title: "Performance Profile",
    description:
      "Includes Highlight Video and Performance Report — ideal for showing your best actions and key data in a professional format.",
  },
];

const pillarsEN = [
  {
    title: "Purpose",
    description:
      "Empower soccer players to show their true potential on and off the pitch, connecting them with better opportunities through a professional and authentic presence.",
  },
  {
    title: "Mission",
    description:
      "Help soccer players stand out in an increasingly competitive environment through high-quality digital solutions, including custom websites, highlight videos, and performance reports that reflect their talent, effort, and journey.",
  },
  {
    title: "Vision",
    description:
      "Build a future where every soccer player has the tools they need to present their story, prove their talent, and own their professional image.",
  },
];

const MATIAS_EMAIL = "matiasmorales@onixmedia.agency";
const SERGIO_EMAIL = "sergiogonzalez@onixmedia.agency";
const NACHO_EMAIL = "nachoalfaro@onixmedia.agency";
const INSTAGRAM_URL = "https://www.instagram.com/onixmedia.agency/";
const YOUTUBE_URL = "https://www.youtube.com/@OnixMediaAgency";

const socialPhotos = [
  { src: "/Mati Iona.jpg", alt: "Mati playing", position: "50% 26%" },
  { src: "/Sergi jugando.jpeg", alt: "Sergi playing", position: "50% 30%" },
  { src: "/Nacho jugando.jpeg", alt: "Nacho playing", position: "50% 30%" },
  { src: "/Rami foto.jpeg", alt: "Rami", position: "50% 18%" },
] as const;

const teamMembers = [
  {
    name: "Matias Morales Albil",
    role: "Onix Media",
    email: MATIAS_EMAIL,
    image: "/matias-morales.png",
    imagePosition: "92% 34%",
  },
  {
    name: "Sergio Gonzalez",
    role: "Onix Media",
    email: SERGIO_EMAIL,
    image: "/Sergio perfil.jpeg",
    imagePosition: "50% 25%",
  },
  {
    name: "Nacho Alfaro",
    role: "Onix Media",
    email: NACHO_EMAIL,
    image: "/Nacho perfil.jpeg",
    imagePosition: "50% 24%",
  },
] as const;

export default function HomeEN() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarEN backHref="/" />

      <section
        id="home"
        className="relative scroll-mt-24 overflow-hidden border-b border-white/10 pt-28 pb-16 sm:scroll-mt-28 sm:pt-32 sm:pb-20"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(224, 198, 149, 0.35), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_480px]">
            <div>
              <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">
                Onix Media
              </p>
              <h1 className="font-heading max-w-3xl text-4xl font-bold leading-[1.1] text-foreground sm:text-6xl md:text-7xl">
                Websites built for{" "}
                <span className="text-gradient-gold">athletes</span>
              </h1>
              <p className="font-body mt-4 max-w-2xl text-base font-semibold text-primary sm:text-lg md:text-xl">
                Where Talent Meets Visibility.
              </p>
              <p className="font-body mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground sm:mt-6 sm:text-lg md:text-xl">
                Create a professional profile with stats, career path, videos, and
                achievements. Update it and share it easily with clubs, agents, and
                coaches.
              </p>
              <div className="mt-8 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-3">
                <a
                  href="#examples"
                  className="font-body inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto sm:py-2.5"
                >
                  See a Real Example
                </a>
                <a
                  href="#product"
                  className="font-body inline-flex w-full items-center justify-center rounded-lg border border-foreground/20 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10 sm:w-auto sm:py-2.5"
                >
                  Product
                </a>
                <a
                  href="#contact"
                  className="font-body inline-flex w-full items-center justify-center rounded-lg border border-foreground/20 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10 sm:w-auto sm:py-2.5"
                >
                  Create my Profile
                </a>
              </div>
            </div>
            <div className="w-full">
              <HomeHeroCarousel />
            </div>
          </div>
        </div>
      </section>

      <section
        id="product"
        className="scroll-mt-24 border-t border-white/10 bg-background py-12 sm:scroll-mt-28 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
            Product
          </p>
          <h2 className="font-heading mt-3 text-2xl font-bold leading-tight text-foreground sm:mt-4 sm:text-4xl md:text-5xl">
            Our services
          </h2>
          <p className="font-body mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground sm:text-lg">
            Three formats to showcase your talent. Tap each card to learn more.
          </p>
          <ProductServiceCards
            locale="en"
            eyebrow="Product"
            openHint="Tap to open"
            flipHint="Tap to flip"
            closeLabel="Close"
          />

          <div className="mt-14 border-t border-white/10 pt-12 sm:mt-16 sm:pt-16">
            <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Packs and services
            </h3>
            <p className="font-body mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground sm:text-lg">
              Choose the pack that fits your career. Tap each card to see what it
              includes.
            </p>
            <ValueFlipCards
              values={productPacksEN}
              flipHint="Tap to flip"
              className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5"
              cardClassName="h-[230px] sm:h-[240px] md:h-[260px]"
            />
          </div>

          <div className="mt-14 border-t border-white/10 pt-12 sm:mt-16 sm:pt-16">
            <h3 className="font-heading text-xl font-bold text-foreground sm:text-3xl">
              Pack details
            </h3>
            <p className="font-body mt-3 max-w-2xl text-sm text-secondary-foreground sm:text-base">
              Review the full PDF with complete information about our packs.
            </p>
            <a
              href={PACKS_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body mt-5 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:mt-6 sm:w-auto sm:py-2.5"
            >
              Open PDF
            </a>
          </div>
        </div>
      </section>

      <ExamplesIndex
        id="examples"
        embedded
        title="Examples"
        viewLabel="View profile →"
        examples={getExamplesForLocale("en")}
        countryFilters={getCountryFiltersForLocale("en")}
      />

      <section
        id="mission"
        className="scroll-mt-24 border-t border-white/10 bg-background py-16 sm:scroll-mt-28 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
            Onix Media
          </p>
          <h2 className="font-heading mt-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Purpose, Mission, and Vision
          </h2>
          <ValueFlipCards
            values={pillarsEN}
            flipHint="Tap to flip"
            className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-6"
            cardClassName="h-[240px] sm:h-[260px] md:h-[280px]"
          />

          <div
            id="values"
            className="scroll-mt-24 mt-16 border-t border-white/10 pt-12 sm:mt-20 sm:scroll-mt-28 sm:pt-16"
          >
            <h3 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Values
            </h3>
            <p className="font-body mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground sm:text-lg">
              The principles that guide how we work with every player and every
              project.
            </p>
            <ValueFlipCards values={brandValues} flipHint="Tap to flip" />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/10 bg-background py-16 sm:scroll-mt-28 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
            Contact
          </p>
          <h2 className="font-heading mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Request information
          </h2>
          <p className="font-body mt-2 max-w-xl text-sm text-secondary-foreground">
            Tell us about yourself and we&apos;ll get back to you within 24–48 hours.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
            <aside className="lg:col-span-5">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/25 p-6 sm:p-8">
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  Social media
                </h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Instagram
                  </a>
                  <a
                    href={YOUTUBE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
                  >
                    YouTube
                  </a>
                </div>
                <div className="mt-6 grid flex-1 grid-cols-2 gap-4">
                  {socialPhotos.map((photo) => (
                    <div
                      key={photo.src}
                      className="relative min-h-[120px] overflow-hidden rounded-xl border border-white/10"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        style={{ objectPosition: photo.position }}
                        sizes="(max-width: 1024px) 50vw, 240px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-16">
            <h3 className="font-heading text-2xl font-bold text-foreground">Team</h3>
            <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="min-w-0 rounded-2xl border border-white/10 bg-black/25 p-5 sm:p-8"
                >
                  <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-2xl border border-primary/30 sm:mx-0 sm:h-40 sm:w-40">
                    <Image
                      src={member.image}
                      alt={`${member.name} profile`}
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: member.imagePosition }}
                      sizes="160px"
                    />
                  </div>
                  <h4 className="font-heading mt-5 text-center text-xl font-semibold text-foreground sm:text-left sm:text-2xl">
                    {member.name}
                  </h4>
                  <p className="font-body mt-2 text-center text-xs font-medium uppercase tracking-wider text-primary sm:text-left">
                    {member.role}
                  </p>
                  <p className="font-body mt-6 text-center text-xs font-semibold uppercase tracking-wider text-zinc-500 sm:text-left">
                    Email
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="font-body mt-2 block max-w-full break-all text-center text-sm font-medium text-primary underline-offset-2 hover:underline sm:text-left sm:text-base"
                  >
                    {member.email}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LosPibesFooterEN />
    </div>
  );
}
