"use client";

import Image from "next/image";
import {
    useMemo,
    useRef,
    useState,
} from "react";

interface ProductGalleryProps {
    name: string;

    images: Array<string | null | undefined>;
}

export function ProductGallery({
    name,
    images,
}: Readonly<ProductGalleryProps>) {

    const touchStartX = useRef(0);

    const gallery = useMemo(
        () => images.filter(Boolean) as string[],
        [images],
    );

    const [selectedIndex, setSelectedIndex] =
        useState(0);

    const [isChanging, setIsChanging] =
        useState(false);

    const selectedImage =
        gallery[selectedIndex] ?? gallery[0];

    if (!selectedImage) {
        return null;
    }

    function handleTouchStart(
        event: React.TouchEvent,
    ) {
        touchStartX.current =
            event.touches[0].clientX;
    }

    function handleTouchEnd(
        event: React.TouchEvent,
    ) {
        const end =
            event.changedTouches[0].clientX;

        const diff =
            touchStartX.current - end;

        if (diff > 50) {
            changeImage(
                selectedIndex === gallery.length - 1
                    ? 0
                    : selectedIndex + 1
            );
        }

        if (diff < -50) {

            changeImage(

                selectedIndex === 0

                    ? gallery.length - 1

                    : selectedIndex - 1

            );

        }
    }

    function changeImage(index: number) {

        if (index === selectedIndex) {
            return;
        }

        setIsChanging(true);

        setTimeout(() => {

            setSelectedIndex(index);

            setIsChanging(false);

        }, 120);

    }

    return (
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">

            {/* Miniaturas */}

            <div
                className="
                        order-2
                        hidden
                        gap-2
                        lg:gap-3
                        overflow-x-auto
                        lg:flex
                        lg:w-24
                        lg:flex-col
                    "
            >
                {gallery.map((image, index) => (
                    <button
                        key={`${image}-${index}`}
                        type="button"
                        aria-label={`Selecionar imagem ${index + 1}`}

                        aria-pressed={selectedIndex === index}
                        onClick={() =>
                            changeImage(index)
                        }
                        className={`
                            relative
                            h-16
                            w-14
                            sm:h-20
                            sm:w-16
                            lg:h-24
                            lg:w-20
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
            <div className="order-1 flex-1">
                {/* Imagem Principal */}

                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    className="
                    relative
                    order-1
                    aspect-[4/5]
                    w-full
                    overflow-hidden
                    rounded-2xl
                    border
                    bg-secondary
                "
                >
                    <Image
                        src={selectedImage}
                        alt={name}
                        fill
                        priority
                        className={`
                            object-cover
                            transition-all
                            duration-300
                            ease-in-out
                            ${isChanging
                                ? "opacity-0"
                                : "opacity-100"
                            }
                        `}
                    />
                </div>
                <div className="mt-4 flex justify-center gap-2 lg:hidden">

                    {gallery.map((_, index) => (

                        <button
                            key={index}
                            type="button"
                            aria-label={`Imagem ${index + 1}`}
                            onClick={() =>
                                changeImage(index)
                            }
                            className={`
                                h-2
                                w-2
                                rounded-full
                                transition-all
                                ${selectedIndex === index
                                    ? "bg-black"
                                    : "bg-gray-300"
                                }
                            `}
                        />

                    ))}

                </div>
            </div>
        </div>
    );
}