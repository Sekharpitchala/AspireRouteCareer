import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";
import { MaterialCard } from "@/components/MaterialCard";
import { Search } from "lucide-react";

const materials = [
  { title: "Artificial Intelligence Notes", description: "Complete AI fundamentals, machine learning concepts, and neural networks.", downloadUrl: "https://drive.google.com/drive/folders/1QeHFRG6cU6PWnxgIg8N76KZ1CKBU8ejJ?usp=drive_link" },
  { title: "Java Notes", description: "Core Java, OOPs, Collections, Exception Handling, Multithreading, and more.", downloadUrl: "https://drive.google.com/drive/folders/11P2q7hungW3EBGBbf587Y0Q8pYwatDFk?usp=drive_link" },
  { title: "C Programming Notes", description: "Complete C language fundamentals, pointers, memory management, and file handling.", downloadUrl: "https://drive.google.com/drive/folders/17p7UJ-jQTzYDl9E9pygOAxOkhbZ2_G2G?usp=drive_link" },
  { title: "C++ Complete Notes", description: "OOPs concepts, STL, templates, and advanced C++ programming techniques.", downloadUrl: "https://drive.google.com/drive/folders/1g4eEbhJSlRNnLvU60KvhdbJvlShXPeoy?usp=drive_link" },
  { title: "Computer Architecture Notes", description: "CPU design, memory hierarchy, pipelining, and system architecture.", downloadUrl: "https://drive.google.com/drive/folders/17ieX5k44TlA_j5NHWdKesDhOcvM1kMdM?usp=drive_link" },
  { title: "Computer Networks Notes", description: "OSI model, TCP/IP, protocols, network security, and architecture.", downloadUrl: "https://drive.google.com/drive/folders/1QeHFRG6cU6PWnxgIg8N76KZ1CKBU8ejJ?usp=drive_link" },
  { title: "Python Notes", description: "Python basics to advanced - data structures, file handling, and libraries.", downloadUrl: "#" },
  { title: "SQL & PL/SQL Notes", description: "Database queries, joins, stored procedures, triggers, and optimization.", downloadUrl: "#" },
  { title: "Operating Systems Notes", description: "Process management, memory, file systems, and scheduling algorithms.", downloadUrl: "#" },
  { title: "DBMS Notes", description: "Database design, normalization, transactions, and SQL fundamentals.", downloadUrl: "#" },
  { title: "Data Structures Notes", description: "Arrays, linked lists, trees, graphs, and algorithm complexity.", downloadUrl: "#" },
  { title: "HR Interview Questions", description: "Common HR questions with sample answers and tips for freshers.", downloadUrl: "#" },
  { title: "Technical Interview Guide", description: "Coding interview prep, system design basics, and problem-solving strategies.", downloadUrl: "#" },
  { title: "Resume Building Tips", description: "How to create an ATS-friendly resume that gets noticed by recruiters.", downloadUrl: "#" },
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
      <FloatingSocialButtons />
      
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
