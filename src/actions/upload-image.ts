"use server";

import { uploadImage } from "@/services/cloudinary/upload-image";

import { requireAuth } from "@/lib/auth";

export async function uploadImageAction(formData: FormData): Promise<string> {
  await requireAuth();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    throw new Error("Arquivo inválido.");
  }

  return uploadImage(file);
}
