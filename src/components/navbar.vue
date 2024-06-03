<template>
  <nav>
    <v-app-bar class="py-4 px-12 d-flex justify-center flex-wrap">
      <v-toolbar-title class="ma-0">SHOP.CO</v-toolbar-title>
      <v-btn text class="ml-2" to="/">Home</v-btn>
      <v-btn text class="ml-2">Mulher</v-btn>
      <v-btn text class="ml-2">Homem</v-btn>
      <v-btn text class="ml-2">Sapatos</v-btn>
      <v-btn text class="ml-2">Acessórios</v-btn>
      <v-autocomplete
        :items="items"
        menu-icon=""
        placeholder="Buscar Produtos..."
        prepend-inner-icon="mdi-magnify"
        variant="solo"
        rounded
        density="comfortable"
      ></v-autocomplete>
      <v-avatar>
        <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
      </v-avatar>
    </v-app-bar>
  </nav>
</template>
