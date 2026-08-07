"use server";

import { revalidatePath } from "next/cache";

import type { ProductFormData } from "@/features/admin/schemas/product.schema";

import { createProductService } from "@/services";

import { createSlug } from "@/utils/slug";

import { requireAuth } from "@/lib/auth";

export async function createProductAction(data: ProductFormData) {
  await requireAuth();

  await createProductService({
    ...data,

    image2: data.image2 || null,
    image3: data.image3 || null,
    image4: data.image4 || null,
    image5: data.image5 || null,

    composition: data.composition ?? null,

    slug: createSlug(data.name),
  });

  revalidatePath("/admin");
  revalidatePath("/");
  revalidatePath("/catalogo");
}
