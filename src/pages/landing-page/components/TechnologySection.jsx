import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TechnologySection = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  const technologies = [
    {
      category: "Frontend Development",
      icon: "Monitor",
      skills: [
        { name: "React/Next.js", level: 95, projects: 150 },
        { name: "Vue.js/Nuxt.js", level: 90, projects: 120 },
        { name: "Angular", level: 85, projects: 100 },
        { name: "TypeScript", level: 92, projects: 180 }
      ]
    },
    {
      category: "Backend Development",
      icon: "Server",
      skills: [
        { name: "Node.js/Express", level: 96, projects: 200 },
        { name: "Python/Django", level: 88, projects: 130 },
        { name: "Java/Spring", level: 82, projects: 90 },
        { name: "Go/Gin", level: 78, projects: 60 }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: "Cloud",
      skills: [
        { name: "AWS", level: 94, projects: 170 },
        { name: "Google Cloud", level: 87, projects: 110 },
        { name: "Docker/Kubernetes", level: 91, projects: 140 },
        { name: "CI/CD Pipelines", level: 89, projects: 160 }
      ]
    },
    {
      category: "Database & Storage",
      icon: "Database",
      skills: [
        { name: "PostgreSQL", level: 93, projects: 180 },
        { name: "MongoDB", level: 88, projects: 150 },
        { name: "Redis", level: 85, projects: 120 },
        { name: "Elasticsearch", level: 80, projects: 80 }
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      icon: "Award",
      level: "Professional",
      year: "2024"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      icon: "Shield",
      level: "Expert",
      year: "2024"
    },
    {
      name: "Microsoft Azure Expert",
      issuer: "Microsoft",
      icon: "Star",
      level: "Expert",
      year: "2023"
    },
    {
      name: "Kubernetes Administrator",
      issuer: "CNCF",
      icon: "Settings",
      level: "Certified",
      year: "2024"
    }
  ];

  const githubStats = {
    totalCommits: "25,000+",
    repositories: "150+",
    contributors: "50+",
    languages: "15+",
    openSource: "25+"
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryIndex = entry.target.dataset.category;
            if (categoryIndex && !animatedSkills[categoryIndex]) {
              setAnimatedSkills(prev => ({
                ...prev,
                [categoryIndex]: true
              }));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillBars = document.querySelectorAll('[data-category]');
    skillBars.forEach(bar => observer.observe(bar));

    return () => observer.disconnect();
  }, [animatedSkills]);

  return (
    <section id="technology" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <Icon name="Code2" size={16} className="text-accent mr-2" />
            <span className="text-sm font-medium text-accent">Technical Expertise</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Cutting-Edge Technology{' '}
            <span className="text-gradient-primary">Mastery</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team combines deep technical expertise with industry certifications to deliver enterprise-grade solutions using the latest technologies and best practices.
          </p>
        </div>

        {/* Technology Skills */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {technologies.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card border border-border rounded-xl p-8 shadow-card">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Icon name={category.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} data-category={categoryIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{skill.projects} projects</span>
                        <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animatedSkills[categoryIndex] ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center shadow-card hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert.icon} size={24} className="text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cert.name}</h4>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{cert.level}</span>
                  <span className="text-xs text-muted-foreground">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="bg-card border border-border rounded-xl p-8 lg:p-12 shadow-card">
          <div className="text-center mb-8">
            <Icon name="Github" size={48} className="text-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Open Source Contributions</h3>
            <p className="text-muted-foreground">
              Our commitment to the developer community through open source projects and contributions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {Object.entries(githubStats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                <div className="text-sm text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Node.js', 'Python', 'TypeScript', 'Docker', 'Kubernetes', 'AWS', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl">
            <Icon name="Code" size={32} className="text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary mb-2">1M+</div>
            <div className="text-muted-foreground">Lines of Code</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 rounded-xl">
            <Icon name="Users" size={32} className="text-secondary mx-auto mb-4" />
            <div className="text-3xl font-bold text-secondary mb-2">50+</div>
            <div className="text-muted-foreground">Expert Developers</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl">
            <Icon name="Trophy" size={32} className="text-accent mx-auto mb-4" />
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-muted-foreground">Technology Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;