import { Link } from "@tanstack/react-router";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { FadeIn } from "@/components/site/FadeIn";

export function ServicesCarousel() {
  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (paused) return;
    const speed = 40; // px / s
    const next = x.get() - (speed * delta) / 1000;
    const w = wrapRef.current?.scrollWidth ?? 0;
    const half = w / 2;
    x.set(half && next <= -half ? 0 : next);
  });

  const items = [...SERVICES, ...SERVICES];
  const translate = useTransform(x, (v) => `translateX(${v}px)`);

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-sky">
                What we do
              </span>
              <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
                Expert Pest Control Services
              </h2>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold"
            >
              View all services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeIn>
      </div>

      <div
        className="mask-fade-x relative mt-12 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          ref={wrapRef}
          style={{ transform: translate }}
          className="flex w-max gap-5 px-6"
        >
          {items.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={i}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative flex w-[300px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-secondary transition-all duration-200 hover:-translate-y-1.5 hover:border-sky"
              >
                <div className="relative h-44 overflow-hidden bg-foreground/5">
                  <img 
                    src={s.image} 
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
                  <div className="absolute left-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background shadow-sm">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 font-display text-2xl font-bold leading-tight tracking-tight text-white drop-shadow-md">
                    {s.name}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <p className="text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

