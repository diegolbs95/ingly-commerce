import type { CartItem } from "@/lib/cart";

export function buildWhatsAppMessage(
  items: CartItem[],
  paymentMethod: string
) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const lines = [
    "🛍️ *Pedido Ingly Jeans*",
    "",
  ];

  items.forEach((item) => {
    lines.push(`• ${item.name}`);
    lines.push(`Tamanho: ${item.size}`);
    lines.push(`Quantidade: ${item.quantity}`);
    lines.push(
      `Subtotal: R$ ${(item.price * item.quantity).toFixed(2)}`
    );
    lines.push("");
  });

  lines.push(`💳 Pagamento: ${paymentMethod}`);
  lines.push("");
  lines.push(`💰 Total: R$ ${total.toFixed(2)}`);

  return encodeURIComponent(lines.join("\n"));
}