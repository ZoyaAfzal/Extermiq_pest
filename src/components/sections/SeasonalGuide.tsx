import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SEASONAL } from "@/lib/site-data";
import { FadeIn } from "@/components/site/FadeIn";

const SEASONS = Object.keys(SEASONAL) as Array<keyof typeof SEASONAL>;

export function SeasonalGuide() {
  const [season, setSeason] = useState<keyof typeof SEASONAL>("Spring");

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <span className="text-xs font-medium uppercase tracking-widest text-sky">Guide</span>
          <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
            Seasonal Pest Control Tips
          </h2>
        </FadeIn>

        <Tabs
          value={season}
          onValueChange={(v) => setSeason(v as keyof typeof SEASONAL)}
          className="mt-12"
        >
          <TabsList className="relative inline-flex h-12 rounded-full border border-border bg-secondary p-1">
            {SEASONS.map((s) => (
              <TabsTrigger
                key={s}
                value={s}
                className="relative z-10 rounded-full px-5 data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none"
              >
                {s}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={season}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <TabsContent value={season} forceMount className="mt-8">
                <Accordion type="single" collapsible defaultValue="0" className="rounded-2xl border border-border bg-secondary">
                  {SEASONAL[season].map((pest, i) => (
                    <AccordionItem
                      key={pest.name}
                      value={String(i)}
                      className="border-b border-border px-6 last:border-b-0"
                    >
                      <AccordionTrigger className="py-5 font-display text-xl font-semibold tracking-tight hover:no-underline">
                        <span className="flex items-center gap-3">
                          <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-sky text-xs font-bold text-sky-foreground">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {pest.name}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <p className="text-muted-foreground">{pest.desc}</p>
                        <motion.ul
                          initial="hidden"
                          animate="show"
                          variants={{ show: { transition: { staggerChildren: 0.05 } } }}
                          className="mt-4 grid gap-2"
                        >
                          {pest.tips.map((t) => (
                            <motion.li
                              key={t}
                              variants={{
                                hidden: { opacity: 0, x: -10 },
                                show: { opacity: 1, x: 0 },
                              }}
                              className="flex items-start gap-2 text-sm"
                            >
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky" /> {t}
                            </motion.li>
                          ))}
                        </motion.ul>
                        <Link
                          to="/contact"
                          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
                        >
                          Book Treatment <ArrowRight className="h-4 w-4" />
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}

