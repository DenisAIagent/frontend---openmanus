import { useState, useRef, useEffect } from "react";
import { Message } from "@/types/chat";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import { useAuth } from "@/contexts/AuthContext";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { LogOut, Plus } from "lucide-react";

// Fonction pour simuler une réponse du LLM
const simulateAIResponse = async (userMessage: string): Promise<string> => {
  // Simuler un délai de traitement
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Réponses basiques prédéfinies pour l'exemple
  const responses = [
    `J'ai bien compris votre message: "${userMessage}". Comment puis-je vous aider davantage?`,
    `Merci pour votre question. Voici quelques informations qui pourraient être utiles concernant "${userMessage}".`,
    `C'est une excellente question sur "${userMessage}". Je vais essayer de vous donner une réponse complète.`,
    `Votre demande concernant "${userMessage}" est intéressante. Voici ce que je peux vous dire à ce sujet.`,
  ];

  return responses[Math.floor(Math.random() * responses.length)];
};

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Bonjour ! Je suis votre assistant IA. Comment puis-je vous aider aujourd'hui ?",
      timestamp: new Date(),
    },
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { user, logout } = useAuth();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    // Ajouter le message de l'utilisateur
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsProcessing(true);

    try {
      // Simuler une réponse de l'IA
      const responseContent = await simulateAIResponse(content);

      // Ajouter la réponse de l'IA
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responseContent,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Erreur lors de la génération de la réponse:", error);

      // Ajouter un message d'erreur
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Désolé, j'ai rencontré une erreur en traitant votre demande. Veuillez réessayer.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleNewChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Bonjour ! Je suis votre assistant IA. Comment puis-je vous aider aujourd'hui ?",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-between items-center p-4 bg-background shadow-sm">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNewChat}
            title="Nouvelle conversation"
          >
            <Plus className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">Assistant IA</h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Connecté en tant que <strong>{user?.username}</strong>
          </span>
          <Button variant="outline" size="sm" onClick={logout}>
            <LogOut className="h-4 w-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </header>

      <Separator />

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {isProcessing && (
          <ChatMessage
            message={{
              id: "loading",
              role: "assistant",
              content: "",
              timestamp: new Date(),
            }}
            isLoading={true}
          />
        )}

        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSendMessage={handleSendMessage} isLoading={isProcessing} />
    </div>
  );
};

export default ChatInterface;
