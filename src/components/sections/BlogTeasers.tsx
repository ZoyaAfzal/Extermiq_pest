import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/site-data";
import { FadeIn } from "@/components/site/FadeIn";

export function BlogTeasers() {
  return (
    <section className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-sky">
                Insights
              </span>
              <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
                Pest Insights & Tips
              </h2>
            </div>
            <Link to="/blog" className="group inline-flex items-center gap-2 text-sm font-semibold">
              All articles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.05} className="flex h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all hover:-translate-y-1.5 hover:shadow-xl">
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="aspect-[16/10] overflow-hidden bg-muted"
                >
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <span className="inline-block w-fit rounded-full bg-sky/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-sky">
                    {p.category}
                  </span>
                  <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">{p.author}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>{p.date}</span>
                  </div>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                  >
                    <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-foreground transition-colors hover:text-sky">
                      {p.title}
                    </h3>
                  </Link>
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <div className="mt-auto pt-8">
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-sky"
                    >
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

