export interface Product {
  id: string;

  reference: string;

  composition: string | null;

  name: string;

  slug: string;

  description: string;

  price: number;

  wholesalePrice: number | null;

  image: string;

  image2?: string | null;

  image3?: string | null;

  image4?: string | null;

  image5?: string | null;

  category: string;

  collection: string;

  isNew: boolean;

  featured: boolean;

  active: boolean;
}
