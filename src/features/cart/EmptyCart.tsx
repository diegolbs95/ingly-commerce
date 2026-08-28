import Link from "next/link";

import { Button } from "@/components/ui/button";

export function EmptyCart() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        px-6
        py-24
        text-center
        lg:py-32
      "
    >
      <h2
        className="
          text-2xl
          font-semibold
          tracking-tight
          text-foreground
          lg:text-3xl
        "
      >
        Sua sacola está vazia
      </h2>

      <p
        className="
          mt-4
          max-w-md
          text-base
          leading-7
          text-muted-foreground
        "
      >
        Explore nossa coleção e encontre a peça perfeita para você.
      </p>

      <Button
        asChild
        className="
          mt-8
          h-11
          px-7
          bg-primary
          text-primary-foreground
          transition-colors
          duration-200
          hover:bg-primary/90
        "
      >
        <Link href="/catalogo">
          Explorar coleção
        </Link>
      </Button>
    </div>
  );
}