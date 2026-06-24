/** Canonical Pablo Ramirez (website slug: rami) data — source of truth for onixmedia.agency and the mobile app. */

import type { WebsitePlayerDefinition } from './types';

export const RAMI_WEBSITE_SLUG = 'rami';
export const RAMI_PROFILE_ID = 'd2b3a704-374d-4477-b4fa-268f5d88d2bf';
export const RAMI_CONTACT_EMAIL = 'ramirez.pablom03@gmail.com';

const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'https://onixmedia.agency';

export const RAMI_HIGHLIGHTS_URL = 'https://www.youtube.com/watch?v=2fs-Gborb0o';
export const RAMI_FULL_GAME_URL = 'https://www.youtube.com/watch?v=xi2N_XEJZxs';
export const RAMI_REPORT_PDF = `${SITE_ORIGIN}/pablo-ramirez-report.pdf`;
export const RAMI_PHOTO_URL = `${SITE_ORIGIN}/Rami%20jugando.jpg`;

export const ramiSeasons = [
  { club: 'Fuenlabrada', league: 'Segunda Federación', season: '2025/26', gp: 26, gs: 20, goals: 1, minutes: 1884 },
  { club: 'Leganés B', league: 'Tercera Federación', season: '2024/25', gp: 22, gs: 17, goals: 0, minutes: 1603 },
  { club: 'Leganés B', league: 'Tercera Federación', season: '2023/24', gp: 32, gs: 25, goals: 3, minutes: 2364 },
  { club: 'Getafe B', league: 'Tercera Federación', season: '2022/23', gp: 20, gs: 19, goals: 2, minutes: 1682 },
  { club: 'Getafe B + Sub 19', league: 'Academy', season: '2021/22', gp: 39, gs: 35, goals: 1, minutes: 2933 },
];

export function getRamiPageContent(locale: 'en' | 'es') {
  if (locale === 'es') {
    return {
      tagline: 'Defensa Central · España',
      bio: 'Pablo "Rami" Ramirez Moreno es un defensa central español formado en la cantera del Getafe CF — uno de los programas de desarrollo más reconocidos de La Liga. Tras ser convocado al primer equipo del Getafe y completar dos productivas temporadas en el Leganés B, actualmente compite con el Fuenlabrada en la Segunda Federación.',
      heroStats: [
        { label: 'Partidos', value: '139' },
        { label: 'Titularidades', value: '116' },
        { label: 'Posición', value: 'Defensa Central' },
        { label: 'Liga Actual', value: '2ª Fed.' },
      ],
      infoItems: [
        { k: 'Fecha de Nacimiento', v: '18/03/2003' },
        { k: 'Altura', v: '186 cm' },
        { k: 'Peso', v: '78 kg' },
        { k: 'Pie dominante', v: 'Derecho' },
        { k: 'Ciudad natal', v: 'Madrid, España' },
      ],
      seasonsTitle: 'Temporadas',
      seasonsIntro: 'Rendimiento temporada a temporada en todos sus clubes.',
      tableHeaders: { season: 'Temporada', club: 'Club', league: 'Liga', gp: 'PJ', gs: 'PT', goals: 'G', minutes: 'Min' },
      highlightsTitle: 'Highlights',
      fullGameTitle: 'Partido completo',
      fullGameIntro: 'Jornada 19 vs Coria — Segunda Federación (2ª RFEF).',
      reportTitle: 'Informe de Rendimiento',
      reportIntro:
        'Informe completo con perfil, métricas de temporada y trayectoria — listo para entrenadores y reclutadores.',
      reportView: 'Ver Informe',
      reportDownload: 'Descargar PDF',
      careerTitle: 'Trayectoria',
      contactTitle: 'Contacto',
      contactIntro: 'Consultas de reclutamiento y medios de comunicación.',
      contactRole: 'Defensa Central · Fuenlabrada · España',
      cta: { besoccer: 'Perfil BeSoccer', transfermarkt: 'Transfermarkt', instagram: 'Instagram', contact: 'Contactar' },
      timeline: [
        { year: '2025–Presente', club: 'Fuenlabrada', detail: 'Segunda Federación — 4ª división española. Titular habitual.' },
        { year: '2023–2025', club: 'Leganés B', detail: 'Dos temporadas en Tercera Federación, peleando por el ascenso y marcando un gol en el partido de playoff.' },
        { year: '2021–2023', club: 'Getafe CF B', detail: 'Ascenso a través del filial del Getafe. Convocado al primer equipo en la temporada 2022/23.' },
        { year: '2020–2022', club: 'Cantera Getafe', detail: 'Formado en el Sub 19 y la cantera del Getafe CF — una de las academias más reconocidas de España.' },
      ],
      seasons: ramiSeasons.map((s) => ({
        ...s,
        league: s.league === 'Academy' ? 'Cantera' : s.league,
      })),
    };
  }

  return {
    tagline: 'Center Back · Spain',
    bio: 'Pablo "Rami" Ramirez Moreno is a Spanish center back formed in the academy of Getafe CF — one of La Liga\'s most respected development programs. After earning a first-team call-up at Getafe and two productive seasons at Leganés B, he is currently competing for Fuenlabrada in the Segunda Federación.',
    heroStats: [
      { label: 'Games', value: '139' },
      { label: 'Starts', value: '116' },
      { label: 'Position', value: 'Center Back' },
      { label: 'Current League', value: '2ª Fed.' },
    ],
    infoItems: [
      { k: 'Birth Date', v: '18/03/2003' },
      { k: 'Height', v: '186 cm' },
      { k: 'Weight', v: '78 kg' },
      { k: 'Strong Foot', v: 'Right' },
      { k: 'Hometown', v: 'Madrid, Spain' },
    ],
    seasonsTitle: 'Seasons',
    seasonsIntro: 'Year-by-year performance across all clubs.',
    tableHeaders: { season: 'Season', club: 'Club', league: 'League', gp: 'GP', gs: 'GS', goals: 'G', minutes: 'Min' },
    highlightsTitle: 'Highlights',
    fullGameTitle: 'Full Game',
    fullGameIntro: 'Matchday 19 vs Coria — Segunda Federación (2ª RFEF).',
    reportTitle: 'Performance Report',
    reportIntro: 'Full report with profile, season metrics, and career path — ready for coaches and recruiters.',
    reportView: 'View Report',
    reportDownload: 'Download PDF',
    careerTitle: 'Career Timeline',
    contactTitle: 'Contact',
    contactIntro: 'Recruiting and media inquiries.',
    contactRole: 'Center Back · Fuenlabrada · Spain',
    cta: { besoccer: 'BeSoccer Profile', transfermarkt: 'Transfermarkt', instagram: 'Instagram', contact: 'Contact' },
    timeline: [
      { year: '2025–Present', club: 'Fuenlabrada', detail: "Segunda Federación — Spain's 4th tier. Regular starter." },
      { year: '2023–2025', club: 'Leganés B', detail: 'Two seasons in Tercera Federación, fighting for promotion and scoring a goal in the playoff game.' },
      { year: '2021–2023', club: 'Getafe CF B', detail: "Promoted through Getafe's B team. Earned a call-up to the first team squad in 2022/23." },
      { year: '2020–2022', club: 'Getafe Academy', detail: "Developed through Getafe Sub 19 and U19 B — one of Spain's most respected academies." },
    ],
    seasons: ramiSeasons,
  };
}

