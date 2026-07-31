import type { Product } from "@prisma/client";

import {
  createProduct,
  deleteProduct,
  findProductById,
  findProducts,
  updateProduct,
} from "@/db";

export async function getProducts(): Promise<Product[]> {
  return findProducts();
}

export async function getActiveProducts(): Promise<Product[]> {
  const products = await findProducts();

  return products.filter((product) => product.active);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await findProducts();

  return products.filter((product) => product.active && product.featured);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await findProducts();

  return products.find((product) => product.slug === slug) ?? null;
}

export async function getProduct(id: string): Promise<Product | null> {
  return findProductById(id);
}

export async function createProductService(
  data: Omit<Product, "id" | "createdAt" | "updatedAt">,
): Promise<Product> {
  return createProduct(data);
}

export async function updateProductService(
  id: string,
  data: Partial<Omit<Product, "id" | "createdAt" | "updatedAt">>,
): Promise<Product> {
  return updateProduct(id, data);
}

export async function deleteProductService(id: string): Promise<Product> {
  return deleteProduct(id);
}

export async function getNewProducts(): Promise<Product[]> {
  const products = await findProducts();

  return products
    .filter((product) => product.active && product.isNew)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}
