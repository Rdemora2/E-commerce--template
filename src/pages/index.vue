<template>
  <homeBanner />
  <brandsContainer />
  <productsRow :products="products" />
</template>

<script setup>

const products = [
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
]

</script>