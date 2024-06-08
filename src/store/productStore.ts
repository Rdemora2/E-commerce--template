import { defineStore } from "pinia";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [],
  }),
  actions: {
    setProducts(products) {
      this.products = products;
    },
  },
});
