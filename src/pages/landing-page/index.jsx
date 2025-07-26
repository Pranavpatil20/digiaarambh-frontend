import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import TechnologySection from './components/TechnologySection';
import TeamSection from './components/TeamSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const LandingPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Digiaarambh - Transform Your Business Vision Into Scalable Software 3x Faster';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Digiaarambh delivers enterprise-grade software solutions 3x faster than traditional agencies. Custom development, consulting, and ongoing support for businesses that demand excellence.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Digiaarambh delivers enterprise-grade software solutions 3x faster than traditional agencies. Custom development, consulting, and ongoing support for businesses that demand excellence.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Digiaarambh",
      "description": "Custom software development company specializing in scalable web applications and enterprise solutions",
      "url": "https://digiaarambh.com",
      "logo": "https://digiaarambh.com/assets/images/favicon-32x32-1753470753220.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "email": "hello@digiaarambh.com"
      },
      "sameAs": [
        "https://linkedin.com/company/digiaarambh",
        "https://twitter.com/digiaarambh",
        "https://github.com/digiaarambh"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.getElementsByTagName('head')[0].appendChild(script);

    // Cleanup function
    return () => {
      // Remove the structured data script when component unmounts
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.text.includes('Digiaarambh')) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Problem Agitation Section */}
        <ProblemSection />
        
        {/* Solution Showcase Section */}
        <SolutionSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Portfolio Section */}
        <PortfolioSection />
        
        {/* Client Testimonials Section */}
        <TestimonialsSection />
        
        {/* Technology Expertise Section */}
        <TechnologySection />
        
        {/* Team Credentials Section */}
        <TeamSection />
        
        {/* Development Process Section */}
        <ProcessSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;