<template>
  <homeBanner />
  <brandsContainer />
  <productsRow :products="productStore.newProducts" title="New Products" />
  <productsRow :products="productStore.topProducts" title="Top Products" />
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../store/productStore'

const productStore = useProductStore()

onMounted(() => {
  productStore.setProductsFromFaker()
})
</script>
