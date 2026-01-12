import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import {
  Leaf,
  Scissors,
  TreePine,
  Fence,
  Grid3x3,
  Home,
  Droplets,
  Flower2,
  Hammer,
  Palette,
  Sprout,
  WashingMachine,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

const Services = () => {
  const gardeningServices = [
    {
      icon: Leaf,
      title: "Regular Maintenance",
      description: "Keep your garden in perfect condition year-round",
      features: ["Weekly/fortnightly/monthly visits", "Lawn mowing & edging", "Weeding & tidying", "Seasonal care"],
    },
    {
      icon: Scissors,
      title: "Hedge Trimming & Topiary",
      description: "Precision cutting for beautifully shaped hedges",
      features: ["Professional shaping", "Height reduction", "Formal & informal styles", "Waste removal"],
    },
    {
      icon: TreePine,
      title: "Tree Pruning & Surgery",
      description: "Expert tree care to maintain health and safety",
      features: ["Crown reduction", "Dead wood removal", "Stump grinding"],
    },
    {
      icon: WashingMachine,
      title: "Garden Clearance",
      description: "Complete site clearance and waste removal",
      features: ["Overgrown garden clearance", "Green waste removal", "Site preparation", "One-off or regular"],
    },
    {
      icon: Flower2,
      title: "Planting & Borders",
      description: "Beautiful planting schemes tailored to your space",
      features: ["Seasonal planting", "Border design", "Plant selection", "Mulching & feeding"],
    },
    {
      icon: Sprout,
      title: "Lawn Treatment & Renovation",
      description: "Bring your lawn back to lush, green perfection",
      features: ["Scarification", "Aeration", "Overseeding", "Fertilization programs"],
    },
  ];

  const landscapingServices = [
    {
      icon: Grid3x3,
      title: "Patios & Paving",
      description: "Stunning patios that enhance your outdoor living",
      features: ["Natural stone & porcelain", "Pattern design", "Drainage solutions", "Quality foundations"],
    },
    {
      icon: Fence,
      title: "Fencing",
      description: "Secure, attractive fencing for every need",
      features: ["Panel & close board", "Picket & trellis", "Gate installation", "Repair & replacement"],
    },
    {
      icon: Home,
      title: "Decking",
      description: "Create beautiful outdoor entertaining spaces",
      features: ["Composite & timber", "Multi-level designs", "Balustrades & lighting", "Repair & maintenance"],
    },
    {
      icon: Hammer,
      title: "Shed Bases & Installation",
      description: "Solid foundations for sheds and outbuildings",
      features: ["Concrete bases", "Gravel bases", "Shed assembly", "Levelling services"],
    },
    {
      icon: Flower2,
      title: "Raised Beds & Planters",
      description: "Functional and beautiful raised garden features",
      features: ["Timber & brick", "Vegetable gardens", "Flower beds", "Custom designs"],
    },
    {
      icon: Palette,
      title: "Garden Walls & Structures",
      description: "Retaining walls and decorative garden features",
      features: ["Brick & stone walls", "Retaining structures", "Garden steps", "Pergolas & arbours"],
    },
    {
      icon: Droplets,
      title: "Turfing & Artificial Grass",
      description: "Instant lawns for all seasons",
      features: ["Premium turf", "Artificial grass", "Ground preparation", "Professional laying"],
    },
    {
      icon: WashingMachine,
      title: "Pressure Washing",
      description: "Restore surfaces to their former glory",
      features: ["Patios & driveways", "Decking cleaning", "Wall cleaning", "Gutter clearance"],
    },
  ];

  return (
    <div>
      <SEOHead
        title="Landscaping & Garden Services in London, Surrey & Berkshire | Angeli Gardens"
        description="Professional landscaping and garden services across London, Surrey & Berkshire. Checkatrade approved with 4.9/5 rating. Garden maintenance, patios, decking, fencing, turfing, and more. Free quotes."
        keywords="landscaping London, garden maintenance Surrey, landscaping Berkshire, patios London, decking Surrey, fencing Berkshire, turfing London, hedge trimming Surrey, tree pruning Berkshire, garden clearance London, Checkatrade approved landscaper"
        canonical="https://www.angeligardens.co.uk/services"
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        {/* Floating gardening animations */}
        <motion.div
          className="absolute top-10 left-[10%] text-primary-foreground/20"
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
          <Scissors size={40} />
        </motion.div>

        <motion.div
          className="absolute top-20 right-[15%] text-primary-foreground/20"
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
          <TreePine size={48} />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-[20%] text-primary-foreground/20"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Flower2 size={36} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-[25%] text-primary-foreground/20"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Leaf size={44} />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Angeli Gardens Services</h1>
            <p className="text-xl text-primary-foreground/90 mb-4">
              Comprehensive garden and landscaping solutions for private, communal and commercial properties across London, Surrey & Berkshire
            </p>
            <p className="text-lg text-primary-foreground/80">
              <a href="https://www.checkatrade.com/trades/angeligardens" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Checkatrade approved</a> with 4.9/5 rating - Trusted by 29+ customers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gardening & Maintenance */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Animated sprout */}
        <motion.div
          className="absolute top-10 right-[10%] text-primary/10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sprout size={60} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-[5%] text-primary/10"
          animate={{
            y: [0, -10, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Leaf size={50} />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Angeli Gardens Gardening & Maintenance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Regular care and expert maintenance to keep your garden thriving
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gardeningServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Hard & Soft Landscaping */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Animated tools */}
        <motion.div
          className="absolute top-16 left-[8%] text-primary/10"
          animate={{
            rotate: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Hammer size={55} />
        </motion.div>

        <motion.div
          className="absolute bottom-16 right-[12%] text-primary/10"
          animate={{
            y: [0, 10, 0],
            x: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Flower2 size={45} />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Angeli Gardens Hard & Soft Landscaping</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your outdoor space with quality construction and design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landscapingServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>


      {/* Service Areas */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Animated floating elements */}
        <motion.div
          className="absolute top-10 left-[12%] text-primary-foreground/20"
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
          className="absolute bottom-10 right-[10%] text-primary-foreground/20"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Flower2 size={40} />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Service Areas</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              We proudly serve residential and commercial clients across:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg font-medium mb-8">
              <span className="px-6 py-2 bg-primary-foreground/10 rounded-full">London</span>
              <span className="px-6 py-2 bg-primary-foreground/10 rounded-full">Surrey</span>
              <span className="px-6 py-2 bg-primary-foreground/10 rounded-full">Berkshire</span>
            </div>
            <div className="space-y-4 text-primary-foreground/90 max-w-3xl mx-auto text-left mb-6">
              <p className="text-lg">
                <strong>London Landscaping Services:</strong> From Central London to Greater London, we provide expert garden maintenance, landscaping, and hardscaping services. Whether you need regular garden upkeep in Kensington, a new patio in Richmond, or complete garden design in Wimbledon, we've got you covered. <Link to="/areas/london" className="underline font-semibold hover:text-primary-foreground">View all London areas we serve</Link>.
              </p>
              <p className="text-lg">
                <strong>Surrey Garden Services:</strong> Serving Surrey homeowners and businesses with professional landscaping, lawn care, and garden maintenance. From Guildford to Woking, Epsom to Reigate, we deliver quality garden services across the county. <Link to="/areas/surrey" className="underline font-semibold hover:text-primary-foreground">View all Surrey areas we serve</Link>.
              </p>
              <p className="text-lg">
                <strong>Berkshire Landscaping:</strong> Expert garden and landscaping services throughout Berkshire. From Reading to Windsor, Maidenhead to Slough, we transform outdoor spaces with quality craftsmanship and attention to detail. <Link to="/areas/berkshire" className="underline font-semibold hover:text-primary-foreground">View all Berkshire areas we serve</Link>.
              </p>
            </div>
            <p className="text-primary-foreground/80">
              Not sure if we cover your area? Give us a call and we'll be happy to discuss your project.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
