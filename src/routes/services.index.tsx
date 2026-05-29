import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageWrapper, PageHeader } from "@/components/site/PageWrapper";
import { FadeIn } from "@/components/site/FadeIn";
import { SERVICES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services/")({ component: ServicesPage });

export function ServicesPage() {
  return (
    <PageWrapper>
      <PageHeader
        eyebrow="Services"
        title="Full-spectrum pest control for every home and business."
        subtitle="Eight specialized programs every one backed by our 30-day guarantee."
      />
      
      <div className="flex flex-col">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          const isEven = i % 2 === 0;
          return (
            <section 
              key={s.slug} 
              id={s.slug} 
              className={cn(
                "py-20 sm:py-32",
                isEven ? "bg-background" : "bg-secondary"
              )}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                  <FadeIn direction={isEven ? "left" : "right"} className={cn(isEven ? "lg:order-first" : "lg:order-last")}>
                    <div className={cn(!isEven && "lg:text-right flex flex-col items-start lg:items-end")}>
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky/10 text-sky mb-6">
                        <Icon className="h-7 w-7" />
                      </span>
                      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                        {s.name}
                      </h2>
                      <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        {s.description}
                      </p>
                      <div className="mt-10 flex flex-wrap items-center gap-6">
                        <Link
                          to="/contact"
                          className="rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background shadow-sm hover:scale-105 transition-transform"
                        >
                          Book this service
                        </Link>
                        <Link 
                          to="/services/$slug" 
                          params={{ slug: s.slug }}
                          className="group/link inline-flex items-center gap-2 text-sm font-bold leading-6 text-foreground hover:text-sky transition-colors"
                        >
                          View technical details 
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </FadeIn>
                  <FadeIn direction={isEven ? "right" : "left"} className={cn(isEven ? "lg:order-last" : "lg:order-first")}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted shadow-2xl ring-1 ring-border">
                      <img 
                        src={s.image} 
                        alt={s.name}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-sky/20 to-transparent mix-blend-multiply" />
                    </div>
                  </FadeIn>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </PageWrapper>
  );
}

