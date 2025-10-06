import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import { ArrowLeft } from 'lucide-react';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';

const categoryData = {
  oil: {
    title: 'Масло',
    description: 'Высококачественные моторные масла для всех типов двигателей. Мы предлагаем широкий выбор синтетических, полусинтетических и минеральных масел от ведущих мировых производителей.',
    products: [
      { id: 1, name: 'Castrol EDGE 5W-30', price: '189.99 zł', image: product1 },
      { id: 2, name: 'Mobil 1 0W-40', price: '209.99 zł', image: product2 },
      { id: 3, name: 'Shell Helix Ultra 5W-40', price: '199.99 zł', image: product3 },
      { id: 4, name: 'Total Quartz 9000 5W-40', price: '179.99 zł', image: product4 },
      { id: 5, name: 'Liqui Moly Top Tec 4100 5W-40', price: '219.99 zł', image: product5 },
      { id: 6, name: 'Motul 8100 X-cess 5W-40', price: '229.99 zł', image: product6 },
      { id: 7, name: 'Elf Evolution 900 SXR 5W-30', price: '169.99 zł', image: product1 },
      { id: 8, name: 'Valvoline SynPower 5W-30', price: '159.99 zł', image: product2 },
      { id: 9, name: 'Castrol Magnatec 5W-40', price: '175.99 zł', image: product3 },
      { id: 10, name: 'Mobil Super 3000 X1 5W-40', price: '149.99 zł', image: product4 },
      { id: 11, name: 'Shell Rimula R6 LM 10W-40', price: '239.99 zł', image: product5 },
      { id: 12, name: 'Total Quartz Ineo MC3 5W-30', price: '189.99 zł', image: product6 },
      { id: 13, name: 'Liqui Moly Synthoil 5W-40', price: '199.99 zł', image: product1 },
      { id: 14, name: 'Motul 6100 Save-lite 5W-30', price: '169.99 zł', image: product2 },
      { id: 15, name: 'Elf Evolution Full-Tech 5W-30', price: '179.99 zł', image: product3 },
    ],
  },
  carcare: {
    title: 'Средства по уходу за автомобилем',
    description: 'Профессиональная автокосметика и химия для ухода за автомобилем. Шампуни, воски, полироли, очистители и защитные покрытия для безупречного внешнего вида вашего автомобиля.',
    products: [
      { id: 1, name: 'Автошампунь концентрат 1л', price: '39.99 zł', image: product1 },
      { id: 2, name: 'Воск для кузова', price: '69.99 zł', image: product2 },
      { id: 3, name: 'Полироль для пластика', price: '29.99 zł', image: product3 },
      { id: 4, name: 'Очиститель стекол 500мл', price: '24.99 zł', image: product4 },
      { id: 5, name: 'Антидождь для стекол', price: '49.99 zł', image: product5 },
      { id: 6, name: 'Очиститель дисков', price: '34.99 zł', image: product6 },
      { id: 7, name: 'Полироль для фар', price: '59.99 zł', image: product1 },
      { id: 8, name: 'Чернитель шин', price: '27.99 zł', image: product2 },
      { id: 9, name: 'Очиститель двигателя', price: '44.99 zł', image: product3 },
      { id: 10, name: 'Защитное покрытие керамика', price: '149.99 zł', image: product4 },
      { id: 11, name: 'Салфетки микрофибра набор', price: '39.99 zł', image: product5 },
      { id: 12, name: 'Очиститель салона', price: '32.99 zł', image: product6 },
      { id: 13, name: 'Антистатик для пластика', price: '25.99 zł', image: product1 },
      { id: 14, name: 'Кондиционер для кожи', price: '54.99 zł', image: product2 },
      { id: 15, name: 'Пена для мойки бесконтактная', price: '64.99 zł', image: product3 },
    ],
  },
  filters: {
    title: 'Комплекты фильтров',
    description: 'Полные комплекты фильтров для технического обслуживания автомобиля. Масляные, воздушные, топливные и салонные фильтры высокого качества для всех марок автомобилей.',
    products: [
      { id: 1, name: 'Комплект фильтров VW/Audi', price: '129.99 zł', image: product1 },
      { id: 2, name: 'Комплект фильтров BMW', price: '149.99 zł', image: product2 },
      { id: 3, name: 'Комплект фильтров Mercedes', price: '159.99 zł', image: product3 },
      { id: 4, name: 'Комплект фильтров Ford', price: '99.99 zł', image: product4 },
      { id: 5, name: 'Комплект фильтров Opel', price: '89.99 zł', image: product5 },
      { id: 6, name: 'Комплект фильтров Toyota', price: '119.99 zł', image: product6 },
      { id: 7, name: 'Комплект фильтров Honda', price: '109.99 zł', image: product1 },
      { id: 8, name: 'Комплект фильтров Renault', price: '94.99 zł', image: product2 },
      { id: 9, name: 'Комплект фильтров Peugeot', price: '99.99 zł', image: product3 },
      { id: 10, name: 'Комплект фильтров Skoda', price: '119.99 zł', image: product4 },
      { id: 11, name: 'Комплект фильтров Seat', price: '114.99 zł', image: product5 },
      { id: 12, name: 'Комплект фильтров Mazda', price: '104.99 zł', image: product6 },
      { id: 13, name: 'Комплект фильтров Hyundai', price: '89.99 zł', image: product1 },
      { id: 14, name: 'Комплект фильтров Kia', price: '94.99 zł', image: product2 },
      { id: 15, name: 'Комплект фильтров Nissan', price: '109.99 zł', image: product3 },
    ],
  },
  chemistry: {
    title: 'Автохимия',
    description: 'Профессиональная автомобильная химия для обслуживания и ремонта. Жидкости, смазки, герметики, присадки и специальные составы для эффективного ухода за автомобилем.',
    products: [
      { id: 1, name: 'Антифриз G12+ 5л', price: '79.99 zł', image: product1 },
      { id: 2, name: 'Жидкость тормозная DOT4', price: '29.99 zł', image: product2 },
      { id: 3, name: 'Очиститель карбюратора', price: '24.99 zł', image: product3 },
      { id: 4, name: 'WD-40 многофункциональная смазка', price: '34.99 zł', image: product4 },
      { id: 5, name: 'Герметик для прокладок', price: '39.99 zł', image: product5 },
      { id: 6, name: 'Присадка в двигатель', price: '89.99 zł', image: product6 },
      { id: 7, name: 'Очиститель инжекторов', price: '44.99 zł', image: product1 },
      { id: 8, name: 'Размораживатель замков', price: '19.99 zł', image: product2 },
      { id: 9, name: 'Очиститель DPF-фильтра', price: '99.99 zł', image: product3 },
      { id: 10, name: 'Присадка в топливо', price: '49.99 zł', image: product4 },
      { id: 11, name: 'Жидкость ГУР', price: '34.99 zł', image: product5 },
      { id: 12, name: 'Смазка медная высокотемпературная', price: '29.99 zł', image: product6 },
      { id: 13, name: 'Герметик радиатора', price: '39.99 zł', image: product1 },
      { id: 14, name: 'Очиститель кондиционера', price: '54.99 zł', image: product2 },
      { id: 15, name: 'Антикоррозийная защита днища', price: '119.99 zł', image: product3 },
    ],
  },
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const data = categoryData[category as keyof typeof categoryData];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Категория не найдена</h1>
          <Link to="/" className="text-primary hover:underline">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero section */}
        <section className="py-20 gradient-metallic">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-smooth mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Назад на главную</span>
            </Link>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl">
              {data.description}
            </p>
          </div>
        </section>

        {/* Products grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-xl overflow-hidden shadow-elegant hover:scale-105 transition-smooth"
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
        </section>

        <ContactSection />
      </main>
    </div>
  );
};

export default CategoryPage;
