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
    paymentMethod:
    | "pix"
    | "credit";

    onPaymentMethodChange: (
        value:
            | "pix"
            | "credit",
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
        () =>
            hasWholesale(totalItems),
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
                        unitPrice *
                        item.quantity
                    );
                },
                0,
            ),
        [items, wholesale],
    );

    return (
        <div className="rounded-2xl border bg-background p-6 lg:p-8">

            <h2 className="text-xl font-semibold">
                Resumo do Pedido
            </h2>

            <div className="mt-8 space-y-6">

                {items.map((item) => (
                    <div
                        key={`${item.id}-${item.size}`}
                        className="border-b pb-5"
                    >

                        <p className="font-semibold">
                            {item.name}
                        </p>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Ref.: {item.reference}
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Tam. {item.size}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Quantidade: {item.quantity}
                        </p>

                        <div className="mt-2 flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                                Valor
                            </span>

                            <span className="font-medium">
                                {getUnitPrice(
                                    item.price,
                                    item.wholesalePrice,
                                    wholesale,
                                ).toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </span>
                        </div>

                        <div className="mt-3 flex items-center justify-between border-t pt-3">

                            <span className="font-medium">
                                Subtotal
                            </span>

                            <span className="text-lg font-bold">
                                {(item.price * item.quantity).toLocaleString(
                                    "pt-BR",
                                    {
                                        style: "currency",
                                        currency: "BRL",
                                    },
                                )}
                            </span>

                        </div>

                    </div>
                ))}

            </div>

            <div className="mt-10 space-y-4 border-t pt-6">

                <div className="flex items-center justify-between">
                    <span>Itens</span>

                    <span>
                        {totalItems}
                    </span>
                </div>

                <div className="flex items-center justify-between text-xl font-bold">

                    <span>Total</span>

                    <span>
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

            <div className="mt-10">

                <PaymentMethod
                    value={paymentMethod}
                    onChange={
                        onPaymentMethodChange
                    }
                />

            </div>

            <div className="mt-10 space-y-4 border-t pt-6">

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