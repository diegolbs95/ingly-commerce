import { notFound } from "next/navigation";

import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";

import { Button } from "@/components/ui/button";

import { getProduct } from "@/services";

import { AdminBreadcrumb } from "./components/AdminBreadcrumb";
import { EditProductForm } from "./EditProductForm";

interface EditProductPageProps {
  id: string;
}

export async function EditProductPage({
  id,
}: Readonly<EditProductPageProps>) {
  const product =
    await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <Page>

      <Header />

      <main className="flex-1 bg-secondary py-12">

        <Container>

          <AdminBreadcrumb
            current={`Editar • ${product.name}`}
          />

          <div className="mb-8 flex items-center justify-between">

            <div>

              <h1 className="text-3xl font-bold">
                Editar Produto
              </h1>

              <p className="mt-2 text-muted-foreground">
                Atualize as informações do produto.
              </p>

            </div>

            <Button
              asChild
              variant="outline"
            >
              <Link href="/admin">
                <ArrowLeft className="mr-2 h-4 w-4" />

                Cancelar
              </Link>
            </Button>

          </div>

          <div className="rounded-2xl border bg-background p-8 shadow-sm">

            <EditProductForm
              product={product}
            />

          </div>

        </Container>

      </main>

    </Page>
  );
}