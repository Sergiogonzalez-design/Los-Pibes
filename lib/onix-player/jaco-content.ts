import { toAscii } from './ascii';
import type { WebsitePlayerDefinition } from './types';
import { publicAssetUrl, siteUrl } from './site-origin';

export const JACO_WEBSITE_SLUG = 'jaco';
export const JACO_CONTACT_EMAIL = 'jacobosanfeliu03@gmail.com';

const seasons = [
  { season: '2025', club: 'George Mason', gp: 16, gs: 12, goals: 7, assists: 2 },
  { season: '2024', club: 'SIUE', gp: 20, gs: 14, goals: 6, assists: 0 },
  { season: '2023', club: 'SIUE', gp: 5, gs: 0, goals: 1, assists: 0 },
  { season: '2022', club: 'Sterling College', gp: 19, gs: 19, goals: 18, assists: 4 },
  { season: '2021', club: 'Sterling College', gp: 21, gs: 19, goals: 17, assists: 0 },
];

const milestones = [
  {
    year: '2025',
    title: 'George Mason - A-10 First Team',
    body: 'Graduate student at George Mason in the Atlantic 10. All-A-10 First Team after transferring from SIUE.',
  },
  {
    year: '2024',
    title: 'SIUE - OVC Second Team',
    body: 'Team-leading scorer with 6 goals in 20 appearances. Led the Cougars and OVC in total shots (46).',
  },
  {
    year: '2022',
    title: 'Sterling College - Region Player of the Year',
    body: 'NAIA Central Region Player of the Year with 18 goals and 4 assists in 19 appearances.',
  },
  {
    year: 'Youth',
    title: 'FC Martinec - Barcelona',
    body: 'Developed in club soccer in Barcelona before moving to the United States.',
  },
];

export function getJacoPageContent(locale: 'en' | 'es') {
  if (locale === 'es') {
    return {
      bio: 'Jacobo Sanfeliu es un delantero espanol de Barcelona. Tras dos temporadas en SIUE, incluyendo 6 goles como senior y All-OVC Second Team, obtuvo All-A-10 First Team en 2025 como estudiante de posgrado en George Mason.',
    };
  }
  return {
    bio: 'Jacobo Sanfeliu is a Spanish striker from Barcelona. After two seasons at SIUE, including a team-leading 6-goal senior year and All-OVC Second Team honors, he earned All-A-10 First Team in 2025 as a graduate student at George Mason.',
  };
}

export function buildJacoOnixPlayerDossier() {
  const en = getJacoPageContent('en');
  const es = getJacoPageContent('es');

  return {
    profile: {
      full_name: 'Jacobo Sanfeliu',
      website_slug: JACO_WEBSITE_SLUG,
      position: 'Striker',
      position_es: 'Delantero',
      dominant_foot: 'Right',
      height_cm: 185,
      weight_kg: 86,
      nationality: 'Spain',
      current_team: 'George Mason University',
      website_url: siteUrl('/examples/jaco/en'),
      photo_url: publicAssetUrl('jaco mason.jpeg'),
      bio: toAscii(en.bio),
      bio_es: toAscii(es.bio),
      dossier_locale: 'en' as const,
    },
    contact: {
      email: JACO_CONTACT_EMAIL,
      instagram: 'jacosanfeliu',
    },
    statistics: seasons.map((s) => ({
      season: s.season,
      team: s.club,
      position: 'Striker',
      matches_played: s.gp,
      games_started: s.gs,
      goals: s.goals,
      assists: s.assists,
    })),
    achievements: milestones.map((m) => ({
      title: toAscii(m.title),
      year: parseInt(m.year, 10) || 2025,
      description: toAscii(m.body),
    })),
    report: {
      highlight_video_url: 'https://www.youtube.com/watch?v=WtXHz-jaJM4',
      highlight_video_title: 'Jacobo Sanfeliu - 2025 Highlights',
    },
    videos: [
      {
        title: '2025 Highlights',
        url: 'https://www.youtube.com/watch?v=WtXHz-jaJM4',
        video_type: 'highlight',
      },
      {
        title: '2024 Highlights',
        url: 'https://www.youtube.com/watch?v=5RaVKlK-7zM',
        video_type: 'additional',
      },
    ],
  };
}

export const websitePlayer: WebsitePlayerDefinition = {
  websiteSlug: JACO_WEBSITE_SLUG,
  fullName: 'Jacobo Sanfeliu',
  buildDossier: buildJacoOnixPlayerDossier,
};
