import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { SectionTitle } from "@/components/typography/SectionTitle";

export function AboutPage() {
  return (
    <Page>
      <Header />

      <main className="flex-1">

        {/* Hero */}

        <section className="relative h-[650px] overflow-hidden">

          <Image
            src="/images/about/about-hero3.jpg"
            alt="Ingly Jeans"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/30" />

          <Container>

            <div className="relative flex min-h-[720px] items-center">

              <div className="max-w-2xl text-white">

                <span className="text-sm uppercase tracking-[0.35em]">
                  Ingly Jeans
                </span>

                <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
                  Elegância em
                  <br />
                  cada detalhe.
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-8 text-white/90">
                  Criamos peças que unem autenticidade,
                  conforto e sofisticação para acompanhar
                  mulheres em todos os momentos.
                </p>

              </div>

            </div>

          </Container>

        </section>

        {/* Conteúdo */}

        <section className="py-24">

          <Container>

            <SectionTitle
              title="Sobre"
              subtitle="Conheça a essência da Ingly Jeans."
            />

            {/* Nossa Essência */}

            <section className="mx-auto mt-20 max-w-4xl">

              <h2 className="text-3xl font-semibold tracking-tight">
                Nossa Essência
              </h2>

              <p className="mt-8 text-lg leading-9 text-muted-foreground">
                A Ingly Jeans acredita que vestir-se bem é sentir-se confiante.
              </p>

              <p className="mt-8 text-lg leading-9 text-muted-foreground">
                Cada coleção nasce da união entre modelagem,
                conforto e elegância, criando peças pensadas
                para acompanhar mulheres em diferentes momentos
                da vida. Mais do que seguir tendências,
                buscamos desenvolver jeans atemporais que
                valorizam a personalidade e oferecem liberdade
                para viver cada momento com autenticidade.
              </p>

            </section>

            {/* Compromisso */}

            <section className="mx-auto mt-24 max-w-4xl">

              <h2 className="text-3xl font-semibold tracking-tight">
                Nosso Compromisso
              </h2>

              <p className="mt-8 text-lg leading-9 text-muted-foreground">
                Cada detalhe importa.
              </p>

              <p className="mt-8 text-lg leading-9 text-muted-foreground">
                Da escolha dos tecidos ao acabamento final,
                trabalhamos para entregar qualidade,
                caimento impecável e versatilidade.
                Nossa proposta é criar peças que permaneçam
                atuais ao longo do tempo, proporcionando
                conforto e sofisticação em qualquer ocasião.
              </p>

            </section>

            {/* Pilares */}

            <section className="mt-24 grid gap-8 md:grid-cols-3">

              <article className="rounded-2xl border border-border/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                <h3 className="text-2xl font-semibold">
                  Modelagem
                </h3>

                <p className="mt-6 leading-8 text-muted-foreground">
                  Desenvolvida para valorizar diferentes
                  silhuetas com conforto, equilíbrio
                  e elegância.
                </p>

              </article>

              <article className="rounded-2xl border border-border/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                <h3 className="text-2xl font-semibold">
                  Qualidade
                </h3>

                <p className="mt-6 leading-8 text-muted-foreground">
                  Selecionamos materiais e acabamentos
                  que unem durabilidade, beleza
                  e atenção aos detalhes.
                </p>

              </article>

              <article className="rounded-2xl border border-border/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                <h3 className="text-2xl font-semibold">
                  Estilo Atemporal
                </h3>

                <p className="mt-6 leading-8 text-muted-foreground">
                  Criamos coleções versáteis que acompanham
                  tendências sem perder a elegância de
                  peças feitas para durar.
                </p>

              </article>

            </section>

            {/* Encerramento */}

            <section className="mx-auto mt-32 max-w-3xl text-center">

              <h2 className="text-4xl font-bold tracking-[0.30em] uppercase">
                Ingly
              </h2>

              <div className="mx-auto mt-6 h-px w-20 bg-black" />

              <p className="mt-10 text-xl leading-9 text-muted-foreground">
                Elegância em cada detalhe.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Criando jeans para mulheres que valorizam
                autenticidade, conforto e sofisticação.
              </p>

            </section>

          </Container>

        </section>

      </main>

    </Page>
  );
}