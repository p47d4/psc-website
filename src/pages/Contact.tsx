import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send } from "lucide-react";
import contactImage from "@/assets/bc.png";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We will respond within 24-48 hours.",
    });

    setFormData({
      name: "",
      organization: "",
      email: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      <PageHeader
        label="Get In Touch"
        title="Contact Us"
        description="We welcome inquiries from organizations seeking research, risk analysis, and strategic advisory support."
      />

      {/* Contact Form Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <img 
                src={contactImage} 
                alt="Contact Path Strategy Consulting" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                We welcome inquiries from organizations seeking research, risk analysis, and strategic advisory support. Complete the form below and a member of our team will respond within 24-48 hours.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="h-12 border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                    Organization <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your organization"
                    className="h-12 border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@organization.com"
                    className="h-12 border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe how we can help your organization..."
                    rows={6}
                    className="border-2 focus:border-primary"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8">
                For urgent matters or general inquiries, you can also reach us directly.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-burgundy-light to-gold-light rounded-xl border border-primary/10">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:info@pathstrategyconsulting.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@pathstrategyconsulting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-gold-light to-navy-light rounded-xl border border-gold/10">
                  <div className="w-12 h-12 rounded-lg bg-gold flex items-center justify-center shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-accent to-navy rounded-xl">
                <h3 className="font-display text-xl font-semibold text-white mb-4">
                  Working With PSC
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  We work with government agencies, multilateral institutions, development partners, and private sector organizations. Each engagement is tailored to the specific needs and context of our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
