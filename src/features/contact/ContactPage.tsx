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

            <main className="flex-1 py-12 lg:py-16">

                <Container>

                    <SectionTitle
                        title="Contato"
                        subtitle="Estamos prontos para atender você."
                    />

                    <section className="mx-auto mt-10 max-w-3xl text-center lg:mt-16">

                        <p
                            className="
                                text-base
                                leading-7
                                text-muted-foreground
                                lg:text-lg
                                lg:leading-8
                            "
                        >
                            Ficou com alguma dúvida sobre nossos produtos,
                            pedidos ou tamanhos?
                        </p>

                        <p
                            className="
                                mt-3
                                text-base
                                leading-7
                                text-muted-foreground
                                lg:mt-4
                                lg:text-lg
                                lg:leading-8
                            "
                        >
                            Nossa equipe está pronta para ajudar você.
                        </p>

                    </section>

                    <section className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2 lg:mt-20 lg:gap-8">

                        {/* WhatsApp */}

                        <Link
                            href={`https://wa.me/${siteConfig.links.whatsapp}`}
                            target="_blank"
                            className="
                                group
                                rounded-2xl
                                border
                                border-border/60
                                p-5
                                lg:p-8
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-border
                                hover:shadow-xl
                            "
                        >

                            <MessageCircle
                                className="
                                h-7
                                w-7
                                lg:h-8
                                lg:w-8
                                transition-transform
                                duration-300
                                group-hover:scale-110
                                "
                            />

                            <h2
                                className="
                                    mt-5
                                    text-xl
                                    lg:mt-6
                                    lg:text-2xl
                                    font-semibold
                                    transition-colors
                                    duration-300
                                    group-hover:text-primary
                                "
                            >
                                WhatsApp
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-muted-foreground lg:mt-4 lg:text-base">
                                Tire dúvidas, consulte disponibilidade
                                ou finalize seu pedido diretamente
                                com nossa equipe.
                            </p>

                            <div
                                className="
                                    mt-6
                                    lg:mt-8
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
                                p-5
                                lg:p-8
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-xl
                            "
                        >

                            <MapPin className="h-7 w-7 lg:h-8 lg:w-8" />

                            <h2
                                className="
                                    mt-5
                                    text-xl
                                    font-semibold
                                    lg:mt-6
                                    lg:text-2xl
                                "
                            >
                                Localização
                            </h2>

                            <p
                                className="
                                    mt-3
                                    text-sm
                                    leading-7
                                    text-muted-foreground
                                    lg:mt-4
                                    lg:text-base
                                "
                            >
                                {siteConfig.links.address}
                            </p>

                            <p className="mt-6 lg:mt-8 font-semibold">
                                Pernambuco • Brasil
                            </p>

                        </article>

                    </section>

                    {/* Instagram */}
                    {/* Redes Sociais */}

                    <section className="mt-14 flex justify-center lg:mt-20">

                        <Link
                            href={siteConfig.links.instagram}
                            target="_blank"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-3
                                lg:gap-4
                                rounded-xl
                                border
                                border-border/60
                                bg-background
                                px-6
                                py-4
                                lg:px-8
                                lg:py-5
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
                                    text-base
                                    lg:text-lg
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

                    <section className="mx-auto mt-16 max-w-2xl text-center lg:mt-24">

                        <div className="mx-auto h-px w-20 bg-black" />

                        <h2
                            className="
                                mt-8
                                text-2xl
                                lg:text-3xl
                                font-bold
                                tracking-[0.30em]
                                uppercase
                            "
                        >
                            INGLY
                        </h2>

                        <p className="mt-5 text-base leading-7 text-muted-foreground lg:mt-6 lg:text-lg lg:leading-8">
                            Estamos sempre disponíveis para oferecer
                            a melhor experiência em cada detalhe.
                        </p>

                    </section>

                </Container>

            </main>

        </Page>
    );
}