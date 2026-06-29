import { toAscii } from './ascii';
import type { WebsitePlayerDefinition } from './types';
import { publicAssetUrl, siteUrl } from './site-origin';
import {
  CONTACT_EMAIL,
  GPS_REPORT_PDF,
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
    })),
    achievements: milestones.map((m) => ({
      title: toAscii(m.title),
      year: parseInt(m.year, 10) || 2026,
      description: toAscii(m.body),
    })),
    report: {
      highlight_video_url: 'https://www.youtube.com/watch?v=kHXskUKfEnQ',
      highlight_video_title: 'Highlight Video Igna Atienzar',
      performance_pdf_url: publicAssetUrl(GPS_REPORT_PDF.replace(/^\//, '')),
      performance_pdf_title: 'Ignacio Atienzar GPS Report',
    },
    videos: [
      {
        title: 'Highlight Video Igna Atienzar',
        url: 'https://www.youtube.com/watch?v=kHXskUKfEnQ',
        video_type: 'highlight',
      },
      {
        title: 'Villanueva del Pardillo vs CF Pozuelo — Matchday 19',
        url: 'https://www.youtube.com/watch?v=INxb2SinPpE',
        video_type: 'full_match',
      },
    ],
  };
}

export const websitePlayer: WebsitePlayerDefinition = {
  websiteSlug: IGNACIO_WEBSITE_SLUG,
  fullName: 'Ignacio Atienzar',
  buildDossier: buildIgnacioOnixPlayerDossier,
};
