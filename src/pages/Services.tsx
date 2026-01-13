import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, BarChart3, Shield, FileSearch, MessageSquare, Lightbulb, CheckCircle } from "lucide-react";
import servicesImage from "@/assets/ab.png";

const services = [
  {
    icon: Search,
    title: "Research & Policy Analysis",
    description: "Rigorous research and evidence-based analysis to inform policy decisions and strategic planning. We help organizations understand complex issues and develop effective responses.",
    details: [
      "Policy landscape assessments and gap analysis",
      "Regulatory environment mapping",
      "Sector studies and thematic research",
      "Impact evaluation and outcome assessments",
      "Stakeholder perception studies",
    ],
    forWho: "Government agencies, development partners, NGOs, and research institutions seeking evidence to inform policy and program design.",
    value: "Enables evidence-based policy formulation, program design, and strategic planning grounded in rigorous analysis.",
    color: "bg-primary",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Actionable insights on market dynamics, competitive landscapes, and emerging opportunities. We help clients identify and capitalize on market opportunities across Africa.",
    details: [
      "Market entry assessments and feasibility studies",
      "Competitive landscape and positioning analysis",
      "Industry trend monitoring and forecasting",
      "Business environment mapping",
      "Consumer and market segmentation research",
    ],
    forWho: "Investors, corporations, and organizations seeking market opportunities in African markets.",
    value: "Informs strategic decisions with comprehensive, localized market intelligence that reduces uncertainty and risk.",
    color: "bg-gold",
  },
  {
    icon: Shield,
    title: "Political & Economic Risk Analysis",
    description: "Comprehensive risk assessment to help clients navigate complex political and economic environments. We provide early warning and scenario analysis to manage uncertainty.",
    details: [
      "Country and regional risk assessments",
      "Political scenario analysis and forecasting",
      "Economic outlook and policy impact analysis",
      "Crisis and conflict risk assessment",
      "Regulatory and policy risk monitoring",
    ],
    forWho: "Investors, multinational corporations, and institutions operating in or entering African markets.",
    value: "Reduces exposure to political and economic volatility through proactive risk identification and management.",
    color: "bg-navy",
  },
  {
    icon: FileSearch,
    title: "Due Diligence",
    description: "Thorough institutional and investment due diligence to support informed decision-making. We help clients understand what they're getting into before they commit.",
    details: [
      "Partner and institutional capacity assessments",
      "Investment target screening and analysis",
      "Integrity and reputational due diligence",
      "Pre-transaction research and verification",
      "Third-party risk assessments",
    ],
    forWho: "Development finance institutions, private equity firms, corporate investors, and development organizations.",
    value: "Mitigates investment and partnership risk through comprehensive background analysis and verification.",
    color: "bg-primary",
  },
  {
    icon: MessageSquare,
    title: "Strategic Communications & Stakeholder Engagement",
    description: "Stakeholder engagement strategies that build consensus and drive successful outcomes. We help organizations communicate effectively and build coalitions.",
    details: [
      "Stakeholder mapping and analysis",
      "Communication strategy development",
      "Public affairs and advocacy support",
      "Coalition building and consensus development",
      "Crisis communication planning",
    ],
    forWho: "Government agencies, development programs, and organizations seeking to build coalitions and drive change.",
    value: "Builds support for reforms and initiatives through strategic stakeholder engagement and effective communication.",
    color: "bg-gold",
  },
  {
    icon: Lightbulb,
    title: "Advisory Services",
    description: "Expert advisory support for reforms, programs, and transformational projects. We partner with clients to design and implement change that delivers results.",
    details: [
      "Strategic planning and roadmapping",
      "Reform design and implementation support",
      "Program and project advisory",
      "Institutional strengthening and capacity building",
      "Performance monitoring and evaluation frameworks",
    ],
    forWho: "Government ministries, development partners, and organizations driving change initiatives and reforms.",
    value: "Accelerates reform and transformation through expert guidance, practical support, and knowledge transfer.",
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

      {/* Services Intro */}
      <section className="section-padding bg-gradient-to-b from-burgundy-light/30 to-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-gold-light text-gold-foreground text-sm font-semibold rounded-full mb-4">
                Our Approach
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tailored Solutions for Complex Challenges
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every client engagement is unique. We combine deep expertise with a collaborative approach to develop solutions that address your specific challenges and context. Our work is grounded in rigorous methodology, but always focused on practical, actionable outcomes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Evidence-based methodology</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span className="text-foreground">Client-centric approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-navy" />
                  <span className="text-foreground">Actionable deliverables</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={servicesImage} 
                alt="PSC Services" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-burgundy-light text-primary text-sm font-semibold rounded-full mb-4">
              Service Areas
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive capabilities to address the full range of research and advisory needs.
            </p>
          </div>
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
                <div className={`bg-gradient-to-br from-burgundy-light via-gold-light/50 to-navy-light rounded-xl p-8 border border-primary/10 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
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
