"use client";

import { useState } from "react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

import { useCart } from "@/lib/cart";

import { buildWhatsAppMessage } from "./whatsapp";

export function CheckoutDialog() {
  const items = useCart((state) => state.items);

  const [payment, setPayment] = useState("PIX");

  function finishOrder() {
    const number =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

    const message = buildWhatsAppMessage(
      items,
      payment,
    );

    window.open(
      `https://wa.me/${number}?text=${message}`,
      "_blank",
    );
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size="lg"
          className="
            w-full
            rounded-xl
          "
        >
          Finalizar Pedido
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent
        className="
          rounded-2xl
          border-border
          bg-background
          p-6
          shadow-lg
          sm:max-w-md
        "
      >
        <AlertDialogHeader>
          <AlertDialogTitle
            className="
              text-xl
              font-semibold
              text-foreground
            "
          >
            Forma de pagamento
          </AlertDialogTitle>
        </AlertDialogHeader>

        <RadioGroup
          value={payment}
          onValueChange={setPayment}
          className="mt-2 gap-3"
        >
          <div
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-border
              bg-background
              px-4
              py-3
              transition-colors
              hover:bg-secondary
            "
          >
            <RadioGroupItem
              value="PIX"
              id="pix"
              className="border-primary text-primary"
            />

            <Label
              htmlFor="pix"
              className="
                flex-1
                cursor-pointer
                text-sm
                font-medium
                text-foreground
              "
            >
              PIX
            </Label>
          </div>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-border
              bg-background
              px-4
              py-3
              transition-colors
              hover:bg-secondary
            "
          >
            <RadioGroupItem
              value="Cartão"
              id="cartao"
              className="border-primary text-primary"
            />

            <Label
              htmlFor="cartao"
              className="
                flex-1
                cursor-pointer
                text-sm
                font-medium
                text-foreground
              "
            >
              Cartão
            </Label>
          </div>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-border
              bg-background
              px-4
              py-3
              transition-colors
              hover:bg-secondary
            "
          >
            <RadioGroupItem
              value="Dinheiro"
              id="dinheiro"
              className="border-primary text-primary"
            />

            <Label
              htmlFor="dinheiro"
              className="
                flex-1
                cursor-pointer
                text-sm
                font-medium
                text-foreground
              "
            >
              Dinheiro
            </Label>
          </div>
        </RadioGroup>

        <AlertDialogFooter className="mt-4">
          <Button
            onClick={finishOrder}
            className="
              w-full
              rounded-xl
            "
          >
            Enviar para WhatsApp
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}