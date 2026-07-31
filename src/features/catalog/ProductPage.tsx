"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";

import { useCart } from "@/lib/cart";

import type { Product } from "./types";
import { toast } from "sonner";
import { ProductGallery } from "./ProductGallery";

interface ProductPageProps {
  product: Product;
}

const sizes = [
  "36",
  "38",
  "40",
  "42",
  "44"
];

export function ProductPage({
  product,
}: Readonly<ProductPageProps>) {
  const [
    selectedSize,
    setSelectedSize,
  ] = useState<string>();

  const [
    quantity,
    setQuantity,
  ] = useState(1);

  const addItem =
    useCart((state) => state.addItem);

  function handleAddToCart() {
    if (!selectedSize) {
      toast.warning(
        "Selecione um tamanho antes de continuar.",
      );
      return;
    }

    addItem(
      product,
      selectedSize,
      quantity,
    );

    toast.success(
      "Produto adicionado à sacola!",
      {
        description: `${product.name} • Tam. ${selectedSize} • Quantidade: ${quantity}`,
      },
    );
  }

  return (
    <Page>
      <Header />

      <main className="py-16">

        <Container>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ProductGallery
              name={product.name}
              images={[
                product.image,
                product.image2,
                product.image3,
                product.image4,
                product.image5,
              ]}
            />

            <div>

              <h1 className="text-4xl font-bold">
                {product.name}
              </h1>

              <p className="mt-2 text-sm text-muted-foreground">
                Ref.: {product.reference}
              </p>

              <div
                className="
                  mt-6
                  flex
                  items-end
                  justify-between
                  gap-6
                  border-t
                  border-border/30
                  pt-5
                "
              >

                <p
                  className="
                    text-4xl
                    font-bold
                    tracking-tight
                  "
                >
                  {product.price.toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    },
                  )}
                </p>

                {product.wholesalePrice && (

                  <p
                    className="
                      text-2xl
                      font-semibold
                      text-wholesale
                    "
                  >
                    At.{" "}

                    {product.wholesalePrice.toLocaleString(
                      "pt-BR",
                      {
                        style: "currency",
                        currency: "BRL",
                      },
                    )}

                  </p>

                )}

              </div>

              {product.wholesalePrice && (

                <div
                  className="
                    mt-4
                    border-t
                    border-border/30
                    pt-4
                  "
                >
                </div>

              )}

              <p className="mt-8 leading-8 text-muted-foreground">
                {product.description}
              </p>

              <div className="mt-10">

                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                  Escolha o tamanho
                </h3>

                <div className="flex gap-3">

                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      onClick={() => setSelectedSize(size)}
                      className={`
                        h-12
                        min-w-12
                        transition-all
                        duration-200
                        ${selectedSize === size
                          ? "border-black bg-black text-white hover:bg-black hover:text-white"
                          : "border-gray-300 bg-white text-black hover:border-black hover:bg-white"
                        }
                      `}
                    >
                      {size}
                    </Button>
                  ))}

                </div>

              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                  Quantidade
                </h3>

                <div className="flex items-center gap-4">

                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-12 w-12"
                    disabled={quantity === 1}
                    onClick={() =>
                      setQuantity((value) =>
                        Math.max(1, value - 1),
                      )
                    }
                  >
                    −
                  </Button>

                  <span className="w-12 text-center text-xl font-bold">
                    {quantity}
                  </span>

                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-12 w-12"
                    onClick={() =>
                      setQuantity((value) => value + 1)
                    }
                  >
                    +
                  </Button>

                </div>
              </div>

              <Button
                size="lg"
                className="mt-10 h-12 w-full"
                disabled={!selectedSize}
                onClick={
                  handleAddToCart
                }
              >
                Adicionar à Sacola
              </Button>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Escolha o tamanho e a quantidade antes de adicionar à sacola.
              </p>

            </div>

          </div>

        </Container>

      </main>

    </Page>
  );
}