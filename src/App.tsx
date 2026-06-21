import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import AISolutions from './components/AISolutions';
import FeaturedProjects from './components/FeaturedProjects';
import DevelopmentProcess from './components/DevelopmentProcess';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Footer from './components/EnhancedFooter';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';

export default function App() {
  return (
    <div className="bg-bg-base text-slate-100 min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <NavBar />
        <main>
          <Hero />
          <About />
          <Services />
          <Products />
          <AISolutions />
          <FeaturedProjects />
          <DevelopmentProcess />
          <WhyChooseUs />
          <Industries />
          <Statistics />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
