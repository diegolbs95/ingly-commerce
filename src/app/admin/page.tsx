import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";

import { AdminHeader } from "@/features/admin/AdminHeader";

import { AdminStats } from "@/features/admin/components/AdminStats";

import { getProducts } from "@/services";

import { AdminProducts } from "@/features/admin/AdminProducts";

export default async function Admin() {
  const products = await getProducts();

  return (
    <Page>
      <Header />

      <main className="flex-1 bg-secondary py-12">
        <Container>

          <AdminHeader />

          <AdminStats
            products={products}
          />

          <AdminProducts
            products={products}
          />

        </Container>
      </main>
    </Page>
  );
}