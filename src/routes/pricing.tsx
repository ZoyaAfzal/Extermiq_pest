import { createFileRoute } from "@tanstack/react-router";
import { PageWrapper, PageHeader } from "@/components/site/PageWrapper";
import { PricingSection } from "@/components/sections/Pricing";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/pricing")({ component: PricingPage });

function PricingPage() {
  return (
    <PageWrapper>
      <PageHeader
        eyebrow="Pricing"
        title="Honest pricing for serious peace of mind."
        subtitle="No long contracts. No surprise fees. Cancel anytime."
      />
      <PricingSection />
      <CTABanner />
    </PageWrapper>
  );
}
