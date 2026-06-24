import type { NavItem } from "@/components/SiteHeader";

export const IGNACIO_WEBSITE_SLUG = "ignacio";

export const BESOCCER_PROFILE =
  "https://es.besoccer.com/jugador/partidos/i-atienzar-3390960";
export const BESOCCER_TRAJECTORY =
  "https://es.besoccer.com/jugador/trayectoria/i-atienzar-3390960";
export const EL_BALON_PROFILE =
  "https://www.elbalondemadrid.es/jugador/902219";

export const CONTACT_EMAIL = "ignaatienzar@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/igna.atienzar/";
export const HERO_IMAGE = "/Igna Atienzar 1.jpg";

const seasonRows = [
  {
    year: "2025/26",
    club: {
      en: "Villanueva de la Cañada — Primera Autonómica",
      es: "Villanueva de la Cañada — Primera Autonómica",
    },
    clubUrl: EL_BALON_PROFILE,
    apps: "24",
    starts: "15",
    goals: "3",
    minutes: { en: "1,407", es: "1.407" },
  },
  {
    year: "2024/25",
    club: {
      en: "CF Pozuelo — Primera Autonómica",
      es: "CF Pozuelo — Primera Autonómica",
    },
    clubUrl: BESOCCER_TRAJECTORY,
    apps: "6",
    starts: "2",
    goals: "0",
    minutes: { en: "176", es: "176" },
  },
  {
    year: "2023/24",
    club: {
      en: "Siello CF — Tercera RFEF",
      es: "Siello CF — Tercera RFEF",
    },
    clubUrl: BESOCCER_TRAJECTORY,
    apps: "17",
    starts: "9",
    goals: "1",
    minutes: { en: "872", es: "872" },
  },
] as const;

