import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Star, MapPin, Video, Clock, Check, Heart, Share2, 
  Calendar, MessageSquare, GraduationCap, Award, Users,
  ChevronRight
} from "lucide-react";

// Mock teacher data
const teacherData = {
  id: 1,
  name: "Dr. Sarah Kim",
  initials: "SK",
  title: "Mathematics Expert & PhD Graduate",
  subject: "Mathematics",
  specialties: ["Algebra", "Calculus", "Statistics", "Linear Algebra", "Geometry"],
  rating: 4.9,
  reviews: 127,
  hourlyRate: 45,
  monthlyRate: 320,
  location: "New York, NY",
  mode: ["online", "offline"],
  experience: 8,
  verified: true,
  totalStudents: 234,
  totalHours: 1560,
  responseTime: "< 1 hour",
  bio: "I'm a PhD graduate from MIT with a passion for making mathematics accessible and enjoyable for students of all levels. With over 8 years of teaching experience, I've helped hundreds of students achieve their academic goals, from struggling high schoolers to ambitious college students preparing for graduate programs.",
  education: [
    { degree: "PhD in Mathematics", school: "MIT", year: "2018" },
    { degree: "MSc in Applied Mathematics", school: "Stanford University", year: "2014" },
    { degree: "BSc in Mathematics", school: "UC Berkeley", year: "2012" },
  ],
  availability: [
    { day: "Monday", slots: ["3:00 PM", "4:00 PM", "5:00 PM", "7:00 PM"] },
    { day: "Tuesday", slots: ["3:00 PM", "4:00 PM", "6:00 PM"] },
    { day: "Wednesday", slots: ["3:00 PM", "5:00 PM", "7:00 PM", "8:00 PM"] },
    { day: "Thursday", slots: ["4:00 PM", "5:00 PM", "6:00 PM"] },
    { day: "Friday", slots: ["3:00 PM", "4:00 PM", "5:00 PM"] },
  ],
  reviewsList: [
    {
      id: 1,
      name: "Michael T.",
      rating: 5,
      date: "2 weeks ago",
      text: "Dr. Kim is an exceptional tutor! She helped my daughter raise her calculus grade from a C to an A. Her teaching style is patient, clear, and engaging.",
    },
    {
      id: 2,
      name: "Jessica L.",
      rating: 5,
      date: "1 month ago",
      text: "Best math tutor I've ever had. She breaks down complex concepts into simple, understandable steps. Highly recommend for anyone struggling with math!",
    },
    {
      id: 3,
      name: "David R.",
      rating: 5,
      date: "1 month ago",
      text: "Prepared me for my SAT math section. Went from 650 to 780! Her practice problems and strategies were invaluable.",
    },
  ],
};

const TeacherProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/find-teachers" className="hover:text-foreground">Find Teachers</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{teacherData.name}</span>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Header */}
              <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-4xl">
                      {teacherData.initials}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-2xl md:text-3xl font-bold">{teacherData.name}</h1>
                      {teacherData.verified && (
                        <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">{teacherData.title}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-warning fill-current" />
                        <span className="font-semibold">{teacherData.rating}</span>
                        <span className="text-muted-foreground">({teacherData.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{teacherData.experience} years experience</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{teacherData.location}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {teacherData.mode.includes("online") && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
                          <Video className="w-4 h-4" />
                          Online
                        </span>
                      )}
                      {teacherData.mode.includes("offline") && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                          <MapPin className="w-4 h-4" />
                          In-Person
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-primary mb-1">
                      <Users className="w-5 h-5" />
                    </div>
                    <p className="text-2xl font-bold">{teacherData.totalStudents}</p>
                    <p className="text-sm text-muted-foreground">Students</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-primary mb-1">
                      <Clock className="w-5 h-5" />
                    </div>
                    <p className="text-2xl font-bold">{teacherData.totalHours}+</p>
                    <p className="text-sm text-muted-foreground">Hours Taught</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-primary mb-1">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <p className="text-2xl font-bold">{teacherData.responseTime}</p>
                    <p className="text-sm text-muted-foreground">Response Time</p>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow">
                <h2 className="text-xl font-semibold mb-4">About Me</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {teacherData.bio}
                </p>
              </div>

              {/* Specialties */}
              <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow">
                <h2 className="text-xl font-semibold mb-4">Subjects & Specialties</h2>
                <div className="flex flex-wrap gap-2">
                  {teacherData.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </h2>
                <div className="space-y-4">
                  {teacherData.education.map((edu, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.school} • {edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Reviews</h2>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-warning fill-current" />
                    <span className="font-semibold">{teacherData.rating}</span>
                    <span className="text-muted-foreground">({teacherData.reviews} reviews)</span>
                  </div>
                </div>
                <div className="space-y-6">
                  {teacherData.reviewsList.map((review) => (
                    <div key={review.id} className="pb-6 border-b border-border last:border-0 last:pb-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-semibold text-sm">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-semibold">{review.name}</h4>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex gap-0.5 ml-auto">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-warning fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.text}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6">
                  View All Reviews
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <div className="bg-card rounded-2xl p-6 card-shadow sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold">${teacherData.hourlyRate}</span>
                    <span className="text-muted-foreground">/hour</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                      <Heart className="w-5 h-5 text-muted-foreground" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                      <Share2 className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <Button className="w-full" size="lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Trial Class
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Message Teacher
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="text-success font-medium">Free trial</span> • No commitment
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monthly package (8 hrs)</span>
                      <span className="font-semibold">${teacherData.monthlyRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Discount</span>
                      <span className="text-success font-semibold">Save 11%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability Preview */}
              <div className="bg-card rounded-2xl p-6 card-shadow">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Availability
                </h3>
                <div className="space-y-3">
                  {teacherData.availability.slice(0, 3).map((day) => (
                    <div key={day.day} className="flex items-center justify-between">
                      <span className="font-medium">{day.day}</span>
                      <span className="text-sm text-muted-foreground">
                        {day.slots.length} slots available
                      </span>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4 text-primary">
                  View Full Schedule
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeacherProfile;
