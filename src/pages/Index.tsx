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

      {/* Scope of Services */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-legal-primary mb-4">
              Scope of Services
            </h2>
            <p className="text-xl text-legal-muted">
              Comprehensive legal support designed for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                icon: <CheckCircle className="h-6 w-6 text-legal-accent" />,
                title: "Unlimited Contract Creation",
                description: "Draft new legal agreements tailored to your needs."
              },
              {
                icon: <FileText className="h-6 w-6 text-legal-accent" />,
                title: "Unlimited Reviews & Revisions",
                description: "Send any contract, we'll review and amend it."
              },
              {
                icon: <MessageSquare className="h-6 w-6 text-legal-accent" />,
                title: "Unlimited Legal Advice",
                description: "Ask us anything related to business or corporate law."
              },
              {
                icon: <Clock className="h-6 w-6 text-legal-accent" />,
                title: "Fast Turnaround (1–3 Days)",
                description: "Most requests are handled in 1–3 business days."
              },
              {
                icon: <Globe className="h-6 w-6 text-legal-accent" />,
                title: "Bilingual Legal Support",
                description: "English and Arabic legal services available."
              },
              {
                icon: <Shield className="h-6 w-6 text-legal-accent" />,
                title: "Senior-Led Work",
                description: "All requests reviewed by experienced legal professionals."
              }
            ].map((service, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  {service.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-legal-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-legal-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
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
                question: "What services are included in the monthly subscription fee?",
                answer: "Contract creation, reviews, amendments, and scheduled legal advisory calls."
              },
              {
                question: "Can I submit unlimited requests?",
                answer: "Yes, you may submit as many contract or legal support requests as needed."
              },
              {
                question: "What is the typical turnaround time?",
                answer: "Most requests are completed within 1–3 business days, depending on complexity."
              },
              {
                question: "Can you represent me in court?",
                answer: "No, we focus exclusively on corporate and commercial legal support, not litigation."
              },
              {
                question: "What types of contracts are not covered by the subscription?",
                answer: "Complex agreements like M&A, shareholder agreements, and franchise deals are excluded from the base plan."
              },
              {
                question: "Can I schedule a legal consultation?",
                answer: "Yes. Clients may schedule consultations as part of their subscription."
              },
              {
                question: "Do you offer one-time legal support?",
                answer: "If you need legal support outside the subscription scope, contact us for a quote."
              },
              {
                question: "What's your cancellation policy?",
                answer: "Subscriptions are monthly. Cancel anytime before the next billing cycle."
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
      <section className="px-6 py-16 md:py-24 bg-legal-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Start your legal subscription today.
          </h1>
          <p className="text-lg md:text-xl mb-12 text-white/90 max-w-2xl mx-auto font-medium">
            Clarity. Speed. Expert legal support — for AED 5,000/month.
          </p>
          <Button variant="legal" size="lg" className="text-lg px-8 py-6 hover:brightness-110 hover:scale-105 transition-all duration-200">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-white border-t" style={{ borderColor: '#E5E7EB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 text-sm" style={{ color: '#6B7280' }}>
            {/* Copyright */}
            <div className="text-center md:text-left">
              © Precedential Legal Consultancy FZ-LLC. All rights reserved.
            </div>
            
            {/* Language Toggle */}
            <div className="flex justify-center md:justify-center">
              <span className="font-medium">EN</span>
              <span className="mx-2">|</span>
              <span>AR</span>
            </div>
            
            {/* Links */}
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#" className="hover:opacity-70 transition-opacity">Terms of Service</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;