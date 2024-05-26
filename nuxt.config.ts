import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    usePrimeVue: true
  },
};
export default config;
