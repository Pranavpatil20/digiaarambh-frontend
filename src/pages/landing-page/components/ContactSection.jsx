import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    hearAbout: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Platform',
    'SaaS Product',
    'Enterprise Software',
    'API Development',
    'System Integration',
    'Other'
  ];

  const budgetRanges = [
    'Under $25k',
    '$25k - $50k',
    '$50k - $100k',
    '$100k - $250k',
    '$250k - $500k',
    '$500k+',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP (Rush project)',
    '1-2 months',
    '3-4 months',
    '5-6 months',
    '6+ months',
    'Flexible'
  ];

  const hearAboutOptions = [
    'Google Search',
    'LinkedIn',
    'Referral',
    'Industry Event',
    'Social Media',
    'Other'
  ];

  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email Us',
      value: 'hello@techforgestudios.com',
      description: 'Send us an email and we\'ll respond within 2 hours'
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Speak directly with our technical team'
    },
    {
      icon: 'MessageCircle',
      title: 'Live Chat',
      value: 'Available 24/7',
      description: 'Get instant answers to your questions'
    },
    {
      icon: 'Calendar',
      title: 'Schedule Call',
      value: 'Book a meeting',
      description: 'Schedule a free 30-minute consultation'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        hearAbout: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section id="contact" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-success" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Thank You for Your Interest!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We've received your project details and will get back to you within 2 hours with a detailed proposal and next steps.
            </p>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                  <div>
                    <p className="font-medium text-foreground">Initial Review (within 2 hours)</p>
                    <p className="text-sm text-muted-foreground">Our team will review your requirements and prepare a preliminary assessment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                  <div>
                    <p className="font-medium text-foreground">Discovery Call (within 24 hours)</p>
                    <p className="text-sm text-muted-foreground">We'll schedule a call to discuss your project in detail</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                  <div>
                    <p className="font-medium text-foreground">Detailed Proposal (within 48 hours)</p>
                    <p className="text-sm text-muted-foreground">Receive a comprehensive proposal with timeline and pricing</p>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setSubmitStatus(null)}
              className="mt-8"
            >
              Submit Another Project
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Icon name="MessageSquare" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Get Started</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your{' '}
            <span className="text-gradient-primary">Business?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your project and get a detailed proposal within 48 hours. No commitment required - just honest advice and transparent pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={method.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                      <p className="text-primary font-medium mb-1">{method.value}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Clock" size={24} className="text-success" />
                <h4 className="font-semibold text-foreground">Response Time Guarantee</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-success" />
                  <span>Initial response within 2 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-success" />
                  <span>Detailed proposal within 48 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-success" />
                  <span>Project kickoff within 1 week</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-8 shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-6">Project Brief</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Company Name"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Inc."
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:outline-none"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:outline-none"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:outline-none"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:outline-none"
                    >
                      <option value="">Select option</option>
                      {hearAboutOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project goals, key features, target audience, and any specific requirements or challenges you're facing..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:outline-none resize-vertical"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    The more details you provide, the better we can tailor our proposal to your needs.
                  </p>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <Icon name="Shield" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-foreground font-medium mb-1">Your information is secure</p>
                    <p className="text-muted-foreground">
                      We respect your privacy and will never share your information with third parties. 
                      All project discussions are covered by our standard NDA.
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="cta-shadow"
                >
                  {isSubmitting ? 'Sending...' : 'Get My Free Proposal'}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">How quickly can you start my project?</h4>
                <p className="text-sm text-muted-foreground">
                  Most projects can begin within 1-2 weeks after contract signing. Rush projects can start within 48 hours with our expedited onboarding process.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Do you work with international clients?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, we work with clients globally. Our team is distributed across multiple time zones to ensure effective communication and collaboration.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">What if I need changes during development?</h4>
                <p className="text-sm text-muted-foreground">
                  We use an agile approach with 2-week sprints, allowing for regular feedback and adjustments. Minor changes are included, while major scope changes are handled through change requests.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Do you provide ongoing support after launch?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, all packages include post-launch support. We also offer ongoing maintenance plans to keep your application secure, updated, and performing optimally.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Can you work with our existing team?</h4>
                <p className="text-sm text-muted-foreground">
                  Absolutely. We can integrate with your existing development team, provide technical leadership, or work as an extended team based on your needs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">What technologies do you specialize in?</h4>
                <p className="text-sm text-muted-foreground">
                  We specialize in modern web technologies including React, Node.js, Python, and cloud platforms like AWS. We choose the best technology stack for each project's specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;