import { Footer } from "./Footer";

interface PageProps {
  children: React.ReactNode;
}

export function Page({
  children,
}: Readonly<PageProps>) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">

      {children}

      <Footer />

    </div>
  );
}