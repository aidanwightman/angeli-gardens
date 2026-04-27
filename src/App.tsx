import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./components/Layout";
import ClickSpark from "./components/ClickSpark";
import FloatingCallButton from "./components/FloatingCallButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import London from "./pages/Areas/London";
import Surrey from "./pages/Areas/Surrey";
import Berkshire from "./pages/Areas/Berkshire";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ClickSpark sparkColor="hsl(var(--primary))" sparkSize={12} sparkRadius={20} sparkCount={10}>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/areas/london" element={<London />} />
                <Route path="/areas/surrey" element={<Surrey />} />
                <Route path="/areas/berkshire" element={<Berkshire />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <FloatingCallButton />
            </Layout>
          </ClickSpark>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
