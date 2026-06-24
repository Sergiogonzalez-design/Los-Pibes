import { toAscii } from './ascii';
import type { WebsitePlayerDefinition } from './types';
import { publicAssetUrl, siteUrl } from './site-origin';

export const NACHO_WEBSITE_SLUG = 'nacho';

const seasons = [
  { year: '2024', school: 'FAU', gs: 11 },
  { year: '2023', school: 'Iona', gs: 15 },
  { year: '2022', school: 'Iona', gs: 17 },
  { year: '2021', school: 'Iona', gs: 7 },
];

const milestones = [
  {
    year: '2024',
    title: 'FAU Owls - American Athletic Conference',
    body: 'Transferred to Florida Atlantic. Started all 11 games with 33 saves, 1.28 GAA, .717 SV%, and 3 shutouts.',
  },
  {
    year: '2023',
    title: 'Iona - Golden Glove - All-MAAC First Team',
    body: 'Junior season: 15 starts, 1.01 GAA, 46 saves, 3 shutouts. MAAC Golden Glove and All-MAAC First Team.',
  },
  {
    year: '2022',
    title: 'Iona - MAAC leader in shutouts',
    body: 'Sophomore season: 17 starts, 1.12 GAA, .753 save percentage, 7 shutouts tied for most in the MAAC.',
  },
  {
    year: '2018',
    title: 'Costa Rica - U15, U17, U20',
    body: 'Represented Costa Rica at youth international level. Won U-17 National Tournament and CONCACAF Tournament in 2018.',
  },
];

export function getNachoPageContent(locale: 'en' | 'es') {
  if (locale === 'es') {
    return {
      bio: 'Ignacio Nacho Alfaro Monge es un portero de Heredia, Costa Rica. Tres temporadas en Iona (MAAC) antes de transferirse a Florida Atlantic (AAC), con Golden Glove MAAC y All-MAAC First Team. Represento a Costa Rica en categorias U15, U17 y U20.',
    };
  }
  return {
    bio: 'Ignacio Nacho Alfaro Monge is a goalkeeper from Heredia, Costa Rica. Three seasons at Iona (MAAC) before transferring to Florida Atlantic (AAC), earning MAAC Golden Glove and All-MAAC First Team honors. Represented Costa Rica at U-15, U-17, and U-20 levels.',
  };
}

export function buildNachoOnixPlayerDossier() {
  const en = getNachoPageContent('en');
  const es = getNachoPageContent('es');

  return {
    profile: {
      full_name: 'Nacho Alfaro',
      website_slug: NACHO_WEBSITE_SLUG,
      position: 'Goalkeeper',
      position_es: 'Portero',
      dominant_foot: 'Left',
      height_cm: 188,
      weight_kg: 82,
      nationality: 'Costa Rica',
      current_team: 'Florida Atlantic University',
      website_url: siteUrl('/en/examples/nacho'),
      photo_url: publicAssetUrl('Nacho jugando.jpeg'),
      bio: toAscii(en.bio),
      bio_es: toAscii(es.bio),
      dossier_locale: 'en' as const,
    },
    contact: {
      email: 'contact@onixmedia.agency',
      instagram: 'nachoo_2908',
    },
    statistics: seasons.map((s) => ({
      season: s.year,
      team: s.school,
      position: 'Goalkeeper',
      matches_played: s.gs,
      games_started: s.gs,
    })),
    achievements: milestones.map((m) => ({
      title: toAscii(m.title),
      year: parseInt(m.year, 10) || 2024,
      description: toAscii(m.body),
    })),
    report: {
      highlight_video_url: 'https://www.youtube.com/watch?v=e9lnOoj7bWA',
      highlight_video_title: 'Nacho Alfaro - 2023 Highlights',
    },
    videos: [
      {
        title: '2023 Highlights',
        url: 'https://www.youtube.com/watch?v=e9lnOoj7bWA',
        video_type: 'highlight',
      },
      {
        title: 'Costa Rica',
        url: 'https://www.youtube.com/watch?v=2cRTMPZMAkk',
        video_type: 'additional',
      },
      {
        title: '2022 Highlights',
        url: 'https://www.youtube.com/watch?v=CKD1y6-P4Q0',
        video_type: 'additional',
      },
    ],
  };
}

export const websitePlayer: WebsitePlayerDefinition = {
  websiteSlug: NACHO_WEBSITE_SLUG,
  fullName: 'Nacho Alfaro',
  buildDossier: buildNachoOnixPlayerDossier,
};
