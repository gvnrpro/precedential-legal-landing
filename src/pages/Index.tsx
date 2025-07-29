import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  Scale, 
  Shield, 
  Clock, 
  Users, 
  FileText, 
  Target,
  MessageSquare,
  Search,
  Handshake,
  Truck,
  DollarSign,
  Globe,
  Zap,
  Building
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-legal-soft">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 max-w-6xl mx-auto bg-white">
        <div className="max-w-3xl">
          <p className="text-legal-muted text-sm font-medium uppercase tracking-wider mb-6">
            A smarter way to access law.
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-legal-primary mb-8 leading-tight">
            Unlimited Legal Support for{' '}
            <span className="text-legal-accent">AED 5,000/month</span>
          </h1>
          <p className="text-xl md:text-2xl text-legal-muted mb-16 leading-relaxed">
            No hourly billing. No uncertainty. Just clarity.
          </p>
          <Button variant="cta" size="lg" className="text-lg px-8 py-6 sticky-cta md:relative">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Silent Social Proof */}
      <section className="px-6 py-16 border-t border-legal-soft">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-legal-muted text-sm font-medium mb-8">
            Trusted by UAE businesses
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-40">
            <div className="w-24 h-12 bg-legal-muted/20 rounded flex items-center justify-center">
              <Scale className="h-6 w-6 text-legal-muted" />
            </div>
            <div className="w-24 h-12 bg-legal-muted/20 rounded flex items-center justify-center">
              <Shield className="h-6 w-6 text-legal-muted" />
            </div>
            <div className="w-24 h-12 bg-legal-muted/20 rounded flex items-center justify-center">
              <Users className="h-6 w-6 text-legal-muted" />
            </div>
            <div className="w-24 h-12 bg-legal-muted/20 rounded flex items-center justify-center">
              <FileText className="h-6 w-6 text-legal-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="px-6 py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-legal-primary mb-4">
              Why Choose Precedential.Legal
            </h2>
            <p className="text-xl text-legal-muted max-w-2xl mx-auto">
              Modern legal support designed for today's businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-8 w-8 text-legal-accent transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 opacity-70" />,
                title: "Unlimited Requests",
                description: "Ask us anything, anytime."
              },
              {
                icon: <DollarSign className="h-8 w-8 text-legal-accent transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 opacity-70" />,
                title: "Flat-Fee Simplicity",
                description: "No surprise billing."
              },
              {
                icon: <Globe className="h-8 w-8 text-legal-accent transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 opacity-70" />,
                title: "Bilingual Service",
                description: "English & Arabic support."
              },
              {
                icon: <FileText className="h-8 w-8 text-legal-accent transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 opacity-70" />,
                title: "Legal Documents",
                description: "Contracts, memos, letters."
              },
              {
                icon: <Zap className="h-8 w-8 text-legal-accent transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 opacity-70" />,
                title: "Fast Turnaround",
                description: "We respond when it matters."
              },
              {
                icon: <Building className="h-8 w-8 text-legal-accent transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 opacity-70" />,
                title: "Business-Focused",
                description: "Built for UAE companies."
              }
            ].map((item, index) => (
              <Card key={index} className="group p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-legal-soft/50 text-center md:text-left">
                <CardContent className="p-0">
                  <div className="mb-6 flex justify-center md:justify-start">{item.icon}</div>
                  <h3 className="text-xl font-bold text-legal-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-legal-muted leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-legal-soft/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-legal-primary mb-4">
              How It Works
            </h2>
            <p className="text-xl text-legal-muted">
              Simple, transparent process from start to finish
            </p>
          </div>
          
          <div className="relative">
            {/* Connector Line - Desktop only */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-legal-soft"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {[
                {
                  number: "01",
                  icon: <Search className="h-8 w-8 text-legal-accent" />,
                  title: "Submit Your Inquiry",
                  description: "Use our intake form to tell us your needs."
                },
                {
                  number: "02",
                  icon: <Zap className="h-8 w-8 text-legal-accent" />,
                  title: "We Respond Quickly",
                  description: "Get a response same-day or next-day."
                },
                {
                  number: "03",
                  icon: <FileText className="h-8 w-8 text-legal-accent" />,
                  title: "Request What You Need",
                  description: "Contracts, legal opinions, letters, etc."
                },
                {
                  number: "04",
                  icon: <Truck className="h-8 w-8 text-legal-accent" />,
                  title: "Delivered to You",
                  description: "We send you complete documents or advice."
                }
              ].map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Step Circle */}
                  <div className="relative mb-6 mx-auto">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-md border-2 border-legal-soft relative z-10">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-legal-accent text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-legal-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-legal-muted text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included / Not Included */}
      <section className="px-6 py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-legal-primary mb-4">
              What's Included
            </h2>
            <p className="text-xl text-legal-muted">
              Comprehensive legal support with clear boundaries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Included */}
            <div>
              <h3 className="text-2xl font-semibold text-legal-primary mb-8 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                Included Services
              </h3>
              <div className="space-y-4">
                {[
                  "Contract review and drafting",
                  "Business compliance guidance",
                  "Employment law support",
                  "Intellectual property advice",
                  "Corporate governance",
                  "Regulatory compliance",
                  "Legal document templates",
                  "Risk assessment consultations"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-legal-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Not Included */}
            <div>
              <h3 className="text-2xl font-semibold text-legal-primary mb-8 flex items-center">
                <XCircle className="h-6 w-6 text-red-500 mr-3" />
                Not Included
              </h3>
              <div className="space-y-4">
                {[
                  "Court representation",
                  "Criminal law matters",
                  "Family law cases",
                  "Personal injury claims",
                  "Immigration services",
                  "Real estate transactions",
                  "Bankruptcy proceedings",
                  "Emergency legal services"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-legal-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 py-20 bg-legal-soft/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-legal-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-legal-muted">
              Everything you need to know about our legal subscription service
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How does the unlimited legal support work?",
                answer: "Our subscription model provides you with unlimited access to our legal team for business-related matters. You can submit as many requests as needed within the scope of our services for one fixed monthly fee."
              },
              {
                question: "What types of businesses do you work with?",
                answer: "We work with businesses of all sizes across the UAE, from startups to established enterprises. Our services are designed to support various industries and business structures."
              },
              {
                question: "How quickly can I expect responses to my legal requests?",
                answer: "We pride ourselves on rapid response times. Most inquiries receive an initial response within 24 hours, with more complex matters receiving detailed attention based on urgency and complexity."
              },
              {
                question: "Can I cancel my subscription at any time?",
                answer: "Yes, our subscription service offers flexibility. You can cancel with appropriate notice as outlined in our terms of service. We believe in earning your business every month."
              },
              {
                question: "Are you qualified to practice law in the UAE?",
                answer: "Absolutely. Our legal team consists of qualified lawyers licensed to practice in the United Arab Emirates, with deep knowledge of local business law and regulations."
              },
              {
                question: "What happens if I need services not included in my subscription?",
                answer: "For matters outside our subscription scope, we can discuss alternative arrangements or refer you to specialized practitioners. We'll always be transparent about what's included in your subscription."
              },
              {
                question: "How do I get started with Precedential.Legal?",
                answer: "Simply click our 'Get Started' button to fill out our intake form. We'll review your needs and set up an initial consultation to onboard you to our service."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-legal-soft bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left text-legal-primary font-semibold hover:text-legal-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-legal-muted leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-20 bg-legal-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start your legal subscription today
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto">
            Join forward-thinking businesses who have chosen predictable, unlimited legal support over traditional hourly billing.
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-6 bg-white text-legal-primary hover:bg-white/90">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-background border-t border-legal-soft">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Scale className="h-6 w-6 text-legal-accent" />
                <span className="text-xl font-semibold text-legal-primary">Precedential.Legal</span>
              </div>
              <div className="hidden md:flex space-x-6 text-legal-muted">
                <a href="#" className="hover:text-legal-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-legal-primary transition-colors">Privacy Policy</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="text-legal-muted">
                Email us at <a href="mailto:support@precedential.legal" className="text-legal-accent hover:underline">support@precedential.legal</a>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-legal-primary font-medium hover:text-legal-accent transition-colors">EN</button>
                <span className="text-legal-muted">|</span>
                <button className="text-legal-muted hover:text-legal-primary transition-colors">AR</button>
              </div>
            </div>
          </div>
          
          <div className="flex md:hidden flex-col items-center space-y-4 mt-6 pt-6 border-t border-legal-soft">
            <div className="flex space-x-6 text-legal-muted">
              <a href="#" className="hover:text-legal-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-legal-primary transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;