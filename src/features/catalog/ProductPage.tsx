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

const numericSizes = [
  "36",
  "38",
  "40",
  "42",
  "44",
];

const topSizes = [
  "PP",
  "P",
  "M",
  "G",
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

  const sizes =
    product.category === "Partes de Cima"
      ? topSizes
      : numericSizes;

  const isSizeUnavailable = (size: string) =>
    product.unavailableSizes.includes(size);

  const addItem =
    useCart((state) => state.addItem);

  function handleAddToCart() {
    if (!selectedSize) {
      toast.warning(
        "Selecione um tamanho antes de continuar.",
      );
      return;
    }

    if (isSizeUnavailable(selectedSize)) {
      toast.warning(
        "Esse tamanho está indisponível.",
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

      <main className="py-12 lg:py-16">

        <Container>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
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

              <h1
                className="
                  text-2xl
                  font-bold
                  leading-tight
                  lg:text-4xl
                "
              >
                {product.name}
              </h1>

              <p className="mt-2 text-sm text-muted-foreground">
                Ref.: {product.reference}
              </p>

              {product.composition && (

                <p className="mt-2 text-sm text-muted-foreground">
                  Composição: {product.composition}
                </p>

              )}

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
                    text-2xl
                    lg:text-4xl
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
                      text-xl
                      lg:text-2xl
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

              <p className="
                  mt-6
                  text-sm
                  leading-7
                  text-muted-foreground
                  lg:mt-8
                  lg:text-base
                  lg:leading-8
                "
              >
                {product.description}
              </p>

              <div className="mt-8 lg:mt-10">

                <h3 className="mb-4 text-xs lg:text-sm font-semibold uppercase tracking-wider">
                  Escolha o tamanho
                </h3>

                <div className="flex gap-2 lg:gap-3">

                  {sizes.map((size) => {
                    const unavailable = isSizeUnavailable(size);

                    return (
                      <Button
                        key={size}
                        variant="outline"
                        disabled={unavailable}
                        onClick={() => setSelectedSize(size)}
                        className={`
                              h-11
                              min-w-11
                              text-sm
                              lg:h-12
                              lg:min-w-12
                              transition-all
                              duration-200
                              ${unavailable
                            ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400 opacity-70"
                            : selectedSize === size
                              ? "border-black bg-black text-white hover:bg-black hover:text-white"
                              : "border-gray-300 bg-white text-black hover:border-black hover:bg-white"
                          }
                       `}
                        >
                        {size}
                      </Button>
                    );
                  })}

                </div>

              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                  Quantidade
                </h3>

                <div className="flex items-center gap-3">

                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-11 w-11 lg:h-12 lg:w-12"
                    disabled={quantity === 1}
                    onClick={() =>
                      setQuantity((value) =>
                        Math.max(1, value - 1),
                      )
                    }
                  >
                    −
                  </Button>

                  <span className="w-12 text-center text-lg lg:text-xl font-bold">
                    {quantity}
                  </span>

                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="
                      h-11
                      w-11
                      lg:h-12
                      lg:w-12
                    "
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
                className="
                  mt-8
                  h-11
                  w-full
                  lg:mt-10
                  lg:h-12
                "
                disabled={!selectedSize}
                onClick={
                  handleAddToCart
                }
              >
                Adicionar à Sacola
              </Button>
              <p className="
                  mt-3
                  text-center
                  text-xs
                  text-muted-foreground
                  lg:mt-4
                  lg:text-sm
                "
              >
                Escolha o tamanho e a quantidade antes de adicionar à sacola.
              </p>

            </div>

          </div>

        </Container>

      </main>

    </Page>
  );
}