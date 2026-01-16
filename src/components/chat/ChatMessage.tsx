import { cn } from "@/lib/utils";
import { Bot, User, FileText } from "lucide-react";

interface Source {
  id: string;
  content: string;
  documentTitle?: string;
  similarity?: number;
}

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
  isStreaming?: boolean;
}

export function ChatMessage({ role, content, sources, isStreaming }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex gap-3 animate-fade-in",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
          isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>

      {/* Message Content */}
      <div className={cn("flex flex-col gap-2 max-w-[80%]", isUser ? "items-end" : "items-start")}>
        <div
          className={cn(
            "rounded-2xl px-4 py-3 text-sm",
            isUser
              ? "bg-primary text-primary-foreground rounded-tr-md"
              : "chat-bubble-gradient border border-border/50 rounded-tl-md"
          )}
        >
          <p className="whitespace-pre-wrap leading-relaxed">{content}</p>
          {isStreaming && (
            <span className="inline-flex gap-1 ml-1">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </span>
          )}
        </div>

        {/* Sources */}
        {sources && sources.length > 0 && (
          <div className="w-full space-y-2">
            <p className="text-xs text-muted-foreground font-medium">Sources used:</p>
            <div className="space-y-1.5">
              {sources.map((source, index) => (
                <div
                  key={source.id || index}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-muted/50 border border-border/50"
                >
                  <FileText className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    {source.documentTitle && (
                      <p className="text-xs font-medium text-foreground truncate">
                        {source.documentTitle}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {source.content.substring(0, 150)}...
                    </p>
                    {source.similarity !== undefined && (
                      <p className="text-xs text-muted-foreground/70 mt-1">
                        Relevance: {Math.round(source.similarity * 100)}%
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
