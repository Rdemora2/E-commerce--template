<template>
    <v-container class="d-flex flex-col mx-auto" style="width: 89vw; max-width: 1240px">
        <v-row class="d-flex justify-center" ref="productRow">
            <ProductCard v-for="(product, index) in visibleProducts" :key="index" :product="product" />
        </v-row>
        <div v-if="product" class="text-center">
            <v-btn @click="toggleShowMore">
                {{ showMore ? 'Ver Menos' : 'Ver Mais' }}
            </v-btn>
        </div>
    </v-container>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps(['products'])

const showMore = ref(false)

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
    return showMore.value ? props.products : props.products.slice(0, itemsPerRow.value)
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
