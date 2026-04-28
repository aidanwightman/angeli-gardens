import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { SEOHead } from "@/components/SEOHead";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, ArrowLeft, Leaf, Sprout, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [state, handleSubmit] = useForm("myzbaqkk");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [contactMethod, setContactMethod] = useState("email");
  const [gdprConsent, setGdprConsent] = useState(false);

  const services = [
    "Garden Maintenance",
    "Hedge Trimming",
    "Tree Pruning",
    "Garden Clearance",
    "Patios",
    "Decking",
    "Fencing",
    "Turfing",
    "Landscaping Design",
    "Other",
  ];

  const toggleService = (service: string) => {
    const updated = selectedServices.includes(service)
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];
    setSelectedServices(updated);
  };
  return (
    <div>
      <SEOHead
        title="Contact Angeli Gardens | Free Quote | London, Surrey & Berkshire"
        description="Contact Angeli Gardens for a free, no-obligation quote. Expert landscaping and garden services across London, Surrey & Berkshire. Call 07542 973733 or request a quote online. Checkatrade approved."
        keywords="contact Angeli Gardens, free quote landscaping, landscaper phone number, garden services contact, landscaping quote London, garden maintenance quote Surrey"
        canonical="https://www.angeligardens.co.uk/contact"
        breadcrumbs={[{ name: "Contact", url: "https://www.angeligardens.co.uk/contact" }]}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        {/* Animated floating leaves */}
        <motion.div
          className="absolute top-10 left-10 text-primary-foreground/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Leaf size={48} />
        </motion.div>
        <motion.div
          className="absolute top-20 right-20 text-primary-foreground/20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Flower2 size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-primary-foreground/20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sprout size={36} />
        </motion.div>
        
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
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Angeli Gardens</h1>
            <p className="text-xl text-primary-foreground/90">
              Ready to transform your outdoor space? Request a free quote or book a consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Angeli Gardens</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get in touch with <strong>Angeli Gardens</strong> for a free consultation and quote. We typically respond within 48 hours. Before contacting us, you might want to check our <Link to="/faq" className="text-primary hover:underline">FAQ</Link> or view our <Link to="/services" className="text-primary hover:underline">services</Link>.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+447542973733" className="text-muted-foreground hover:text-primary">
                      07542 973733
                    </a>
                    <div className="mt-2">
                      <Button asChild size="sm" className="gap-2">
                        <a href="tel:+447542973733">
                          <Phone className="h-4 w-4" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:Angeligardens1@gmail.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Angeligardens1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service Areas</h3>
                    <p className="text-muted-foreground">London, Surrey & Berkshire</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Working Hours</h3>
                    <p className="text-muted-foreground">Mon - Sat: 7:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Growing plant animation beside form */}
              <motion.div
                className="absolute -left-8 top-0 text-primary/30 hidden xl:block"
                initial={{ scaleY: 0, originY: 1 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Sprout size={64} />
              </motion.div>
              
              <div className="bg-card p-8 rounded-lg shadow-lg border-2 relative hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Leaf className="text-primary" size={28} />
                  </motion.div>
                  <h2 className="text-2xl font-bold">Request a Quote</h2>
                </div>
                
                {state.succeeded ? (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-primary mb-4"
                    >
                      <Flower2 size={64} className="mx-auto" />
                    </motion.div>
                    <p className="text-lg font-semibold text-primary mb-2">
                      ✅ Thank you! Your enquiry has been sent.
                    </p>
                    <p className="text-muted-foreground">
                      We'll get back to you within 48 hours. For urgent enquiries, call{" "}
                      <a href="tel:+447542973733" className="text-primary hover:underline">
                        07542 973733
                      </a>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        required
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          name="phone"
                          placeholder="07XXX XXXXXX"
                          required
                          pattern="^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$"
                          title="Enter a valid UK phone number"
                        />
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="postcode" className="block text-sm font-medium mb-2">
                        Postcode *
                      </label>
                      <Input
                        id="postcode"
                        type="text"
                        name="postcode"
                        placeholder="SW1A 1AA"
                        required
                      />
                      <ValidationError prefix="Postcode" field="postcode" errors={state.errors} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Services Required *</label>
                      <input
                        type="hidden"
                        name="services"
                        value={selectedServices.join(", ")}
                        required={selectedServices.length === 0}
                      />
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={selectedServices.includes(service)}
                              onCheckedChange={() => toggleService(service)}
                            />
                            <label
                              htmlFor={service}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {service}
                            </label>
                          </div>
                        ))}
                      </div>
                      {selectedServices.length === 0 && (
                        <p className="text-sm text-destructive mt-1">Please select at least one service</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        className="min-h-[120px]"
                        required
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <div>
                      <label htmlFor="contactMethod" className="block text-sm font-medium mb-2">
                        Preferred Contact Method *
                      </label>
                      <Select value={contactMethod} onValueChange={setContactMethod}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="contactMethod" value={contactMethod} />
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="gdprConsent"
                        checked={gdprConsent}
                        onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
                        required
                      />
                      <label
                        htmlFor="gdprConsent"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the privacy policy and consent to being contacted *
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full group"
                      size="lg"
                      disabled={state.submitting || selectedServices.length === 0 || !gdprConsent}
                    >
                      {state.submitting ? "Sending..." : "Request Free Quote"}
                      <motion.span
                        className="inline-block ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        🌱
                      </motion.span>
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
