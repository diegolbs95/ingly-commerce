import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  label: string;
  variant?: "default" | "secondary" | "outline" | "destructive";
}

export function StatusBadge({
  label,
  variant = "default",
}: Readonly<StatusBadgeProps>) {
  return (
    <Badge
      variant={variant}
      className="font-medium"
    >
      {label}
    </Badge>
  );
}