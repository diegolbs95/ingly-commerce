"use client";

import { useRef, useState, useTransition } from "react";

import Image from "next/image";

import {
  ImagePlus,
  Loader2,
  Trash2,
} from "lucide-react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { uploadImageAction } from "@/actions/upload-image";

interface ImageUploaderProps {
  value?: string;
  onChange?: (url: string) => void;
  disabled?: boolean;
}

const MAX_SIZE = 5 * 1024 * 1024;

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

export function ImageUploader({
  value,
  onChange,
  disabled,
}: Readonly<ImageUploaderProps>) {
  const inputRef =
    useRef<HTMLInputElement>(null);

  const [preview, setPreview] =
    useState(value ?? "");

  const [isPending, startTransition] =
    useTransition();

  function handleSelect(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file =
      event.target.files?.[0];

    if (!file) return;

    if (file.size > MAX_SIZE) {
      toast.error(
        "A imagem deve ter no máximo 5 MB."
      );

      return;
    }

    if (
      !ACCEPTED_TYPES.includes(file.type)
    ) {
      toast.error(
        "Formato inválido. Utilize PNG, JPG ou WEBP."
      );

      return;
    }

    const localPreview =
      URL.createObjectURL(file);

    setPreview(localPreview);

    startTransition(async () => {
      const loading = toast.loading(
        "Enviando imagem..."
      );

      try {
        const formData = new FormData();

        formData.append("file", file);

        const imageUrl =
          await uploadImageAction(
            formData
          );

        setPreview(imageUrl);

        onChange?.(imageUrl);

        toast.success(
          "Imagem enviada com sucesso.",
          {
            id: loading,
          }
        );
      } catch {
        setPreview(value ?? "");

        toast.error(
          "Não foi possível enviar a imagem.",
          {
            id: loading,
          }
        );
      }
    });
  }

  function handleRemove() {
    setPreview("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    onChange?.("");
  }

  return (
    <div className="space-y-4">

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        disabled={
          disabled || isPending
        }
        onChange={handleSelect}
      />

      {preview ? (
        <>
          <div
            className="
              relative
              mx-auto
              aspect-[4/5]
              w-full
              max-w-[180px]
              overflow-hidden
              rounded-xl
              border
            "
          >
            <Image
              src={preview}
              alt="Preview"
              fill
              sizes="512px"
              className="object-cover"
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="button"
              variant="destructive"
              size="sm"
              disabled={isPending}
              onClick={handleRemove}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Remover
            </Button>
          </div>
        </>
      ) : (
        <button
          type="button"
          disabled={
            disabled || isPending
          }
          onClick={() =>
            inputRef.current?.click()
          }
          className="
            mx-auto
            flex
            h-44
            w-full
            max-w-[180px]
            flex-col
            items-center
            justify-center
            rounded-xl
            border-2
            border-dashed
            transition
            hover:bg-muted
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {isPending ? (
            <>
              <Loader2 className="mb-3 h-8 w-8 animate-spin" />

              <span>
                Enviando imagem...
              </span>
            </>
          ) : (
            <>
              <ImagePlus className="mb-3 h-8 w-8" />

              <span className="font-medium">
                Selecione uma imagem
              </span>

              <span className="mt-1 text-sm text-muted-foreground">
                PNG, JPG ou WEBP
              </span>
            </>
          )}
        </button>
      )}

    </div>
  );
}