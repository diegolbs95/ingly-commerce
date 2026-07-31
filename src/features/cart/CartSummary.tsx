"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import type { CartItem } from "@/lib/cart";
import {
  WHOLESALE_MIN_ITEMS,
  hasWholesale,
  getUnitPrice,
} from "@/lib/pricing";

interface CartSummaryProps {
  items: CartItem[];
}

export function CartSummary({
  items,
}: Readonly<CartSummaryProps>) {
  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  const wholesale =
    hasWholesale(totalItems);

  const subtotal = items.reduce(
    (sum, item) => {
      const unitPrice =
        getUnitPrice(
          item.price,
          item.wholesalePrice,
          wholesale,
        );

      return (
        sum +
        unitPrice * item.quantity
      );
    },
    0,
  );

  return (
    <div
      className="
        rounded-2xl
        border
        bg-background
        p-6
        lg:sticky
        lg:top-24
      "
    >
      <h2 className="text-xl font-semibold">
        Resumo do Pedido
      </h2>

      <div className="mt-6 space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Itens
          </span>

          <span className="font-medium">
            {totalItems}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Subtotal
          </span>

          <span className="font-medium">
            {subtotal.toLocaleString(
              "pt-BR",
              {
                style: "currency",
                currency: "BRL",
              },
            )}
          </span>
        </div>

        <div className="border-t pt-5">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">
              Total
            </span>

            <span className="text-2xl font-bold">
              {subtotal.toLocaleString(
                "pt-BR",
                {
                  style: "currency",
                  currency: "BRL",
                },
              )}
            </span>
          </div>
        </div>

        {wholesale ? (

          <div
            className="
              mt-4
              rounded-lg
              border
              border-wholesale/20
              bg-wholesale/5
              px-4
              py-3
            "
          >

            <p
              className="
                text-sm
                font-semibold
                text-wholesale
              "
            >
              ✓ Preço de atacado aplicado.
            </p>

          </div>

        ) : (

          <div
            className="
              mt-4
              rounded-lg
              border
              border-border
              bg-muted/40
              px-4
              py-3
            "
          >

            <p className="text-sm text-muted-foreground">

              Faltam {" "}

              <span className="font-semibold text-foreground">
                {WHOLESALE_MIN_ITEMS - totalItems}
              </span>

              {" "}peças para liberar o

              {" "}

              <span className="font-semibold text-wholesale">
                preço de atacado
              </span>.

            </p>

          </div>

        )}
      </div>

      <div className="mt-8 rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
        O frete será informado durante o atendimento pelo WhatsApp.
      </div>

      <div className="mt-8 space-y-3">
        <Button
          asChild
          variant="outline"
          className="h-11 w-full"
        >
          <Link href="/catalogo">
            Continuar Comprando
          </Link>
        </Button>

        <Button
          asChild
          className="h-11 w-full"
        >
          <Link href="/checkout">
            Finalizar Pedido
          </Link>
        </Button>
      </div>
    </div>
  );
}