<template>
  <v-col cols="12" xs="6" sm="6" md="4" lg="3" xl="3" class="text-left">
    <v-card max-height="410" class="my-4 mx-2">
      <img :src="product.photo" :alt="product.name"
        style="object-fit: fill; width: 100%; max-width: 300px; max-height: 295px;" />
      <v-card-title class="text-body-1 font-weight-bold mt-2">
        {{ product.name }}
      </v-card-title>
      <div class="d-flex flex-row align-center text-center mx-3" style="height: 1vh">
        <v-rating :model-value="product.rating" density="comfortable" size="x-small" readonly
          color="orange-lighten-1"></v-rating>
      </div>
      <v-card-actions>
        <v-btn class="font-weight-bold" :text="product.price"></v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script setup>
defineProps({
  product: Object
})
</script>
