import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import dashboardImg from '../assets/dashboard.png';
import createInvoiceImg from '../assets/create_invoice.png';
import viewBillsImg from '../assets/view_bills.png';
import customersImg from '../assets/customers.png';
import productsImg from '../assets/products.png';
import statementImg from '../assets/statement.png';

const slides = [
  { id: 'dashboard', title: 'Dashboard', image: dashboardImg },
  { id: 'create_invoice', title: 'Create Invoice', image: createInvoiceImg },
  { id: 'view_bills', title: 'View Bills', image: viewBillsImg },
  { id: 'customers', title: 'Customers', image: customersImg },
  { id: 'products', title: 'Products', image: productsImg },
  { id: 'statement', title: 'Statement', image: statementImg },
];

export default function BillingSystemCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Calculate visible cards dynamically based on container/viewport width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCards(1);
      } else if (width < 1280) {
        setVisibleCards(2);
      } else {
        // Desktop has layout split (2 columns)
        // If screen is very large, we can fit 3 cards in the left column.
        setVisibleCards(width >= 1536 ? 3 : 2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, slides.length - visibleCards);

  // Cap index if resizing makes current index out of bounds
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [visibleCards, maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (isHovered || maxIndex === 0) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex, handleNext]);

  // Touch handlers for swipe support on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum distance for swipe

    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="relative w-full overflow-hidden group select-none py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Track Wrapper */}
      <div className="overflow-hidden w-full rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
        >
          {slides.map((slide) => (
            <div 
              key={slide.id} 
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / visibleCards}%` }}
            >
              <div className="bg-[#111111] rounded-xl border border-border/80 hover:border-gold/80 shadow-[0_0_15px_rgba(212,175,55,0.04)] hover:shadow-[0_0_25px_rgba(212,175,55,0.18)] transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Screenshot Area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40 border-b border-border/40">
                  <img 
                    src={slide.image} 
                    alt={`${slide.title} view`} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Label Area */}
                <div className="p-3 bg-bg-card flex items-center justify-between mt-auto">
                  <span className="font-heading text-sm font-semibold text-white tracking-tight">{slide.title}</span>
                  <span className="text-[10px] text-gold/80 font-bold uppercase tracking-widest px-2 py-0.5 rounded border border-gold/20 bg-gold/5">
                    Live View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {maxIndex > 0 && (
        <>
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black/95 text-white hover:text-gold border border-border hover:border-gold/50 p-2.5 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 shadow-lg cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black/95 text-white hover:text-gold border border-border hover:border-gold/50 p-2.5 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 shadow-lg cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {maxIndex > 0 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-gold' : 'w-2 bg-slate-600 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
