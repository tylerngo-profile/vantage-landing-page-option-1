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
    <section id="about" className="bg-background py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary md:text-sm">
            Why this matters
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Built on a decade of thought leadership know-how
            <span className="text-[#5000ff]">.</span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Vantage is built by Profile, an award-winning thought leadership and
            PR agency. We’ve seen what works: strong, consistent executive
            insight drives attention, trust, and revenue.
          </p>

          <div className="mt-8 space-y-6">
            {points.map((point) => (
              <p key={point.title} className="text-lg leading-relaxed text-foreground md:text-xl">
                <strong>{point.title}</strong> {point.body}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <Button size="lg" className="bg-primary text-white hover:bg-primary-hover">
              Book a demo and see how Vantage could look on your domain
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
