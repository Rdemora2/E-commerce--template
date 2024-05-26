import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  devtools: { enabled: false },
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vee-validate/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/image'
  ],
  primevue: {
    usePrimeVue: true
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'light'
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
};
export default config;
