import { FileText, ListChecks, MessageCircle } from 'lucide-react';

// <!-- Sekcja Jak złożyć zamówienie -->
const OrderStepsSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Przygotuj numer VIN',
      description: 'Znajdź numer identyfikacyjny swojego pojazdu (VIN). Pomoże nam to dokładnie dobrać części.',
      icon: FileText,
      bgColor: 'bg-muted',
    },
    {
      number: 2,
      title: 'Przygotuj listę potrzebnych części',
      description: 'Sporządź listę potrzebnych części zamiennych lub opisz problem z pojazdem.',
      icon: ListChecks,
      bgColor: 'bg-secondary',
    },
    {
      number: 3,
      title: 'Wybierz dogodny sposób kontaktu',
      description: 'Skontaktuj się z nami telefonicznie, SMS-em, przez komunikator lub e-mail.',
      icon: MessageCircle,
      bgColor: 'bg-muted',
    },
  ];

  return (
    <section id="zamowienie" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
          Jak złożyć <span className="text-primary">zamówienie</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`${step.bgColor} p-8 rounded-xl transition-smooth hover:scale-105 hover:shadow-elegant`}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 gradient-red rounded-full shadow-glow mx-auto">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center">
                  <div className="text-sm font-semibold text-primary mb-2">KROK {step.number}</div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Przycisk wysłania zapytania */}
        <div className="text-center mt-12">
          <a
            href="/request"
            className="inline-block px-8 py-4 gradient-red text-white font-semibold rounded-lg shadow-glow hover:scale-105 transition-smooth"
          >
            Wyślij zapytanie
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderStepsSection;
