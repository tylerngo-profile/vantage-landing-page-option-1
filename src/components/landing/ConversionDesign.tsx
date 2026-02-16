const points = [
  {
    title: "Clear CTAs, frictionless sign-up",
    description:
      "Turn one-time visits into ongoing subscriber relationships.",
  },
  {
    title: "No distractions",
    description:
      "A clean, expertise-first experience built for professional services and B2B firms.",
  },
  {
    title: "Improves over time",
    description:
      "Data-led optimisation based on what your audience actually reads, clicks, and signs up for.",
  },
];

const ConversionDesign = () => {
  return (
    <section className="bg-background py-20">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Simple, brand-lite design engineered for B2B conversion.
        </h2>

        <div className="mt-10 space-y-8">
          {points.map((p) => (
            <div key={p.title} className="border-l-2 border-primary/30 pl-5">
              <h3 className="text-base font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConversionDesign;
