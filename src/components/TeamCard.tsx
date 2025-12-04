import { Mail } from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

interface TeamCardProps {
  name: string;
  role: string;
  email: string;
  image: string;
  instagram?: string;
}

export function TeamCard({ name, role, email, image, instagram }: TeamCardProps) {
  return (
    <div className="group bg-card rounded-2xl border border-border shadow-soft hover:shadow-glow hover:border-primary/50 transition-all duration-300 p-6 text-center">
      {/* Avatar */}
      <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      {/* Info */}
      <h3 className="text-lg font-bold text-foreground mb-1">{name}</h3>
      <p className="text-primary font-medium text-sm mb-3">{role}</p>
      
      {/* Contact */}
      <div className="flex items-center justify-center gap-3">
        <a 
          href={`mailto:${email}`}
          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
          aria-label={`Email ${name}`}
        >
          <Mail className="w-5 h-5" />
        </a>
        {instagram && (
          <a 
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center text-white hover:scale-110 transition-all"
            aria-label={`${name}'s Instagram`}
          >
            <InstagramIcon />
          </a>
        )}
      </div>
    </div>
  );
}
