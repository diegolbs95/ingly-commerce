import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Product } from "@/features/catalog/types";

export interface CartItem extends Product {
  quantity: number;
  size: string;
}

interface CartStore {
  items: CartItem[];

  hydrated: boolean;

  setHydrated: (value: boolean) => void;

  addItem: (product: Product, size: string, quantity: number) => void;

  increaseQuantity: (id: string, size: string) => void;

  decreaseQuantity: (id: string, size: string) => void;

  removeItem: (id: string, size: string) => void;

  clear: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      items: [],

      hydrated: false,

      setHydrated: (hydrated) => set({ hydrated }),

      addItem: (product, size, quantity) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id && item.size === size,
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id && item.size === size
                  ? {
                      ...item,
                      quantity: item.quantity + quantity,
                    }
                  : item,
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                ...product,
                quantity,
                size,
              },
            ],
          };
        }),

      increaseQuantity: (id, size) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.size === size
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        })),

      decreaseQuantity: (id, size) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id && item.size === size
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),

      removeItem: (id, size) =>
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.id === id && item.size === size),
          ),
        })),

      clear: () =>
        set({
          items: [],
        }),
    }),
    {
      name: "ingly-cart",

      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);
