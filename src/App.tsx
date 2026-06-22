import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import AISolutions from './components/AISolutions';
import FeaturedProducts from './components/FeaturedProducts';
import DevelopmentProcess from './components/DevelopmentProcess';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Footer from './components/EnhancedFooter';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import ProductsPage from './pages/ProductsPage';

export default function App() {
  const isProductsPage = window.location.pathname === '/products';

  return (
    <div className="bg-bg-base text-slate-100 min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <NavBar />
        {isProductsPage ? (
          <ProductsPage />
        ) : (
          <main>
            <Hero />
            <Services />
            <Products />
            <AISolutions />
            <FeaturedProducts />
            <DevelopmentProcess />
            <WhyChooseUs />
            <Industries />
            <Statistics />
            <About />
            <Contact />
          </main>
        )}
        <Footer />
      </div>
    </div>
  );
}
