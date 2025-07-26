import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Custom Development",
      description: "End-to-end software development tailored to your business needs",
      icon: "Code2",
      timeline: "8-24 weeks",
      features: [
        "Full-stack web applications",
        "Mobile app development", 
        "API development & integration",
        "Database design & optimization",
        "Third-party integrations",
        "Performance optimization"
      ],
      benefits: [
        "40% faster time-to-market",
        "60% reduction in maintenance costs",
        "99.9% uptime guarantee",
        "Scalable architecture"
      ],
      cta: "Get Technical Consultation"
    },
    {
      title: "Technical Consulting",
      description: "Expert guidance to optimize your technology strategy and architecture",
      icon: "Users",
      timeline: "2-8 weeks",
      features: [
        "Technology stack assessment",
        "Architecture review & recommendations",
        "Code quality audit",
        "Performance optimization",
        "Security vulnerability assessment",
        "Team training & mentoring"
      ],
      benefits: [
        "Free technical audit included",
        "Actionable improvement roadmap",
        "Risk mitigation strategies",
        "Cost optimization recommendations"
      ],
      cta: "Get Free Technical Audit"
    },
    {
      title: "Ongoing Maintenance",
      description: "Reliable support and continuous improvement for your software systems",
      icon: "Settings",
      timeline: "Ongoing Support",
      features: [
        "24/7 monitoring & support",
        "Regular security updates",
        "Performance monitoring",
        "Bug fixes & improvements",
        "Feature enhancements",
        "Backup & disaster recovery"
      ],
      benefits: [
        "99.95% uptime guarantee",
        "4-hour response time SLA",
        "Proactive issue prevention",
        "Dedicated support team"
      ],
      cta: "View Technical SLA Details"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Icon name="Briefcase" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Software Development{' '}
            <span className="text-gradient-primary">Solutions</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial concept to ongoing maintenance, we provide comprehensive software development services that scale with your business growth.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                    activeService === index
                      ? 'bg-card border-primary shadow-lg'
                      : 'bg-card/50 border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      activeService === index ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon name={service.icon} size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:w-2/3">
            <div className="bg-card border border-border rounded-xl p-8 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-xl flex items-center justify-center">
                    <Icon name={services[activeService].icon} size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{services[activeService].title}</h3>
                    <p className="text-muted-foreground">{services[activeService].description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-primary">{services[activeService].timeline}</div>
                  <div className="text-sm text-muted-foreground">Typical Duration</div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Technical Capabilities</h4>
                  <ul className="space-y-3">
                    {services[activeService].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Check" size={16} className="text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Technical Benefits</h4>
                  <ul className="space-y-3">
                    {services[activeService].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Star" size={16} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Button
                  variant="default"
                  size="lg"
                  onClick={scrollToContact}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="cta-shadow"
                >
                  {services[activeService].cta}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Excellence Showcase */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-card">
          <div className="text-center mb-8">
            <Icon name="Code" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Technical Excellence Standards</h3>
            <p className="text-muted-foreground">Our commitment to delivering high-quality, scalable solutions</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl">
              <Icon name="Shield" size={32} className="text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground mb-2">Uptime Guarantee</div>
              <div className="text-sm text-muted-foreground">Enterprise-grade reliability with redundant systems</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 rounded-xl">
              <Icon name="Zap" size={32} className="text-secondary mx-auto mb-4" />
              <div className="text-2xl font-bold text-secondary mb-2">&lt; 100ms</div>
              <div className="text-muted-foreground mb-2">Response Time</div>
              <div className="text-sm text-muted-foreground">Optimized performance with global CDN distribution</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl">
              <Icon name="Database" size={32} className="text-accent mx-auto mb-4" />
              <div className="text-2xl font-bold text-accent mb-2">10M+</div>
              <div className="text-muted-foreground mb-2">Records Processed</div>
              <div className="text-sm text-muted-foreground">Scalable architecture handling massive data volumes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;