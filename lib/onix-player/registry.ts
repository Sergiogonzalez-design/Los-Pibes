import { getStoredProfileId } from './profile-ids';
import { WEBSITE_PLAYERS_RAW } from './players';
import type { WebsitePlayerDefinition } from './types';

function withStoredProfileId(player: WebsitePlayerDefinition): WebsitePlayerDefinition {
  const profileId = getStoredProfileId(player.websiteSlug) ?? player.profileId;
  return profileId ? { ...player, profileId } : player;
}

/** All website-managed players (profile IDs merged from profile-ids.json). */
export const WEBSITE_PLAYERS: WebsitePlayerDefinition[] =
  WEBSITE_PLAYERS_RAW.map(withStoredProfileId);

const bySlug = new Map(WEBSITE_PLAYERS.map((p) => [p.websiteSlug, p]));

export function getWebsitePlayer(slug: string): WebsitePlayerDefinition {
  const normalized = slug.trim().toLowerCase();
  const player = bySlug.get(normalized);
  if (!player) {
    const available = WEBSITE_PLAYERS.map((p) => p.websiteSlug).join(', ') || '(none)';
    throw new Error(
      `Unknown website player "${slug}". Add lib/onix-player/<slug>-content.ts exporting websitePlayer, then run npm run generate:players. Registered: ${available}`
    );
  }
  return player;
}

export function listWebsitePlayers(): WebsitePlayerDefinition[] {
  return [...WEBSITE_PLAYERS];
}

export function isRegisteredWebsitePlayer(slug: string): boolean {
  return bySlug.has(slug.trim().toLowerCase());
}
