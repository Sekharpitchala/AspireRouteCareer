import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CertificationCard } from "@/components/CertificationCard";

const certifications = [
  {
    title: "Google IT Support",
    provider: "Google via Coursera",
    description: "Entry-level IT skills including troubleshooting, customer service, networking, and security.",
    url: "https://www.coursera.org/professional-certificates/google-it-support",
  },
  {
    title: "Python for Everybody",
    provider: "University of Michigan",
    description: "Learn Python programming basics. Perfect for beginners starting their coding journey.",
    url: "https://www.coursera.org/specializations/python",
  },
  {
    title: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    description: "Foundational understanding of AWS Cloud services, pricing, and support.",
    url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    title: "HackerRank Certifications",
    provider: "HackerRank",
    description: "Skills certifications in Python, Java, SQL, Problem Solving, and more.",
    url: "https://www.hackerrank.com/skills-verification",
  },
  {
    title: "LinkedIn Learning Certificates",
    provider: "LinkedIn",
    description: "Wide range of tech courses with certificates that appear on your LinkedIn profile.",
    url: "https://www.linkedin.com/learning/",
  },
  {
    title: "freeCodeCamp Certifications",
    provider: "freeCodeCamp",
    description: "Free certifications in Responsive Web Design, JavaScript, Data Visualization, and more.",
    url: "https://www.freecodecamp.org/learn/",
  },
  {
    title: "Microsoft Learn",
    provider: "Microsoft",
    description: "Learn Microsoft technologies with free modules and earn achievements.",
    url: "https://learn.microsoft.com/en-us/certifications/",
  },
  {
    title: "IBM Data Science",
    provider: "IBM via Coursera",
    description: "Professional certificate in data science covering Python, SQL, ML, and data visualization.",
    url: "https://www.coursera.org/professional-certificates/ibm-data-science",
  },
  {
    title: "Meta Frontend Developer",
    provider: "Meta via Coursera",
    description: "Learn HTML, CSS, JavaScript, React, and UX design from Meta engineers.",
    url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
];

export default function Certifications() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Boost Your Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Free Certifications
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Earn industry-recognized certifications at no cost. 
              Stand out to employers and validate your skills.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={cert.title} className="animate-fade-up" style={{ animationDelay: `${(index % 6) * 100}ms` }}>
                <CertificationCard
                  title={cert.title}
                  provider={cert.provider}
                  description={cert.description}
                  url={cert.url}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
