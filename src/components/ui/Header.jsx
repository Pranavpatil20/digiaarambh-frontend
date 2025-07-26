import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'process', label: 'Process', href: '#process' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-border' :'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                    <img 
                      src="/assets/images/favicon-32x32-1753470753220.png" 
                      alt="Digiaarambh Logo" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse-glow"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl lg:text-2xl font-bold text-foreground font-inter">
                    Digiaarambh
                  </h1>
                  <p className="text-xs text-muted-foreground font-mono">3x Faster Delivery</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-primary' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="default"
                size="sm"
                className="hidden sm:flex cta-shadow"
                onClick={() => handleNavClick('#contact')}
                iconName="Calendar"
                iconPosition="left"
                iconSize={16}
              >
                Free Audit
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle mobile menu"
              >
                <Icon 
                  name={isMobileMenuOpen ? "X" : "Menu"} 
                  size={24} 
                  strokeWidth={2}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-md z-40">
            <div className="px-6 py-8">
              <nav className="space-y-6">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? 'text-primary bg-primary/10 border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-border">
                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  className="cta-shadow"
                  onClick={() => handleNavClick('#contact')}
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Get Your Free Technical Audit
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Progress Indicator */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <div className="space-y-3">
          {navigationItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href)}
              className="group relative block"
              title={item.label}
            >
              <div 
                className={`w-2 h-8 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary' :'bg-muted hover:bg-muted-foreground'
                }`}
              ></div>
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-card border border-border px-3 py-1 rounded-md shadow-card">
                  <span className="text-sm font-medium text-card-foreground whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Floating Contact CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          variant="default"
          size="lg"
          className="cta-shadow animate-pulse-glow"
          onClick={() => handleNavClick('#contact')}
          iconName="MessageCircle"
          iconPosition="left"
        >
          <span className="hidden sm:inline">Start Project</span>
          <span className="sm:hidden">Contact</span>
        </Button>
      </div>
    </>
  );
};

export default Header;