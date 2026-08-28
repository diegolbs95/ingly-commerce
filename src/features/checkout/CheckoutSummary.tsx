"use client";

import Link from "next/link";
import { useMemo } from "react";

import { Button } from "@/components/ui/button";

import { PaymentMethod } from "./PaymentMethod";

import { useCart } from "@/lib/cart";

import {
  WHOLESALE_MIN_ITEMS,
  hasWholesale,
  getUnitPrice,
} from "@/lib/pricing";

interface CheckoutSummaryProps {
  paymentMethod: "pix" | "credit";

  onPaymentMethodChange: (
    value: "pix" | "credit",
  ) => void;

  onSubmit: () => void;
}

export function CheckoutSummary({
  paymentMethod,
  onPaymentMethodChange,
  onSubmit,
}: Readonly<CheckoutSummaryProps>) {
  const items = useCart(
    (state) => state.items,
  );

  const totalItems = useMemo(
    () =>
      items.reduce(
        (sum, item) =>
          sum + item.quantity,
        0,
      ),
    [items],
  );

  const wholesale = useMemo(
    () => hasWholesale(totalItems),
    [totalItems],
  );

  const total = useMemo(
    () =>
      items.reduce(
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
      ),
    [items, wholesale],
  );

  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-background
        p-6
        lg:p-8
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

      <div className="mt-8 space-y-7">
        {items.map((item) => {
          const unitPrice = getUnitPrice(
            item.price,
            item.wholesalePrice,
            wholesale,
          );

          const itemSubtotal =
            unitPrice * item.quantity;

          return (
            <div
              key={`${item.id}-${item.size}`}
              className="
                border-b
                border-border/70
                pb-6
                last:border-b-0
                last:pb-0
              "
            >
              <div>
                <p
                  className="
                    text-lg
                    font-semibold
                    tracking-tight
                    text-foreground
                  "
                >
                  {item.name}
                </p>

                <div
                  className="
                    mt-3
                    space-y-1
                    text-sm
                    leading-6
                    text-muted-foreground
                  "
                >
                  <p>
                    Ref.: {item.reference}
                  </p>

                  <p>
                    Tam. {item.size}
                  </p>

                  <p>
                    Quantidade: {item.quantity}
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-5
                  space-y-3
                  border-t
                  border-border/50
                  pt-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    text-sm
                  "
                >
                  <span className="text-muted-foreground">
                    Valor
                  </span>

                  <span
                    className="
                      font-medium
                      text-foreground
                    "
                  >
                    {unitPrice.toLocaleString(
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
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <span
                    className="
                      text-sm
                      font-medium
                      text-foreground
                    "
                  >
                    Subtotal
                  </span>

                  <span
                    className="
                      text-lg
                      font-semibold
                      tracking-tight
                      text-foreground
                    "
                  >
                    {itemSubtotal.toLocaleString(
                      "pt-BR",
                      {
                        style: "currency",
                        currency: "BRL",
                      },
                    )}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="
          mt-10
          space-y-5
          border-t
          border-border
          pt-6
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

        <div
          className="
            flex
            items-center
            justify-between
            gap-4
          "
        >
          <span
            className="
              text-lg
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
            {total.toLocaleString(
              "pt-BR",
              {
                style: "currency",
                currency: "BRL",
              },
            )}
          </span>
        </div>

        {wholesale ? (
          <div
            className="
              rounded-xl
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
              rounded-xl
              border
              border-border
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
                {WHOLESALE_MIN_ITEMS -
                  totalItems}
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

      <div className="mt-10">
        <PaymentMethod
          value={paymentMethod}
          onChange={
            onPaymentMethodChange
          }
        />
      </div>

      <div
        className="
          mt-10
          space-y-3
          border-t
          border-border
          pt-6
        "
      >
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
          className="h-11 w-full"
          onClick={onSubmit}
        >
          Enviar Pedido pelo WhatsApp
        </Button>
      </div>
    </div>
  );
}