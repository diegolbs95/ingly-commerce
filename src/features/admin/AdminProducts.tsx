"use client";

import { useMemo, useState } from "react";

import type { Product } from "@prisma/client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import { ProductTable } from "./ProductTable";

interface AdminProductsProps {
    products: Product[];
}

export function AdminProducts({
    products,
}: Readonly<AdminProductsProps>) {
    const [search, setSearch] =
        useState("");

    const filteredProducts =
        useMemo(() => {
            const query = search
                .trim()
                .toLowerCase();

            if (!query) {
                return products;
            }

            return products.filter(
                (product) =>
                    product.name
                        .toLowerCase()
                        .includes(query) ||

                    (product.reference ?? "")
                        .toLowerCase()
                        .includes(query) ||

                    product.category
                        .toLowerCase()
                        .includes(query) ||

                    product.collection
                        .toLowerCase()
                        .includes(query),
            );
        }, [products, search]);

    return (
        <>

            <div className="mb-6">

                <div className="relative max-w-md">

                    <Search
                        className="
              absolute
              left-3
              top-1/2
              h-4
              w-4
              -translate-y-1/2
              text-muted-foreground
            "
                    />

                    <Input
                        value={search}
                        onChange={(event) =>
                            setSearch(
                                event.target.value
                            )
                        }
                        placeholder="Pesquisar por nome, referência ou categoria..."
                        className="pl-10"
                    />

                </div>

            </div>

            <ProductTable
                products={filteredProducts}
            />

        </>
    );
}