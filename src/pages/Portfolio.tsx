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
  // Final refined list: High-quality photos only.
  // Reordered to put the best work front and center.
  const mediaItems: MediaItem[] = [
    { id: 1, type: 'image', url: '/portfolio-media/Boat banger.jpeg', title: 'Featured Project: Garden Boat' },
    { id: 9, type: 'image', url: '/portfolio-media/Angeli-Lawn.jpeg', title: 'Pristine Estate Lawn Maintenance' },
    { id: 10, type: 'image', url: '/portfolio-media/Angeli-Garden-1.jpeg', title: 'Modern Landscaped Garden Overview' },
    { id: 2, type: 'image', url: '/portfolio-media/Nice brown patio chair.jpeg', title: 'Patio Furniture & Relaxation' },
    { id: 11, type: 'image', url: '/portfolio-media/Angeli-Garden-Close.jpeg', title: 'Tiled Patio & Lawn Transition' },
    { id: 14, type: 'image', url: '/portfolio-media/Artificial-Grass-Hedge.jpg', title: 'Contemporary Artificial Grass Solution' },
    { id: 3, type: 'image', url: '/portfolio-media/Patio brown.jpeg', title: 'Modern Brick Patio Detail' },
    { id: 16, type: 'image', url: '/portfolio-media/Pond-Decking.jpg', title: 'Garden Pond & Decking Feature' },
    { id: 4, type: 'image', url: '/portfolio-media/Shed.jpeg', title: 'Bespoke Garden Outbuilding' },
    { id: 15, type: 'image', url: '/portfolio-media/Modern-Garden-Shed.jpg', title: 'Premium Garden Studio Foundation' },
    { id: 5, type: 'image', url: '/portfolio-media/Patio garden.jpeg', title: 'Complete Landscape Overview' },
    { id: 13, type: 'image', url: '/portfolio-media/Potted-Trees.jpg', title: 'Decorative Topiary & Fencing Detail' },
    { id: 12, type: 'image', url: '/portfolio-media/Angeli-Lawn-Large.jpeg', title: 'Expansive Rural Lawn Care' },
    { id: 17, type: 'image', url: '/portfolio-media/Garden-Room-Lawn.jpg', title: 'Striped Lawn & Modern Garden Room' },
    { id: 6, type: 'image', url: '/portfolio-media/Green grass.jpeg', title: 'Pristine Lawn & Boarder Edging' },
    { id: 18, type: 'image', url: '/portfolio-media/Lawn-Stripes.jpg', title: 'Professional Lawn Striping' },
    { id: 7, type: 'image', url: '/portfolio-media/Compost.jpeg', title: 'Professional Garden Maintenance' },
    { id: 19, type: 'image', url: '/portfolio-media/Expansive-Lawn-Maintenance.jpg', title: 'Professional Acreage Maintenance' },
    { id: 8, type: 'image', url: '/portfolio-media/Shed ting.jpeg', title: 'Shed Installation Foundations' },
  ];

  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        title="Portfolio | Angeli Gardens Landscaping & Maintenance"
        description="View our recent landscaping and garden projects. Quality transformations including bespoke sheds, patios, and lawn care by Angeli Gardens."
        keywords="landscaping portfolio, garden photos, patio examples, garden boat, Angeli Gardens gallery"
        canonical="https://www.angeligardens.co.uk/portfolio"
      />

      {/* Portfolio Banner Removed - Navigation is sufficient */}

      {/* Media Feed */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-black/5 relative ring-1 ring-black/5 aspect-[4/3]">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={index < 2 ? "eager" : "lazy"}
                />
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
