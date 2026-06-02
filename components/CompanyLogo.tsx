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
      ? "h-32 w-auto sm:h-36 md:h-40"
      : "h-20 w-auto sm:h-24 md:h-28";

  return (
    <Link href={href} className={`inline-flex items-center ${className}`}>
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
