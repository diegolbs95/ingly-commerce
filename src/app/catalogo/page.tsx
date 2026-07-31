import { CatalogPage } from "@/features/catalog/CatalogPage";

import { getActiveProducts } from "@/services";

interface CatalogProps {
  searchParams: Promise<{
    categoria?: string;
  }>;
}

export default async function Catalog({
  searchParams,
}: Readonly<CatalogProps>) {
  const params = await searchParams;

  const products =
    await getActiveProducts();

  return (
    <CatalogPage
      products={products}
      categoria={params.categoria}
    />
  );
}