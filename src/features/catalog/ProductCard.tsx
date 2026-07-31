import Image from "next/image";
import Link from "next/link";

import type { Product } from "./types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({
  product,
}: Readonly<ProductCardProps>) {
  return (
    <Link
      href={`/catalogo/${product.slug}`}
      className="
        group
        block
        cursor-pointer
        rounded-2xl
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
      "
    >
      <article
        className="
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-border/40
          bg-background
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-border
          hover:border-black/10
        "
      >
        <div
          className="
            relative
            aspect-[3/4]
            overflow-hidden
            bg-secondary
          "
        >

          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="
              object-cover
              object-center
              transition-transform
              duration-500
              ease-out
              group-hover:scale-[1.03]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-black/0
              transition-colors
              duration-500
              ease-out
              group-hover:bg-black/5
            "
          />
        </div>

        <div
          className="
            flex
            flex-1
            flex-col
            p-6
          "
        >
          <h3
            className="
              mb-3
              text-[1.15rem]
              font-semibold
              leading-tight
              tracking-tight
              transition-colors
              duration-300
              group-hover:text-primary
            "
          >
            {product.name}
          </h3>

          <p
            className="
              flex-1
              line-clamp-3
              text-sm
              leading-6
              text-muted-foreground
            "
          >
            {product.description}
          </p>

          {/* Preços */}

          <div
            className="
    mt-5
    border-t
    border-border/30
    pt-4
  "
          >

            <div className="flex items-center justify-between gap-4">

              <span
                className="
        text-xl
        font-semibold
        tracking-tight
        text-foreground
      "
              >
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>

              {product.wholesalePrice && (

                <span
                  className="
                    text-lg
                    font-medium
                    text-wholesale
                  "
                >
                  <span className="font-bold">
                    At.
                  </span>

                  {" "}

                  <span className="font-semibold">
                    {product.wholesalePrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </span>

              )}

            </div>

            {product.wholesalePrice && (
              <>
                <div
                  className="
                    mt-4
                    border-t
                    border-border/30
                  "
                />
              </>
            )}

          </div>
        </div>
      </article>
    </Link>
  );
}