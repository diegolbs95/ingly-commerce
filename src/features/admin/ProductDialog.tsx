"use client";

import {
  useState,
  useTransition,
} from "react";

import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { createProductAction } from "@/actions";

import { ProductForm } from "./ProductForm";

import type { ProductFormData } from "./schemas/product.schema";

interface ProductDialogProps {
  children: React.ReactNode;
}

export function ProductDialog({
  children,
}: Readonly<ProductDialogProps>) {
  const [open, setOpen] =
    useState(false);

  const [isPending, startTransition] =
    useTransition();

  function handleSubmit(
    data: ProductFormData
  ) {
    startTransition(async () => {
      try {
        await createProductAction(data);

        toast.success(
          "Produto cadastrado com sucesso."
        );

        setOpen(false);
      } catch {
        toast.error(
          "Não foi possível cadastrar o produto."
        );
      }
    });
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent className="max-w-2xl">

        <DialogHeader>

          <DialogTitle>
            Novo Produto
          </DialogTitle>

          <DialogDescription>
            Cadastre um novo produto.
          </DialogDescription>

        </DialogHeader>

        <ProductForm
          submitLabel={
            isPending
              ? "Cadastrando..."
              : "Cadastrar Produto"
          }
          onSubmit={handleSubmit}
        />

      </DialogContent>

    </Dialog>
  );
}