import { useEffect, useState } from 'react';
import promo1 from '@/assets/promo-1.jpg';
import promo2 from '@/assets/promo-2.jpg';
import promo3 from '@/assets/promo-3.jpg';
import promo4 from '@/assets/promo-4.jpg';
import promo5 from '@/assets/promo-5.jpg';
import promo6 from '@/assets/promo-6.jpg';

// <!-- Sekcja Nasze promocje -->
// EDYTUJ: Możesz dodać więcej promocji lub zmienić istniejące
const promotions = [
  {
    id: 1,
    image: promo1,
    title: 'Promocja na klocki hamulcowe',
    description: 'Do -30% na wybrane zestawy',
  },
  {
    id: 2,
    image: promo2,
    title: 'Oleje silnikowe w super cenach',
    description: 'Sprawdź naszą ofertę olejów',
  },
  {
    id: 3,
    image: promo3,
    title: 'Filtry powietrza i oleju',
    description: 'Najwyższa jakość w promocji',
  },
  {
    id: 4,
    image: promo4,
    title: 'Zawieszenie samochodowe',
    description: 'Amortyzatory i sprężyny -20%',
  },
  {
    id: 5,
    image: promo5,
    title: 'Oświetlenie LED',
    description: 'Nowoczesne reflektory w promocji',
  },
  {
    id: 6,
    image: promo6,
    title: 'Akumulatory samochodowe',
    description: 'Wybrane modele w super cenach',
  },
];

const PromotionsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promotions.length);
    }, 6000); // 6 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="promocje" className="py-20 gradient-metallic">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
          Nasze <span className="text-primary">promocje</span>
        </h2>

        {/* Auto-carousel */}
        <div className="relative overflow-hidden rounded-xl shadow-elegant">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {promotions.map((promo) => (
              <div key={promo.id} className="w-full flex-shrink-0">
                <div className="relative h-[400px] lg:h-[500px]">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end">
                    <div className="p-8 lg:p-12">
                      <h3 className="text-3xl lg:text-4xl font-bold mb-2">{promo.title}</h3>
                      <p className="text-xl text-foreground/80">{promo.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-smooth ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
