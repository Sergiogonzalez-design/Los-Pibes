/**
 * Cloudflare Workers Builds sets WORKERS_CI=1 (see Cloudflare docs).
 * Use OpenNext there; everywhere else (e.g. Vercel, local) use `next build`.
 */
import { execSync } from "node:child_process";

const useOpenNext = process.env.WORKERS_CI === "1";

if (useOpenNext) {
  execSync("npx opennextjs-cloudflare build", { stdio: "inherit", env: process.env });
} else {
  execSync("npx next build", { stdio: "inherit", env: process.env });
}
