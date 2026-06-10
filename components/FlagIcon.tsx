import US from "country-flag-icons/react/3x2/US";

type FlagIconProps = {
  country: "us" | "es";
  className?: string;
};

function SpainFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 22.5 15"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="22.5" height="15" fill="#D03433" />
      <rect y="3.75" width="22.5" height="7.5" fill="#FBCA46" />
    </svg>
  );
}

export default function FlagIcon({ country, className = "h-10 w-[3.75rem]" }: FlagIconProps) {
  const flagClassName = `${className} overflow-hidden rounded-sm shadow-sm`;

  if (country === "us") {
    return <US className={flagClassName} aria-hidden="true" />;
  }

  return <SpainFlag className={flagClassName} />;
}
