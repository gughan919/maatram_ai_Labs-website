const industries = [
  'Manufacturing',
  'Construction',
  'Retail',
  'Education',
  'Finance',
  'Healthcare',
  'Service Businesses',
  'Trading',
  'Logistics',
  'Real Estate',
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-bg-alt border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Industries</div>
        <h2 className="font-heading text-4xl font-bold text-white mb-6 tracking-tighter">Industries We Serve</h2>
        <p className="text-slate-400 max-w-3xl mx-auto mb-16">
          Our solutions are suitable for businesses that need better control over operations, data, customers, projects, billing, teams, documents, and daily reporting.
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
