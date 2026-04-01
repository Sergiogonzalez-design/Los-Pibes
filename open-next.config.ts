import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
	...defineCloudflareConfig(),
	// OpenNext runs `npm run build` by default; our npm "build" is the Cloudflare
	// pipeline, so we must invoke Next directly to avoid a recursive loop.
	buildCommand: "npx next build",
};
