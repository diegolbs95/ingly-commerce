import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export function Page({ children }: Readonly<PageProps>) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {children}
    </div>
  );
}