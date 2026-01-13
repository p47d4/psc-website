import { Search, BarChart3, Shield, FileSearch, MessageSquare, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Search,
    title: "Research & Policy Analysis",
    description: "Rigorous research and evidence-based analysis to inform policy decisions and strategic planning.",
    color: "bg-primary",
    hoverBg: "group-hover:bg-primary/20",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Actionable insights on market dynamics, competitive landscapes, and emerging opportunities.",
    color: "bg-gold",
    hoverBg: "group-hover:bg-gold/20",
  },
  {
    icon: Shield,
    title: "Political & Economic Risk",
    description: "Comprehensive risk assessment to help clients navigate complex political and economic environments.",
    color: "bg-navy",
    hoverBg: "group-hover:bg-navy/20",
  },
  {
    icon: FileSearch,
    title: "Due Diligence",
    description: "Thorough institutional and investment due diligence to support informed decision-making.",
    color: "bg-primary",
    hoverBg: "group-hover:bg-primary/20",
  },
  {
    icon: MessageSquare,
    title: "Strategic Communications",
    description: "Stakeholder engagement strategies that build consensus and drive successful outcomes.",
    color: "bg-gold",
    hoverBg: "group-hover:bg-gold/20",
  },
  {
    icon: Lightbulb,
    title: "Advisory Services",
    description: "Expert advisory support for reforms, programs, and transformational projects.",
    color: "bg-navy",
    hoverBg: "group-hover:bg-navy/20",
  },
];

const Capabilities = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-navy-light/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-burgundy-light text-primary text-sm font-semibold rounded-full mb-4">
            What We Do
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Core Capabilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine rigorous research, deep contextual knowledge, and strategic communication to help clients navigate uncertainty and seize opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Link
              to="/services"
              key={capability.title}
              className="card-elevated p-8 group cursor-pointer hover:border-primary/20 transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-lg ${capability.color}/10 ${capability.hoverBg} flex items-center justify-center mb-6 transition-colors`}>
                <capability.icon className={`h-7 w-7 ${capability.color === 'bg-primary' ? 'text-primary' : capability.color === 'bg-gold' ? 'text-gold' : 'text-navy'}`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {capability.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
              <div className={`w-12 h-1 ${capability.color} mt-6 rounded-full opacity-60 group-hover:w-20 transition-all duration-300`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
