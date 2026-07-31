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
        <section className="border-y bg-secondary/30 py-24">
            <Container>

                <SectionTitle
                    title="Por que escolher a Ingly Jeans?"
                    subtitle="Mais do que vestir, queremos entregar qualidade, confiança e elegância em cada detalhe."
                />

                <div className="mt-16 grid gap-8 md:grid-cols-3">

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
                                    p-8
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
                                        mb-6
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-primary
                                        text-primary-foreground
                                        shadow-sm
                                    "
                                >

                                    <Icon className="h-8 w-8" />

                                </div>

                                <h3 className="text-xl font-bold tracking-tight">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
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