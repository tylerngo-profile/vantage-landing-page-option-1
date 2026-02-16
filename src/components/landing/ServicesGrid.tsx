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
            Written content is just the start. Scale your executive presence
            when you're ready.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Vantage gives you a platform now, plus a team you can plug into
            later.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border bg-card p-6"
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
