import { toAscii } from './ascii';
import type { WebsitePlayerDefinition } from './types';
import { publicAssetUrl, siteUrl } from './site-origin';

export const SERGIO_WEBSITE_SLUG = 'sergio';
export const SERGIO_CONTACT_EMAIL = 'sergiogonzalez.usa@icloud.com';

const GMU_ROSTER =
  'https://gomason.com/sports/mens-soccer/roster/sergio-gonzalez-fernandez/9251';
const IONA_ROSTER =
  'https://ionagaels.com/sports/mens-soccer/roster/sergio-gonzalez-fernandez/7622';

const seasons = [
  { year: '2025', school: 'George Mason', apps: 13, goals: 0, ast: 5 },
  { year: '2024', school: 'Iona', apps: 18, goals: 9, ast: 3 },
  { year: '2023', school: 'Iona', apps: 16, goals: 1, ast: 0 },
  { year: '2022', school: 'Iona', apps: 17, goals: 2, ast: 5 },
];

const milestones = [
  {
    year: '2025',
    title: 'George Mason - Graduate year',
    body: 'MSBA in Business Analytics while competing in the Atlantic 10. 8 starts, 5 assists, including 2 against UVA.',
  },
  {
    year: '2024',
    title: 'MAAC Championship MVP - Iona',
    body: 'Junior season: 9 goals and 21 points in 18 starts; All-MAAC First Team and All-ECAC First Team.',
  },
  {
    year: '2022-23',
    title: 'Iona - All-MAAC honors',
    body: 'Sophomore and freshman campaigns with full-time minutes and All-MAAC Second Team selections.',
  },
  {
    year: '2014-2021',
    title: 'Getafe CF',
    body: 'Seven seasons in Getafe CF youth academy before NCAA Division I.',
  },
];

export function getSergioPageContent(locale: 'en' | 'es') {
  if (locale === 'es') {
    return {
      bio: 'Mediocampista espanol de Villanueva del Pardillo, Espana. Tres temporadas en Iona (2022-2024), incluyendo el MVP del Campeonato MAAC 2024 y Primer Equipo All-MAAC. Estudiante de posgrado en George Mason cursando un MSBA en Analitica de Negocios mientras compite en la A-10.',
    };
  }
  return {
    bio: 'Spanish midfielder from Villanueva del Pardillo, Spain. Three seasons at Iona (2022-2024), including 2024 MAAC Championship MVP and All-MAAC First Team. Graduate student at George Mason pursuing an MSBA in Business Analytics while competing in the A-10.',
  };
}

export function buildSergioOnixPlayerDossier() {
  const en = getSergioPageContent('en');
  const es = getSergioPageContent('es');

  return {
    profile: {
      full_name: 'Sergio Gonzalez',
      website_slug: SERGIO_WEBSITE_SLUG,
      position: 'Midfielder',
      position_es: 'Mediocampista',
      dominant_foot: 'Right',
      height_cm: 175,
      weight_kg: 68,
      nationality: 'Spain',
      current_team: 'George Mason University',
      website_url: siteUrl('/en/examples/sergio'),
      photo_url: publicAssetUrl('Sergi jugando.jpeg'),
      bio: toAscii(en.bio),
      bio_es: toAscii(es.bio),
      dossier_locale: 'en' as const,
    },
    contact: {
      email: SERGIO_CONTACT_EMAIL,
      instagram: 'sergigonzalez6',
    },
    statistics: seasons.map((s) => ({
      season: s.year,
      team: s.school,
      position: 'Midfielder',
      matches_played: s.apps,
      goals: s.goals,
      assists: s.ast,
    })),
    achievements: milestones.map((m) => ({
      title: toAscii(m.title),
      year: parseInt(m.year, 10) || 2024,
      description: toAscii(m.body),
    })),
    report: {
      highlight_video_url: 'https://www.youtube.com/watch?v=MXZNl4Gz4sM',
      highlight_video_title: 'Sergio Gonzalez - Highlights',
      performance_pdf_url: publicAssetUrl('sergio-gonzalez-report.pdf'),
      performance_pdf_title: 'Performance Report',
    },
    videos: [
      {
        title: '2024 Highlights',
        url: 'https://www.youtube.com/watch?v=MXZNl4Gz4sM',
        video_type: 'highlight',
      },
      {
        title: 'MAAC Championship',
        url: 'https://www.youtube.com/watch?v=wVKjUAZjyZY&t=3880s',
        video_type: 'additional',
      },
    ],
  };
}

export const websitePlayer: WebsitePlayerDefinition = {
  websiteSlug: SERGIO_WEBSITE_SLUG,
  fullName: 'Sergio Gonzalez',
  buildDossier: buildSergioOnixPlayerDossier,
};
