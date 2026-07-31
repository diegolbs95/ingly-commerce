"use client";

import Link from "next/link";

import { ArrowLeft, Pencil } from "lucide-react";

import { toast } from "sonner";

import { deleteProductAction } from "@/actions/delete-product";

import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ProductActionsCardProps {
  productId: string;
}

export function ProductActionsCard({
  productId,
}: Readonly<ProductActionsCardProps>) {
  async function handleDelete() {
    try {
      await deleteProductAction(productId);

      toast.success(
        "Produto removido com sucesso."
      );
    } catch {
      toast.error(
        "Erro ao remover produto."
      );
    }
  }

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm">

      <h2 className="text-lg font-semibold">
        Ações
      </h2>

      <div className="mt-6 space-y-3">

        <Button
          asChild
          className="w-full justify-start"
        >
          <Link
            href={`/admin/products/${productId}/edit`}
          >
            <Pencil className="mr-2 h-4 w-4" />

            Editar produto
          </Link>
        </Button>

        <AlertDialog>

          <AlertDialogTrigger asChild>

            <Button
              variant="destructive"
              className="w-full justify-start"
            >
              Excluir produto
            </Button>

          </AlertDialogTrigger>

          <AlertDialogContent>

            <AlertDialogHeader>

              <AlertDialogTitle>
                Excluir produto?
              </AlertDialogTitle>

              <AlertDialogDescription>
                Essa ação não poderá ser desfeita.
              </AlertDialogDescription>

            </AlertDialogHeader>

            <AlertDialogFooter>

              <AlertDialogCancel>
                Cancelar
              </AlertDialogCancel>

              <AlertDialogAction
                onClick={handleDelete}
              >
                Excluir
              </AlertDialogAction>

            </AlertDialogFooter>

          </AlertDialogContent>

        </AlertDialog>

        <Button
          asChild
          variant="outline"
          className="w-full justify-start"
        >
          <Link href="/admin">

            <ArrowLeft className="mr-2 h-4 w-4" />

            Voltar

          </Link>
        </Button>

      </div>

    </div>
  );
}