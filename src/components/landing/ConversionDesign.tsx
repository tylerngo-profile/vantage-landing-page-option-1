import { Check } from "lucide-react";

const points = [
  {
    lead: "Clear CTAs, frictionless sign-up.",
    rest: "Turn one-time visits into ongoing subscriber relationships.",
  },
  {
    lead: "No distractions.",
    rest: "A clean, expertise-first experience built for professional services and B2B firms.",
  },
  {
    lead: "Improves over time.",
    rest: "Data-led optimisation based on what your audience actually reads, clicks, and signs up for.",
  },
];

const ConversionDesign = () => {
  return (
    <section className="subtle-brand-bg bg-background py-20">
      <div className="container grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="lg:order-2">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Simple, brand-lite design engineered for B2B conversion
            <span className="text-[#5000ff]">.</span>
          </h2>

          <div className="mt-8 space-y-7">
            {points.map((p) => (
              <div key={p.lead} className="flex items-start gap-4">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00c21a]">
                  <Check className="h-5 w-5 text-white" strokeWidth={3} />
                </span>
                <p className="text-[1.08rem] leading-relaxed text-foreground md:text-[1.12rem]">
                  <span className="font-bold">{p.lead}</span>{" "}
                  <span className="font-normal text-foreground">{p.rest}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-xl border border-border bg-section-alt/70 p-4 md:p-5 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Experience preview
          </p>

          <div className="mt-4 rounded-xl border border-border/80 bg-background p-4 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-2.5 w-24 rounded bg-primary/20" />
              <div className="h-7 w-20 rounded-full bg-primary/10" />
            </div>
            <div className="rounded-lg border border-dashed border-border p-3">
              <div className="h-2 w-3/4 rounded bg-muted" />
              <div className="mt-2 h-2 w-2/3 rounded bg-muted" />
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-16 rounded border border-border bg-background" />
                <div className="h-16 rounded border border-border bg-background" />
              </div>
              <div className="mt-2 h-12 rounded border border-border bg-background" />
            </div>
          </div>

          <div className="relative mx-auto mt-6 w-[230px] rounded-[1.4rem] border border-border bg-background p-2 shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
            <div className="rounded-[1rem] border border-border bg-section-alt/60 p-3">
              <div className="mb-2 h-2 w-16 rounded bg-primary/25" />
              <div className="space-y-2">
                <div className="h-8 rounded-md border border-border bg-background" />
                <div className="h-8 rounded-md border border-border bg-background" />
                <div className="h-8 rounded-md border border-border bg-background" />
              </div>
              <div className="mt-3 h-8 rounded-md bg-primary/85" />
            </div>
            <div className="absolute -right-10 top-10 hidden h-16 w-16 rounded-full bg-primary/10 blur-xl sm:block" />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ConversionDesign;
