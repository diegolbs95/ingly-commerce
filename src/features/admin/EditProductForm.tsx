"use client";

import { useTransition } from "react";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import type { Product } from "@prisma/client";

import { updateProductAction } from "@/actions";

import { ProductForm } from "./ProductForm";

import type { ProductFormData } from "./schemas/product.schema";

interface EditProductFormProps {
  product: Product;
}

export function EditProductForm({
  product,
}: Readonly<EditProductFormProps>) {
  const router = useRouter();

  const [isPending, startTransition] =
    useTransition();

  function handleSubmit(
    data: ProductFormData
  ) {
    startTransition(async () => {
      try {
        await updateProductAction(
          product.id,
          data
        );

        toast.success(
          "Produto atualizado com sucesso."
        );

        router.push("/admin");

        router.refresh();
      } catch {
        toast.error(
          "Não foi possível atualizar o produto."
        );
      }
    });
  }

  return (
    <ProductForm
      product={product}
      submitLabel={
        isPending
          ? "Salvando..."
          : "Salvar Alterações"
      }
      onSubmit={handleSubmit}
    />
  );
}