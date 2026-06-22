import { Search, Brain, Zap, MessageSquare } from 'lucide-react';
import SectionReveal from './animations/SectionReveal';
import StaggerContainer from './animations/StaggerContainer';
import AnimatedElement from './animations/AnimatedElement';

const solutions = [
  { title: 'Knowledge Intelligence', icon: Search, items: ['AI search across documents', 'Internal knowledge bases', 'Fast answers from business data'] },
  { title: 'Conversational Interfaces', icon: MessageSquare, items: ['Customer support chatbots', 'Lead collection assistants', 'Team-facing help systems'] },
  { title: 'Decision Intelligence', icon: Brain, items: ['AI summaries and insights', 'Trend and KPI interpretation', 'Management-ready reports'] },
  { title: 'Process Automation', icon: Zap, items: ['Approval workflows', 'Smart reminders and updates', 'Reduced manual coordination'] },
];

export default function AISolutions() {
  return (
    <section id="ai-solutions" className="py-24 bg-bg-alt border-y border-border">
      <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-gold font-bold tracking-widest uppercase text-sm mb-4 text-center">AI Capabilities</div>
        <h2 className="font-heading text-4xl font-bold text-white text-center mb-6 tracking-tighter">
          AI that supports people, not replaces process
        </h2>
        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16">
          We build AI-powered systems that understand your business, automate repetitive work, and help you make faster, smarter decisions.
        </p>
      </SectionReveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((s) => (
            <AnimatedElement key={s.title}>
              <div className="bg-bg-card p-8 rounded-2xl border border-border hover:border-gold transition-all shadow-lg hover:shadow-gold/10 group h-full">
                <s.icon className="h-12 w-12 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-xl font-semibold text-white mb-4">{s.title}</h3>
                <ul className="space-y-2 text-slate-400">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gold">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
