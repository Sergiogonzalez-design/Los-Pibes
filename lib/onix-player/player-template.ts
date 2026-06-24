import type { OnixPlayerDossier, WebsitePlayerDefinition } from './types';
import { publicAssetUrl, siteUrl } from './site-origin';

/**
 * Copy this file to lib/onix-player/<slug>-content.ts when adding a new player.
 * Export `websitePlayer` — the registry is auto-generated on sync/deploy.
 */
export const TEMPLATE_WEBSITE_SLUG = 'player-slug';

export const templatePlayer: WebsitePlayerDefinition = {
  websiteSlug: TEMPLATE_WEBSITE_SLUG,
  fullName: 'Player Full Name',
  buildDossier: buildTemplateOnixPlayerDossier,
};

export const websitePlayer = templatePlayer;

export function buildTemplateOnixPlayerDossier(): OnixPlayerDossier {
  return {
    profile: {
      full_name: 'Player Full Name',
      website_slug: TEMPLATE_WEBSITE_SLUG,
      position: 'Forward',
      position_es: 'Delantero',
      date_of_birth: '2000-01-01',
      nationality: 'Country',
      current_team: 'Current Club',
      website_url: siteUrl(`/en/examples/${TEMPLATE_WEBSITE_SLUG}`),
      photo_url: publicAssetUrl('hero-photo.jpg'),
      bio: 'English bio (ASCII only for app sync).',
      bio_es: 'Spanish bio (ASCII only for app sync).',
      dossier_locale: 'en' as const,
    },
    contact: {
      email: 'player@example.com',
      instagram: '@handle',
    },
    statistics: [],
    achievements: [],
    report: {
      highlight_video_url: 'https://www.youtube.com/watch?v=VIDEO_ID',
      highlight_video_title: 'Highlights',
    },
    videos: [
      { title: 'Highlights', url: 'https://www.youtube.com/watch?v=VIDEO_ID', video_type: 'highlight' },
    ],
  };
}
