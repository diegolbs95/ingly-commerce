import { notFound } from "next/navigation";

import { ProductPage } from "@/features/catalog/ProductPage";

import { getProductBySlug } from "@/services";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Product({
  params,
}: Readonly<ProductPageProps>) {
  const { slug } = await params;

  const product =
    await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <ProductPage
      product={product}
    />
  );
}