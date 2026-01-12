import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container-wide text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
          Ready to Navigate Complexity?
        </h2>
        <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto mb-10">
          Partner with PSC for evidence-based insights and strategic solutions that drive real impact.
        </p>
        <Button
          variant="hero"
          size="xl"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          asChild
        >
          <Link to="/contact">
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
