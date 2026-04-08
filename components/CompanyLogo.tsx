import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/futbol-media-logo.png";

type CompanyLogoProps = {
  variant?: "nav" | "footer";
  className?: string;
  priority?: boolean;
};

export default function CompanyLogo({
  variant = "nav",
  className = "",
  priority = false,
}: CompanyLogoProps) {
  const sizeClass =
    variant === "footer"
      ? "h-16 w-auto sm:h-20"
      : "h-12 w-auto sm:h-14 md:h-16";

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src={LOGO_SRC}
        alt="Onix Media"
        width={320}
        height={320}
        className={`${sizeClass} object-contain`}
        priority={priority}
        sizes={variant === "footer" ? "280px" : "220px"}
      />
    </Link>
  );
}
