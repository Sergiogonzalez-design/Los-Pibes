import { autoSyncChangedPlayers } from '../lib/onix-player/auto-sync';

async function main() {
  const result = await autoSyncChangedPlayers();

  if (result.skipped) {
    console.log(`[onix-player] auto-sync skipped (${result.reason})`);
    return;
  }

  if (result.synced.length === 0) {
    console.log('[onix-player] all players up to date');
    return;
  }

  console.log(`[onix-player] synced ${result.synced.length} player(s):`);
  for (const r of result.synced) {
    console.log(`  ${r.website_slug} -> ${r.profile_id}${r.created ? ' (created)' : ''}`);
    if (r.created && r.code) console.log(`    login code: ${r.code}`);
  }
}

main().catch((err) => {
  console.error('[onix-player] auto-sync failed:', err instanceof Error ? err.message : err);
  process.exit(1);
});
