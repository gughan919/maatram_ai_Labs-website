export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-base">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-gold font-bold tracking-widest uppercase text-sm mb-4 text-center">Contact</div>
        <h2 className="font-heading text-4xl font-bold text-white text-center mb-6 tracking-tighter">
          Let us build the software your business needs
        </h2>
        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16">
          Share your workflow, problem statement, or idea. We can help you turn it into a clear software plan, whether you need a complete system, a dashboard, automation, or an AI-powered solution.
        </p>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div className="bg-bg-card rounded-2xl border border-border p-8">
            <h3 className="font-heading text-2xl font-semibold text-white mb-6">Talk to the founders</h3>
            <div className="space-y-5">
              <div className="rounded-xl border border-border p-5 hover:border-gold transition-all">
                <span className="text-gold text-sm uppercase tracking-widest">Raghav</span>
                <a href="tel:+918110911006" className="block text-white text-xl font-semibold mt-1 hover:text-gold">+91 81109 11006</a>
                <a href="mailto:raghavcricketrls@gmail.com" className="block text-slate-400 mt-2 hover:text-gold">raghavcricketrls@gmail.com</a>
              </div>
              <div className="rounded-xl border border-border p-5 hover:border-gold transition-all">
                <span className="text-gold text-sm uppercase tracking-widest">Rethick</span>
                <a href="tel:+919842296605" className="block text-white text-xl font-semibold mt-1 hover:text-gold">+91 98422 96605</a>
                <a href="mailto:rethick854@gmail.com" className="block text-slate-400 mt-2 hover:text-gold">rethick854@gmail.com</a>
              </div>
              <div className="rounded-xl border border-border p-5 hover:border-gold transition-all">
                <span className="text-gold text-sm uppercase tracking-widest">D Gughan</span>
                <a href="tel:+919629306611" className="block text-white text-xl font-semibold mt-1 hover:text-gold">+91 96293 06611</a>
                <a href="mailto:gughan4912@gmail.com" className="block text-slate-400 mt-2 hover:text-gold">gughan4912@gmail.com</a>
              </div>
            </div>
            <p className="text-slate-500 mt-6">
              We are available for freelance projects, custom software development, AI integrations, and long-term technology support.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="w-full bg-bg-card text-white rounded-lg p-4 border border-border focus:border-gold outline-none" />
              <input type="email" placeholder="Email" className="w-full bg-bg-card text-white rounded-lg p-4 border border-border focus:border-gold outline-none" />
            </div>
            <input type="text" placeholder="Company / Business name" className="w-full bg-bg-card text-white rounded-lg p-4 border border-border focus:border-gold outline-none" />
            <textarea placeholder="Tell us about the software, automation, dashboard, or AI solution you need" rows={6} className="w-full bg-bg-card text-white rounded-lg p-4 border border-border focus:border-gold outline-none"></textarea>
            <button type="submit" className="w-full bg-gradient-to-r from-gold-soft to-gold text-black p-4 rounded-lg font-bold hover:scale-[1.01] transition-all">
              Send Project Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
