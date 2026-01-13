import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import Differentiators from "@/components/sections/Differentiators";
import ClientsSection from "@/components/sections/Clients";
import CTA from "@/components/sections/CTA";
import { CheckCircle, Award, Globe, Users } from "lucide-react";
import aboutImage from "@/assets/aa.png";

const stats = [
  { value: "10+", label: "Years of Experience", icon: Award },
  { value: "50+", label: "Projects Delivered", icon: CheckCircle },
  { value: "15+", label: "African Countries", icon: Globe },
  { value: "30+", label: "Institutional Clients", icon: Users },
];

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      {/* About Preview Section */}
      <section className="section-padding bg-gradient-to-b from-background to-burgundy-light/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-gold-light text-gold-foreground text-sm font-semibold rounded-full mb-4">
                About PSC
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Decade of Excellence in Research & Advisory
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Since 2013, Path Strategy Consulting has been at the forefront of research and advisory services in Africa. We combine rigorous analytical frameworks with deep local knowledge to deliver insights that drive real-world impact.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our multidisciplinary team brings together expertise in policy analysis, political economy, market research, and strategic communications—enabling us to tackle complex challenges from multiple angles.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-4 bg-card rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <stat.icon className="h-5 w-5 text-primary" />
                      <span className="font-display text-2xl font-bold text-foreground">{stat.value}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Path Strategy Consulting Team" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="font-display text-3xl font-bold">Since 2013</p>
                <p className="text-white/80">Trusted Advisory Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Capabilities />
      <Differentiators />
      <ClientsSection />
      <CTA />
    </Layout>
  );
};

export default Index;
