import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, Filter, Star, MapPin, Video, Clock, 
  ChevronDown, Heart, Check, X 
} from "lucide-react";

const mockTeachers = [
  {
    id: 1,
    name: "Dr. Sarah Kim",
    initials: "SK",
    subject: "Mathematics",
    specialties: ["Algebra", "Calculus", "Statistics"],
    rating: 4.9,
    reviews: 127,
    hourlyRate: 45,
    location: "New York, NY",
    distance: 2.3,
    mode: ["online", "offline"],
    experience: 8,
    verified: true,
    bio: "PhD in Mathematics from MIT. Specializing in making complex concepts simple and enjoyable for students of all levels.",
    availability: "Mon-Fri, 3pm-9pm",
  },
  {
    id: 2,
    name: "John Martinez",
    initials: "JM",
    subject: "Physics",
    specialties: ["Mechanics", "Thermodynamics", "Quantum Physics"],
    rating: 4.8,
    reviews: 89,
    hourlyRate: 40,
    location: "Brooklyn, NY",
    distance: 4.1,
    mode: ["online"],
    experience: 5,
    verified: true,
    bio: "Former NASA engineer turned educator. I bring real-world applications to every physics lesson.",
    availability: "Flexible",
  },
  {
    id: 3,
    name: "Emily Chen",
    initials: "EC",
    subject: "Chemistry",
    specialties: ["Organic Chemistry", "Biochemistry"],
    rating: 5.0,
    reviews: 64,
    hourlyRate: 50,
    location: "Manhattan, NY",
    distance: 1.2,
    mode: ["online", "offline"],
    experience: 6,
    verified: true,
    bio: "Medical school student helping pre-med students ace their chemistry courses.",
    availability: "Weekends",
  },
  {
    id: 4,
    name: "David Wilson",
    initials: "DW",
    subject: "English",
    specialties: ["Literature", "Essay Writing", "SAT Prep"],
    rating: 4.7,
    reviews: 203,
    hourlyRate: 35,
    location: "Queens, NY",
    distance: 5.8,
    mode: ["offline"],
    experience: 12,
    verified: true,
    bio: "Published author and former high school English teacher with 12+ years of experience.",
    availability: "Mon-Sat, 2pm-8pm",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    initials: "LT",
    subject: "Biology",
    specialties: ["Molecular Biology", "Genetics", "Anatomy"],
    rating: 4.9,
    reviews: 156,
    hourlyRate: 42,
    location: "Jersey City, NJ",
    distance: 6.5,
    mode: ["online"],
    experience: 7,
    verified: true,
    bio: "Research scientist passionate about making biology fascinating and accessible.",
    availability: "Evenings & Weekends",
  },
  {
    id: 6,
    name: "Michael Park",
    initials: "MP",
    subject: "Computer Science",
    specialties: ["Python", "JavaScript", "Data Structures"],
    rating: 4.8,
    reviews: 98,
    hourlyRate: 55,
    location: "Hoboken, NJ",
    distance: 3.4,
    mode: ["online", "offline"],
    experience: 4,
    verified: true,
    bio: "Software engineer at Google. Teaching coding the way I wish I had been taught.",
    availability: "Weekday evenings",
  },
];

const subjects = ["All Subjects", "Mathematics", "Physics", "Chemistry", "English", "Biology", "Computer Science"];
const modes = ["All Modes", "Online", "Offline"];
const priceRanges = ["Any Price", "$20-30/hr", "$30-40/hr", "$40-50/hr", "$50+/hr"];

const FindTeachers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [selectedMode, setSelectedMode] = useState("All Modes");
  const [selectedPrice, setSelectedPrice] = useState("Any Price");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Find Your Perfect <span className="text-gradient">Tutor</span>
            </h1>
            <p className="text-muted-foreground">
              Browse {mockTeachers.length.toLocaleString()}+ verified tutors ready to help you succeed
            </p>
          </div>

          {/* Search & Filters */}
          <div className="bg-card rounded-2xl p-4 md:p-6 card-shadow mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by subject, teacher name, or topic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12"
                />
              </div>
              <Button 
                variant="outline" 
                className="md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Filter Pills - Desktop */}
            <div className={`flex flex-wrap gap-3 mt-4 ${showFilters ? 'block' : 'hidden md:flex'}`}>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="h-10 px-4 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="h-10 px-4 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {modes.map((mode) => (
                  <option key={mode} value={mode}>{mode}</option>
                ))}
              </select>
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="h-10 px-4 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {priceRanges.map((price) => (
                  <option key={price} value={price}>{price}</option>
                ))}
              </select>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <X className="w-4 h-4 mr-1" />
                Clear All
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="grid lg:grid-cols-2 gap-6">
            {mockTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 group"
              >
                <div className="flex gap-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {teacher.initials}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg truncate">{teacher.name}</h3>
                          {teacher.verified && (
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                              <Check className="w-3 h-3 text-primary-foreground" />
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium">{teacher.subject}</p>
                      </div>
                      <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Heart className="w-5 h-5 text-muted-foreground" />
                      </button>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {teacher.specialties.slice(0, 3).map((specialty) => (
                        <span
                          key={specialty}
                          className="px-2 py-1 rounded-md bg-secondary text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {teacher.bio}
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-warning fill-current" />
                        <span className="font-semibold">{teacher.rating}</span>
                        <span className="text-muted-foreground">({teacher.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{teacher.experience} years exp</span>
                      </div>
                      {teacher.mode.includes("offline") && (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{teacher.distance} km</span>
                        </div>
                      )}
                    </div>

                    {/* Mode & Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {teacher.mode.includes("online") && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                            <Video className="w-3 h-3" />
                            Online
                          </span>
                        )}
                        {teacher.mode.includes("offline") && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                            <MapPin className="w-3 h-3" />
                            In-Person
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold">${teacher.hourlyRate}</span>
                        <span className="text-muted-foreground text-sm">/hr</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-border">
                  <Link to={`/teacher/${teacher.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      View Profile
                    </Button>
                  </Link>
                  <Button className="flex-1">
                    Book Trial
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Teachers
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FindTeachers;
