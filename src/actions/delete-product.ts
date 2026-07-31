"use server";

import { revalidatePath } from "next/cache";

import { deleteProductService } from "@/services";

import { requireAuth } from "@/lib/auth";

export async function deleteProductAction(id: string) {
  await requireAuth();
  await deleteProductService(id);

  revalidatePath("/admin");
  revalidatePath("/");
  revalidatePath("/catalogo");
}
