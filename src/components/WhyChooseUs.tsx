const features = [
  'Founder-led communication from idea to launch',
  'Custom-built systems instead of generic templates',
  'Freelance flexibility with professional delivery discipline',
  'Strong focus on small and medium-scale industry needs',
  'AI, automation, dashboards, and core software in one team',
  'Clean user experience for non-technical business users',
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-gold font-bold tracking-widest uppercase text-sm mb-4 text-center">Advantages</div>
        <h2 className="font-heading text-4xl font-bold text-white text-center mb-6 tracking-tighter">Why Choose Maatrm AI Labs?</h2>
        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16">
          We combine the speed of a freelance team with the seriousness of a long-term technology partner, making each project practical, maintainable, and aligned with business priorities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f} className="bg-bg-card p-8 rounded-xl border border-border text-slate-200 hover:border-gold transition-all">
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
