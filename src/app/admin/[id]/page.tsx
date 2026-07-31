import { ProductDetails } from "@/features/admin/ProductDetails";

interface ProductDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailsPage({
  params,
}: Readonly<ProductDetailsPageProps>) {
  const { id } = await params;

  return (
    <ProductDetails
      id={id}
    />
  );
}