import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-4 w-4 text-primary" />
              </div>
              <span className="text-lg font-semibold">HavenChat</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A supportive companion for your mental wellness journey. Not a replacement for professional care.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-sm">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/chat" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Start Chat
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-sm">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Use
              </Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-sm text-crisis">Crisis Resources</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>National Suicide Prevention Lifeline</p>
              <p className="font-medium text-foreground">988</p>
              <p>Crisis Text Line</p>
              <p className="font-medium text-foreground">Text HOME to 741741</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HavenChat. For informational purposes only.
          </p>
          <p className="text-xs text-muted-foreground">
            Not a licensed therapist. In emergencies, call 911 or your local emergency services.
          </p>
        </div>
      </div>
    </footer>
  );
}
