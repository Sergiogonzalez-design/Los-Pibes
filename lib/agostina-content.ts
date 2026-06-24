import type { NavItem } from "@/components/SiteHeader";

export const AGOSTINA_WEBSITE_SLUG = "agostina";
export const RACING_PROFILE =
  "https://www.racingclub.com.ar/futbol/plantel-femenino/jugador/1570_holzheier/";
export const BESOCCER_PROFILE =
  "https://es.besoccer.com/jugador/partidos/a-holzheier-3265969";
export const INSTAGRAM_URL = "https://www.instagram.com/agosholzheier/";
export const CONTACT_EMAIL = "contact@onixmedia.agency";
export const PDF_PATH = "/agostina-holzheier-performance-report.pdf";
export const HIGHLIGHTS_YOUTUBE = "https://www.youtube.com/watch?v=3HVWgpGZZOU";

const seasonRows = [
  {
    year: "2023–present",
    school: "Racing Club",
    schoolUrl: RACING_PROFILE,
    conf: { en: "Argentina", es: "Argentina" },
    apps: "66",
    goals: "20",
    ast: "—",
    note: {
      en: "At Racing since August 2023 — club stats (BeSoccer / official profile).",
      es: "En Racing desde agosto de 2023 — estadísticas de club (BeSoccer / perfil oficial).",
    },
  },
  {
    year: "2023",
    school: "Grêmio (Brazil)",
    schoolUrl: BESOCCER_PROFILE,
    conf: { en: "Brazil", es: "Brasil" },
    apps: "—",
    goals: "—",
    ast: "—",
    note: {
      en: "Spell in Brazil before joining Racing.",
      es: "Paso por Brasil antes de fichar por Racing.",
    },
  },
  {
    year: "2021/22",
    school: "River Plate",
    schoolUrl: BESOCCER_PROFILE,
    conf: { en: "Argentina", es: "Argentina" },
    apps: "—",
    goals: "—",
    ast: "—",
    note: {
      en: "Copa Federal 2022 with River Plate.",
      es: "Copa Federal 2022 con River Plate.",
    },
  },
  {
    year: "Senior",
    school: "Argentina",
    conf: { en: "National team", es: "Selección" },
    apps: "25",
    goals: "3",
    ast: "—",
    note: {
      en: "Senior national team — 25 apps, 3 goals.",
      es: "Selección absoluta — 25 PJ, 3 goles.",
    },
  },
] as const;

