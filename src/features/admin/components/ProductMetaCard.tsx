import type { Product } from "@prisma/client";

import { Badge } from "@/components/ui/badge";

interface ProductMetaCardProps {
  product: Product;
}

export function ProductMetaCard({
  product,
}: Readonly<ProductMetaCardProps>) {
  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm">

      <h2 className="text-lg font-semibold">
        Informações
      </h2>

      <div className="mt-6 space-y-6">

        <div>
          <p className="text-sm text-muted-foreground">
            ID
          </p>

          <p className="mt-1 break-all font-mono text-sm">
            {product.id}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Categoria
          </p>

          <div className="mt-2">
            <Badge variant="secondary">
              {product.category}
            </Badge>
          </div>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Coleção
          </p>

          <div className="mt-2">
            <Badge variant="outline">
              {product.collection}
            </Badge>
          </div>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Criado em
          </p>

          <p className="mt-1">
            {product.createdAt.toLocaleDateString(
              "pt-BR"
            )}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Última atualização
          </p>

          <p className="mt-1">
            {product.updatedAt.toLocaleDateString(
              "pt-BR"
            )}
          </p>
        </div>

      </div>

    </div>
  );
}