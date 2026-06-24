'use server';

import { syncAllWebsitePlayers, syncWebsitePlayerBySlug } from '@/lib/onix-player/sync';

/** Server action: sync one website player to the mobile app by slug. */
export async function syncPlayerToApp(slug: string) {
  return syncWebsitePlayerBySlug(slug);
}

/** Server action: sync every registered website player to the mobile app. */
export async function syncAllPlayersToApp() {
  return syncAllWebsitePlayers();
}

/** @deprecated Use syncPlayerToApp('rami') */
export async function syncRamiPlayerToApp() {
  return syncWebsitePlayerBySlug('rami');
}
