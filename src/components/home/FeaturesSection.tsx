import { Shield, Video, MapPin, Calendar, MessageSquare, CreditCard, Star, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Teachers",
    description: "All tutors go through identity verification and background checks for your peace of mind.",
    color: "primary",
  },
  {
    icon: Video,
    title: "Online Classes",
    description: "Learn from anywhere with HD video classes, screen sharing, and interactive whiteboards.",
    color: "accent",
  },
  {
    icon: MapPin,
    title: "In-Person Tutoring",
    description: "Find teachers near you for face-to-face learning at your home or their location.",
    color: "success",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Book classes that fit your schedule. Cancel or reschedule anytime with ease.",
    color: "warning",
  },
  {
    icon: MessageSquare,
    title: "Direct Messaging",
    description: "Chat directly with tutors to discuss lessons, share materials, and track progress.",
    color: "primary",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Safe and transparent payments. Pay per session or subscribe monthly.",
    color: "accent",
  },
  {
    icon: Star,
    title: "Reviews & Ratings",
    description: "Read authentic reviews from real students to find the perfect tutor for you.",
    color: "warning",
  },
  {
    icon: Users,
    title: "Trial Classes",
    description: "Try before you commit. Book a free trial session to find your ideal match.",
    color: "success",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to
            <span className="text-gradient"> Succeed</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform provides all the tools for effective learning and teaching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              primary: "bg-primary/10 text-primary",
              accent: "bg-accent/10 text-accent",
              success: "bg-success/10 text-success",
              warning: "bg-warning/10 text-warning",
            };
            
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
