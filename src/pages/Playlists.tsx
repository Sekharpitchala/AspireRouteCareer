import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CourseCard } from "@/components/CourseCard";

const mainCourses = [
  { title: "Complete Java Programming", rating: 4.8, category: "Java" },
  { title: "Python Masterclass", rating: 4.7, category: "Python" },
  { title: "C Programming Fundamentals", rating: 4.6, category: "C" },
  { title: "C++ Complete Course", rating: 4.5, category: "C++" },
  { title: "SQL & Database Design", rating: 4.7, category: "SQL" },
  { title: "Web Development Basics", rating: 4.6, category: "Web" },
];

const dsaCourses = [
  { title: "Java DSA Complete Course", rating: 4.9, category: "DSA" },
  { title: "Python DSA Mastery", rating: 4.8, category: "DSA" },
  { title: "Competitive Programming", rating: 4.7, category: "DSA" },
  { title: "LeetCode Problem Solving", rating: 4.8, category: "DSA" },
];

const frameworkCourses = [
  { title: "Spring Framework", rating: 4.7, category: "Framework" },
  { title: "Spring Boot Complete", rating: 4.8, category: "Framework" },
  { title: "Hibernate ORM", rating: 4.5, category: "Framework" },
  { title: "React.js Full Course", rating: 4.9, category: "Framework" },
  { title: "Django Web Development", rating: 4.6, category: "Framework" },
  { title: "Flask Python Framework", rating: 4.5, category: "Framework" },
];

export default function Playlists() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Learning Paths
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Course Playlists
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Curated learning paths to take you from beginner to job-ready. 
              All courses are free and carefully selected for quality.
            </p>
          </div>

          {/* Main Courses */}
          <section className="mb-16">
            <SectionHeader
              badge="Foundation"
              title="Main Courses"
              description="Start here if you're new to programming. Build a strong foundation."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainCourses.map((course, index) => (
                <div key={course.title} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CourseCard {...course} />
                </div>
              ))}
            </div>
          </section>

          {/* DSA Courses */}
          <section className="mb-16">
            <SectionHeader
              badge="Interview Prep"
              title="DSA Section"
              description="Master Data Structures & Algorithms to crack tech interviews."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dsaCourses.map((course, index) => (
                <div key={course.title} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CourseCard {...course} />
                </div>
              ))}
            </div>
          </section>

          {/* Framework Courses */}
          <section>
            <SectionHeader
              badge="Advanced"
              title="Frameworks"
              description="Learn industry-standard frameworks used by top companies."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frameworkCourses.map((course, index) => (
                <div key={course.title} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CourseCard {...course} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
