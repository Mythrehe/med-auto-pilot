import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { X, Send, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AIChatProps {
  onClose: () => void;
}

const AIChat = ({ onClose }: AIChatProps) => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm your AI scheduling assistant. You can say things like 'Book me with Dr. Johnson tomorrow at 2 PM' or 'Show my upcoming appointments'." }
  ]);
  const [input, setInput] = useState("");
  const { toast } = useToast();

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "I understand you want to book an appointment. Let me check available slots for you..." 
      }]);
      toast({
        title: "AI Processing",
        description: "Finding the best appointment slots for you.",
      });
    }, 1000);

    setInput("");
  };

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-large border-2 border-primary/20 flex flex-col animate-slide-in z-50">
      <div className="p-4 border-b bg-gradient-hero text-primary-foreground flex items-center justify-between rounded-t-2xl">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5" />
          <span className="font-semibold">AI Assistant</span>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-primary-foreground hover:bg-primary-foreground/20">
          <X className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon" className="shadow-soft">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AIChat;
