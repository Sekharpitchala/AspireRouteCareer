import { Star, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Course logo URLs - using simple colored backgrounds with text for reliability
const courseLogos: Record<string, { bg: string; text: string; icon?: string }> = {
  "Java": { bg: "from-orange-500 to-red-600", text: "☕" },
  "Python": { bg: "from-blue-500 to-yellow-500", text: "🐍" },
  "C": { bg: "from-blue-600 to-blue-800", text: "C" },
  "C++": { bg: "from-blue-500 to-purple-600", text: "C++" },
  "JavaScript": { bg: "from-yellow-400 to-yellow-600", text: "JS" },
  "HTML": { bg: "from-orange-500 to-orange-700", text: "HTML" },
  "CSS": { bg: "from-blue-500 to-blue-700", text: "CSS" },
  "Node.js": { bg: "from-green-500 to-green-700", text: "⬢" },
  "SQL": { bg: "from-blue-400 to-cyan-600", text: "SQL" },
  "PL/SQL": { bg: "from-red-500 to-red-700", text: "PL" },
  "AI": { bg: "from-purple-500 to-pink-600", text: "🤖" },
  "OOPs": { bg: "from-indigo-500 to-purple-600", text: "OOP" },
  "Core CS": { bg: "from-slate-600 to-slate-800", text: "CS" },
  "Interview": { bg: "from-green-500 to-emerald-600", text: "💼" },
  "DSA": { bg: "from-violet-500 to-purple-700", text: "DSA" },
  "Framework": { bg: "from-cyan-500 to-blue-600", text: "⚙️" },
  "Aptitude": { bg: "from-amber-500 to-orange-600", text: "🧠" },
};

interface CourseCardProps {
  title: string;
  rating?: number;
  category?: string;
  url?: string;
}

export function CourseCard({ title, rating = 4.5, category, url }: CourseCardProps) {
  const logoConfig = category ? courseLogos[category] || courseLogos["Core CS"] : courseLogos["Core CS"];
  
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="group bg-card rounded-xl border border-border shadow-soft hover:shadow-glow hover:border-primary/50 transition-all duration-300 overflow-hidden">
      {/* Thumbnail with Logo */}
      <div className={`relative h-40 bg-gradient-to-br ${logoConfig.bg} overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl font-bold text-white/90 drop-shadow-lg">
            {logoConfig.text}
          </div>
        </div>
        <div className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Play className="w-6 h-6 text-white fill-white" />
        </div>
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium text-white">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="text-sm font-medium text-foreground">{rating}</span>
          <span className="text-sm text-muted-foreground">/5</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1"
            onClick={handleClick}
          >
            <Play className="w-4 h-4" />
            Watch Now
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleClick}
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
