import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press Kit', href: '#press' }
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'Consulting', href: '#services' }
    ],
    resources: [
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Blog', href: '#blog' },
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com/company/techforgestudios' },
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com/techforgestudios' },
    { name: 'GitHub', icon: 'Github', href: 'https://github.com/techforgestudios' },
    { name: 'Dribbble', icon: 'Palette', href: 'https://dribbble.com/techforgestudios' }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', icon: 'Shield' },
    { name: 'ISO 27001', icon: 'Award' },
    { name: 'GDPR Compliant', icon: 'Lock' },
    { name: 'AWS Partner', icon: 'Cloud' }
  ];

  const contactInfo = {
    email: 'hello@techforgestudios.com',
    phone: '+1 (555) 123-4567',
    address: '123 Innovation Drive, Tech Valley, CA 94000'
  };

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                    <img 
                      src="/assets/images/favicon-32x32-1753470753220.png" 
                      alt="Digiaarambh Logo" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse-glow"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground font-inter">
                    Digiaarambh
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">3x Faster Delivery</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We transform business visions into powerful, scalable software solutions. Our team of expert developers from top tech companies delivers enterprise-grade applications 3x faster than traditional agencies.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <a href={`tel:${contactInfo.phone}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={16} className="text-primary mt-0.5" />
                  <span className="text-muted-foreground">{contactInfo.address}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    onClick={() => scrollToSection(social.href)}
                    className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="py-8 border-t border-border">
          <div className="text-center mb-8">
            <h4 className="font-semibold text-foreground mb-4">Security & Compliance</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center space-x-2 px-4 py-2 bg-background border border-border rounded-lg">
                  <Icon name={cert.icon} size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © {currentYear} Digiaarambh. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Built with ❤️ using React, Tailwind CSS, and modern web technologies.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="py-8 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warning mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;