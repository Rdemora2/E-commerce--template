<template>
  <v-container fluid :class="bgClass" style="height: 3vh;">
    <v-row class="d-flex justify-center align-center">
      <span class="text-subtitle-2">Cadastre-se e ganhe 20% de desconto no seu primeiro pedido.</span>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useNuxtApp } from '#app'

const { $vuetify } = useNuxtApp()

const bgClass = computed(() => {
  return $vuetify.theme.global.current.value.dark ? 'bg-dark' : 'bg-light'
})
</script>

<style scoped>
.bg-dark {
  background-color: rgb(189, 189, 189);
  color: rgb(15, 15, 15);
}

.bg-light {
  background-color: rgb(15, 15, 15);
  color: white;
}
</style>