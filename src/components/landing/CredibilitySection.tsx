import { Button } from "@/components/ui/button";

const CredibilitySection = () => {
  return (
    <section id="about" className="bg-section-alt py-20">
      <div className="container max-w-2xl">
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
    </section>
  );
};

export default CredibilitySection;
