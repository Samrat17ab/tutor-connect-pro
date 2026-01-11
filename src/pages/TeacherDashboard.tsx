import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, Bell, Settings,
  Calendar, Clock, Video, MapPin, Star, MessageSquare,
  CreditCard, Users, TrendingUp, CheckCircle2, 
  DollarSign, BarChart3
} from "lucide-react";

const mockStudents = [
  { id: 1, name: "Alex Johnson", subject: "Calculus", nextClass: "Today, 4:00 PM", sessionsCompleted: 12, avatar: "AJ" },
  { id: 2, name: "Maria Garcia", subject: "Algebra", nextClass: "Tomorrow, 3:00 PM", sessionsCompleted: 8, avatar: "MG" },
  { id: 3, name: "James Wilson", subject: "Statistics", nextClass: "Wed, 5:00 PM", sessionsCompleted: 5, avatar: "JW" },
];

const mockEarnings = {
  thisMonth: 2340,
  lastMonth: 1890,
  pending: 450,
  growth: 23.8,
};

const TeacherDashboard = () => {
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
            { icon: BarChart3, label: "Overview", id: "overview" },
            { icon: Users, label: "Students", id: "students" },
            { icon: Calendar, label: "Schedule", id: "schedule" },
            { icon: MessageSquare, label: "Messages", id: "messages" },
            { icon: DollarSign, label: "Earnings", id: "earnings" },
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

        {/* Profile Status */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="p-4 rounded-xl bg-success/10 border border-success/20">
            <div className="flex items-center gap-2 text-success mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">Profile Verified</span>
            </div>
            <p className="text-xs text-muted-foreground">Your profile is visible to students</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Top Bar */}
        <header className="bg-card border-b border-border px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
              <p className="text-muted-foreground">Manage your students and earnings</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-accent" />
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-semibold">
                SK
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Earnings Overview */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">This Month</span>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-3xl font-bold">${mockEarnings.thisMonth}</p>
              <div className="flex items-center gap-1 mt-2 text-sm text-success">
                <TrendingUp className="w-4 h-4" />
                <span>+{mockEarnings.growth}% from last month</span>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">Pending Payout</span>
                <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-warning" />
                </div>
              </div>
              <p className="text-3xl font-bold">${mockEarnings.pending}</p>
              <p className="text-sm text-muted-foreground mt-2">Next payout: Jan 15</p>
            </div>
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">Active Students</span>
                <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-success" />
                </div>
              </div>
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm text-muted-foreground mt-2">+3 trial requests</p>
            </div>
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">This Week</span>
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
              </div>
              <p className="text-3xl font-bold">8</p>
              <p className="text-sm text-muted-foreground mt-2">Classes scheduled</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Today's Schedule */}
            <div className="lg:col-span-2 bg-card rounded-2xl p-6 card-shadow">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Today's Schedule</h2>
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Calendar
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { time: "4:00 PM - 5:00 PM", student: "Alex Johnson", subject: "Calculus", mode: "online", status: "upcoming" },
                  { time: "5:30 PM - 6:30 PM", student: "Maria Garcia", subject: "Algebra", mode: "online", status: "upcoming" },
                  { time: "7:00 PM - 8:00 PM", student: "James Wilson", subject: "Statistics", mode: "offline", status: "upcoming" },
                ].map((session, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50"
                  >
                    <div className="text-center min-w-[100px]">
                      <p className="font-semibold">{session.time.split(" - ")[0]}</p>
                      <p className="text-xs text-muted-foreground">{session.time.split(" - ")[1]}</p>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div className="flex-1">
                      <h4 className="font-semibold">{session.student}</h4>
                      <p className="text-sm text-muted-foreground">{session.subject}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {session.mode === "online" ? (
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
                      <Button size="sm">Start</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Requests */}
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Trial Requests</h2>
                <span className="px-2 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                  3 new
                </span>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Sophie Lee", subject: "Algebra", date: "Requested today", avatar: "SL" },
                  { name: "David Kim", subject: "Calculus", date: "Requested yesterday", avatar: "DK" },
                  { name: "Emma Brown", subject: "Statistics", date: "Requested 2 days ago", avatar: "EB" },
                ].map((request, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-border"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-accent-foreground font-semibold text-sm">
                        {request.avatar}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{request.name}</h4>
                        <p className="text-xs text-muted-foreground">{request.date}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Interested in: {request.subject}
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Decline
                      </Button>
                      <Button size="sm" className="flex-1">
                        Accept
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Students List */}
          <div className="mt-6 bg-card rounded-2xl p-6 card-shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Your Students</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Student</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Subject</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Next Class</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Sessions</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockStudents.map((student) => (
                    <tr key={student.id} className="border-b border-border hover:bg-secondary/30">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-semibold text-sm">
                            {student.avatar}
                          </div>
                          <span className="font-medium">{student.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">{student.subject}</td>
                      <td className="py-4 px-4">{student.nextClass}</td>
                      <td className="py-4 px-4">{student.sessionsCompleted} completed</td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Calendar className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;
