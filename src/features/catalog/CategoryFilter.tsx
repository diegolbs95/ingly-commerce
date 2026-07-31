"use client";

import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelect,
}: Readonly<CategoryFilterProps>) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <Button
          key={category}
          variant={
            selectedCategory === category
              ? "default"
              : "outline"
          }
          onClick={() => onSelect(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}