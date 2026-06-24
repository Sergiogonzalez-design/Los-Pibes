import ThiagoProfilePage from "@/components/thiago/ThiagoProfilePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thiago Cagna",
  description:
    "Argentine midfielder — Iona University. Career stats, highlights, and bio.",
};

export default function ThiagoENExamplesPage() {
  return <ThiagoProfilePage locale="en" />;
}
