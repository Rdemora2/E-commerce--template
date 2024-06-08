<template>
    <v-container class="d-flex flex-col mx-auto" style="width: 89vw; max-width: 1240px">
        <v-row class="d-flex justify-center" ref="productRow">
            <ProductCard v-for="(product, index) in visibleProducts" :key="index" :product="product" />
        </v-row>
        <div v-if="products.length > visibleProducts.length" class="text-center">
            <v-btn @click="toggleShowMore">
                {{ showMore ? 'Ver Menos' : 'Ver Mais' }}
            </v-btn>
        </div>
    </v-container>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import ProductCard from './productCard.vue'

const showMore = ref(false)
const products = ref([
    { name: 'Polo Cropped Tricotado', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$150,00', rating: 4 },
    { name: 'Polo Tricotado Cropped', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$250,00', rating: 3 },
    { name: 'Polo Cropped', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$750,00', rating: 5 },
    { name: 'Polo Tricotado', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$50,00', rating: 1 },
    { name: 'Polo Tricotapped', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$30,00', rating: 2 },
    { name: 'Polo Tricotado', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$50,00', rating: 1 },
    { name: 'Polo Tricotado', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$50,00', rating: 1 },
    { name: 'Polo Tricotado', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$50,00', rating: 1 },
    { name: 'Polo Tricotado', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$50,00', rating: 1 },
    { name: 'Polo Tricotado', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$50,00', rating: 1 },
    { name: 'Polo Tricotado', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$50,00', rating: 1 },
    { name: 'Polo Tricotado', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$50,00', rating: 1 },
    { name: 'Polo Tricotado', photo: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211943140001_alternate10?$rl_4x5_pdp$', price: 'R$50,00', rating: 1 },
])

const productRow = ref(null)
const itemsPerRow = ref(4)

const updateItemsPerRow = () => {
    if (productRow.value && productRow.value.$el) {
        const rowWidth = productRow.value.$el.clientWidth
        const itemWidth = 300
        itemsPerRow.value = Math.floor(rowWidth / itemWidth)
    }
}

const visibleProducts = computed(() => {
    return showMore.value ? products.value : products.value.slice(0, itemsPerRow.value)
})

const toggleShowMore = () => {
    showMore.value = !showMore.value
}

let resizeObserver
onMounted(() => {
    resizeObserver = new ResizeObserver(updateItemsPerRow);
    if (productRow.value && productRow.value.$el) {
        resizeObserver.observe(productRow.value.$el)
    }
    updateItemsPerRow()
})

onBeforeUnmount(() => {
    if (resizeObserver && productRow.value && productRow.value.$el) {
        resizeObserver.unobserve(productRow.value.$el)
    }
})
</script>
