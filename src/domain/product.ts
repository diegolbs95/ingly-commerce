export interface Product {
  id: string;

  name: string;

  composition: string | null;

  slug: string;

  description: string;

  price: number;

  image: string;

  category: string;

  collection: string;

  isNew: boolean;

  featured: boolean;

  active: boolean;
}