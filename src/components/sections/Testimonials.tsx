import { useState } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { FadeIn } from "@/components/site/FadeIn";

export function Testimonials() {
  const [paused, setPaused] = useState(false);
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  if (!TESTIMONIALS.length) return null;

  return (
    <section className="bg-background py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <FadeIn>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-sky">Reviews</span>
          <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
            What Our Clients Say
          </h2>
        </FadeIn>
      </div>

      <div
        className="mask-fade-x relative cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex w-max gap-6 px-6"
          initial={{ x: 0 }}
          animate={{ x: paused ? undefined : ["0%", "-50%"] }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {items.map((t, i) => (
            <article
              key={i}
              className="group flex w-[380px] shrink-0 flex-col gap-6 rounded-3xl border border-border bg-secondary p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky/30 hover:shadow-lg"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-sky text-sky" />
                ))}
              </div>
              <p className="font-display text-lg leading-snug tracking-tight">
                "{t.quote}"
              </p>
              <div className="mt-auto flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground font-display text-sm font-bold text-background">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

