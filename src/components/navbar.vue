<template>
  <div>
    <nav>
      <v-app-bar class="d-flex justify-center flex-wrap" style="position: relative; height: 10vh;">
        <div class="d-flex justify-between mx-auto align-center" style="width: 89vw; max-width: 1225px">
          <RouterLink class="my-0 mr-6" to="/"><v-toolbar-title>SHOP.CO</v-toolbar-title></RouterLink>
          <v-btn text class="ml-2" to="/">Início</v-btn>
          <v-btn text class="ml-2">Mulher</v-btn>
          <v-btn text class="ml-2">Homem</v-btn>
          <v-btn text class="ml-2">Sapatos</v-btn>
          <v-btn text class="ml-2">Acessórios</v-btn>
          <v-autocomplete :items="items" menu-icon="" placeholder="Buscar Produtos..." prepend-inner-icon="mdi-magnify"
            variant="solo" rounded density="comfortable"></v-autocomplete>
          <v-avatar class="mx-2">
            <NuxtImg src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></NuxtImg>
          </v-avatar>
        </div>
      </v-app-bar>
    </nav>
  </div>
</template>

<script setup>
const items = []
</script>