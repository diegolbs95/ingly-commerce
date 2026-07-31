"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ProductDialog } from "./ProductDialog";

import { LogoutButton } from "@/features/auth/LogoutButton";

export function AdminHeader() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Produtos
          </h1>

          <p className="mt-2 text-muted-foreground">
            Gerencie o catálogo da Ingly Jeans.
          </p>
        </div>

        <ProductDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Produto
          </Button>
        </ProductDialog>
        <LogoutButton />
      </div>
    </div>
  );
}