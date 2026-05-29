import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageWrapper } from "@/components/site/PageWrapper";
import { BLOG_POSTS } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogDetail,
  loader: ({ params }) => {
    const p = BLOG_POSTS.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
});

function BlogDetail() {
  const { slug } = Route.useParams();
  const post = BLOG_POSTS.find((x) => x.slug === slug)!;

  return (
    <PageWrapper>
      <article className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-sky">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
        
        <header className="mt-8">
          <span className="inline-block rounded-full bg-sky/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-foreground">
            {post.category}
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center font-bold text-foreground">
              {post.author[0]}
            </div>
            <div>
              <div className="font-semibold text-foreground">{post.author}</div>
              <div>{post.date} · {post.readTime}</div>
            </div>
          </div>
        </header>

        <div className="mt-12 aspect-[21/9] overflow-hidden rounded-3xl bg-muted shadow-lg">
          <img 
            src={post.image} 
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="prose prose-lg mt-12 max-w-none text-muted-foreground prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-strong:text-foreground">
          <p className="text-xl font-medium text-foreground leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="mt-10 space-y-6 leading-7">
            <h2 className="text-3xl">Protecting your environment</h2>
            <p>
              In the world of professional pest management, understanding the biology and behavior of our targets is key. Whether it's the seasonal migration of ants or the silent threat of termites, a proactive approach always outperforms a reactive one.
            </p>
            
            <h3 className="text-2xl mt-8">What our experts recommend</h3>
            <p>
              For "{post.title.toLowerCase()}", we emphasize a three-step protocol: inspection, identification, and integrated management. By focusing on environmental modifications like sealing entry points and moisture control, we reduce the need for heavy chemical applications while achieving superior results.
            </p>

            <blockquote className="border-l-4 border-sky pl-6 italic text-foreground text-lg py-4 bg-secondary/50 rounded-r-2xl">
              "Pest control isn't just about the treatment you see today; it's about the safety and integrity of your home for years to come."
            </blockquote>

            <p>
              Our technicians are constantly training on the latest EPA-approved methods to ensure that your family and pets are always our top priority. If you've noticed signs of activity mentioned in this article, don't wait for the problem to escalate.
            </p>
          </div>
          
        </div>
      </article>
    </PageWrapper>
  );
}

