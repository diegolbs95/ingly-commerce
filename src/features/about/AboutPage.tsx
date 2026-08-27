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

        <section
          className="
    relative
    h-[460px]
    overflow-hidden
    lg:h-[650px]
  "
        >

          <Image
            src="/images/about/about-hero3.jpg"
            alt="Ingly Jeans"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-primary/30" />

          <Container>

            <div
              className="
                relative
                flex
                min-h-[460px]
                items-center
                lg:min-h-[720px]
              "
            >

              <div className="max-w-xl text-white lg:max-w-2xl">

                <span className="text-sm uppercase tracking-[0.35em]">
                  Ingly Jeans
                </span>

                <h1
                  className="
                    mt-5
                    text-4xl
                    font-bold
                    leading-[1.1]
                    lg:mt-6
                    lg:text-6xl
                    lg:leading-tight
                  "
                >
                  Elegância em
                  <br />
                  cada detalhe.
                </h1>

                <p
                  className="
                  mt-8
                  text-base
                  leading-7
                  text-white/90
                  lg:text-lg
                  lg:leading-8
                "
                >
                  Criamos peças que unem autenticidade,
                  conforto e sofisticação para acompanhar
                  mulheres em todos os momentos.
                </p>

              </div>

            </div>

          </Container>

        </section>

        {/* Conteúdo */}

        <section
          className="
            py-14
            lg:py-24
          "
        >

          <Container>

            <SectionTitle
              title="Sobre"
              subtitle="Conheça a essência da Ingly Jeans."
            />

            {/* Nossa Essência */}

            <section
              className="
                mx-auto
                mt-12
                max-w-4xl
                lg:mt-20
              "
            >

              <h2 className="text-2xl font-semibold tracking-tight lg:text-3xl">
                Nossa Essência
              </h2>

              <p className="
                mt-5
                text-base
                leading-8
                lg:mt-8
                lg:text-lg
                lg:leading-9
                text-muted-foreground"
              >
                A Ingly Jeans acredita que vestir-se bem é sentir-se confiante.
              </p>

              <p
                className="
                  mt-5
                  text-base
                  leading-8
                  text-muted-foreground
                  lg:mt-8
                  lg:text-lg
                  lg:leading-9
                "
              >
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

            <section className="mx-auto mt-16 lg:mt-24 max-w-4xl">

              <h2
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  lg:text-3xl
                "
              >
                Nosso Compromisso
              </h2>

              <p
                className="
                  mt-5
                  text-base
                  leading-8
                  text-muted-foreground
                  lg:mt-8
                  lg:text-lg
                  lg:leading-9
                "
              >
                Cada detalhe importa.
              </p>

              <p
                className="
                  mt-5
                  text-base
                  leading-8
                  text-muted-foreground
                  lg:mt-8
                  lg:text-lg
                  lg:leading-9
                "
              >
                Da escolha dos tecidos ao acabamento final,
                trabalhamos para entregar qualidade,
                caimento impecável e versatilidade.
                Nossa proposta é criar peças que permaneçam
                atuais ao longo do tempo, proporcionando
                conforto e sofisticação em qualquer ocasião.
              </p>

            </section>

            {/* Pilares */}

            <section
              className="
                mt-16
                grid
                gap-5
                md:grid-cols-3
                lg:mt-24
                lg:gap-8
              "
            >

              <article
                className="
                  rounded-2xl
                  border
                  border-border/60
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  lg:p-8
                "
              >

                <h3
                  className="
                    text-xl
                    font-semibold
                    lg:text-2xl
                  "
                >
                  Modelagem
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-muted-foreground
                    lg:mt-6
                    lg:text-base
                    lg:leading-8
                  "
                >
                  Desenvolvida para valorizar diferentes
                  silhuetas com conforto, equilíbrio
                  e elegância.
                </p>

              </article>

              <article className="rounded-2xl border border-border/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-8">

                <h3
                  className="
                    text-xl
                    font-semibold
                    lg:text-2xl
                  "
                >
                  Qualidade
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-muted-foreground
                    lg:mt-6
                    lg:text-base
                    lg:leading-8
                  "
                >
                  Selecionamos materiais e acabamentos
                  que unem durabilidade, beleza
                  e atenção aos detalhes.
                </p>

              </article>

              <article
                className="
                  rounded-2xl
                  border
                  border-border/60
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  lg:p-8
                "
              >

                <h3
                  className="
                    text-xl
                    font-semibold
                    lg:text-2xl
                  "
                >
                  Estilo Atemporal
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-muted-foreground
                    lg:mt-6
                    lg:text-base
                    lg:leading-8
                  "
                >
                  Criamos coleções versáteis que acompanham
                  tendências sem perder a elegância de
                  peças feitas para durar.
                </p>

              </article>

            </section>

            {/* Encerramento */}

            <section
              className="
                mx-auto
                mt-20
                max-w-3xl
                text-center
                lg:mt-32
              "
            >

              <h2
                className="
                  text-3xl
                  font-bold
                  uppercase
                  tracking-[0.30em]
                  lg:text-4xl
                "
              >
                Ingly
              </h2>

              <div className="mx-auto mt-5 h-px w-16 bg-primary lg:mt-6 lg:w-20" />

              <p
                className="
                  mt-7
                  text-lg
                  leading-8
                  text-muted-foreground
                  lg:mt-10
                  lg:text-xl
                  lg:leading-9
                "
              >
                Elegância em cada detalhe.
              </p>

              <p
                className="
                  mt-5
                  text-base
                  leading-7
                  text-muted-foreground
                  lg:mt-6
                  lg:text-lg
                  lg:leading-8
                "
              >
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