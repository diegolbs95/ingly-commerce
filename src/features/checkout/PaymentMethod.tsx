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
      <h3
        className="
          text-lg
          font-semibold
          tracking-tight
          text-foreground
        "
      >
        Forma de pagamento
      </h3>

      <div className="space-y-3">
        <label
          className={`
            flex
            min-h-16
            cursor-pointer
            items-center
            gap-4
            rounded-xl
            border
            px-4
            transition-all
            duration-300
            ${
              value === "pix"
                ? "border-primary bg-secondary"
                : "border-border hover:border-primary/40 hover:bg-secondary/60"
            }
          `}
        >
          <input
            type="radio"
            name="payment"
            value="pix"
            checked={value === "pix"}
            onChange={() => onChange("pix")}
            className="
              h-4
              w-4
              accent-primary
            "
          />

          <span
            className="
              text-sm
              font-medium
              text-foreground
            "
          >
            PIX
          </span>
        </label>

        <label
          className={`
            flex
            min-h-16
            cursor-pointer
            items-center
            gap-4
            rounded-xl
            border
            px-4
            transition-all
            duration-300
            ${
              value === "credit"
                ? "border-primary bg-secondary"
                : "border-border hover:border-primary/40 hover:bg-secondary/60"
            }
          `}
        >
          <input
            type="radio"
            name="payment"
            value="credit"
            checked={value === "credit"}
            onChange={() =>
              onChange("credit")
            }
            className="
              h-4
              w-4
              accent-primary
            "
          />

          <span
            className="
              text-sm
              font-medium
              text-foreground
            "
          >
            Cartão de Crédito
          </span>
        </label>
      </div>

      <div
        className="
          rounded-xl
          bg-secondary
          px-4
          py-4
          text-sm
          leading-6
          text-muted-foreground
        "
      >
        O valor do frete será informado
        durante o atendimento pelo WhatsApp.
      </div>
    </div>
  );
}