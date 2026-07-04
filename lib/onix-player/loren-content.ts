import type { WebsitePlayerDefinition } from './types';
import { publicAssetUrl, siteUrl } from './site-origin';

export const LOREN_WEBSITE_SLUG = 'loren';
export const LOREN_CONTACT_EMAIL = 'Lorenzosanchez2003@gmail.com';
export const TRANSFERMARKT = 'https://www.transfermarkt.es/loren-sanchez/profil/spieler/834767';
export const BESOCCER = 'https://es.besoccer.com/jugador/partidos/lorenzo-sanchez-1006181';
export const LOREN_PHOTO_URL = publicAssetUrl('loren 2.jpg');

export const lorenSeasons = [
  { year: '2025/26', team: 'CD Tenerife B',    gp: 15, gs: 6,  goals: 3,  ast: 0, min: 603  },
  { year: '2024/25', team: 'UD Almeria',        gp: 2,  gs: 0,  goals: 0,  ast: 0, min: 16   },
  { year: '2024/25', team: 'UD Almeria B',      gp: 29, gs: 28, goals: 9,  ast: 0, min: 2237 },
  { year: '2023/24', team: 'UD Almeria B',      gp: 33, gs: 13, goals: 12, ast: 0, min: 1480 },
  { year: '2022/23', team: 'Penya Deportiva',   gp: 31, gs: 10, goals: 2,  ast: 0, min: 1065 },
  { year: '2021/22', team: 'Real Madrid Sub 19',gp: 24, gs: 17, goals: 13, ast: 0, min: 1423 },
];

/** Payload for onix-player sync — ASCII only (no accents). */
export function buildLorenOnixPlayerDossier() {
  return {
    profile: {
      full_name: 'Lorenzo Sanchez Martinez',
      website_slug: LOREN_WEBSITE_SLUG,
      position: 'Striker',
      position_es: 'Delantero',
      dominant_foot: 'Right',
      date_of_birth: '2003-02-14',
      height_cm: 187,
      weight_kg: 78,
      nationality: 'Spain',
      current_team: 'CD Tenerife B',
      website_url: siteUrl('/en/examples/loren'),
      photo_url: LOREN_PHOTO_URL,
      bio: 'Lorenzo "Loren" Sanchez is a Spanish striker from Madrid. He developed through the academies of Valencia CF and Real Madrid Sub 19 before signing professionally with UD Almeria, where he spent two seasons with the B team and made his La Liga Hypermotion and Copa del Rey debuts. He currently plays for CD Tenerife B in the 2a Federacion (2025/26).',
      bio_es: 'Lorenzo "Loren" Sanchez es un delantero espanol de Madrid. Se formo en las canteras del Valencia CF y del Real Madrid Sub 19 antes de fichar profesionalmente por la UD Almeria, donde paso dos temporadas en el filial y debuto en La Liga Hypermotion y Copa del Rey. Actualmente juega en el CD Tenerife B en la 2a Federacion (2025/26).',
      dossier_locale: 'en' as const,
    },
    contact: {
      email: LOREN_CONTACT_EMAIL,
      instagram: '@9lorenzosanchez',
    },
    statistics: lorenSeasons.map((s) => ({
      season: s.year,
      team: s.team,
      position: 'Striker',
      matches_played: s.gp,
      games_started: s.gs,
      goals: s.goals,
      assists: s.ast,
      minutes_played: s.min,
    })),
    achievements: [
      { title: 'CD Tenerife B - 2a Federacion', year: 2025, description: 'Signed with CD Tenerife B on 13 August 2025. 15 appearances, 6 starts, 3 goals and 603 minutes in the 2a Federacion Group 4.' },
      { title: 'La Liga Hypermotion debut', year: 2025, description: 'Made his debut in La Liga Hypermotion (Segunda Division) and Copa del Rey with UD Almeria first team.' },
      { title: 'UD Almeria B - top scorer', year: 2024, description: 'Standout season for Almeria B: 33 appearances and 12 goals in 2a RFEF — most prolific campaign of his career.' },
      { title: 'Real Madrid Sub 19', year: 2022, description: '24 appearances, 17 starts, 13 goals and 1,423 minutes at Real Madrid Sub 19.' },
    ],
    report: {
      highlight_video_url: TRANSFERMARKT,
      highlight_video_title: 'Lorenzo Sanchez - Transfermarkt',
    },
    videos: [],
  };
}

export const websitePlayer: WebsitePlayerDefinition = {
  websiteSlug: LOREN_WEBSITE_SLUG,
  fullName: 'Lorenzo Sanchez Martinez',
  buildDossier: buildLorenOnixPlayerDossier,
};
