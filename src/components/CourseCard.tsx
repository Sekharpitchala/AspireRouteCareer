import { Star, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  rating?: number;
  category?: string;
  url?: string;
}

export function CourseCard({ title, rating = 4.5, category, url }: CourseCardProps) {
  return (
    <div className="group bg-card rounded-xl border border-border shadow-soft hover:shadow-glow hover:border-primary/50 transition-all duration-300 overflow-hidden">
      {/* Thumbnail */}
      <div className="relative h-40 gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
          </div>
        </div>
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-xs font-medium text-primary-foreground">
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
            onClick={() => url && window.open(url, "_blank", "noopener,noreferrer")}
          >
            <Play className="w-4 h-4" />
            Watch Now
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => url && window.open(url, "_blank", "noopener,noreferrer")}
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
