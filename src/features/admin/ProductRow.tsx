"use client";

import { useTransition } from "react";
import Image from "next/image";

import Link from "next/link";

import { Pencil, Tag, Trash2 } from "lucide-react";

import { toast } from "sonner";

import type { Product } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

import { StatusBadge } from "./components/StatusBadge";

import { deleteProductAction } from "@/actions/delete-product";

interface ProductRowProps {
  product: Product;
}

export function ProductRow({
  product,
}: Readonly<ProductRowProps>) {
  const [isPending, startTransition] =
    useTransition();
  function handleRemove() {
    startTransition(async () => {
      try {
        await deleteProductAction(product.id);

        toast.success(
          "Produto removido com sucesso."
        );
      } catch {
        toast.error(
          "Não foi possível remover o produto."
        );
      }
    });
  }

  return (
    <div
      className="
        grid
        grid-cols-5
        items-center
        border-b
        border-border
        px-6
        py-5
        transition-all
        duration-200
        hover:bg-muted/40
        "
    >
      {/* Produto */}

      <Link
        href={`/admin/products/${product.id}/edit`}
        className="
            group
            flex
            items-center
            gap-4
            rounded-xl
            p-2
            -m-2
            transition-all
            duration-200
            hover:bg-muted/50
        "
      >
        <div
          className="
      relative
      h-16
      w-16
      shrink-0
      overflow-hidden
      rounded-xl
      border
      bg-muted
    "
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="64px"
            className="
        object-cover
        transition-transform
        duration-200
        group-hover:scale-105
      "
          />
        </div>

        <div className="min-w-0">

          <div className="min-w-0">

            <p
              className="
                truncate
                font-semibold
                transition-colors
                group-hover:text-primary
              "
            >
              {product.name}
            </p>

            <p className="text-xs text-muted-foreground">
              Ref.: {product.reference}
            </p>
            
          </div>
        </div>
      </Link>

      {/* Categoria */}

      <div>
        <Badge
          variant="secondary"
          className="gap-1"
        >
          <Tag className="h-3 w-3" />
          {product.category}
        </Badge>
      </div>

      {/* Preço */}

      <span className="font-semibold text-base">
        {product.price.toLocaleString(
          "pt-BR",
          {
            style: "currency",
            currency: "BRL",
          }
        )}
      </span>

      {/* Status */}

      <div className="flex flex-wrap gap-2">
        <StatusBadge
          label={
            product.active
              ? "Ativo"
              : "Inativo"
          }
          variant={
            product.active
              ? "default"
              : "secondary"
          }
        />

        {product.isNew && (
          <StatusBadge
            label="Novo"
            variant="outline"
          />
        )}

        {product.featured && (
          <StatusBadge
            label="Destaque"
          />
        )}
      </div>

      {/* Ações */}

      <TooltipProvider>
        <div className="flex justify-end gap-2">

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="ghost"
                size="icon"
              >
                <Link
                  href={`/admin/products/${product.id}/edit`}
                >
                  <Pencil className="h-4 w-4" />
                </Link>
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              Editar produto
            </TooltipContent>
          </Tooltip>

          <AlertDialog>
            <Tooltip>
              <TooltipTrigger asChild>

                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={isPending}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>

              </TooltipTrigger>

              <TooltipContent>
                Excluir produto
              </TooltipContent>
            </Tooltip>

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
                  disabled={isPending}
                  onClick={handleRemove}
                >
                  {isPending
                    ? "Excluindo..."
                    : "Excluir"}
                </AlertDialogAction>

              </AlertDialogFooter>

            </AlertDialogContent>

          </AlertDialog>

        </div>
      </TooltipProvider>
    </div>
  );
}