import { Hero } from "@/components/Hero";
import { PageLayout } from "@/components/PageLayout";

import { PopularProductSection } from "./components/PopularProductSection";
import { AboutSection } from "./components/AboutSection";
import { WhyChooseUs } from "./components/WhyChooseUsSection";

export default function Home() {
  return (
    <PageLayout>
      <Hero backgroundImage="/hero.png">
        <div></div>
      </Hero>
      <PopularProductSection />
      <WhyChooseUs />
      <AboutSection />
    </PageLayout>
  );
}
