import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen relative flex items-center justify-center p-[10px]" style={{
    backgroundImage: `linear-gradient(rgba(139, 21, 56, 0.8), rgba(30, 58, 138, 0.8)), url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      <div className="container mx-auto px-4 text-center text-white z-10 mb-[10px]">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Sabor da Vila
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            A lancheria do bairro que conquistou o coração da comunidade
          </p>
          
          {/* Impact numbers */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 text-white/90">
            <div className="text-center">
              <div className="text-3xl font-bold">50k+</div>
              <div className="text-sm">Clientes Satisfeitos</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.9⭐</div>
              <div className="text-sm">Avaliação Média</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold">28 Anos</div>
              <div className="text-sm">de Tradição</div>
            </div>
          </div>
          
          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-hero text-lg px-10 py-6" onClick={() => window.open('https://wa.me/5551999999999?text=Olá! Gostaria de fazer um pedido', '_blank')}>
              Reserve já pelo WhatsApp
            </Button>
            
            <Button variant="outline" onClick={() => scrollToSection('cardapio')} className="btn-hero-outline text-lg px-10 py-6 text-amber-500 bg-white">
              Conheça nosso cardápio
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;