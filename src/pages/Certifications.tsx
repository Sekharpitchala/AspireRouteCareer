import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";
import { CertificationCard } from "@/components/CertificationCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const certifications = [
  { title: "Core Java Certification", provider: "SoloLearn", description: "Learn Java programming basics and earn a free certificate.", url: "https://www.sololearn.com/learn/java" },
  { title: "Python Certification", provider: "IBM SkillsBuild", description: "Master Python programming with IBM's free certification program.", url: "https://skillsbuild.org" },
  { title: "Artificial Intelligence", provider: "IBM SkillsBuild", description: "Learn AI fundamentals and get certified for free.", url: "https://skillsbuild.org" },
  { title: "C Programming", provider: "SoloLearn", description: "Complete C language certification for beginners.", url: "https://www.sololearn.com/learn/c-programming" },
  { title: "C++ Programming", provider: "SoloLearn", description: "Learn C++ programming and earn a certificate.", url: "https://www.sololearn.com/learn/cpp" },
  { title: "Computer Architecture", provider: "Saylor Academy", description: "Free computer architecture course with certificate.", url: "https://learn.saylor.org/course/view.php?id=65" },
  { title: "Computer Networks", provider: "Cisco NetAcad", description: "Industry-recognized networking certification from Cisco.", url: "https://www.netacad.com" },
  { title: "Data Structures & Algorithms", provider: "freeCodeCamp", description: "Master DSA with JavaScript and earn a certificate.", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures" },
  { title: "DBMS Certification", provider: "Microsoft Learn", description: "Database management certification from Microsoft.", url: "https://learn.microsoft.com/en-us/training" },
  { title: "Operating Systems", provider: "Saylor Academy", description: "Free OS course with certificate of completion.", url: "https://learn.saylor.org/course/view.php?id=68" },
  { title: "HR Interview Prep", provider: "LinkedIn Learning", description: "Prepare for HR interviews with LinkedIn's free resources.", url: "https://www.linkedin.com/interview-prep" },
  { title: "JavaScript Certification", provider: "freeCodeCamp", description: "Complete JavaScript course with free certificate.", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures" },
  { title: "Node.js Backend", provider: "freeCodeCamp", description: "Backend development with Node.js certification.", url: "https://www.freecodecamp.org/learn/back-end-development" },
  { title: "HTML & CSS", provider: "freeCodeCamp", description: "Responsive web design certification.", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design" },
  { title: "SQL Certification", provider: "SoloLearn", description: "Learn SQL and database queries with free certificate.", url: "https://www.sololearn.com/learn/sql" },
  { title: "OOPs Concepts", provider: "SoloLearn", description: "Object-oriented programming certification.", url: "https://www.sololearn.com" },
  { title: "Spring Framework", provider: "Simplilearn", description: "Free Spring Framework certification course.", url: "https://www.simplilearn.com/skillup-free-online-courses" },
  { title: "Spring Boot", provider: "Simplilearn", description: "Learn Spring Boot with free certificate.", url: "https://www.simplilearn.com/skillup-free-online-courses" },
  { title: "Hibernate", provider: "Simplilearn", description: "ORM with Hibernate certification course.", url: "https://www.simplilearn.com/skillup-free-online-courses" },
  { title: "Django Framework", provider: "freeCodeCamp", description: "Python Django web development certification.", url: "https://www.freecodecamp.org" },
  { title: "Flask Framework", provider: "freeCodeCamp", description: "Python Flask web development course.", url: "https://www.freecodecamp.org" },
  { title: "React.js", provider: "freeCodeCamp", description: "Frontend development with React certification.", url: "https://www.freecodecamp.org/learn/front-end-development-libraries" },
];

export default function Certifications() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCertifications = certifications.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingSocialButtons />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 animate-pulse-slow">
              Boost Your Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">
              Free Certifications
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-delayed">
              Earn industry-recognized certifications at no cost. 
              Stand out to employers and validate your skills.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search certifications by title, provider..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg rounded-xl border-2 border-border focus:border-primary transition-colors"
              />
            </div>
            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Found {filteredCertifications.length} certification{filteredCertifications.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCertifications.map((cert, index) => (
              <div key={cert.title} className="animate-fade-up hover-lift" style={{ animationDelay: `${(index % 8) * 50}ms` }}>
                <CertificationCard
                  title={cert.title}
                  provider={cert.provider}
                  description={cert.description}
                  url={cert.url}
                />
              </div>
            ))}
          </div>

          {filteredCertifications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No certifications found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
