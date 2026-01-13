import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import nnpcLogo from "@/assets/nnpc_logo.png";
import afdbLogo from "@/assets/afdb logo.png";
import usaidLogo from "@/assets/usaid logo.png";
import koicaLogo from "@/assets/koica logo.png";
import cbnLogo from "@/assets/cbn logo.png";
import creativeLogo from "@/assets/creative logo.png";

const clients = [
  { name: "NNPC Ltd", logo: nnpcLogo },
  { name: "African Development Bank (AfDB)", logo: afdbLogo },
  { name: "United States Agency for International Development (USAID)", logo: usaidLogo },
  { name: "Korea International Cooperation Agency (KOICA)", logo: koicaLogo },
  { name: "Central Bank of Nigeria (CBN)", logo: cbnLogo },
  { name: "Creative Associates International", logo: creativeLogo },
];

const colors = [
  "border-l-primary",
  "border-l-gold",
  "border-l-navy",
  "border-l-primary",
  "border-l-gold",
  "border-l-navy",
];

const ClientsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-burgundy-light/20">
      <div className="container-wide">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-navy-light text-navy text-sm font-semibold rounded-full mb-4">
            Trusted By
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Selected Clients
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We are proud to partner with leading institutions across the public and private sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`p-6 rounded-lg border border-border border-l-4 ${colors[index]} bg-card text-center hover:shadow-md transition-shadow flex flex-col items-center justify-center`}
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-16 w-auto mb-4 object-contain max-w-full"
              />
              <p className="font-medium text-foreground text-sm md:text-base">
                {client.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white" asChild>
            <Link to="/clients">
              View All Experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
