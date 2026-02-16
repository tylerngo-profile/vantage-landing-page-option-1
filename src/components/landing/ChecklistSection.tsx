import { Check } from "lucide-react";

const items = [
  "A proven, time-efficient process to capture insights from senior leaders",
  "An expert editorial team that writes in each executive's distinctive tone of voice",
  "Content structured for conversion: articles + newsletters designed to drive sign-ups and repeat engagement",
];

const ChecklistSection = () => {
  return (
    <section className="subtle-brand-bg bg-background py-20">
      <div className="container max-w-2xl">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Consistent executive content, without chasing busy people
          <span className="text-[#5000ff]">.</span>
        </h2>

        <ul className="mt-10 space-y-5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
              </span>
              <span className="text-base leading-relaxed text-muted-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ChecklistSection;
