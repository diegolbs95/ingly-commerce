import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({
  children,
  className,
  ...props
}: Readonly<SectionProps>) {
  return (
    <section
      className={cn("py-16 md:py-20 lg:py-24", className)}
      {...props}
    >
      {children}
    </section>
  );
}