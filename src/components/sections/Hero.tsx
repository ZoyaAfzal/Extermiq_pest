import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Play, ArrowRight, Sparkles, Video } from "lucide-react";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import hero from "@/assets/hero-tech.jpg";

const HEADLINE = "Your Home's Best Defense Against Pests";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -60]);
  const words = HEADLINE.split(" ");
  const [open, setOpen] = useState(false);

  return (
    <section ref={ref} className="relative overflow-hidden bg-secondary">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-24 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-32">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-sky" />
            Pest-Free Living Starts Here
            <span className="absolute inset-0 shimmer opacity-60" aria-hidden />
          </motion.span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.65,
                    delay: 0.1 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + words.length * 0.07 }}
            className="mt-6 max-w-xl text-balance text-lg text-muted-foreground"
          >
            Professional, eco-conscious pest control trusted by 5,000+ homes. Same-day booking,
            transparent pricing, and a 30-day guarantee.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 + words.length * 0.07 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all hover:scale-[1.03] hover:shadow-[0_0_0_3px_rgba(132,204,22,0.35)]"
            >
              Contact Us Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button 
                  className="group inline-flex items-center gap-3 rounded-full border border-border bg-background px-5 py-3.5 text-sm font-semibold text-foreground transition hover:border-foreground"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky text-sky-foreground transition-transform group-hover:rotate-12">
                    <Play className="h-3.5 w-3.5 fill-current" />
                  </span>
                  Watch Video
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Select your video</DialogTitle>
                  <DialogDescription>
                    Explore our services through these short introductory videos.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 sm:grid-cols-2">
                  {[
                    "Our Mission",
                    "Service Overview",
                    "Safety Protocols",
                    "Expert Tips",
                  ].map((v) => (
                    <div
                      key={v}
                      className="group relative flex aspect-video cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl bg-secondary p-4 transition-colors hover:bg-sky/10"
                    >
                      <Video className="mb-2 h-8 w-8 text-muted-foreground transition-colors group-hover:text-sky" />
                      <span className="text-sm font-semibold">{v}</span>
                      <div className="absolute inset-0 flex items-center justify-center bg-background/90 opacity-0 transition-opacity group-hover:opacity-100">
                        <span className="text-xs font-bold uppercase tracking-widest text-sky">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>

        <motion.div style={{ y }} className="relative">
          <div className="group relative overflow-hidden rounded-3xl bg-background shadow-2xl ring-1 ring-border">
            <img
              src={hero}
              alt="Extermiq pest control technician in protective gear"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-sky/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-background/85 px-4 py-3 backdrop-blur-md">
              <div>
                <div className="font-display text-sm font-semibold">Certified Technicians</div>
                <div className="text-xs text-muted-foreground">EPA & state-licensed crews</div>
              </div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky text-sky-foreground">
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <TrustBar />
    </section>
  );
}

const TRUST = [
  "Certified Technicians",
  "Eco-Safe Treatments",
  "24/7 Support",
  "5-Star Rated",
  "Pet-Friendly",
  "Same-Day Booking",
  "30-Day Guarantee",
  "EPA Approved",
];

function TrustBar() {
  return (
    <div className="relative border-y border-border bg-background py-5">
      <div className="mask-fade-x overflow-hidden">
        <motion.div
          className="flex w-max gap-12 whitespace-nowrap px-6 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...TRUST, ...TRUST].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-sky" />
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

