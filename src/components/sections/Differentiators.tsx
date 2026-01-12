import { Globe, Layers, Users, Target } from "lucide-react";

const differentiators = [
  {
    icon: Globe,
    title: "Deep African Expertise",
    description: "Strong expertise in African markets, with particular depth in Nigeria and the West African region.",
  },
  {
    icon: Layers,
    title: "Integrated Approach",
    description: "We link research, risk analysis, and strategic communications into cohesive, actionable solutions.",
  },
  {
    icon: Users,
    title: "Trusted Partnerships",
    description: "A trusted partner to governments, multilaterals, development agencies, and private institutions.",
  },
  {
    icon: Target,
    title: "Decision-Focused",
    description: "Practical, client-tailored outputs designed to inform decisions and drive measurable results.",
  },
];

const Differentiators = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Our Edge
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Path Strategy Consulting
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What sets PSC apart in delivering value to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="flex gap-6 p-6 rounded-lg bg-background border border-border"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary-foreground" />
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
