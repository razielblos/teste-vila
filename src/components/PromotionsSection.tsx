import { Clock, Flame, Star, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PromotionsSection = () => {
  const promotions = [
    {
      id: 'combo-casal',
      icon: Gift,
      title: 'Combo Casal',
      originalPrice: 'R$ 45,80',
      promotionalPrice: 'R$ 39,90',
      description: '2 X-Bacon + 2 Refrigerantes + 1 Porção de Batata',
      badge: 'Mais Pedido',
      urgent: 'Oferta limitada!'
    },
    {
      id: 'almoco-executivo',
      icon: Clock,
      title: 'Almoço Executivo',
      originalPrice: 'R$ 28,90',
      promotionalPrice: 'R$ 24,90',
      description: 'Ala Minuta + Refrigerante + Sobremesa',
      badge: 'Segunda a Sexta',
      urgent: 'Até às 15h'
    },
    {
      id: 'familia-feliz',
      icon: Star,
      title: 'Família Feliz',
      originalPrice: 'R$ 89,90',
      promotionalPrice: 'R$ 79,90',
      description: '4 X-Tudo + 4 Refrigerantes + 2 Porções de Batata',
      badge: 'Fins de Semana',
      urgent: 'Economia de R$ 10!'
    }
  ];

  const handleWhatsAppOrder = (promoTitle: string) => {
    const message = `Olá! Gostaria de saber mais sobre a promoção: ${promoTitle}`;
    window.open(`https://wa.me/5551999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="promocoes" className="section-padding bg-gradient-to-br from-accent/5 to-primary/5 p-[10px] mt-20">
      <div className="container mx-auto mb-[10px]">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-2 text-sm font-medium">
            <Flame className="w-4 h-4 mr-2" />
            Promoções Imperdíveis
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Ofertas Especiais
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aproveite nossas promoções exclusivas e economize sem abrir mão do sabor!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <Card 
              key={promo.id} 
              className="relative overflow-hidden hover:shadow-floating transition-all duration-300 hover:scale-105 border-2 border-accent/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge de destaque */}
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-accent text-accent-foreground font-semibold">
                  {promo.badge}
                </Badge>
              </div>

              {/* Ícone decorativo */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <promo.icon className="w-6 h-6 text-primary" />
              </div>

              <CardContent className="p-6 pt-16">
                <h3 className="text-2xl font-display font-bold text-primary mb-4">
                  {promo.title}
                </h3>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-muted-foreground line-through">
                    {promo.originalPrice}
                  </span>
                  <span className="text-3xl font-bold text-primary">
                    {promo.promotionalPrice}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {promo.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-accent font-medium">
                    <Clock className="w-4 h-4" />
                    {promo.urgent}
                  </div>
                </div>

                <Button
                  className="w-full btn-whatsapp"
                  onClick={() => handleWhatsAppOrder(promo.title)}
                >
                  Pedir Agora
                </Button>
              </CardContent>

              {/* Decorative gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 -z-10"></div>
            </Card>
          ))}
        </div>

        {/* Call to action para mais promoções */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Quer saber de todas as nossas promoções em primeira mão?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://wa.me/5551999999999?text=Olá! Gostaria de receber as promoções do Sabor da Vila', '_blank')}
          >
            Receber Promoções no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;