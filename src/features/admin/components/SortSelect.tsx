"use client";

import {
  ArrowDownAZ,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortSelectProps {
  value: string;
  onValueChange: (
    value: string
  ) => void;
}

export function SortSelect({
  value,
  onValueChange,
}: Readonly<SortSelectProps>) {
  return (
    <div className="w-64">

      <Select
        value={value}
        onValueChange={onValueChange}
      >
        <SelectTrigger>

          <div className="flex items-center gap-2">

            <ArrowDownAZ className="h-4 w-4" />

            <SelectValue />

          </div>

        </SelectTrigger>

        <SelectContent>

          <SelectItem value="created-desc">
            Mais recentes
          </SelectItem>

          <SelectItem value="created-asc">
            Mais antigos
          </SelectItem>

          <SelectItem value="name-asc">
            Nome (A-Z)
          </SelectItem>

          <SelectItem value="name-desc">
            Nome (Z-A)
          </SelectItem>

          <SelectItem value="price-asc">
            Menor preço
          </SelectItem>

          <SelectItem value="price-desc">
            Maior preço
          </SelectItem>

        </SelectContent>

      </Select>

    </div>
  );
}