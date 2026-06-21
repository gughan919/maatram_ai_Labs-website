export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-alt border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-gold font-bold tracking-widest uppercase text-sm mb-4">About Us</div>
            <h2 className="font-heading text-4xl font-bold text-white tracking-tighter mb-6">
              A founder-led technology partner for SMEs
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Maatrm AI Labs is a freelance IT solutions studio founded by Raghav Somasundaram PL and Rethick R. We work closely with business owners, operations teams, and industry professionals to convert manual processes into clean, reliable, and easy-to-use digital systems.
            </p>

          </div>
          <div className="bg-bg-card p-8 rounded-2xl border border-border">
            <h3 className="font-heading text-2xl font-semibold text-white mb-4">Founders</h3>
            <div className="space-y-5">
              <div>
                <p className="text-white font-semibold">Raghav Somasundaram PL</p>
                <p className="text-slate-400">Founder - Freelance technology solutions</p>
              </div>
              <div>
                <p className="text-white font-semibold">Rethick R</p>
                <p className="text-slate-400">Founder - Custom software and AI systems</p>
              </div>
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <h4 className="font-heading text-xl font-semibold text-gold mb-3">Our Mission</h4>
              <p className="text-slate-400">
                To make professional-grade software and AI accessible to small and medium-scale industries through practical, scalable, and well-supported technology solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
