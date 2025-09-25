import { MessageCircle, ChefHat, Truck, ThumbsUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Faça seu Pedido",
      description: "Entre em contato pelo WhatsApp e escolha seus pratos favoritos do nosso cardápio completo.",
      color: "text-primary"
    },
    {
      icon: ChefHat,
      number: "02", 
      title: "Preparamos com Carinho",
      description: "Nossa equipe prepara seu pedido com ingredientes frescos e receitas tradicionais da casa.",
      color: "text-secondary"
    },
    {
      icon: Truck,
      number: "03",
      title: "Entregamos Rapidinho",
      description: "Delivery grátis na região! Seu pedido chega quentinho em até 45 minutos no máximo.",
      color: "text-accent"
    },
    {
      icon: ThumbsUp,
      number: "04",
      title: "Saboreie a Felicidade",
      description: "Desfrute dos sabores únicos do Sabor da Vila no conforto da sua casa ou escritório.",
      color: "text-primary"
    }
  ];

  return (
    <section id="como-funciona" className="section-padding bg-muted/30 p-[10px] mt-20">
      <div className="container mx-auto mb-[10px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simples, rápido e prático! Veja como é fácil receber nossos pratos deliciosos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="group hover:shadow-floating transition-all duration-300 hover:scale-105 border-border/50 h-full">
                <CardContent className="p-6 text-center relative">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mt-8 mb-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-primary mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connecting arrow (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-px bg-gradient-to-r from-primary to-secondary"></div>
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-primary rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Delivery info highlight */}
        <div className="mt-16 bg-gradient-warm rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Delivery Grátis na Região!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-2">45min</div>
              <div className="text-lg opacity-90">Tempo máximo</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">R$ 0</div>
              <div className="text-lg opacity-90">Taxa de entrega</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5km</div>
              <div className="text-lg opacity-90">Raio de entrega</div>
            </div>
          </div>
          <p className="text-lg opacity-90 mt-6">
            *Pedido mínimo de R$ 25,00 para delivery gratuito
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;