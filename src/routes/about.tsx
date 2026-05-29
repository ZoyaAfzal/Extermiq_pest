import { createFileRoute } from "@tanstack/react-router";
import { PageWrapper, PageHeader } from "@/components/site/PageWrapper";
import { AboutBento } from "@/components/sections/AboutBento";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <PageWrapper>
      <PageHeader
        eyebrow="About us"
        title="A team of certified specialists building safer homes."
        subtitle="Founded in 2011, Extermiq has grown from a single technician to a team of 50+ — all sharing one commitment to safety, transparency, and results."
      />
      <AboutBento />
      <CTABanner />
    </PageWrapper>
  );
}
