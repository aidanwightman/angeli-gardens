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
    { id: 2, type: 'image', url: '/portfolio-media/Nice brown patio chair.jpeg', title: 'Patio Furniture & Relaxation' },
    { id: 3, type: 'image', url: '/portfolio-media/Patio brown.jpeg', title: 'Modern Brick Patio Detail' },
    { id: 4, type: 'image', url: '/portfolio-media/Shed.jpeg', title: 'Bespoke Garden Outbuilding' },
    { id: 5, type: 'image', url: '/portfolio-media/Patio garden.jpeg', title: 'Complete Landscape Overview' },
    { id: 6, type: 'image', url: '/portfolio-media/Green grass.jpeg', title: 'Pristine Lawn & Boarder Edging' },
    { id: 7, type: 'image', url: '/portfolio-media/Compost.jpeg', title: 'Professional Garden Maintenance' },
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
        <div className="max-w-4xl mx-auto space-y-20">
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
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>
              <div className="mt-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground/90 tracking-tight">{item.title}</h2>
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
