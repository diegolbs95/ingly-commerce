import type { Product } from "@prisma/client";

import { Badge } from "@/components/ui/badge";

import { StatusBadge } from "./StatusBadge";

interface ProductInfoCardProps {
  product: Product;
}

export function ProductInfoCard({
  product,
}: Readonly<ProductInfoCardProps>) {
  return (
    <div className="rounded-2xl border bg-background p-8 shadow-sm">

      <h1 className="text-3xl font-bold">
        {product.name}
      </h1>

      <p className="mt-4 text-3xl font-semibold">
        {product.price.toLocaleString(
          "pt-BR",
          {
            style: "currency",
            currency: "BRL",
          }
        )}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        <Badge variant="secondary">
          {product.category}
        </Badge>

        <Badge variant="outline">
          {product.collection}
        </Badge>

        <StatusBadge
          label={
            product.active
              ? "Ativo"
              : "Inativo"
          }
          variant={
            product.active
              ? "default"
              : "secondary"
          }
        />

        {product.isNew && (
          <StatusBadge
            label="Novo"
            variant="outline"
          />
        )}

        {product.featured && (
          <StatusBadge
            label="Destaque"
          />
        )}

      </div>

      {product.composition && (

        <div className="mt-8">

          <h2 className="mb-3 text-lg font-semibold">
            Composição
          </h2>

          <p className="text-muted-foreground">
            {product.composition}
          </p>

        </div>

      )}

      <div className="mt-8">

        <h2 className="mb-3 text-lg font-semibold">
          Descrição
        </h2>

        <p className="leading-7 text-muted-foreground">
          {product.description}
        </p>

      </div>

    </div>
  );
}