import { existsSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { discoverContentModules, generatePlayersRegistry } from './generate-players-registry';
import { loadOnixPlayerEnvFromAppRepo } from './load-env';
import { persistProfileId, readProfileIdsFile } from './persist-profile-id';
import { markSlugSynced, readSyncState } from './sync-state';
import type { SyncPlayerResult } from './types';

const ONIX_PLAYER_DIR = resolve(process.cwd(), 'lib/onix-player');

const REQUIRED_ENV = [
  'ONIX_PLAYER_SUPABASE_URL',
  'ONIX_PLAYER_SUPABASE_ANON_KEY',
  'ONIX_PLAYER_ADMIN_ACCESS_CODE',
] as const;

function contentFilePath(slug: string): string {
  return join(ONIX_PLAYER_DIR, `${slug}-content.ts`);
}

function getContentMtime(slug: string): number {
  const file = contentFilePath(slug);
  if (!existsSync(file)) return 0;
  return statSync(file).mtimeMs;
}

export function findSlugsNeedingSync(): string[] {
  const slugs = discoverContentModules();
  const profileIds = readProfileIdsFile();
  const syncState = readSyncState();

  return slugs.filter((slug) => {
    if (!profileIds[slug]) return true;

    const mtime = getContentMtime(slug);
    const lastSync = syncState[slug];

    // Already synced to app before auto-sync existed — seed state, skip network call.
    if (lastSync === undefined) {
      markSlugSynced(slug, mtime);
      return false;
    }

    return mtime > lastSync + 500;
  });
}

export function hasOnixPlayerSyncEnv(): boolean {
  loadOnixPlayerEnvFromAppRepo();
  return REQUIRED_ENV.every((key) => Boolean(process.env[key]?.trim()));
}

export type AutoSyncResult = {
  skipped?: boolean;
  reason?: string;
  synced: SyncPlayerResult[];
};

/** Sync players that are new or have edited *-content.ts since last sync. */
export async function autoSyncChangedPlayers(): Promise<AutoSyncResult> {
  if (!hasOnixPlayerSyncEnv()) {
    return {
      skipped: true,
      reason: `missing env (${REQUIRED_ENV.join(', ')})`,
      synced: [],
    };
  }

  generatePlayersRegistry({ warnMissing: true });
  const slugs = findSlugsNeedingSync();

  if (slugs.length === 0) {
    return { synced: [] };
  }

  const { syncWebsitePlayerBySlug } = await import('./sync');
  const synced: SyncPlayerResult[] = [];

  for (const slug of slugs) {
    const result = await syncWebsitePlayerBySlug(slug);
    persistProfileId(slug, result.profile_id);
    markSlugSynced(slug);
    synced.push(result);
  }

  return { synced };
}
