import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Student CTA */}
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-8 md:p-12 text-primary-foreground">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-sm font-medium mb-6">
                For Students
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Learning?
              </h3>
              <p className="opacity-90 mb-8 max-w-sm">
                Join thousands of students who are achieving their academic goals with personalized tutoring.
              </p>
              <Link to="/find-teachers">
                <Button variant="hero-outline" size="lg" className="group">
                  Find Your Tutor
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Teacher CTA */}
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-8 md:p-12 text-background">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-sm font-medium mb-6">
                For Teachers
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Share Your Knowledge
              </h3>
              <p className="opacity-90 mb-8 max-w-sm">
                Join our community of educators. Set your own rates, schedule, and teaching style. Earn on your terms.
              </p>
              <Link to="/become-teacher">
                <Button variant="accent" size="lg" className="group">
                  <GraduationCap className="w-5 h-5" />
                  Start Teaching
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
