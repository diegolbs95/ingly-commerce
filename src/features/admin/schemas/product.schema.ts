import { z } from "zod";

export const productSchema = z.object({
  reference: z.string().trim().min(1, "Informe a referência.").max(30),

  name: z.string().trim().min(3, "Informe o nome do produto."),

  description: z.string().trim().min(10, "Descrição muito curta."),

  image: z.string().url("Informe uma URL válida."),

  image2: z.string().url().optional().or(z.literal("")),

  image3: z.string().url().optional().or(z.literal("")),

  image4: z.string().url().optional().or(z.literal("")),

  image5: z.string().url().optional().or(z.literal("")),

  price: z
    .number({
      error: "Preço inválido.",
    })
    .positive("Preço inválido."),

  wholesalePrice: z
    .number({
      error: "Preço de atacado inválido.",
    })
    .positive("Preço de atacado inválido."),

  category: z.string().min(1, "Selecione uma categoria."),

  collection: z.string().min(1, "Selecione uma coleção."),

  isNew: z.boolean(),

  featured: z.boolean(),

  active: z.boolean(),
});

export type ProductFormData = z.infer<typeof productSchema>;
