/**
 * Dev server with automatic onix-player sync when *-content.ts files change.
 */
import { spawn, execSync } from 'node:child_process';
import { existsSync, watch } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const ONIX_DIR = resolve(ROOT, 'lib/onix-player');
const ENV_FILE = resolve(ROOT, '.env.local');

function runAutoSync() {
  try {
    const envArgs = existsSync(ENV_FILE) ? [`--env-file=${ENV_FILE}`] : [];
    execSync(
      ['node', ...envArgs, 'node_modules/tsx/dist/cli.mjs', 'scripts/auto-sync-players.ts'],
      { cwd: ROOT, stdio: 'inherit', env: process.env }
    );
  } catch {
    console.warn('[onix-player] auto-sync failed (dev continues)');
  }
}

let debounceTimer;
function scheduleAutoSync(filename) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    console.log(`[onix-player] ${filename} changed — syncing...`);
    runAutoSync();
  }, 1500);
}

console.log('[onix-player] checking for new/changed players...');
runAutoSync();

watch(ONIX_DIR, { recursive: true }, (_event, filename) => {
  if (!filename?.endsWith('-content.ts')) return;
  if (filename.includes('player-template')) return;
  scheduleAutoSync(filename);
});

const next = spawn('npx', ['next', 'dev'], {
  cwd: ROOT,
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

next.on('exit', (code) => process.exit(code ?? 0));

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    next.kill();
    process.exit(0);
  });
}
