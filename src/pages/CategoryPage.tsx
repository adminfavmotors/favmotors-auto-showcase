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
    title: 'Oleje',
    description: 'Wysokiej jakości oleje silnikowe dla wszystkich typów silników. Oferujemy szeroki wybór olejów syntetycznych, półsyntetycznych i mineralnych od wiodących światowych producentów.',
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
    title: 'Produkty do pielęgnacji samochodu',
    description: 'Profesjonalna kosmetyka samochodowa i chemia do pielęgnacji pojazdu. Szampony, woski, politury, środki czyszczące i powłoki ochronne dla nieskazitelnego wyglądu Twojego samochodu.',
    products: [
      { id: 1, name: 'Szampon samochodowy koncentrat 1l', price: '39.99 zł', image: product1 },
      { id: 2, name: 'Wosk do karoserii', price: '69.99 zł', image: product2 },
      { id: 3, name: 'Politura do plastiku', price: '29.99 zł', image: product3 },
      { id: 4, name: 'Płyn do szyb 500ml', price: '24.99 zł', image: product4 },
      { id: 5, name: 'Preparat hydrofobowy', price: '49.99 zł', image: product5 },
      { id: 6, name: 'Środek do mycia felg', price: '34.99 zł', image: product6 },
      { id: 7, name: 'Pasta do reflektorów', price: '59.99 zł', image: product1 },
      { id: 8, name: 'Nabłyszczacz do opon', price: '27.99 zł', image: product2 },
      { id: 9, name: 'Środek do czyszczenia silnika', price: '44.99 zł', image: product3 },
      { id: 10, name: 'Powłoka ceramiczna', price: '149.99 zł', image: product4 },
      { id: 11, name: 'Ściereczki mikrofibra zestaw', price: '39.99 zł', image: product5 },
      { id: 12, name: 'Środek do czyszczenia wnętrza', price: '32.99 zł', image: product6 },
      { id: 13, name: 'Antystatyk do plastiku', price: '25.99 zł', image: product1 },
      { id: 14, name: 'Odżywka do skóry', price: '54.99 zł', image: product2 },
      { id: 15, name: 'Piana aktywna do mycia', price: '64.99 zł', image: product3 },
    ],
  },
  filters: {
    title: 'Zestawy filtrów',
    description: 'Komplety filtrów do przeglądu technicznego. Filtry oleju, powietrza, paliwa i kabinowe najwyższej jakości dla wszystkich marek samochodów.',
    products: [
      { id: 1, name: 'Zestaw filtrów VW/Audi', price: '129.99 zł', image: product1 },
      { id: 2, name: 'Zestaw filtrów BMW', price: '149.99 zł', image: product2 },
      { id: 3, name: 'Zestaw filtrów Mercedes', price: '159.99 zł', image: product3 },
      { id: 4, name: 'Zestaw filtrów Ford', price: '99.99 zł', image: product4 },
      { id: 5, name: 'Zestaw filtrów Opel', price: '89.99 zł', image: product5 },
      { id: 6, name: 'Zestaw filtrów Toyota', price: '119.99 zł', image: product6 },
      { id: 7, name: 'Zestaw filtrów Honda', price: '109.99 zł', image: product1 },
      { id: 8, name: 'Zestaw filtrów Renault', price: '94.99 zł', image: product2 },
      { id: 9, name: 'Zestaw filtrów Peugeot', price: '99.99 zł', image: product3 },
      { id: 10, name: 'Zestaw filtrów Skoda', price: '119.99 zł', image: product4 },
      { id: 11, name: 'Zestaw filtrów Seat', price: '114.99 zł', image: product5 },
      { id: 12, name: 'Zestaw filtrów Mazda', price: '104.99 zł', image: product6 },
      { id: 13, name: 'Zestaw filtrów Hyundai', price: '89.99 zł', image: product1 },
      { id: 14, name: 'Zestaw filtrów Kia', price: '94.99 zł', image: product2 },
      { id: 15, name: 'Zestaw filtrów Nissan', price: '109.99 zł', image: product3 },
    ],
  },
  chemistry: {
    title: 'Chemia samochodowa',
    description: 'Profesjonalna chemia samochodowa do serwisu i napraw. Płyny, smary, uszczelniacze, dodatki i specjalne preparaty do skutecznej pielęgnacji samochodu.',
    products: [
      { id: 1, name: 'Płyn chłodniczy G12+ 5l', price: '79.99 zł', image: product1 },
      { id: 2, name: 'Płyn hamulcowy DOT4', price: '29.99 zł', image: product2 },
      { id: 3, name: 'Środek do czyszczenia gaźnika', price: '24.99 zł', image: product3 },
      { id: 4, name: 'WD-40 preparat wielofunkcyjny', price: '34.99 zł', image: product4 },
      { id: 5, name: 'Uszczelniacz do uszczelek', price: '39.99 zł', image: product5 },
      { id: 6, name: 'Dodatek do silnika', price: '89.99 zł', image: product6 },
      { id: 7, name: 'Środek do czyszczenia wtryskiwaczy', price: '44.99 zł', image: product1 },
      { id: 8, name: 'Rozmrażacz do zamków', price: '19.99 zł', image: product2 },
      { id: 9, name: 'Środek do czyszczenia DPF', price: '99.99 zł', image: product3 },
      { id: 10, name: 'Dodatek do paliwa', price: '49.99 zł', image: product4 },
      { id: 11, name: 'Olej do wspomagania', price: '34.99 zł', image: product5 },
      { id: 12, name: 'Pasta miedziana wysokotemperaturowa', price: '29.99 zł', image: product6 },
      { id: 13, name: 'Uszczelniacz chłodnicy', price: '39.99 zł', image: product1 },
      { id: 14, name: 'Środek do czyszczenia klimatyzacji', price: '54.99 zł', image: product2 },
      { id: 15, name: 'Ochrona antykorozyjna podwozia', price: '119.99 zł', image: product3 },
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
          <h1 className="text-4xl font-bold mb-4">Kategoria nie znaleziona</h1>
          <Link to="/" className="text-primary hover:underline">
            Powrót do strony głównej
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
              <span>Powrót do strony głównej</span>
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
