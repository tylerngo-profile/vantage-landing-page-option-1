import { FileText, Share2, Video, Newspaper } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Written insights",
    description:
      "Regular articles and newsletters that build authority and demand.",
  },
  {
    icon: Share2,
    title: "Social media",
    description:
      "Amplify each executive's content to reach the right audience consistently.",
  },
  {
    icon: Video,
    title: "Video",
    description:
      "Bring insights to life and deepen connection with prospects.",
  },
  {
    icon: Newspaper,
    title: "Media coverage",
    description:
      "Add third-party credibility that accelerates trust and boosts conversion.",
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-section-alt py-20">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Written content is just the start<span className="text-[#5000ff]">.</span> Scale your executive presence
            when you're ready
            <span className="text-[#5000ff]">.</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Vantage gives you a platform now, plus a team you can plug into
            later.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Article layout placeholder",
            "Newsletter preview placeholder",
            "Video module placeholder",
            "Media mention placeholder",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-border/80 bg-background p-3"
            >
              <div className="aspect-[16/10] rounded-md border border-dashed border-border bg-section-alt/60" />
              <p className="mt-2 text-xs text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-border/90 bg-card p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
            >
              <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
