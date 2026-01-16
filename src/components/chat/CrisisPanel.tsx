import { AlertTriangle, Phone, MessageSquare, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CrisisPanelProps {
  onDismiss?: () => void;
}

export function CrisisPanel({ onDismiss }: CrisisPanelProps) {
  return (
    <div className="crisis-panel animate-slide-up space-y-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-crisis/10 shrink-0">
          <AlertTriangle className="h-5 w-5 text-crisis" />
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-crisis">We're Here for You</h3>
          <p className="text-sm text-foreground/80">
            It sounds like you might be going through a really difficult time. Your safety matters most right now.
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href="tel:988"
          className="flex items-center gap-3 p-4 rounded-xl bg-background border border-crisis/30 hover:border-crisis/50 transition-colors"
        >
          <Phone className="h-5 w-5 text-crisis" />
          <div>
            <p className="font-medium text-sm">988 Lifeline</p>
            <p className="text-xs text-muted-foreground">Call or text 988</p>
          </div>
        </a>

        <a
          href="sms:741741&body=HOME"
          className="flex items-center gap-3 p-4 rounded-xl bg-background border border-crisis/30 hover:border-crisis/50 transition-colors"
        >
          <MessageSquare className="h-5 w-5 text-crisis" />
          <div>
            <p className="font-medium text-sm">Crisis Text Line</p>
            <p className="text-xs text-muted-foreground">Text HOME to 741741</p>
          </div>
        </a>
      </div>

      <div className="p-4 rounded-xl bg-background border border-border">
        <h4 className="font-medium text-sm mb-2">Additional Resources</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <ExternalLink className="h-3.5 w-3.5" />
            <a 
              href="https://www.samhsa.gov/find-help/national-helpline" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              SAMHSA National Helpline: 1-800-662-4357
            </a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="h-3.5 w-3.5" />
            <a 
              href="https://www.thetrevorproject.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Trevor Project (LGBTQ+): 1-866-488-7386
            </a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="h-3.5 w-3.5" />
            <a 
              href="https://www.veteranscrisisline.net/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Veterans Crisis Line: 988, Press 1
            </a>
          </li>
        </ul>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        In an emergency, please call 911 or go to your nearest emergency room.
      </p>

      {onDismiss && (
        <Button variant="ghost" size="sm" className="w-full" onClick={onDismiss}>
          I've noted these resources
        </Button>
      )}
    </div>
  );
}
