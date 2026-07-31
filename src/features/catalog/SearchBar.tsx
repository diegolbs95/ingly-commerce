import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({
  value,
  onChange,
}: Readonly<SearchBarProps>) {
  return (
    <div className="relative max-w-md">
      <Search
        className="
          absolute
          left-4
          top-1/2
          h-5
          w-5
          -translate-y-1/2
          text-muted-foreground
        "
      />

      <Input
        type="search"
        placeholder="Pesquisar peças..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 pl-12"
      />
    </div>
  );
}