import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => scrollToSection('home')}
        >
          <img 
            src={logo} 
            alt="Sabor da Vila Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-display font-bold text-primary">
            Sabor da Vila
          </span>
        </div>

        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('sobre')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Sobre
          </button>          
          <button
            onClick={() => scrollToSection('cardapio')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Cardápio
          </button>
          <button
            onClick={() => scrollToSection('promocoes')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Promoções
          </button>
          <button
            onClick={() => scrollToSection('avaliacoes')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Avaliações
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contato
          </button>
        </nav>

        {/* WhatsApp CTA - Desktop */}
        <Button 
          className="hidden md:flex btn-whatsapp"
          onClick={() => window.open('https://wa.me/5551998106560?text=Olá! Gostaria de fazer um pedido', '_blank')}
        >
          WhatsApp
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border/50 shadow-card">
          <nav className="flex flex-col space-y-4 p-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('cardapio')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Cardápio
            </button>
            <button
              onClick={() => scrollToSection('promocoes')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Promoções
            </button>
            <button
              onClick={() => scrollToSection('avaliacoes')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
            <Button 
              className="btn-whatsapp justify-start"
              onClick={() => window.open('https://wa.me/5551998106560?text=Olá! Gostaria de fazer um pedido', '_blank')}
            >
              WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;