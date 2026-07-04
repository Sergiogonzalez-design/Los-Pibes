import type { WebsitePlayerDefinition } from './types';
import { publicAssetUrl, siteUrl } from './site-origin';

export const JAIME_WEBSITE_SLUG = 'jaime';
export const JAIME_CONTACT_EMAIL = 'jaimeeromann1@gmail.com';
export const IONA_ROSTER = 'https://ionagaels.com/sports/mens-soccer/roster/jaime-roman-jr-/8958';
export const JAIME_PHOTO_URL = publicAssetUrl('Jaime Rider.jpg');

export const jaimeSeasons = [
  { year: '2025', team: 'Iona University', gp: 15, gs: 15, goals: 0, ast: 4, min: 1195 },
  { year: '2024', team: 'Iona University', gp: 19, gs: 15, goals: 0, ast: 0, min: 1220 },
  { year: '2023', team: 'Iona University', gp: 11, gs: 7,  goals: 0, ast: 1, min: 622  },
];

/** Payload for onix-player sync — ASCII only (no accents). */
export function buildJaimeOnixPlayerDossier() {
  return {
    profile: {
      full_name: 'Jaime Roman Jr.',
      website_slug: JAIME_WEBSITE_SLUG,
      position: 'Defender',
      position_es: 'Defensa',
      date_of_birth: '2004-12-14',
      height_cm: 173,
      weight_kg: 70,
      nationality: 'USA',
      current_team: 'Iona University',
      website_url: siteUrl('/en/examples/jaime'),
      photo_url: JAIME_PHOTO_URL,
      bio: 'Jaime Roman Jr. is an American defender from Norwalk, Connecticut. In three seasons at Iona University he has made 45 appearances, earned All-MAAC Second Team honors in 2025, and has been team captain since 2025 - all while maintaining a place on the MAAC All-Academic Team.',
      bio_es: 'Jaime Roman Jr. es un defensa estadounidense de Norwalk, Connecticut. En tres temporadas en Iona University ha acumulado 45 partidos, recibio el reconocimiento All-MAAC Segundo Equipo en 2025 y es capitan del equipo desde 2025, todo ello manteniendo su presencia en el MAAC All-Academic Team.',
      dossier_locale: 'en' as const,
    },
    contact: {
      email: JAIME_CONTACT_EMAIL,
      instagram: '@jaimeeromann',
    },
    statistics: jaimeSeasons.map((s) => ({
      season: s.year,
      team: s.team,
      position: 'Defender',
      matches_played: s.gp,
      games_started: s.gs,
      goals: s.goals,
      assists: s.ast,
      minutes_played: s.min,
    })),
    achievements: [
      { title: 'Iona - Captain', year: 2026, description: 'Named captain of the Iona University Men\'s Soccer program.' },
      { title: 'All-MAAC Second Team', year: 2025, description: 'All-MAAC Second Team (defense) selection. CSC Academic All-District and MAAC All-Academic Team honoree. Started all 15 games with 4 assists.' },
      { title: 'MAAC All-Academic Team', year: 2024, description: 'Part of seven clean sheets with the Gaels defense. MAAC All-Academic Team honoree.' },
      { title: 'Iona - Freshman', year: 2023, description: 'First career assist at Manhattan (Nov. 1), setting up the game-winning goal.' },
    ],
    report: {
      highlight_video_url: IONA_ROSTER,
      highlight_video_title: 'Jaime Roman Jr. - Iona Roster',
    },
    videos: [],
  };
}

export const websitePlayer: WebsitePlayerDefinition = {
  websiteSlug: JAIME_WEBSITE_SLUG,
  fullName: 'Jaime Roman Jr.',
  buildDossier: buildJaimeOnixPlayerDossier,
};
