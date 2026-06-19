import ExamplesIndex, { type ExampleCard } from "@/components/examples/ExamplesIndex";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import LosPibesNavbarES from "@/components/LosPibesNavbarES";

const premiumExamples: ExampleCard[] = [
  {
    href: "/examples/sergio",
    tag: "NCAA Division I · España",
    name: "Sergio Gonzalez",
    desc: "Mediocampista · Iona & George Mason · Perfil completo, estadísticas y medios",
  },
  {
    href: "/examples/nacho",
    tag: "NCAA Division I · Costa Rica",
    name: "Nacho Alfaro",
    desc: "Portero · Iona & FAU · Costa Rica — estadísticas, cronología y destacados",
  },
  {
    href: "/examples/rami",
    tag: "Segunda Federación · España",
    name: "Pablo Ramirez",
    desc: "Defensa central · Fuenlabrada · Cantera del Getafe — estadísticas, cronología y destacados",
  },
  {
    href: "/examples/jaco",
    tag: "NCAA Division I · España",
    name: "Jacobo Sanfeliu",
    desc: "Delantero · George Mason & SIUE · Barcelona — estadísticas, trayectoria y highlights",
  },
  {
    href: "/examples/juan",
    tag: "Liga Premier · México · Argentina",
    name: "Juan Ignacio Morales",
    desc: "Portero · Cañoneros FC · Ciudad de México — estadísticas, trayectoria y highlights",
  },
  {
    href: "/examples/bautista",
    tag: "NCAA Division I · Argentina",
    name: "Bautista Rossi Molinas",
    desc: "Delantero · Iona & Creighton · Buenos Aires — estadísticas, trayectoria y highlights",
  },
];

const basicExamples: ExampleCard[] = [
  {
    href: "/examples/thiago",
    tag: "NCAA Division I",
    name: "Thiago Cagna",
    desc: "Mediocampista · Iona · Buenos Aires — estadísticas, cronología y destacados",
  },
  {
    href: "/examples/agostina",
    tag: "Argentina · Primera",
    name: "Agostina Holzheier",
    desc: "Delantera · Racing Club — estadísticas de club, cronología y enlaces",
  },
];

export default function ExamplesIndexPageES() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarES backHref="/es" />
      <ExamplesIndex
        title="Ejemplos de nuestro trabajo"
        premiumLabel="Premium"
        basicLabel="Basic"
        viewLabel="Ver ejemplo →"
        premiumExamples={premiumExamples}
        basicExamples={basicExamples}
      />
      <LosPibesFooterES />
    </div>
  );
}
