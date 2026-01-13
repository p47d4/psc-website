import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Layers, Users, Target, CheckCircle, Award, TrendingUp, Shield } from "lucide-react";
import whyImage from "@/assets/aa.png";
import teamImage from "@/assets/bc.png";

const differentiators = [
  {
    icon: Globe,
    title: "Deep African Expertise",
    description: "Strong expertise in African markets, with particular depth in Nigeria and the West African region. We bring over a decade of experience understanding the political, economic, and social dynamics that shape outcomes.",
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
    description: "We link research, risk analysis, and strategic communications into cohesive, actionable solutions. This integrated approach ensures that our work addresses challenges from multiple angles.",
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
    description: "A trusted partner to governments, multilaterals, development agencies, and private institutions. We have built long-term relationships based on delivering results and maintaining the highest standards.",
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
    description: "Practical, client-tailored outputs designed to inform decisions and drive measurable results. We focus on what matters—helping you make better decisions and achieve your objectives.",
    points: [
      "Analysis designed for decision-makers, not shelves",
      "Clear, actionable recommendations",
      "Outputs tailored to client needs and contexts",
      "Focus on real-world impact and measurable results",
    ],
    color: "primary",
  },
];

const colorMap = {
  primary: { bg: "bg-primary", text: "text-primary", light: "bg-burgundy-light" },
  gold: { bg: "bg-gold", text: "text-gold", light: "bg-gold-light" },
  navy: { bg: "bg-navy", text: "text-navy", light: "bg-navy-light" },
};

const WhyPSC = () => {
  return (
    <Layout>
      <PageHeader
        label="Our Differentiators"
        title="Why Path Strategy Consulting"
        description="What sets PSC apart in delivering value to clients navigating complex environments."
      />

      {/* Intro Section */}
      <section className="section-padding bg-gradient-to-b from-burgundy-light/30 to-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-gold-light text-gold-foreground text-sm font-semibold rounded-full mb-4">
                The PSC Advantage
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Partner for Navigating Complexity
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In a world of increasing complexity, organizations need partners who understand the landscape and can help them navigate it successfully. PSC combines deep expertise with a practical, results-oriented approach.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We don't just deliver reports—we deliver insights that drive decisions and outcomes. Our work is grounded in evidence, shaped by experience, and focused on impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-card rounded-xl border border-border text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-foreground">10+</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border text-center">
                  <TrendingUp className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={whyImage} 
                alt="Why Choose PSC" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-burgundy-light text-primary text-sm font-semibold rounded-full mb-4">
              What Sets Us Apart
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Differentiators
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The qualities that make PSC a trusted partner for organizations across Africa.
            </p>
          </div>
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
                    <div className={`aspect-[4/3] ${colors.light} rounded-2xl flex items-center justify-center border border-border shadow-inner overflow-hidden relative`}>
                      <div className={`w-48 h-48 rounded-full ${colors.bg} opacity-10 absolute blur-3xl`} />
                      <item.icon className={`h-32 w-32 ${colors.text} opacity-30`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="section-padding bg-gradient-to-b from-background to-gold-light/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={teamImage} 
                alt="PSC Track Record" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1 bg-navy-light text-navy text-sm font-semibold rounded-full mb-4">
                Our Track Record
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Proven Results Across Sectors
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Over the years, we have delivered impactful projects for leading institutions across the public and private sectors. Our work has informed policy decisions, shaped investment strategies, and supported successful reforms.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <Shield className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Risk Management</h4>
                    <p className="text-muted-foreground text-sm">Helped clients identify and mitigate risks across diverse markets</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <TrendingUp className="h-6 w-6 text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Market Entry</h4>
                    <p className="text-muted-foreground text-sm">Supported successful market entry strategies across Africa</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <Award className="h-6 w-6 text-navy mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Policy Impact</h4>
                    <p className="text-muted-foreground text-sm">Informed evidence-based policy decisions at national and regional levels</p>
                  </div>
                </div>
              </div>
            </div>
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
