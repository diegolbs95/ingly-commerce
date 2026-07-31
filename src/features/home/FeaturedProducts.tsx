import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/typography/SectionTitle";

import { Button } from "@/components/ui/button";

import { ProductCard } from "@/features/catalog/ProductCard";

import { getFeaturedProducts } from "@/services";

export async function FeaturedProducts() {
  const products = (
    await getFeaturedProducts()
  ).slice(0, 4);

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-20">
      <Container>

        <SectionTitle
          title="Destaques da Coleção"
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        <div className="mt-12 flex justify-center">

          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <Link href="/catalogo">
              Ver catálogo completo
            </Link>
          </Button>

        </div>

      </Container>
    </section>
  );
}