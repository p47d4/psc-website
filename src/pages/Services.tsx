import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, BarChart3, Shield, FileSearch, MessageSquare, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Research & Policy Analysis",
    description: "Rigorous research and evidence-based analysis to inform policy decisions and strategic planning.",
    details: [
      "Policy landscape assessments",
      "Regulatory analysis",
      "Sector studies and thematic research",
      "Impact evaluation and outcome assessments",
    ],
    forWho: "Government agencies, development partners, NGOs, and research institutions.",
    value: "Enables evidence-based policy formulation and program design.",
    color: "bg-primary",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Actionable insights on market dynamics, competitive landscapes, and emerging opportunities.",
    details: [
      "Market entry assessments",
      "Competitive landscape analysis",
      "Industry trend monitoring",
      "Business environment mapping",
    ],
    forWho: "Investors, corporations, and organizations seeking market opportunities in Africa.",
    value: "Informs strategic decisions with comprehensive, localized market intelligence.",
    color: "bg-gold",
  },
  {
    icon: Shield,
    title: "Political & Economic Risk Analysis",
    description: "Comprehensive risk assessment to help clients navigate complex political and economic environments.",
    details: [
      "Country and regional risk assessments",
      "Political scenario analysis",
      "Economic outlook and forecasting",
      "Crisis and conflict risk analysis",
    ],
    forWho: "Investors, multinational corporations, and institutions operating in or entering African markets.",
    value: "Reduces exposure to political and economic volatility through proactive risk management.",
    color: "bg-navy",
  },
  {
    icon: FileSearch,
    title: "Due Diligence",
    description: "Thorough institutional and investment due diligence to support informed decision-making.",
    details: [
      "Partner and institutional assessments",
      "Investment target screening",
      "Integrity and reputational due diligence",
      "Pre-transaction research",
    ],
    forWho: "Development finance institutions, private equity firms, and corporate investors.",
    value: "Mitigates investment risk through comprehensive background analysis and verification.",
    color: "bg-primary",
  },
  {
    icon: MessageSquare,
    title: "Strategic Communications & Stakeholder Engagement",
    description: "Stakeholder engagement strategies that build consensus and drive successful outcomes.",
    details: [
      "Stakeholder mapping and analysis",
      "Communication strategy development",
      "Public affairs and advocacy support",
      "Coalition building and consensus development",
    ],
    forWho: "Government agencies, development programs, and organizations seeking to build coalitions.",
    value: "Builds support for reforms and initiatives through strategic stakeholder engagement.",
    color: "bg-gold",
  },
  {
    icon: Lightbulb,
    title: "Advisory Services",
    description: "Expert advisory support for reforms, programs, and transformational projects.",
    details: [
      "Strategic planning and roadmapping",
      "Reform design and implementation support",
      "Program and project advisory",
      "Institutional strengthening",
    ],
    forWho: "Government ministries, development partners, and organizations driving change initiatives.",
    value: "Accelerates reform and transformation through expert guidance and practical support.",
    color: "bg-navy",
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHeader
        label="What We Offer"
        title="Our Services"
        description="Comprehensive research and advisory services to help organizations navigate complexity and achieve their strategic objectives."
      />

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center shadow-lg`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className={`w-2 h-2 rounded-full ${service.color} mt-2 flex-shrink-0`} />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gradient-to-br from-burgundy-light to-gold-light rounded-xl p-8 border border-primary/10 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${service.color}`} />
                        Who It's For
                      </h3>
                      <p className="text-muted-foreground">{service.forWho}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${service.color}`} />
                        The Value
                      </h3>
                      <p className="text-muted-foreground">{service.value}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent via-navy to-accent">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            We tailor our approach to meet your specific needs. Let's discuss how PSC can support your objectives.
          </p>
          <Button
            variant="hero"
            size="xl"
            className="bg-gold text-white hover:bg-gold/90 shadow-xl"
            asChild
          >
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
