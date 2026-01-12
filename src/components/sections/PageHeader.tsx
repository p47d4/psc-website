import { ReactNode } from "react";

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
}

const PageHeader = ({ label, title, description, children }: PageHeaderProps) => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(4 40% 95%) 0%, hsl(38 60% 96%) 40%, hsl(220 30% 96%) 100%)",
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-gold/20 blur-3xl" />
      </div>
      
      {/* Accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-gold to-navy" />
      
      <div className="container-wide relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            {label}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
