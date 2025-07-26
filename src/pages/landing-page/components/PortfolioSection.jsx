import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeCase, setActiveCase] = useState(0);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'saas', label: 'SaaS' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "FinanceFlow - Digital Banking Platform",
      category: "fintech",
      client: "Regional Bank",
      industry: "Financial Services",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      challenge: "Legacy banking system couldn\'t handle modern digital transactions and customer expectations",
      solution: "Built a comprehensive digital banking platform with real-time transactions, mobile apps, and AI-powered fraud detection",
      results: {
        efficiency: "65% faster transaction processing",
        satisfaction: "92% customer satisfaction increase",
        cost: "40% reduction in operational costs",
        timeline: "Delivered in 16 weeks"
      },
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      testimonial: {
        quote: "TechForge transformed our entire banking infrastructure. The new platform handles 10x more transactions with zero downtime.",
        author: "Sarah Johnson",
        position: "CTO, Regional Bank",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      }
    },
    {
      id: 2,
      title: "MedConnect - Telemedicine Platform",
      category: "healthcare",
      client: "Healthcare Network",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      challenge: "Need for secure, HIPAA-compliant telemedicine solution during pandemic",
      solution: "Developed end-to-end telemedicine platform with video consultations, prescription management, and patient records",
      results: {
        patients: "50,000+ patients served",
        consultations: "200% increase in consultations",
        satisfaction: "96% patient satisfaction",
        timeline: "Launched in 12 weeks"
      },
      technologies: ["Next.js", "Express", "MongoDB", "WebRTC", "Stripe"],
      testimonial: {
        quote: "The platform exceeded our expectations. We went from concept to serving thousands of patients in just 3 months.",
        author: "Dr. Michael Chen",
        position: "Chief Medical Officer",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      }
    },
    {
      id: 3,
      title: "ShopSmart - E-commerce Marketplace",
      category: "ecommerce",
      client: "Retail Startup",
      industry: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      challenge: "Needed scalable marketplace to compete with major e-commerce platforms",
      solution: "Built multi-vendor marketplace with advanced search, AI recommendations, and integrated payment processing",
      results: {
        revenue: "$2M+ monthly revenue",
        vendors: "500+ active vendors",
        growth: "300% user growth in 6 months",
        timeline: "MVP in 10 weeks"
      },
      technologies: ["React", "Python", "Redis", "Elasticsearch", "AWS"],
      testimonial: {
        quote: "TechForge built us a marketplace that rivals Amazon. Our revenue grew 300% in the first 6 months.",
        author: "Lisa Rodriguez",
        position: "Founder & CEO",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg"
      }
    },
    {
      id: 4,
      title: "DataInsight - Analytics SaaS",
      category: "saas",
      client: "Analytics Startup",
      industry: "Data Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      challenge: "Complex data visualization and real-time analytics requirements",
      solution: "Developed SaaS platform with interactive dashboards, real-time data processing, and custom reporting",
      results: {
        users: "10,000+ active users",
        processing: "1TB+ data processed daily",
        retention: "94% user retention rate",
        timeline: "Beta in 14 weeks"
      },
      technologies: ["Vue.js", "Node.js", "ClickHouse", "D3.js", "Kubernetes"],
      testimonial: {
        quote: "The platform processes terabytes of data seamlessly. Our customers love the intuitive dashboards.",
        author: "James Wilson",
        position: "VP of Engineering",
        avatar: "https://randomuser.me/api/portraits/men/35.jpg"
      }
    },
    {
      id: 5,
      title: "EduTech - Learning Management System",
      category: "saas",
      client: "Education Company",
      industry: "Education Technology",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      challenge: "Remote learning platform needed during educational disruption",
      solution: "Built comprehensive LMS with video streaming, interactive assignments, and progress tracking",
      results: {
        students: "25,000+ students enrolled",
        completion: "85% course completion rate",
        engagement: "4x increase in engagement",
        timeline: "Deployed in 8 weeks"
      },
      technologies: ["React", "Django", "PostgreSQL", "Redis", "AWS"],
      testimonial: {
        quote: "Our student engagement increased 4x with the new platform. The development speed was incredible.",
        author: "Amanda Foster",
        position: "Head of Technology",
        avatar: "https://randomuser.me/api/portraits/women/42.jpg"
      }
    },
    {
      id: 6,
      title: "LogiTrack - Supply Chain Management",
      category: "saas",
      client: "Logistics Company",
      industry: "Supply Chain",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      challenge: "Manual supply chain processes causing delays and inefficiencies",
      solution: "Automated supply chain management with real-time tracking, predictive analytics, and IoT integration",
      results: {
        efficiency: "70% improvement in efficiency",
        costs: "35% reduction in logistics costs",
        accuracy: "99.5% tracking accuracy",
        timeline: "Rolled out in 20 weeks"
      },
      technologies: ["Angular", "Spring Boot", "MySQL", "Apache Kafka", "Docker"],
      testimonial: {
        quote: "The system revolutionized our operations. We can now track every shipment in real-time with 99.5% accuracy.",
        author: "Robert Kim",
        position: "Operations Director",
        avatar: "https://randomuser.me/api/portraits/men/38.jpg"
      }
    }
  ];

  const filteredCases = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
            <Icon name="Trophy" size={16} className="text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary">Success Stories</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Transforming Businesses Across{' '}
            <span className="text-gradient-primary">Industries</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped companies like yours achieve remarkable results with custom software solutions that drive real business growth.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Case Study Carousel */}
        <div className="relative">
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <Image
                  src={filteredCases[activeCase]?.image}
                  alt={filteredCases[activeCase]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                      {filteredCases[activeCase]?.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{filteredCases[activeCase]?.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Challenge</h4>
                  <p className="text-muted-foreground mb-4">{filteredCases[activeCase]?.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-2">Solution</h4>
                  <p className="text-muted-foreground">{filteredCases[activeCase]?.solution}</p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {filteredCases[activeCase] && Object.entries(filteredCases[activeCase].results).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-background rounded-lg border border-border">
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {filteredCases[activeCase]?.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Image
                      src={filteredCases[activeCase]?.testimonial.avatar}
                      alt={filteredCases[activeCase]?.testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-foreground italic mb-2">"{filteredCases[activeCase]?.testimonial.quote}"</p>
                      <div>
                        <div className="font-semibold text-foreground">{filteredCases[activeCase]?.testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{filteredCases[activeCase]?.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setActiveCase(activeCase > 0 ? activeCase - 1 : filteredCases.length - 1)}
              className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <Icon name="ChevronLeft" size={20} className="text-muted-foreground" />
              <span className="text-muted-foreground">Previous</span>
            </button>

            <div className="flex space-x-2">
              {filteredCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeCase === index ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveCase(activeCase < filteredCases.length - 1 ? activeCase + 1 : 0)}
              className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <span className="text-muted-foreground">Next</span>
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your business with a custom software solution that delivers measurable results.
          </p>
          <Button
            variant="default"
            size="lg"
            onClick={scrollToContact}
            iconName="ArrowRight"
            iconPosition="right"
            className="cta-shadow"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;