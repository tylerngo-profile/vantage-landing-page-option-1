import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container max-w-3xl text-center">
        <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-[3.25rem]">
          The insight hub for your in-house experts.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Vantage houses insight-led content for your internal experts, with
          done-for-you creation, newsletter sign-up, and analytics built in.
        </p>
        <p className="mt-4 text-base font-medium text-foreground/80">
          Launch in weeks. Publish consistently. Own the audience on your domain.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg">Book a demo</Button>
          <Button variant="outline" size="lg">
            See an example hub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
