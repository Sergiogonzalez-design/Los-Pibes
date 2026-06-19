import JuanProfilePage from "@/components/juan/JuanProfilePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juan Ignacio Morales — Portero",
  description:
    "Juan Ignacio Morales — portero de Ciudad de México. Liga Premier con Cañoneros FC. Trayectoria en Argentina y México.",
};

export default function JuanESExamplesPage() {
  return <JuanProfilePage locale="es" />;
}
