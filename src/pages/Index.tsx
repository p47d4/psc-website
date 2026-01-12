import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import Differentiators from "@/components/sections/Differentiators";
import ClientsSection from "@/components/sections/Clients";
import CTA from "@/components/sections/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Capabilities />
      <Differentiators />
      <ClientsSection />
      <CTA />
    </Layout>
  );
};

export default Index;
