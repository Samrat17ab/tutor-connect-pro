import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Search, Calendar, MessageSquare, CreditCard, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Search,
    title: "Search for Teachers",
    description: "Browse our verified teachers by subject, location, price, and availability. Filter by online or offline teaching modes.",
  },
  {
    icon: Calendar,
    title: "Book a Trial Class",
    description: "Request a free trial session to see if the teacher is the right fit for you before committing.",
  },
  {
    icon: MessageSquare,
    title: "Connect & Communicate",
    description: "Chat directly with your teacher to discuss learning goals, schedule, and any special requirements.",
  },
  {
    icon: CreditCard,
    title: "Subscribe & Learn",
    description: "Choose a monthly subscription or per-session booking. Secure payments with automatic billing.",
  },
  {
    icon: Star,
    title: "Rate & Review",
    description: "After your sessions, share your experience to help other students find great teachers.",
  },
];

const benefits = [
  "Verified and background-checked teachers",
  "Flexible online and offline learning options",
  "Transparent pricing with no hidden fees",
  "Easy rescheduling and cancellation",
  "Secure payment processing",
  "24/7 customer support",
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How TutorConnect Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Finding the perfect tutor has never been easier. Follow these simple steps to start your learning journey.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 mb-12 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-4" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="text-sm font-medium text-primary mb-2">Step {index + 1}</div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose TutorConnect?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're committed to providing the best learning experience for students and parents.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of students who have found their perfect tutor on TutorConnect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/find-teachers">
                <Button size="lg">Find a Teacher</Button>
              </Link>
              <Link to="/become-teacher">
                <Button size="lg" variant="outline">Become a Teacher</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
