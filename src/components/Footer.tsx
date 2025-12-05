import { Link } from "react-router-dom";
import { GraduationCap, Instagram, MessageCircle, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary/95 to-primary-dark/95 text-primary-foreground">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center shadow-soft">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-primary-foreground">
                AspireRoute<span className="text-accent">Careers</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm max-w-sm mb-4">
              Empowering students and freshers to build successful careers in tech. 
              Free courses, materials, certifications, and AI-powered guidance.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/aspireroutecareers?igsh=MWx0eW52cWJrbzFpZw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://chat.whatsapp.com/JkpL3D6RqdD3oLUHtQDv9A?mode=hqrt3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:aspireroutecareers@gmail.com"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Playlists", "Materials", "Certifications", "AI Coach"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {["DSA Practice", "Interview Prep", "Resume Tips", "Career Guide"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} AspireRouteCareers. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/70 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for students
          </p>
        </div>
      </div>
    </footer>
  );
}
