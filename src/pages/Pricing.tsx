import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingTiers = [
  {
    name: "Per Session",
    description: "Pay as you go for individual classes",
    price: "Varies",
    priceNote: "Set by teacher",
    features: [
      "Book individual sessions",
      "No long-term commitment",
      "Access to all verified teachers",
      "In-app messaging",
      "Session reminders",
    ],
    cta: "Find Teachers",
    ctaLink: "/find-teachers",
    popular: false,
  },
  {
    name: "Monthly Subscription",
    description: "Best value for regular learners",
    price: "Varies",
    priceNote: "Monthly rate set by teacher",
    features: [
      "4-8 sessions per month",
      "Priority booking",
      "Lower per-session cost",
      "Progress tracking",
      "In-app messaging",
      "Session recordings (online)",
      "Flexible rescheduling",
    ],
    cta: "Get Started",
    ctaLink: "/signup",
    popular: true,
  },
  {
    name: "Trial Class",
    description: "Try before you commit",
    price: "Free",
    priceNote: "One per teacher",
    features: [
      "30-minute trial session",
      "Meet your potential teacher",
      "Discuss learning goals",
      "No payment required",
      "No obligation to continue",
    ],
    cta: "Book Trial",
    ctaLink: "/find-teachers",
    popular: false,
  },
];

const faqs = [
  {
    question: "How does pricing work on TutorConnect?",
    answer: "Teachers set their own hourly or monthly rates based on their experience, subjects, and teaching mode. You can filter teachers by price range to find options within your budget.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, UPI, net banking, and popular digital wallets. All payments are processed securely through our payment partner.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes! If you're not satisfied with a session, you can request a refund within 24 hours. For subscription plans, you can cancel anytime and receive a prorated refund for unused sessions.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees! The price you see is the price you pay. Our platform commission is already included in the teacher's rates.",
  },
  {
    question: "How do I switch teachers?",
    answer: "You can switch teachers at any time. Simply end your current subscription (if applicable) and book with a new teacher. Your unused credits can be transferred.",
  },
  {
    question: "Do you offer family discounts?",
    answer: "Many teachers offer discounts for multiple students from the same family. You can discuss this directly with your chosen teacher.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose how you want to learn. No hidden fees, no surprises.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl border p-8 ${
                    tier.popular
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-border bg-card"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{tier.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                    <div className="text-4xl font-bold text-foreground">{tier.price}</div>
                    <p className="text-sm text-muted-foreground mt-1">{tier.priceNote}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={tier.ctaLink}>
                    <Button
                      className="w-full"
                      variant={tier.popular ? "default" : "outline"}
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <HelpCircle className="w-6 h-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-muted-foreground">
                Got questions? We've got answers.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-background border border-border rounded-xl px-6"
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Start Learning Today
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of students already learning with TutorConnect.
            </p>
            <Link to="/signup">
              <Button size="lg">Get Started Free</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
