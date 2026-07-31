"use client";

import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { SectionTitle } from "@/components/typography/SectionTitle";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { useCart } from "@/lib/cart";

import { CheckoutSummary } from "./CheckoutSummary";
import {
    generateWhatsAppMessage,
    openWhatsApp,
} from "@/lib/whatsapp";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { useState } from "react";

export function CheckoutPage() {
    const items = useCart((state) => state.items);

    const [
        paymentMethod,
        setPaymentMethod,
    ] = useState<"pix" | "credit">(
        "pix",
    );

    const [
        confirmOpen,
        setConfirmOpen,
    ] = useState(false);


    function handleSubmit() {
        setConfirmOpen(true);
    }

    const clear = useCart(
        (state) => state.clear,
    );

    function handleConfirm() {
        const message =
            generateWhatsAppMessage(
                items,
                paymentMethod,
            );

        openWhatsApp(message);

        clear();

        setConfirmOpen(false);
    }

    if (items.length === 0) {
        return (
            <Page>
                <Header />

                <main className="flex-1 py-12 lg:py-16">
                    <Container>

                        <SectionTitle
                            title="Checkout"
                            subtitle="Sua sacola está vazia."
                        />

                        <div className="mt-12 flex flex-col items-center rounded-2xl border border-dashed py-20 text-center">

                            <h3 className="text-xl font-semibold">
                                Nenhum produto para finalizar
                            </h3>

                            <p className="mt-3 max-w-md text-muted-foreground">
                                Adicione produtos à sua sacola antes de enviar o pedido pelo WhatsApp.
                            </p>

                            <Button
                                asChild
                                variant="outline"
                                className="mt-8"
                            >
                                <Link href="/catalogo">
                                    Ir para o Catálogo
                                </Link>
                            </Button>

                        </div>

                    </Container>
                </main>
            </Page>
        );
    }

    return (
        <Page>
            <Header />

            <main className="flex-1 py-12 lg:py-16">
                <Container>

                    <SectionTitle
                        title="Finalizar Pedido"
                        subtitle="Confira os produtos antes de enviar seu pedido pelo WhatsApp."
                    />

                    <div className="mt-10 flex justify-center">

                        <div className="w-full max-w-2xl">

                            <CheckoutSummary
                                paymentMethod={paymentMethod}
                                onPaymentMethodChange={
                                    setPaymentMethod
                                }
                                onSubmit={handleSubmit}
                            />

                        </div>

                    </div>

                </Container>
            </main>
            <AlertDialog
                open={confirmOpen}
                onOpenChange={setConfirmOpen}
            >
                <AlertDialogContent>

                    <AlertDialogHeader>

                        <AlertDialogTitle>
                            Enviar pedido?
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                            Você será direcionado para o WhatsApp
                            da Ingly Jeans para concluir o pedido.
                        </AlertDialogDescription>

                    </AlertDialogHeader>

                    <AlertDialogFooter>

                        <AlertDialogCancel>
                            Cancelar
                        </AlertDialogCancel>

                        <AlertDialogAction
                            onClick={handleConfirm}
                        >
                            Enviar
                        </AlertDialogAction>

                    </AlertDialogFooter>

                </AlertDialogContent>
            </AlertDialog>
        </Page>
    );
}