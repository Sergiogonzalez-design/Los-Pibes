import ThiagoLanguageSelector from "@/components/thiago/ThiagoLanguageSelector";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thiago Cagna — Select Language",
  description:
    "Thiago Cagna — Midfielder · NCAA Division I. Select your language.",
};

export default function ThiagoLanguageSelectorPage() {
  return <ThiagoLanguageSelector />;
}
