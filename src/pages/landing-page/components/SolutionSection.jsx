import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SolutionSection = () => {
  const [activeTech, setActiveTech] = useState(null);

  const technologies = [
    {
      id: 'react',
      name: 'React/Next.js',
      icon: 'Code2',
      category: 'Frontend',
      benefits: ['Lightning-fast user interfaces', 'SEO-optimized applications', 'Scalable component architecture'],
      metrics: { performance: '95%', scalability: '10x', maintenance: '60% less' }
    },
    {
      id: 'node',
      name: 'Node.js',
      icon: 'Server',
      category: 'Backend',
      benefits: ['High-performance APIs', 'Real-time capabilities', 'Microservices architecture'],
      metrics: { performance: '3x faster', scalability: 'Unlimited', maintenance: '50% less' }
    },
    {
      id: 'aws',
      name: 'AWS Cloud',
      icon: 'Cloud',
      category: 'Infrastructure',
      benefits: ['99.99% uptime guarantee', 'Auto-scaling capabilities', 'Global content delivery'],
      metrics: { uptime: '99.99%', scalability: 'Auto', costs: '40% savings' }
    },
    {
      id: 'docker',
      name: 'Docker/K8s',
      icon: 'Package',
      category: 'DevOps',
      benefits: ['Consistent deployments', 'Container orchestration', 'Zero-downtime updates'],
      metrics: { deployment: '10x faster', reliability: '99.9%', efficiency: '70% better' }
    },
    {
      id: 'postgres',
      name: 'PostgreSQL',
      icon: 'Database',
      category: 'Database',
      benefits: ['ACID compliance', 'Advanced querying', 'High availability'],
      metrics: { performance: '5x faster', reliability: '99.95%', scalability: 'Petabyte+' }
    },
    {
      id: 'security',
      name: 'Security Suite',
      icon: 'Shield',
      category: 'Security',
      benefits: ['End-to-end encryption', 'OAuth 2.0 / JWT', 'SOC 2 compliance'],
      metrics: { security: 'Bank-grade', compliance: '100%', threats: '0 breaches' }
    }
  ];

  const solutions = [
    {
      title: "Agile Development Process",
      description: "2-week sprints with continuous delivery and transparent progress tracking",
      icon: "Zap",
      features: [
        "Daily standups and weekly demos",
        "Real-time project dashboard",
        "Continuous integration/deployment"
      ]
    },
    {
      title: "Enterprise Architecture",
      description: "Scalable, maintainable code architecture designed for long-term growth",
      icon: "Building",
      features: [
        "Microservices architecture",
        "API-first development",
        "Cloud-native design patterns"
      ]
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing strategy ensuring 99.9% uptime and bug-free releases",
      icon: "CheckCircle",
      features: [
        "Automated testing suites",
        "Performance monitoring",
        "Security vulnerability scanning"
      ]
    }
  ];

  return (
    <section id="solution" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success/10 border border-success/20 rounded-full mb-6">
            <Icon name="CheckCircle" size={16} className="text-success mr-2" />
            <span className="text-sm font-medium text-success">The TechForge Solution</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Modern Technology Stack That{' '}
            <span className="text-gradient-primary">Delivers Results</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We use cutting-edge technologies and proven methodologies to build software that scales with your business and stands the test of time.
          </p>
        </div>

        {/* Interactive Technology Stack */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Interactive Technology Stack
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className={`relative p-6 bg-card border rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeTech === tech.id ? 'border-primary shadow-lg scale-105' : 'border-border hover:border-primary/50'
                }`}
                onMouseEnter={() => setActiveTech(tech.id)}
                onMouseLeave={() => setActiveTech(null)}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${
                    activeTech === tech.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    <Icon name={tech.icon} size={24} />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground">{tech.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Details */}
          {activeTech && (
            <div className="bg-card border border-primary/20 rounded-xl p-8 shadow-lg">
              {(() => {
                const tech = technologies.find(t => t.id === activeTech);
                return (
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mr-3">
                          <Icon name={tech.icon} size={20} />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-foreground">{tech.name}</h4>
                          <p className="text-sm text-primary">{tech.category}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {tech.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(tech.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-background rounded-lg border border-border">
                          <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* Solution Features */}
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Icon name={solution.icon} size={24} className="text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {solution.description}
              </p>
              
              <ul className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Icon name="ArrowRight" size={16} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl">
          <Icon name="Rocket" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how our proven technology stack and development process can accelerate your project by 3x while ensuring enterprise-grade quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;