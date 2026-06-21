const products = [
  { name: 'Operational Software', desc: 'Custom systems for billing, inventory, project tracking, customer records, employee coordination, approvals, reporting, and multi-user collaboration.' },
  { name: 'AI-enabled Workflows', desc: 'AI features integrated into business tools, including chat assistants, automated summaries, smart recommendations, document understanding, and natural language search.' },
  { name: 'Digital Transformation', desc: 'A complete path from spreadsheets and paper-based tracking to secure cloud software with live updates, role-based access, and dependable data visibility.' },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-gold font-bold tracking-widest uppercase text-sm mb-4 text-center">Solution Areas</div>
        <h2 className="font-heading text-4xl font-bold text-white text-center mb-6 tracking-tighter">
          Software tailored to your business model
        </h2>
        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16">
          Every company has a different process, team structure, and reporting need. We create custom systems that fit those differences instead of making your business adjust to rigid software.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.name} className="bg-bg-card p-8 rounded-2xl border border-border hover:border-gold transition-all hover:scale-[1.02]">
              <h3 className="font-heading text-2xl font-bold text-gold mb-4">{p.name}</h3>
              <p className="text-slate-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
