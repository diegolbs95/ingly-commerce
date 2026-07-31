import {
  BadgeCheck,
  DollarSign,
  Package,
  Sparkles,
  Star,
  XCircle,
} from "lucide-react";

import type { Product } from "@prisma/client";

import { StatCard } from "./StatCard";

interface AdminStatsProps {
  products: Product[];
}

export function AdminStats({
  products,
}: Readonly<AdminStatsProps>) {
  const totalProducts = products.length;

  const activeProducts = products.filter(
    (product) => product.active
  ).length;

  const inactiveProducts = products.filter(
    (product) => !product.active
  ).length;

  const featuredProducts = products.filter(
    (product) => product.featured
  ).length;

  const newProducts = products.filter(
    (product) => product.isNew
  ).length;

  const averagePrice =
    totalProducts === 0
      ? 0
      : products.reduce(
          (sum, product) => sum + product.price,
          0
        ) / totalProducts;

  const activePercentage =
    totalProducts === 0
      ? 0
      : (activeProducts / totalProducts) * 100;

  const featuredPercentage =
    totalProducts === 0
      ? 0
      : (featuredProducts / totalProducts) * 100;

  const newPercentage =
    totalProducts === 0
      ? 0
      : (newProducts / totalProducts) * 100;

  return (
    <>
      <div className="mb-6 rounded-2xl border bg-background p-6 shadow-sm">

        <div className="mb-3 flex items-center justify-between">

          <h3 className="font-semibold">
            Produtos Ativos
          </h3>

          <span className="text-sm text-muted-foreground">
            {activePercentage.toFixed(0)}%
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-muted">

          <div
            className="h-full rounded-full bg-green-600 transition-all duration-500"
            style={{
              width: `${activePercentage}%`,
            }}
          />

        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          {activeProducts} de {totalProducts} produtos estão disponíveis para venda.
        </p>

      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">

        <StatCard
          title="Produtos"
          value={totalProducts}
          description="Total cadastrado"
          icon={
            <Package className="h-6 w-6 text-blue-600" />
          }
          iconClassName="bg-blue-100"
        />

        <StatCard
          title="Ativos"
          value={activeProducts}
          description={`${activePercentage.toFixed(0)}% do catálogo`}
          icon={
            <BadgeCheck className="h-6 w-6 text-green-600" />
          }
          iconClassName="bg-green-100"
        />

        <StatCard
          title="Inativos"
          value={inactiveProducts}
          description="Ocultos no catálogo"
          icon={
            <XCircle className="h-6 w-6 text-red-600" />
          }
          iconClassName="bg-red-100"
        />

        <StatCard
          title="Destaques"
          value={featuredProducts}
          description={`${featuredPercentage.toFixed(0)}% do catálogo`}
          icon={
            <Star className="h-6 w-6 text-yellow-600" />
          }
          iconClassName="bg-yellow-100"
        />

        <StatCard
          title="Novos"
          value={newProducts}
          description={`${newPercentage.toFixed(0)}% do catálogo`}
          icon={
            <Sparkles className="h-6 w-6 text-violet-600" />
          }
          iconClassName="bg-violet-100"
        />

        <StatCard
          title="Preço Médio"
          value={Number(
            averagePrice.toFixed(2)
          )}
          description={averagePrice.toLocaleString(
            "pt-BR",
            {
              style: "currency",
              currency: "BRL",
            }
          )}
          icon={
            <DollarSign className="h-6 w-6 text-emerald-600" />
          }
          iconClassName="bg-emerald-100"
        />

      </div>
    </>
  );
}