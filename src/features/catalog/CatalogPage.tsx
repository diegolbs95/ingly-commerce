"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import type { Product } from "@/features/catalog/types";

import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { SectionTitle } from "@/components/typography/SectionTitle";

import { CategoryFilter } from "./CategoryFilter";
import { ProductGrid } from "./ProductGrid";
import { SearchBar } from "./SearchBar";

const categories = [
  "Todos",
  "Calças",
  "Shorts",
  "Jaquetas",
  "Camisas",
];

interface CatalogPageProps {
  products: Product[];
  categoria?: string;
}

export function CatalogPage({
  products,
  categoria,
}: Readonly<CatalogPageProps>) {

  const router = useRouter();

  const selectedCategory = useMemo(() => {
    switch (categoria) {
      case "calcas":
        return "Calças";

      case "shorts":
        return "Shorts";

      case "jaquetas":
        return "Jaquetas";

      case "camisas":
        return "Camisas";

      default:
        return "Todos";
    }
  }, [categoria]);

  function handleCategoryChange(
    category: string,
  ) {
    if (category === "Todos") {
      router.push("/catalogo");

      return;
    }

    const slug = category
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    router.push(
      `/catalogo?categoria=${slug}`,
    );
  }

  const [search, setSearch] =
    useState("");

  const normalizedSearch =
    search.toLowerCase().trim();

  const filteredProducts =
    products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Todos" ||
        product.category ===
        selectedCategory;

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(
            normalizedSearch
          ) ||
        product.description
          .toLowerCase()
          .includes(
            normalizedSearch
          );

      return (
        matchesCategory &&
        matchesSearch
      );
    });

  return (
    <Page>
      <Header />

      <main className="flex-1 py-16">

        <Container>

          <SectionTitle
            title="Catálogo"
            subtitle="Conheça todas as peças disponíveis da Ingly Jeans."
          />

          <div className="mt-10">

            <SearchBar
              value={search}
              onChange={setSearch}
            />

          </div>

          <div className="mt-8">

            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={handleCategoryChange}
            />

          </div>

          <div className="mt-12">

            <ProductGrid
              products={
                filteredProducts
              }
            />

          </div>

        </Container>

      </main>

    </Page>
  );
}