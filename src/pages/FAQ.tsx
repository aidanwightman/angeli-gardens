import { motion } from "framer-motion";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We proudly serve residential and commercial clients across London, Surrey, and Berkshire. This includes areas such as Kensington, Richmond, Wimbledon, Guildford, Woking, Epsom, Reigate, Reading, Windsor, Maidenhead, and Slough. If you're unsure if we cover your area, please give us a call and we'll be happy to discuss your project.",
      hasLinks: true,
      links: [
        { text: "View London areas", to: "/areas/london" },
        { text: "View Surrey areas", to: "/areas/surrey" },
        { text: "View Berkshire areas", to: "/areas/berkshire" }
      ],
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies depending on the scope and size of your project. We offer free, no-obligation quotes for all work. Contact us with details of your project and we'll provide a transparent, detailed quote. We believe in fair, competitive pricing with no hidden costs.",
    },
    {
      question: "Are you Checkatrade approved?",
      answer: "Yes! We are a Checkatrade approved business with an excellent 4.9/5 rating based on 29 verified customer reviews. You can view our full Checkatrade profile and read all our reviews at https://www.checkatrade.com/trades/angeligardens",
    },
    {
      question: "Do you provide free quotes?",
      answer: "Absolutely! We offer free, no-obligation quotes for all projects, whether it's a one-off job or regular maintenance. Simply contact us via phone, email, or our online contact form, and we'll arrange a convenient time to discuss your requirements and provide a detailed quote.",
    },
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive garden and landscaping services including: regular garden maintenance, hedge trimming & topiary, tree pruning & surgery, garden clearance, planting & borders, lawn treatment & renovation, patios & paving, fencing, decking, shed bases & installation, raised beds & planters, garden walls & structures, turfing & artificial grass, and pressure washing.",
      hasLinks: true,
      links: [{ text: "View our Services page", to: "/services" }],
    },
    {
      question: "How long have you been in business?",
      answer: "Angeli Gardens has been transforming outdoor spaces for over 10 years. Founded by Marley, we've grown from a one-person operation to a trusted team of skilled professionals, completing 500+ projects across London, Surrey, and Berkshire.",
    },
    {
      question: "Are you fully insured?",
      answer: "Yes, we are fully insured and licensed for green waste disposal. We come fully equipped with all professional tools, so you never have to worry about additional equipment costs. Your peace of mind is our priority.",
    },
    {
      question: "What are your working hours?",
      answer: "We operate Monday to Saturday from 7:00 AM to 6:00 PM. We're closed on Sundays. For urgent enquiries outside these hours, please leave a message and we'll get back to you as soon as possible.",
    },
    {
      question: "Do you work on commercial properties?",
      answer: "Yes, we work on both residential and commercial properties. Whether you need regular maintenance for office buildings, landscaping for commercial developments, or one-off projects, we have the expertise and equipment to handle projects of all sizes.",
    },
    {
      question: "How quickly can you start a project?",
      answer: "This depends on the size and complexity of your project, as well as our current schedule. For regular maintenance, we can often start within a week or two. For larger landscaping projects, we typically book 2-4 weeks in advance. Contact us to discuss your timeline and we'll do our best to accommodate your needs.",
    },
    {
      question: "Do you offer regular maintenance contracts?",
      answer: "Yes, we offer flexible maintenance contracts tailored to your needs. Whether you require weekly, fortnightly, or monthly visits, we can create a maintenance schedule that keeps your garden looking its best year-round. Regular maintenance clients often benefit from priority booking and competitive rates.",
    },
    {
      question: "What makes you different from other landscapers?",
      answer: "We combine over 10 years of experience with a genuine passion for creating beautiful outdoor spaces. We're Checkatrade approved with a 4.9/5 rating, fully insured, and come fully equipped. We're committed to quality craftsmanship, customer satisfaction, and sustainability. Every project is approached with attention to detail and a focus on exceeding expectations.",
    },
  ];

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    script.id = "faq-schema";
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("faq-schema");
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div>
      <SEOHead
        title="Frequently Asked Questions | Angeli Gardens | Landscaping FAQ"
        description="Frequently asked questions about Angeli Gardens landscaping services. Learn about our services, pricing, areas we serve, Checkatrade approval, and more. Get answers to common questions about garden maintenance, landscaping, and our work across London, Surrey & Berkshire."
        keywords="landscaping FAQ, garden services questions, landscaping London FAQ, garden maintenance Surrey questions, Checkatrade approved landscaper FAQ, landscaping Berkshire FAQ"
        canonical="https://www.angeligardens.co.uk/faq"
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
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex p-4 bg-primary-foreground/10 rounded-full mb-6">
              <HelpCircle size={48} className="text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-primary-foreground/90">
              Find answers to common questions about our landscaping and garden services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  <p>{faq.answer}</p>
                  {faq.hasLinks && faq.links && (
                    <div className="mt-3 flex flex-wrap gap-3">
                      {faq.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          to={link.to}
                          className="text-primary hover:underline font-medium inline-block"
                        >
                          {link.text} →
                        </Link>
                      ))}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-muted/50 rounded-lg text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              We're here to help! Get in touch and we'll be happy to answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-12 px-6 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:07542973733"
                className="inline-flex items-center justify-center h-12 px-6 border-2 border-primary rounded-md font-medium hover:bg-primary/10 transition-colors"
              >
                Call: 07542 973733
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

