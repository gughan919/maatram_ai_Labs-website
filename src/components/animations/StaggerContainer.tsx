import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export default function StaggerContainer({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
