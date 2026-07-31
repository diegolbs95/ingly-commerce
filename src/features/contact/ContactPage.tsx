import Link from "next/link";

import {
    ArrowRight,
    Camera,
    MapPin,
    MessageCircle,
} from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { siteConfig } from "@/config/site";

export function ContactPage() {
    return (
        <Page>

            <Header />

            <main className="flex-1 py-16">

                <Container>

                    <SectionTitle
                        title="Contato"
                        subtitle="Estamos prontos para atender você."
                    />

                    <section className="mx-auto mt-16 max-w-3xl text-center">

                        <p className="text-lg leading-8 text-muted-foreground">
                            Ficou com alguma dúvida sobre nossos produtos,
                            pedidos ou tamanhos?
                        </p>

                        <p className="mt-4 text-lg leading-8 text-muted-foreground">
                            Nossa equipe está pronta para ajudar você.
                        </p>

                    </section>

                    <section className="mx-auto mt-20 grid max-w-5xl gap-8 md:grid-cols-2">

                        {/* WhatsApp */}

                        <Link
                            href={`https://wa.me/${siteConfig.links.whatsapp}`}
                            target="_blank"
                            className="
                group
                rounded-2xl
                border
                border-border/60
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-border
                hover:shadow-xl
              "
                        >

                            <MessageCircle
                                className="
                  h-8
                  w-8
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                            />

                            <h2
                                className="
                  mt-6
                  text-2xl
                  font-semibold
                  transition-colors
                  duration-300
                  group-hover:text-primary
                "
                            >
                                WhatsApp
                            </h2>

                            <p className="mt-4 leading-7 text-muted-foreground">
                                Tire dúvidas, consulte disponibilidade
                                ou finalize seu pedido diretamente
                                com nossa equipe.
                            </p>

                            <div
                                className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  font-semibold
                "
                            >
                                Falar agora

                                <ArrowRight
                                    className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                                />

                            </div>

                        </Link>

                        {/* Localização */}

                        <article
                            className="
                rounded-2xl
                border
                border-border/60
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
                        >

                            <MapPin className="h-8 w-8" />

                            <h2 className="mt-6 text-2xl font-semibold">
                                Localização
                            </h2>

                            <p className="mt-4 leading-7 text-muted-foreground">
                                {siteConfig.links.address}
                            </p>

                            <p className="mt-8 font-semibold">
                                Pernambuco • Brasil
                            </p>

                        </article>

                    </section>

                    {/* Instagram */}
                    {/* Redes Sociais */}

                    <section className="mt-20 flex justify-center">

                        <Link
                            href={siteConfig.links.instagram}
                            target="_blank"
                            className="
      group
      inline-flex
      items-center
      gap-4
      rounded-xl
      border
      border-border/60
      bg-background
      px-8
      py-5
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-lg
    "
                        >

                            <Camera
                                className="
        h-5
        w-5
        transition-transform
        duration-300
        group-hover:scale-110
      "
                            />

                            <span
                                className="
        text-lg
        font-semibold
        transition-colors
        duration-300
        group-hover:text-primary
      "
                            >
                                Siga @inglyjeans
                            </span>

                        </Link>

                    </section>

                    {/* Rodapé */}

                    <section className="mx-auto mt-24 max-w-2xl text-center">

                        <div className="mx-auto h-px w-20 bg-black" />

                        <h2
                            className="
                mt-8
                text-3xl
                font-bold
                tracking-[0.30em]
                uppercase
              "
                        >
                            INGLY
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Estamos sempre disponíveis para oferecer
                            a melhor experiência em cada detalhe.
                        </p>

                    </section>

                </Container>

            </main>

        </Page>
    );
}