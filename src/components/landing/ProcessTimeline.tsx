const steps = [
  {
    number: "1",
    title: "Set up your experts' hubs",
    description:
      "Create a dedicated hub for each expert on your domain. Build their profile and bio, consolidate past coverage, and migrate existing blogs and insights so you start with instant credibility.",
  },
  {
    number: "2",
    title: "Capture insights and create content",
    description:
      "Each month, we extract fresh thinking from your experts in a time-efficient way. We shape it into high-quality articles and newsletter-ready formats, with clear sign-off on topics, tone, and messaging.",
  },
  {
    number: "3",
    title: "Publish, distribute, and grow the audience",
    description:
      "We publish to each hub and send as a structured newsletter. Promote via social cross-posting, targeted ads, and retargeting to drive traffic, increase sign-ups, and convert attention into warm leads.",
  },
  {
    number: "4",
    title: "Enrich the hub as you scale",
    description:
      "When your experts are ready, we can expand beyond written insights with richer formats, including video, podcast content, and media coverage, to deepen credibility and accelerate growth.",
  },
];

const ProcessTimeline = () => {
  return (
    <section id="how-it-works" className="bg-background py-20">
      <div className="container">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
          Live in weeks. Updated forever.
        </h2>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary text-sm font-bold text-primary">
                {step.number}
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
