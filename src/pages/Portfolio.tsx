import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";

interface MediaItem {
  id: number;
  type: 'image';
  url: string;
  title: string;
}

const Portfolio = () => {
  // Reordered as requested: Boat, Patio Furniture, Patio Detail first
  // Then the rest in a logical progression.
  // Using static thumbnails for videos.
  const mediaItems: MediaItem[] = [
    { id: 8, type: 'image', url: '/portfolio-media/Boat banger.jpeg', title: 'Featured Project: Garden Boat' },
    { id: 11, type: 'image', url: '/portfolio-media/Nice brown patio chair.jpeg', title: 'Patio Furniture & Relaxation' },
    { id: 12, type: 'image', url: '/portfolio-media/Patio brown.jpeg', title: 'Brick Patio Detail' },
    { id: 13, type: 'image', url: '/portfolio-media/Patio garden.jpeg', title: 'Complete Landscape Overview' },
    { id: 10, type: 'image', url: '/portfolio-media/Green grass.jpeg', title: 'Pristine Lawn & Edging' },
    { id: 1, type: 'image', url: '/portfolio-media/garden-path-thumb.png', title: 'Modern Garden Path' },
    { id: 4, type: 'image', url: '/portfolio-media/wet-patio-thumb.png', title: 'New Patio Installation' },
    { id: 5, type: 'image', url: '/portfolio-media/fence-thumb.png', title: 'Professional Boundary Fencing' },
    { id: 2, type: 'image', url: '/portfolio-media/nice-garden-thumb.png', title: 'Garden Design & Layout' },
    { id: 9, type: 'image', url: '/portfolio-media/Compost.jpeg', title: 'Garden Maintenance & Soil' },
    { id: 6, type: 'image', url: '/portfolio-media/wet-brown-thumb.png', title: 'Tiling & Surface Work' },
    { id: 7, type: 'image', url: '/portfolio-media/wet-brown-2-thumb.png', title: 'Groundwork & Drainage' },
    { id: 14, type: 'image', url: '/portfolio-media/Shed ting.jpeg', title: 'Custom Shed Foundation' },
    { id: 15, type: 'image', url: '/portfolio-media/Shed.jpeg', title: 'Bespoke Garden Outbuilding' },
    { id: 3, type: 'image', url: '/portfolio-media/potting-thumb.png', title: 'Potting & Planting Preparation' },
  ];

  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        title="Portfolio | Angeli Gardens Landscaping & Maintenance"
        description="View our latest landscaping and garden maintenance projects across London, Surrey, and Berkshire. Quality transformations by Angeli Gardens."
        keywords="landscaping portfolio, garden photos, patio examples, garden boat, Angeli Gardens gallery"
        canonical="https://www.angeligardens.co.uk/portfolio"
      />

      {/* Portfolio Banner Removed - Navigation is sufficient */}

      {/* Media Feed */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group flex flex-col items-center"
            >
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-black/5 relative ring-1 ring-black/5 aspect-[4/5] md:aspect-video">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-foreground/90 tracking-tight">{item.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Final CTA */}
      <section className="py-20 bg-muted/30 text-center border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Ready to start your project?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-14 px-8 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg active:scale-95"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:07542973733"
              className="inline-flex items-center justify-center h-14 px-8 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary/5 transition-all active:scale-95"
            >
              Call Us: 07542 973733
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
