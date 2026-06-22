const industries = [
  'Any Industry',
  'Manufacturing',
  'Construction',
  'Retail',
  'Education',
  'Schools',
  'Healthcare',
  'Clinics',
  'Service Businesses',
  'Logistics',
  'Unique Operations',
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-bg-alt border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Industries</div>
        <h2 className="font-heading text-4xl font-bold text-white mb-6 tracking-tighter">Industries We Serve</h2>
        <p className="text-slate-400 max-w-4xl mx-auto mb-16">
          We do not limit innovation to one industry. Whether you run a construction company, retail store, service business, school, clinic, logistics firm, or something so unique it needs its own category, we can build a tailored AI solution for it. We have not met an operation too specific to understand, only a few that needed better labels.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind) => (
            <span key={ind} className="bg-bg-card text-slate-300 px-8 py-3 rounded-full font-medium border border-border hover:border-gold hover:text-white transition-all">
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
