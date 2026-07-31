"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

interface ProductGalleryProps {
    name: string;

    images: Array<string | null | undefined>;
}

export function ProductGallery({
    name,
    images,
}: Readonly<ProductGalleryProps>) {
    const gallery = useMemo(
        () => images.filter(Boolean) as string[],
        [images],
    );


    const [selectedIndex, setSelectedIndex] =
        useState(0);

    const [zoomed, setZoomed] =
        useState(false);

    const [transformOrigin, setTransformOrigin] =
        useState("50% 50%");

    const selectedImage =
        gallery[selectedIndex] ?? gallery[0];

    if (!selectedImage) {
        return null;
    }

    function handleMouseMove(
        event: React.MouseEvent<HTMLDivElement>,
    ) {

        const rect =
            event.currentTarget.getBoundingClientRect();

        const x =
            ((event.clientX - rect.left) / rect.width) *
            100;

        const y =
            ((event.clientY - rect.top) / rect.height) *
            100;

        setTransformOrigin(`${x}% ${y}%`);
    }

    return (
        <div className="flex flex-col gap-4 lg:flex-row">

            {/* Miniaturas */}

            <div
                className="
          order-2
          flex
          gap-3
          overflow-x-auto
          lg:order-1
          lg:w-24
          lg:flex-col
          cursor-pointer
        "
            >
                {gallery.map((image, index) => (
                    <button
                        key={`${image}-${index}`}
                        type="button"
                        aria-label={`Selecionar imagem ${index + 1}`}

                        aria-pressed={selectedIndex === index}
                        onClick={() =>
                            setSelectedIndex(index)
                        }
                        className={`
              relative
              h-24
              w-20
              shrink-0
              overflow-hidden
              rounded-xl
              border
              transition-all
              focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
              ${selectedImage === image
                                ? "border-primary ring-2 ring-primary/30"
                                : "border-border hover:border-primary"
                            }
            `}
                    >
                        <Image
                            src={image}
                            alt={`${name} ${index + 1}`}
                            fill
                            sizes="80px"
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Imagem Principal */}

            <div
                onMouseEnter={() => setZoomed(true)}
                onMouseLeave={() => setZoomed(false)}
                onMouseMove={handleMouseMove}
                className="
          relative
          order-1
          aspect-[4/5]
          flex-1
          overflow-hidden
          rounded-2xl
          border
          bg-secondary
          lg:order-2
        "
            >
                <Image
                    src={selectedImage}
                    alt={name}
                    fill
                    priority
                    style={{
                        transformOrigin,
                    }}
                    className={`
                    object-cover
                    cursor-zoom-in
                    transition-transform
                    duration-200
                    ${zoomed ? "scale-[2.2]" : "scale-100"}
                    `}
                />
            </div>

        </div>
    );
}