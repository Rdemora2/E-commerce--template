import { faker } from "@faker-js/faker";

export function generateMockProducts(count: number): Product[] {
  const products: Product[] = [];

  for (let i = 0; i < count; i++) {
    const product: Product = {
      name: faker.commerce.productName(),
      photo: faker.image.url(),
      price: faker.commerce.price(),
      rating: faker.number.int({ min: 1, max: 5 }),
    };
    products.push(product);
  }

  return products;
}

export interface Product {
  name: string;
  photo: string;
  price: string;
  rating: number;
}
