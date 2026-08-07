import Link from "next/link";

import {
    Camera,
    MessageCircle,
} from "lucide-react";

import { Container } from "./Container";

export function Footer() {
    return (
        <footer
        className="
            mt-16
            border-t
            bg-secondary/30
            lg:mt-32
        "
        >

            <Container>

                <div className="py-12 lg:py-16">

                    {/* Marca */}

                    <div>

                        <h2 className="text-2xl font-extrabold tracking-[0.30em] uppercase">
                            INGLY
                        </h2>

                        <p className="mt-1 text-xs tracking-[0.45em] text-muted-foreground uppercase">
                            JEANS
                        </p>

                        <p
                            className="
                                mt-4
                                leading-7
                                text-muted-foreground
                                mt-4 lg:mt-5
                            "
                        >
                            Elegância em cada detalhe.
                            Desenvolvemos jeans para mulheres
                            que buscam conforto, autenticidade
                            e sofisticação.
                        </p>

                    </div>

                    <div
                        className="
                        mt-10
                        grid
                        grid-cols-2
                        gap-8
                        lg:mt-0
                        lg:grid-cols-2
                    "
                    >
                        {/* Navegação */}

                        <div>

                            <h3 className="text-lg font-semibold">
                                Institucional
                            </h3>

                            <ul className="mt-4 lg:mt-5 space-y-3">

                                <li>

                                    <Link
                                        href="/"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        Início
                                    </Link>

                                </li>

                                <li>

                                    <Link
                                        href="/catalogo"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        Catálogo
                                    </Link>

                                </li>

                                <li>

                                    <Link
                                        href="/novidades"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        Novidades
                                    </Link>

                                </li>

                            </ul>

                        </div>

                        {/* Contato */}

                        <div>

                            <h3 className="text-lg font-semibold">
                                Fale Conosco
                            </h3>

                            <div className="mt-4 lg:mt-5 space-y-4">

                                <a
                                    href="https://wa.me/55SEUNUMERO"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                                >

                                    <MessageCircle className="h-5 w-5" />

                                    WhatsApp

                                </a>

                                <a
                                    href="https://instagram.com/inglyjeans"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                                >

                                    <Camera className="h-5 w-5" />

                                    @inglyjeans

                                </a>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="border-t py-8 text-center">

                    <p className="text-sm text-muted-foreground">
                        Elegância em cada detalhe.
                    </p>

                    <p className="mt-3 text-xs tracking-wide text-muted-foreground">
                        © {new Date().getFullYear()} Ingly Jeans.
                        Todos os direitos reservados.
                    </p>

                </div>

            </Container>

        </footer>
    );
}