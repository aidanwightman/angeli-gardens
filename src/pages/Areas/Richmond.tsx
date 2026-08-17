import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Phone, CheckCircle2, Star } from "lucide-react";
import CallButton from "@/components/CallButton";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { CheckatradeWidget } from "@/components/CheckatradeWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CHECKATRADE_CONFIG } from "@/config/checkatradeConfig";
import { useCheckatradeData } from "@/hooks/useCheckatradeData";

const nearbyAreas = [
  "Richmond", "Kew", "Barnes", "Mortlake", "East Sheen",
  "Roehampton", "Ham", "Petersham", "Kingston", "Twickenham",
  "Teddington", "Hampton", "Putney", "Wimbledon", "Surbiton",
  "Brentford", "Isleworth", "Chiswick", "Fulham", "Wandsworth",
];

const services = [
  "Garden Maintenance Richmond",
  "Landscaping Richmond upon Thames",
  "Patio Installation Richmond",
  "Decking Richmond",
  "Fencing Richmond TW9",
  "Lawn Care & Turfing Richmond",
  "Hedge Trimming Richmond",
  "Tree Pruning Richmond",
  "Garden Clearance Richmond",
  "Artificial Grass Richmond",
  "Pressure Washing Richmond",
  "Garden Design TW10",
];

const Richmond = () => {
  const { rating } = useCheckatradeData();

  return (
    <div>
      <SEOHead
        title="Landscaper in Richmond | Garden Services TW9 & TW10 | Angeli Gardens"
        description={`Angeli Gardens — your local landscaper in Richmond (TW9/TW10). Checkatrade approved with ${rating}/${CHECKATRADE_CONFIG.maxRating} rating. Garden maintenance, patios, decking, fencing & landscaping across Richmond, Kew, Barnes & South West London. Free quotes — call 07542 973733.`}
        keywords="landscaper Richmond, gardener Richmond, garden maintenance Richmond, landscaping TW9, gardener TW10, landscaper Kew, patio Richmond, decking Richmond, fencing Richmond, lawn care Richmond, hedge trimming Richmond, garden clearance Richmond, Checkatrade landscaper Richmond"
        canonical="https://www.angeligardens.co.uk/areas/richmond"
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Landscaper in Richmond</h1>
            </div>
            <p className="text-xl text-primary-foreground/90 mb-4">
              Angeli Gardens — your local landscaping and garden maintenance experts serving Richmond, Kew, Barnes and the surrounding South West London area.
            </p>
            <p className="text-lg text-primary-foreground/80 mb-6">
              Checkatrade approved with {rating}/{CHECKATRADE_CONFIG.maxRating} rating · Fully insured · Free quotes
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

      {/* Checkatrade */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <CheckatradeWidget variant="compact" />
        </div>
      </section>

      {/* About — local trust signals */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Your Local Richmond Landscaper</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Angeli Gardens provides professional landscaping and garden services throughout <strong>Richmond upon Thames (TW9/TW10)</strong> and nearby areas. Founded by Marley Angeli with over 10 years of experience, we've transformed hundreds of gardens across Richmond, Kew, Barnes, Mortlake and South West London.
              </p>
              <p>
                Whether you need regular garden maintenance in <strong>Richmond</strong>, a new patio in <strong>Kew</strong>, decking in <strong>Barnes</strong>, or a complete garden makeover in <strong>East Sheen</strong>, we bring the same high standard of craftsmanship and attention to detail to every project.
              </p>
              <p>
                We are <strong>Checkatrade approved</strong>, fully insured, and licensed for green waste disposal. All our work comes with a free, no-obligation quote and transparent pricing — no hidden costs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-4">Towns & Villages Near Richmond</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide garden and landscaping services across Richmond and the surrounding area
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {nearbyAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <div className="flex items-center gap-1.5 text-sm font-medium">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  <span>{area}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in Richmond */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Richmond Garden Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive landscaping and garden solutions for properties across TW9, TW10 and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-5">
                    <div className="flex items-center gap-2">
                      <Star size={14} className="text-primary flex-shrink-0" />
                      <h3 className="font-semibold">{service}</h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Why Richmond Homeowners Choose Angeli Gardens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Serving Richmond TW9 & TW10", body: "We regularly work across Richmond and nearby areas — fast response times and an in-depth knowledge of local gardens." },
                { title: "Checkatrade Approved", body: `Independently verified reviews. Our ${rating}/${CHECKATRADE_CONFIG.maxRating} Checkatrade rating means you can book with confidence.` },
                { title: "Fully Insured", body: "Full public liability insurance on every job — your property is always protected." },
                { title: "Green Waste Licensed", body: "Licensed green waste carrier. We remove and responsibly dispose of all garden waste." },
                { title: "Free No-Obligation Quotes", body: "Transparent pricing, no hidden costs, and no pressure. We'll assess your garden and give you a clear written quote." },
                { title: "500+ Projects Completed", body: "Over a decade of landscaping experience across Richmond, Kew and South West London." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <CheckCircle2 size={22} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Get a Free Quote for Your Richmond Garden</h2>
            <p className="text-xl mb-2 text-primary-foreground/90">
              Covering Richmond, Kew, Barnes and all surrounding areas.
            </p>
            <p className="text-lg mb-8 text-primary-foreground/80">
              Call us, send a WhatsApp, or fill in our quick contact form — we'll get back to you within 24 hours.
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

export default Richmond;
