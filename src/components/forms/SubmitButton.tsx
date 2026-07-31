import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  loading?: boolean;
  children: React.ReactNode;
}

export function SubmitButton({
  loading,
  children,
}: Readonly<SubmitButtonProps>) {
  return (
    <Button
      type="submit"
      disabled={loading}
      className="w-full"
    >
      {loading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}

      {children}
    </Button>
  );
}