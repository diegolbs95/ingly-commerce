import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
}: Readonly<SectionTitleProps>) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        centered && "text-center",
        className,
      )}
    >
      <h2 className="font-editorial text-3xl font-semibold uppercase tracking-[0.12em] lg:text-4xl">
        {title}
      </h2>

      <div
        className={cn(
          "mt-4 h-[2px] w-16 bg-primary",
          centered ? "mx-auto" : "",
        )}
      />

      {subtitle && (
        <p
          className={cn(
            "mt-6 text-base leading-7 text-muted-foreground",
            centered && "mx-auto max-w-2xl",
            !centered && "max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}