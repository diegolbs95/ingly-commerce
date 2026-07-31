"use client";

import Image from "next/image";

import { Minus, Plus, Trash2 } from "lucide-react";

import type { CartItem as CartProduct } from "@/lib/cart";

import { Button } from "@/components/ui/button";

import { useCart } from "@/lib/cart";

import { getUnitPrice } from "@/lib/pricing";

interface CartItemProps {
  item: CartProduct;
  wholesale: boolean;
}

export function CartItem({
  item,
  wholesale,
}: Readonly<CartItemProps>) {
  const increaseQuantity = useCart(
    (state) => state.increaseQuantity,
  );

  const decreaseQuantity = useCart(
    (state) => state.decreaseQuantity,
  );

  const removeItem = useCart(
    (state) => state.removeItem,
  );

  const unitPrice =
    getUnitPrice(
      item.price,
      item.wholesalePrice,
      wholesale,
    );

  return (
    <div
      className="
        flex
        flex-col
        gap-6
        rounded-2xl
        border
        p-6
        sm:flex-row
      "
    >
      <div
        className="
          relative
          h-36
          w-28
          overflow-hidden
          rounded-xl
          border
          bg-secondary
          shrink-0
        "
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold">
            {item.name}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Ref.: {item.reference}
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            Tam. {item.size}
          </p>

          <p
            className={
              wholesale
                ? "mt-3 text-sm font-medium text-wholesale"
                : "mt-3 text-sm text-muted-foreground"
            }
          >
            {wholesale
              ? "Valor Atacado"
              : "Valor Unitário"}
          </p>

          <p className="font-semibold">
            {unitPrice.toLocaleString(
              "pt-BR",
              {
                style: "currency",
                currency: "BRL",
              },
            )}
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Subtotal
          </p>

          <p className="text-lg font-semibold">
            {(unitPrice * item.quantity).toLocaleString(
              "pt-BR",
              {
                style: "currency",
                currency: "BRL",
              },
            )}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10"
              onClick={() =>
                decreaseQuantity(
                  item.id,
                  item.size,
                )
              }
            >
              <Minus className="h-4 w-4" />
            </Button>

            <span className="w-10 text-center text-lg font-semibold">
              {item.quantity}
            </span>

            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10"
              onClick={() =>
                increaseQuantity(
                  item.id,
                  item.size,
                )
              }
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Remover produto"
            onClick={() =>
              removeItem(
                item.id,
                item.size,
              )
            }
          >
            <Trash2 className="h-5 w-5 text-destructive" />
          </Button>
        </div>
      </div>
    </div>
  );
}