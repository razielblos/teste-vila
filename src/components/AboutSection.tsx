import { Users, Heart, Clock, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const AboutSection = () => {
  const features = [{
    icon: Heart,
    title: "Tradição Familiar",
    description: "Receitas passadas de geração em geração, feitas com muito amor e carinho."
  }, {
    icon: Clock,
    title: "Desde 1995",
    description: "Há 30 anos servindo a comunidade com qualidade e dedicação."
  }, {
    icon: Users,
    title: "Equipe Dedicada",
    description: "Profissionais apaixonados por culinária, comprometidos com sua satisfação."
  }, {
    icon: Award,
    title: "Ingredientes Premium",
    description: "Selecionamos os melhores ingredientes para garantir sabor único."
  }];
  return <section id="sobre" className="section-padding bg-background p-[10px] mt-20">
      <div className="container mx-auto mb-[10px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-primary mb-6 py-[32px] px-[12px] my-[3px] md:text-6xl">
            Nossa História
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O Sabor da Vila nasceu do sonho de uma família em trazer para o bairro os sabores autênticos 
            e caseiros que fazem a diferença. Cada prato é preparado com ingredientes selecionados e muito carinho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => <Card key={index} className="group hover:shadow-floating transition-all duration-300 hover:scale-105 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        <div className="bg-gradient-warm rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Mais de 50.000 Clientes Satisfeitos
          </h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Somos a lancheria favorita do bairro, com avaliação média de 4.9 estrelas 
            e mais de 1.200 avaliações positivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl font-bold">4.9</div>
              <div className="text-sm opacity-80">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold">1.200+</div>
              <div className="text-sm opacity-80">Avaliações</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold">50k+</div>
              <div className="text-sm opacity-80">Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;