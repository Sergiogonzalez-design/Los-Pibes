import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/onix-futbol-media-logo.png";

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
      ? "h-24 w-auto sm:h-28 md:h-32"
      : "h-16 w-auto sm:h-20 md:h-24";

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src={LOGO_SRC}
        alt="Onix Futbol Media"
        width={480}
        height={480}
        className={`${sizeClass} object-contain`}
        priority={priority}
        sizes={variant === "footer" ? "(max-width: 640px) 320px, 400px" : "(max-width: 768px) 280px, 360px"}
      />
    </Link>
  );
}
