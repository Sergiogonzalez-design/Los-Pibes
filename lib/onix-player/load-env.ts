import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

function parseDotEnv(content: string): Map<string, string> {
  const map = new Map<string, string>();
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    map.set(trimmed.slice(0, eq).trim(), trimmed.slice(eq + 1).trim());
  }
  return map;
}

function setIfMissing(key: string, value: string | undefined) {
  if (process.env[key]?.trim() || !value?.trim()) return;
  process.env[key] = value.trim();
}

/**
 * Pull onix-player Supabase credentials from the mobile app .env when
 * Los-Pibes .env.local does not define them yet.
 */
export function loadOnixPlayerEnvFromAppRepo() {
  const candidates = [
    resolve(process.cwd(), '../Onix Media Mobile App/onix-player/.env'),
    resolve(process.cwd(), '../../Onix Media Mobile App/onix-player/.env'),
  ];

  for (const envPath of candidates) {
    if (!existsSync(envPath)) continue;
    const vars = parseDotEnv(readFileSync(envPath, 'utf8'));
    setIfMissing('ONIX_PLAYER_SUPABASE_URL', vars.get('EXPO_PUBLIC_SUPABASE_URL'));
    setIfMissing('ONIX_PLAYER_SUPABASE_ANON_KEY', vars.get('EXPO_PUBLIC_SUPABASE_ANON_KEY'));
    setIfMissing('ONIX_PLAYER_ADMIN_ACCESS_CODE', vars.get('ONIX_PLAYER_ADMIN_ACCESS_CODE'));
    setIfMissing('NEXT_PUBLIC_SITE_ORIGIN', vars.get('NEXT_PUBLIC_SITE_ORIGIN'));
    break;
  }

  if (!process.env.NEXT_PUBLIC_SITE_ORIGIN?.trim()) {
    process.env.NEXT_PUBLIC_SITE_ORIGIN = 'https://onixmedia.agency';
  }
}
