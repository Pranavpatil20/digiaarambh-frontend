import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "TechForge delivered our enterprise platform 3 months ahead of schedule. The quality exceeded our expectations and the ongoing support has been exceptional. Our operational efficiency improved by 65%.",
      author: "Sarah Chen",
      position: "CTO",
      company: "GlobalTech Solutions",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      metrics: {
        efficiency: "65% improvement",
        timeline: "3 months early",
        satisfaction: "98% team satisfaction"
      },
      linkedinVerified: true,
      videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      quote: "Working with TechForge was a game-changer. They transformed our legacy system into a modern, scalable platform. Our customer satisfaction scores increased by 40% and maintenance costs dropped by 60%.",
      author: "Michael Rodriguez",
      position: "VP of Engineering",
      company: "FinanceFlow Inc",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      metrics: {
        satisfaction: "40% increase",
        costs: "60% reduction",
        performance: "5x faster"
      },
      linkedinVerified: true,
      videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      quote: "The team's expertise in cloud architecture and DevOps practices helped us scale from 1,000 to 100,000 users seamlessly. Their proactive approach to security and performance optimization is outstanding.",
      author: "Emily Johnson",
      position: "Chief Technology Officer",
      company: "ScaleUp Ventures",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      metrics: {
        scaling: "100x user growth",
        uptime: "99.99% availability",
        performance: "3x faster response"
      },
      linkedinVerified: true,
      videoThumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      quote: "TechForge didn\'t just build our application; they became our technology partners. Their ongoing support and strategic guidance have been invaluable as we\'ve grown from startup to Series B.",
      author: "David Park",
      position: "Founder & CEO",
      company: "InnovateLab",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      metrics: {
        growth: "Series B funding",
        revenue: "300% increase",
        retention: "95% user retention"
      },
      linkedinVerified: true,
      videoThumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      quote: "The development process was transparent and collaborative. We received weekly demos and had full visibility into progress. The final product exceeded our requirements and launched without any issues.",
      author: "Lisa Thompson",
      position: "Head of Digital Innovation",
      company: "RetailMax Corp",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      metrics: {
        timeline: "On-time delivery",
        quality: "Zero critical bugs",
        adoption: "90% user adoption"
      },
      linkedinVerified: true,
      videoThumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop"
    }
  ];

  const clientLogos = [
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=120&h=60&fit=crop" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&h=60&fit=crop" },
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=60&fit=crop" },
    { name: "IBM", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop" },
    { name: "Oracle", logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=120&h=60&fit=crop" },
    { name: "Salesforce", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success/10 border border-success/20 rounded-full mb-6">
            <Icon name="MessageSquare" size={16} className="text-success mr-2" />
            <span className="text-sm font-medium text-success">Client Success Stories</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry{' '}
            <span className="text-gradient-primary">Leaders</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what CTOs and technology leaders say about their experience working with TechForge Studios.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
            <div className="grid lg:grid-cols-2">
              {/* Video Thumbnail */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <Image
                  src={testimonials[activeTestimonial].videoThumbnail}
                  alt={`${testimonials[activeTestimonial].author} testimonial`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <Icon name="Play" size={24} />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-success text-success-foreground px-2 py-1 rounded text-xs font-medium">
                  LIVE
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <Icon name="Quote" size={32} className="text-primary mr-4" />
                  <div className="flex items-center space-x-2">
                    <Icon name="Star" size={16} className="text-warning fill-current" />
                    <Icon name="Star" size={16} className="text-warning fill-current" />
                    <Icon name="Star" size={16} className="text-warning fill-current" />
                    <Icon name="Star" size={16} className="text-warning fill-current" />
                    <Icon name="Star" size={16} className="text-warning fill-current" />
                  </div>
                </div>

                <blockquote className="text-lg text-foreground mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-foreground">{testimonials[activeTestimonial].author}</h4>
                        {testimonials[activeTestimonial].linkedinVerified && (
                          <Icon name="CheckCircle" size={16} className="text-primary" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].position}</p>
                      <p className="text-sm text-primary">{testimonials[activeTestimonial].company}</p>
                    </div>
                  </div>
                  <Image
                    src={testimonials[activeTestimonial].companyLogo}
                    alt={`${testimonials[activeTestimonial].company} logo`}
                    className="w-12 h-12 rounded object-contain opacity-60"
                  />
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(testimonials[activeTestimonial].metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-background rounded-lg border border-border">
                      <div className="text-sm font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeTestimonial === index ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-8">
            Trusted by Fortune 500 Companies
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-warning mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;