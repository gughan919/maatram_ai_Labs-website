import { motion, animate, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

const stats = [
  { value: '2', label: 'Projects Delivered' },
  { value: '2', label: 'Industries Served' },
  { value: '99.9%', label: 'System Availability' },
  { value: '95%', label: 'Client Satisfaction' },
];

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract number and suffix (like '%')
  const match = value.match(/^([\d.]+)(%|\+)?$/);
  
  useEffect(() => {
    if (!isInView || !ref.current || !match) return;
    
    const targetNum = parseFloat(match[1]);
    const suffix = match[2] || '';
    const node = ref.current;
    
    const controls = animate(0, targetNum, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate(latest) {
        const formatted = targetNum % 1 === 0 
          ? Math.floor(latest).toString() 
          : latest.toFixed(1);
        node.textContent = formatted + suffix;
      }
    });
    
    return () => controls.stop();
  }, [isInView, match]);

  return <span ref={ref}>{value}</span>;
}

export default function Statistics() {
  return (
    <section className="py-16 bg-bg-base border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:border-r border-border last:border-none"
            >
              <div className="text-5xl md:text-6xl font-bold text-gold mb-3">
                <CountUp value={s.value} />
              </div>
              <div className="text-slate-400 font-heading tracking-wider text-lg">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
