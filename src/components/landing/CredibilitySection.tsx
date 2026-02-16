import { Button } from "@/components/ui/button";

const points = [
  {
    title: "Most teams struggle to stay consistent.",
    body: "Content is often scattered, infrequent, and hard to sustain.",
  },
  {
    title: "Vantage brings everything into one place.",
    body: "A dedicated thought leadership hub on your website keeps your message clear and focused.",
  },
  {
    title: "Every piece leads somewhere.",
    body: "A clear conversion journey turns readers into real opportunities.",
  },
  {
    title: "You get an expert team behind it.",
    body: "Professional support keeps high-quality content flowing—without adding pressure to your internal team.",
  },
];

const CredibilitySection = () => {
  return (
    <section id="about" className="subtle-brand-bg bg-background py-20">
      <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary md:text-sm">
            Why this matters
          </p>

          <h2 className="mt-3 text-2xl font-semibold leading-tight text-foreground md:text-4xl">
            Built on a decade of thought leadership know-how
            <span className="text-[#5000ff]">.</span>
          </h2>

          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
            Vantage is built by Profile, an award-winning thought leadership and
            PR agency. We’ve seen what works: strong, consistent executive
            insight drives attention, trust, and revenue.
          </p>

          <div className="mt-8 space-y-5">
            {points.map((point) => (
              <p key={point.title} className="text-lg leading-relaxed text-foreground">
                <span className="font-semibold">{point.title}</span> {point.body}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <Button size="lg" className="bg-primary text-white hover:bg-primary-hover">
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
