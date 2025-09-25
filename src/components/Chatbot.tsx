import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Phone } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou o assistente virtual do Sabor da Vila 🍔 Como posso ajudar você hoje?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Placeholder function for future Gemini API integration
  const processWithGeminiAPI = async (userMessage: string): Promise<string> => {
    // TODO: Integrate with Gemini API
    // This is a placeholder that simulates API response
    
    const lowerMessage = userMessage.toLowerCase();
    
    // Cardápio responses
    if (lowerMessage.includes('cardápio') || lowerMessage.includes('menu') || lowerMessage.includes('pratos')) {
      return `Nosso cardápio inclui:
🍔 X-Bacon Especial - R$ 18,90
🍽️ Ala Minuta Completa - R$ 24,90  
🌭 Cachorro-Quente da Vila - R$ 12,90
🥟 Pastel de Carne - R$ 8,90
🍖 Prato Feito Tradicional - R$ 19,90
🍔 X-Tudo da Vila - R$ 22,90

Qual gostaria de pedir?`;
    }
    
    // Horário responses
    if (lowerMessage.includes('horário') || lowerMessage.includes('funcionamento') || lowerMessage.includes('aberto')) {
      return 'Funcionamos de Segunda a Domingo, das 11h às 23h. Estamos sempre aqui para atender você! 🕐';
    }
    
    // Localização responses
    if (lowerMessage.includes('endereço') || lowerMessage.includes('localização') || lowerMessage.includes('onde')) {
      return 'Estamos localizados na Rua das Flores, 123 - Centro, Porto Alegre - RS. Oferecemos delivery para toda a região central! 📍';
    }
    
    // Promoções responses
    if (lowerMessage.includes('promoção') || lowerMessage.includes('desconto') || lowerMessage.includes('oferta')) {
      return 'Para conferir nossas promoções especiais e ofertas do dia, entre em contato pelo WhatsApp: (51) 99999-9999 📱';
    }
    
    // Pedidos responses
    if (lowerMessage.includes('pedido') || lowerMessage.includes('pedir') || lowerMessage.includes('delivery')) {
      return 'Para fazer seu pedido, clique no link do WhatsApp: (51) 99999-9999. Nossa equipe te atenderá rapidamente! 🚀';
    }
    
    // Preços responses
    if (lowerMessage.includes('preço') || lowerMessage.includes('valor') || lowerMessage.includes('custa')) {
      return 'Nossos preços são super acessíveis! Confira alguns destaques:\n• Pastel de Carne: R$ 8,90\n• Cachorro-Quente: R$ 12,90\n• X-Bacon Especial: R$ 18,90\n• X-Tudo da Vila: R$ 22,90';
    }
    
    // Default fallback
    return 'Para mais informações detalhadas e atendimento personalizado, entre em contato pelo WhatsApp: (51) 99999-9999. Nossa equipe terá prazer em ajudar! 😊';
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const botResponse = await processWithGeminiAPI(inputText);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error processing message:', error);
      toast({
        title: "Erro no chatbot",
        description: "Não foi possível processar sua mensagem. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        className={`fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-floating transition-all duration-300 ${
          isOpen 
            ? 'bg-secondary hover:bg-secondary-hover' 
            : 'bg-primary hover:bg-primary-hover'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? 'Fechar chat' : 'Abrir chat'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 z-50 shadow-floating border-primary/20 animate-scale-in">
          {/* Chat Header */}
          <CardHeader className="gradient-warm text-white p-4 rounded-t-lg">
            <CardTitle className="flex items-center justify-between text-lg">
              <span>Atendimento Sabor da Vila</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 h-6 w-6"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>

          {/* Chat Messages */}
          <CardContent className="p-0 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] ${
                      message.sender === 'user'
                        ? 'chat-bubble-user'
                        : 'chat-bubble-bot'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="chat-bubble-bot">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="border-t border-border p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 text-sm"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping}
                  size="icon"
                  className="bg-primary hover:bg-primary-hover"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Quick Action */}
              <Button
                className="w-full mt-2 btn-whatsapp text-xs py-2"
                onClick={() => window.open('https://wa.me/5551999999999?text=Olá! Gostaria de fazer um pedido', '_blank')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Falar direto no WhatsApp
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;