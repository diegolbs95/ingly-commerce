import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Imagem */}

      <Image
        src="/images/hero/01.jpeg"
        alt="Coleção Ingly Jeans"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

      {/* Conteúdo */}

      <div className="relative z-10 flex h-full items-center">

        <div className="mx-auto w-full max-w-7xl px-6">

          <div className="max-w-2xl text-white">

            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
              Nova Coleção
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] lg:text-7xl">

              Jeans feitos
              <br />
              para mulheres
              <br />
              que marcam
              <br />
              presença.

            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-white/85">

              Modelagem exclusiva, jeans premium
              e acabamento pensado para mulheres
              que valorizam elegância e conforto.

            </p>

            <div className="mt-10">

              <Button
                asChild
                size="lg"
                className="
px-10
py-7
text-lg
font-semibold
"
              >

                <Link href="/catalogo">

                  Ver coleção

                  <ArrowRight className="ml-2 h-6 w-6" />

                </Link>

              </Button>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white">

        <p className="text-xs uppercase tracking-[0.3em] text-white/70">
          Role para descobrir
        </p>

        <div className="mt-3 animate-bounce text-2xl">
          ↓
        </div>

      </div>

    </section>
  );
}