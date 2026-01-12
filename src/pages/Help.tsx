import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, CreditCard, Users, Calendar, Shield, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { icon: BookOpen, label: "Getting Started", count: 8 },
  { icon: Users, label: "For Students", count: 12 },
  { icon: Calendar, label: "For Teachers", count: 10 },
  { icon: CreditCard, label: "Payments & Billing", count: 7 },
  { icon: Shield, label: "Safety & Trust", count: 5 },
  { icon: MessageSquare, label: "Communication", count: 6 },
];

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I create an account?",
        answer: "Click the 'Get Started' button on our homepage. You can sign up using your email address. Choose whether you're joining as a student/parent or as a teacher.",
      },
      {
        question: "Is TutorConnect free to use?",
        answer: "Creating an account is free! Students pay only for the tutoring sessions they book. Teachers keep up to 85% of their earnings after our platform commission.",
      },
      {
        question: "How do I find a teacher?",
        answer: "Use our 'Find Teachers' page to search by subject, grade level, price range, and teaching mode (online/offline). You can also filter by location for in-person tutoring.",
      },
    ],
  },
  {
    category: "For Students",
    questions: [
      {
        question: "Can I try a class before committing?",
        answer: "Yes! Most teachers offer a free trial session. You can request one from their profile page to see if they're the right fit before subscribing.",
      },
      {
        question: "How do I reschedule or cancel a class?",
        answer: "Go to your dashboard, find the upcoming class, and click 'Reschedule' or 'Cancel'. Please note our cancellation policy requires 24 hours notice for a full refund.",
      },
      {
        question: "Can I switch teachers?",
        answer: "Absolutely! You can end your subscription with one teacher and start with another at any time. Your learning credits can be transferred.",
      },
    ],
  },
  {
    category: "For Teachers",
    questions: [
      {
        question: "How do I become a verified teacher?",
        answer: "After signing up as a teacher, upload your ID and qualification certificates. Our team reviews applications within 24-48 hours. Once approved, your profile goes live.",
      },
      {
        question: "How much can I earn?",
        answer: "You set your own rates! Teachers keep 60% of earnings in the first month with a new student, and 85% in subsequent months. Top teachers earn ₹50,000+ monthly.",
      },
      {
        question: "Can I teach both online and offline?",
        answer: "Yes! You can choose to teach online only, offline only, or both. For offline teaching, you can set your location and travel radius.",
      },
    ],
  },
  {
    category: "Payments & Billing",
    questions: [
      {
        question: "What payment methods are accepted?",
        answer: "We accept all major credit/debit cards, UPI, net banking, and popular digital wallets. All payments are processed securely.",
      },
      {
        question: "When do teachers get paid?",
        answer: "Teachers receive payouts on the 1st and 15th of each month for all completed sessions. Payments are made directly to your registered bank account.",
      },
      {
        question: "What is your refund policy?",
        answer: "If you're unsatisfied with a session, you can request a refund within 24 hours. For subscriptions, you can cancel anytime and receive a prorated refund.",
      },
    ],
  },
];

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How can we help you?
            </h1>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for help articles..."
                className="pl-12 h-14 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-border bg-card hover:shadow-md transition-shadow cursor-pointer text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm">{category.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{category.count} articles</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-12">
              {faqs.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h2 className="text-2xl font-semibold text-foreground mb-6">{section.category}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {section.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${sectionIndex}-${index}`}
                        className="bg-card border border-border rounded-xl px-6"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-medium text-foreground">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you with anything you need.
            </p>
            <Link to="/contact">
              <Button size="lg">Contact Support</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Help;
