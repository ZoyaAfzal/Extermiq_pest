import { createFileRoute } from "@tanstack/react-router";
import { PageWrapper, PageHeader } from "@/components/site/PageWrapper";
import { BlogTeasers } from "@/components/sections/BlogTeasers";

export const Route = createFileRoute("/blog/")({ component: BlogPage });

function BlogPage() {
  return (
    <PageWrapper>
      <PageHeader
        eyebrow="Blog"
        title="Pest Insights & Tips"
        subtitle="Seasonal guidance and safety-first prevention, straight from our technicians."
      />
      <BlogTeasers />
    </PageWrapper>
  );
}
