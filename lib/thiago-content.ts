import type { NavItem } from "@/components/SiteHeader";

export const THIAGO_WEBSITE_SLUG = "thiago";
export const IONA_ROSTER =
  "https://ionagaels.com/sports/mens-soccer/roster/thiago-cagna/7618";
export const INSTAGRAM_URL = "https://www.instagram.com/thiagocagna/";
export const CONTACT_EMAIL = "contact@onixmedia.agency";
export const HERO_IMAGE = "/thiago-cagna-hero.png";

const seasonRows = [
  {
    year: "2024",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "19",
    goals: "2",
    ast: "10",
    note: {
      en: "18 starts · 14 pts · All-MAAC First Team (MID) · All-ECAC Second Team · MAAC All-Championship Team · MAAC All-Academic",
      es: "18 titularidades · 14 pts · All-MAAC First Team (MID) · All-ECAC Second Team · MAAC All-Championship Team · MAAC All-Academic",
    },
  },
  {
    year: "2023",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "15",
    goals: "5",
    ast: "2",
    note: {
      en: "11 starts · 12 pts · All-MAAC First Team · MAAC All-Championship Team · MAAC All-Academic · three game-winning goals",
      es: "11 titularidades · 12 pts · All-MAAC First Team · MAAC All-Championship Team · MAAC All-Academic · tres goles de la victoria",
    },
  },
  {
    year: "2022",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "17",
    goals: "0",
    ast: "3",
    note: {
      en: "12 starts · 3 pts · MAAC All-Academic",
      es: "12 titularidades · 3 pts · MAAC All-Academic",
    },
  },
  {
    year: "2021",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "11",
    goals: "1",
    ast: "1",
    note: {
      en: "4 starts · first collegiate goal (GW vs Quinnipiac) · MAAC All-Academic",
      es: "4 titularidades · primer gol universitario (GW vs Quinnipiac) · MAAC All-Academic",
    },
  },
  {
    year: "2020–21",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "5",
    goals: "0",
    ast: "0",
    note: {
      en: "Freshman season",
      es: "Temporada de freshman",
    },
  },
] as const;

const highlightClips = [
  {
    href: "https://www.youtube.com/watch?v=ClsDgUXCDLk",
    title: { en: "2024 highlights", es: "Highlights 2024" },
    desc: {
      en: "Fifth year at Iona — MAAC honors and championship run.",
      es: "Quinto año en Iona — honores MAAC y camino al campeonato.",
    },
  },
  {
    href: "https://www.youtube.com/watch?v=fCta2N4h9JI&t=12s",
    title: { en: "2022 highlights", es: "Highlights 2022" },
    desc: {
      en: "Junior season — full year in the MAAC.",
      es: "Temporada junior — año completo en la MAAC.",
    },
  },
  {
    href: "https://www.youtube.com/watch?v=1oWI82Ox5t0",
    title: { en: "2021 highlights", es: "Highlights 2021" },
    desc: {
      en: "Sophomore year — first collegiate goal and early impact.",
      es: "Segundo año — primer gol universitario e impacto temprano.",
    },
  },
] as const;

