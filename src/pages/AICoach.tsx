import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";
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
  Send,
  CheckCircle,
  Loader2
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const features = [
  { icon: Target, title: "Personalized Study Plan", description: "Get a custom learning roadmap based on your goals, current skills, and available time." },
  { icon: Brain, title: "Skill Gap Analysis", description: "Identify what skills you need to learn and which areas need improvement." },
  { icon: MessageSquare, title: "Mock Interview Questions", description: "Practice with AI-generated interview questions tailored to your target role." },
  { icon: Calendar, title: "Weekly Training Tasks", description: "Receive structured weekly assignments to keep you on track and consistent." },
  { icon: BookOpen, title: "Course Recommendations", description: "Get personalized course suggestions based on your learning progress." },
  { icon: Sparkles, title: "Progress Tracking", description: "Monitor your learning journey and celebrate milestones." },
];

const upcomingFeatures = [
  "Certification tracker to manage your earned certificates",
  "Community challenges to compete with fellow learners",
  "Leaderboards to showcase top performers",
  "Mentor matching to connect with industry professionals",
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

const GEMINI_API_KEY = "AIzaSyCN3rJ-F7Dt_HMtPEtgsxWUZ_ypb94ZqSQ";

export default function AICoach() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm your AI Career Coach. I can help you with:\n\n• Creating personalized study plans\n• Skill gap analysis for your target role\n• Mock interview questions\n• Course recommendations\n• Career guidance\n\nWhat would you like help with today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are an AI Career Coach for AspireRouteCareers, an educational platform for students and freshers. You help with:
- Creating personalized study plans for tech careers
- Analyzing skill gaps and recommending what to learn
- Providing mock interview questions (HR and technical)
- Recommending courses from our playlists (Java, Python, C, C++, DSA, React, Django, Spring Boot, etc.)
- Career guidance for freshers entering the tech industry

Be friendly, encouraging, and specific in your advice. Keep responses concise but helpful.

User message: ${userMessage}`
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1024,
            }
          })
        }
      );

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, but I couldn't generate a response. Please try again.";
      
      setMessages(prev => [...prev, { role: "assistant", content: aiResponse }]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I encountered an error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingSocialButtons />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto">
          {!showChat ? (
            <>
              {/* Hero */}
              <div className="text-center mb-16 animate-fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-pulse-slow">
                  <Bot className="w-4 h-4" />
                  AI-Powered Learning
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">
                  Your Personal AI Coach
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-delayed">
                  Like having a personal mentor available 24/7. Get customized guidance, 
                  practice interviews, and stay on track with your career goals.
                </p>
                <Button variant="hero" size="xl" onClick={() => setShowChat(true)} className="animate-bounce-slow">
                  <Bot className="w-5 h-5" />
                  Start Chatting with AI Coach
                </Button>
              </div>

              {/* Features Grid */}
              <section className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">What AI Coach Can Do</h2>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    Powered by advanced AI to help you become job-ready faster.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <div
                      key={feature.title}
                      className="bg-card rounded-2xl border border-border shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300 p-6 animate-fade-up"
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
                        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift">
                          <Trophy className="w-10 h-10 text-primary-foreground mx-auto mb-2" />
                          <span className="text-primary-foreground font-medium">Leaderboards</span>
                        </div>
                        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift">
                          <Users className="w-10 h-10 text-primary-foreground mx-auto mb-2" />
                          <span className="text-primary-foreground font-medium">Community</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            /* Chat Interface */
            <div className="max-w-4xl mx-auto animate-fade-up">
              <div className="bg-card rounded-2xl border border-border shadow-hover overflow-hidden">
                {/* Chat Header */}
                <div className="gradient-hero p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-foreground">AI Career Coach</h3>
                      <p className="text-xs text-primary-foreground/70">Powered by Google Gemini</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowChat(false)} className="text-primary-foreground hover:bg-primary-foreground/20">
                    Back to Info
                  </Button>
                </div>

                {/* Messages */}
                <ScrollArea className="h-[500px] p-4" ref={scrollRef}>
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-up`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                            message.role === "user"
                              ? "bg-primary text-primary-foreground rounded-br-md"
                              : "bg-secondary text-secondary-foreground rounded-bl-md"
                          }`}
                        >
                          <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3">
                          <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                {/* Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about study plans, interviews, courses..."
                      className="flex-1 h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      disabled={isLoading}
                    />
                    <Button onClick={sendMessage} disabled={isLoading || !input.trim()} className="h-12 px-6">
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
