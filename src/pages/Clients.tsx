import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Globe2, Landmark, Briefcase } from "lucide-react";

const clients = [
  {
    name: "NNPC Ltd",
    category: "Energy & Resources",
    description: "Nigeria's national oil company, overseeing petroleum sector operations and development.",
  },
  {
    name: "African Development Bank (AfDB)",
    category: "Multilateral Development",
    description: "Africa's premier development finance institution, driving sustainable economic development across the continent.",
  },
  {
    name: "United States Agency for International Development (USAID)",
    category: "Development Partner",
    description: "Leading international development agency supporting democratic governance and economic growth.",
  },
  {
    name: "Korea International Cooperation Agency (KOICA)",
    category: "Development Partner",
    description: "Korea's bilateral development agency supporting sustainable development in partner countries.",
  },
  {
    name: "Central Bank of Nigeria (CBN)",
    category: "Financial Institution",
    description: "Nigeria's apex monetary authority, responsible for monetary policy and financial system stability.",
  },
  {
    name: "Creative Associates International",
    category: "International Development",
    description: "Global development organization delivering innovative solutions in education, governance, and economic growth.",
  },
];

const sectors = [
  {
    icon: Landmark,
    title: "Government & Public Sector",
    description: "Ministries, departments, agencies, and regulatory bodies.",
  },
  {
    icon: Globe2,
    title: "Development Partners",
    description: "Multilateral institutions, bilateral agencies, and international NGOs.",
  },
  {
    icon: Briefcase,
    title: "Private Sector",
    description: "Investors, corporations, and financial institutions.",
  },
  {
    icon: Building2,
    title: "Civil Society",
    description: "Research institutions, think tanks, and advocacy organizations.",
  },
];

const Clients = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Our Track Record
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Clients & Experience
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are proud to partner with leading institutions across the public and private sectors, delivering insights that inform critical decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sectors We Serve
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our expertise spans multiple sectors, enabling us to deliver value to a diverse range of clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector) => (
              <div key={sector.title} className="text-center p-8 bg-secondary/30 rounded-lg">
                <div className="w-14 h-14 rounded-lg bg-primary mx-auto flex items-center justify-center mb-6">
                  <sector.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {sector.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Clients */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Selected Clients
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of the organizations we have had the privilege to work with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <div key={client.name} className="bg-background rounded-lg border border-border p-8 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    {client.category}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {client.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
            Join Our Growing Client Portfolio
          </h2>
          <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Let us show you how PSC can help your organization navigate complexity and achieve its strategic objectives.
          </p>
          <Button
            variant="hero"
            size="xl"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <Link to="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
