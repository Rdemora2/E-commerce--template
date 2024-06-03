import { defineNuxtPlugin } from 'nuxt/app'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
  })
  nuxtApp.vueApp.use(vuetify)
})