import React from 'react';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const problems = [
    {
      title: "Project Delays",
      description: "Average software project runs 27% over schedule",
      stat: "27%",
      icon: "Clock",
      color: "error",
      details: [
        "Missed deadlines impact business launches",
        "Scope creep without proper management",
        "Poor communication leads to rework"
      ]
    },
    {
      title: "Budget Overruns",
      description: "Development costs exceed budget by 45% on average",
      stat: "45%",
      icon: "TrendingUp",
      color: "warning",
      details: [
        "Hidden costs emerge during development",
        "Inefficient development processes",
        "Lack of transparent pricing models"
      ]
    },
    {
      title: "Technical Debt",
      description: "Legacy systems cost 60% more to maintain annually",
      stat: "60%",
      icon: "AlertTriangle",
      color: "destructive",
      details: [
        "Outdated technology stacks",
        "Poor code quality and documentation",
        "Security vulnerabilities accumulate"
      ]
    }
  ];

  const painPoints = [
    "Unreliable development teams that miss deadlines",
    "Legacy systems that can\'t scale with business growth",
    "Lack of technical expertise in-house",
    "Poor communication and project visibility",
    "Security concerns with outdated technology",
    "High maintenance costs for existing systems"
  ];

  return (
    <section id="problem" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-error/10 border border-error/20 rounded-full mb-6">
            <Icon name="AlertCircle" size={16} className="text-error mr-2" />
            <span className="text-sm font-medium text-error">The Reality Check</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Why Most Software Projects{' '}
            <span className="text-error">Fail</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry statistics reveal the harsh reality: most businesses struggle with software development challenges that drain resources and delay growth.
          </p>
        </div>

        {/* Problem Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  problem.color === 'error' ? 'bg-error/10' :
                  problem.color === 'warning'? 'bg-warning/10' : 'bg-destructive/10'
                }`}>
                  <Icon 
                    name={problem.icon} 
                    size={24} 
                    className={
                      problem.color === 'error' ? 'text-error' :
                      problem.color === 'warning'? 'text-warning' : 'text-destructive'
                    } 
                  />
                </div>
                <div className={`text-3xl font-bold ${
                  problem.color === 'error' ? 'text-error' :
                  problem.color === 'warning'? 'text-warning' : 'text-destructive'
                }`}>
                  {problem.stat}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {problem.description}
              </p>
              
              <ul className="space-y-2">
                {problem.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <Icon name="Minus" size={16} className="text-muted-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pain Points Grid */}
        <div className="bg-card border border-border rounded-xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Sound Familiar?
            </h3>
            <p className="text-muted-foreground">
              These are the most common frustrations we hear from CTOs and IT Directors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg border border-border">
                <div className="w-6 h-6 rounded-full bg-error/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="X" size={14} className="text-error" />
                </div>
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <Icon name="Lightbulb" size={32} className="text-primary mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-foreground mb-2">
              There's a Better Way
            </h4>
            <p className="text-muted-foreground">
              What if you could eliminate these problems entirely and accelerate your software development by 3x?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;