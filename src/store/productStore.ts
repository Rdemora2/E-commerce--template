import { defineStore } from "pinia";
import { generateMockProducts } from "../utils/mockData";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [],
    topProducts: [],
    newProducts: [],
  }),
  actions: {
    setProductsFromFaker() {
      const mockProducts = generateMockProducts(50);
      this.setProducts(mockProducts);

      const mockTopProducts = generateMockProducts(10);
      this.setTopProducts(mockTopProducts);

      const mockNewProducts = generateMockProducts(10);
      this.setNewProducts(mockNewProducts);
    },
    setProducts(products) {
      this.products = products;
    },
    setTopProducts(topProducts) {
      this.topProducts = topProducts;
    },
    setNewProducts(newProducts) {
      this.newProducts = newProducts;
    },
  },
});