export function getThiagoContent(locale: "en" | "es") {
  if (locale === "es") {
    return {
      menuLabel: "Menú",
      tagline: "Mediocampista · #25 · NCAA Division I",
      bio: "Mediocampista de Buenos Aires, Argentina. Cinco temporadas en Iona (2020–2024): All-Academic MAAC, All-MAAC First Team y MAAC All-Championship Team, con experiencia juvenil en Estudiantes de La Plata antes de la universidad.",
      heroStats: [
        { value: "67", label: "Partidos" },
        { value: "8", label: "Goles" },
        { value: "16", label: "Asistencias" },
        { value: "MAAC", label: "All-Conference" },
      ],
      cta: {
        iona: "Plantel Iona",
        instagram: "Instagram",
        contact: "Contacto",
      },
      navItems: [
        { type: "anchor", href: "#stats", label: "Datos" },
        { type: "anchor", href: "#seasons", label: "Temporadas" },
        { type: "anchor", href: "#highlights", label: "Highlights" },
        { type: "anchor", href: "#timeline", label: "Trayectoria" },
        { type: "anchor", href: "#contact", label: "Contacto" },
      ] satisfies NavItem[],
      infoItems: [
        { k: "Altura", v: "1,83 m" },
        { k: "Peso", v: "75 kg" },
        { k: "Posición", v: "Mediocampista" },
        { k: "Ciudad", v: "Buenos Aires, Argentina" },
        { k: "Pie hábil", v: "Derecho" },
      ],
      seasonsTitle: "Desglose por temporada",
      tableHeaders: {
        season: "Temporada",
        school: "Universidad",
        conf: "Conf.",
        apps: "PJ",
        goals: "G",
        ast: "A",
        notes: "Notas",
      },
      highlightsTitle: "Highlights",
      watchYoutube: "Ver en YouTube →",
      timelineTitle: "Trayectoria",
      milestones: [
        {
          year: "2024",
          title: "Iona — Quinto año",
          body: "All-MAAC First Team (mediocampo), All-ECAC Second Team, MAAC All-Championship Team, MAAC All-Academic. 19 partidos, 14 puntos (2G, 10A), tercero del equipo en minutos.",
        },
        {
          year: "2021–23",
          title: "Iona — All-MAAC y momentos clave",
          body: "Senior (2023): cinco goles incluyendo tres de la victoria; goles en semifinal y final MAAC. Temporadas anteriores: minutos constantes en el mediocampo y primer gol universitario vs. Quinnipiac (2021).",
        },
        {
          year: "Antes de Iona",
          title: "Argentina — St. Georges y Estudiantes",
          body: "St. Georges College; formación juvenil en Estudiantes de La Plata en la Primera División argentina antes de la NCAA Division I.",
        },
      ],
      contactTitle: "Contacto",
      contactName: "Thiago Cagna",
      contactRole: "Mediocampista · #25 · NCAA Division I",
      selectorTagline: "Mediocampista · NCAA Division I",
      selectorSubtitle: "Iona University · Buenos Aires",
      selectorPrompt: "Select language · Elige idioma",
      selectorBackAria: "Volver a ejemplos",
      seasons: seasonRows.map((s) => ({
        ...s,
        note: s.note.es,
      })),
      highlights: highlightClips.map((c) => ({
        href: c.href,
        title: c.title.es,
        desc: c.desc.es,
      })),
    };
  }

  return {
    menuLabel: "Menu",
    tagline: "Midfielder · #25 · NCAA Division I",
    bio: "Midfielder from Buenos Aires, Argentina. Five seasons at Iona (2020–2024): MAAC All-Academic honoree, All-MAAC First Team, and MAAC All-Championship Team recognition — with youth experience at Estudiantes de La Plata before college.",
    heroStats: [
      { value: "67", label: "Career Games" },
      { value: "8", label: "Career Goals" },
      { value: "16", label: "Career Assists" },
      { value: "MAAC", label: "All-Conference" },
    ],
    cta: {
      iona: "Iona Roster",
      instagram: "Instagram",
      contact: "Contact",
    },
    navItems: [
      { type: "anchor", href: "#stats", label: "Stats" },
      { type: "anchor", href: "#seasons", label: "Seasons" },
      { type: "anchor", href: "#highlights", label: "Highlights" },
      { type: "anchor", href: "#timeline", label: "Career" },
      { type: "anchor", href: "#contact", label: "Contact" },
    ] satisfies NavItem[],
    infoItems: [
      { k: "Height", v: "6'0\"" },
      { k: "Weight", v: "165 lbs" },
      { k: "Position", v: "Midfielder" },
      { k: "Hometown", v: "Buenos Aires, Argentina" },
      { k: "Strong Foot", v: "Right" },
    ],
    seasonsTitle: "Season breakdown",
    tableHeaders: {
      season: "Season",
      school: "School",
      conf: "Conf.",
      apps: "GP",
      goals: "G",
      ast: "A",
      notes: "Notes",
    },
    highlightsTitle: "Highlights",
    watchYoutube: "Watch on YouTube →",
    timelineTitle: "Career timeline",
    milestones: [
      {
        year: "2024",
        title: "Iona — Fifth year",
        body: "All-MAAC First Team (midfield), All-ECAC Second Team, MAAC All-Championship Team, MAAC All-Academic. 19 appearances, 14 points (2G, 10A), third on the team in minutes.",
      },
      {
        year: "2021–23",
        title: "Iona — All-MAAC and clutch moments",
        body: "Senior (2023): five goals including three game-winners; MAAC semifinal and final goals. Earlier seasons: steady midfield minutes and first collegiate goal vs. Quinnipiac (2021).",
      },
      {
        year: "Before Iona",
        title: "Argentina — St. Georges & Estudiantes",
        body: "St. Georges College; youth pathway with Estudiantes de La Plata in Argentina's Primera División before NCAA Division I.",
      },
    ],
    contactTitle: "Contact",
    contactName: "Thiago Cagna",
    contactRole: "Midfielder · #25 · NCAA Division I",
    selectorTagline: "Midfielder · NCAA Division I",
    selectorSubtitle: "Iona University · Buenos Aires",
    selectorPrompt: "Select language · Elige idioma",
    selectorBackAria: "Back to examples",
    seasons: seasonRows.map((s) => ({
      ...s,
      note: s.note.en,
    })),
    highlights: highlightClips.map((c) => ({
      href: c.href,
      title: c.title.en,
      desc: c.desc.en,
    })),
  };
}
