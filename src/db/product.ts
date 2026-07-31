import { prisma } from "@/lib/prisma";

import type { Product } from "@prisma/client";

export async function findProducts(): Promise<Product[]> {
  return prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function findProductById(
  id: string
): Promise<Product | null> {
  return prisma.product.findUnique({
    where: {
      id,
    },
  });
}

export async function createProduct(
  data: Omit<
    Product,
    "id" | "createdAt" | "updatedAt"
  >
): Promise<Product> {
  return prisma.product.create({
    data,
  });
}

export async function updateProduct(
  id: string,
  data: Partial<
    Omit<
      Product,
      "id" | "createdAt" | "updatedAt"
    >
  >
): Promise<Product> {
  return prisma.product.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteProduct(
  id: string
): Promise<Product> {
  return prisma.product.delete({
    where: {
      id,
    },
  });
}