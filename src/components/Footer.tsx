import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { CheckatradeWidget } from "@/components/CheckatradeWidget";
import logo from "@/assets/logo.jpg";
import CallButton from "@/components/CallButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="inline-block p-3 bg-white rounded-lg shadow-md">
              <img src={logo} alt="Angeli Gardens" className="h-16 w-auto" />
            </div>
            <p className="text-sm text-background/80">
              Transform your outdoor space with expert landscaping and garden services across London, Surrey & Berkshire.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/p/Angeli-Gardens-Ltd-61566497512007/" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-primary transition-colors" aria-label="Angeli Gardens Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-background/80 hover:text-primary transition-colors" aria-label="Angeli Gardens Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-background/80 hover:text-primary transition-colors" aria-label="Angeli Gardens LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
              <div className="pt-2">
                <CheckatradeWidget variant="badge" className="opacity-90 hover:opacity-100" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-background/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-background/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-background/80 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-background/80 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-background/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas & Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Areas We Serve</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/areas/maidenhead" className="text-background/80 hover:text-primary transition-colors font-semibold">
                  Maidenhead (SL6) — Home Base
                </Link>
              </li>
              <li>
                <Link to="/areas/berkshire" className="text-background/80 hover:text-primary transition-colors">
                  Berkshire (SL1–SL9)
                </Link>
              </li>
              <li>
                <Link to="/areas/surrey" className="text-background/80 hover:text-primary transition-colors">
                  Surrey
                </Link>
              </li>
              <li>
                <Link to="/areas/london" className="text-background/80 hover:text-primary transition-colors">
                  London
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/faq" className="text-background/80 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/80">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <CallButton className="hover:text-primary transition-colors">
                  07542 973733
                </CallButton>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/80">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Angeligardens1@gmail.com
                </Link>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/80">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  Maidenhead, Berkshire, SL6<br />
                  <span className="text-background/60 text-xs">Serving SL1–SL9 · London · Surrey</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {currentYear} Angeli Gardens Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-background/60 justify-center">
              <a 
                href="https://www.checkatrade.com/trades/angeligardens" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                View on Checkatrade
              </a>
              <Link to="/faq" className="hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
