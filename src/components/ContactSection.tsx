import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Endereço',
      value: 'Tv. São José, 455 - Navegantes, 90240-200',
      subtitle: 'Porto Alegre - RS'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'WhatsApp',
      value: '(51) 999810-6560',
      action: () => window.open('https://wa.me/5551998106560?text=Olá! Gostaria de fazer um pedido', '_blank')
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: 'Horário',
      value: 'Segunda a Domingo',
      subtitle: '11h às 23h'
    }
  ];

  return (
    <section id="contato" className="section-padding bg-muted/30 p-[50px] mt-20">
      <div className="container mx-auto mb-[10px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para atender você da melhor forma possível
          </p>
        </div>

        {/* --- 1. MUDANÇA: Grid principal agora usa "items-stretch" para forçar colunas de altura igual --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Coluna da Esquerda */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-8">
              Informações de Contato
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className={`menu-card hover:shadow-card animate-fade-in ${
                    info.action ? 'cursor-pointer hover:scale-[1.02]' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={info.action}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">
                          {info.label}
                        </h4>
                        <p className="text-foreground font-medium">
                          {info.value}
                        </p>
                        {info.subtitle && (
                          <p className="text-muted-foreground text-sm">
                            {info.subtitle}
                          </p>
                        )}
                      </div>
                      {info.action && (
                        <ExternalLink className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* --- O BOTÃO FOI REMOVIDO DAQUI --- */}

          </div>

          {/* Coluna da Direita */}
          {/* --- 2. MUDANÇA: Adicionado "flex flex-col" para permitir que os itens se expandam verticalmente --- */}
          <div className="space-y-6 flex flex-col">
            <h3 className="text-2xl font-bold text-primary mb-8">
              Nossa Localização
            </h3>
            
            {/* --- 3. MUDANÇA: Adicionado "flex-grow" para que este card ocupe o espaço disponível --- */}
            <Card className="menu-card overflow-hidden flex-grow flex flex-col">
              <CardContent className="p-0 flex-grow">
                {/* --- 4. MUDANÇA: Trocado "h-80" por "h-full" para preencher a altura --- */}
                <div className="h-full bg-gradient-warm flex items-center justify-center text-white">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h4 className="text-xl font-semibold mb-2">
                      Tv. São José, 455
                    </h4>
                    <p className="opacity-90">
                      Navegantes - Porto Alegre, RS
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4 border-white text-gray-800 bg-white hover:bg-gray-100 hover:text-primary"
                      onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Tv.+São+José,+455+-+Navegantes,+Porto+Alegre+-+RS', '_blank')}
                    >
                      Abrir no Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="menu-card bg-accent/5 border-accent/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-primary mb-2">
                  Delivery Disponível!
                </h4>
                <p className="text-muted-foreground">
                  Atendemos toda a região central de Porto Alegre. 
                  Faça seu pedido pelo WhatsApp e receba em casa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* --- 5. MUDANÇA: Botão movido para fora do grid e centralizado --- */}
        <div className="mt-8 flex justify-center">
          <Button
            className="btn-whatsapp w-full lg:w-auto lg:max-w-md"
            onClick={() => window.open('https://wa.me/5551998106560?text=Olá! Gostaria de fazer um pedido', '_blank')}
          >
            <Phone className="w-5 h-5 mr-2" />
            Fazer Pedido pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;