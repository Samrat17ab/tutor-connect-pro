import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    platform: [
      { label: "Find Teachers", href: "/find-teachers" },
      { label: "Become a Teacher", href: "/become-teacher" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
    ],
    subjects: [
      { label: "Mathematics", href: "/find-teachers?subject=math" },
      { label: "Science", href: "/find-teachers?subject=science" },
      { label: "English", href: "/find-teachers?subject=english" },
      { label: "Languages", href: "/find-teachers?subject=languages" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Safety", href: "/safety" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">TutorConnect</span>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Connecting students with verified tutors for personalized learning experiences. Online and offline, we've got you covered.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects Links */}
          <div>
            <h4 className="font-semibold mb-4">Popular Subjects</h4>
            <ul className="space-y-3">
              {footerLinks.subjects.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <a href="mailto:support@tutorconnect.com" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@tutorconnect.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} TutorConnect. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-background/50 hover:text-background text-sm transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-background/50 hover:text-background text-sm transition-colors">
              Privacy
            </Link>
            <Link to="/cookies" className="text-background/50 hover:text-background text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
