import JuanLanguageSelector from "@/components/juan/JuanLanguageSelector";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juan Ignacio Morales — Select Language",
  description:
    "Juan Ignacio Morales — Goalkeeper · Mexico & Argentina. Select your language.",
};

export default function JuanLanguageSelectorPage() {
  return <JuanLanguageSelector />;
}
