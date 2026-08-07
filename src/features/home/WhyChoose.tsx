import {
    BadgeCheck,
    Shirt,
    Truck,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/typography/SectionTitle";

const items = [
    {
        icon: Shirt,
        title: "Modelagem Exclusiva",
        description:
            "Peças desenvolvidas para valorizar o corpo feminino com conforto, elegância e excelente caimento.",
    },
    {
        icon: BadgeCheck,
        title: "Jeans Premium",
        description:
            "Tecidos selecionados, acabamento de qualidade e atenção aos mínimos detalhes em cada peça.",
    },
    {
        icon: Truck,
        title: "Envio para Todo Brasil",
        description:
            "Receba seus produtos com segurança.",
    },
];

export function WhyChoose() {
    return (
        <section
            className="
                border-y
                bg-secondary/30
                py-16
                lg:py-24
            "
        >
            <Container>

                <SectionTitle
                    title="Por que escolher a Ingly Jeans?"
                    subtitle="Mais do que vestir, queremos entregar qualidade, confiança e elegância em cada detalhe."
                />

                <div
                className="
                    mt-10
                    grid
                    gap-5
                    md:grid-cols-3
                    lg:mt-16
                    lg:gap-8
                "
                >

                    {items.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="
                                    rounded-2xl
                                    border
                                    border-border/60
                                    bg-background
                                    p-5
                                    lg:p-8
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-primary/30
                                    hover:shadow-xl
                                "
                            >

                                <div
                                className="
                                    mb-4
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-primary
                                    text-primary-foreground
                                    shadow-sm
                                    lg:mb-6
                                    lg:h-16
                                    lg:w-16
                                "
                                >

                                    <Icon className="h-6 w-6 lg:h-8 lg:w-8" />

                                </div>

                                <h3
                                className="
                                    text-lg
                                    font-bold
                                    tracking-tight
                                    lg:text-xl
                                "
                                >
                                    {item.title}
                                </h3>

                                <p
                                className="
                                    mt-3
                                    text-sm
                                    leading-6
                                    text-muted-foreground
                                    lg:mt-4
                                    lg:text-[15px]
                                    lg:leading-7
                                "
                                >
                                    {item.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </Container>
        </section>
    );
}