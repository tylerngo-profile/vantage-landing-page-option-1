import { Globe, PenLine, Mail, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Self-hosted on your domain",
    description:
      "Launch dedicated insight hubs under your own URL. Drive the right visitors to your site and keep them there.",
  },
  {
    icon: PenLine,
    title: "Fully managed content creation",
    description:
      "We extract your executives' thinking and turn it into sharp, engaging content that sounds like them, not marketing.",
  },
  {
    icon: Mail,
    title: "Built-in newsletter",
    description:
      "Convert anonymous traffic into subscribers. Nurture mid-funnel interest into real relationships with the people you want to reach.",
  },
  {
    icon: BarChart3,
    title: "Analytics + integrations",
    description:
      "See what performs and who's engaging. Connect Vantage to your CRM and marketing stack to track impact and follow up faster.",
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="bg-section-alt py-20">
      <div className="container">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
          Your experts' insights are your strongest growth lever.
          <br className="hidden sm:block" />
          <span className="text-primary"> Vantage unlocks them.</span>
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-sm"
            >
              <f.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
