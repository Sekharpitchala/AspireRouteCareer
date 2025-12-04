import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";
import { FeatureCard } from "@/components/FeatureCard";
import { TeamCard } from "@/components/TeamCard";
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Bot, 
  Users, 
  Rocket,
  ArrowRight,
  Play,
  FileText,
  Target
} from "lucide-react";
import heroImage from "@/assets/hero-study.jpg";
import teamAbhinay from "@/assets/team-abhinay.jpg";
import teamPraveen from "@/assets/team-praveen.jpg";
import teamSekhar from "@/assets/team-sekhar.jpg";

const features = [
  { icon: BookOpen, title: "Curated Playlists", description: "Structured learning paths covering Java, Python, DSA, React, Django, and more. Learn from the best free resources." },
  { icon: FileText, title: "Study Materials", description: "Free downloadable notes for C, C++, Java, Python, SQL, OS, CN, and interview preparation." },
  { icon: Award, title: "Free Certifications", description: "Discover platforms offering free certificates to boost your resume and stand out to employers." },
  { icon: Bot, title: "AI Coach", description: "Get personalized study plans, skill gap analysis, mock interviews, and course recommendations." },
  { icon: Users, title: "Community", description: "Join our WhatsApp and Instagram community. Connect with fellow learners and get support." },
  { icon: Target, title: "Career Ready", description: "Everything you need to go from student to job-ready professional in tech." },
];

const stats = [
  { value: "50+", label: "Courses" },
  { value: "100+", label: "Materials" },
  { value: "25+", label: "Certifications" },
  { value: "10K+", label: "Students" },
];

const teamMembers = [
  {
    name: "Abhinay. K",
    role: "Developer",
    email: "kabhinay9999@gmail.com",
    image: teamAbhinay,
  },
  {
    name: "S. Praveen",
    role: "AI Developer",
    email: "Ssspraveen07@gmail.com",
    image: teamPraveen,
    instagram: "https://www.instagram.com/ssspraveen__?igsh=MTR4bnZkdnZ5bnBieA=="
  },
  {
    name: "P. Sekhar",
    role: "Developer",
    email: "sekharpitchala2004@gmail.com",
    image: teamSekhar,
    instagram: "https://www.instagram.com/mr__sekhar___p?igsh=eWsyNnd6Mm9jYWVp"
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingSocialButtons />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
                <GraduationCap className="w-4 h-4" />
                Free Learning Platform for Students & Freshers
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up" style={{ animationDelay: "100ms" }}>
                Build Your Tech Career with{" "}
                <span className="text-primary">AspireRouteCareers</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in-delayed" style={{ animationDelay: "200ms" }}>
                Your one-stop destination for free courses, study materials, certifications, 
                and AI-powered career guidance. Start your journey to becoming a job-ready developer.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
                <Button variant="hero" size="xl" asChild className="hover-lift">
                  <Link to="/playlists">
                    <Play className="w-5 h-5" />
                    Explore Courses
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild className="hover-lift">
                  <Link to="/ai-coach">
                    Meet AI Coach
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-up" style={{ animationDelay: "400ms" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Students learning together" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-slow" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto lg:mx-0">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-up hover-lift" style={{ animationDelay: `${500 + index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-pulse-slow">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-up">
              Everything You Need to Succeed
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-delayed">
              From structured courses to personalized AI guidance, we've got everything 
              covered to help you land your dream tech job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-pulse-slow">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-up">
              Meet the Creators
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-delayed">
              The passionate developers behind AspireRouteCareers, dedicated to helping students succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto">
          <div className="gradient-hero rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
            
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
                <Rocket className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 animate-slide-up">
                Ready to Start Your Journey?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 animate-fade-in-delayed">
                Join thousands of students already learning with AspireRouteCareers. 
                It's completely free!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero-outline" size="xl" asChild className="hover-lift">
                  <Link to="/playlists">
                    Browse Playlists
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild className="hover-lift">
                  <Link to="/materials">
                    Get Study Materials
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
