"use client";

interface PaymentMethodProps {
  value: "pix" | "credit";

  onChange: (
    value: "pix" | "credit",
  ) => void;
}

export function PaymentMethod({
  value,
  onChange,
}: Readonly<PaymentMethodProps>) {
  return (
    <div className="space-y-6">

      <h3 className="text-lg font-semibold">
        Forma de pagamento
      </h3>

      <label
        className={`
          flex
          cursor-pointer
          items-center
          gap-4
          rounded-xl
          border
          p-4
          transition-all
          ${
            value === "pix"
              ? "border-primary bg-secondary"
              : "hover:bg-secondary"
          }
        `}
      >
        <input
          type="radio"
          name="payment"
          value="pix"
          checked={value === "pix"}
          onChange={() => onChange("pix")}
          className="h-4 w-4"
        />

        <span className="font-medium">
          PIX
        </span>

      </label>

      <label
        className={`
          flex
          cursor-pointer
          items-center
          gap-4
          rounded-xl
          border
          p-4
          transition-all
          ${
            value === "credit"
              ? "border-primary bg-secondary"
              : "hover:bg-secondary"
          }
        `}
      >
        <input
          type="radio"
          name="payment"
          value="credit"
          checked={value === "credit"}
          onChange={() => onChange("credit")}
          className="h-4 w-4"
        />

        <span className="font-medium">
          Cartão de Crédito
        </span>

      </label>

      <div className="rounded-xl bg-secondary p-4 text-sm text-muted-foreground">

        O valor do frete será informado durante o atendimento pelo WhatsApp.

      </div>

    </div>
  );
}