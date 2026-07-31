"use client";

import { useState } from "react";

import { productService } from "../services/product.service";

export function useProducts() {
  const [products, setProducts] = useState(
    productService.getAll()
  );

  function refresh() {
    setProducts([...productService.getAll()]);
  }

  return {
    products,

    create(data: Parameters<
      typeof productService.create
    >[0]) {
      productService.create(data);

      refresh();
    },

    update: productService.update,

    remove(id: string) {
      productService.delete(id);

      refresh();
    },
  };
}