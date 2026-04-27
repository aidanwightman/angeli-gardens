import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import CallButton from "@/components/CallButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import homeCarousel1 from "@/assets/home-carousel-1.jpg";
import homeCarousel2 from "@/assets/home-carousel-2.jpg";
import homeCarousel3 from "@/assets/home-carousel-3.jpg";
import homeCarousel4 from "@/assets/home-carousel-4.jpg";
import homeCarousel5 from "@/assets/home-carousel-5.jpg";
import lawnProject1 from "@/assets/lawn-project-1.jpg";
import lawnProject2 from "@/assets/lawn-project-2.jpg";
import lawnProject3 from "@/assets/lawn-project-3.jpg";
import lawnProject4 from "@/assets/lawn-project-4.jpg";
import lawnProject5 from "@/assets/lawn-project-5.jpg";
import lawnProject6 from "@/assets/lawn-project-6.jpg";
import { CheckatradeWidget } from "@/components/CheckatradeWidget";
import { SEOHead } from "@/components/SEOHead";

const Home = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const carouselImages = [
    homeCarousel1,
    homeCarousel2,
    homeCarousel3,
    homeCarousel4,
    homeCarousel5,
    lawnProject1,
    lawnProject2,
    lawnProject3,
    lawnProject4,
    lawnProject5,
    lawnProject6,
    project1,
    project2,
    project3,
    project4,
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "3", label: "Service Areas" },
    { value: "100%", label: "Satisfaction Rate" },
    { value: "Licensed", label: "Green Waste" },
  ];

  return (
    <div className="overflow-x-hidden">
      <SEOHead />
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <Carousel
          plugins={[autoplayPlugin.current]}
          className="absolute inset-0 -z-10"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[90vh] min-h-[600px]">
                  <img
                    src={image}
                    alt={`Recent landscaping project ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-background"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-balance tracking-tight">
              Angeli Gardens - Transform Your Outdoor Space
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-background/90 font-light">
              Angeli Gardens provides expert landscaping and garden services across London, Surrey & Berkshire
            </p>
            <p className="text-lg md:text-xl mb-8 text-background/80 font-light">
              <a href="https://www.checkatrade.com/trades/angeligardens" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-background">Checkatrade approved</a> with 9.75/10 rating
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg h-14 px-8">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <CallButton size="lg" variant="outline" className="text-lg h-14 px-8 bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background/20 flex items-center gap-2">
                <Phone size={20} />
                Call Now
              </CallButton>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 text-sm text-background/80">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Angeli Gardens serving</span>
              </div>
              <div className="flex items-center gap-2">
                <Link to="/areas/london" className="underline hover:text-background">London</Link>
                <span>•</span>
                <Link to="/areas/surrey" className="underline hover:text-background">Surrey</Link>
                <span>•</span>
                <Link to="/areas/berkshire" className="underline hover:text-background">Berkshire</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-background border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkatrade Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <CheckatradeWidget />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Animated floating elements */}
        <motion.div
          className="absolute top-8 left-[10%] text-primary-foreground/20"
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
          <Phone size={40} />
        </motion.div>
        <motion.div
          className="absolute top-12 right-[15%] text-primary-foreground/20"
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
          <MapPin size={36} />
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Garden with Angeli Gardens?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get a free, no-obligation quote from Angeli Gardens today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg h-14 px-8">
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
              <CallButton size="lg" variant="secondary" className="text-lg h-14 px-8 flex items-center gap-2">
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

export default Home;
