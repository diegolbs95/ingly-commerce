import { EditProductPage } from "@/features/admin/EditProductPage";

interface EditProductRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProduct({
  params,
}: Readonly<EditProductRouteProps>) {
  const { id } = await params;

  return (
    <EditProductPage
      id={id}
    />
  );
}