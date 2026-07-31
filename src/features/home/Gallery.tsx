import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { Camera } from "lucide-react";

import { Button } from "@/components/ui/button";

const images = [
    "/images/instagram/01.jpeg",
    "/images/instagram/02.jpeg",
    "/images/instagram/03.jpeg",
    "/images/instagram/04.jpeg",
    "/images/instagram/05.jpeg",
    "/images/instagram/06.jpeg",
];

export function Gallery() {
    return (
        <section className="py-24">

            <Container>

                <SectionTitle
                    title="Nossa Essência"
                    subtitle="Elegância, autenticidade e detalhes que fazem parte da Ingly Jeans."
                />

                <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">

                    {images.map((image) => (
                        <div
                            key={image}
                            className="
                                group
                                relative
                                aspect-square
                                overflow-hidden
                                rounded-2xl
                                cursor-pointer
                            "
                        >

                            <Image
                                src={image}
                                alt="Instagram Ingly Jeans"
                                fill
                                className="
                                    object-cover
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                    "
                            />

                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-black/0
                                    transition
                                    duration-300
                                    group-hover:bg-black/10
                                "
                            />

                        </div>
                    ))}

                </div>

                <div className="mt-12 flex justify-center">

                    <Button
                        asChild
                        size="lg"
                        className="px-8 py-6 text-lg font-semibold"
                    >
                        <Link
                            href="https://instagram.com/inglyjeans"
                            target="_blank"
                        >
                            <Camera className="mr-3 h-6 w-6" />

                            Siga @inglyjeans
                        </Link>
                    </Button>

                </div>

            </Container>

        </section>
    );
}