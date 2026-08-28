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
        border-border/70
        bg-card
        p-5
        shadow-sm
        lg:sticky
        lg:top-24
        lg:p-6
      "
    >
      <h2
        className="
          text-xl
          font-semibold
          tracking-tight
          text-foreground
        "
      >
        Resumo do Pedido
      </h2>

      <div
        className="
          mt-6
          space-y-5
        "
      >
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Itens
          </span>

          <span
            className="
              text-sm
              font-medium
              text-foreground
            "
          >
            {totalItems}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Subtotal
          </span>

          <span
            className="
              text-sm
              font-medium
              text-foreground
            "
          >
            {subtotal.toLocaleString(
              "pt-BR",
              {
                style: "currency",
                currency: "BRL",
              },
            )}
          </span>
        </div>

        <div
          className="
            border-t
            border-border/70
            pt-5
          "
        >
          <div className="flex items-center justify-between">
            <span
              className="
                text-base
                font-semibold
                text-foreground
              "
            >
              Total
            </span>

            <span
              className="
                text-xl
                font-semibold
                tracking-tight
                text-primary
                lg:text-2xl
              "
            >
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
              rounded-xl
              border
              border-emerald-200/70
              bg-emerald-50/70
              px-4
              py-3
            "
          >
            <p
              className="
                text-sm
                font-semibold
                text-emerald-700
              "
            >
              ✓ Preço de atacado aplicado.
            </p>
          </div>
        ) : (
          <div
            className="
              mt-4
              rounded-xl
              border
              border-border/70
              bg-muted/40
              px-4
              py-3
            "
          >
            <p
              className="
                text-sm
                leading-6
                text-muted-foreground
              "
            >
              Faltam{" "}
              <span className="font-semibold text-foreground">
                {WHOLESALE_MIN_ITEMS - totalItems}
              </span>{" "}
              peças para liberar o{" "}
              <span className="font-semibold text-wholesale">
                preço de atacado
              </span>
              .
            </p>
          </div>
        )}
      </div>

      <div
        className="
          mt-6
          rounded-xl
          bg-secondary
          p-4
          text-sm
          leading-6
          text-muted-foreground
          lg:mt-8
        "
      >
        O frete será informado durante o atendimento pelo WhatsApp.
      </div>

      <div
        className="
          mt-6
          space-y-3
          lg:mt-8
        "
      >
        <Button
          asChild
          variant="outline"
          className="
            h-11
            w-full
            border-border
            text-foreground
            transition-colors
            hover:border-primary/30
            hover:bg-secondary
            hover:text-primary
          "
        >
          <Link href="/catalogo">
            Continuar Comprando
          </Link>
        </Button>

        <Button
          asChild
          className="
            h-11
            w-full
            bg-primary
            text-primary-foreground
            transition-colors
            hover:bg-primary/90
          "
        >
          <Link href="/checkout">
            Finalizar Pedido
          </Link>
        </Button>
      </div>
    </div>
  );
}