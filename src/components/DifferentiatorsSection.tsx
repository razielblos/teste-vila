import { Shield, Timer, Heart, Users, Trophy, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DifferentiatorsSection = () => {
  const differentiators = [
    {
      icon: Heart,
      title: "Receitas da Família",
      description: "Receitas tradicionais passadas de geração em geração, com temperos especiais únicos."
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Ingredientes frescos selecionados diariamente de fornecedores locais de confiança."
    },
    {
      icon: Timer,
      title: "Entrega Rápida",
      description: "Delivery em até 45 minutos para toda a região, sempre quentinho e no ponto certo."
    },
    {
      icon: Users,
      title: "Atendimento Familiar",
      description: "Tratamos cada cliente como família, com carinho e atenção personalizada."
    },
    {
      icon: Trophy,
      title: "Prêmios e Reconhecimento",
      description: "Eleita a melhor lancheria do bairro por 3 anos consecutivos pelos nossos clientes."
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Embalagens ecológicas e comprometimento com práticas sustentáveis."
    }
  ];

  return (
    <section id="diferenciais" className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5 p-[10px] mt-20">
      <div className="container mx-auto mb-[10px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Por que escolher o Sabor da Vila?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais do que uma lancheria, somos uma tradição familiar que se dedica a proporcionar 
            a melhor experiência gastronômica para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-floating transition-all duration-300 hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-warm rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Venha conhecer a diferença!
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Experimente nossos sabores únicos e descubra por que somos a lancheria 
              favorita da comunidade há mais de 25 anos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/5551999999999?text=Olá! Gostaria de conhecer o Sabor da Vila', '_blank')}
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Faça seu primeiro pedido
              </button>
              <button
                onClick={() => window.open('https://www.google.com/maps/place/Rua+das+Flores,+123+-+Centro,+Porto+Alegre+-+RS', '_blank')}
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Como chegar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;