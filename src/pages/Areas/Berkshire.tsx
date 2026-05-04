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

const Berkshire = () => {
  const { rating } = useCheckatradeData();
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
        description={`Angeli Gardens — landscaping and garden services across Berkshire. Serving SL1–SL9 postcodes. Checkatrade approved ${rating}/${CHECKATRADE_CONFIG.maxRating} rating. Patios, decking, fencing, lawn care, garden maintenance. Free quotes.`}
        keywords="landscaping Berkshire, garden maintenance Berkshire, landscaper Berkshire, landscaping SL1 SL2 SL3 SL4 SL5 SL6 SL7 SL8 SL9, gardener Maidenhead, gardener Slough, landscaper Windsor, patio installation Berkshire, decking Berkshire, fencing Berkshire, Checkatrade approved landscaper Berkshire, landscaping Reading, landscaping Windsor, landscaping Maidenhead"
        canonical="https://www.angeligardens.co.uk/areas/berkshire"
        breadcrumbs={[{ name: "Areas", url: "https://www.angeligardens.co.uk/areas/berkshire" }, { name: "Berkshire", url: "https://www.angeligardens.co.uk/areas/berkshire" }]}
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Landscaping Services in Berkshire</h1>
            </div>
            <p className="text-xl text-primary-foreground/90 mb-6">
              Expert garden maintenance, landscaping, and outdoor design services across all Berkshire areas. Checkatrade approved with {rating}/{CHECKATRADE_CONFIG.maxRating} rating.
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

      {/* SL Postcode Section */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-3">Landscaping Across SL Postcodes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Regularly serving all SL postcode districts —
              from Slough and Windsor to Marlow and Gerrards Cross.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {[
              { code: "SL1", area: "Slough" },
              { code: "SL2", area: "Slough, Farnham Common, Stoke Poges" },
              { code: "SL3", area: "Slough, Langley, Colnbrook" },
              { code: "SL4", area: "Windsor, Eton, Old Windsor" },
              { code: "SL5", area: "Ascot, Sunningdale, Sunninghill" },
              { code: "SL6", area: "Maidenhead, Taplow, Cookham, Bray" },
              { code: "SL7", area: "Marlow, Little Marlow" },
              { code: "SL8", area: "Bourne End, Wooburn Green" },
              { code: "SL9", area: "Gerrards Cross, Chalfont St Peter" },
            ].map((item, index) => (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded flex-shrink-0">
                        {item.code}
                      </span>
                      <p className="text-sm font-medium">{item.area}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/areas/maidenhead"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View our dedicated Maidenhead landscaping page →
            </Link>
          </div>
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

export default Berkshire;

