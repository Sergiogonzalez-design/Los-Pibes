import JuanProfilePage from "@/components/juan/JuanProfilePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juan Ignacio Morales — Goalkeeper",
  description:
    "Juan Ignacio Morales — goalkeeper from Mexico City. Liga Premier with Cañoneros FC. Career in Argentina and Mexico.",
};

export default function JuanENExamplesPage() {
  return <JuanProfilePage locale="en" />;
}
