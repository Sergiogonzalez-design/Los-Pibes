import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SYNC_STATE_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '.sync-state.json'
);

export function readSyncState(): Record<string, number> {
  try {
    return JSON.parse(readFileSync(SYNC_STATE_PATH, 'utf8')) as Record<string, number>;
  } catch {
    return {};
  }
}

export function markSlugSynced(slug: string, syncedAtMs?: number): void {
  const normalized = slug.trim().toLowerCase();
  if (!normalized) return;

  const state = readSyncState();
  state[normalized] = syncedAtMs ?? Date.now();
  const sorted = Object.fromEntries(
    Object.entries(state).sort(([a], [b]) => a.localeCompare(b))
  );
  writeFileSync(SYNC_STATE_PATH, `${JSON.stringify(sorted, null, 2)}\n`, 'utf8');
}

export function markSlugsSynced(slugs: string[]): void {
  for (const slug of slugs) {
    markSlugSynced(slug);
  }
}
