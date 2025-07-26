import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Alex Thompson",
      position: "Chief Technology Officer",
      specialization: "Full-Stack Architecture",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      experience: "12+ years",
      bio: "Former Senior Architect at Google, specializing in scalable microservices and cloud-native applications. Led development teams of 50+ engineers.",
      certifications: ["AWS Solutions Architect Professional", "Google Cloud Professional", "Kubernetes Administrator"],
      technologies: ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"],
      achievements: [
        "Built systems serving 100M+ users",
        "Reduced infrastructure costs by 60%",
        "Led 15+ successful product launches"
      ],
      linkedin: "https://linkedin.com/in/alexthompson",
      github: "https://github.com/alexthompson"
    },
    {
      id: 2,
      name: "Sarah Chen",
      position: "Lead Frontend Architect",
      specialization: "React & Performance Optimization",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      experience: "10+ years",
      bio: "Ex-Facebook engineer with expertise in building high-performance web applications. Contributed to React core and multiple open-source projects.",
      certifications: ["React Expert Certification", "Web Performance Specialist", "Accessibility Professional"],
      technologies: ["React", "Next.js", "TypeScript", "GraphQL", "Webpack", "Jest"],
      achievements: [
        "Improved app performance by 300%",
        "10K+ GitHub stars on open source",
        "Speaker at 20+ tech conferences"
      ],
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      position: "Senior Backend Engineer",
      specialization: "Distributed Systems & APIs",
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",
      experience: "8+ years",
      bio: "Former Netflix engineer specializing in distributed systems and high-throughput APIs. Expert in microservices architecture and database optimization.",
      certifications: ["MongoDB Professional", "Redis Certified Developer", "System Design Expert"],
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "Apache Kafka"],
      achievements: [
        "Designed APIs handling 1B+ requests/day",
        "Reduced database query time by 80%",
        "Mentored 25+ junior developers"
      ],
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      github: "https://github.com/michaelrodriguez"
    },
    {
      id: 4,
      name: "Emily Johnson",
      position: "DevOps & Security Lead",
      specialization: "Cloud Infrastructure & Security",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
      experience: "9+ years",
      bio: "Former Amazon Web Services engineer with deep expertise in cloud security and infrastructure automation. Specialized in zero-downtime deployments.",
      certifications: ["AWS Security Specialist", "Certified Kubernetes Security", "CISSP"],
      technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins", "Prometheus"],
      achievements: [
        "Achieved 99.99% uptime across 50+ services",
        "Implemented security for Fortune 500",
        "Reduced deployment time by 90%"
      ],
      linkedin: "https://linkedin.com/in/emilyjohnson",
      github: "https://github.com/emilyjohnson"
    },
    {
      id: 5,
      name: "David Park",
      position: "Mobile Development Lead",
      specialization: "React Native & iOS/Android",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      experience: "7+ years",
      bio: "Former Uber mobile engineer with expertise in cross-platform development. Built mobile apps used by millions of users worldwide.",
      certifications: ["React Native Expert", "iOS Developer Certification", "Android Developer Expert"],
      technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase", "GraphQL"],
      achievements: [
        "Apps downloaded 10M+ times",
        "Reduced app crash rate to <0.1%",
        "Led mobile teams at 3 unicorn startups"
      ],
      linkedin: "https://linkedin.com/in/davidpark",
      github: "https://github.com/davidpark"
    },
    {
      id: 6,
      name: "Lisa Wang",
      position: "UI/UX Design Lead",
      specialization: "Product Design & User Research",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
      experience: "8+ years",
      bio: "Former Airbnb designer with expertise in user-centered design and conversion optimization. Increased user engagement by 200% across multiple products.",
      certifications: ["Google UX Design Professional", "Adobe Certified Expert", "Figma Advanced User"],
      technologies: ["Figma", "Adobe Creative Suite", "Principle", "Framer", "Sketch", "InVision"],
      achievements: [
        "Increased conversion rates by 150%",
        "Designed for 50M+ active users",
        "Won 5 international design awards"
      ],
      linkedin: "https://linkedin.com/in/lisawang",
      dribbble: "https://dribbble.com/lisawang"
    }
  ];

  const companyStats = [
    { label: "Team Members", value: "50+", icon: "Users" },
    { label: "Years Experience", value: "120+", icon: "Calendar" },
    { label: "Certifications", value: "75+", icon: "Award" },
    { label: "Projects Delivered", value: "500+", icon: "CheckCircle" }
  ];

  return (
    <section id="team" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
            <Icon name="Users" size={16} className="text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary">Meet Our Team</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            World-Class Engineering{' '}
            <span className="text-gradient-primary">Talent</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team consists of senior engineers from top tech companies like Google, Facebook, Netflix, and Amazon, bringing enterprise-level expertise to every project.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {companyStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card border border-border rounded-xl shadow-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Member Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
            <div className="grid lg:grid-cols-2">
              {/* Team Member Info */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={teamMembers[activeTeamMember].avatar}
                    alt={teamMembers[activeTeamMember].name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{teamMembers[activeTeamMember].name}</h3>
                    <p className="text-primary font-medium">{teamMembers[activeTeamMember].position}</p>
                    <p className="text-sm text-muted-foreground">{teamMembers[activeTeamMember].specialization}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{teamMembers[activeTeamMember].experience}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Remote/Global</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {teamMembers[activeTeamMember].bio}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {teamMembers[activeTeamMember].achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Trophy" size={16} className="text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  <a
                    href={teamMembers[activeTeamMember].linkedin}
                    className="flex items-center space-x-2 px-3 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <Icon name="Linkedin" size={16} />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href={teamMembers[activeTeamMember].github || teamMembers[activeTeamMember].dribbble}
                    className="flex items-center space-x-2 px-3 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    <Icon name={teamMembers[activeTeamMember].github ? "Github" : "Palette"} size={16} />
                    <span className="text-sm">{teamMembers[activeTeamMember].github ? "GitHub" : "Dribbble"}</span>
                  </a>
                </div>
              </div>

              {/* Skills & Certifications */}
              <div className="p-8 lg:p-12 bg-background/50">
                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4">Core Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers[activeTeamMember].technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Certifications</h4>
                  <div className="space-y-3">
                    {teamMembers[activeTeamMember].certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-card border border-border rounded-lg">
                        <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Award" size={16} className="text-success" />
                        </div>
                        <span className="text-sm text-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {teamMembers.map((member, index) => (
              <button
                key={member.id}
                onClick={() => setActiveTeamMember(index)}
                className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 ${
                  activeTeamMember === index
                    ? 'bg-card border-primary shadow-lg'
                    : 'bg-card/50 border-border hover:border-primary/50'
                }`}
              >
                <Image
                  src={member.avatar}
                  alt={member.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-medium text-foreground text-sm">{member.name}</div>
                  <div className="text-xs text-muted-foreground">{member.position.split(' ')[0]} {member.position.split(' ')[1]}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl">
          <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Work with Industry Veterans
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team brings decades of combined experience from the world's leading tech companies. Let us apply this expertise to accelerate your project success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;