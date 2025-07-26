import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const codeSnippets = [
    {
      language: 'React',
      code: `const Digiaarambh = () => {
  const [innovation, setInnovation] = useState('unlimited');
  
  useEffect(() => {
    deployScalableSolution();
  }, []);
  
  return <FutureReady />;
};`
    },
    {
      language: 'Python',
      code: `class BusinessTransformation:
    def __init__(self, vision):
        self.vision = vision
        self.speed = "3x faster"
    
    def deliver(self):
        return self.scalable_solution()`
    },
    {
      language: 'Node.js',
      code: `const express = require('express');
const app = express();

app.use('/api', scalableRoutes);
app.listen(3000, () => {
  console.log('Enterprise ready!');
});`
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: "CheckCircle" },
    { number: "98%", label: "On-Time Delivery", icon: "Clock" },
    { number: "3x", label: "Faster Development", icon: "Zap" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
        setIsTyping(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <Icon name="Sparkles" size={16} className="text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Trusted by Fortune 500 Companies</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your Business Vision Into{' '}
                <span className="text-gradient-primary">Scalable Software</span>{' '}
                <span className="text-secondary">3x Faster</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Stop struggling with unreliable development teams and legacy systems. We deliver enterprise-grade software solutions with guaranteed on-time delivery and ongoing support that grows with your business.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="cta-shadow"
                onClick={() => scrollToSection('contact')}
                iconName="Calendar"
                iconPosition="left"
              >
                Get Free Project Assessment
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                iconName="Play"
                iconPosition="left"
              >
                View Live Portfolio
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon name={stat.icon} size={20} className="text-primary mr-2" />
                    <span className="text-2xl lg:text-3xl font-bold text-foreground">{stat.number}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Code Animation */}
          <div className="relative">
            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-error rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Code2" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground font-mono">
                    {codeSnippets[currentCodeIndex].language}
                  </span>
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-4 font-mono text-sm">
                <pre className={`text-foreground transition-opacity duration-500 ${isTyping ? 'opacity-100' : 'opacity-50'}`}>
                  <code>{codeSnippets[currentCodeIndex].code}</code>
                </pre>
              </div>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">Production Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={14} className="text-secondary" />
                  <span className="text-xs text-secondary">3x Faster Delivery</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium animate-bounce">
              Enterprise Grade
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium animate-bounce delay-1000">
              Scalable
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('problem')}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Discover More</span>
            <Icon name="ChevronDown" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;