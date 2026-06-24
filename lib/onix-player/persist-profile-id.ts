/**
 * Persist app profile UUIDs after sync (CLI / deploy only — uses filesystem).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PROFILE_IDS_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'profile-ids.json'
);

export function readProfileIdsFile(): Record<string, string> {
  try {
    return JSON.parse(readFileSync(PROFILE_IDS_PATH, 'utf8')) as Record<string, string>;
  } catch {
    return {};
  }
}

export function persistProfileId(slug: string, profileId: string): void {
  const normalized = slug.trim().toLowerCase();
  const id = profileId.trim();
  if (!normalized || !id) return;

  const current = readProfileIdsFile();
  if (current[normalized] === id) return;

  const next = { ...current, [normalized]: id };
  const sorted = Object.fromEntries(
    Object.entries(next).sort(([a], [b]) => a.localeCompare(b))
  );
  writeFileSync(PROFILE_IDS_PATH, `${JSON.stringify(sorted, null, 2)}\n`, 'utf8');
  console.log(`Saved profile_id for "${normalized}" -> ${id}`);
}
