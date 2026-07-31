import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: number;
  description: string;
  icon: ReactNode;
  iconClassName?: string;
}

export function StatCard({
  title,
  value,
  description,
  icon,
  iconClassName,
}: Readonly<StatCardProps>) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-background
        p-6
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            {description}
          </p>

        </div>

        <div
          className={`
            rounded-xl
            p-3
            ${iconClassName}
          `}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}