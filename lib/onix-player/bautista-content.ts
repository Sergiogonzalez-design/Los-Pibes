import type { WebsitePlayerDefinition } from './types';
import { publicAssetUrl, siteUrl } from './site-origin';

export const BAUTISTA_WEBSITE_SLUG = 'bautista';
export const BAUTISTA_CONTACT_EMAIL = 'Bautistarossi12@gmail.com';

export const IONA_ROSTER =
  'https://ionagaels.com/sports/mens-soccer/roster/bautista-rossi/8035';
export const CREIGHTON_ROSTER =
  'https://gocreighton.com/sports/mens-soccer/roster/bautista-rossi/9026';

export const HIGHLIGHTS_2024_URL = 'https://www.youtube.com/watch?v=e8qecJ52d2w';
export const HIGHLIGHTS_2025_URL = 'https://www.youtube.com/watch?v=lS_OECSZAH8';
export const BAUTISTA_PHOTO_URL = publicAssetUrl('Bautista gritando.jpg');

export const bautistaSeasons = [
  {
    year: '2025',
    school: 'Creighton',
    schoolUrl: CREIGHTON_ROSTER,
    conf: 'Big East',
    gp: 15,
    gs: 7,
    goals: 3,
    ast: 2,
    pts: 8,
  },
  {
    year: '2024',
    school: 'Iona',
    schoolUrl: IONA_ROSTER,
    conf: 'MAAC',
    gp: 16,
    gs: 13,
    goals: 8,
    ast: 2,
    pts: 18,
  },
];

export function getBautistaPageContent(locale: 'en' | 'es') {
  if (locale === 'es') {
    return {
      tagline: 'Delantero · #7 · NCAA Division I',
      bio: 'Bautista Rossi Molinas es un delantero argentino e italiano de Buenos Aires, con doble nacionalidad. En su temporada de debut en Iona anoto 8 goles, fue seleccionado All-MAAC Third Team y marco el gol de la victoria en la final del campeonato MAAC. Actualmente compite en la Big East con Creighton University.',
      heroStats: [
        { label: 'Partidos', value: '31' },
        { label: 'Goles', value: '11' },
        { label: 'Asistencias', value: '4' },
        { label: 'Campeon 2024', value: 'MAAC' },
      ],
      milestones: [
        {
          year: '2025',
          title: 'Creighton - Big East',
          body: 'Segunda temporada con los Bluejays: 15 partidos, 7 titularidades, 3 goles y 2 asistencias (8 puntos) en la Big East.',
        },
        {
          year: '2024',
          title: 'Iona - campeon MAAC - All-MAAC Third Team',
          body: 'Debut universitario destacado: 8 goles y 18 puntos en 16 partidos. Gol de la victoria en la final del MAAC contra Rider.',
        },
        {
          year: '2024',
          title: 'MAAC Rookie of the Week',
          body: 'Reconocido como MAAC Rookie of the Week durante su primera campana en Iona.',
        },
        {
          year: 'Origen',
          title: 'Buenos Aires - Union de Santa Fe',
          body: 'Delantero argentino e italiano de Buenos Aires que se formo en Union de Santa Fe antes de llegar a la NCAA Division I.',
        },
      ],
    };
  }

  return {
    tagline: 'Forward · #7 · NCAA Division I',
    bio: 'Bautista Rossi Molinas is an Argentine and Italian forward from Buenos Aires who holds dual nationality. In his freshman season at Iona he scored 8 goals, earned All-MAAC Third Team honors, and netted the game-winning goal in the MAAC Championship final. He now competes in the Big East at Creighton University.',
    heroStats: [
      { label: 'Career Games', value: '31' },
      { label: 'Career Goals', value: '11' },
      { label: 'Career Assists', value: '4' },
      { label: 'Champion 2024', value: 'MAAC' },
    ],
    milestones: [
      {
        year: '2025',
        title: 'Creighton - Big East',
        body: 'Sophomore season with the Bluejays: 15 appearances, 7 starts, 3 goals and 2 assists (8 points) in Big East play.',
      },
      {
        year: '2024',
        title: 'Iona - MAAC champion - All-MAAC Third Team',
        body: 'Freshman breakout: 8 goals and 18 points in 16 matches. Game-winning goal in the MAAC Championship final against Rider.',
      },
      {
        year: '2024',
        title: 'MAAC Rookie of the Week',
        body: 'Earned MAAC Rookie of the Week honors during his debut collegiate campaign at Iona.',
      },
      {
        year: 'Background',
        title: 'Buenos Aires - Union de Santa Fe',
        body: 'Argentine and Italian forward from Buenos Aires who developed at Union de Santa Fe before joining NCAA Division I.',
      },
    ],
  };
}

/** Payload for onix-player sync — ASCII only (no accents). */
export function buildBautistaOnixPlayerDossier() {
  const en = getBautistaPageContent('en');
  const es = getBautistaPageContent('es');

  return {
    profile: {
      full_name: 'Bautista Rossi Molinas',
      website_slug: BAUTISTA_WEBSITE_SLUG,
      position: 'Forward',
      position_es: 'Delantero',
      date_of_birth: '2005-07-03',
      height_cm: 180,
      weight_kg: 81,
      nationality: 'Argentina / Italy',
      current_team: 'Creighton University',
      website_url: siteUrl('/en/examples/bautista'),
      photo_url: BAUTISTA_PHOTO_URL,
      bio: en.bio,
      bio_es: es.bio,
      dossier_locale: 'en' as const,
    },
    contact: {
      email: BAUTISTA_CONTACT_EMAIL,
    },
    statistics: bautistaSeasons.map((s) => ({
      season: s.year,
      team: s.school,
      position: 'Forward',
      matches_played: s.gp,
      games_started: s.gs,
      goals: s.goals,
      assists: s.ast,
      minutes_played: 0,
    })),
    achievements: en.milestones.map((m) => ({
      title: m.title,
      year: parseInt(m.year, 10) || 2024,
      description: m.body,
    })),
    report: {
      highlight_video_url: HIGHLIGHTS_2025_URL,
      highlight_video_title: 'Bautista Rossi Molinas - Highlights',
      best_actions_title: 'Best Actions',
    },
    videos: [
      { title: '2024 - Iona Highlights', url: HIGHLIGHTS_2024_URL, video_type: 'highlight' },
      { title: '2025 - Creighton Highlights', url: HIGHLIGHTS_2025_URL, video_type: 'additional' },
    ],
  };
}

export const websitePlayer: WebsitePlayerDefinition = {
  websiteSlug: BAUTISTA_WEBSITE_SLUG,
  fullName: 'Bautista Rossi Molinas',
  buildDossier: buildBautistaOnixPlayerDossier,
};
