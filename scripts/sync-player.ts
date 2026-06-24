/**
 * Sync website player profile(s) to the ONIX Player mobile app.
 */
import { generatePlayersRegistry } from '../lib/onix-player/generate-players-registry';
import { loadOnixPlayerEnvFromAppRepo } from '../lib/onix-player/load-env';
import { persistProfileId } from '../lib/onix-player/persist-profile-id';
import { markSlugSynced } from '../lib/onix-player/sync-state';
import { syncAllWebsitePlayers, syncWebsitePlayerBySlug } from '../lib/onix-player/sync';

function saveResult(slug: string, profileId: string) {
  persistProfileId(slug, profileId);
  markSlugSynced(slug);
}

async function main() {
  generatePlayersRegistry();
  const { listWebsitePlayers } = await import('../lib/onix-player/registry');

  loadOnixPlayerEnvFromAppRepo();
  const arg = process.argv[2]?.trim().toLowerCase();

  if (!arg || arg === '--help' || arg === '-h') {
    console.log(`Usage:
  npm run sync:player -- <slug>   Sync one player (e.g. rami)
  npm run sync:players           Sync all registered players
  npm run sync:player -- --list  List registered slugs`);
    process.exit(arg ? 0 : 1);
  }

  if (arg === '--list' || arg === 'list') {
    const players = listWebsitePlayers();
    if (players.length === 0) {
      console.log('No players registered. Add lib/onix-player/<slug>-content.ts exporting websitePlayer.');
      process.exit(0);
    }
    for (const p of players) {
      console.log(`- ${p.websiteSlug}  ${p.fullName}${p.profileId ? `  (${p.profileId})` : ''}`);
    }
    return;
  }

  if (arg === '--all' || arg === 'all') {
    const results = await syncAllWebsitePlayers();
    console.log(`Synced ${results.length} player(s) to onix-player:`);
    for (const r of results) {
      saveResult(r.website_slug, r.profile_id);
      console.log(`  ${r.website_slug} -> ${r.profile_id}${r.created ? ' (created)' : ''}`);
    }
    return;
  }

  const result = await syncWebsitePlayerBySlug(arg);
  saveResult(arg, result.profile_id);
  console.log(`Synced ${arg} to onix-player:`, result);
  if (result.created) {
    console.log(`\nNew app profile created. profile_id saved to lib/onix-player/profile-ids.json`);
    if (result.code) console.log(`Player login code: ${result.code}`);
    if (result.share_code) console.log(`Share code: ${result.share_code}`);
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
