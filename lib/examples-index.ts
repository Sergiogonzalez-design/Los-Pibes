export type ExampleCard = {
  href: string;
  tag: string;
  name: string;
  desc: string;
  countries: string[];
};

export type ExampleCountrySlug = "spain" | "costa-rica" | "mexico" | "argentina";

export type ExampleCountryFilter = {
  slug: ExampleCountrySlug | "all";
  label: string;
};

type ExampleCardData = {
  href: string;
  name: string;
  countries: ExampleCountrySlug[];
  hidden?: boolean;
  en: { tag: string; desc: string };
  es: { tag: string; desc: string };
};

const exampleCardsData: ExampleCardData[] = [
  {
    href: "/examples/sergio",
    name: "Sergio Gonzalez",
    countries: ["spain"],
    en: {
      tag: "NCAA Division I · Spain",
      desc: "Midfielder · Iona & George Mason · Full profile, stats, and media",
    },
    es: {
      tag: "NCAA Division I · España",
      desc: "Mediocampista · Iona & George Mason · Perfil completo, estadísticas y medios",
    },
  },
  {
    href: "/examples/nacho",
    name: "Nacho Alfaro",
    countries: ["costa-rica"],
    en: {
      tag: "NCAA Division I · Costa Rica",
      desc: "Goalkeeper · Iona & FAU · Costa Rica — stats, timeline, and highlights",
    },
    es: {
      tag: "NCAA Division I · Costa Rica",
      desc: "Portero · Iona & FAU · Costa Rica — estadísticas, cronología y destacados",
    },
  },
  {
    href: "/examples/rami",
    name: "Pablo Ramirez",
    countries: ["spain"],
    en: {
      tag: "Segunda Federación · Spain",
      desc: "Center Back · Fuenlabrada · Getafe academy — stats, timeline, and highlights",
    },
    es: {
      tag: "Segunda Federación · España",
      desc: "Defensa central · Fuenlabrada · Cantera del Getafe — estadísticas, cronología y destacados",
    },
  },
  {
    href: "/examples/jaco",
    name: "Jacobo Sanfeliu",
    countries: ["spain"],
    en: {
      tag: "NCAA Division I · Spain",
      desc: "Striker · George Mason & SIUE · Barcelona — stats, timeline, and highlights",
    },
    es: {
      tag: "NCAA Division I · España",
      desc: "Delantero · George Mason & SIUE · Barcelona — estadísticas, trayectoria y highlights",
    },
  },
  {
    href: "/examples/juan",
    name: "Juan Ignacio Morales",
    countries: ["mexico", "argentina"],
    en: {
      tag: "Liga Premier · Mexico · Argentina",
      desc: "Goalkeeper · Cañoneros FC · Mexico City — stats, timeline, and highlights",
    },
    es: {
      tag: "Liga Premier · México · Argentina",
      desc: "Portero · Cañoneros FC · Ciudad de México — estadísticas, trayectoria y highlights",
    },
  },
  {
    href: "/examples/bautista",
    name: "Bautista Rossi Molinas",
    countries: ["argentina"],
    en: {
      tag: "NCAA Division I · Argentina",
      desc: "Forward · Iona & Creighton · Buenos Aires — stats, timeline, and highlights",
    },
    es: {
      tag: "NCAA Division I · Argentina",
      desc: "Delantero · Iona & Creighton · Buenos Aires — estadísticas, trayectoria y highlights",
    },
  },
  {
    href: "/examples/thiago",
    name: "Thiago Cagna",
    countries: ["argentina"],
    en: {
      tag: "NCAA Division I · Argentina",
      desc: "Midfielder · Iona · Buenos Aires — stats, timeline, and highlights",
    },
    es: {
      tag: "NCAA Division I · Argentina",
      desc: "Mediocampista · Iona · Buenos Aires — estadísticas, cronología y destacados",
    },
  },
  {
    href: "/examples/agostina",
    name: "Agostina Holzheier",
    countries: ["argentina"],
    hidden: true,
    en: {
      tag: "Argentina · Primera",
      desc: "Forward · Racing Club — club stats, timeline, and links",
    },
    es: {
      tag: "Argentina · Primera",
      desc: "Delantera · Racing Club — estadísticas de club, cronología y enlaces",
    },
  },
  {
    href: "/examples/ignacio",
    name: "Ignacio Atienzar",
    countries: ["spain"],
    en: {
      tag: "RFFM Madrid · Spain",
      desc: "Winger / wingback · Villanueva de la Cañada — stats, timeline, and links",
    },
    es: {
      tag: "RFFM Madrid · España",
      desc: "Extremo / carrilero · Villanueva de la Cañada — estadísticas, trayectoria y enlaces",
    },
  },
];

const countryLabels: Record<ExampleCountrySlug, { en: string; es: string }> = {
  spain: { en: "Spain", es: "España" },
  "costa-rica": { en: "Costa Rica", es: "Costa Rica" },
  mexico: { en: "Mexico", es: "México" },
  argentina: { en: "Argentina", es: "Argentina" },
};

const countryOrder: ExampleCountrySlug[] = [
  "spain",
  "costa-rica",
  "mexico",
  "argentina",
];

export function getExamplesForLocale(locale: "en" | "es"): ExampleCard[] {
  return exampleCardsData
    .filter((card) => !card.hidden)
    .map((card) => ({
    href: card.href,
    name: card.name,
    countries: card.countries,
    tag: card[locale].tag,
    desc: card[locale].desc,
  }));
}

export function getCountryFiltersForLocale(locale: "en" | "es"): ExampleCountryFilter[] {
  const visibleCards = exampleCardsData.filter((card) => !card.hidden);
  const used = new Set(visibleCards.flatMap((card) => card.countries));
  const allLabel = locale === "es" ? "Todos" : "All";

  return [
    { slug: "all", label: allLabel },
    ...countryOrder
      .filter((slug) => used.has(slug))
      .map((slug) => ({
        slug,
        label: countryLabels[slug][locale],
      })),
  ];
}

export const exampleCountrySlugs = [
  "all",
  ...countryOrder,
] as const;

export type ExampleFilterSlug = (typeof exampleCountrySlugs)[number];
