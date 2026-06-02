import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/Onix media new color logo.png";

type CompanyLogoProps = {
  variant?: "nav" | "footer";
  className?: string;
  priority?: boolean;
  href?: string;
};

export default function CompanyLogo({
  variant = "nav",
  className = "",
  priority = false,
  href = "/",
}: CompanyLogoProps) {
  const sizeClass =
    variant === "footer"
      ? "h-32 w-auto sm:h-40 md:h-48"
      : "h-24 w-auto sm:h-28 md:h-32";

  return (
    <Link href={href} className={`inline-flex items-center ${className}`}>
      <Image
        src={LOGO_SRC}
        alt="Onix Futbol Media"
        width={480}
        height={480}
        className={`${sizeClass} object-contain`}
        priority={priority}
        sizes={variant === "footer" ? "(max-width: 640px) 384px, 768px" : "(max-width: 768px) 384px, 512px"}
      />
    </Link>
  );
}
