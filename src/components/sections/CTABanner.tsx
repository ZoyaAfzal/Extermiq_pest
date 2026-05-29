import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SERVICES } from "@/lib/site-data";

export function CTABanner() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <h2 className="max-w-xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
            Have Questions? Contact Extermiq Today.
          </h2>
          <p className="mt-5 max-w-md text-background/70">
            Tell us a bit about your situation and a specialist will reach out within one business
            hour with a transparent estimate.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 4000);
          }}
          className="grid gap-3 rounded-3xl border border-background/10 bg-background/[0.04] p-5 backdrop-blur"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              required
              placeholder="Your name"
              className="h-12 rounded-xl border border-background/15 bg-transparent px-4 text-sm placeholder:text-background/50 focus:border-sky focus:outline-none"
            />
            <input
              required
              type="tel"
              placeholder="Phone number"
              className="h-12 rounded-xl border border-background/15 bg-transparent px-4 text-sm placeholder:text-background/50 focus:border-sky focus:outline-none"
            />
          </div>
          <select
            required
            defaultValue=""
            className="h-12 rounded-xl border border-background/15 bg-transparent px-4 text-sm text-background focus:border-sky focus:outline-none"
          >
            <option value="" disabled className="text-foreground">
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug} className="text-foreground">
                {s.name}
              </option>
            ))}
          </select>
          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="relative h-12 overflow-hidden rounded-xl bg-sky font-semibold text-sky-foreground transition hover:scale-[1.02]"
          >
            <span className="relative z-10 inline-flex items-center justify-center gap-2">
              {submitted ? (
                <>
                  <Check className="h-4 w-4" /> Request sent — we'll be in touch
                </>
              ) : (
                "Send Request"
              )}
            </span>
            <span className="absolute inset-0 shimmer opacity-50" aria-hidden />
          </motion.button>
          <p className="text-xs text-background/50">
            By submitting you agree to our privacy policy. We never share your info.
          </p>
        </form>
      </div>
    </section>
  );
}

