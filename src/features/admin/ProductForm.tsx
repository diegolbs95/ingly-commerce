"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Product } from "@prisma/client";
import { ImageUploader } from "./components/ImageUploader";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { categories, collections } from "./constants";

import {
  productSchema,
  ProductFormData,
} from "./schemas/product.schema";

interface ProductFormProps {
  product?: Product;

  submitLabel?: string;

  onSubmit: (
    data: ProductFormData
  ) => Promise<void> | void;
}

export function ProductForm({
  product,
  submitLabel,
  onSubmit,
}: Readonly<ProductFormProps>) {

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),

    defaultValues: {
      reference: product?.reference ?? "",
      name: product?.name ?? "",
      description: product?.description ?? "",
      composition: product?.composition ?? "",
      image: product?.image ?? "",
      image2: product?.image2 ?? "",
      image3: product?.image3 ?? "",
      image4: product?.image4 ?? "",
      image5: product?.image5 ?? "",
      price: product?.price ?? 0,
      wholesalePrice: product?.wholesalePrice ?? 0,
      category: product?.category ?? "",
      collection: product?.collection ?? "",
      isNew: product?.isNew ?? true,
      featured: product?.featured ?? false,
      active: product?.active ?? true,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await onSubmit(data);
      })}
      className="space-y-6"
    >

      {/* Nome */}

      <div className="space-y-2">

        <label className="text-sm font-medium">
          Nome
        </label>

        <Input
          placeholder="Calça Wide Leg"
          {...register("name")}
        />

        {errors.name && (
          <p className="text-sm text-destructive">
            {errors.name.message}
          </p>
        )}

      </div>

      {/* Referência */}

      <div className="space-y-2">

        <label className="text-sm font-medium">
          Referência
        </label>

        <Input
          placeholder="Ex.: ING001"
          {...register("reference")}
        />

        {errors.reference && (
          <p className="text-sm text-destructive">
            {errors.reference.message}
          </p>
        )}

      </div>

      {/* Descrição */}

      <div className="space-y-2">

        <label className="text-sm font-medium">
          Descrição
        </label>

        <Textarea
          rows={3}
          placeholder="Descrição do produto..."
          {...register("description")}
        />

        {errors.description && (
          <p className="text-sm text-destructive">
            {errors.description.message}
          </p>
        )}

      </div>

      {/* Composição */}

      <div className="space-y-2">

        <label className="text-sm font-medium">
          Composição
        </label>

        <Input
          placeholder="Ex.: 98% Algodão • 2% Elastano"
          {...register("composition")}
        />

        {errors.composition && (

          <p className="text-sm text-destructive">
            {errors.composition.message}
          </p>

        )}

      </div>

      {/* Categoria + Coleção */}

      <div className="grid gap-6 md:grid-cols-2">

        <div className="space-y-2">

          <label className="text-sm font-medium">
            Categoria
          </label>

          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>

                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category}
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>

              </Select>
            )}
          />

          {errors.category && (
            <p className="text-sm text-destructive">
              {errors.category.message}
            </p>
          )}

        </div>

        <div className="space-y-2">

          <label className="text-sm font-medium">
            Coleção
          </label>

          <Controller
            control={control}
            name="collection"
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>

                <SelectContent>
                  {collections.map((collection) => (
                    <SelectItem
                      key={collection}
                      value={collection}
                    >
                      {collection}
                    </SelectItem>
                  ))}
                </SelectContent>

              </Select>
            )}
          />

          {errors.collection && (
            <p className="text-sm text-destructive">
              {errors.collection.message}
            </p>
          )}

        </div>

      </div>

      {/* Galeria de Imagens */}

      <div className="space-y-6">
        <div>

          <h3 className="text-lg font-semibold">
            Galeria do Produto
          </h3>

          <div
            className="
                grid
                justify-items-center
                gap-8
                sm:grid-cols-2
                xl:grid-cols-3
              "
          >

            {/* Imagem Principal */}

            <div
              className="
                  flex
                  w-full
                  max-w-[260px]
                  flex-col
                  items-center
                  space-y-3
                "
            >

              <label
                className="
                  text-center
                  text-sm
                  font-medium
                "
              >
                Imagem Principal
              </label>

              <Controller
                control={control}
                name="image"
                render={({ field }) => (
                  <ImageUploader
                    value={field.value}
                    onChange={field.onChange}
                    disabled={isSubmitting}
                  />
                )}
              />

              {errors.image && (
                <p className="text-sm text-destructive">
                  {errors.image.message}
                </p>
              )}

            </div>

            {/* Imagem 2 */}

            <div
              className="
                flex
                flex-col
                items-center
                space-y-2
              "
            >

              <label
                className="
                  text-center
                  text-sm
                  font-medium
                "
              >
                Imagem 2
              </label>

              <Controller
                control={control}
                name="image2"
                render={({ field }) => (
                  <ImageUploader
                    value={field.value}
                    onChange={field.onChange}
                    disabled={isSubmitting}
                  />
                )}
              />

              {errors.image2 && (
                <p className="text-sm text-destructive">
                  {errors.image2.message}
                </p>
              )}

            </div>

            {/* Imagem 3 */}

            <div
              className="
                flex
                flex-col
                items-center
                space-y-2
              "
            >

              <label
                className="
                  text-center
                  text-sm
                  font-medium
                "
              >
                Imagem 3
              </label>

              <Controller
                control={control}
                name="image3"
                render={({ field }) => (
                  <ImageUploader
                    value={field.value}
                    onChange={field.onChange}
                    disabled={isSubmitting}
                  />
                )}
              />

              {errors.image3 && (
                <p className="text-sm text-destructive">
                  {errors.image3.message}
                </p>
              )}

            </div>

            {/* Imagem 4 */}

            <div
              className="
                flex
                flex-col
                items-center
                space-y-2
              "
            >

              <label
                className="
                  text-center
                  text-sm
                  font-medium
                "
              >
                Imagem 4
              </label>

              <Controller
                control={control}
                name="image4"
                render={({ field }) => (
                  <ImageUploader
                    value={field.value}
                    onChange={field.onChange}
                    disabled={isSubmitting}
                  />
                )}
              />

              {errors.image4 && (
                <p className="text-sm text-destructive">
                  {errors.image4.message}
                </p>
              )}

            </div>

            {/* Imagem 5 */}

            <div
              className="
                flex
                flex-col
                items-center
                space-y-2
              "
            >

              <label
                className="
                  text-center
                  text-sm
                  font-medium
                "
              >
                Imagem 5
              </label>

              <Controller
                control={control}
                name="image5"
                render={({ field }) => (
                  <ImageUploader
                    value={field.value}
                    onChange={field.onChange}
                    disabled={isSubmitting}
                  />
                )}
              />

              {errors.image5 && (
                <p className="text-sm text-destructive">
                  {errors.image5.message}
                </p>
              )}

            </div>

          </div>
        </div>

      </div>
      {/* Preço */}

      < div className="grid gap-6 md:grid-cols-2" >

        <div className="space-y-2">

          <label className="text-sm font-medium">
            Preço Varejo
          </label>

          <Input
            type="number"
            step="0.01"
            {...register("price", {
              valueAsNumber: true,
            })}
          />

          {errors.price && (
            <p className="text-sm text-destructive">
              {errors.price.message}
            </p>
          )}

        </div>

        <div className="space-y-2">

          <label className="text-sm font-medium">
            Preço Atacado
          </label>

          <Input
            type="number"
            step="0.01"
            {...register("wholesalePrice", {
              valueAsNumber: true,
            })}
          />

          {errors.wholesalePrice && (
            <p className="text-sm text-destructive">
              {errors.wholesalePrice.message}
            </p>
          )}

        </div>

      </div >

      {/* Status */}

      < div className="grid gap-4 md:grid-cols-3" >

        <Controller
          control={control}
          name="isNew"
          render={({ field }) => (
            <div className="flex items-center justify-between rounded-lg border p-4">

              <span>Produto Novo</span>

              <input
                type="checkbox"
                checked={field.value}
                onChange={(event) =>
                  field.onChange(event.target.checked)
                }
                className="h-5 w-5 cursor-pointer"
              />

            </div>
          )}
        />

        <Controller
          control={control}
          name="featured"
          render={({ field }) => (
            <div className="flex items-center justify-between rounded-lg border p-4">

              <span>Produto em Destaque</span>

              <input
                type="checkbox"
                checked={field.value}
                onChange={(event) =>
                  field.onChange(event.target.checked)
                }
                className="h-5 w-5 cursor-pointer"
              />

            </div>
          )}
        />

        <Controller
          control={control}
          name="active"
          render={({ field }) => (
            <div className="flex items-center justify-between rounded-lg border p-4">

              <span>Produto Ativo</span>

              <input
                type="checkbox"
                checked={field.value}
                onChange={(event) =>
                  field.onChange(event.target.checked)
                }
                className="h-5 w-5 cursor-pointer"
              />

            </div>
          )}
        />

      </div >

      {/* Rodapé */}

      < div className="flex justify-end pt-2" >

        <Button
          type="submit"
          size="lg"
          className="min-w-[220px]"
          disabled={isSubmitting}
        >
          {submitLabel ??
            (product
              ? "Salvar Alterações"
              : "Cadastrar Produto")}
        </Button>

      </div >


    </form >
  );
}