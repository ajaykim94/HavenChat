import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertTriangle, Heart, Shield } from "lucide-react";
import { useState } from "react";

interface ConsentModalProps {
  open: boolean;
  onConsent: () => void;
}

export function ConsentModal({ open, onConsent }: ConsentModalProps) {
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <Dialog open={open}>
      <DialogContent className="max-w-lg" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Heart className="h-7 w-7 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-center text-xl">Welcome to HavenChat</DialogTitle>
          <DialogDescription className="text-center">
            Before we begin, please read and acknowledge the following important information.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="flex gap-3 p-4 rounded-xl bg-secondary/50">
            <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-medium text-sm">General Self-Help Information</h4>
              <p className="text-sm text-muted-foreground">
                HavenChat provides general wellness information and supportive conversations. It does not provide medical advice, diagnosis, or treatment.
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-4 rounded-xl bg-secondary/50">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-medium text-sm">Not a Licensed Therapist</h4>
              <p className="text-sm text-muted-foreground">
                This is an AI assistant, not a mental health professional. For clinical concerns, please consult a licensed healthcare provider.
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-4 rounded-xl bg-crisis-soft border border-crisis/20">
            <AlertTriangle className="h-5 w-5 text-crisis shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-medium text-sm text-crisis">Not for Emergencies</h4>
              <p className="text-sm text-muted-foreground">
                If you're experiencing a crisis or having thoughts of self-harm, please contact emergency services (911) or the 988 Suicide & Crisis Lifeline immediately.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
          <Checkbox
            id="consent"
            checked={acknowledged}
            onCheckedChange={(checked) => setAcknowledged(checked === true)}
          />
          <label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
            I understand that HavenChat is not a substitute for professional mental health care and is not intended for use during emergencies.
          </label>
        </div>

        <DialogFooter>
          <Button
            variant="default"
            size="lg"
            className="w-full"
            disabled={!acknowledged}
            onClick={onConsent}
          >
            I Understand, Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
