import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Award, CheckCircle2, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ClickSpark from "@/components/ClickSpark";
import logo from "@/assets/logo.jpg";
import CallButton from "@/components/CallButton";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center md:justify-end h-10 text-sm gap-6">
            <CallButton className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">07542 973733</span>
            </CallButton>
            <Link to="/contact" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Angeligardens1@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-primary/20">
        <ClickSpark sparkColor="hsl(79, 27%, 48%)">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo and Badges */}
              <div className="flex items-center gap-6">
                <Link to="/" className="flex items-center space-x-3 group">
                  <div className="relative">
                    <img
                      src={logo}
                      alt="Angeli Gardens"
                      className="h-16 w-auto transition-transform group-hover:scale-105 rounded-lg shadow-lg ring-2 ring-primary/30"
                    />
                  </div>
                </Link>

                {/* Badges - Hidden on mobile */}
                <div className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Award size={16} className="text-primary" />
                    <span>Fully Insured</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>Green Waste Licensed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Wrench size={16} className="text-primary" />
                    <span>Fully Equipped</span>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1 relative">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-4 py-2"
                  >
                    <div className={`relative z-10 text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                        ? "text-primary-foreground"
                        : "text-foreground/70 hover:text-primary"
                      }`}>
                      {link.name}
                    </div>
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="nav-highlight"
                        className="absolute inset-0 bg-primary rounded-md shadow-sm"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
                  <CallButton variant="outline" size="sm" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </CallButton>
                </motion.div>
                <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
                  <Button size="sm" asChild>
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-background border-t"
              >
                <div className="container mx-auto px-4 py-6 space-y-4">
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.path}
                      whileTap={{ scale: 0.98, x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Link
                        to={link.path}
                        className={`block py-2 text-base font-medium transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-foreground/80"
                          }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="pt-4 space-y-3">
                    <motion.div whileTap={{ scale: 0.98 }}>
                      <CallButton variant="outline" className="w-full flex items-center justify-center gap-2">
                        <Phone className="h-4 w-4" />
                        Call Now
                      </CallButton>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.98 }}>
                      <Button className="w-full" asChild>
                        <Link to="/contact">Get a Quote</Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ClickSpark>
      </nav>
    </>
  );
};

export default Navigation;
