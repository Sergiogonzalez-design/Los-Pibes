import IgnacioProfilePage from "@/components/ignacio/IgnacioProfilePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ignacio Atienzar",
  description:
    "Extremo y carrilero madrileño — Villanueva de la Cañada, CF Pozuelo, Siello CF. Estadísticas RFFM y trayectoria.",
};

export default function IgnacioESExamplesPage() {
  return <IgnacioProfilePage locale="es" />;
}
