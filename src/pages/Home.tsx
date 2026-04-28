import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star, ExternalLink } from "lucide-react";
import CallButton from "@/components/CallButton";
import { LogoLoop } from "@/components/LogoLoop";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Angeli from "@/assets/Angeli.jpeg";
import Angeli2 from "@/assets/Angeli2.jpeg";
import Angeli3 from "@/assets/Angeli3.jpeg";
import Angeli4 from "@/assets/Angeli4.jpeg";
import { SEOHead } from "@/components/SEOHead";
import { CHECKATRADE_CONFIG } from "@/config/checkatradeConfig";
import { useCheckatradeData } from "@/hooks/useCheckatradeData";

// Scrolling Checkatrade marquee strip
const CheckatradeMarquee = () => {
  const { rating, reviewCount } = useCheckatradeData();

  const card = (
    <a
      href={CHECKATRADE_CONFIG.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl px-6 py-4 shadow-lg hover:scale-[1.02] transition-transform select-none"
      style={{ minWidth: 340 }}
    >
      {/* Score badge */}
      <div className="bg-white rounded-lg px-4 py-3 text-center flex-shrink-0 shadow">
        <div className="text-3xl font-bold text-gray-900 leading-none">{rating}</div>
        <div className="text-sm text-gray-500 font-semibold">/5</div>
        <div className="flex gap-0.5 mt-1 justify-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
      {/* Text */}
      <div>
        <p className="font-bold text-lg leading-tight">Rated Excellent</p>
        <p className="text-blue-100 text-sm">{reviewCount} verified reviews</p>
        <p className="text-blue-200 text-xs mt-0.5">on Checkatrade</p>
      </div>
      <ExternalLink className="h-4 w-4 text-blue-200 ml-auto flex-shrink-0" />
    </a>
  );

  // Repeat the card as LogoLoop node items
  const items = Array.from({ length: 4 }, (_, i) => ({ node: card, ariaLabel: `Checkatrade rating ${i + 1}` }));

  return (
    <LogoLoop
      logos={items}
      speed={60}
      gap={24}
      pauseOnHover
      fadeOut
      fadeOutColor="white"
      logoHeight={90}
      ariaLabel="Checkatrade rating strip"
    />
  );
};

const Home = () => {
  const { rating } = useCheckatradeData();
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const carouselImages = [
    Angeli,
    Angeli2,
    Angeli3,
    Angeli4,
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
              <span className="font-bold underline">Angeli Gardens</span> Transform Your Outdoor Space
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-background/90 font-light">
              Angeli Gardens provides expert landscaping and garden services across London, Surrey & Berkshire
            </p>
            <p className="text-lg md:text-xl mb-8 text-background/80 font-light">
              <a href={CHECKATRADE_CONFIG.profileUrl} target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-background">Checkatrade approved</a> with {rating}/{CHECKATRADE_CONFIG.maxRating} rating
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
                <span>Based in <Link to="/areas/maidenhead" className="underline font-semibold hover:text-background">Maidenhead SL6</Link> · serving</span>
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

      {/* Checkatrade Marquee Section */}
      <section className="py-4 bg-background overflow-hidden">
        <CheckatradeMarquee />
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
