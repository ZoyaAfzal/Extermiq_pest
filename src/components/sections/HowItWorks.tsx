import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Calendar, Search, ClipboardList, RefreshCcw } from "lucide-react";
import { FadeIn } from "@/components/site/FadeIn";

const STEPS = [
  { icon: Calendar, title: "Book Online", desc: "Pick a time that works. Same-day slots available." },
  { icon: Search, title: "Inspection Visit", desc: "A certified tech assesses every entry point and risk." },
  { icon: ClipboardList, title: "Custom Treatment Plan", desc: "Targeted, eco-conscious treatment built for your home." },
  { icon: RefreshCcw, title: "Guaranteed Follow-Up", desc: "Free re-treatment within 30 days if pests return." },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 30%"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <span className="text-xs font-medium uppercase tracking-widest text-sky">Process</span>
          <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
            Pest-Free in 4 Simple Steps
          </h2>
        </FadeIn>

        <div ref={ref} className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <ol className="relative space-y-10 pl-12">
            <span
              className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-border"
              aria-hidden
            />
            <motion.span
              style={{ height: lineH }}
              className="absolute left-5 top-2 w-px bg-foreground"
              aria-hidden
            />
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeIn as="li" key={s.title} delay={i * 0.05}>
                  <div className="relative">
                    <span className="absolute -left-12 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky text-sky-foreground ring-8 ring-secondary">
                      <Icon className="h-5 w-5" />
                      <span className="absolute inset-0 animate-ping rounded-full bg-sky/40" />
                    </span>
                    <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Step {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-md text-muted-foreground">{s.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </ol>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-background p-10">
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-sky/30 blur-3xl" />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky" />
                    Average completion
                  </span>
                  <div className="mt-6 font-display text-7xl font-bold tracking-tight">
                    48<span className="text-sky">h</span>
                  </div>
                  <p className="mt-3 text-muted-foreground">
                    From first call to first treatment. Most homes see complete resolution within
                    two weeks.
                  </p>
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {STEPS.map((s) => {
                      const Icon = s.icon;
                      return (
                        <div
                          key={s.title}
                          className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-secondary"
                        >
                          <Icon className="h-5 w-5" />
                          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                            {s.title.split(" ")[0]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

