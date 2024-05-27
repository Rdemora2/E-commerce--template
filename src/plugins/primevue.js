import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.css'
import '@/assets/styles/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue)
})