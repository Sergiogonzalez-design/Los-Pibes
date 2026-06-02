import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", "public");
const input = path.join(publicDir, "Website Nacho.jpg");
const output = path.join(publicDir, "website-nacho.jpg");

const meta = await sharp(input).metadata();
console.log(`Source: ${meta.width}x${meta.height}`);

await sharp(input)
  .resize({
    width: meta.width * 3,
    height: meta.height * 3,
    kernel: sharp.kernel.lanczos3,
  })
  .sharpen({ sigma: 1.2, m1: 1, m2: 2, x1: 2, y2: 10, y3: 20 })
  .median(1)
  .jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: "4:4:4" })
  .toFile(output);

const out = await sharp(output).metadata();
console.log(`Output: ${out.width}x${out.height} (${out.size ?? "unknown"} bytes)`);
