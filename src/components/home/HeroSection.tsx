import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Star, Users, Video, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              Trusted by 50,000+ students
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find Your Perfect
              <span className="text-gradient block">Tutor Today</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Connect with verified, expert tutors for personalized learning. 
              Whether online or in-person, we match you with the right teacher for your goals.
            </p>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  className="w-full h-14 pl-12 pr-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <Link to="/find-teachers">
                <Button size="xl" className="w-full sm:w-auto">
                  Search Tutors
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">10,000+</p>
                  <p className="text-sm text-muted-foreground">Verified Tutors</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Video className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Online</p>
                  <p className="text-sm text-muted-foreground">& In-Person</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold">4.9/5</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              {/* Main Tutor Card */}
              <div className="absolute top-10 left-10 w-72 bg-card rounded-2xl shadow-xl p-6 animate-float">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    SK
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah K.</h4>
                    <p className="text-sm text-muted-foreground">Mathematics Expert</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warning fill-current" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">(127 reviews)</span>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Algebra</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Calculus</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$45<span className="text-sm text-muted-foreground font-normal">/hr</span></span>
                  <Button size="sm">Book Now</Button>
                </div>
              </div>

              {/* Online Badge */}
              <div className="absolute top-4 right-20 px-4 py-2 bg-success text-success-foreground rounded-full text-sm font-medium flex items-center gap-2 shadow-lg animate-pulse-soft">
                <div className="w-2 h-2 rounded-full bg-current" />
                Live Online Classes
              </div>

              {/* Second Tutor Card */}
              <div className="absolute bottom-20 right-0 w-64 bg-card rounded-2xl shadow-xl p-5" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-accent-foreground font-bold">
                    JM
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">John M.</h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-warning fill-current" />
                      <span className="text-xs text-muted-foreground">4.9</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Physics & Chemistry</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>Available within 5km</span>
                </div>
              </div>

              {/* Stats Card */}
              <div className="absolute bottom-40 left-0 px-6 py-4 bg-foreground text-background rounded-2xl shadow-xl">
                <p className="text-sm opacity-70 mb-1">This Month</p>
                <p className="text-2xl font-bold">2,847</p>
                <p className="text-sm opacity-70">Classes Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
