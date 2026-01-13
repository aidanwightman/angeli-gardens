import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { CheckatradeWidget } from "@/components/CheckatradeWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CHECKATRADE_CONFIG } from "@/config/checkatradeConfig";

const Berkshire = () => {
  const areas = [
    "Reading", "Windsor", "Maidenhead", "Slough", "Bracknell", "Newbury",
    "Wokingham", "Ascot", "Eton", "Datchet", "Cookham", "Marlow",
    "Henley-on-Thames", "Twyford", "Wargrave", "Sonning", "Crowthorne",
    "Sandhurst", "Yateley", "Camberley", "Farnborough", "Aldershot",
    "Caversham", "Tilehurst", "Earley", "Woodley", "Arborfield", "Finchampstead",
    "Wokingham Without", "Shinfield", "Spencers Wood", "Three Mile Cross",
    "Stratfield Mortimer", "Mortimer", "Burghfield", "Theale", "Pangbourne",
    "Goring-on-Thames", "Streatley", "Basildon", "Lower Basildon", "Aldworth",
    "Compton", "Hampstead Norreys", "Hermitage", "Cold Ash", "Thatcham",
    "Midgham", "Woolhampton", "Aldermaston", "Tadley", "Baughurst",
    "Kingsclere", "Overton", "Whitchurch", "Pangbourne", "Purley-on-Thames"
  ];

  const services = [
    "Garden Maintenance in Berkshire",
    "Landscaping Services Berkshire",
    "Patio Installation Berkshire",
    "Decking Installation Berkshire",
    "Fencing Services Berkshire",
    "Lawn Care Berkshire",
    "Hedge Trimming Berkshire",
    "Tree Pruning Berkshire",
    "Garden Design Berkshire",
    "Pressure Washing Berkshire"
  ];

  return (
    <div>
      <SEOHead
        title="Landscaping Services in Berkshire | Angeli Gardens | Checkatrade Approved"
        description={`Expert landscaping and garden services across Berkshire. Checkatrade approved with ${CHECKATRADE_CONFIG.rating}/${CHECKATRADE_CONFIG.maxRating} rating. Garden maintenance, patios, decking, fencing, and landscaping in Reading, Windsor, Maidenhead, Slough, and all Berkshire areas. Free quotes.`}
        keywords="landscaping Berkshire, garden maintenance Berkshire, landscaper Berkshire, patio installation Berkshire, decking Berkshire, fencing Berkshire, garden services Berkshire, Checkatrade approved landscaper Berkshire, landscaping Reading, landscaping Windsor, landscaping Maidenhead"
        canonical="https://www.angeligardens.co.uk/areas/berkshire"
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
              <h1 className="text-5xl md:text-6xl font-bold">Landscaping Services in Berkshire</h1>
            </div>
            <p className="text-xl text-primary-foreground/90 mb-6">
              Expert garden maintenance, landscaping, and outdoor design services across all Berkshire areas. Checkatrade approved with {CHECKATRADE_CONFIG.rating}/{CHECKATRADE_CONFIG.maxRating} rating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:07542973733" className="flex items-center gap-2">
                  <Phone size={20} />
                  Call Now
                </a>
              </Button>
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
            <h2 className="text-4xl font-bold mb-4">Berkshire Areas We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide professional landscaping and garden services across Berkshire
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
            <h2 className="text-4xl font-bold mb-4">Our Berkshire Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive garden and landscaping solutions for Berkshire properties
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Berkshire Garden?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get a free, no-obligation quote for your Berkshire property today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:07542973733" className="flex items-center gap-2">
                  <Phone size={20} />
                  07542 973733
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Berkshire;

