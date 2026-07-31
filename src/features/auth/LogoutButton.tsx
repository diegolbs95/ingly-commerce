"use client";

import { LogOut } from "lucide-react";

import { logoutAction } from "@/actions";

import { Button } from "@/components/ui/button";

export function LogoutButton() {
  return (
    <form action={logoutAction}>

      <Button
        type="submit"
        variant="outline"
      >
        <LogOut className="mr-2 h-4 w-4" />

        Sair

      </Button>

    </form>
  );
}