export function getAgostinaContent(locale: "en" | "es") {
  if (locale === "es") {
    return {
      menuLabel: "Menú",
      tagline: "Delantera · zurda · Racing Club",
      bio: "Delantera de 22 años de Crespo, Entre Ríos (nacida el 30 de septiembre de 2003). Ex River Plate y Grêmio; en Racing Club desde agosto de 2023 — ganadora de Copa Federal con River en 2022. Delantera zurda y extremo izquierdo con experiencia en selecciones juveniles y mayores de Argentina, incluyendo SheBelieves Cup y Sub-20.",
      heroStats: [
        { value: "66", label: "PJ Racing" },
        { value: "20", label: "Goles Racing" },
        { value: "25", label: "Argentina (PJ)" },
        { value: "3", label: "Goles Argentina" },
      ],
      cta: {
        racing: "Racing Club",
        instagram: "Instagram",
        besoccer: "BeSoccer",
        contact: "Contacto",
      },
      navItems: [
        { type: "anchor", href: "#stats", label: "Datos" },
        { type: "anchor", href: "#seasons", label: "Club" },
        { type: "anchor", href: "#performance-report", label: "Informe" },
        { type: "anchor", href: "#timeline", label: "Trayectoria" },
        { type: "anchor", href: "#contact", label: "Contacto" },
      ] satisfies NavItem[],
      infoItems: [
        { k: "Altura", v: "1,60 m" },
        { k: "Peso", v: "59 kg" },
        { k: "Posición", v: "Delantera / extremo izq." },
        { k: "Ciudad", v: "Crespo, Entre Ríos" },
        { k: "Pie hábil", v: "Izquierdo" },
      ],
      seasonsTitle: "Club y temporadas",
      tableHeaders: {
        period: "Período",
        club: "Club",
        league: "Liga",
        apps: "PJ",
        goals: "G",
        ast: "A",
        notes: "Notas",
      },
      performanceTitle: "Rendimiento y highlights",
      performanceItems: [
        {
          href: PDF_PATH,
          title: "Informe de rendimiento",
          cta: "Abrir informe →",
        },
        {
          href: HIGHLIGHTS_YOUTUBE,
          title: "Video de highlights",
          cta: "Ver en YouTube →",
        },
      ],
      timelineTitle: "Trayectoria",
      milestones: [
        {
          year: "2023–presente",
          title: "Racing Club",
          body: "Delantera en el primer equipo femenino desde agosto de 2023 — 66 partidos y 20 goles con la camiseta de Racing (datos de club/agregados).",
        },
        {
          year: "2021–23",
          title: "River Plate, Grêmio y camino",
          body: "River Plate (2021/22), incluyendo la Copa Federal 2022; paso por Grêmio (Brasil) en 2023 antes del fichaje por Racing.",
        },
        {
          year: "Internacional",
          title: "Argentina",
          body: "Convocatorias juveniles y absolutas: Argentina Sub-20, SheBelieves Cup y selección mayor — 25 PJ y 3 goles.",
        },
      ],
      contactTitle: "Contacto",
      contactName: "Agostina Holzheier",
      contactRole: "Delantera · Racing Club · Argentina",
      selectorTagline: "Delantera · Racing Club",
      selectorSubtitle: "River Plate · Grêmio · Selección Argentina",
      selectorPrompt: "Select language · Elige idioma",
      selectorBackAria: "Volver a ejemplos",
      seasons: seasonRows.map((s) => ({
        year: s.year,
        school: s.school,
        schoolUrl: "schoolUrl" in s ? s.schoolUrl : undefined,
        conf: s.conf.es,
        apps: s.apps,
        goals: s.goals,
        ast: s.ast,
        note: s.note.es,
      })),
    };
  }

  return {
    menuLabel: "Menu",
    tagline: "Forward · left foot · Racing Club",
    bio: "22-year-old striker from Crespo, Entre Ríos (born 30 September 2003). Former River Plate and Grêmio; at Racing Club since August 2023 — Copa Federal winner with River in 2022. Left-footed forward and left winger with senior and youth experience with Argentina, including SheBelieves Cup and U20.",
    heroStats: [
      { value: "66", label: "Racing Apps" },
      { value: "20", label: "Racing Goals" },
      { value: "25", label: "Argentina (PJ)" },
      { value: "3", label: "Argentina Goals" },
    ],
    cta: {
      racing: "Racing Club",
      instagram: "Instagram",
      besoccer: "BeSoccer",
      contact: "Contact",
    },
    navItems: [
      { type: "anchor", href: "#stats", label: "Stats" },
      { type: "anchor", href: "#seasons", label: "Club" },
      { type: "anchor", href: "#performance-report", label: "Report" },
      { type: "anchor", href: "#timeline", label: "Career" },
      { type: "anchor", href: "#contact", label: "Contact" },
    ] satisfies NavItem[],
    infoItems: [
      { k: "Height", v: "1.60 m" },
      { k: "Weight", v: "59 kg" },
      { k: "Position", v: "Forward / left wing" },
      { k: "Hometown", v: "Crespo, Entre Ríos" },
      { k: "Strong Foot", v: "Left" },
    ],
    seasonsTitle: "Club & seasons",
    tableHeaders: {
      period: "Period",
      club: "Club",
      league: "League",
      apps: "GP",
      goals: "G",
      ast: "A",
      notes: "Notes",
    },
    performanceTitle: "Performance & highlights",
    performanceItems: [
      {
        href: PDF_PATH,
        title: "Performance Report",
        cta: "Open report →",
      },
      {
        href: HIGHLIGHTS_YOUTUBE,
        title: "Highlight Video",
        cta: "Watch on YouTube →",
      },
    ],
    timelineTitle: "Career timeline",
    milestones: [
      {
        year: "2023–present",
        title: "Racing Club",
        body: "Striker in the first women's team since August 2023 — 66 games and 20 goals in Racing colours (per club/aggregated data).",
      },
      {
        year: "2021–23",
        title: "River Plate, Grêmio, and pathway",
        body: "River Plate (2021/22), including the 2022 Copa Federal; time at Grêmio (Brazil) in 2023 before the move to Racing.",
      },
      {
        year: "International",
        title: "Argentina",
        body: "Senior and youth call-ups: Argentina U20, SheBelieves Cup, and senior national team — 25 apps (PJ) and 3 goals.",
      },
    ],
    contactTitle: "Contact",
    contactName: "Agostina Holzheier",
    contactRole: "Forward · Racing Club · Argentina",
    selectorTagline: "Forward · Racing Club",
    selectorSubtitle: "River Plate · Grêmio · Argentina national team",
    selectorPrompt: "Select language · Elige idioma",
    selectorBackAria: "Back to examples",
    seasons: seasonRows.map((s) => ({
      year: s.year,
      school: s.school,
      schoolUrl: "schoolUrl" in s ? s.schoolUrl : undefined,
      conf: s.conf.en,
      apps: s.apps,
      goals: s.goals,
      ast: s.ast,
      note: s.note.en,
    })),
  };
}
