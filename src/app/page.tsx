import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";

import { Hero } from "@/features/home/Hero";
import { FeaturedProducts } from "@/features/home/FeaturedProducts";
import { Categories } from "@/features/home/Categories";
import { WhyChoose } from "@/features/home/WhyChoose";
import { Gallery } from "@/features/home/Gallery";

export default function HomePage() {
  return (
    <Page>
      <Header />

      <main className="flex-1">
        <Hero />

        <FeaturedProducts />

        <Categories />

        <WhyChoose />

        <Gallery />
      </main>
    </Page>
  );
}
