import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';

// <!-- Sekcja Nasze propozycje -->
// EDYTUJ: Dodaj lub edytuj produkty poniżej
const products = [
  { id: 1, name: 'Klocki hamulcowe', price: '149.99 zł', image: product1 },
  { id: 2, name: 'Filtr powietrza', price: '79.99 zł', image: product2 },
  { id: 3, name: 'Świece zapłonowe', price: '89.99 zł', image: product3 },
  { id: 4, name: 'Amortyzator', price: '299.99 zł', image: product4 },
  { id: 5, name: 'Pasek rozrządu', price: '129.99 zł', image: product5 },
  { id: 6, name: 'Chłodnica', price: '449.99 zł', image: product6 },
  { id: 7, name: 'Tarcze hamulcowe', price: '199.99 zł', image: product1 },
  { id: 8, name: 'Filtr oleju', price: '49.99 zł', image: product2 },
  { id: 9, name: 'Wtryskiwacz paliwa', price: '349.99 zł', image: product3 },
  { id: 10, name: 'Sprężyna zawieszenia', price: '179.99 zł', image: product4 },
  { id: 11, name: 'Pompa wody', price: '259.99 zł', image: product5 },
  { id: 12, name: 'Alternator', price: '599.99 zł', image: product6 },
];

const ProductsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="propozycje" className="py-20 gradient-metallic">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
          Nasze <span className="text-primary">propozycje</span>
        </h2>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-smooth shadow-elegant"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-smooth shadow-elegant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Product carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-64 bg-card rounded-xl overflow-hidden shadow-elegant hover:scale-105 transition-smooth"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-primary">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
