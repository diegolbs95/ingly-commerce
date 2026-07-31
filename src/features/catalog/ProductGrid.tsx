import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ProductCard } from "./ProductCard";

import type { Product } from "./types";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({
  products,
}: Readonly<ProductGridProps>) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-dashed py-20 text-center">
        <h3 className="text-xl font-semibold">
          Nenhum produto encontrado
        </h3>

        <p className="mt-3 max-w-md text-muted-foreground">
          Tente alterar sua pesquisa ou escolher outra categoria para visualizar mais produtos.
        </p>

        <Button
          asChild
          variant="outline"
          className="mt-8"
        >
          <Link href="/catalogo">
            Ver todos os produtos
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}