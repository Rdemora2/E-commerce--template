import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt'
  ],
  primevue: {
    usePrimeVue: true
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
};
export default config;
