import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, Leaf, Flower2, Sprout } from "lucide-react";
import CallButton from "@/components/CallButton";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SEOHead } from "@/components/SEOHead";
import TiltedCard from "@/components/TiltedCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";
import beforeAfter4 from "@/assets/before-after-4.jpg";
import beforeAfter5 from "@/assets/before-after-5.jpg";
import beforeAfter6 from "@/assets/before-after-6.jpg";
import lawnProject1 from "@/assets/lawn-project-1.jpg";
import lawnProject2 from "@/assets/lawn-project-2.jpg";
import lawnProject3 from "@/assets/lawn-project-3.jpg";
import lawnProject4 from "@/assets/lawn-project-4.jpg";
import lawnProject5 from "@/assets/lawn-project-5.jpg";
import lawnProject6 from "@/assets/lawn-project-6.jpg";
import newProject1 from "@/assets/new-project-1.jpg";
import newProject2 from "@/assets/new-project-2.jpg";
import newProject3 from "@/assets/new-project-3.jpg";
import newProject4 from "@/assets/new-project-4.jpg";
import newProject5 from "@/assets/new-project-5.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Contemporary Garden Oasis",
      category: "landscaping",
      description: "Complete transformation with decking, water feature, and lush planting",
      challenge: "Transform an overgrown, unusable garden into a modern outdoor living space",
      solution: "Designed and installed a multi-level composite deck with integrated pond, surrounded by thoughtfully planned planting beds",
      outcome: "A stunning, low-maintenance garden that has become the heart of the home, perfect for entertaining",
      image: project3,
    },
    {
      id: 2,
      title: "Pristine Lawn Installation",
      category: "maintenance",
      description: "Professional turfing and garden maintenance transformation",
      challenge: "Patchy, uneven lawn requiring complete renovation",
      solution: "Removed old turf, leveled ground, improved drainage, and laid premium quality turf",
      outcome: "A lush, even lawn that's the envy of the neighborhood, maintained to perfection",
      image: project2,
    },
    {
      id: 3,
      title: "Expansive Lawn Restoration",
      category: "maintenance",
      description: "Large-scale lawn renovation and maintenance program",
      challenge: "Large garden with neglected lawn requiring comprehensive care",
      solution: "Implemented scarification, aeration, overseeding, and regular maintenance schedule",
      outcome: "Vibrant, healthy lawn restored to its full potential with ongoing care",
      image: project1,
    },
    {
      id: 4,
      title: "Modern Patio & Landscaping",
      category: "landscaping",
      description: "Contemporary patio design with surrounding garden improvements",
      challenge: "Create a stylish, functional outdoor space for entertaining",
      solution: "Installed modern patio with quality paving, complemented by refined lawn and border work",
      outcome: "Elegant outdoor living area that seamlessly connects indoor and outdoor spaces",
      image: project4,
    },
    {
      id: 5,
      title: "Garden Transformation",
      category: "landscaping",
      description: "Complete garden renovation and landscaping project",
      challenge: "Overgrown garden requiring complete redesign and installation",
      solution: "Full clearance, new layout design, quality materials and professional installation",
      outcome: "A beautiful, functional outdoor space perfect for family enjoyment",
      image: beforeAfter1,
    },
    {
      id: 6,
      title: "Professional Garden Maintenance",
      category: "maintenance",
      description: "Regular maintenance and seasonal care program",
      challenge: "Maintaining a pristine garden throughout the year",
      solution: "Weekly maintenance visits with expert care and attention to detail",
      outcome: "A consistently beautiful garden that thrives in all seasons",
      image: beforeAfter2,
    },
    {
      id: 7,
      title: "Landscape Redesign",
      category: "landscaping",
      description: "Modern landscape design with quality hardscaping",
      challenge: "Dated garden requiring contemporary update",
      solution: "New paving, updated planting scheme, and improved garden structure",
      outcome: "A fresh, modern garden that enhances the property value",
      image: beforeAfter3,
    },
    {
      id: 8,
      title: "Garden Clearance & Restoration",
      category: "maintenance",
      description: "Complete clearance and garden restoration",
      challenge: "Severely overgrown garden requiring extensive clearance",
      solution: "Systematic clearance, soil improvement, and careful replanting",
      outcome: "A rejuvenated garden space ready for enjoyment",
      image: beforeAfter4,
    },
    {
      id: 9,
      title: "Premium Landscaping Project",
      category: "landscaping",
      description: "High-end landscaping with quality materials and design",
      challenge: "Creating an elegant outdoor entertaining space",
      solution: "Premium materials, expert craftsmanship, and thoughtful design",
      outcome: "A luxurious garden perfect for outdoor living and entertaining",
      image: beforeAfter5,
    },
    {
      id: 10,
      title: "Garden Enhancement",
      category: "maintenance",
      description: "Ongoing care and garden enhancement program",
      challenge: "Maintaining and improving an established garden",
      solution: "Regular professional care with seasonal enhancements",
      outcome: "A garden that continuously improves and delights",
      image: beforeAfter6,
    },
    {
      id: 11,
      title: "Autumn Lawn Care",
      category: "maintenance",
      description: "Professional lawn maintenance and leaf clearance",
      challenge: "Managing autumn leaf fall while maintaining pristine lawn stripes",
      solution: "Regular mowing with professional striping, leaf clearance, and seasonal care",
      outcome: "Beautiful striped lawn maintained throughout autumn season",
      image: lawnProject1,
    },
    {
      id: 12,
      title: "Precision Lawn Striping",
      category: "maintenance",
      description: "Expert lawn care with professional striping technique",
      challenge: "Achieving and maintaining perfect lawn stripes on established grass",
      solution: "Professional mowing techniques with careful attention to cutting height and pattern",
      outcome: "Stunning striped lawn that enhances the entire garden aesthetic",
      image: lawnProject2,
    },
    {
      id: 13,
      title: "Sloped Lawn Maintenance",
      category: "maintenance",
      description: "Specialized care for challenging sloped lawns",
      challenge: "Maintaining even growth and appearance on a sloped garden lawn",
      solution: "Expert mowing techniques adapted for slopes, with careful edge work",
      outcome: "Perfectly maintained sloped lawn with professional finish",
      image: lawnProject3,
    },
    {
      id: 14,
      title: "Orchard Lawn Care",
      category: "maintenance",
      description: "Lawn maintenance around mature fruit trees",
      challenge: "Caring for grass around established trees while managing fallen fruit",
      solution: "Careful mowing around tree roots with fruit collection and lawn care",
      outcome: "Healthy lawn complementing mature orchard trees beautifully",
      image: lawnProject4,
    },
    {
      id: 15,
      title: "Large Garden Maintenance",
      category: "maintenance",
      description: "Comprehensive lawn care for expansive garden spaces",
      challenge: "Maintaining large lawn areas with consistent quality and appearance",
      solution: "Efficient professional mowing with attention to detail across entire space",
      outcome: "Immaculate large lawn area perfect for family enjoyment",
      image: lawnProject5,
    },
    {
      id: 16,
      title: "Premium Lawn Maintenance",
      category: "maintenance",
      description: "Regular professional lawn care and striping service",
      challenge: "Maintaining consistent quality and appearance week after week",
      solution: "Weekly professional visits with precise mowing and striping technique",
      outcome: "Consistently beautiful lawn that remains pristine year-round",
      image: lawnProject6,
    },
    {
      id: 17,
      title: "Driveway & Lawn Edging",
      category: "landscaping",
      description: "Professional driveway landscaping with pristine lawn edges",
      challenge: "Creating clean, defined edges between driveway and lawn areas",
      solution: "Expert edging work with careful attention to curves and lines",
      outcome: "Neat, well-defined outdoor space with enhanced curb appeal",
      image: newProject1,
    },
    {
      id: 18,
      title: "Artificial Grass & Screening",
      category: "landscaping",
      description: "Modern artificial grass installation with decorative planting",
      challenge: "Creating a low-maintenance garden with year-round appeal",
      solution: "Quality artificial grass with timber screening and potted feature trees",
      outcome: "Beautiful, maintenance-free garden space perfect for relaxation",
      image: newProject2,
    },
    {
      id: 19,
      title: "Contemporary Garden Design",
      category: "landscaping",
      description: "Complete garden transformation with artificial grass and planting",
      challenge: "Modernizing a traditional garden space with low-maintenance solutions",
      solution: "Premium artificial grass with curved borders and diverse planting scheme",
      outcome: "Stunning contemporary garden that looks perfect all year",
      image: newProject3,
    },
    {
      id: 20,
      title: "Residential Driveway Enhancement",
      category: "landscaping",
      description: "Driveway and surrounding lawn improvement project",
      challenge: "Enhancing driveway aesthetics while maintaining healthy lawns",
      solution: "Professional edging and lawn care around residential driveway",
      outcome: "Polished, welcoming entrance with beautifully maintained verges",
      image: newProject4,
    },
    {
      id: 21,
      title: "Artificial Lawn Installation",
      category: "landscaping",
      description: "Premium artificial grass with ornamental borders",
      challenge: "Creating a perfect lawn that requires minimal upkeep",
      solution: "High-quality artificial turf with carefully designed planted borders",
      outcome: "Flawless green space that looks immaculate throughout the year",
      image: newProject5,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "landscaping", label: "Landscaping" },
    { id: "maintenance", label: "Maintenance" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div>
      <SEOHead
        title="Our Portfolio | Landscaping Projects in London, Surrey & Berkshire | Angeli Gardens"
        description="View our portfolio of landscaping and garden projects across London, Surrey & Berkshire. See before and after transformations, patios, decking, lawn care, and complete garden designs. Checkatrade approved."
        keywords="Angeli Gardens portfolio, landscaping projects London, garden transformations Surrey, before after landscaping, landscaping examples Berkshire"
        canonical="https://www.angeligardens.co.uk/portfolio"
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        {/* Animated floating elements */}
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
          <Leaf size={48} />
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
          <Flower2 size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-[10%] text-primary-foreground/20"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Angeli Gardens Portfolio</h1>
            <p className="text-xl text-primary-foreground/90">
              Explore our recent projects and see how we've transformed gardens across the region
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background/95 backdrop-blur-md sticky top-0 z-40 border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-background hover:bg-primary/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3]"
                >
                  <TiltedCard
                    imageSrc={project.image}
                    altText={project.title}
                    captionText={project.title}
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    onClick={() => setSelectedProject(project)}
                    overlayContent={
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-background pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent opacity-60" />
                        <div className="relative z-10">
                          <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full mb-3">
                            {project.category === "landscaping" ? "Landscaping" : "Maintenance"}
                          </span>
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <p className="text-background/90">{project.description}</p>
                        </div>
                      </div>
                    }
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <div className="space-y-6">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                  {selectedProject.category === "landscaping" ? "Landscaping" : "Maintenance"}
                </span>
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{selectedProject.description}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">The Challenge</h3>
                  <p className="text-muted-foreground">{selectedProject.challenge}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Our Solution</h3>
                  <p className="text-muted-foreground">{selectedProject.solution}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">The Outcome</h3>
                  <p className="text-muted-foreground">{selectedProject.outcome}</p>
                </div>
              </div>

              <div className="pt-6 border-t">
                <p className="text-center text-muted-foreground mb-4">
                  Inspired by this transformation? View our <Link to="/services" className="text-primary hover:underline">services</Link> or check out more in our <Link to="/portfolio" className="text-primary hover:underline">portfolio</Link>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center h-11 px-6 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
                  >
                    Get Your Free Quote
                  </Link>
                  <CallButton className="inline-flex items-center justify-center h-11 px-6 border border-input rounded-md font-medium hover:bg-accent transition-colors">
                    Call Us Today
                  </CallButton>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Animated floating elements */}
        <motion.div
          className="absolute top-10 left-[8%] text-primary-foreground/20"
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
          className="absolute bottom-10 right-[12%] text-primary-foreground/20"
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
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Let's create something beautiful together. Get your free, no-obligation quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-14 px-8 bg-background text-foreground rounded-md font-medium hover:bg-background/90 transition-colors"
              >
                Get a Free Quote
              </Link>
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

export default Portfolio;
