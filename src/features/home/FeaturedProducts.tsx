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
    <section
      className="
        py-12
        lg:py-20
      "
    >
      <Container>

        <SectionTitle
          title="Destaques da Coleção"
        />

        <div
          className="
            mt-12
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-2
            sm:gap-6
            lg:grid-cols-4
            lg:gap-8
          "
        >

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        <div
          className="
            mt-8
            flex
            justify-center
            lg:mt-12
          "
        >

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
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