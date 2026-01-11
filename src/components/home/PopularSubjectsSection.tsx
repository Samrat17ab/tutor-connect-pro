import { Link } from "react-router-dom";
import { Calculator, FlaskConical, BookOpen, Globe, Code, Music, Palette, Dumbbell, Brain, Languages } from "lucide-react";

const subjects = [
  { icon: Calculator, name: "Mathematics", teachers: 2340, color: "from-blue-500 to-blue-600" },
  { icon: FlaskConical, name: "Science", teachers: 1856, color: "from-emerald-500 to-emerald-600" },
  { icon: BookOpen, name: "English", teachers: 1654, color: "from-amber-500 to-amber-600" },
  { icon: Globe, name: "Geography", teachers: 892, color: "from-cyan-500 to-cyan-600" },
  { icon: Code, name: "Coding", teachers: 1245, color: "from-violet-500 to-violet-600" },
  { icon: Music, name: "Music", teachers: 678, color: "from-pink-500 to-pink-600" },
  { icon: Palette, name: "Art & Design", teachers: 534, color: "from-rose-500 to-rose-600" },
  { icon: Languages, name: "Languages", teachers: 1123, color: "from-indigo-500 to-indigo-600" },
  { icon: Brain, name: "Psychology", teachers: 445, color: "from-purple-500 to-purple-600" },
  { icon: Dumbbell, name: "Sports", teachers: 367, color: "from-orange-500 to-orange-600" },
];

const PopularSubjectsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Subjects</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Explore Popular <span className="text-gradient">Subjects</span>
            </h2>
          </div>
          <Link 
            to="/find-teachers" 
            className="text-primary font-semibold hover:underline underline-offset-4"
          >
            View All Subjects →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <Link
                key={index}
                to={`/find-teachers?subject=${subject.name.toLowerCase()}`}
                className="group bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{subject.name}</h3>
                <p className="text-sm text-muted-foreground">{subject.teachers.toLocaleString()} tutors</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularSubjectsSection;
