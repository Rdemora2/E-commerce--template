import { NuxtConfig } from '@nuxt/types';

declare module '@nuxt/types' {
  interface NuxtConfig {
    primevue?: {
      usePrimeVue: boolean;
    };
  }
}
