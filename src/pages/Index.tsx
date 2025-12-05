import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";
import { FeatureCard } from "@/components/FeatureCard";
import { TeamCard } from "@/components/TeamCard";
import { ContactForm } from "@/components/ContactForm";
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
  Target,
  Mail,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import heroBackground from "@/assets/hero-background.png";
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
  const [currentFeature, setCurrentFeature] = useState(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll features every 10 seconds
  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 10000);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, []);

  const goToFeature = (index: number) => {
    setCurrentFeature(index);
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 10000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingSocialButtons />
      
      {/* Hero Section with Full Background */}
      <section 
        className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up backdrop-blur-sm">
              <GraduationCap className="w-4 h-4" />
              Free Learning Platform for Students & Freshers
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up" style={{ animationDelay: "100ms" }}>
              Build Your Tech Career with{" "}
              <span className="text-primary">AspireRouteCareers</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-delayed" style={{ animationDelay: "200ms" }}>
              Your one-stop destination for free courses, study materials, certifications, 
              and AI-powered career guidance. Start your journey to becoming a job-ready developer.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <Button variant="hero" size="xl" asChild className="hover-lift">
                <Link to="/playlists">
                  <Play className="w-5 h-5" />
                  Explore Courses
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="hover-lift bg-background/50 backdrop-blur-sm">
                <Link to="/ai-coach">
                  Meet AI Coach
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center animate-fade-up hover-lift bg-card/50 backdrop-blur-sm rounded-xl p-4" style={{ animationDelay: `${500 + index * 100}ms` }}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Auto-Scroll */}
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

          {/* Mobile/Tablet Carousel View */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentFeature * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={feature.title} className="w-full flex-shrink-0 px-4">
                    <FeatureCard
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      delay={0}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFeature 
                      ? 'bg-primary w-8' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
            
            {/* Arrow Navigation */}
            <button
              onClick={() => goToFeature((currentFeature - 1 + features.length) % features.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-card/80 rounded-full shadow-lg hover:bg-card"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={() => goToFeature((currentFeature + 1) % features.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-card/80 rounded-full shadow-lg hover:bg-card"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
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
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-semibold mb-4 animate-pulse-slow border border-primary/20">
              ✨ Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">
              Meet the Creators
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-delayed">
              The passionate and proficient developers behind AspireRouteCareers, committed to empowering students with the best free learning resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-semibold mb-4 animate-pulse-slow border border-primary/20">
                💬 Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">
                Contact Us
              </h2>
              <p className="text-lg text-muted-foreground animate-fade-in-delayed">
                Have questions, suggestions, or feedback? We'd love to hear from you!
              </p>
            </div>

            <div className="bg-card rounded-3xl shadow-2xl p-8 md:p-10 border border-border/50 animate-fade-up backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Mail className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Send us a message</h3>
                  <p className="text-muted-foreground">aspireroutecareers@gmail.com</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
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
