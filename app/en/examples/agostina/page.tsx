import AgostinaProfilePage from "@/components/agostina/AgostinaProfilePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agostina Holzheier",
  description:
    "Argentine forward — Racing Club. Club stats, career path, and links.",
};

export default function AgostinaENExamplesPage() {
  return <AgostinaProfilePage locale="en" />;
}
