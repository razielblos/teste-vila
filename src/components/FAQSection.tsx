import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Qual o tempo de entrega?",
      answer: "Nosso delivery é realizado em até 45 minutos. Para pedidos em horários de pico (12h-14h e 19h-21h), o tempo pode se estender um pouco, mas sempre avisamos com antecedência."
    },
    {
      question: "Vocês entregam em toda Porto Alegre?",
      answer: "Entregamos em um raio de 5km da nossa lancheria, cobrindo os principais bairros da região central. A taxa de entrega é gratuita para pedidos acima de R$ 25,00."
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Aceitamos dinheiro, cartão (débito e crédito), PIX e carteiras digitais. Para pagamentos no cartão, temos a maquininha sem fio que vai até você."
    },
    {
      question: "Posso personalizar meu pedido?",
      answer: "Claro! Adoramos atender pedidos especiais. Você pode retirar ingredientes, adicionar extras ou fazer substituições. Basta especificar no WhatsApp ao fazer o pedido."
    },
    {
      question: "Vocês têm opções vegetarianas?",
      answer: "Sim! Temos várias opções vegetarianas, incluindo pastéis de queijo, x-salada sem carne, pratos com ovos e saladas. Consulte nosso cardápio completo no WhatsApp."
    },
    {
      question: "Como faço para acompanhar meu pedido?",
      answer: "Assim que confirmamos seu pedido, enviamos atualizações pelo WhatsApp: quando começamos a preparar, quando sai para entrega e quando está chegando."
    },
    {
      question: "Posso agendar um pedido para depois?",
      answer: "Sim! Você pode agendar pedidos com até 2 horas de antecedência. Ideal para almoços executivos ou jantares em família."
    },
    {
      question: "Vocês fazem encomendas para festas?",
      answer: "Fazemos sim! Para eventos e festas, oferecemos combos especiais e descontos progressivos. Entre em contato com pelo menos 24h de antecedência."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-background p-[10px] mt-20">
      <div className="container mx-auto max-w-4xl mb-[10px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços e delivery
          </p>
        </div>

        <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/30 rounded-xl px-6 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-primary/80 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Não encontrou a resposta que procurava?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://wa.me/5551998106560?text=Olá! Tenho uma dúvida sobre o Sabor da Vila', '_blank')}
              className="btn-whatsapp inline-flex items-center justify-center"
            >
              Falar no WhatsApp
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;