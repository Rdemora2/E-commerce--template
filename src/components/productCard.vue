<!-- <template>
  <div
    class="d-flex justify-between mx-auto"
    style="width: 89vw; max-width: 1240px"
  >
    <v-card max-height="410" width="21vw" max-width="300" class="my-4 mx-2">
      <img
        src="https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$"
        style="object-fit: fill; width: 100%; max-width: 300px; max-height: 69%;"
      ></img>

      <v-card-title class="text-body-1 font-weight-bold mt-2">
        Polo Cropped Tricotado
      </v-card-title>

      <div
        class="d-flex flex-row align-center text-center mx-3"
        style="height: 1vh"
      >
        <v-rating
          v-model="rating"
          density="comfortable"
          size="x-small"
          readonly
          color="orange-lighten-1"
        ></v-rating>
      </div>

      <v-card-actions>
        <v-btn class="font-weight-bold" text="R$150,00"></v-btn>
      </v-card-actions>
    </v-card>
    <v-card max-height="410" width="21vw" max-width="300" class="my-4 mx-2">
      <img
        src="https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$"
        style="object-fit: fill; width: 100%; max-width: 300px; max-height: 69%;"
      ></img>

      <v-card-title class="text-body-1 font-weight-bold mt-2">
        Polo Cropped Tricotado
      </v-card-title>

      <div
        class="d-flex flex-row align-center text-center mx-3"
        style="height: 1vh"
      >
        <v-rating
          v-model="rating"
          density="comfortable"
          size="x-small"
          readonly
          color="orange-lighten-1"
        ></v-rating>
      </div>

      <v-card-actions>
        <v-btn class="font-weight-bold" text="R$150,00"></v-btn>
      </v-card-actions>
    </v-card>
    <v-card max-height="410" width="21vw" max-width="300" class="my-4 mx-2">
      <img
        src="https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$"
        style="object-fit: fill; width: 100%; max-width: 300px; max-height: 69%;"
      ></img>

      <v-card-title class="text-body-1 font-weight-bold mt-2">
        Polo Cropped Tricotado
      </v-card-title>

      <div
        class="d-flex flex-row align-center text-center mx-3"
        style="height: 1vh"
      >
        <v-rating
          v-model="rating"
          density="comfortable"
          size="x-small"
          readonly
          color="orange-lighten-1"
        ></v-rating>
      </div>

      <v-card-actions>
        <v-btn class="font-weight-bold" text="R$150,00"></v-btn>
      </v-card-actions>
    </v-card>
    <v-card max-height="410" width="21vw" max-width="300" class="my-4 mx-2">
      <img
        src="https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$"
        style="object-fit: fill; width: 100%; max-width: 300px; max-height: 69%;"
      ></img>

      <v-card-title class="text-body-1 font-weight-bold mt-2">
        Polo Cropped Tricotado
      </v-card-title>

      <div
        class="d-flex flex-row align-center text-center mx-3"
        style="height: 1vh"
      >
        <v-rating
          v-model="rating"
          density="comfortable"
          size="x-small"
          readonly
          color="orange-lighten-1"
        ></v-rating>
      </div>

      <v-card-actions>
        <v-btn class="font-weight-bold" text="R$150,00"></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    rating: 4,
  }),
};
</script> -->
<template>
  <div class="d-flex justify-between mx-auto" style="width: 89vw; max-width: 1240px">
    <v-row class="d-flex justify-between align-center">
      <v-col cols="auto" v-for="product in products" :key="product.name" class="text-center">
        <v-card max-height="410" width="21vw" max-width="300" class="my-4 mx-2">
          <img :src="product.photo" :alt="product.name"
            style="object-fit: fill; width: 100%; max-width: 300px; max-height: 69%;"></img>

          <v-card-title class="text-body-1 font-weight-bold mt-2">
            {{ product.name }}
          </v-card-title>

          <div class="d-flex flex-row align-center text-center mx-3" style="height: 1vh">
            <v-rating :value="product.rating" density="comfortable" size="x-small" readonly
              color="orange-lighten-1"></v-rating>
          </div>

          <v-card-actions>
            <v-btn class="font-weight-bold" :text="product.price"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  { name: 'Polo Cropped Tricotado', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$150,00', rating: 4 },
  { name: 'Polo Tricotado Cropped', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$250,00', rating: 3 },
  { name: 'Polo Cropped', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$750,00', rating: 5 },
  { name: 'Polo Tricotado', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$50,00', rating: 1 },
  { name: 'Polo Tricotapped', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$30,00', rating: 2 }
])
</script>