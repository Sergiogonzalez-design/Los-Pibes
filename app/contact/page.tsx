import LosPibesFooter from "@/components/LosPibesFooter";
import LosPibesNavbar from "@/components/LosPibesNavbar";
import InquiryForm from "@/components/InquiryForm";
import Image from "next/image";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Onix Media—company inbox and Matias Morales Albil.",
};

const COMPANY_EMAIL = "contact@onixmedia.agency";
const MATIAS_EMAIL = "matiasmorales@onixmedia.agency";
const SERGIO_EMAIL = "sergiogonzalez@onixmedia.agency";
const NACHO_EMAIL = "nachoalfaro@onixmedia.agency";
const INSTAGRAM_URL = "https://www.instagram.com/onixmediafutbol/";
const YOUTUBE_URL = "https://www.youtube.com/@OnixMediaAgency";
const socialPhotos = [
  { src: "/Mati Iona.jpg", alt: "Mati jugando", position: "50% 26%" },
  { src: "/Sergi jugando.jpeg", alt: "Sergi jugando", position: "50% 30%" },
  { src: "/Nacho jugando.jpeg", alt: "Nacho jugando", position: "50% 30%" },
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbar />

      <section
        id="request-information"
        className="scroll-mt-32 mx-auto max-w-7xl border-b border-white/10 px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Request information
            </h2>
            <p className="font-body mt-2 max-w-xl text-sm text-secondary-foreground">
              Tell us about yourself and we'll get back to you within 24–48
              hours.
            </p>
            <div className="mt-8">
              <InquiryForm />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/25 p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Social Media
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
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-foreground">Team</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl border border-white/10 bg-black/25 p-6 sm:p-8"
            >
              <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-primary/30">
                <Image
                  src={member.image}
                  alt={`${member.name} profile`}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: member.imagePosition }}
                  priority={member.name === "Matias Morales Albil"}
                  sizes="160px"
                />
              </div>
              <h3 className="font-heading mt-5 text-2xl font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="font-body mt-2 text-xs font-medium uppercase tracking-wider text-primary">
                {member.role}
              </p>
              <p className="font-body mt-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Email
              </p>
              <a
                href={`mailto:${member.email}`}
                className="font-body mt-2 block max-w-full break-all text-base font-medium text-primary underline-offset-2 hover:underline"
              >
                {member.email}
              </a>
            </article>
          ))}
        </div>
      </section>

      <LosPibesFooter />
    </div>
  );
}
