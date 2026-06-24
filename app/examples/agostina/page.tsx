import AgostinaLanguageSelector from "@/components/agostina/AgostinaLanguageSelector";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agostina Holzheier — Select Language",
  description:
    "Agostina Holzheier — Forward · Racing Club. Select your language.",
};

export default function AgostinaLanguageSelectorPage() {
  return <AgostinaLanguageSelector />;
}
