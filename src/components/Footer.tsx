import { Button } from '@/components/ui/button';
import { Phone, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/5551999999999?text=Olá! Gostaria de fazer um pedido', '_blank')
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      action: () => window.open('https://instagram.com/sabordavila_oficial', '_blank')
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'E-mail',
      action: () => window.open('mailto:contato@sabordavila.com.br', '_blank')
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="gradient-warm text-white section-padding p-[10px] mt-20">
      <div className="container mx-auto mb-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold cursor-pointer hover:opacity-80 transition-opacity" onClick={scrollToTop}>
              Sabor da Vila
            </h3>
            <p className="text-white/90 leading-relaxed">
              A lancheria do bairro que conquistou o coração da comunidade. 
              Sabores autênticos, ambiente acolhedor e atendimento familiar.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300"
                  onClick={link.action}
                  title={link.label}
                >
                  {link.icon}
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold mb-6">Links Rápidos</h4>
            <nav className="space-y-3">
              {[
                { name: 'Cardápio', id: 'cardapio' },
                { name: 'Avaliações', id: 'avaliacoes' },
                { name: 'Contato', id: 'contato' }
              ].map((link) => (
                <button
                  key={link.id}
                  className="block text-white/90 hover:text-white hover:translate-x-2 transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold mb-6">Informações</h4>
            <div className="space-y-4 text-white/90">
              <p className="flex items-center">
                <span className="font-medium">Endereço:</span>
                <br className="sm:hidden" />
                <span className="sm:ml-2">Rua das Flores, 123 - Centro, Porto Alegre - RS</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium">Horário:</span>
                <br className="sm:hidden" />
                <span className="sm:ml-2">Segunda a Domingo, 11h às 23h</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium">WhatsApp:</span>
                <br className="sm:hidden" />
                <span className="sm:ml-2">(51) 99999-9999</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/80 text-center md:text-left">
            © 2025 Sabor da Vila. Todos os direitos reservados.
          </p>
          <p className="text-white/80 text-center md:text-right flex items-center">
            Feito com <Heart className="w-4 h-4 mx-1 fill-current text-red-300" /> para nossa comunidade
          </p>
        </div>

        {/* Back to Top Button */}
        <Button
          className="fixed bottom-6 right-6 btn-whatsapp rounded-full p-4 shadow-floating"
          onClick={scrollToTop}
          title="Voltar ao topo"
        >
          ↑
        </Button>
      </div>
    </footer>
  );
};

export default Footer;