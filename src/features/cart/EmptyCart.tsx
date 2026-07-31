import Link from "next/link";

import { Button } from "@/components/ui/button";

export function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">

      <h2 className="text-3xl font-bold">
        Sua sacola está vazia
      </h2>

      <p className="mt-4 max-w-md text-muted-foreground">
        Explore nossa coleção e encontre a peça perfeita para você.
      </p>

      <Button
        asChild
        className="mt-8"
      >
        <Link href="/catalogo">
          Explorar coleção
        </Link>
      </Button>

    </div>
  );
}