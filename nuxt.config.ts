import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  devtools: { enabled: false },
  srcDir: 'src/',
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vee-validate/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    'nuxt-typed-router'
  ],
  css: [
    'primeflex/primeflex.css',
    '@/assets/styles/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css'
  ],
  build: {
    transpile: ['primevue']
  },
  plugins: [
    '~/plugins/primevue.js'
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
  linkChecker: {
    showLiveInspections: true,
  },
  // SEO config
  // alterar com infos reais quando for fazer deploy
  site: {
    url: 'https://example.com',
    name: 'Awesome Site',
    description: 'Welcome to my awesome site!',
  },
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800],

    }
  }
};
export default config;
