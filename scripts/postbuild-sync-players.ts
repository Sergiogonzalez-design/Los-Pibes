/**
 * After deploy: push all registered website players to the mobile app DB.
 */
import { generatePlayersRegistry } from '../lib/onix-player/generate-players-registry';
import { loadOnixPlayerEnvFromAppRepo } from '../lib/onix-player/load-env';
import { persistProfileId } from '../lib/onix-player/persist-profile-id';
import { markSlugSynced } from '../lib/onix-player/sync-state';
import { syncAllWebsitePlayers } from '../lib/onix-player/sync';

async function main() {
  generatePlayersRegistry();
  const { listWebsitePlayers } = await import('../lib/onix-player/registry');

  loadOnixPlayerEnvFromAppRepo();
  const required = [
    'ONIX_PLAYER_SUPABASE_URL',
    'ONIX_PLAYER_SUPABASE_ANON_KEY',
    'ONIX_PLAYER_ADMIN_ACCESS_CODE',
  ] as const;

  const missing = required.filter((key) => !process.env[key]?.trim());
  if (missing.length > 0) {
    console.log(`Skipping onix-player sync (missing env: ${missing.join(', ')})`);
    return;
  }

  const players = listWebsitePlayers();
  if (players.length === 0) {
    console.log('No website players registered — nothing to sync.');
    return;
  }

  console.log(`Syncing ${players.length} player(s) to onix-player after deploy...`);
  const results = await syncAllWebsitePlayers();

  for (const r of results) {
    persistProfileId(r.website_slug, r.profile_id);
    markSlugSynced(r.website_slug);
    console.log(`  ${r.website_slug} -> ${r.profile_id}${r.created ? ' (created)' : ''}`);
  }

  console.log('onix-player sync complete.');
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
