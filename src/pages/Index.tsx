import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PromotionsSection from '@/components/PromotionsSection';
import OrderStepsSection from '@/components/OrderStepsSection';
import ProductsSection from '@/components/ProductsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PromotionsSection />
        <OrderStepsSection />
        <ProductsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
