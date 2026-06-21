import { Bot, BrainCircuit, Cloud, Code2, Cog, Database, LayoutDashboard, ShieldCheck } from 'lucide-react';
import SectionReveal from './animations/SectionReveal';
import StaggerContainer from './animations/StaggerContainer';
import AnimatedElement from './animations/AnimatedElement';

const services = [
  { title: 'Custom Software Development', icon: Code2, desc: 'Web apps, portals, internal tools, and business systems designed around your exact workflow, approvals, roles, reports, and day-to-day operations.' },
  { title: 'AI Solutions', icon: BrainCircuit, desc: 'AI chatbots, document assistants, recommendation systems, smart search, summaries, and workflow intelligence that help teams work faster with better context.' },
  { title: 'Business Automation', icon: Cog, desc: 'Automation for repetitive tasks such as data entry, billing flows, notifications, approvals, follow-ups, and status updates across departments.' },
  { title: 'Dashboards and Analytics', icon: LayoutDashboard, desc: 'Live dashboards, KPI tracking, project visibility, financial summaries, and operational reports that turn scattered data into decisions.' },
  { title: 'Database and Backend Systems', icon: Database, desc: 'Secure data models, APIs, admin panels, authentication, role-based access, and scalable backend logic for reliable business applications.' },
  { title: 'Cloud Deployment', icon: Cloud, desc: 'Deployment, hosting setup, performance tuning, backups, environment configuration, and practical support after launch.' },
  { title: 'AI Agents and Assistants', icon: Bot, desc: 'Task-focused assistants that can answer business questions, guide customers, collect requirements, and support teams with structured outputs.' },
  { title: 'Security-minded Delivery', icon: ShieldCheck, desc: 'Clean access control, data handling discipline, validation, and maintainable engineering practices suitable for growing organizations.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg-base">
      <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-gold font-bold tracking-widest uppercase text-sm mb-4 text-center">Services</div>
        <h2 className="font-heading text-4xl font-bold text-white text-center mb-6 tracking-tighter">What We Build</h2>
        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16">
          We handle the full software lifecycle from requirement discovery to deployment, with a strong focus on practical systems that reduce manual work and create measurable operational clarity.
        </p>
      </SectionReveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <AnimatedElement key={s.title}>
              <div className="bg-bg-card p-8 rounded-2xl border border-border hover:border-gold transition-all hover:scale-[1.02] group h-full">
                <s.icon className="h-10 w-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-xl font-semibold text-white mb-3">{s.title}</h3>
              </div>
            </AnimatedElement>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
