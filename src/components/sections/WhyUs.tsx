import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, ShieldCheck, Zap, BadgeCheck, Check } from "lucide-react";
import { FadeIn } from "@/components/site/FadeIn";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Certified & Safe",
    children: [
      "EPA-approved chemicals only",
      "Pet-safe treatment protocols",
      "Child-safe application standards",
    ],
  },
  {
    icon: Zap,
    title: "Fast Response",
    children: [
      "Same-day booking available",
      "Two-hour arrival window",
      "24/7 emergency callouts",
    ],
  },
  {
    icon: BadgeCheck,
    title: "Guaranteed Results",
    children: [
      "30-day re-treatment guarantee",
      "Free follow-up visits",
      "Money-back pledge if pests return",
    ],
  },
];

export function WhyUs() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-8">
        <FadeIn>
          <span className="text-xs font-medium uppercase tracking-widest text-sky">
            Why us
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
            Why Homeowners Trust Us
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Every visit is backed by certification, speed, and a written guarantee. Here's what
            that looks like in practice.
          </p>
        </FadeIn>

        <FadeIn>
          <ul className="rounded-2xl border border-border bg-background">
            {ITEMS.map((item, i) => {
              const isOpen = open === i;
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className={`group relative border-b border-border last:border-b-0 ${isOpen ? "bg-sky/[0.06]" : ""}`}
                >
                  {isOpen && (
                    <span className="absolute inset-y-0 left-0 w-[3px] bg-sky" aria-hidden />
                  )}
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center gap-4 px-6 py-6 text-left"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1 font-display text-xl font-semibold tracking-tight">
                      {item.title}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.ul
                          initial="hidden"
                          animate="show"
                          variants={{ show: { transition: { staggerChildren: 0.05 } } }}
                          className="grid gap-2 px-6 pb-6 pl-[5.5rem]"
                        >
                          {item.children.map((c) => (
                            <motion.li
                              key={c}
                              variants={{
                                hidden: { opacity: 0, x: -12 },
                                show: { opacity: 1, x: 0 },
                              }}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                              {c}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

