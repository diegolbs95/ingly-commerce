"use client";

import type { Product } from "@prisma/client";

import { ProductRow } from "./ProductRow";

interface ProductTableProps {
  products: Product[];
}

export function ProductTable({
  products,
}: Readonly<ProductTableProps>) {
  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-background shadow-sm">

      <div className="max-h-[650px] overflow-y-auto">

        <div className="sticky top-0 z-10 grid grid-cols-5 border-b border-border bg-muted px-6 py-4 text-sm font-semibold">

          <span>Produto</span>

          <span>Categoria</span>

          <span>Preço</span>

          <span>Status</span>

          <span className="text-right">
            Ações
          </span>

        </div>

        {products.length === 0 ? (
          <div className="px-6 py-20 text-center text-muted-foreground">
            Nenhum produto encontrado.
          </div>
        ) : (
          products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
            />
          ))
        )}

      </div>

    </div>
  );
}