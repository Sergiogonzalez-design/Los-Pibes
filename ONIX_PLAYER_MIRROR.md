# ONIX Player ↔ Website Mirror — Context for Los-Pibes

This document explains how **onixmedia.agency** (this repo) connects to the **ONIX Player** mobile app. **Every** website-managed player profile uses the same pipeline.

---

## Two products, one player database

| System | Repo / path | Supabase project | Role |
|--------|-------------|------------------|------|
| **Website** | `Los-Pibes` (onixmedia.agency) | `iinjpunwybpmoppuajlk` — **inquiries only** | Marketing site, player pages, contact form |
| **Mobile app** | `onix-player` | `vccnkbrkrwbxffrmhieg` — **player profiles** | iOS/Android app: dossier, messages, calendar |

**Important:** Player profile data (bio, stats, videos, etc.) lives only in the **app Supabase project**. The website’s Supabase project is still used for the `inquiries` contact form — do not mix them.

---

## Source of truth (all players)

For every linked player:

- **Website owns:** profile text, stats, achievements, contact, highlight/report URLs, website photo (`photo_url`).
- **App owns:** app-only photo (`app_photo_url`), gallery uploads, best-action clips.
- **App-only (not mirrored):** messages, calendar, agency news.

A profile is “website-managed” when `profiles.website_slug` is set (e.g. `rami`, `bautista`).

---

## How data flows (every player)

```
lib/onix-player/<slug>-content.ts     ← single source for website pages + app dossier
        │
        │  auto-registered (scans *-content.ts files)
        │
        │  auto-sync on dev / build / deploy when file is new or edited
        │  → POST /functions/v1/admin  action: sync_website_player
        ▼
onix-player Supabase (vccnkbrkrwbxffrmhieg)
        │
        │  Mobile app reads via access code
        ▼
ONIX Player app (website fields read-only when website_slug is set)
```

On **first sync**, the app creates the player profile, access code, and share code. `profile_id` is saved automatically to `lib/onix-player/profile-ids.json`.

---

## Adding a new player (website + app at once)

1. **Copy** `lib/onix-player/player-template.ts` → `lib/onix-player/<slug>-content.ts` and fill in data + `buildXxxOnixPlayerDossier()`
2. **Add** a card on `app/examples/page.tsx` and build `app/examples/<slug>/` pages
3. **Start dev** — the app profile is created/updated automatically:
   ```bash
   npm run dev
   ```
   Or save the content file while dev is already running — a file watcher syncs within ~1.5s.

No manual `npm run sync:player` required during normal development (as long as `ONIX_PLAYER_*` env vars are set).

### Automatic triggers

| When | What syncs |
|------|------------|
| `npm run dev` (start) | New players + edited `*-content.ts` files |
| `npm run dev` (while running) | Watches `lib/onix-player/*-content.ts` |
| `npm run build` | New/changed players before build |
| `npm run deploy` | **All** registered players after Cloudflare deploy |

### Manual sync (optional)

```bash
cd C:\Users\sergi\Los-Pibes

npm run sync:player -- --list    # registered players
npm run sync:player -- rami      # force one player
npm run sync:players             # force all players
```

---

## Key files

| File | Purpose |
|------|---------|
| `lib/onix-player/types.ts` | Dossier TypeScript types |
| `lib/onix-player/players/index.ts` | **Auto-generated** registry |
| `lib/onix-player/profile-ids.json` | App UUIDs (auto-updated by sync) |
| `lib/onix-player/.sync-state.json` | Local edit tracking (gitignored) |
| `lib/onix-player/auto-sync.ts` | New/changed player detection |
| `lib/onix-player/sync.ts` | Generic sync client |
| `lib/onix-player/<slug>-content.ts` | Per-player website + dossier data |
| `lib/onix-player/player-template.ts` | Starter for new players |
| `scripts/dev.mjs` | Dev server + content file watcher |
| `scripts/auto-sync-players.ts` | Sync only what changed |
| `scripts/sync-player.ts` | CLI: one player or all |

---

## Environment variables (`.env.local`)

```env
# Contact form — keep as-is
NEXT_PUBLIC_SUPABASE_URL=https://iinjpunwybpmoppuajlk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

# Absolute URLs in sync payloads (http://localhost:3000 for local dev)
NEXT_PUBLIC_SITE_ORIGIN=https://onixmedia.agency

# Mobile app DB — player sync only
ONIX_PLAYER_SUPABASE_URL=https://vccnkbrkrwbxffrmhieg.supabase.co
ONIX_PLAYER_SUPABASE_ANON_KEY=<from onix-player EXPO_PUBLIC_SUPABASE_ANON_KEY>
ONIX_PLAYER_ADMIN_ACCESS_CODE=<admin login code from the app>
```

If `ONIX_PLAYER_*` is missing from `.env.local`, sync falls back to `../Onix Media Mobile App/onix-player/.env` when present. Without credentials, auto-sync is skipped (dev/build still run).

---

## Currently registered

| Slug | Player |
|------|--------|
| `agostina` | Agostina Holzheier |
| `bautista` | Bautista Rossi Molinas |
| `ignacio` | Ignacio Atienzar |
| `jaco` | Jacobo Sanfeliu |
| `juan` | Juan Ignacio Morales |
| `nacho` | Nacho Alfaro |
| `rami` | Pablo Ramirez |
| `sergio` | Sergio Gonzalez |
| `thiago` | Thiago Cagna |

Run `npm run sync:player -- --list` for live profile IDs.

---

## Photo rules

| Column | Set by | Shown on |
|--------|--------|----------|
| `photo_url` | Website sync | Website / marketing |
| `app_photo_url` | Mobile app upload | Mobile app only |
| `display_photo_url` | DB function | App UI — app photo first, else website |

Sync never overwrites `app_photo_url` or gallery.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `Unknown website player` | Add `lib/onix-player/<slug>-content.ts` exporting `websitePlayer` |
| Auto-sync skipped | Set `ONIX_PLAYER_*` in `.env.local` or onix-player `.env` |
| Sync returns 403 | Use an **admin** access code, not a player code |
| App shows old stats | Edit `*-content.ts` and save (dev watcher syncs), or `npm run sync:player -- <slug>` |
| New player, no app profile | Ensure `*-content.ts` exists; restart `npm run dev` |

---

## Related repos

- **Mobile app:** `C:\Users\sergi\Onix Media Mobile App\onix-player`
- **Website:** `C:\Users\sergi\Los-Pibes`
- **Supabase (players):** https://supabase.com/dashboard/project/vccnkbrkrwbxffrmhieg
