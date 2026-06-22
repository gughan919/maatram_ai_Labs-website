import { motion, animate, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

const stats = [
  { value: '2', label: 'Products Delivered' },
  { value: '2', label: 'Industries Served' },
  { value: '99.9%', label: 'System Availability' },
  { value: '95%', label: 'Client Satisfaction' },
];

const reviews = [
  {
    logo: 'CC',
    customer: 'Crestline Constructions',
    product: 'Civil Project Management System',
    review: 'The product gave our site and office teams one place to track updates, tasks, and records. It made daily coordination clearer and easier to review.',
  },
  {
    logo: 'RB',
    customer: 'Retail Billing Co.',
    product: 'Invoice Billing System',
    review: 'Billing became faster and cleaner, with customer and product records available whenever we need them. This is sample review content ready to replace with a real testimonial.',
  },
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
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {reviews.map((review) => (
            <div key={review.customer} className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-gold transition-all">
              <div className="flex items-start gap-4 mb-5">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-gold-soft to-gold text-black font-bold flex items-center justify-center shrink-0">
                  {review.logo}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white">{review.customer}</h3>
                  <p className="text-gold text-sm mt-1">{review.product}</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
