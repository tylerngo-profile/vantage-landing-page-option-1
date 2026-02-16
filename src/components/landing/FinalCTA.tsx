import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container text-center">
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
          Ready to turn expert insight into pipeline?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/80">
          See how Vantage could look on your domain. Book a short demo with our
          team.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Book a demo
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="border border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            See an example hub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
