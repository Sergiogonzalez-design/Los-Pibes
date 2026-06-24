/** Dossier payload sent to onix-player `sync_website_player`. */

export type OnixPlayerProfile = {
  full_name: string;
  website_slug?: string;
  position?: string;
  position_es?: string;
  dominant_foot?: string;
  date_of_birth?: string;
  height_cm?: number;
  weight_kg?: number;
  nationality?: string;
  current_team?: string;
  website_url?: string;
  photo_url?: string;
  bio?: string;
  bio_es?: string;
  dossier_locale?: 'en' | 'es';
};

export type OnixPlayerContact = {
  email?: string;
  phone?: string;
  instagram?: string;
};

export type OnixPlayerStatistic = {
  season: string;
  team: string;
  position?: string;
  matches_played?: number;
  games_started?: number;
  goals?: number;
  assists?: number;
  minutes_played?: number;
};

export type OnixPlayerAchievement = {
  title: string;
  year?: number;
  description?: string;
};

export type OnixPlayerReport = {
  highlight_video_url?: string;
  highlight_video_title?: string;
  performance_pdf_url?: string;
  performance_pdf_title?: string;
  best_actions_title?: string;
};

export type OnixPlayerVideo = {
  title: string;
  url: string;
  video_type?: string;
};

export type OnixPlayerDossier = {
  profile: OnixPlayerProfile;
  contact?: OnixPlayerContact;
  statistics?: OnixPlayerStatistic[];
  achievements?: OnixPlayerAchievement[];
  report?: OnixPlayerReport;
  videos?: OnixPlayerVideo[];
};

export type WebsitePlayerDefinition = {
  /** URL slug, e.g. `rami` for /examples/rami */
  websiteSlug: string;
  /** Display name for CLI output */
  fullName: string;
  /**
   * App profile UUID after first sync. Optional on create — the app assigns one
   * and you can paste it here for faster updates.
   */
  profileId?: string;
  /** Builds the dossier pushed to the mobile app */
  buildDossier: () => OnixPlayerDossier;
};

export type SyncPlayerResult = {
  created?: boolean;
  profile_id: string;
  slug?: string;
  code?: string;
  share_code?: string;
  website_slug: string;
};
