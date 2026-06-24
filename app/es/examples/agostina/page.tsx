import AgostinaProfilePage from "@/components/agostina/AgostinaProfilePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agostina Holzheier",
  description:
    "Delantera argentina — Racing Club. Estadísticas de club, trayectoria y enlaces.",
};

export default function AgostinaESExamplesPage() {
  return <AgostinaProfilePage locale="es" />;
}
