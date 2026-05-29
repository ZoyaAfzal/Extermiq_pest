import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

import { PageWrapper } from "@/components/site/PageWrapper";
import { Hero } from "@/components/sections/Hero";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";
import { WhyUs } from "@/components/sections/WhyUs";
import { AboutBento } from "@/components/sections/AboutBento";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SeasonalGuide } from "@/components/sections/SeasonalGuide";
import { PricingSection } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogTeasers } from "@/components/sections/BlogTeasers";
import { CTABanner } from "@/components/sections/CTABanner";

function Index() {
  return (
    <PageWrapper>
      <Hero />
      <ServicesCarousel />
      <WhyUs />
      <AboutBento />
      <HowItWorks />
      <SeasonalGuide />
      <PricingSection />
      <Testimonials />
      <BlogTeasers />
      <CTABanner />
    </PageWrapper>
  );
}
