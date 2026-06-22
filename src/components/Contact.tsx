import { FormEvent, useState } from 'react';

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isPhone = (value: string) => /^[+\d][\d\s().-]{6,}$/.test(value);

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const contact = String(formData.get('contact') || '').trim();
    const company = String(formData.get('company') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !contact || !company) {
      setStatus('error');
      setStatusMessage('Name, phone number / email, and business name are required.');
      return;
    }

    if (!isEmail(contact) && !isPhone(contact)) {
      setStatus('error');
      setStatusMessage('Enter a valid email address or phone number.');
      return;
    }

    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          contact,
          company,
          message,
          website: formData.get('website'),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send enquiry right now.');
      }

      form.reset();
      setStatus('sent');
      setStatusMessage(result.welcomeMessage || 'Enquiry received. We will contact you soon.');
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'Unable to send enquiry right now.');
    }
  }

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
            </div>
            <p className="text-slate-500 mt-6">
              We are available for product customization, custom software development, AI integrations, and long-term technology support.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid md:grid-cols-2 gap-6">
              <label className="block">
                <span className="block text-sm font-semibold text-slate-300 mb-2">Name <span className="text-gold">*</span></span>
                <input name="name" type="text" placeholder="Your name" required className="w-full bg-bg-card text-white rounded-lg p-4 border border-border focus:border-gold outline-none" />
              </label>
              <label className="block">
                <span className="block text-sm font-semibold text-slate-300 mb-2">Phone Number / Email <span className="text-gold">*</span></span>
                <input name="contact" type="text" placeholder="Phone number or email" required className="w-full bg-bg-card text-white rounded-lg p-4 border border-border focus:border-gold outline-none" />
              </label>
            </div>
            <label className="block">
              <span className="block text-sm font-semibold text-slate-300 mb-2">Business Name <span className="text-gold">*</span></span>
              <input name="company" type="text" placeholder="Company / business name" required className="w-full bg-bg-card text-white rounded-lg p-4 border border-border focus:border-gold outline-none" />
            </label>
            <label className="block">
              <span className="block text-sm font-semibold text-slate-300 mb-2">Description <span className="text-slate-500">(Optional)</span></span>
              <textarea name="message" placeholder="Tell us about the software, automation, dashboard, or AI solution you need" rows={6} className="w-full bg-bg-card text-white rounded-lg p-4 border border-border focus:border-gold outline-none"></textarea>
            </label>
            {statusMessage && (
              <p className={status === 'sent' ? 'text-gold' : 'text-red-300'} role="status">
                {statusMessage}
              </p>
            )}
            <button type="submit" disabled={status === 'sending'} className="w-full bg-gradient-to-r from-gold-soft to-gold text-black p-4 rounded-lg font-bold hover:scale-[1.01] transition-all disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100">
              {status === 'sending' ? 'Sending...' : 'Send Product Enquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
