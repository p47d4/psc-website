import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center section-padding bg-gradient-to-br from-burgundy-light via-background to-gold-light">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
              Page Not Found
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-primary mb-6">
              404
            </h1>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Oops! This page doesn't exist
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              The page you're looking for may have been moved, deleted, or never existed. 
              Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
