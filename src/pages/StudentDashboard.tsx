import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, Search, Bell, Settings, LogOut,
  Calendar, Clock, Video, MapPin, Star, MessageSquare,
  CreditCard, ChevronRight, Plus, User
} from "lucide-react";

const mockUpcomingClasses = [
  {
    id: 1,
    teacher: "Dr. Sarah Kim",
    subject: "Calculus",
    date: "Today",
    time: "4:00 PM - 5:00 PM",
    mode: "online",
    avatar: "SK",
  },
  {
    id: 2,
    teacher: "John Martinez",
    subject: "Physics",
    date: "Tomorrow",
    time: "3:00 PM - 4:00 PM",
    mode: "online",
    avatar: "JM",
  },
  {
    id: 3,
    teacher: "Emily Chen",
    subject: "Chemistry",
    date: "Wed, Jan 15",
    time: "5:00 PM - 6:00 PM",
    mode: "offline",
    avatar: "EC",
  },
];

const mockTeachers = [
  { id: 1, name: "Dr. Sarah Kim", subject: "Mathematics", rating: 4.9, sessionsCompleted: 24, avatar: "SK" },
  { id: 2, name: "John Martinez", subject: "Physics", rating: 4.8, sessionsCompleted: 12, avatar: "JM" },
];

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border p-6 hidden lg:block">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mb-10">
          <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">TutorConnect</span>
        </Link>

        {/* Navigation */}
        <nav className="space-y-2">
          {[
            { icon: Calendar, label: "Overview", id: "overview" },
            { icon: User, label: "My Teachers", id: "teachers" },
            { icon: Calendar, label: "Schedule", id: "schedule" },
            { icon: MessageSquare, label: "Messages", id: "messages" },
            { icon: CreditCard, label: "Billing", id: "billing" },
            { icon: Settings, label: "Settings", id: "settings" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeTab === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="absolute bottom-6 left-6 right-6">
          <Link to="/find-teachers">
            <Button className="w-full" variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Find New Teacher
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Top Bar */}
        <header className="bg-card border-b border-border px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, Alex! 👋</h1>
              <p className="text-muted-foreground">Here's what's happening with your learning</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-accent" />
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-semibold">
                AJ
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Quick Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Upcoming Classes</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">36</p>
                  <p className="text-sm text-muted-foreground">Hours Learned</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-muted-foreground">Active Teachers</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4.9</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Upcoming Classes */}
            <div className="lg:col-span-2 bg-card rounded-2xl p-6 card-shadow">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Upcoming Classes</h2>
                <Link to="/schedule" className="text-primary font-medium text-sm hover:underline">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {mockUpcomingClasses.map((cls) => (
                  <div
                    key={cls.id}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-semibold">
                      {cls.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold truncate">{cls.teacher}</h4>
                      <p className="text-sm text-muted-foreground">{cls.subject}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{cls.date}</p>
                      <p className="text-sm text-muted-foreground">{cls.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {cls.mode === "online" ? (
                        <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-medium flex items-center gap-1">
                          <Video className="w-3 h-3" />
                          Online
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          In-Person
                        </span>
                      )}
                      <Button size="sm">Join</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* My Teachers */}
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">My Teachers</h2>
                <Link to="/find-teachers" className="text-primary font-medium text-sm hover:underline">
                  Find More
                </Link>
              </div>
              <div className="space-y-4">
                {mockTeachers.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="p-4 rounded-xl border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-semibold">
                        {teacher.avatar}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{teacher.name}</h4>
                        <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-warning fill-current" />
                        <span className="font-medium">{teacher.rating}</span>
                      </div>
                      <span className="text-muted-foreground">
                        {teacher.sessionsCompleted} sessions
                      </span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Chat
                      </Button>
                      <Button size="sm" className="flex-1">
                        Book
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-6 bg-card rounded-2xl p-6 card-shadow">
            <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { action: "Completed session with Dr. Sarah Kim", subject: "Calculus", time: "2 hours ago" },
                { action: "Payment processed", subject: "$45.00 for Physics", time: "Yesterday" },
                { action: "Left a review", subject: "5 stars for John Martinez", time: "2 days ago" },
                { action: "Booked trial class", subject: "Chemistry with Emily Chen", time: "3 days ago" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.subject}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
