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
  { title: "Computer Networks Notes", description: "OSI model, TCP/IP, protocols, network security, and architecture.", downloadUrl: "https://drive.google.com/drive/folders/1ImG4mHU3RIB6a14TyqCYwZ6Fw6uziiRz?usp=drive_link" },
  { title: "Data Structures Notes", description: "Arrays, linked lists, trees, graphs, and algorithm complexity.", downloadUrl: "https://drive.google.com/drive/folders/1Lh4cVts2XanLy0LdCUpXuS7Ck8ZzB20E?usp=drive_link" },
  { title: "DBMS Notes", description: "Database design, normalization, transactions, and SQL fundamentals.", downloadUrl: "https://drive.google.com/drive/folders/12j1neZ5wqbq9l1J8zvTjWuplVDxhqYlZ?usp=drive_link" },
  { title: "HR Interview Questions", description: "Common HR questions with sample answers and tips for freshers.", downloadUrl: "https://drive.google.com/drive/folders/1NXO6LKcDc1z74coKd4O0SXbWvCQG7nDS?usp=drive_link" },
  { title: "JavaScript Notes", description: "JavaScript fundamentals, ES6+, DOM manipulation, and async programming.", downloadUrl: "https://drive.google.com/drive/folders/1kl60B0JTKCEhDBJ2L3Ef6rv4dFbLHoS-?usp=drive_link" },
  { title: "Node.js Notes", description: "Server-side JavaScript, Express.js, REST APIs, and backend development.", downloadUrl: "https://drive.google.com/drive/folders/1EpStMFdTUgRFxn0-Sk9TIFH0zpviJwld?usp=drive_link" },
  { title: "OOPs Concepts Notes", description: "Object-oriented programming principles, design patterns, and best practices.", downloadUrl: "https://drive.google.com/drive/folders/14ZFHIWu1hPeEdOPwnFilkt2Dh6PpkFBo?usp=drive_link" },
  { title: "Operating Systems Notes", description: "Process management, memory, file systems, and scheduling algorithms.", downloadUrl: "https://drive.google.com/drive/folders/1FL7yGgoXk23k1hLIqpI_SZLnLYpmu4Ps?usp=drive_link" },
  { title: "Python Notes", description: "Python basics to advanced - data structures, file handling, and libraries.", downloadUrl: "https://drive.google.com/drive/folders/15UIw1xeR23DIw7mdYFr3KvdmlHfqxMRD?usp=drive_link" },
  { title: "SQL & PL/SQL Notes", description: "Database queries, joins, stored procedures, triggers, and optimization.", downloadUrl: "https://drive.google.com/drive/folders/17cWQkX1hkX9ce7xgbYiN0VCvmvO0Ypvw?usp=drive_link" },
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
                  downloadUrl={material.downloadUrl}
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
