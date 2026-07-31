"use client";

import type { CartItem as CartProduct } from "@/lib/cart";

import { CartItem } from "./CartItem";

import { hasWholesale } from "@/lib/pricing";

interface CartListProps {
  items: CartProduct[];
}

export function CartList({
  items,
}: Readonly<CartListProps>) {

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  const wholesale =
    hasWholesale(totalItems);

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <CartItem
          key={`${item.id}-${item.size}`}
          item={item}
          wholesale={wholesale}
        />
      ))}
    </div>
  );
}