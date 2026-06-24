import { toAscii } from './ascii';
import type { WebsitePlayerDefinition } from './types';
import { publicAssetUrl, siteUrl } from './site-origin';
import {
  BESOCCER_PROFILE,
  CONTACT_EMAIL,
  EL_BALON_PROFILE,
  HERO_IMAGE,
  getIgnacioContent,
} from '../ignacio-content';

export const IGNACIO_WEBSITE_SLUG = 'ignacio';

export function getIgnacioPageContent(locale: 'en' | 'es') {
  return { bio: toAscii(getIgnacioContent(locale).bio) };
}

export function buildIgnacioOnixPlayerDossier() {
  const en = getIgnacioPageContent('en');
  const es = getIgnacioPageContent('es');
  const milestones = getIgnacioContent('en').milestones;
  const seasons = getIgnacioContent('en').seasons;

  return {
    profile: {
      full_name: 'Ignacio Atienzar Sacristan',
      website_slug: IGNACIO_WEBSITE_SLUG,
      position: 'Winger / Wingback',
      position_es: 'Extremo / Carrilero',
      dominant_foot: 'Right',
      date_of_birth: '2003-05-26',
      height_cm: 185,
      weight_kg: 77,
      nationality: 'Spain',
      current_team: 'Villanueva de la Canada',
      website_url: siteUrl('/examples/ignacio'),
      photo_url: publicAssetUrl(HERO_IMAGE.replace(/^\//, '')),
      bio: en.bio,
      bio_es: es.bio,
      dossier_locale: 'en' as const,
    },
    contact: {
      email: CONTACT_EMAIL,
      instagram: 'igna.atienzar',
    },
    statistics: seasons.map((s) => ({
      season: s.year,
      team: s.club,
      position: 'Winger',
      matches_played: parseInt(s.apps, 10) || 0,
      goals: parseInt(s.goals, 10) || 0,
    })),
    achievements: milestones.map((m) => ({
      title: toAscii(m.title),
      year: parseInt(m.year, 10) || 2026,
      description: toAscii(m.body),
    })),
    report: {
      highlight_video_url: BESOCCER_PROFILE,
      highlight_video_title: 'Ignacio Atienzar - BeSoccer match log',
      performance_pdf_url: EL_BALON_PROFILE,
      performance_pdf_title: 'El Balon de Madrid profile',
    },
    videos: [
      {
        title: 'BeSoccer match log',
        url: BESOCCER_PROFILE,
        video_type: 'highlight',
      },
    ],
  };
}

export const websitePlayer: WebsitePlayerDefinition = {
  websiteSlug: IGNACIO_WEBSITE_SLUG,
  fullName: 'Ignacio Atienzar',
  buildDossier: buildIgnacioOnixPlayerDossier,
};
