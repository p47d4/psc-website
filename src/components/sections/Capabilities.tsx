import { Search, BarChart3, Shield, FileSearch, MessageSquare, Lightbulb } from "lucide-react";

const capabilities = [
  {
    icon: Search,
    title: "Research & Policy Analysis",
    description: "Rigorous research and evidence-based analysis to inform policy decisions and strategic planning.",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Actionable insights on market dynamics, competitive landscapes, and emerging opportunities.",
  },
  {
    icon: Shield,
    title: "Political & Economic Risk",
    description: "Comprehensive risk assessment to help clients navigate complex political and economic environments.",
  },
  {
    icon: FileSearch,
    title: "Due Diligence",
    description: "Thorough institutional and investment due diligence to support informed decision-making.",
  },
  {
    icon: MessageSquare,
    title: "Strategic Communications",
    description: "Stakeholder engagement strategies that build consensus and drive successful outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Advisory Services",
    description: "Expert advisory support for reforms, programs, and transformational projects.",
  },
];

const Capabilities = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Core Capabilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine rigorous research, deep contextual knowledge, and strategic communication to help clients navigate uncertainty and seize opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="card-elevated p-8 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <capability.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {capability.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
