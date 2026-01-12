import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Layers, Users, Target, CheckCircle } from "lucide-react";

const differentiators = [
  {
    icon: Globe,
    title: "Deep African Expertise",
    description: "Strong expertise in African markets, with particular depth in Nigeria and the West African region.",
    points: [
      "Over a decade of experience in African markets",
      "Deep understanding of local political and economic dynamics",
      "Established networks across government, business, and civil society",
      "Contextual knowledge that informs actionable recommendations",
    ],
  },
  {
    icon: Layers,
    title: "Integrated Approach",
    description: "We link research, risk analysis, and strategic communications into cohesive, actionable solutions.",
    points: [
      "Multidisciplinary teams combining diverse expertise",
      "Seamless integration of research, analysis, and strategy",
      "Holistic solutions that address complex challenges",
      "Consistent quality across all service areas",
    ],
  },
  {
    icon: Users,
    title: "Trusted Partnerships",
    description: "A trusted partner to governments, multilaterals, development agencies, and private institutions.",
    points: [
      "Long-term relationships with major institutions",
      "Track record of delivering on complex engagements",
      "Reputation for integrity and reliability",
      "Collaborative approach that prioritizes client success",
    ],
  },
  {
    icon: Target,
    title: "Decision-Focused Outputs",
    description: "Practical, client-tailored outputs designed to inform decisions and drive measurable results.",
    points: [
      "Analysis designed for decision-makers",
      "Clear, actionable recommendations",
      "Outputs tailored to client needs and contexts",
      "Focus on real-world impact and results",
    ],
  },
];

const WhyPSC = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Our Differentiators
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Why Path Strategy Consulting
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What sets PSC apart in delivering value to clients navigating complex environments.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-20">
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center">
                      <item.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {item.description}
                  </p>
                  <ul className="space-y-4">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-square bg-gradient-to-br from-secondary to-secondary/30 rounded-lg flex items-center justify-center">
                    <item.icon className="h-32 w-32 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
            Experience the PSC Difference
          </h2>
          <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Partner with a firm that combines expertise, integrity, and a relentless focus on delivering results.
          </p>
          <Button
            variant="hero"
            size="xl"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <Link to="/contact">
              Engage PSC
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WhyPSC;
