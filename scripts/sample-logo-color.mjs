import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.resolve(__dirname, "..", "public", "Onix media new color logo.png");

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { channels } = info;
const buckets = new Map();

for (let i = 0; i < data.length; i += channels) {
  const a = data[i + 3];
  if (a < 200) continue;
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  if (lum < 80 || lum > 230) continue;
  const isGold = r > g && g > b && r - b > 30;
  if (!isGold) continue;
  const key = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
  const e = buckets.get(key) || { r: 0, g: 0, b: 0, n: 0 };
  e.r += r;
  e.g += g;
  e.b += b;
  e.n++;
  buckets.set(key, e);
}

const sorted = [...buckets.values()].sort((a, b) => b.n - a.n).slice(0, 10);
const hex = (n) => Math.round(n).toString(16).padStart(2, "0");

for (const [i, e] of sorted.entries()) {
  const r = e.r / e.n;
  const g = e.g / e.n;
  const b = e.b / e.n;
  console.log(`${i + 1}. #${hex(r)}${hex(g)}${hex(b)}  (${e.n} px)`);
}

let R = 0, G = 0, B = 0, N = 0;
for (const e of sorted) {
  R += e.r;
  G += e.g;
  B += e.b;
  N += e.n;
}
console.log(`\nWeighted average of top 10: #${hex(R / N)}${hex(G / N)}${hex(B / N)}`);
