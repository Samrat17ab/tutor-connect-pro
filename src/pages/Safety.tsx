import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, UserCheck, Lock, Eye, AlertTriangle, CheckCircle } from "lucide-react";

const safetyFeatures = [
  {
    icon: UserCheck,
    title: "Verified Teachers",
    description: "All teachers undergo a thorough verification process including ID verification and qualification checks before they can offer classes.",
  },
  {
    icon: Shield,
    title: "Background Checks",
    description: "We conduct background checks on all teachers to ensure a safe learning environment for students of all ages.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "All payments are processed through our secure payment system. Your financial information is encrypted and never shared with teachers.",
  },
  {
    icon: Eye,
    title: "Session Monitoring",
    description: "Online sessions can be recorded (with consent) for safety and quality assurance purposes.",
  },
  {
    icon: AlertTriangle,
    title: "Report System",
    description: "Easy-to-use reporting system for any concerns. Our safety team investigates all reports within 24 hours.",
  },
  {
    icon: CheckCircle,
    title: "Reviews & Ratings",
    description: "Transparent review system helps you make informed decisions based on other students' experiences.",
  },
];

const guidelines = [
  {
    title: "For Students & Parents",
    items: [
      "Never share personal information like home address or phone number before booking",
      "Use our in-app messaging for all communications",
      "For in-person tutoring, choose public meeting places or have a parent present",
      "Report any concerning behavior immediately",
      "Keep payment transactions within the platform",
    ],
  },
  {
    title: "For Teachers",
    items: [
      "Complete the verification process honestly and accurately",
      "Maintain professional boundaries at all times",
      "Use platform messaging for initial communications",
      "Follow our code of conduct during all interactions",
      "Report any suspicious activity from students or parents",
    ],
  },
];

const Safety = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Safety is Our Priority
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to creating a safe and trusted learning environment for students, parents, and teachers.
            </p>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How We Keep You Safe
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Multiple layers of protection to ensure a secure learning experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl border border-border bg-card">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Guidelines */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Safety Guidelines
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow these guidelines to ensure a safe experience for everyone.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {guidelines.map((section, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Report Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <AlertTriangle className="w-12 h-12 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                See Something? Say Something.
              </h2>
              <p className="text-muted-foreground mb-8">
                If you encounter any suspicious activity or feel unsafe, please report it immediately. All reports are taken seriously and investigated promptly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:safety@tutorconnect.com" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Report a Safety Concern
                </a>
                <a href="tel:+911800123456" className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors">
                  Emergency: 1800-123-456
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Safety;
