import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PLANS } from "@/lib/site-data";
import { FadeIn } from "@/components/site/FadeIn";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const [period, setPeriod] = useState<"monthly" | "annually">("monthly");

  return (
    <section className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-sky">Pricing</span>
            <h2 className="mt-3 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
              Plans Built For Your Needs
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Transparent pricing. No long contracts. Cancel anytime.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 flex justify-center">
          <div className="relative inline-flex rounded-full border border-border bg-background p-1 text-sm font-medium">
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="absolute inset-y-1 w-1/2 rounded-full bg-foreground"
              style={{ left: period === "monthly" ? 4 : "calc(50% - 4px)", right: "auto" }}
            />
            {(["monthly", "annually"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={cn(
                  "relative z-10 px-6 py-2 capitalize transition-colors",
                  period === p ? "text-background" : "text-foreground/70",
                )}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => {
            const price = plan.price[period];
            return (
              <FadeIn key={plan.name} delay={i * 0.06}>
                <div
                  className={cn(
                    "group relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2",
                    plan.featured
                      ? "border-foreground bg-foreground text-background lg:scale-[1.04]"
                      : "border-border bg-background",
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky px-3 py-1 text-xs font-bold uppercase tracking-widest text-sky-foreground">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-bold tracking-tight">{plan.name}</h3>
                  <p
                    className={cn(
                      "mt-2 text-sm",
                      plan.featured ? "text-background/70" : "text-muted-foreground",
                    )}
                  >
                    {plan.description}
                  </p>
                  <div className="mt-6 font-display text-5xl font-bold tracking-tight">
                    {price === null ? "Custom" : <>${price}</>}
                    {price !== null && (
                      <span
                        className={cn(
                          "ml-1 text-base font-medium",
                          plan.featured ? "text-background/60" : "text-muted-foreground",
                        )}
                      >
                        /{period === "monthly" ? "mo" : "yr"}
                      </span>
                    )}
                  </div>
                  <ul className="mt-8 space-y-3 text-sm">
                    {plan.features.map((f, fi) => (
                      <motion.li
                        key={f}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fi * 0.04 }}
                        className="flex items-start gap-2"
                      >
                        <Check
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            plan.featured ? "text-sky" : "text-sky",
                          )}
                        />
                        <span>{f}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={cn(
                      "mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
                      plan.featured
                        ? "bg-sky text-sky-foreground hover:scale-[1.02]"
                        : "bg-foreground text-background hover:scale-[1.02]",
                    )}
                  >
                    {plan.price.monthly === null ? "Talk to sales" : "Get started"}
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

