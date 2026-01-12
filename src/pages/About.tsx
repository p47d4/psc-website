import Layout from "@/components/layout/Layout";
import { Target, Eye, Compass } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Who We Are
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About Path Strategy Consulting
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A research and advisory firm founded in 2013 to provide actionable insights and strategic solutions to organizations operating in complex environments.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
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
            <div className="bg-secondary/50 rounded-lg p-10">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground">
                      To provide actionable insights and strategic solutions that help organizations succeed in complex environments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Our Vision
                    </h3>
                    <p className="text-muted-foreground">
                      To be the trusted partner of choice for organizations seeking to understand and operate effectively in African markets.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                    <Compass className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Our Approach
                    </h3>
                    <p className="text-muted-foreground">
                      Evidence-based analysis, deep contextual understanding, and client-tailored outputs that inform decisions and drive results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Guides Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Rigor",
                description: "We apply rigorous methodologies and maintain the highest standards of analytical quality in all our work.",
              },
              {
                title: "Integrity",
                description: "We are honest, transparent, and objective in our analysis and recommendations.",
              },
              {
                title: "Impact",
                description: "We focus on delivering insights that translate into real-world decisions and measurable outcomes.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-8 bg-background rounded-lg border border-border">
                <h3 className="font-display text-2xl font-semibold text-primary mb-4">
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
