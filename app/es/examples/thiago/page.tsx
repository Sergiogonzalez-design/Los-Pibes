import ThiagoProfilePage from "@/components/thiago/ThiagoProfilePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thiago Cagna",
  description:
    "Mediocampista argentino — Iona University. Estadísticas, highlights y trayectoria.",
};

export default function ThiagoESExamplesPage() {
  return <ThiagoProfilePage locale="es" />;
}
