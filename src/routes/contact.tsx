import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Check, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { PageWrapper, PageHeader } from "@/components/site/PageWrapper";
import { SITE, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  return (
    <PageWrapper>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what's bugging you."
        subtitle="We typically reply within one business hour. Send us a message below."
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("loading");
              setTimeout(() => setStatus("done"), 1200);
            }}
            className="grid gap-5 rounded-3xl border border-border bg-secondary p-8"
          >
            <FloatingInput label="Full name" name="name" required />
            <div className="grid gap-5 sm:grid-cols-2">
              <FloatingInput label="Email" name="email" type="email" required />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Service type
              </label>
              <select
                defaultValue=""
                required
                className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm focus:border-foreground focus:outline-none"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <FloatingInput label="Preferred date" name="date" type="date" />
            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none"
                placeholder="Tell us what you're seeing…"
              />
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              disabled={status === "loading"}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-foreground font-semibold text-background transition hover:scale-[1.01] disabled:opacity-70"
            >
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "done" && <Check className="h-4 w-4" />}
              {status === "idle" && "Send message"}
              {status === "loading" && "Sending…"}
              {status === "done" && "Message sent"}
            </motion.button>
          </form>

          <aside className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Map"
                src="https://maps.google.com/maps?q=Austin%20TX&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="aspect-square w-full grayscale"
              />
            </div>
            <div className="grid gap-4 rounded-3xl border border-border bg-secondary p-6">
              {[
                { Icon: Mail, label: SITE.email },
              ].map(({ Icon, label }) => (
                <div key={label} className="group flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-background transition group-hover:scale-110 group-hover:text-sky">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </PageWrapper>
  );
}

function FloatingInput({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="group relative block">
      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition group-focus-within:text-foreground">
        {label}
      </span>
      <input
        {...props}
        className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm focus:border-foreground focus:outline-none"
      />
    </label>
  );
}

