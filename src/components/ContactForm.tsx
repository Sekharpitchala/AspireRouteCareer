import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const mailtoLink = `mailto:aspireroutecareers@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast.success("Opening your email client. Please send the email to complete submission.");
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Your Name</label>
          <Input
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="h-12 bg-secondary/50 border-border focus:border-primary"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Your Email</label>
          <Input
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="h-12 bg-secondary/50 border-border focus:border-primary"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
        <Input
          placeholder="What's this about?"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="h-12 bg-secondary/50 border-border focus:border-primary"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground mb-2 block">Your Message</label>
        <Textarea
          placeholder="Tell us how we can help you..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={5}
          className="bg-secondary/50 border-border focus:border-primary resize-none"
        />
      </div>
      <Button
        type="submit"
        variant="default"
        size="lg"
        className="w-full h-12 text-base font-semibold"
        disabled={isSubmitting || isSubmitted}
      >
        {isSubmitted ? (
          <>
            <CheckCircle className="w-5 h-5" />
            Email Client Opened!
          </>
        ) : isSubmitting ? (
          "Opening..."
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        This will open your email client to send us a message at aspireroutecareers@gmail.com
      </p>
    </form>
  );
}
