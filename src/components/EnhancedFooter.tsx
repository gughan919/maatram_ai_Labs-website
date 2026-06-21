export default function EnhancedFooter() {
  const sections = [
    { title: 'Company', links: ['About', 'Founders', 'Contact'] },
    { title: 'Services', links: ['Custom Software', 'AI Solutions', 'Automation'] },
    { title: 'Resources', links: ['Projects', 'Industries', 'Process'] },
  ];

  return (
    <footer className="py-20 bg-bg-base border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-12">
          <div className="col-span-2 md:col-span-2">
            <span className="font-heading text-xl font-bold text-white tracking-tighter mb-4 block">Maatrm AI Labs</span>
            <p className="text-slate-500 mb-6">
              Freelance IT solutions, custom software, automation, dashboards, and AI systems for small to medium-scale industries.
            </p>
            <p className="text-slate-500">Founders: Raghav Somasundaram PL and Rethick R</p>
          </div>
          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="font-bold text-gold mb-4">{s.title}</h4>
              <ul className="space-y-2">
                {s.links.map((l) => (
                  <li key={l}>
                    <a href="#contact" className="text-slate-400 hover:text-gold">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 text-center text-slate-600">
          <p>&copy; {new Date().getFullYear()} Maatrm AI Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
