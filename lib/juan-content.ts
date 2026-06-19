import type { NavItem } from "@/components/SiteHeader";

export const TRANSFERMARKT =
  "https://www.transfermarkt.es/juan-ignacio-morales/profil/spieler/1019759";
export const HIGHLIGHTS_URL = "https://www.youtube.com/watch?v=Wh45fAmB2bI";
export const HIGHLIGHTS_EMBED = "https://www.youtube.com/embed/Wh45fAmB2bI";

const seasons = [
  { year: "2025–26", club: "Cañoneros FC", division: "Liga Premier (MEX)", apps: "10" },
  { year: "2024–26", club: "Estudiantes Unidos", division: "Federal B (ARG)", apps: "18" },
  { year: "2023", club: "Boca Unidos", division: "Federal A (ARG)", apps: "2" },
  { year: "2022", club: "Quilmes", division: "Primera Nacional (ARG)", apps: "1" },
  { year: "2021", club: "Argentino de Quilmes", division: "Federal A (ARG)", apps: "15" },
];

export function getJuanContent(locale: "en" | "es") {
  if (locale === "es") {
    return {
      menuLabel: "Menú",
      tagline: "Portero · #1 · Liga Premier",
      bio1:
        "Juan Ignacio Morales es un portero de Ciudad de México con nacionalidad mexicana y argentina. Tras formarse en la pirámide del fútbol argentino — desde Federal B hasta Primera Nacional — fichó por Cañoneros FC en la Liga Premier, donde viste el dorsal 1 como titular habitual.",
      bio2:
        "Proveniente de una familia de porteros, Morales acumula 46 partidos oficiales entre Argentina y México con una media goleadora de 1.04.",
      heroStats: [
        { v: "46", l: "Partidos" },
        { v: "1.04", l: "Media GC" },
        { v: "0.94", l: "Mejor media" },
        { v: "Cañoneros", l: "Club actual" },
      ],
      cta: { transfermarkt: "Transfermarkt", highlights: "Highlights", contact: "Contacto" },
      navItems: [
        { type: "anchor", href: "#stats", label: "Estadísticas" },
        { type: "anchor", href: "#highlights", label: "Highlights" },
        { type: "anchor", href: "#timeline", label: "Trayectoria" },
        { type: "anchor", href: "#contact", label: "Contacto" },
      ] satisfies NavItem[],
      infoItems: [
        { k: "Nombre completo", v: "Juan Ignacio Morales Albil" },
        { k: "Fecha de nacimiento", v: "16/04/2001" },
        { k: "Altura / Peso", v: "180 cm · 78 kg" },
        { k: "Posición", v: "Portero" },
        { k: "Pie hábil", v: "Derecho" },
      ],
      seasonsTitle: "Estadísticas por temporada",
      seasonsIntro: "Estadísticas oficiales en ligas de Argentina y México.",
      transfermarktLink: "Perfil en Transfermarkt",
      tableHeaders: {
        season: "Temporada",
        club: "Club",
        division: "División",
        apps: "PJ",
      },
      appsNote: "PJ = partidos jugados",
      highlightsTitle: "Highlights",
      highlightsIntro: "Imágenes de partido — paradas, distribución y dominio del área.",
      watchYoutube: "Ver en YouTube →",
      timelineTitle: "Trayectoria",
      timelineIntro: "De la pirámide argentina a la Liga Premier en México.",
      contactTitle: "Contacto",
      contactIntro: "Reclutamiento y consultas de medios.",
      contactName: "Juan Ignacio Morales Albil",
      contactRole: "Portero · Liga Premier · México y Argentina",
      milestones: [
        {
          year: "2026–presente",
          title: "Cañoneros FC — Liga Premier",
          body: "Fichado por Cañoneros FC en enero de 2026. Titular habitual en la Liga Premier de México con 10 partidos y una media de 1.00 goles en contra en su primera campaña.",
        },
        {
          year: "2024–2026",
          title: "Estudiantes Unidos — Federal B",
          body: "Se consolidó como titular en la cuarta categoría argentina, con 18 partidos y su mejor media goleadora: 0.94 goles en contra por partido.",
        },
        {
          year: "2021–2023",
          title: "Argentina — Federal A y Primera Nacional",
          body: "Formación en Argentino de Quilmes (15 partidos), Quilmes en Primera Nacional y Boca Unidos — experiencia en varios niveles del fútbol argentino.",
        },
        {
          year: "Origen",
          title: "Ciudad de México · Doble nacionalidad",
          body: "Nacido en Ciudad de México con nacionalidad mexicana y argentina. Proviene de una familia de porteros — hijo del retirado Ángel Morales, sobrino de Carlos Morales y hermano de Matías Morales.",
        },
      ],
      selectorTagline: "Portero · México · Argentina",
      selectorSubtitle: "Cañoneros FC · Liga Premier",
      selectorPrompt: "Select language · Elige idioma",
      selectorBackAria: "Volver a ejemplos",
    };
  }

  return {
    menuLabel: "Menu",
    tagline: "Goalkeeper · #1 · Liga Premier",
    bio1:
      "Juan Ignacio Morales is a goalkeeper from Mexico City with Mexican and Argentine nationality. After developing in the Argentine pyramid — from Federal B to Primera Nacional — he joined Cañoneros FC in Liga Premier, where he wears the #1 shirt as a regular starter.",
    bio2:
      "A product of a goalkeeper family, Morales has logged 46 senior appearances across Argentina and Mexico with a career goals-against average of 1.04.",
    heroStats: [
      { v: "46", l: "Career Apps" },
      { v: "1.04", l: "Career GAA" },
      { v: "0.94", l: "Best GAA" },
      { v: "Cañoneros", l: "Current Club" },
    ],
    cta: { transfermarkt: "Transfermarkt", highlights: "Highlights", contact: "Contact" },
    navItems: [
      { type: "anchor", href: "#stats", label: "Stats" },
      { type: "anchor", href: "#highlights", label: "Highlights" },
      { type: "anchor", href: "#timeline", label: "Career" },
      { type: "anchor", href: "#contact", label: "Contact" },
    ] satisfies NavItem[],
    infoItems: [
      { k: "Full name", v: "Juan Ignacio Morales Albil" },
      { k: "Date of birth", v: "16 April 2001" },
      { k: "Height / Weight", v: "180 cm · 78 kg" },
      { k: "Position", v: "Goalkeeper" },
      { k: "Strong foot", v: "Right" },
    ],
    seasonsTitle: "Season breakdown",
    seasonsIntro: "Senior league statistics across Argentina and Mexico.",
    transfermarktLink: "Transfermarkt profile",
    tableHeaders: {
      season: "Season",
      club: "Club",
      division: "Division",
      apps: "Apps",
    },
    appsNote: "Apps = league appearances",
    highlightsTitle: "Highlights",
    highlightsIntro: "Match footage — shot-stopping, distribution, and command of the box.",
    watchYoutube: "Watch on YouTube →",
    timelineTitle: "Career timeline",
    timelineIntro: "From the Argentine pyramid to Liga Premier in Mexico.",
    contactTitle: "Contact",
    contactIntro: "Recruiting and media inquiries.",
    contactName: "Juan Ignacio Morales Albil",
    contactRole: "Goalkeeper · Liga Premier · Mexico & Argentina",
    milestones: [
      {
        year: "2026–present",
        title: "Cañoneros FC — Liga Premier",
        body: "Signed with Cañoneros FC in January 2026. Regular starter in Mexico's Liga Premier with 10 appearances and a 1.00 goals-against average in his first campaign.",
      },
      {
        year: "2024–2026",
        title: "Estudiantes Unidos — Federal B",
        body: "Established himself as a reliable starter in Argentina's fourth tier, logging 18 appearances with a career-best 0.94 goals-against average.",
      },
      {
        year: "2021–2023",
        title: "Argentina — Federal A & Primera Nacional",
        body: "Developed through Argentino de Quilmes (15 apps), Quilmes in Primera Nacional, and Boca Unidos — building experience across multiple tiers of Argentine football.",
      },
      {
        year: "Background",
        title: "Mexico City · Dual nationality",
        body: "Born in Mexico City with Mexican and Argentine nationality. Comes from a football family — son of retired goalkeeper Ángel Morales, nephew of Carlos Morales, and brother of Matías Morales.",
      },
    ],
    selectorTagline: "Goalkeeper · Mexico · Argentina",
    selectorSubtitle: "Cañoneros FC · Liga Premier",
    selectorPrompt: "Select language · Elige idioma",
    selectorBackAria: "Back to examples",
  };
}

export { seasons };
