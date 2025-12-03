import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";
import { SectionHeader } from "@/components/SectionHeader";
import { CourseCard } from "@/components/CourseCard";

const mainCourses = [
  { title: "Core Java Complete Course", rating: 4.8, category: "Java", url: "https://youtube.com/playlist?list=PLz8gl4BEGkEGYXNZrIRHJUSoxS_FPBrDy&si=LMz0SXdnoGZH9_fZ" },
  { title: "Python Masterclass", rating: 4.7, category: "Python", url: "https://www.youtube.com/watch?v=eWRfhZUzrAc" },
  { title: "C Programming Fundamentals", rating: 4.6, category: "C", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" },
  { title: "C++ Complete Course", rating: 4.5, category: "C++", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" },
  { title: "JavaScript Full Course", rating: 4.7, category: "JavaScript", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg" },
  { title: "HTML Complete Tutorial", rating: 4.6, category: "HTML", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg" },
  { title: "CSS Full Course", rating: 4.5, category: "CSS", url: "https://www.youtube.com/watch?v=OXGznpKZ_sA" },
  { title: "Node.js Complete Guide", rating: 4.7, category: "Node.js", url: "https://www.youtube.com/watch?v=Oe421EPjeBE" },
  { title: "SQL Complete Course", rating: 4.8, category: "SQL", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
  { title: "PL/SQL Oracle Tutorial", rating: 4.6, category: "PL/SQL", url: "https://www.youtube.com/playlist?list=PLWPirh4EWFpHkZQvNLVTHXZyqSeX5TR1h" },
  { title: "Artificial Intelligence", rating: 4.9, category: "AI", url: "https://www.youtube.com/watch?v=JMUxmLyrhSk" },
  { title: "Java OOPs Concepts", rating: 4.7, category: "OOPs", url: "https://www.youtube.com/watch?v=eIrMbAQSU34" },
];

const csCoreCourses = [
  { title: "Computer Architecture", rating: 4.6, category: "Core CS", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p" },
  { title: "Computer Networks", rating: 4.7, category: "Core CS", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdB1H" },
  { title: "Data Structures", rating: 4.8, category: "Core CS", url: "https://www.youtube.com/watch?v=BBpAmxU_NQo" },
  { title: "DBMS Complete Course", rating: 4.7, category: "Core CS", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiH5t2Dk3bGU2E9zrfNh6tIW" },
  { title: "Operating Systems", rating: 4.6, category: "Core CS", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEOMtJoUPIaQvD3-2xE-vL5" },
  { title: "HR Interview Q&A", rating: 4.5, category: "Interview", url: "https://www.youtube.com/playlist?list=PLk7ptZcI9vmg0pZQqxfM6cJxD4x3E1ZlV" },
];

const dsaCourses = [
  { title: "DSA in Java - Complete Course", rating: 4.9, category: "DSA", url: "https://www.youtube.com/watch?v=xWLxhF3b5P8" },
  { title: "DSA in Python - Mastery", rating: 4.8, category: "DSA", url: "https://www.youtube.com/watch?v=pkYVOmU3MgA" },
];

const frameworkCourses = [
  { title: "Spring Boot Complete", rating: 4.8, category: "Framework", url: "https://www.youtube.com/playlist?list=PLh6Yk2rpZu2KwknOHC--vsE5K3XeSCnts" },
  { title: "Hibernate ORM", rating: 4.5, category: "Framework", url: "https://www.youtube.com/playlist?list=PL4AFF701184976B25" },
  { title: "React.js Full Course", rating: 4.9, category: "Framework", url: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
  { title: "Django Web Development", rating: 4.6, category: "Framework", url: "https://www.youtube.com/watch?v=UmljXZIypDc" },
  { title: "Flask Python Framework", rating: 4.5, category: "Framework", url: "https://www.youtube.com/watch?v=Z1RJmh_OqeA" },
];

export default function Playlists() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingSocialButtons />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-pulse-slow">
              Learning Paths
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">
              Course Playlists
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-delayed">
              Curated learning paths to take you from beginner to job-ready. 
              All courses are free and carefully selected for quality.
            </p>
          </div>

          {/* Main Courses */}
          <section className="mb-16 scroll-mt-24" id="main-courses">
            <SectionHeader
              badge="Foundation"
              title="Programming Languages"
              description="Start here if you're new to programming. Build a strong foundation."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mainCourses.map((course, index) => (
                <div key={course.title} className="animate-fade-up hover-lift" style={{ animationDelay: `${index * 50}ms` }}>
                  <CourseCard {...course} />
                </div>
              ))}
            </div>
          </section>

          {/* CS Core Courses */}
          <section className="mb-16 scroll-mt-24" id="cs-core">
            <SectionHeader
              badge="Core CS"
              title="Computer Science Fundamentals"
              description="Master the core subjects every CS student needs to know."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {csCoreCourses.map((course, index) => (
                <div key={course.title} className="animate-fade-up hover-lift" style={{ animationDelay: `${index * 50}ms` }}>
                  <CourseCard {...course} />
                </div>
              ))}
            </div>
          </section>

          {/* DSA Courses */}
          <section className="mb-16 scroll-mt-24" id="dsa">
            <SectionHeader
              badge="Interview Prep"
              title="DSA Section"
              description="Master Data Structures & Algorithms to crack tech interviews."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              {dsaCourses.map((course, index) => (
                <div key={course.title} className="animate-fade-up hover-lift" style={{ animationDelay: `${index * 100}ms` }}>
                  <CourseCard {...course} />
                </div>
              ))}
            </div>
          </section>

          {/* Framework Courses */}
          <section className="scroll-mt-24" id="frameworks">
            <SectionHeader
              badge="Advanced"
              title="Frameworks"
              description="Learn industry-standard frameworks used by top companies."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frameworkCourses.map((course, index) => (
                <div key={course.title} className="animate-fade-up hover-lift" style={{ animationDelay: `${index * 50}ms` }}>
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
