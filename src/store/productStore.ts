import { defineStore } from "pinia";
import { generateMockProducts } from "../utils/mockData";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [],
  }),
  actions: {
    setProductsFromFaker() {
      const mockProducts = generateMockProducts(10);
      this.setProducts(mockProducts);
    },
    setProducts(products) {
      this.products = products;
    },
  },
});
