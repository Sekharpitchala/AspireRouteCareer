import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MaterialCard } from "@/components/MaterialCard";
import { Search } from "lucide-react";

const materials = [
  { title: "C Programming Notes", description: "Complete C language fundamentals, pointers, memory management, and file handling." },
  { title: "C++ Complete Notes", description: "OOPs concepts, STL, templates, and advanced C++ programming techniques." },
  { title: "Java Notes", description: "Core Java, OOPs, Collections, Exception Handling, Multithreading, and more." },
  { title: "Python Notes", description: "Python basics to advanced - data structures, file handling, and libraries." },
  { title: "SQL & PL/SQL Notes", description: "Database queries, joins, stored procedures, triggers, and optimization." },
  { title: "Computer Networks Notes", description: "OSI model, TCP/IP, protocols, network security, and architecture." },
  { title: "Operating Systems Notes", description: "Process management, memory, file systems, and scheduling algorithms." },
  { title: "DBMS Notes", description: "Database design, normalization, transactions, and SQL fundamentals." },
  { title: "Data Structures Notes", description: "Arrays, linked lists, trees, graphs, and algorithm complexity." },
  { title: "HR Interview Questions", description: "Common HR questions with sample answers and tips for freshers." },
  { title: "Technical Interview Guide", description: "Coding interview prep, system design basics, and problem-solving strategies." },
  { title: "Resume Building Tips", description: "How to create an ATS-friendly resume that gets noticed by recruiters." },
];

export default function Materials() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMaterials = materials.filter((material) =>
    material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    material.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Free Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Study Materials
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive notes and study materials for all major subjects. 
              Download for free and prepare for exams and interviews.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search materials (e.g., Python Notes, DBMS...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material, index) => (
              <div key={material.title} className="animate-fade-up" style={{ animationDelay: `${(index % 6) * 100}ms` }}>
                <MaterialCard
                  title={material.title}
                  description={material.description}
                />
              </div>
            ))}
          </div>

          {filteredMaterials.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No materials found matching your search.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
