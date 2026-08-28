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
        gap-5
        rounded-2xl
        border
        border-border/70
        bg-card
        p-5
        shadow-sm
        transition-shadow
        duration-300
        hover:shadow-md
        sm:flex-row
        lg:gap-6
        lg:p-6
      "
    >
      <div
        className="
          relative
          h-28
          w-20
          shrink-0
          overflow-hidden
          rounded-xl
          border
          border-border/60
          bg-secondary
          sm:h-36
          sm:w-28
        "
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            ease-out
            hover:scale-[1.02]
          "
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3
            className="
              text-lg
              font-semibold
              tracking-tight
              text-foreground
              transition-colors
              duration-300
              hover:text-primary
              lg:text-xl
            "
          >
            {item.name}
          </h3>

          <p
            className="
              mt-2
              text-sm
              text-muted-foreground
            "
          >
            Ref.: {item.reference}
          </p>

          <p
            className="
              mt-2
              text-sm
              text-muted-foreground
            "
          >
            Tam. {item.size}
          </p>

          <p
            className={
              wholesale
                ? `
                  mt-3
                  text-sm
                  font-medium
                  text-emerald-700
                `
                : `
                  mt-3
                  text-sm
                  text-muted-foreground
                `
            }
          >
            {wholesale
              ? "Valor Atacado"
              : "Valor Unitário"}
          </p>

          <p
            className={
              wholesale
                ? `
                  text-lg
                  font-semibold
                  text-emerald-700
                `
                : `
                  text-lg
                  font-semibold
                  tracking-tight
                  text-primary
                `
            }
          >
            {unitPrice.toLocaleString(
              "pt-BR",
              {
                style: "currency",
                currency: "BRL",
              },
            )}
          </p>

          <div
            className="
              mt-4
              border-t
              border-border/60
              pt-4
            "
          >
            <p
              className="
                text-sm
                text-muted-foreground
              "
            >
              Subtotal
            </p>

            <p
              className="
                text-base
                font-semibold
                tracking-tight
                text-foreground
                lg:text-lg
              "
            >
              {(unitPrice * item.quantity).toLocaleString(
                "pt-BR",
                {
                  style: "currency",
                  currency: "BRL",
                },
              )}
            </p>
          </div>
        </div>

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            lg:mt-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              lg:gap-3
            "
          >
            <Button
              size="icon"
              variant="outline"
              className="
                h-10
                w-10
                border-border
                text-foreground
                transition-colors
                duration-200
                hover:border-primary/40
                hover:bg-secondary
                hover:text-primary
              "
              onClick={() =>
                decreaseQuantity(
                  item.id,
                  item.size,
                )
              }
            >
              <Minus className="h-4 w-4" />
            </Button>

            <span
              className="
                w-10
                text-center
                text-base
                font-semibold
                text-foreground
                lg:text-lg
              "
            >
              {item.quantity}
            </span>

            <Button
              size="icon"
              variant="outline"
              className="
                h-10
                w-10
                border-border
                text-foreground
                transition-colors
                duration-200
                hover:border-primary/40
                hover:bg-secondary
                hover:text-primary
              "
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
            className="
              transition-colors
              duration-200
              hover:bg-destructive/10
            "
            onClick={() =>
              removeItem(
                item.id,
                item.size,
              )
            }
          >
            <Trash2
              className="
                h-5
                w-5
                text-destructive
              "
            />
          </Button>
        </div>
      </div>
    </div>
  );
}