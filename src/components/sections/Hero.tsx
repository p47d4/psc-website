import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import homeImage from "@/assets/ab.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-burgundy-light/50 via-background to-gold-light/30">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
              Research & Advisory Since 2013
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
              Insight. Strategy.<br />
              <span className="text-primary">Impact.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Providing actionable insights and strategic solutions to organizations operating in complex political, economic, and market environments across Africa.
            </p>
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Evidence-based research and analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-gold" />
                <span className="text-foreground">Deep expertise in African markets</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-navy" />
                <span className="text-foreground">Trusted by governments and institutions</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Engage PSC
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <img 
                src={homeImage} 
                alt="Path Strategy Consulting" 
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                <p className="font-display text-3xl font-bold">10+</p>
                <p className="text-white/80">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-1/4 h-1/3 bg-gradient-to-r from-gold/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
