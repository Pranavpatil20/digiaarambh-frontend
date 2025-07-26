import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Planning",
      duration: "1-2 weeks",
      description: "Deep dive into your business requirements, technical constraints, and success metrics",
      icon: "Search",
      activities: [
        "Stakeholder interviews and requirement gathering",
        "Technical architecture assessment",
        "Competitive analysis and market research",
        "Project scope definition and timeline planning",
        "Risk assessment and mitigation strategies"
      ],
      deliverables: [
        "Detailed project specification document",
        "Technical architecture blueprint",
        "Project timeline with milestones",
        "Resource allocation plan"
      ],
      tools: ["Figma", "Miro", "Notion", "Slack"]
    },
    {
      id: 2,
      title: "Design & Prototyping",
      duration: "2-3 weeks",
      description: "Create user-centered designs and interactive prototypes for validation",
      icon: "Palette",
      activities: [
        "User experience research and persona development",
        "Wireframing and user journey mapping",
        "High-fidelity design creation",
        "Interactive prototype development",
        "Usability testing and feedback incorporation"
      ],
      deliverables: [
        "Complete UI/UX design system",
        "Interactive clickable prototypes",
        "User testing reports",
        "Design specification documents"
      ],
      tools: ["Figma", "Adobe XD", "Principle", "InVision"]
    },
    {
      id: 3,
      title: "Development & Integration",
      duration: "8-16 weeks",
      description: "Agile development with continuous integration and weekly progress reviews",
      icon: "Code2",
      activities: [
        "Sprint planning and backlog management",
        "Frontend and backend development",
        "Third-party service integrations",
        "Database design and optimization",
        "Continuous integration and deployment setup"
      ],
      deliverables: [
        "Fully functional application",
        "API documentation",
        "Database schema and migrations",
        "CI/CD pipeline configuration"
      ],
      tools: ["VS Code", "Git", "Docker", "Jenkins", "AWS"]
    },
    {
      id: 4,
      title: "Testing & Quality Assurance",
      duration: "2-3 weeks",
      description: "Comprehensive testing including automated tests, security audits, and performance optimization",
      icon: "CheckCircle",
      activities: [
        "Unit and integration test development",
        "End-to-end testing automation",
        "Security vulnerability assessment",
        "Performance testing and optimization",
        "User acceptance testing coordination"
      ],
      deliverables: [
        "Comprehensive test suite",
        "Security audit report",
        "Performance optimization report",
        "UAT sign-off documentation"
      ],
      tools: ["Jest", "Cypress", "Postman", "SonarQube", "LoadRunner"]
    },
    {
      id: 5,
      title: "Deployment & Launch",
      duration: "1 week",
      description: "Production deployment with monitoring, documentation, and team training",
      icon: "Rocket",
      activities: [
        "Production environment setup",
        "Database migration and data transfer",
        "Monitoring and alerting configuration",
        "Team training and knowledge transfer",
        "Go-live support and issue resolution"
      ],
      deliverables: [
        "Live production application",
        "Monitoring dashboards",
        "Technical documentation",
        "Training materials and sessions"
      ],
      tools: ["AWS", "Docker", "Kubernetes", "Datadog", "PagerDuty"]
    }
  ];

  const methodologies = [
    {
      name: "Agile/Scrum",
      description: "2-week sprints with daily standups and weekly demos",
      icon: "Zap"
    },
    {
      name: "DevOps",
      description: "Continuous integration and deployment practices",
      icon: "GitBranch"
    },
    {
      name: "Test-Driven Development",
      description: "Code quality ensured through comprehensive testing",
      icon: "Shield"
    },
    {
      name: "Code Reviews",
      description: "Peer review process for all code changes",
      icon: "Eye"
    }
  ];

  const communicationTools = [
    { name: "Slack", purpose: "Daily communication", icon: "MessageCircle" },
    { name: "Zoom", purpose: "Weekly demos & meetings", icon: "Video" },
    { name: "Jira", purpose: "Project tracking", icon: "Trello" },
    { name: "GitHub", purpose: "Code collaboration", icon: "Github" }
  ];

  return (
    <section id="process" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Icon name="Settings" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Our Process</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Proven Development{' '}
            <span className="text-gradient-primary">Methodology</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our battle-tested 5-step process ensures transparent communication, predictable timelines, and exceptional results for every project.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block"></div>
          
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 hidden lg:block ${
                  activeStep === index 
                    ? 'bg-primary border-primary' :'bg-background border-border'
                }`}></div>
                
                <div className={`lg:ml-16 bg-card border rounded-xl p-8 shadow-card transition-all duration-300 ${
                  activeStep === index 
                    ? 'border-primary shadow-lg' 
                    : 'border-border hover:border-primary/50'
                }`}>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Step Info */}
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          activeStep === index ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                        }`}>
                          <Icon name={step.icon} size={24} />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm font-medium text-primary">Step {step.id}</span>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{step.duration}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">{step.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {step.tools.map((tool, toolIndex) => (
                          <span key={toolIndex} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Activities */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Key Activities</h4>
                      <ul className="space-y-2">
                        {step.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start">
                            <Icon name="ArrowRight" size={14} className="text-primary mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Deliverables</h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-start">
                            <Icon name="Check" size={14} className="text-success mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodologies */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Development Methodologies</h3>
            <div className="space-y-6">
              {methodologies.map((methodology, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={methodology.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{methodology.name}</h4>
                    <p className="text-sm text-muted-foreground">{methodology.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Communication & Collaboration</h3>
            <div className="space-y-6">
              {communicationTools.map((tool, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={tool.icon} size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{tool.name}</h4>
                    <p className="text-sm text-muted-foreground">{tool.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Guarantees */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Process Guarantees</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We stand behind our methodology with concrete commitments to ensure your project success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">On-Time Delivery</h4>
              <p className="text-sm text-muted-foreground">98% of our projects are delivered on schedule or early</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Eye" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Full Transparency</h4>
              <p className="text-sm text-muted-foreground">Weekly demos and real-time project dashboard access</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={24} className="text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Direct Communication</h4>
              <p className="text-sm text-muted-foreground">Direct access to your development team, no middlemen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;