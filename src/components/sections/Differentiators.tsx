import { Globe, Layers, Users, Target } from "lucide-react";

const differentiators = [
  {
    icon: Globe,
    title: "Deep African Expertise",
    description: "Strong expertise in African markets, with particular depth in Nigeria and the West African region.",
    color: "bg-primary",
    textColor: "text-primary",
  },
  {
    icon: Layers,
    title: "Integrated Approach",
    description: "We link research, risk analysis, and strategic communications into cohesive, actionable solutions.",
    color: "bg-gold",
    textColor: "text-gold",
  },
  {
    icon: Users,
    title: "Trusted Partnerships",
    description: "A trusted partner to governments, multilaterals, development agencies, and private institutions.",
    color: "bg-navy",
    textColor: "text-navy",
  },
  {
    icon: Target,
    title: "Decision-Focused",
    description: "Practical, client-tailored outputs designed to inform decisions and drive measurable results.",
    color: "bg-primary",
    textColor: "text-primary",
  },
];

const Differentiators = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy-light via-gold-light/50 to-navy-light opacity-70" />
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-gold-light text-gold-foreground text-sm font-semibold rounded-full mb-4">
            Our Edge
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Path Strategy Consulting
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What sets PSC apart in delivering value to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="flex gap-6 p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${item.color} flex items-center justify-center shadow-lg`}>
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
