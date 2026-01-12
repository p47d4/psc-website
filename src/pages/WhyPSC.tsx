import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
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
    color: "primary",
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
    color: "gold",
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
    color: "navy",
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
    color: "primary",
  },
];

const colorMap = {
  primary: { bg: "bg-primary", text: "text-primary" },
  gold: { bg: "bg-gold", text: "text-gold" },
  navy: { bg: "bg-navy", text: "text-navy" },
};

const WhyPSC = () => {
  return (
    <Layout>
      <PageHeader
        label="Our Differentiators"
        title="Why Path Strategy Consulting"
        description="What sets PSC apart in delivering value to clients navigating complex environments."
      />

      {/* Differentiators */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-20">
            {differentiators.map((item, index) => {
              const colors = colorMap[item.color as keyof typeof colorMap];
              return (
                <div
                  key={item.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-lg ${colors.bg} flex items-center justify-center shadow-lg`}>
                        <item.icon className="h-7 w-7 text-white" />
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
                          <CheckCircle className={`h-5 w-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                          <span className="text-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-square bg-gradient-to-br from-burgundy-light via-gold-light to-navy-light rounded-2xl flex items-center justify-center border border-primary/10 shadow-inner">
                      <div className={`w-32 h-32 rounded-full ${colors.bg} opacity-20 absolute blur-2xl`} />
                      <item.icon className={`h-32 w-32 ${colors.text} opacity-30`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary via-burgundy-dark to-navy">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the PSC Difference
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Partner with a firm that combines expertise, integrity, and a relentless focus on delivering results.
          </p>
          <Button
            variant="hero"
            size="xl"
            className="bg-gold text-white hover:bg-gold/90 shadow-xl"
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
