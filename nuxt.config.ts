import type { NuxtConfig } from "nuxt/schema";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

const config: NuxtConfig = {
  devtools: { enabled: false },
  srcDir: "src/",
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@vee-validate/nuxt",
    "@nuxt/eslint",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/seo",
    "nuxt-typed-router",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  css: [],
  plugins: [],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  // @ts-expect-error
  eslint: {
    config: {
      stylistic: true,
    },
  },
  colorMode: {
    preference: "system",
    fallback: "dark",
  },
  linkChecker: {
    showLiveInspections: true,
  },
  // SEO config
  // alterar com infos reais quando for fazer deploy
  site: {
    url: "https://example.com",
    name: "Awesome Site",
    description: "Welcome to my awesome site!",
  },
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800],
    },
  },
};
export default config;
