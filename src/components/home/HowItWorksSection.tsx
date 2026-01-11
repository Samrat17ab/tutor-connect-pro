import { Search, UserCheck, Calendar, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Search & Discover",
    description: "Browse our extensive network of verified tutors. Filter by subject, price, location, availability, and teaching mode.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Choose Your Tutor",
    description: "Review detailed profiles, qualifications, ratings, and student reviews. Find the perfect match for your learning style.",
  },
  {
    icon: Calendar,
    step: "03",
    title: "Book a Trial",
    description: "Schedule a free trial session to ensure it's the right fit. Meet your tutor and discuss your learning goals.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Start Learning",
    description: "Begin your personalized learning journey. Track progress, attend classes, and achieve your academic goals.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Start Learning in <span className="text-gradient">4 Simple Steps</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Getting started is easy. Find your perfect tutor and begin your learning journey today.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-accent to-success" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Number Circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-hero-gradient text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-6 shadow-lg">
                    {item.step}
                  </div>

                  {/* Content Card */}
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
