import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/typography/SectionTitle";

const categories = [
  {
    name: "Calças",
    image: "/images/categories/calcas.jpg",
    href: "/catalogo?categoria=calcas",
  },
  {
    name: "Shorts",
    image: "/images/categories/shorts.jpg",
    href: "/catalogo?categoria=shorts",
  },
  {
    name: "Jaquetas",
    image: "/images/categories/jaquetas.jpg",
    href: "/catalogo?categoria=jaquetas",
  },
  {
    name: "Camisas",
    image: "/images/categories/camisas.jpg",
    href: "/catalogo?categoria=camisas",
  },
];

export function Categories() {
  return (
    <section className="py-20">
      <Container>

        <SectionTitle
          title="Categorias"
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="
                group
                block
                overflow-hidden
                rounded-2xl
                border
                border-border/60
                bg-background
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >
              <div
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                "
              >

                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/55
                    via-black/10
                    to-transparent
                    transition-all
                    duration-300
                    group-hover:from-black/65
                  "
                />

                <span
                  className="
                    absolute
                    bottom-6
                    left-6
                    text-2xl
                    font-bold
                    tracking-tight
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  {category.name}
                </span>

              </div>
            </Link>
          ))}

        </div>

      </Container>
    </section>
  );
}