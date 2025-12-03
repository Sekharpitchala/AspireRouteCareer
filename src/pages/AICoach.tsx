import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Target, 
  Brain, 
  MessageSquare, 
  Calendar, 
  BookOpen,
  Trophy,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Personalized Study Plan",
    description: "Get a custom learning roadmap based on your goals, current skills, and available time.",
  },
  {
    icon: Brain,
    title: "Skill Gap Analysis",
    description: "Identify what skills you need to learn and which areas need improvement.",
  },
  {
    icon: MessageSquare,
    title: "Mock Interview Questions",
    description: "Practice with AI-generated interview questions tailored to your target role.",
  },
  {
    icon: Calendar,
    title: "Weekly Training Tasks",
    description: "Receive structured weekly assignments to keep you on track and consistent.",
  },
  {
    icon: BookOpen,
    title: "Course Recommendations",
    description: "Get personalized course suggestions based on your learning progress.",
  },
  {
    icon: Sparkles,
    title: "Progress Tracking",
    description: "Monitor your learning journey and celebrate milestones.",
  },
];

const upcomingFeatures = [
  "Certification tracker to manage your earned certificates",
  "Community challenges to compete with fellow learners",
  "Leaderboards to showcase top performers",
  "Mentor matching to connect with industry professionals",
];

export default function AICoach() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Bot className="w-4 h-4" />
              AI-Powered Learning
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Your Personal AI Coach
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Like having a personal mentor available 24/7. Get customized guidance, 
              practice interviews, and stay on track with your career goals.
            </p>
            <Button variant="hero" size="xl">
              <Bot className="w-5 h-5" />
              Start Chatting with AI Coach
            </Button>
          </div>

          {/* Features Grid */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What AI Coach Can Do
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Powered by advanced AI to help you become job-ready faster.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-card rounded-2xl border border-border shadow-soft hover:shadow-hover transition-all duration-300 p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Coming Soon Section */}
          <section className="mb-16">
            <div className="gradient-hero rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
              
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4">
                    Coming Soon
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                    Exciting Features on the Way
                  </h2>
                  <p className="text-primary-foreground/80 mb-6">
                    We're constantly improving AI Coach to help you achieve your career goals faster.
                  </p>
                  
                  <ul className="space-y-3">
                    {upcomingFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-primary-foreground/90">
                        <CheckCircle className="w-5 h-5 text-primary-foreground shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <Trophy className="w-10 h-10 text-primary-foreground mx-auto mb-2" />
                      <span className="text-primary-foreground font-medium">Leaderboards</span>
                    </div>
                    <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <Users className="w-10 h-10 text-primary-foreground mx-auto mb-2" />
                      <span className="text-primary-foreground font-medium">Community</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
