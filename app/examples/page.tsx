import ExamplesIndex, { type ExampleCard } from "@/components/examples/ExamplesIndex";
import OnixPageShell from "@/components/OnixPageShell";

const premiumExamples: ExampleCard[] = [
  {
    href: "/examples/sergio",
    tag: "NCAA Division I · Spain",
    name: "Sergio Gonzalez",
    desc: "Midfielder · Iona & George Mason · Full profile, stats, and media",
  },
  {
    href: "/examples/nacho",
    tag: "NCAA Division I · Costa Rica",
    name: "Nacho Alfaro",
    desc: "Goalkeeper · Iona & FAU · Costa Rica — stats, timeline, and highlights",
  },
  {
    href: "/examples/rami",
    tag: "Segunda Federación · Spain",
    name: "Pablo Ramirez",
    desc: "Center Back · Fuenlabrada · Getafe academy — stats, timeline, and highlights",
  },
  {
    href: "/examples/jaco",
    tag: "NCAA Division I · Spain",
    name: "Jacobo Sanfeliu",
    desc: "Striker · George Mason & SIUE · Barcelona — stats, timeline, and highlights",
  },
  {
    href: "/examples/juan",
    tag: "Liga Premier · Mexico · Argentina",
    name: "Juan Ignacio Morales",
    desc: "Goalkeeper · Cañoneros FC · Mexico City — stats, timeline, and highlights",
  },
  {
    href: "/examples/bautista",
    tag: "NCAA Division I · Argentina",
    name: "Bautista Rossi Molinas",
    desc: "Forward · Iona & Creighton · Buenos Aires — stats, timeline, and highlights",
  },
];

const basicExamples: ExampleCard[] = [
  {
    href: "/examples/thiago",
    tag: "NCAA Division I",
    name: "Thiago Cagna",
    desc: "Midfielder · Iona · Buenos Aires — stats, timeline, and highlights",
  },
  {
    href: "/examples/agostina",
    tag: "Argentina · Primera",
    name: "Agostina Holzheier",
    desc: "Forward · Racing Club — club stats, timeline, and links",
  },
];

export default function ExamplesIndexPage() {
  return (
    <OnixPageShell>
      <ExamplesIndex
        title="Examples of our work"
        premiumLabel="Premium"
        basicLabel="Basic"
        viewLabel="View example →"
        premiumExamples={premiumExamples}
        basicExamples={basicExamples}
      />
    </OnixPageShell>
  );
}
