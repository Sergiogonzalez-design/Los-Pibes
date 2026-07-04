import type { WebsitePlayerDefinition } from './types';
import { publicAssetUrl, siteUrl } from './site-origin';

export const SANTIAGO_WEBSITE_SLUG = 'santiago';
export const SANTIAGO_CONTACT_EMAIL = 'santimaringut@gmail.com';
export const CCSU_STATS = 'https://ccsubluedevils.com/sports/msoc/2025-26/bios/marin_gutierrez_santiago_bh0p';
export const HIGHLIGHTS_URL = 'https://www.youtube.com/watch?v=ybDbU45hyfw';
export const SANTIAGO_PHOTO_URL = publicAssetUrl('santiago marin 2.jpg');

export const santiagoSeasons = [
  { year: '2025-26', team: 'CCSU',     gp: 9, gs: 9, goals: 2, ast: 1, min: 0 },
  { year: '2024',    team: 'Creighton', gp: 0, gs: 0, goals: 0, ast: 0, min: 0 },
];

/** Payload for onix-player sync — ASCII only (no accents). */
export function buildSantiagoOnixPlayerDossier() {
  return {
    profile: {
      full_name: 'Santiago Marin Gutierrez',
      website_slug: SANTIAGO_WEBSITE_SLUG,
      position: 'Midfielder',
      position_es: 'Centrocampista',
      date_of_birth: '2005-07-22',
      height_cm: 178,
      weight_kg: 77,
      nationality: 'Costa Rica',
      current_team: 'CCSU',
      website_url: siteUrl('/en/examples/santiago'),
      photo_url: SANTIAGO_PHOTO_URL,
      bio: 'Santiago Marin Gutierrez is a Costa Rican midfielder from Heredia. A redshirt freshman at Central Connecticut State University, he was named NEC Rookie of the Week and led the Blue Devils with two goals in his debut season after transferring from Creighton University.',
      bio_es: 'Santiago Marin Gutierrez es un centrocampista costarricense de Heredia. Redshirt freshman en Central Connecticut State University, fue nombrado NEC Rookie of the Week y maximo goleador de los Blue Devils con dos goles en su temporada de debut tras transferirse desde Creighton University.',
      dossier_locale: 'en' as const,
    },
    contact: {
      email: SANTIAGO_CONTACT_EMAIL,
      instagram: '@santimaring',
    },
    statistics: santiagoSeasons.map((s) => ({
      season: s.year,
      team: s.team,
      position: 'Midfielder',
      matches_played: s.gp,
      games_started: s.gs,
      goals: s.goals,
      assists: s.ast,
      minutes_played: s.min,
    })),
    achievements: [
      { title: 'NEC Rookie of the Week', year: 2025, description: 'Named NEC Rookie of the Week (Sep. 15). Started all nine games, scored two goals and added one assist for CCSU.' },
      { title: 'CCSU - debut season', year: 2025, description: 'Led the Blue Devils with a team-high two goals: a goal and assist vs UMass Lowell (Sep. 23) and a goal in the tie vs VMI (Sep. 13).' },
      { title: 'Creighton University - Redshirt Freshman', year: 2024, description: 'Joined Creighton University BIG EAST program before transferring to CCSU.' },
      { title: 'CAA4SC State Champion', year: 2023, description: 'Led Combine Academy to the CAA4SC State Championship, setting the team record for goals and assists in a single season.' },
    ],
    report: {
      highlight_video_url: HIGHLIGHTS_URL,
      highlight_video_title: 'Santiago Marin Gutierrez - Highlights',
      best_actions_title: 'Best Actions',
    },
    videos: [
      { title: 'Highlights', url: HIGHLIGHTS_URL, video_type: 'highlight' },
    ],
  };
}

export const websitePlayer: WebsitePlayerDefinition = {
  websiteSlug: SANTIAGO_WEBSITE_SLUG,
  fullName: 'Santiago Marin Gutierrez',
  buildDossier: buildSantiagoOnixPlayerDossier,
};
