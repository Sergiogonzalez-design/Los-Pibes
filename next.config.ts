import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. Without this, Next detects the
  // stray lockfile in the parent folder (C:\Users\sergi) and infers the wrong
  // root, which breaks routing (e.g. /en and /es returning 404).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
