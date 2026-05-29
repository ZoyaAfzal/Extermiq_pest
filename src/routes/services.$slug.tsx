import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageWrapper, PageHeader } from "@/components/site/PageWrapper";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetail,
  loader: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = SERVICES.find((x) => x.slug === slug)!;
  const Icon = service.icon;

  return (
    <PageWrapper>
      <PageHeader eyebrow="Service" title={service.name} subtitle={service.short} />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <article className="prose-lg max-w-none">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
              <Icon className="h-7 w-7" />
            </span>
            
            <div className="mt-8 aspect-[21/9] overflow-hidden rounded-3xl bg-muted shadow-lg">
              <img 
                src={service.image} 
                alt={service.name}
                className="h-full w-full object-cover"
              />
            </div>

            <h2 className="mt-10 font-display text-3xl font-bold tracking-tight">
              Detailed Overview
            </h2>
            <p className="mt-3 text-muted-foreground">
              {service.description}
            </p>
            
            <h2 className="mt-10 font-display text-3xl font-bold tracking-tight">
              What's included
            </h2>
            <ul className="mt-5 grid gap-2">
              {[
                "Full property inspection & risk assessment",
                "Custom treatment plan tailored to your home",
                "EPA-approved, pet-safe products",
                "Detailed visit report and prevention guidance",
                "Follow-up visit within 30 days at no charge",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-muted-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-sky" /> {f}
                </li>
              ))}
            </ul>
            <h2 className="mt-10 font-display text-3xl font-bold tracking-tight">The Process</h2>
            <p className="mt-3 text-muted-foreground">
              Our {service.name.toLowerCase()} service begins with a thorough diagnostic phase. We identify the source of the issue, entry points, and environmental factors contributing to the problem. We then implement a multi-layered defense strategy designed for maximum effectiveness and long-term prevention.
            </p>
          </article>
          <aside className="rounded-3xl border border-border bg-secondary p-8">
            <div className="font-display text-2xl font-bold tracking-tight">
              Book {service.name}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Same-day slots often available. 2-hour arrival windows.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:scale-[1.02]"
            >
              Request a callback <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>
    </PageWrapper>
  );
}

