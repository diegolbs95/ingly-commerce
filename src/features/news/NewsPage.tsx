import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";

import { SectionTitle } from "@/components/typography/SectionTitle";

import { ProductGrid } from "@/features/catalog/ProductGrid";

import type { Product } from "@/features/catalog/types";

interface NewsPageProps {
  products: Product[];
}

export function NewsPage({
  products,
}: Readonly<NewsPageProps>) {
  return (
    <Page>
      <Header />

      <main className="flex-1 py-16">

        <Container>

          <SectionTitle
            title="Novidades"
            subtitle="As últimas peças adicionadas à coleção Ingly Jeans."
          />

          <div className="mt-12">

            <ProductGrid
              products={products}
            />

          </div>

        </Container>

      </main>

    </Page>
  );
}