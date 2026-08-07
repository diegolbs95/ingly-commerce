import { products } from "../data/products";
import { createSlug } from "@/utils/slug";

import type { Product } from "../types";

import type { ProductFormData } from "../schemas/product.schema";

export const productService = {
  getAll() {
    return products;
  },

  create(data: ProductFormData) {
    const product: Product = {
      id: crypto.randomUUID(),

      slug: createSlug(data.name),

      ...data,

      composition: data.composition ?? null,
    };

    products.push(product);

    return product;
  },

  update(id: string, data: ProductFormData) {
    const index = products.findIndex((product) => product.id === id);

    if (index === -1) return;

    products[index] = {
      ...products[index],
      ...data,

      composition: data.composition ?? null,

      slug: createSlug(data.name),
    };
  },

  delete(id: string) {
    const index = products.findIndex((product) => product.id === id);

    if (index >= 0) {
      products.splice(index, 1);
    }
  },
};
