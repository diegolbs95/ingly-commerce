"use client";

import Link from "next/link";

import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useCart } from "@/lib/cart";

export function CartButton() {
  const items = useCart((state) => state.items);

  const hydrated = useCart((state) => state.hydrated);

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="
        relative
        overflow-visible
        rounded-full
        p-2
        transition-all
        duration-300
        hover:bg-secondary
        hover:scale-105
      "
    >
      <Link
        href="/carrinho"
        aria-label="Sacola"
        className="
    relative
    inline-flex
    items-center
    justify-center
  "
      >
        <ShoppingBag
          className="
            h-5
            w-5
            transition-transform
            duration-300
            group-hover/button:scale-110
          "
        />

        {hydrated && totalItems > 0 && (
          <span
            className="
    absolute
    right-0
    top-0.5
    z-50
    flex
    h-[18px]
    w-[18px]
    translate-x-1/2
    -translate-y-1/2
    items-center
    justify-center
    rounded-full
    bg-primary
    text-[9px]
    font-bold
    text-white
    ring-2
    ring-white
  "
          >
            {totalItems}
          </span>
        )}
      </Link>
    </Button>
  );
}