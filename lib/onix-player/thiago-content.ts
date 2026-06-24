import { toAscii } from './ascii';
import type { WebsitePlayerDefinition } from './types';
import { publicAssetUrl, siteUrl } from './site-origin';
import {
  CONTACT_EMAIL,
  HERO_IMAGE,
  THIAGO_WEBSITE_SLUG,
  getThiagoContent,
} from '../thiago-content';

export { THIAGO_WEBSITE_SLUG };

const seasons = [
  { year: '2024', school: 'Iona', apps: 19, goals: 2, ast: 10 },
  { year: '2023', school: 'Iona', apps: 15, goals: 5, ast: 2 },
  { year: '2022', school: 'Iona', apps: 17, goals: 0, ast: 3 },
  { year: '2021', school: 'Iona', apps: 11, goals: 1, ast: 1 },
  { year: '2020-21', school: 'Iona', apps: 5, goals: 0, ast: 0 },
];

export function getThiagoPageContent(locale: 'en' | 'es') {
  return { bio: toAscii(getThiagoContent(locale).bio) };
}

export function buildThiagoOnixPlayerDossier() {
  const en = getThiagoPageContent('en');
  const es = getThiagoPageContent('es');
  const milestones = getThiagoContent('en').milestones;

  return {
    profile: {
      full_name: 'Thiago Cagna',
      website_slug: THIAGO_WEBSITE_SLUG,
      position: 'Midfielder',
      position_es: 'Mediocampista',
      dominant_foot: 'Right',
      height_cm: 183,
      weight_kg: 75,
      nationality: 'Argentina',
      current_team: 'Iona University',
      website_url: siteUrl('/examples/thiago'),
      photo_url: publicAssetUrl(HERO_IMAGE.replace(/^\//, '')),
      bio: en.bio,
      bio_es: es.bio,
      dossier_locale: 'en' as const,
    },
    contact: {
      email: CONTACT_EMAIL,
      instagram: 'thiagocagna',
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
      highlight_video_url: 'https://www.youtube.com/watch?v=ClsDgUXCDLk',
      highlight_video_title: 'Thiago Cagna - 2024 Highlights',
    },
    videos: [
      {
        title: '2024 Highlights',
        url: 'https://www.youtube.com/watch?v=ClsDgUXCDLk',
        video_type: 'highlight',
      },
      {
        title: '2022 Highlights',
        url: 'https://www.youtube.com/watch?v=fCta2N4h9JI&t=12s',
        video_type: 'additional',
      },
      {
        title: '2021 Highlights',
        url: 'https://www.youtube.com/watch?v=1oWI82Ox5t0',
        video_type: 'additional',
      },
    ],
  };
}

export const websitePlayer: WebsitePlayerDefinition = {
  websiteSlug: THIAGO_WEBSITE_SLUG,
  fullName: 'Thiago Cagna',
  buildDossier: buildThiagoOnixPlayerDossier,
};
