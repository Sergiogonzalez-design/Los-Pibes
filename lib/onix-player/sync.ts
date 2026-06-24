import { getWebsitePlayer, listWebsitePlayers } from './registry';
import type { OnixPlayerDossier, SyncPlayerResult } from './types';

export type { OnixPlayerDossier, SyncPlayerResult, WebsitePlayerDefinition } from './types';
export { getWebsitePlayer, isRegisteredWebsitePlayer, listWebsitePlayers, WEBSITE_PLAYERS } from './registry';
export { getSiteOrigin, publicAssetUrl, siteUrl } from './site-origin';

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing required env: ${name}`);
  return value;
}

/** Push one website player dossier into the onix-player mobile app database. */
export async function syncWebsitePlayerToOnixApp(options: {
  websiteSlug: string;
  profileId?: string;
  dossier: OnixPlayerDossier;
}): Promise<SyncPlayerResult> {
  const supabaseUrl = requireEnv('ONIX_PLAYER_SUPABASE_URL');
  const adminCode = requireEnv('ONIX_PLAYER_ADMIN_ACCESS_CODE');
  const websiteSlug = options.websiteSlug.trim().toLowerCase();

  const payload: Record<string, unknown> = {
    website_slug: websiteSlug,
    dossier: options.dossier,
  };
  if (options.profileId?.trim()) {
    payload.profile_id = options.profileId.trim();
  }

  const res = await fetch(`${supabaseUrl}/functions/v1/admin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${requireEnv('ONIX_PLAYER_SUPABASE_ANON_KEY')}`,
    },
    body: JSON.stringify({
      code: adminCode,
      action: 'sync_website_player',
      payload,
    }),
  });

  const data = (await res.json()) as SyncPlayerResult & { error?: string };
  if (!res.ok || data.error) {
    throw new Error(data.error ?? `Sync failed for "${websiteSlug}" (${res.status})`);
  }
  return data;
}

/** Sync a registered player by website slug (rami, bautista, etc.). */
export async function syncWebsitePlayerBySlug(slug: string): Promise<SyncPlayerResult> {
  const player = getWebsitePlayer(slug);
  return syncWebsitePlayerToOnixApp({
    websiteSlug: player.websiteSlug,
    profileId: player.profileId,
    dossier: player.buildDossier(),
  });
}

/** Sync every player in the registry — run after bulk website updates. */
export async function syncAllWebsitePlayers(): Promise<SyncPlayerResult[]> {
  const players = listWebsitePlayers();
  if (players.length === 0) {
    throw new Error('No players registered in lib/onix-player/registry.ts');
  }

  const results: SyncPlayerResult[] = [];
  for (const player of players) {
    results.push(
      await syncWebsitePlayerToOnixApp({
        websiteSlug: player.websiteSlug,
        profileId: player.profileId,
        dossier: player.buildDossier(),
      })
    );
  }
  return results;
}

/** @deprecated Use syncWebsitePlayerBySlug('rami') */
export async function syncRamiToOnixApp(): Promise<SyncPlayerResult> {
  return syncWebsitePlayerBySlug('rami');
}
