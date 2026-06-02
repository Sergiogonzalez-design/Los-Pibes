import LosPibesNavbarES from "@/components/LosPibesNavbarES";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import InquiryFormES from "@/components/InquiryFormES";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Onix Media—bandeja de la empresa y Matias Morales Albil.",
};

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

export default function ContactPageES() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarES backHref="/es" />

      <section
        id="solicitar-informacion"
        className="scroll-mt-32 mx-auto max-w-7xl border-b border-white/10 px-4 pt-36 pb-16 sm:px-6 sm:pt-40 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Solicitar información
            </h2>
            <p className="font-body mt-2 max-w-xl text-sm text-secondary-foreground">
              Cuéntanos sobre ti y te responderemos en un plazo de 24–48 horas.
            </p>
            <div className="mt-8">
              <InquiryFormES />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/25 p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Redes Sociales
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
        <h2 className="font-heading text-2xl font-bold text-foreground">Equipo</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl border border-white/10 bg-black/25 p-6 sm:p-8"
            >
              <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-primary/30">
                <Image
                  src={member.image}
                  alt={`${member.name} perfil`}
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
                Correo
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

      <LosPibesFooterES />
    </div>
  );
}
