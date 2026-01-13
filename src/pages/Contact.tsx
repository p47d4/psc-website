import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
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

    try {
      // Save submission to database
      const { error: dbError } = await supabase.from("contact_submissions").insert({
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        message: formData.message,
      });

      if (dbError) throw dbError;

      // Send email notification
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) console.error("Email error:", error);

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your inquiry. We will respond within 24-48 hours.",
      });

      setFormData({
        name: "",
        organization: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error Sending Message",
        description: "There was an issue sending your message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Contact Intro Section */}
      <section className="section-padding bg-gradient-to-b from-burgundy-light/30 to-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src={contactImage} 
                alt="Contact Path Strategy Consulting" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're exploring a new market, navigating political risk, or seeking evidence-based insights to inform critical decisions, we're here to help. Our team combines deep expertise with a client-focused approach to deliver results that matter.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Tailored solutions for your specific challenges</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span className="text-foreground">Deep expertise in African markets</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-navy" />
                  <span className="text-foreground">Evidence-based, decision-focused outputs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Complete the form below and a member of our team will respond within 24-48 hours.
              </p>

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
                      href="mailto:info@pathstrategyconsulting.com.ng"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@pathstrategyconsulting.com.ng
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

                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-navy-light to-burgundy-light rounded-xl border border-navy/10">
                  <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                    <p className="text-muted-foreground">Within 24-48 hours</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-accent to-navy rounded-xl">
                <h3 className="font-display text-xl font-semibold text-white mb-4">
                  Working With PSC
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  We work with government agencies, multilateral institutions, development partners, and private sector organizations. Each engagement is tailored to the specific needs and context of our clients.
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  From initial consultation to final delivery, we maintain close collaboration to ensure our work delivers maximum value.
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
