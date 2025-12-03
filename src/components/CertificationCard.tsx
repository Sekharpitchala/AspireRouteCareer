import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificationCardProps {
  title: string;
  provider: string;
  description?: string;
  url?: string;
  isFree?: boolean;
}

export function CertificationCard({ title, provider, description, url, isFree = true }: CertificationCardProps) {
  return (
    <div className="group bg-card rounded-xl border border-border shadow-soft hover:shadow-hover transition-all duration-300 p-5">
      <div className="flex items-start justify-between mb-3">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shrink-0">
          <Award className="w-6 h-6 text-accent-foreground" />
        </div>
        
        {isFree && (
          <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-semibold text-primary">
            FREE
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-primary font-medium mb-2">{provider}</p>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
        {description || "Get certified and boost your resume with this industry-recognized certification."}
      </p>

      {/* Action */}
      <Button variant="default" className="w-full" asChild>
        <a href={url || "#"} target="_blank" rel="noopener noreferrer">
          Get Certificate
          <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
}
