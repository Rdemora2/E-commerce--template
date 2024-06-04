<template>
  <div class="bg-black d-flex">
    <v-container fluid class="bg-black d-flex" style="height: 12vh; width: 89vw; max-width: 1225px">
      <v-row class="d-flex justify-between align-center">
        <v-col cols="auto" v-for="brand in brands" :key="brand.name" class="text-center">
          <img :src="brand.logo" :alt="brand.name" style="object-fit: fill; width: 11vw; max-width: 160px; height: 4.5vh; filter: invert(1);"></img>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </template>
  
  <script setup>
  const brands = [
    { name: 'Versace', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Versace_old_logo.svg/2560px-Versace_old_logo.svg.png' },
    { name: 'Zara', logo: 'https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png' },
    { name: 'Gucci', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Gucci_Logo.svg/2560px-Gucci_Logo.svg.png' },
    { name: 'Prada', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Prada-Logo.svg/2560px-Prada-Logo.svg.png' },
    { name: 'Calvin Klein', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Calvin_klein_logo_web23.svg/2560px-Calvin_klein_logo_web23.svg.png' }
  ]
  </script>