import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emily Johnson",
    role: "Parent",
    avatar: "EJ",
    rating: 5,
    text: "TutorConnect has been a game-changer for my son's education. His math grades improved from C to A in just three months. The teacher is patient, knowledgeable, and truly cares about student success.",
    subject: "Mathematics",
  },
  {
    name: "Michael Chen",
    role: "High School Student",
    avatar: "MC",
    rating: 5,
    text: "I was struggling with physics until I found my tutor here. The online classes are so convenient, and my teacher explains concepts in ways that actually make sense. Highly recommend!",
    subject: "Physics",
  },
  {
    name: "Sarah Williams",
    role: "College Student",
    avatar: "SW",
    rating: 5,
    text: "Finding a chemistry tutor near me was so easy. The trial class feature helped me find the perfect match. My tutor's teaching style is exactly what I needed for exam preparation.",
    subject: "Chemistry",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Loved by Students & <span className="text-gradient">Parents</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of satisfied learners who found their perfect tutor on our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role} • {testimonial.subject}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-hero-gradient rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-primary-foreground">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">50K+</p>
              <p className="opacity-80">Happy Students</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">10K+</p>
              <p className="opacity-80">Verified Tutors</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">500K+</p>
              <p className="opacity-80">Classes Completed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">4.9</p>
              <p className="opacity-80">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
