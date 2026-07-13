import type { WebsitePlayerDefinition } from './types';
import { publicAssetUrl, siteUrl } from './site-origin';

export const TIM_WEBSITE_SLUG = 'tim';
export const IONA_ROSTER = 'https://ionagaels.com/sports/mens-soccer/roster/tim-timchenko/7630';
export const WESTCHESTER_ROSTER = 'https://www.westchestersc.com/roster/tim-timchenko/';
export const TIM_PHOTO_URL = publicAssetUrl('Tim Timchenko horizontal 2.png');

export const timSeasons = [
  { year: '2026', team: 'Westchester SC', gp: 11, gs: 11, goals: 0, ast: 2, min: 703 },
  { year: '2024', team: 'Iona University', gp: 19, gs: 19, goals: 1, ast: 2, min: 1700 },
  { year: '2023', team: 'Iona University', gp: 16, gs: 15, goals: 0, ast: 1, min: 1343 },
  { year: '2022', team: 'Iona University', gp: 16, gs: 16, goals: 1, ast: 1, min: 1440 },
  { year: '2021', team: 'Iona University', gp: 14, gs: 13, goals: 0, ast: 2, min: 1155 },
];

export const TIM_HIGHLIGHTS = [
  { title: 'Tim Timchenko Highlights', url: 'https://www.youtube.com/watch?v=mCK1k_8Vifg', video_type: 'highlight' as const },
  { title: 'Tim Timchenko Highlights', url: 'https://www.youtube.com/watch?v=xpKzolosTaM', video_type: 'highlight' as const },
  { title: 'Tim Timchenko Highlights', url: 'https://www.youtube.com/watch?v=L2aicfvXWS4', video_type: 'highlight' as const },
];

/** Payload for onix-player sync — ASCII only (no accents). */
export function buildTimOnixPlayerDossier() {
  return {
    profile: {
      full_name: 'Tim Timchenko',
      website_slug: TIM_WEBSITE_SLUG,
      position: 'Defender',
      position_es: 'Defensa',
      date_of_birth: '2002-08-28',
      height_cm: 188,
      weight_kg: 77,
      nationality: 'Ukraine',
      current_team: 'Westchester SC',
      website_url: siteUrl('/en/examples/tim'),
      photo_url: TIM_PHOTO_URL,
      bio: 'Tim Timchenko is a defender from Kyiv. A four-year starter at Iona University, he was twice named MAAC Defensive Player of the Year and earned All-MAAC First Team honors in 2023 and 2024. He helped Iona win the MAAC Championship in 2025 and is in his rookie professional season with Westchester SC in USL League One (11 apps, 2 assists in 2026).',
      bio_es: 'Tim Timchenko es un defensa de Kiev. Titular durante cuatro anos en Iona University, fue nombrado dos veces MAAC Defensive Player of the Year y recibio el All-MAAC Primer Equipo en 2023 y 2024. Ayudo a Iona a ganar el campeonato MAAC en 2025 y disputa su temporada rookie profesional con Westchester SC en USL League One (11 partidos, 2 asistencias en 2026).',
      dossier_locale: 'en' as const,
    },
    contact: {},
    statistics: timSeasons.map((s) => ({
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
      { title: 'Westchester SC - USL League One 2026', year: 2026, description: 'Rookie pro season: 11 appearances, 11 starts, 2 assists and 703 minutes in USL League One.' },
      { title: 'MAAC Champion', year: 2025, description: 'Helped Iona University win the MAAC Championship. Signed with Westchester SC in January 2026.' },
      { title: 'MAAC Defensive Player of the Year (2x)', year: 2024, description: 'Second MAAC Defensive Player of the Year honor. All-MAAC First Team and All-ECAC First Team. Led Iona in minutes (1,700) with seven shutouts.' },
      { title: 'MAAC Defensive Player of the Year', year: 2023, description: 'All-MAAC First Team and ECAC Second Team. Helped Iona post a league-best .94 goals-against average.' },
      { title: 'Dynamo Moscow Academy / NY Red Bulls', year: 2021, description: 'Product of Dynamo Moscow Academy and New York Red Bulls Academy before joining Iona.' },
    ],
    report: {
      highlight_video_url: 'https://www.youtube.com/watch?v=mCK1k_8Vifg',
      highlight_video_title: 'Tim Timchenko Highlights',
    },
    videos: [
      ...TIM_HIGHLIGHTS,
      { title: 'Westchester SC Roster', url: WESTCHESTER_ROSTER, video_type: 'additional' },
      { title: 'Iona Roster', url: IONA_ROSTER, video_type: 'additional' },
    ],
  };
}

export const websitePlayer: WebsitePlayerDefinition = {
  websiteSlug: TIM_WEBSITE_SLUG,
  fullName: 'Tim Timchenko',
  buildDossier: buildTimOnixPlayerDossier,
};
