import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import xBaconImage from '@/assets/x-bacon-especial.jpg';
import alaMinutaImage from '@/assets/ala-minuta.jpg';
import cachorroQuenteImage from '@/assets/cachorro-quente.jpg';
import pastelCarneImage from '@/assets/pastel-carne.jpg';
import pratoFeitoImage from '@/assets/prato-feito.jpg';
import xTudoImage from '@/assets/x-tudo.jpg';

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 'x-bacon',
    name: 'X-Bacon Especial',
    price: 'R$ 18,90',
    description: 'Hambúrguer artesanal, bacon crocante, queijo derretido, alface, tomate e molho especial da casa',
    image: xBaconImage
  },
  {
    id: 'ala-minuta',
    name: 'Ala Minuta Completa',
    price: 'R$ 24,90',
    description: 'Contra-filé grelhado, arroz, feijão, batata frita, ovo, farofa e salada',
    image: alaMinutaImage
  },
  {
    id: 'cachorro-quente',
    name: 'Cachorro-Quente da Vila',
    price: 'R$ 12,90',
    description: 'Salsicha premium, purê cremoso, milho, ervilha, batata palha, queijo e molhos',
    image: cachorroQuenteImage
  },
  {
    id: 'pastel',
    name: 'Pastel de Carne',
    price: 'R$ 8,90',
    description: 'Massa crocante e dourada recheada com carne moída temperada da casa',
    image: pastelCarneImage
  },
  {
    id: 'prato-feito',
    name: 'Prato Feito Tradicional',
    price: 'R$ 19,90',
    description: 'Bife acebolado, arroz, feijão, batata frita e salada verde',
    image: pratoFeitoImage
  },
  {
    id: 'x-tudo',
    name: 'X-Tudo da Vila',
    price: 'R$ 22,90',
    description: 'Hambúrguer, ovo, bacon, presunto, queijo, milho, ervilha, batata palha e salada',
    image: xTudoImage
  }
];

const MenuSection = () => {
  const handleWhatsAppOrder = (itemName: string) => {
    const message = `Olá! Gostaria de pedir: ${itemName}`;
    window.open(`https://wa.me/5551998106560?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="cardapio" className="section-padding bg-muted/30 p-[50px]">
      <div className="container mx-auto mb-[10px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Nosso Cardápio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delícias preparadas com carinho para você
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="menu-card group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* REMOVIDO: O div com o preço sobre a imagem foi removido */}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed min-h-[4.5rem]">
                  {item.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="price-tag">
                    {item.price}
                  </span>
                  <Button
                    className="btn-whatsapp"
                    onClick={() => handleWhatsAppOrder(item.name)}
                  >
                    Pedir pelo WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;