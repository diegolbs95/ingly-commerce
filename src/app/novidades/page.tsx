import { getNewProducts } from "@/services";

import { NewsPage } from "@/features/news/NewsPage";

export default async function NovidadesPage() {
  const products =
    await getNewProducts();

  return (
    <NewsPage
      products={products}
    />
  );
}