import Link from "next/link";

import { ChevronRight, Home } from "lucide-react";

interface AdminBreadcrumbProps {
  current: string;
}

export function AdminBreadcrumb({
  current,
}: Readonly<AdminBreadcrumbProps>) {
  return (
    <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">

      <Link
        href="/admin"
        className="flex items-center gap-1 transition-colors hover:text-foreground"
      >
        <Home className="h-4 w-4" />
        Admin
      </Link>

      <ChevronRight className="h-4 w-4" />

      <span className="font-medium text-foreground">
        {current}
      </span>

    </nav>
  );
}