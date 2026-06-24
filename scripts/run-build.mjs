/**
 * Cloudflare Workers Builds sets WORKERS_CI=1 (see Cloudflare docs).
 * Use OpenNext there; everywhere else (e.g. Vercel, local) use `next build`.
 */
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const ENV_FILE = resolve(ROOT, '.env.local');

function runAutoSync() {
  try {
    const envArgs = existsSync(ENV_FILE) ? [`--env-file=${ENV_FILE}`] : [];
    execSync(
      ['node', ...envArgs, 'node_modules/tsx/dist/cli.mjs', 'scripts/auto-sync-players.ts'],
      { cwd: ROOT, stdio: 'inherit', env: process.env }
    );
  } catch {
    console.warn('[onix-player] auto-sync before build failed (build continues)');
  }
}

runAutoSync();

const useOpenNext = process.env.WORKERS_CI === '1';

if (useOpenNext) {
  execSync('npx opennextjs-cloudflare build', { stdio: 'inherit', env: process.env });
} else {
  execSync('npx next build', { stdio: 'inherit', env: process.env });
}
