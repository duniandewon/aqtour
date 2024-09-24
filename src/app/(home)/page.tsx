import { Hero } from "@/components/Hero";
import { PageLayout } from "@/components/PageLayout";

import { PopularProductSection } from "./components/PopularProductSection";
import { AboutSection } from "./components/AboutSection";

export default function Home() {
  return (
    <PageLayout>
      <Hero backgroundImage="/hero.png">hello</Hero>
      <PopularProductSection />
      <AboutSection />
    </PageLayout>
  );
}
