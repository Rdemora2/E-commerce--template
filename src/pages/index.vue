<template>
  <homeBanner />
  <brandsContainer />
  <productsRow :products="productStore.products" />
</template>

<script setup>
import { useProductStore } from '../store/productStore'

const productStore = useProductStore()
</script>
