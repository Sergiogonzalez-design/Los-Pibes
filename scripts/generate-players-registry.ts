import { generatePlayersRegistry } from '../lib/onix-player/generate-players-registry';

const { slugs } = generatePlayersRegistry();
console.log(`Generated lib/onix-player/players/index.ts (${slugs.length} player(s)):`);
for (const slug of slugs) {
  console.log(`  - ${slug}`);
}
