import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUp, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, NAV_LINKS, SERVICES } from "@/lib/site-data";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative">
      <div className="bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="max-w-md">
            <Logo light />
            <p className="mt-5 text-background/70">
              {SITE.tagline}. Trusted by 5,000+ homes and businesses.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="self-end">
            <label className="font-display text-2xl font-semibold tracking-tight">
              Get pest tips, monthly.
            </label>
            <p className="mt-2 text-sm text-background/70">
              Seasonal alerts and prevention checklists. No spam.
            </p>
            <div className="group mt-5 flex items-center gap-2 border-b border-background/30 py-2 focus-within:border-sky">
              <input
                type="email"
                required
                placeholder="you@home.com"
                className="w-full bg-transparent text-background placeholder:text-background/50 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky text-sky-foreground transition-transform group-focus-within:translate-x-1 hover:scale-110"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <FooterCol title="Quick links">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} to={l.href} className="hover:text-foreground">
                {l.label}
              </Link>
            ))}
          </FooterCol>
          <FooterCol title="Services">
            {SERVICES.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="hover:text-foreground"
              >
                {s.name}
              </Link>
            ))}
          </FooterCol>
          <FooterCol title="Contact">
            <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
              {SITE.email}
            </a>
          </FooterCol>
          <FooterCol title="Follow">
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:scale-110 hover:border-sky hover:text-sky"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </FooterCol>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl items-center justify-end px-4 py-6 text-xs text-muted-foreground sm:px-6 lg:px-8">
            <a 
              href="https://axistechgroup.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-medium transition-colors hover:text-sky"
            >
              Powered by AxisTechGroup
            </a>
          </div>
        </div>
      </div>

      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 text-sm text-muted-foreground">
      <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
        {title}
      </h4>
      {children}
    </div>
  );
}

