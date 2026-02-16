import { Button } from "@/components/ui/button";

const CredibilitySection = () => {
  return (
    <section id="about" className="bg-background py-20">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Built on a decade of thought leadership know-how.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Vantage is built by Profile, the award-winning thought leadership
              and PR agency.
            </p>
            <p>
              We've seen what works: strong, consistent executive insight wins
              attention, trust, and revenue.
            </p>
            <p>
              But most companies struggle because content is scattered,
              infrequent, and hard to sustain. Vantage fixes that.
            </p>
            <p>
              A dedicated hub on your website, with a clear conversion journey,
              powered by a professional team that keeps content flowing.
            </p>
            <p className="font-medium text-foreground">
              The best of both worlds: owned channel + done-for-you execution.
            </p>
          </div>

          <div className="mt-8">
            <Button size="lg">
              Book a demo and see how Vantage could look on your domain
            </Button>
          </div>
        </div>

        <aside className="space-y-4 rounded-xl border border-border bg-section-alt/70 p-5">
          <div className="rounded-lg border border-border bg-background p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Placeholder proof block
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-md border border-border p-3">
                <p className="text-xs text-muted-foreground">Experts live</p>
                <p className="mt-1 text-lg font-bold text-foreground">12+</p>
              </div>
              <div className="rounded-md border border-border p-3">
                <p className="text-xs text-muted-foreground">Monthly issues</p>
                <p className="mt-1 text-lg font-bold text-foreground">4</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-background p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Placeholder testimonial
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              “Vantage helped us package partner insight into a reliable content
              engine. The process is straightforward and easy for a busy team to
              sustain.”
            </p>
            <p className="mt-3 text-xs font-semibold text-foreground">
              Managing Partner • Professional Services Firm
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CredibilitySection;
