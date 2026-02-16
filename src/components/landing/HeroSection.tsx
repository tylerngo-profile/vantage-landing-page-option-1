import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="border-b bg-gradient-to-b from-section-alt to-background py-16 md:py-24">
      <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary/80">
            Insight-led platform for in-house experts
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.18] tracking-[-0.01em] text-foreground md:text-[3.05rem] lg:text-[3.35rem]">
            The insight hub for your in-house experts
            <span className="text-[#2f5cc8]">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Vantage houses insight-led content for your internal experts, with
            done-for-you creation, newsletter sign-up, and analytics built in.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="rounded-full bg-[#4f1dff] px-5 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
              Launch in weeks
            </span>
            <span className="rounded-full bg-[#4f1dff] px-5 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
              Publish consistently
            </span>
            <span className="rounded-full bg-[#4f1dff] px-5 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
              Own your audience
            </span>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Button size="lg">Book a demo</Button>
            <Button variant="outline" size="lg">
              See an example hub
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
          <div className="rounded-lg border border-border/80 bg-background p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Example expert hub preview
              </span>
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                Placeholder
              </span>
            </div>

            <div className="aspect-[4/3] rounded-md border border-dashed border-border bg-section-alt/60 p-4">
              <div className="h-3 w-2/3 rounded bg-primary/20" />
              <div className="mt-3 h-2 w-full rounded bg-muted" />
              <div className="mt-2 h-2 w-5/6 rounded bg-muted" />
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="h-20 rounded border border-border bg-background" />
                <div className="h-20 rounded border border-border bg-background" />
              </div>
              <div className="mt-3 h-14 rounded border border-border bg-background" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-left">
            <div className="rounded-md border border-border/80 bg-background p-3">
              <p className="text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
                Subscriber growth
              </p>
              <p className="mt-1 text-lg font-bold text-foreground">+28%</p>
            </div>
            <div className="rounded-md border border-border/80 bg-background p-3">
              <p className="text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
                Repeat visits
              </p>
              <p className="mt-1 text-lg font-bold text-foreground">2.4x</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
