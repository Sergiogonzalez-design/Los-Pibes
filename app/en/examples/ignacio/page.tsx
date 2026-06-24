import IgnacioProfilePage from "@/components/ignacio/IgnacioProfilePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ignacio Atienzar",
  description:
    "Spanish winger and wingback from Madrid — Villanueva de la Cañada, CF Pozuelo, Siello CF. RFFM stats and career path.",
};

export default function IgnacioENExamplesPage() {
  return <IgnacioProfilePage locale="en" />;
}
