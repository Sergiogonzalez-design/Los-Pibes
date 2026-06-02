import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", "public");
const input = path.join(publicDir, "Onix media new color logo.jpeg");
const output = path.join(publicDir, "Onix media new color logo.png");

// Threshold: any pixel whose R+G+B is below this becomes fully transparent.
// Pixels above the threshold keep an alpha proportional to brightness so
// dark-but-not-black edges fade out instead of leaving a halo.
const HARD_THRESHOLD = 28;   // ~10% — fully transparent
const SOFT_THRESHOLD = 70;   // ~27% — fully opaque above this

const img = sharp(input).ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const max = Math.max(r, g, b);

  if (max <= HARD_THRESHOLD) {
    data[i + 3] = 0;
  } else if (max < SOFT_THRESHOLD) {
    const t = (max - HARD_THRESHOLD) / (SOFT_THRESHOLD - HARD_THRESHOLD);
    data[i + 3] = Math.round(255 * t);
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`Wrote ${output} (${width}x${height})`);
