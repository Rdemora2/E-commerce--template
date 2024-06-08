<template>
  <homeBanner />
  <brandsContainer />
  <productsRow :products="productStore.products" />
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../store/productStore'

const productStore = useProductStore()

onMounted(() => {
  productStore.setProductsFromFaker()
})
</script>
