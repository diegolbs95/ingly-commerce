"use client";

import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { Button } from "@/components/ui/button";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import { useEffect } from "react";


import { useCart } from "@/lib/cart";

export function CartPage() {
    const items = useCart((state) => state.items);


    useEffect(() => {
        console.log("CartPage hidratado:", items);
    }, [items]);

    if (items.length === 0) {
        return (
            <Page>
                <Header />

                <main className="flex-1 py-12 lg:py-16">
                    <Container>
                        <SectionTitle
                            title="Sacola"
                            subtitle="Sua sacola está vazia."
                        />

                        <div className="mt-10 flex flex-col items-center gap-5 rounded-2xl border border-dashed py-14 lg:mt-12 lg:gap-6 lg:py-20">

                            <p className="max-w-sm text-center text-muted-foreground">
                                Escolha seus produtos favoritos e monte sua sacola para finalizar o pedido pelo WhatsApp.
                            </p>

                            <Button asChild>
                                <Link href="/catalogo">
                                    Continuar Comprando
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

            <main className="flex-1 py-16">
                <Container>

                    <SectionTitle
                        title="Sacola"
                        subtitle="Confira seus produtos antes de finalizar o pedido."
                    />

                    <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_380px] lg:gap-10">

                        <CartList items={items} />

                        <CartSummary items={items} />

                    </div>

                </Container>
            </main>
        </Page>
    );
}