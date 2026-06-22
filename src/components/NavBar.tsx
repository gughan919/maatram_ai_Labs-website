import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Solutions', href: '/#solution-areas' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/#industries' },
  { label: 'About', href: '/#about' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="navbar" className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="font-heading text-xl font-bold text-white tracking-tighter">Maatrm AI Labs</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {links.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-300 hover:text-gold px-3 py-2 rounded-md font-medium transition-colors border-b-2 border-transparent hover:border-gold">
                  {item.label}
                </a>
              ))}
              <a href="/#contact" className="bg-gradient-to-r from-gold-soft to-gold text-black px-6 py-2 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold" aria-label="Toggle navigation">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-bg-alt border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[...links, { label: 'Contact', href: '/#contact' }].map((item) => (
              <a key={item.label} href={item.href} className="text-slate-300 hover:text-gold block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
