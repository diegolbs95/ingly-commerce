"use server";

import { revalidatePath } from "next/cache";

import type { ProductFormData } from "@/features/admin/schemas/product.schema";

import { updateProductService } from "@/services";

import { createSlug } from "@/utils/slug";

import { requireAuth } from "@/lib/auth";

export async function updateProductAction(id: string, data: ProductFormData) {
  await requireAuth();
  await updateProductService(id, {
    ...data,

    image2: data.image2 || null,
    image3: data.image3 || null,
    image4: data.image4 || null,
    image5: data.image5 || null,
    slug: createSlug(data.name),
  });

  revalidatePath("/admin");
  revalidatePath("/");
  revalidatePath("/catalogo");
}
