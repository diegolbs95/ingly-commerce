import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  className,
}: Readonly<SectionTitleProps>) {
  return (
    <div className={cn("mb-10 space-y-2", className)}>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}