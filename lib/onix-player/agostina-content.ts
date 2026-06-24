import { toAscii } from './ascii';
import type { WebsitePlayerDefinition } from './types';
import { publicAssetUrl, siteUrl } from './site-origin';
import {
  AGOSTINA_WEBSITE_SLUG,
  CONTACT_EMAIL,
  PDF_PATH,
  getAgostinaContent,
} from '../agostina-content';

export { AGOSTINA_WEBSITE_SLUG };

const seasons = [
  { year: '2023-present', team: 'Racing Club', apps: 66, goals: 20 },
  { year: 'Senior', team: 'Argentina', apps: 25, goals: 3 },
];

export function getAgostinaPageContent(locale: 'en' | 'es') {
  return { bio: toAscii(getAgostinaContent(locale).bio) };
}

export function buildAgostinaOnixPlayerDossier() {
  const en = getAgostinaPageContent('en');
  const es = getAgostinaPageContent('es');
  const milestones = getAgostinaContent('en').milestones;

  return {
    profile: {
      full_name: 'Agostina Holzheier',
      website_slug: AGOSTINA_WEBSITE_SLUG,
      position: 'Forward',
      position_es: 'Delantera',
      dominant_foot: 'Left',
      date_of_birth: '2003-09-30',
      height_cm: 160,
      weight_kg: 59,
      nationality: 'Argentina',
      current_team: 'Racing Club',
      website_url: siteUrl('/examples/agostina'),
      bio: en.bio,
      bio_es: es.bio,
      dossier_locale: 'en' as const,
    },
    contact: {
      email: CONTACT_EMAIL,
      instagram: 'agosholzheier',
    },
    statistics: seasons.map((s) => ({
      season: s.year,
      team: s.team,
      position: 'Forward',
      matches_played: s.apps,
      goals: s.goals,
    })),
    achievements: milestones.map((m) => ({
      title: toAscii(m.title),
      year: parseInt(m.year, 10) || 2023,
      description: toAscii(m.body),
    })),
    report: {
      highlight_video_url: 'https://www.youtube.com/watch?v=3HVWgpGZZOU',
      highlight_video_title: 'Agostina Holzheier - Highlights',
      performance_pdf_url: publicAssetUrl(PDF_PATH.replace(/^\//, '')),
      performance_pdf_title: 'Performance Report',
    },
    videos: [
      {
        title: 'Highlights',
        url: 'https://www.youtube.com/watch?v=3HVWgpGZZOU',
        video_type: 'highlight',
      },
    ],
  };
}

export const websitePlayer: WebsitePlayerDefinition = {
  websiteSlug: AGOSTINA_WEBSITE_SLUG,
  fullName: 'Agostina Holzheier',
  buildDossier: buildAgostinaOnixPlayerDossier,
};
