import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Phone, CheckCircle2 } from "lucide-react";
import CallButton from "@/components/CallButton";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { CheckatradeWidget } from "@/components/CheckatradeWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CHECKATRADE_CONFIG } from "@/config/checkatradeConfig";
import { useCheckatradeData } from "@/hooks/useCheckatradeData";

const London = () => {
  const { rating } = useCheckatradeData();
  const areas = [
    "Kensington", "Chelsea", "Richmond", "Wimbledon", "Putney", "Fulham",
    "Hammersmith", "Chiswick", "Ealing", "Islington", "Camden", "Hampstead",
    "Highgate", "St John's Wood", "Marylebone", "Paddington", "Notting Hill",
    "Holland Park", "Battersea", "Clapham", "Wandsworth", "Greenwich",
    "Blackheath", "Dulwich", "Streatham", "Croydon", "Kingston upon Thames",
    "Twickenham", "Teddington", "Hampton", "Surbiton", "New Malden",
    "Barnes", "Mortlake", "East Sheen", "Roehampton", "Tooting", "Balham",
    "Brixton", "Peckham", "Crystal Palace", "Sydenham", "Forest Hill",
    "Lewisham", "Deptford", "Bermondsey", "Rotherhithe", "Canary Wharf",
    "Docklands", "Shoreditch", "Hackney", "Stoke Newington", "Dalston",
    "Highbury", "Finsbury Park", "Muswell Hill", "Crouch End", "Archway",
    "Kentish Town", "Primrose Hill", "Regent's Park", "Mayfair", "Soho",
    "Covent Garden", "Bloomsbury", "Fitzrovia", "Holborn", "Farringdon"
  ];

  const services = [
    "Garden Maintenance in London",
    "Landscaping Services London",
    "Patio Installation London",
    "Decking Installation London",
    "Fencing Services London",
    "Lawn Care London",
    "Hedge Trimming London",
    "Tree Pruning London",
    "Garden Design London",
    "Pressure Washing London"
  ];

  return (
    <div>
      <SEOHead
        title="Landscaping Services in London | Angeli Gardens | Checkatrade Approved"
        description={`Expert landscaping and garden services across London. Checkatrade approved with ${rating}/${CHECKATRADE_CONFIG.maxRating} rating. Garden maintenance, patios, decking, fencing, and landscaping in Kensington, Richmond, Wimbledon, and all London areas. Free quotes.`}
        keywords="landscaping London, garden maintenance London, landscaper London, patio installation London, decking London, fencing London, garden services London, Checkatrade approved landscaper London, landscaping Kensington, landscaping Richmond, landscaping Wimbledon"
        canonical="https://www.angeligardens.co.uk/areas/london"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={32} />
              <h1 className="text-5xl md:text-6xl font-bold">Landscaping Services in London</h1>
            </div>
            <p className="text-xl text-primary-foreground/90 mb-6">
              Expert garden maintenance, landscaping, and outdoor design services across all London areas. Checkatrade approved with {rating}/{CHECKATRADE_CONFIG.maxRating} rating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <CallButton size="lg" variant="secondary" className="flex items-center gap-2">
                <Phone size={20} />
                Call Now
              </CallButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Checkatrade Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <CheckatradeWidget variant="compact" />
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">London Areas We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide professional landscaping and garden services across Greater London
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {areas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      <span className="font-medium">{area}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our London Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive garden and landscaping solutions for London properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg">{service}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your London Garden?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get a free, no-obligation quote for your London property today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
              <CallButton size="lg" variant="secondary" className="flex items-center gap-2">
                <Phone size={20} />
                07542 973733
              </CallButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default London;

