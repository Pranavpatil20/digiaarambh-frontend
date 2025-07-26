import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('project');
  const [selectedPackage, setSelectedPackage] = useState(1);

  const pricingPackages = [
    {
      id: 0,
      name: "Startup Package",
      description: "Perfect for MVPs and early-stage startups",
      price: { project: "25k - 50k", monthly: "5k - 10k" },
      duration: "8-12 weeks",
      ideal: "Startups, MVPs, Small businesses",
      features: [
        "Full-stack web application",
        "Responsive design (mobile + desktop)",
        "User authentication & authorization",
        "Database design & setup",
        "Basic admin panel",
        "API development",
        "3 months post-launch support",
        "Basic analytics integration",
        "SSL certificate & security setup",
        "Documentation & training"
      ],
      limitations: [
        "Up to 5 user roles",
        "Basic integrations only",
        "Standard hosting setup"
      ],
      popular: false,
      cta: "Start Your MVP"
    },
    {
      id: 1,
      name: "Growth Package",
      description: "Comprehensive solution for scaling businesses",
      price: { project: "50k - 150k", monthly: "10k - 25k" },
      duration: "12-20 weeks",
      ideal: "Growing companies, Series A/B startups",
      features: [
        "Everything in Startup Package",
        "Advanced user management system",
        "Third-party integrations (Stripe, AWS, etc.)",
        "Real-time features (chat, notifications)",
        "Advanced analytics & reporting",
        "Mobile app (React Native)",
        "CI/CD pipeline setup",
        "Performance optimization",
        "6 months post-launch support",
        "Load balancing & auto-scaling",
        "Advanced security features",
        "Custom integrations"
      ],
      limitations: [
        "Up to 15 user roles",
        "Standard SLA response times"
      ],
      popular: true,
      cta: "Scale Your Business"
    },
    {
      id: 2,
      name: "Enterprise Package",
      description: "Custom enterprise solutions with dedicated team",
      price: { project: "150k+", monthly: "25k+" },
      duration: "20+ weeks",
      ideal: "Large enterprises, Fortune 500 companies",
      features: [
        "Everything in Growth Package",
        "Dedicated development team",
        "Custom architecture design",
        "Enterprise-grade security",
        "SOC 2 / HIPAA compliance",
        "Multi-region deployment",
        "24/7 monitoring & support",
        "Priority support (2-hour SLA)",
        "Custom integrations & APIs",
        "Advanced DevOps & infrastructure",
        "Unlimited user roles & permissions",
        "White-label solutions",
        "12 months post-launch support",
        "On-site training & consultation"
      ],
      limitations: [],
      popular: false,
      cta: "Get Custom Quote"
    }
  ];

  const addOns = [
    {
      name: "Mobile App Development",
      description: "Native iOS/Android or React Native app",
      price: "+$15k - $40k",
      icon: "Smartphone"
    },
    {
      name: "Advanced Analytics",
      description: "Custom dashboards and reporting system",
      price: "+$8k - $20k",
      icon: "BarChart3"
    },
    {
      name: "AI/ML Integration",
      description: "Machine learning features and AI capabilities",
      price: "+$20k - $60k",
      icon: "Brain"
    },
    {
      name: "DevOps & Infrastructure",
      description: "Advanced CI/CD, monitoring, and scaling",
      price: "+$10k - $25k",
      icon: "Server"
    }
  ];

  const comparisonFeatures = [
    { category: "Development", features: [
      "Custom web application",
      "Responsive design",
      "Database design",
      "API development",
      "Third-party integrations",
      "Real-time features",
      "Mobile app",
      "Advanced architecture"
    ]},
    { category: "Support & Maintenance", features: [
      "Post-launch support",
      "Bug fixes & updates",
      "Performance monitoring",
      "Security updates",
      "Priority support",
      "24/7 monitoring",
      "Dedicated support team",
      "On-site consultation"
    ]},
    { category: "Security & Compliance", features: [
      "SSL certificate",
      "Basic security setup",
      "Advanced security features",
      "SOC 2 compliance",
      "HIPAA compliance",
      "Enterprise security",
      "Security audits",
      "Penetration testing"
    ]}
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <Icon name="DollarSign" size={16} className="text-accent mr-2" />
            <span className="text-sm font-medium text-accent">Transparent Pricing</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Investment That Drives{' '}
            <span className="text-gradient-primary">Real ROI</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the package that fits your business stage. All packages include transparent pricing, no hidden fees, and guaranteed on-time delivery.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-card border border-border rounded-lg">
            <button
              onClick={() => setBillingCycle('project')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === 'project' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Project-Based
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === 'monthly' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly Retainer
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative bg-card border rounded-xl p-8 shadow-card transition-all duration-300 hover:shadow-lg ${
                pkg.popular 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">${pkg.price[billingCycle]}</span>
                  <span className="text-muted-foreground ml-2">
                    {billingCycle === 'monthly' ? '/month' : 'total'}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Clock" size={14} />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Users" size={14} />
                    <span>{pkg.ideal}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-foreground">What's Included:</h4>
                <ul className="space-y-2">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Icon name="Check" size={16} className="text-success mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {pkg.limitations.length > 0 && (
                  <div className="pt-4 border-t border-border">
                    <h5 className="font-medium text-foreground mb-2">Limitations:</h5>
                    <ul className="space-y-1">
                      {pkg.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="flex items-start">
                          <Icon name="Minus" size={14} className="text-muted-foreground mr-2 mt-1 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Button
                variant={pkg.popular ? "default" : "outline"}
                size="lg"
                fullWidth
                onClick={scrollToContact}
                iconName="ArrowRight"
                iconPosition="right"
                className={pkg.popular ? "cta-shadow" : ""}
              >
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Optional Add-ons
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center shadow-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={addon.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{addon.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
                <div className="text-lg font-bold text-primary">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
          <div className="p-8 border-b border-border">
            <h3 className="text-2xl font-bold text-foreground text-center">
              Detailed Feature Comparison
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-foreground">Features</th>
                  {pricingPackages.map((pkg) => (
                    <th key={pkg.id} className="text-center p-4 font-semibold text-foreground min-w-[150px]">
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr className="bg-muted/30">
                      <td colSpan={4} className="p-4 font-semibold text-foreground">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-border">
                        <td className="p-4 text-muted-foreground">{feature}</td>
                        {pricingPackages.map((pkg) => (
                          <td key={pkg.id} className="p-4 text-center">
                            {/* Simplified feature availability logic */}
                            {(categoryIndex === 0 && featureIndex < (pkg.id === 0 ? 4 : pkg.id === 1 ? 7 : 8)) ||
                             (categoryIndex === 1 && featureIndex < (pkg.id === 0 ? 4 : pkg.id === 1 ? 6 : 8)) ||
                             (categoryIndex === 2 && featureIndex < (pkg.id === 0 ? 2 : pkg.id === 1 ? 4 : 8)) ? (
                              <Icon name="Check" size={20} className="text-success mx-auto" />
                            ) : (
                              <Icon name="X" size={20} className="text-muted-foreground mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl">
          <Icon name="Calculator" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Not Sure Which Package Is Right?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Schedule a free consultation call to discuss your specific requirements and get a custom quote tailored to your business needs.
          </p>
          <Button
            variant="default"
            size="lg"
            onClick={scrollToContact}
            iconName="Calendar"
            iconPosition="left"
            className="cta-shadow"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;