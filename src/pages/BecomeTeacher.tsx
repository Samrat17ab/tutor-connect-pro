import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle, DollarSign, Clock, Users, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: DollarSign,
    title: "Earn on Your Terms",
    description: "Set your own rates and keep up to 85% of your earnings. Get paid securely every month.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Teach when it works for you. Set your availability and accept students that fit your schedule.",
  },
  {
    icon: Users,
    title: "Reach More Students",
    description: "Access thousands of students looking for qualified teachers in your subjects.",
  },
  {
    icon: Shield,
    title: "Verified Platform",
    description: "Join a trusted community. All students are verified, and payments are guaranteed.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Build your reputation with reviews and ratings. Top teachers get featured on our platform.",
  },
];

const requirements = [
  "Valid government-issued ID",
  "Relevant educational qualifications",
  "Subject matter expertise",
  "Reliable internet connection (for online teaching)",
  "Passion for teaching and helping students succeed",
];

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Sign up and complete your teacher profile with your qualifications, subjects, and teaching style.",
  },
  {
    number: "02",
    title: "Get Verified",
    description: "Upload your ID and certificates. Our team will verify your credentials within 24-48 hours.",
  },
  {
    number: "03",
    title: "Set Your Availability",
    description: "Choose your teaching hours, set your rates, and specify if you teach online, offline, or both.",
  },
  {
    number: "04",
    title: "Start Teaching",
    description: "Accept student requests, conduct classes, and start earning. We handle payments and scheduling.",
  },
];

const stats = [
  { value: "10,000+", label: "Active Teachers" },
  { value: "₹50L+", label: "Paid to Teachers" },
  { value: "4.8/5", label: "Average Rating" },
  { value: "50,000+", label: "Classes Completed" },
];

const BecomeTeacher = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Share Your Knowledge, <span className="text-primary">Earn Your Worth</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of teachers who are building successful tutoring careers on TutorConnect. Set your own rates, choose your schedule, and make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup?role=teacher">
                  <Button size="lg">Start Teaching Today</Button>
                </Link>
                <Link to="/find-teachers">
                  <Button size="lg" variant="outline">See Other Teachers</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Teach on TutorConnect?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide everything you need to build a successful tutoring practice.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Join Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How to Get Started
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join our platform in just a few simple steps.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Requirements to Join
                </h2>
                <p className="text-muted-foreground">
                  Make sure you meet these basic requirements before applying.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8">
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Teaching Journey?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join TutorConnect today and connect with students who need your expertise.
            </p>
            <Link to="/signup?role=teacher">
              <Button size="lg" variant="secondary" className="text-primary">
                Apply Now - It's Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BecomeTeacher;
