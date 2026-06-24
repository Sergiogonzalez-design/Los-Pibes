import IgnacioLanguageSelector from "@/components/ignacio/IgnacioLanguageSelector";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ignacio Atienzar — Select Language",
  description:
    "Ignacio Atienzar — Winger / wingback · RFFM Madrid. Select your language.",
};

export default function IgnacioLanguageSelectorPage() {
  return <IgnacioLanguageSelector />;
}
