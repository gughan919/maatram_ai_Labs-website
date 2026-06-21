import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-base">
      <div className="absolute inset-0 z-0 opacity-30 bg-[linear-gradient(45deg,var(--color-border)_1px,transparent_1px),linear-gradient(-45deg,var(--color-border)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
        >
          Build the Future with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-soft to-gold-bronze">
            Maatrm AI Labs
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-slate-300 max-w-3xl mx-auto mb-12"
        >
          We design intelligent AI systems, automation platforms, dashboards, and custom software that transform how businesses work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <a href="#contact" className="bg-gradient-to-r from-gold-soft to-gold text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            Book a Demo
          </a>
          <a href="#services" className="bg-transparent border border-gold text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-gold/10 transition-all">
            Explore Solutions
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent animate-gold-line"></div>
    </section>
  );
}
