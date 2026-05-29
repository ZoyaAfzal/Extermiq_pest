import { FadeIn } from "@/components/site/FadeIn";
import { CountUp } from "@/components/site/CountUp";
import team from "@/assets/team.jpg";

const STATS = [
  { value: 15, suffix: "+", label: "Years of service" },
  { value: 5000, suffix: "+", label: "Homes treated" },
  { value: 50, suffix: "+", label: "Trained technicians" },
  { value: 98, suffix: "%", label: "Customer satisfaction" },
];

export function AboutBento() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <span className="text-xs font-medium uppercase tracking-widest text-sky">About</span>
          <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
            Our Purpose, Your Protection
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={team}
                alt="Extermiq team inspecting a modern home"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </FadeIn>

          <div className="grid gap-5 lg:col-span-2">
            <FadeIn>
              <div className="rounded-3xl bg-foreground p-8 text-background">
                <p className="font-display text-2xl font-medium leading-snug tracking-tight">
                  We treat every home like our own with respect for your family, your pets, and
                  the environment.
                </p>
                <p className="mt-5 text-sm text-background/70">
                  The Extermiq team
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 gap-5">
              {STATS.map((s, i) => (
                <FadeIn key={s.label} delay={i * 0.05}>
                  <div className="rounded-3xl border border-border bg-secondary p-6">
                    <div className="font-display text-4xl font-bold tracking-tight">
                      <CountUp to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

