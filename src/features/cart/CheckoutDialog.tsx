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
      payment
    );

    window.open(
      `https://wa.me/${number}?text=${message}`,
      "_blank"
    );
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>

        <Button
          size="lg"
          className="w-full"
        >
          Finalizar Pedido
        </Button>

      </AlertDialogTrigger>

      <AlertDialogContent>

        <AlertDialogHeader>

          <AlertDialogTitle>
            Forma de pagamento
          </AlertDialogTitle>

        </AlertDialogHeader>

        <RadioGroup
          value={payment}
          onValueChange={setPayment}
        >

          <div className="flex items-center gap-3">

            <RadioGroupItem value="PIX" id="pix" />

            <Label htmlFor="pix">PIX</Label>

          </div>

          <div className="flex items-center gap-3">

            <RadioGroupItem value="Cartão" id="cartao" />

            <Label htmlFor="cartao">
              Cartão
            </Label>

          </div>

          <div className="flex items-center gap-3">

            <RadioGroupItem value="Dinheiro" id="dinheiro" />

            <Label htmlFor="dinheiro">
              Dinheiro
            </Label>

          </div>

        </RadioGroup>

        <AlertDialogFooter>

          <Button onClick={finishOrder}>
            Enviar para WhatsApp
          </Button>

        </AlertDialogFooter>

      </AlertDialogContent>
    </AlertDialog>
  );
}