export function getIgnacioContent(locale: "en" | "es") {
  if (locale === "es") {
    return {
      menuLabel: "Menú",
      tagline: "Extremo / carrilero · #17 · RFFM Madrid",
      bio: "Ignacio Atienzar Sacristán es un extremo y carrilero derecho de Madrid, España. Tras una temporada con goles en Siello CF (2023/24) y un paso por CF Pozuelo (2024/25), es titular habitual en Villanueva de la Cañada en la Primera División Autonómica Aficionado 2025/26, con minutos también en Copa Aficionados RFFM.",
      heroStats: [
        { value: "47", label: "Partidos" },
        { value: "4", label: "Goles" },
        { value: "#17", label: "Dorsal" },
        { value: "RFFM", label: "Fútbol madrileño" },
      ],
      cta: {
        elBalon: "El Balón de Madrid",
        besoccer: "BeSoccer",
        instagram: "Instagram",
        contact: "Contacto",
      },
      navItems: [
        { type: "anchor", href: "#stats", label: "Datos" },
        { type: "anchor", href: "#seasons", label: "Temporadas" },
        { type: "anchor", href: "#timeline", label: "Trayectoria" },
        { type: "anchor", href: "#contact", label: "Contacto" },
      ] satisfies NavItem[],
      infoItems: [
        { k: "Fecha de nacimiento", v: "26/05/2003" },
        { k: "Posición", v: "Extremo / carrilero" },
        { k: "Ciudad", v: "Madrid, España" },
        { k: "Pie hábil", v: "Derecho" },
        { k: "Altura / Peso", v: "185 cm · 77 kg" },
      ],
      seasonsTitle: "Desglose por temporada",
      tableHeaders: {
        season: "Temporada",
        club: "Club",
        apps: "PJ",
        starts: "PT",
        minutes: "Min",
        goals: "G",
      },
      timelineTitle: "Trayectoria",
      milestones: [
        {
          year: "2025/26",
          title: "Villanueva de la Cañada — Primera Autonómica",
          body: "Titular habitual en el primer equipo del C.D. Villanueva de la Cañada: 24 partidos, 3 goles y 1.407 minutos entre liga y Copa Aficionados RFFM.",
        },
        {
          year: "2024/25",
          title: "CF Pozuelo — Primera Autonómica",
          body: "Seis apariciones con el primer equipo — 176 minutos.",
        },
        {
          year: "2023/24",
          title: "Siello CF — Tercera RFEF",
          body: "Temporada de despegue con Siello CF: 17 partidos, un gol y 872 minutos en Tercera RFEF.",
        },
        {
          year: "Origen",
          title: "Madrid — extremo y carrilero",
          body: "Jugador diestro de banda nacido en Madrid, España. Cómodo en ambos costados como extremo o carrilero.",
        },
      ],
      contactTitle: "Contacto",
      contactName: "Ignacio Atienzar Sacristán",
      contactRole: "Extremo / carrilero · #17 · RFFM Madrid",
      selectorTagline: "Extremo / carrilero · RFFM Madrid",
      selectorSubtitle: "Villanueva de la Cañada · CF Pozuelo · Siello CF",
      selectorPrompt: "Select language · Elige idioma",
      selectorBackAria: "Volver a ejemplos",
      seasons: seasonRows.map((s) => ({
        year: s.year,
        club: s.club.es,
        clubUrl: s.clubUrl,
        apps: s.apps,
        starts: s.starts,
        minutes: s.minutes.es,
        goals: s.goals,
      })),
    };
  }

  return {
    menuLabel: "Menu",
    tagline: "Winger / wingback · #17 · RFFM Madrid",
    bio: "Ignacio Atienzar Sacristán is a right-footed winger and wingback from Madrid, Spain. After a goal-scoring season with Siello CF (2023/24) and a spell at CF Pozuelo (2024/25), he is a regular for Villanueva de la Cañada in the 2025/26 Primera División Autonómica Aficionado — with Copa Aficionados RFFM minutes as well.",
    heroStats: [
      { value: "47", label: "Career Games" },
      { value: "4", label: "Career Goals" },
      { value: "#17", label: "Shirt" },
      { value: "RFFM", label: "Madrid Football" },
    ],
    cta: {
      elBalon: "El Balón de Madrid",
      besoccer: "BeSoccer",
      instagram: "Instagram",
      contact: "Contact",
    },
    navItems: [
      { type: "anchor", href: "#stats", label: "Stats" },
      { type: "anchor", href: "#seasons", label: "Seasons" },
      { type: "anchor", href: "#timeline", label: "Career" },
      { type: "anchor", href: "#contact", label: "Contact" },
    ] satisfies NavItem[],
    infoItems: [
      { k: "Date of birth", v: "26 May 2003" },
      { k: "Position", v: "Winger / wingback" },
      { k: "Hometown", v: "Madrid, Spain" },
      { k: "Strong foot", v: "Right" },
      { k: "Height / weight", v: "185 cm · 77 kg" },
    ],
    seasonsTitle: "Season breakdown",
    tableHeaders: {
      season: "Season",
      club: "Club",
      apps: "GP",
      starts: "GS",
      minutes: "MIN",
      goals: "G",
    },
    timelineTitle: "Career timeline",
    milestones: [
      {
        year: "2025/26",
        title: "Villanueva de la Cañada — Primera Autonómica",
        body: "Regular in the first team at C.D. Villanueva de la Cañada: 24 appearances, 3 goals, and 1,407 minutes across league and Copa Aficionados RFFM.",
      },
      {
        year: "2024/25",
        title: "CF Pozuelo — Primera Autonómica",
        body: "Six senior appearances with the first team — 176 minutes.",
      },
      {
        year: "2023/24",
        title: "Siello CF — Tercera RFEF",
        body: "Breakthrough season with Siello CF: 17 games, one goal, and 872 minutes in Tercera RFEF.",
      },
      {
        year: "Background",
        title: "Madrid — winger & wingback",
        body: "Right-footed wide player from Madrid, Spain. Comfortable on either flank as a winger or wingback.",
      },
    ],
    contactTitle: "Contact",
    contactName: "Ignacio Atienzar Sacristán",
    contactRole: "Winger / wingback · #17 · RFFM Madrid",
    selectorTagline: "Winger / wingback · RFFM Madrid",
    selectorSubtitle: "Villanueva de la Cañada · CF Pozuelo · Siello CF",
    selectorPrompt: "Select language · Elige idioma",
    selectorBackAria: "Back to examples",
    seasons: seasonRows.map((s) => ({
      year: s.year,
      club: s.club.en,
      clubUrl: s.clubUrl,
      apps: s.apps,
      starts: s.starts,
      minutes: s.minutes.en,
      goals: s.goals,
    })),
  };
}
