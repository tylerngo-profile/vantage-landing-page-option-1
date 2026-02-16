import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="bg-[#090e2c] py-16">
      <div className="container text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Ready to turn expert insight into pipeline?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-white/80">
          See how Vantage could look on your domain. Book a short demo with our
          team.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary-hover"
          >
            Book a demo
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="border border-white/60 bg-transparent text-white hover:bg-primary/10 hover:text-white"
          >
            See an example hub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
