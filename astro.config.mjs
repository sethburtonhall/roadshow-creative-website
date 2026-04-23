// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  site: "https://roadshowcreative.dev",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
