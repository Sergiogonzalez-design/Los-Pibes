import { HIGHLIGHTS_URL, getJuanContent, seasons } from '../juan-content';
import { toAscii } from './ascii';
import type { WebsitePlayerDefinition } from './types';
import { publicAssetUrl, siteUrl } from './site-origin';

export const JUAN_WEBSITE_SLUG = 'juan';

export function buildJuanOnixPlayerDossier() {
  const en = getJuanContent('en');
  const es = getJuanContent('es');
  const bio = `${en.bio1} ${en.bio2}`;

  return {
    profile: {
      full_name: 'Juan Ignacio Morales Albil',
      website_slug: JUAN_WEBSITE_SLUG,
      position: 'Goalkeeper',
      position_es: 'Portero',
      dominant_foot: 'Right',
      date_of_birth: '2001-04-16',
      height_cm: 180,
      weight_kg: 78,
      nationality: 'Mexico / Argentina',
      current_team: 'Canoneros FC',
      website_url: siteUrl('/examples/juan/en'),
      photo_url: publicAssetUrl('Juan mobile.jpeg'),
      bio: toAscii(bio),
      bio_es: toAscii(`${es.bio1} ${es.bio2}`),
      dossier_locale: 'en' as const,
    },
    contact: {
      email: en.contactEmail,
    },
    statistics: seasons.map((s) => ({
      season: s.year,
      team: s.club,
      position: 'Goalkeeper',
      matches_played: parseInt(s.apps, 10) || 0,
    })),
    achievements: en.milestones.map((m) => ({
      title: toAscii(m.title),
      year: parseInt(m.year, 10) || 2026,
      description: toAscii(m.body),
    })),
    report: {
      highlight_video_url: HIGHLIGHTS_URL,
      highlight_video_title: 'Juan Ignacio Morales - Highlights',
    },
    videos: [
      {
        title: 'Highlights',
        url: HIGHLIGHTS_URL,
        video_type: 'highlight',
      },
    ],
  };
}

export const websitePlayer: WebsitePlayerDefinition = {
  websiteSlug: JUAN_WEBSITE_SLUG,
  fullName: 'Juan Ignacio Morales',
  buildDossier: buildJuanOnixPlayerDossier,
};
