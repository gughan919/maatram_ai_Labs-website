import SectionReveal from './animations/SectionReveal';
import StaggerContainer from './animations/StaggerContainer';
import AnimatedElement from './animations/AnimatedElement';

const steps = [
  { title: 'Discover', desc: 'Business Analysis, Requirement Gathering, Research' },
  { title: 'Architect', desc: 'UI/UX Design, AI Planning, System Design' },
  { title: 'Develop', desc: 'Coding, AI Integration, Testing' },
  { title: 'Deploy & Improve', desc: 'Deployment, Monitoring, Continuous Improvement' },
];

export default function DevelopmentProcess() {
  return (
    <section id="process" className="py-28 bg-bg-base">
      <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-gold font-bold tracking-widest uppercase text-sm mb-6 text-center">Process</div>
        <h2 className="font-heading text-4xl font-bold text-white text-center mb-20 tracking-tighter">Our Development Process</h2>
      </SectionReveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid md:grid-cols-4 gap-12 md:gap-8">
          {steps.map((s, i) => (
            <AnimatedElement key={s.title}>
              <div className="relative text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gold-soft to-gold flex items-center justify-center text-black font-bold text-2xl mx-auto mb-8">
                  {i + 1}
                </div>
                <h3 className="font-heading text-2xl font-semibold text-white mb-4">{s.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            </AnimatedElement>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
