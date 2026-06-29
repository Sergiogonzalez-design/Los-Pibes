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
export const GPS_REPORT_PDF = "/Ignacio Atienzar GPS Report.pdf";

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

const highlightVideo = {
  youtubeId: "kHXskUKfEnQ",
  sectionTitle: { en: "Highlight Video", es: "Highlight Video" },
  label: { en: "Highlight Video Igna Atienzar", es: "Highlight Video Igna Atienzar" },
} as const;

const matchVideos = [
  {
    youtubeId: "INxb2SinPpE",
    sectionTitle: { en: "Full Match", es: "Partido Completo" },
    matchday: { en: "Matchday 19", es: "Jornada 19" },
    home: "Villanueva del Pardillo",
    away: "CF Pozuelo",
  },
] as const;

export function getIgnacioContent(locale: "en" | "es") {
  if (locale === "es") {
    return {
      menuLabel: "Menú",
      tagline: "Extremo / Carrilero · #17 · RFFM Madrid",
      bio: "Ignacio Atienzar Sacristán es un extremo y Carrilero derecho de Madrid, España. Tras una temporada con goles en Siello CF (2023/24) y un paso por CF Pozuelo (2024/25), es titular habitual en Villanueva de la Cañada en la Primera División Autonómica Aficionado 2025/26, con minutos también en Copa Aficionados RFFM.",
      heroStats: [
        { label: "Partidos", value: "47" },
        { label: "Titularidades", value: "26" },
        { label: "Posición", value: "Extremo / Carrilero" },
        { label: "Liga Actual", value: "1ª Autonómica" },
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
        { type: "anchor", href: "#games", label: "Videos" },
        { type: "anchor", href: "#gps-report", label: "Informe GPS" },
        { type: "anchor", href: "#timeline", label: "Trayectoria" },
        { type: "anchor", href: "#contact", label: "Contacto" },
      ] satisfies NavItem[],
      infoItems: [
        { k: "Fecha de Nacimiento", v: "26/05/2003" },
        { k: "Altura", v: "185 cm" },
        { k: "Peso", v: "77 kg" },
        { k: "Pie dominante", v: "Derecho" },
        { k: "Ciudad natal", v: "Madrid, España" },
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
      gamesTitle: "Videos",
      watchOnYoutube: "Ver en YouTube",
      highlightVideo: {
        youtubeId: highlightVideo.youtubeId,
        youtubeUrl: `https://www.youtube.com/watch?v=${highlightVideo.youtubeId}`,
        sectionTitle: highlightVideo.sectionTitle.es,
        label: highlightVideo.label.es,
      },
      gpsReportTitle: "Informe GPS",
      viewPdf: "Ver PDF",
      downloadPdf: "Descargar PDF",
      matchVideos: matchVideos.map((match) => ({
        youtubeId: match.youtubeId,
        youtubeUrl: `https://www.youtube.com/watch?v=${match.youtubeId}`,
        sectionTitle: match.sectionTitle.es,
        label: match.matchday.es,
        title: `${match.home} vs ${match.away}`,
      })),
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
          title: "Madrid — extremo y Carrilero",
          body: "Jugador diestro de banda nacido en Madrid, España. Cómodo en ambos costados como extremo o Carrilero.",
        },
      ],
      contactTitle: "Contacto",
      contactName: "Ignacio Atienzar Sacristán",
      contactRole: "Extremo / Carrilero · #17 · RFFM Madrid",
      selectorTagline: "Extremo / Carrilero · RFFM Madrid",
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
      { label: "Games", value: "47" },
      { label: "Starts", value: "26" },
      { label: "Position", value: "Winger / wingback" },
      { label: "Current League", value: "1ª Autonómica" },
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
      { type: "anchor", href: "#games", label: "Videos" },
      { type: "anchor", href: "#gps-report", label: "GPS Report" },
      { type: "anchor", href: "#timeline", label: "Career" },
      { type: "anchor", href: "#contact", label: "Contact" },
    ] satisfies NavItem[],
    infoItems: [
      { k: "Birth date", v: "26 May 2003" },
      { k: "Height", v: "185 cm" },
      { k: "Weight", v: "77 kg" },
      { k: "Strong foot", v: "Right" },
      { k: "Hometown", v: "Madrid, Spain" },
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
    gamesTitle: "Videos",
    watchOnYoutube: "Watch on YouTube",
    highlightVideo: {
      youtubeId: highlightVideo.youtubeId,
      youtubeUrl: `https://www.youtube.com/watch?v=${highlightVideo.youtubeId}`,
      sectionTitle: highlightVideo.sectionTitle.en,
      label: highlightVideo.label.en,
    },
    gpsReportTitle: "GPS Report",
    viewPdf: "View PDF",
    downloadPdf: "Download PDF",
    matchVideos: matchVideos.map((match) => ({
      youtubeId: match.youtubeId,
      youtubeUrl: `https://www.youtube.com/watch?v=${match.youtubeId}`,
      sectionTitle: match.sectionTitle.en,
      label: match.matchday.en,
      title: `${match.home} vs ${match.away}`,
    })),
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
