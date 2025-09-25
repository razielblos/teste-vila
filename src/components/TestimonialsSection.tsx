import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    text: 'O melhor X-Bacon do bairro! Já virei cliente fiel. O atendimento é sempre muito simpático e a comida chega quentinha.',
    rating: 5
  },
  {
    id: '2',
    name: 'João Santos',
    text: 'A ala minuta é espetacular! Carne no ponto certo e porção generosa. Recomendo para toda a família.',
    rating: 5
  },
  {
    id: '3',
    name: 'Ana Costa',
    text: 'Lugar aconchegante, comida saborosa e preço justo. O cachorro-quente é o melhor que já comi na vida!',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="avaliacoes" className="section-padding bg-background p-[10px] mt-20">
      <div className="container mx-auto mb-[10px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de quem já experimentou nossos sabores
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="menu-card bg-card hover:shadow-floating animate-fade-in relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-accent mb-4" />
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic text-lg">
                  "{testimonial.text}"
                </p>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Customer Name */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-primary text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Cliente verificado
                  </p>
                </div>
                
                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;