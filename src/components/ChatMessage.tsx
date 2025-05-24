import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";
import { Avatar } from "@/components/ui/avatar";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface ChatMessageProps {
  message: Message;
  isLoading?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isLoading = false,
}) => {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-3 w-full max-w-5xl mx-auto py-4",
        isUser ? "flex-row-reverse" : "flex-row",
      )}
    >
      <Avatar
        className={cn(
          "h-8 w-8 shrink-0",
          isUser ? "bg-blue-600" : "bg-gray-800",
        )}
      >
        <div className="flex h-full items-center justify-center text-xs font-medium text-white">
          {isUser ? "U" : "IA"}
        </div>
      </Avatar>

      <div
        className={cn(
          "flex flex-col gap-1 max-w-[85%]",
          isUser ? "items-end" : "items-start",
        )}
      >
        <div
          className={cn(
            "rounded-lg px-4 py-2 text-sm",
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-foreground",
          )}
        >
          {isLoading ? (
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-2 w-2 rounded-full bg-current animate-bounce"></div>
            </div>
          ) : (
            message.content
          )}
        </div>
        <time className="text-xs text-muted-foreground">
          {format(message.timestamp, "HH:mm", { locale: fr })}
        </time>
      </div>
    </div>
  );
};

export default ChatMessage;
