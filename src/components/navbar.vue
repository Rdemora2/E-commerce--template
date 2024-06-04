<template>
  <div>
    <nav>
      <v-app-bar
        class="d-flex justify-center flex-wrap"
        style="position: relative; height: 10vh;"
      >
        <div class="d-flex justify-between mx-auto align-center" style="width: 89vw; max-width: 1225px">
          <v-toolbar-title class="my-0 mx-2">SHOP.CO</v-toolbar-title>
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
          <v-avatar class="mx-2">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
          </v-avatar>
        </div>
      </v-app-bar>
    </nav>
  </div>
</template>
