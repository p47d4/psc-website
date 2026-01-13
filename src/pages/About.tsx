import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import { Target, Eye, Compass, Award, Users, Globe, TrendingUp, CheckCircle } from "lucide-react";
import aboutImage from "@/assets/aa.png";
import teamImage from "@/assets/ab.png";

const About = () => {
  return (
    <Layout>
      <PageHeader
        label="Who We Are"
        title="About Path Strategy Consulting"
        description="A research and advisory firm founded in 2013 to provide actionable insights and strategic solutions to organizations operating in complex environments."
      />

      {/* Story Section */}
      <section className="section-padding bg-gradient-to-b from-burgundy-light/30 to-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-gold-light text-gold-foreground text-sm font-medium rounded-full mb-4">
                Since 2013
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Path Strategy Consulting (PSC) was established in 2013 with a clear mission: to provide evidence-based analysis that informs decision-making, manages risk, and drives results for organizations navigating Africa's complex political, economic, and market environments.
                </p>
                <p>
                  Over the past decade, we have built a reputation for rigorous research, deep contextual knowledge, and practical, decision-focused outputs. Our work spans public sector institutions, development partners, multilateral organizations, and private sector clients.
                </p>
                <p>
                  With a geographic focus on Africa—and particular expertise in Nigeria—PSC combines local insight with global analytical standards to deliver value where it matters most.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="About Path Strategy Consulting" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="font-display text-3xl font-bold">10+</p>
                <p className="text-white/90">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={teamImage} 
                alt="PSC Team at Work" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1 bg-navy-light text-navy text-sm font-medium rounded-full mb-4">
                Our Expertise
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Deep Knowledge, Practical Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team brings together professionals with backgrounds in policy analysis, political economy, market research, strategic communications, and project management. This multidisciplinary approach allows us to tackle complex challenges from multiple angles.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-burgundy-light/50 rounded-xl">
                  <Globe className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Geographic Focus</h4>
                    <p className="text-muted-foreground text-sm">Deep expertise across Africa, with particular strength in Nigeria and West Africa</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gold-light/50 rounded-xl">
                  <Users className="h-6 w-6 text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Institutional Clients</h4>
                    <p className="text-muted-foreground text-sm">Governments, multilaterals, development agencies, and private institutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-navy-light/50 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-navy mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Results Driven</h4>
                    <p className="text-muted-foreground text-sm">Focus on actionable insights that translate into measurable outcomes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Approach Section */}
      <section className="section-padding bg-gradient-to-b from-background to-gold-light/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Our Foundation
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mission, Vision & Approach
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-lg mb-6">
                <Target className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide actionable insights and strategic solutions that help organizations succeed in complex environments—enabling informed decisions and measurable impact.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-gold flex items-center justify-center shadow-lg mb-6">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the trusted partner of choice for organizations seeking to understand and operate effectively in African markets—known for our expertise, integrity, and impact.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center shadow-lg mb-6">
                <Compass className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Our Approach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Evidence-based analysis, deep contextual understanding, and client-tailored outputs that inform decisions and drive results—delivered with rigor and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding relative overflow-hidden bg-background">
        <div className="container-wide relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-burgundy-light text-primary text-sm font-semibold rounded-full mb-4">
              Our Values
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Guides Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our values define how we work and the standards we hold ourselves to in every engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Rigor",
                description: "We apply rigorous methodologies and maintain the highest standards of analytical quality in all our work. Every conclusion is grounded in evidence.",
                color: "bg-primary",
                icon: Award,
              },
              {
                title: "Integrity",
                description: "We are honest, transparent, and objective in our analysis and recommendations. Our clients trust us because we tell them what they need to hear.",
                color: "bg-gold",
                icon: CheckCircle,
              },
              {
                title: "Impact",
                description: "We focus on delivering insights that translate into real-world decisions and measurable outcomes. Results matter more than reports.",
                color: "bg-navy",
                icon: TrendingUp,
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-8 bg-gradient-to-b from-card to-burgundy-light/20 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 ${value.color} mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
