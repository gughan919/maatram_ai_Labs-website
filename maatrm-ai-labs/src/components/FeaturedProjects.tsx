import SectionReveal from './animations/SectionReveal';
import StaggerContainer from './animations/StaggerContainer';
import AnimatedElement from './animations/AnimatedElement';

const projects = [
  {
    title: 'Invoice Billing System',
    category: 'Small-scale Industry',
    desc: 'A streamlined billing platform designed for a small-scale industry to create invoices faster, maintain customer and product records, reduce handwritten billing errors, and keep transaction information organized for daily business use.',
    tech: ['Billing', 'Records', 'Reports', 'Automation'],
  },
  {
    title: 'Civil Project Management System',
    category: 'Construction and Engineering',
    desc: 'A complete management system for civil engineers handling multiple projects at the same time, with live project updates, task visibility, status tracking, centralized records, and better coordination between office and site activity.',
    tech: ['Live Updates', 'Project Tracking', 'Team Roles', 'Dashboards'],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-bg-base">
      <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-gold font-bold tracking-widest uppercase text-sm mb-4 text-center">Projects</div>
        <h2 className="font-heading text-4xl font-bold text-white text-center mb-6 tracking-tighter">Our Works</h2>
        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16">
          These projects represent the type of practical business software we build: systems that remove confusion, improve tracking, and give teams a single reliable place to manage work.
        </p>
      </SectionReveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <AnimatedElement key={p.title}>
              <div className="bg-bg-card rounded-2xl border border-border overflow-hidden hover:border-gold transition-all h-full">
                <div className="p-8">
                  <span className="text-gold text-sm font-semibold uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-heading text-2xl font-bold text-white mt-2 mb-4">{p.title}</h3>
                  <p className="text-slate-400 mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span key={t} className="bg-bg-base px-3 py-1 rounded-full text-xs text-slate-300 border border-border">{t}</span>
                    ))}
                  </div>
                  <a href="#contact" className="text-gold hover:text-white font-medium">Build something similar</a>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
