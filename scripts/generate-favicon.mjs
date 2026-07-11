/**
 * Build app/icon.png — Onix logo large on solid black (favicon-friendly).
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const input = path.join(root, "public", "Onix media new color logo.png");
const output = path.join(root, "app", "icon.png");

const SIZE = 512;
const LOGO_FILL = 0.96; // logo uses ~96% of the square

const meta = await sharp(input).metadata();
const { width = 1024, height = 1024 } = meta;

// Tighter center crop — source has wide black margins around the emblem.
const cropPct = 0.26;
const left = Math.round(width * cropPct);
const top = Math.round(height * cropPct);
const cropW = Math.round(width * (1 - 2 * cropPct));
const cropH = Math.round(height * (1 - 2 * cropPct));
const logoSize = Math.round(SIZE * LOGO_FILL);

const logo = await sharp(input)
  .extract({ left, top, width: cropW, height: cropH })
  .resize(logoSize, logoSize, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 1 },
  })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: SIZE,
    height: SIZE,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 1 },
  },
})
  .composite([{ input: logo, gravity: "center" }])
  .png()
  .toFile(output);

console.log(`Wrote ${output} (${SIZE}x${SIZE}, logo ${logoSize}px)`);
