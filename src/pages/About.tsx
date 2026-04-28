import { motion } from "framer-motion";
import { Award, Users, Target, Heart, ArrowLeft } from "lucide-react";
import CallButton from "@/components/CallButton";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { CHECKATRADE_CONFIG } from "@/config/checkatradeConfig";
import { useCheckatradeData } from "@/hooks/useCheckatradeData";

const About = () => {
  const { rating } = useCheckatradeData();
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "We take pride in delivering exceptional results that stand the test of time.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your vision is our priority. We listen, advise, and deliver beyond expectations.",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "On time, on budget, every time. We're a team you can count on.",
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "We care for the environment as much as we care for your garden.",
    },
  ];

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "3", label: "Service Areas" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div>
      <SEOHead
        title="About Angeli Gardens | Local Landscapers Based in Maidenhead, Berkshire"
        description="Angeli Gardens — founded by Marley Angeli, based in Maidenhead SL6. Checkatrade approved landscapers with 10+ years experience and 500+ projects across London, Surrey & Berkshire. Fully insured, free quotes."
        keywords="about Angeli Gardens, Marley Angeli landscaper, landscaper Maidenhead, garden services Berkshire, landscaping company London Surrey, professional landscapers SL6"
        canonical="https://www.angeligardens.co.uk/about"
        breadcrumbs={[{ name: "About", url: "https://www.angeligardens.co.uk/about" }]}
      />
      {/* Hero Section */}
      <section className="relative py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3">About Angeli Gardens - Expert Landscapers</h1>
            <p className="text-lg text-primary-foreground/90">
              Transforming outdoor spaces across London, Surrey & Berkshire for over a decade
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story + Stats combined */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="space-y-3 text-base text-muted-foreground">
                <p>
                  Founded by Marley, Angeli Gardens began with a simple passion: creating beautiful, functional outdoor spaces that bring joy to homeowners.
                </p>
                <p>
                  What started as a one-person operation has grown into a trusted team of skilled professionals. We believe every garden tells a story, and we're here to help you write yours.
                </p>
                <p>
                  From regular maintenance to complete landscape transformations, we come fully equipped with all professional tools — no hidden equipment costs. Today, we proudly serve clients across <Link to="/areas/london" className="text-primary hover:underline">London</Link>, <Link to="/areas/surrey" className="text-primary hover:underline">Surrey</Link>, and <Link to="/areas/berkshire" className="text-primary hover:underline">Berkshire</Link>. View our <Link to="/services" className="text-primary hover:underline">services</Link> or <Link to="/portfolio" className="text-primary hover:underline">portfolio</Link>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/portfolio-media/Garden-Room-Lawn.jpg"
                alt="Angeli Gardens striped lawn and garden room project"
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </motion.div>
          </div>

          {/* Stats inline */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t pt-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-2">Angeli Gardens Values</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              What drives us to deliver excellence in every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-5 pb-5 text-center">
                    <div className="inline-flex p-3 bg-primary/10 rounded-full mb-3">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Let's Create Something Beautiful</h2>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Ready to transform your outdoor space? Get in touch for a free consultation. As a <a href={CHECKATRADE_CONFIG.profileUrl} target="_blank" rel="noopener noreferrer" className="underline font-semibold">Checkatrade approved business</a> with a {rating}/{CHECKATRADE_CONFIG.maxRating} rating, you can trust us to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-14 px-8 bg-background text-foreground rounded-md font-medium hover:bg-background/90 transition-colors"
              >
                Get a Free Quote
              </a>
              <CallButton className="inline-flex items-center justify-center h-14 px-8 border-2 border-primary-foreground/30 rounded-md font-medium hover:bg-primary-foreground/10 transition-colors">
                Call: 07542 973733
              </CallButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
