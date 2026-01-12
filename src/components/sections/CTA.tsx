import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-burgundy-dark to-navy" />
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      
      <div className="container-wide text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Navigate Complexity?
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
          Partner with PSC for evidence-based insights and strategic solutions that drive real impact.
        </p>
        <Button
          variant="hero"
          size="xl"
          className="bg-gold text-white hover:bg-gold/90 shadow-xl"
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
