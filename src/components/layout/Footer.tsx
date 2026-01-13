import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Path Strategy Consulting" className="h-14 w-auto mb-6 brightness-0 invert" />
            <p className="text-accent-foreground/80 text-sm leading-relaxed max-w-md mb-6">
              Path Strategy Consulting (PSC) is a research and advisory firm providing actionable insights and strategic solutions to organizations operating in complex political, economic, and market environments.
            </p>
            <p className="text-accent-foreground/60 text-sm italic">
              Insight. Strategy. Impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About PSC", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Why PSC", href: "/why-psc" },
                { name: "Clients & Experience", href: "/clients" },
                { name: "Insights & Reports", href: "/insights" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-accent-foreground/80 hover:text-accent-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-accent-foreground/10">
                <Link
                  to="/cms/login"
                  className="text-accent-foreground/60 hover:text-accent-foreground text-xs transition-colors"
                >
                  CMS Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-accent-foreground/60" />
                <a
                  href="mailto:info@pathstrategyconsulting.com"
                  className="text-accent-foreground/80 hover:text-accent-foreground text-sm transition-colors"
                >
                  info@pathstrategyconsulting.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent-foreground/60" />
                <span className="text-accent-foreground/80 text-sm">
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/10 mt-12 pt-8">
          <p className="text-center text-accent-foreground/60 text-sm">
            © {new Date().getFullYear()} Path Strategy Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
