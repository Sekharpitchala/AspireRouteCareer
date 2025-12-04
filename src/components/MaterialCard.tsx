import { FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MaterialCardProps {
  title: string;
  description?: string;
  downloadUrl?: string;
}

export function MaterialCard({ title, description, downloadUrl }: MaterialCardProps) {

  return (
    <div className="group bg-card rounded-xl border border-border shadow-soft hover:shadow-glow hover:border-primary/50 transition-all duration-300 p-5">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
          <FileText className="w-6 h-6 text-primary" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description || "Comprehensive study notes and reference materials"}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4">
        <Button 
          variant="secondary" 
          size="sm" 
          className="flex-1"
          onClick={() => downloadUrl && downloadUrl !== "#" && window.open(downloadUrl, "_blank", "noopener,noreferrer")}
        >
          <Eye className="w-4 h-4" />
          View
        </Button>
        <Button 
          variant="default" 
          size="sm" 
          className="flex-1"
          onClick={() => downloadUrl && downloadUrl !== "#" && window.open(downloadUrl, "_blank", "noopener,noreferrer")}
        >
          <Download className="w-4 h-4" />
          Download
        </Button>
      </div>
    </div>
  );
}
