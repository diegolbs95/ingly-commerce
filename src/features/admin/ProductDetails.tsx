import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { notFound } from "next/navigation";

import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";

import { Button } from "@/components/ui/button";

import { getProduct } from "@/services";

import { ProductImageCard } from "./components/ProductImageCard";
import { ProductInfoCard } from "./components/ProductInfoCard";
import { ProductMetaCard } from "./components/ProductMetaCard";
import { ProductActionsCard } from "./components/ProductActionsCard";
import { AdminBreadcrumb } from "./components/AdminBreadcrumb";

interface ProductDetailsProps {
  id: string;
}

export async function ProductDetails({
  id,
}: Readonly<ProductDetailsProps>) {
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <Page>
      <Header />

      <main className="flex-1 bg-secondary py-12">

        <Container>

          <AdminBreadcrumb
            current={product.name}
          />

          <div className="mb-8 flex items-center justify-between">

            <div>

              <h1 className="text-3xl font-bold">
                Detalhes do Produto
              </h1>

              <p className="mt-2 text-muted-foreground">
                Visualize todas as informações do produto.
              </p>

            </div>

            <Button
              asChild
              variant="outline"
            >
              <Link href="/admin">

                <ArrowLeft className="mr-2 h-4 w-4" />

                Voltar

              </Link>

            </Button>

          </div>

          <div className="grid gap-8 lg:grid-cols-12">

            <div className="lg:col-span-4">
              <ProductImageCard
                image={product.image}
                name={product.name}
              />
            </div>

            <div className="space-y-8 lg:col-span-5">
              <ProductInfoCard
                product={product}
              />
            </div>

            <div className="space-y-8 lg:col-span-3">

              <ProductMetaCard
                product={product}
              />

              <ProductActionsCard
                productId={product.id}
              />

            </div>

          </div>

        </Container>

      </main>
    </Page>
  );
}