/** Payload for onix-player sync — plain ASCII only (no accents or special dashes). */
export function buildRamiOnixPlayerDossier() {
  return {
    profile: {
      full_name: 'Pablo Ramirez',
      website_slug: RAMI_WEBSITE_SLUG,
      position: 'Center Back',
      position_es: 'Defensa Central',
      dominant_foot: 'Right',
      date_of_birth: '2003-03-18',
      height_cm: 186,
      weight_kg: 78,
      nationality: 'Spain',
      current_team: 'CF Fuenlabrada',
      website_url: `${SITE_ORIGIN}/en/examples/rami`,
      photo_url: RAMI_PHOTO_URL,
      bio: 'Pablo "Rami" Ramirez Moreno is a Spanish center back formed in the academy of Getafe CF - one of La Liga\'s most respected development programs. After earning a first-team call-up at Getafe and two productive seasons at Leganes B, he is currently competing for Fuenlabrada in the Segunda Federacion.',
      bio_es: 'Pablo "Rami" Ramirez Moreno es un defensa central espanol formado en la cantera del Getafe CF. Tras una convocatoria con el primer equipo y dos temporadas en el Leganes B, compite actualmente en el Fuenlabrada de Segunda Federacion.',
      dossier_locale: 'en' as const,
    },
    contact: {
      email: RAMI_CONTACT_EMAIL,
      phone: '+34 617 176 932',
      instagram: '@ramijr5',
    },
    statistics: [
      { season: '2025/26', team: 'CF Fuenlabrada', position: 'Center Back', matches_played: 26, games_started: 20, goals: 1, assists: 0, minutes_played: 1884 },
      { season: '2024/25', team: 'CD Leganes B', position: 'Center Back', matches_played: 22, games_started: 17, goals: 0, assists: 0, minutes_played: 1603 },
      { season: '2023/24', team: 'CD Leganes B', position: 'Center Back', matches_played: 32, games_started: 25, goals: 3, assists: 0, minutes_played: 2364 },
      { season: '2022/23', team: 'Getafe CF B', position: 'Center Back', matches_played: 20, games_started: 19, goals: 2, assists: 0, minutes_played: 1682 },
      { season: '2021/22', team: 'Getafe B + Sub 19', position: 'Center Back', matches_played: 39, games_started: 35, goals: 1, assists: 0, minutes_played: 2933 },
    ],
    achievements: [
      { title: 'Regular starter - Fuenlabrada', year: 2025, description: 'Segunda Federacion - Spain\'s 4th tier. Regular starter.' },
      { title: 'Playoff goal - Leganes B', year: 2024, description: 'Two seasons in Tercera Federacion, fighting for promotion and scoring a goal in the playoff game.' },
      { title: 'First-team call-up - Getafe CF', year: 2023, description: 'Promoted through Getafe\'s B team. Earned a call-up to the first team squad in 2022/23.' },
      { title: 'Getafe Academy graduate', year: 2022, description: 'Developed through Getafe Sub 19 and U19 B - one of Spain\'s most respected academies.' },
    ],
    report: {
      highlight_video_url: RAMI_HIGHLIGHTS_URL,
      highlight_video_title: 'Pablo Ramirez Moreno - Highlights',
      performance_pdf_url: RAMI_REPORT_PDF,
      performance_pdf_title: 'Performance Report',
      best_actions_title: 'Best Actions',
    },
    videos: [
      { title: 'Highlights', url: RAMI_HIGHLIGHTS_URL, video_type: 'highlight' },
      { title: 'Full game vs Coria (2a RFEF)', url: RAMI_FULL_GAME_URL, video_type: 'additional' },
    ],
  };
}

export const websitePlayer: WebsitePlayerDefinition = {
  websiteSlug: RAMI_WEBSITE_SLUG,
  fullName: 'Pablo Ramirez',
  profileId: RAMI_PROFILE_ID,
  buildDossier: buildRamiOnixPlayerDossier,
};
