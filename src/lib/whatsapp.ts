import type { CartItem } from "@/lib/cart";
import { getTotalItems, hasWholesale, getUnitPrice } from "@/lib/pricing";

export type PaymentMethod = "pix" | "credit";

function formatPaymentMethod(paymentMethod: PaymentMethod) {
  switch (paymentMethod) {
    case "pix":
      return "PIX";

    case "credit":
      return "Cartão de Crédito";
  }
}

export function generateWhatsAppMessage(
  items: CartItem[],
  paymentMethod: PaymentMethod,
) {
  const totalItems = getTotalItems(items);

  const wholesale = hasWholesale(totalItems);

  const total = items.reduce((sum, item) => {
    const unitPrice = getUnitPrice(item.price, item.wholesalePrice, wholesale);

    return sum + unitPrice * item.quantity;
  }, 0);

  const lines: string[] = [];

  lines.push("🛍️ *Novo Pedido - Ingly Jeans*");
  lines.push("");

  items.forEach((item) => {
    lines.push(`📦 ${item.name}`);

    lines.push(`Ref.: ${item.reference}`);

    lines.push(`Tamanho: ${item.size}`);

    lines.push(`Quantidade: ${item.quantity}`);

    lines.push(
      `Valor: ${getUnitPrice(
        item.price,
        item.wholesalePrice,
        wholesale,
      ).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}`,
    );

    lines.push(
      `Subtotal: ${(
        getUnitPrice(item.price, item.wholesalePrice, wholesale) * item.quantity
      ).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}`,
    );

    lines.push("");
  });

  lines.push("━━━━━━━━━━━━━━━━━━");
  lines.push("");

  lines.push(`💳 Forma de pagamento: ${formatPaymentMethod(paymentMethod)}`);

  lines.push("");

  lines.push(`💲 Preço aplicado: ${wholesale ? "ATACADO" : "VAREJO"}`);

  lines.push("");

  lines.push(
    `💰 Total: ${total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}`,
  );

  lines.push("");

  lines.push("Frete a combinar durante o atendimento.");

  return lines.join("\n");
}

export function openWhatsApp(message: string) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  if (!phone) {
    throw new Error("NEXT_PUBLIC_WHATSAPP_NUMBER não configurado.");
  }

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}
